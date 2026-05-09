const http = require("node:http");
const fs = require("node:fs/promises");
const path = require("node:path");
const { URL } = require("node:url");

const rootDir = __dirname;
const dataDir = path.join(rootDir, "data");
const dbPath = path.join(dataDir, "sgi-db.json");
const port = Number(process.env.PORT || process.argv[process.argv.indexOf("--port") + 1]) || 3000;

const defaultUsageMetrics = {
  integrationOpens: {},
  ownerAccesses: {},
  typeAccesses: {},
  highlightViews: {},
  totalIntegrationOpens: 0,
  totalEmbeddedOpens: 0,
  totalExternalOpens: 0,
  totalHighlightViews: 0,
  updatedAt: null,
};

const defaultDb = {
  version: 1,
  epiRecords: [],
  auditRecords: [],
  usageMetrics: defaultUsageMetrics,
  auditEvents: [],
  updatedAt: null,
};

const mimeTypes = {
  ".html": "text/html; charset=utf-8",
  ".css": "text/css; charset=utf-8",
  ".js": "text/javascript; charset=utf-8",
  ".json": "application/json; charset=utf-8",
  ".png": "image/png",
  ".jpg": "image/jpeg",
  ".jpeg": "image/jpeg",
  ".svg": "image/svg+xml",
  ".ico": "image/x-icon",
};

function jsonResponse(res, statusCode, payload) {
  res.writeHead(statusCode, {
    "content-type": "application/json; charset=utf-8",
    "cache-control": "no-store",
  });
  res.end(JSON.stringify(payload));
}

function normalizeDb(value) {
  return {
    ...defaultDb,
    ...(value && typeof value === "object" ? value : {}),
    epiRecords: Array.isArray(value?.epiRecords) ? value.epiRecords : [],
    auditRecords: Array.isArray(value?.auditRecords) ? value.auditRecords : [],
    usageMetrics: {
      ...defaultUsageMetrics,
      ...(value?.usageMetrics && typeof value.usageMetrics === "object" ? value.usageMetrics : {}),
    },
    auditEvents: Array.isArray(value?.auditEvents) ? value.auditEvents : [],
  };
}

async function ensureDb() {
  await fs.mkdir(dataDir, { recursive: true });

  try {
    const content = await fs.readFile(dbPath, "utf8");
    return normalizeDb(JSON.parse(content));
  } catch (error) {
    if (error.code !== "ENOENT") {
      console.warn("Banco local inválido; recriando base inicial.", error.message);
    }

    await writeDb(defaultDb);
    return normalizeDb(defaultDb);
  }
}

async function writeDb(nextDb) {
  const db = normalizeDb(nextDb);
  db.updatedAt = new Date().toISOString();
  await fs.mkdir(dataDir, { recursive: true });
  await fs.writeFile(dbPath, `${JSON.stringify(db, null, 2)}\n`, "utf8");
  return db;
}

async function readRequestBody(req) {
  const chunks = [];

  for await (const chunk of req) {
    chunks.push(chunk);
    if (Buffer.concat(chunks).length > 1_000_000) {
      throw new Error("Payload muito grande.");
    }
  }

  const raw = Buffer.concat(chunks).toString("utf8");
  return raw ? JSON.parse(raw) : {};
}

function isSafeStaticPath(filePath) {
  const relative = path.relative(rootDir, filePath);
  return relative && !relative.startsWith("..") && !path.isAbsolute(relative);
}

async function serveStatic(req, res, url) {
  const pathname = decodeURIComponent(url.pathname === "/" ? "/index.html" : url.pathname);
  const filePath = path.join(rootDir, pathname);

  if (!isSafeStaticPath(filePath)) {
    res.writeHead(403);
    res.end("Acesso negado.");
    return;
  }

  try {
    const stat = await fs.stat(filePath);
    if (!stat.isFile()) {
      res.writeHead(404);
      res.end("Arquivo não encontrado.");
      return;
    }

    const content = await fs.readFile(filePath);
    const contentType = mimeTypes[path.extname(filePath).toLowerCase()] || "application/octet-stream";
    res.writeHead(200, {
      "content-type": contentType,
      "cache-control": contentType.startsWith("text/html") ? "no-store" : "public, max-age=300",
    });
    res.end(content);
  } catch (error) {
    res.writeHead(error.code === "ENOENT" ? 404 : 500);
    res.end(error.code === "ENOENT" ? "Arquivo não encontrado." : "Erro interno.");
  }
}

async function handleApi(req, res, url) {
  const db = await ensureDb();

  if (req.method === "GET" && url.pathname === "/api/health") {
    jsonResponse(res, 200, { ok: true, mode: "server", updatedAt: db.updatedAt });
    return;
  }

  if (req.method === "GET" && url.pathname === "/api/state") {
    jsonResponse(res, 200, db);
    return;
  }

  if (req.method === "PUT" && url.pathname === "/api/epi") {
    const body = await readRequestBody(req);
    const epiRecords = Array.isArray(body.epiRecords) ? body.epiRecords : [];
    const nextDb = await writeDb({
      ...db,
      epiRecords,
      auditEvents: [
        { type: "epi.sync", count: epiRecords.length, at: new Date().toISOString() },
        ...db.auditEvents,
      ].slice(0, 200),
    });
    jsonResponse(res, 200, { ok: true, epiRecords: nextDb.epiRecords, updatedAt: nextDb.updatedAt });
    return;
  }

  if (req.method === "PUT" && url.pathname === "/api/audits") {
    const body = await readRequestBody(req);
    const auditRecords = Array.isArray(body.auditRecords) ? body.auditRecords : [];
    const nextDb = await writeDb({
      ...db,
      auditRecords,
      auditEvents: [
        { type: "audits.sync", count: auditRecords.length, at: new Date().toISOString() },
        ...db.auditEvents,
      ].slice(0, 200),
    });
    jsonResponse(res, 200, { ok: true, auditRecords: nextDb.auditRecords, updatedAt: nextDb.updatedAt });
    return;
  }

  if (req.method === "PUT" && url.pathname === "/api/usage") {
    const body = await readRequestBody(req);
    const usageMetrics = body.usageMetrics && typeof body.usageMetrics === "object" ? body.usageMetrics : defaultUsageMetrics;
    const nextDb = await writeDb({
      ...db,
      usageMetrics: { ...defaultUsageMetrics, ...usageMetrics },
      auditEvents: [
        { type: "usage.sync", at: new Date().toISOString() },
        ...db.auditEvents,
      ].slice(0, 200),
    });
    jsonResponse(res, 200, { ok: true, usageMetrics: nextDb.usageMetrics, updatedAt: nextDb.updatedAt });
    return;
  }

  jsonResponse(res, 404, { ok: false, error: "Endpoint não encontrado." });
}

const server = http.createServer(async (req, res) => {
  try {
    const url = new URL(req.url, `http://${req.headers.host || "localhost"}`);

    if (url.pathname.startsWith("/api/")) {
      await handleApi(req, res, url);
      return;
    }

    await serveStatic(req, res, url);
  } catch (error) {
    jsonResponse(res, 500, { ok: false, error: error.message || "Erro interno." });
  }
});

server.listen(port, () => {
  console.log(`SGI OS rodando em http://localhost:${port}`);
});
