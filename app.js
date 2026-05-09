const modules = [
  {
    tag: "Core",
    titleHtml: "Segurança do Trabalho",
    textHtml: "Rotina operacional com inspeções, DDS, APR, bloqueio, EPI e suporte.",
    items: ["Inspeção N3", "DDS", "Solicitação de EPI"],
    href: "#integracoes",
  },
  {
    tag: "Comunicação",
    titleHtml: "Campanhas e Comunicados",
    textHtml: "Destaques do mês, comunicados recentes e materiais para engajamento em campo.",
    items: ["Campanha do mês", "Comunicados", "Materiais de apoio"],
    href: "#campanhas",
  },
  {
    tag: "Mídia",
    titleHtml: "Vídeos, Treinamentos e DDS",
    textHtml: "Conteúdos audiovisuais para abertura, reciclagem, DDS e liberações críticas.",
    items: ["Vídeos em destaque", "Treinamentos", "DDS orientado"],
    href: "#campanhas",
  },
  {
    tag: "Gestão",
    titleHtml: "Indicadores e Performance",
    textHtml: "Camada executiva para metas, ranking, unidades e tomada de decisão.",
    items: ["KPIs", "Ranking N3", "Unidades"],
    href: "#indicadores",
  },
  {
    tag: "Documentos",
    titleHtml: "Biblioteca SESMT",
    textHtml: "Procedimentos, evidências, formulários e documentos oficiais do SGI.",
    items: ["SharePoint", "Procedimentos", "Evidências"],
    href: "#integracoes",
  },
  {
    tag: "EPI",
    titleHtml: "Ficha de EPI Integrada",
    textHtml: "Controle de entrega, validade, vencimento e rastreabilidade por colaborador.",
    items: ["Entrega", "Validade", "Alertas de vencimento"],
    href: "#epi",
  },
  {
    tag: "Auditoria",
    titleHtml: "Pendências e evidências",
    textHtml: "Fila de ações, responsáveis, prazos e status para acompanhamento de auditoria.",
    items: ["Plano de ação", "Prazos", "Responsáveis"],
    href: "#auditoria",
  },
];

const integrations = [
  {
    title: "VES Vale",
    titleHtml: "VES Vale",
    descriptionHtml: "Formulário Vale de solicitação de acesso ao sistema de educação - VES.",
    type: "Acesso",
    owner: "Vale",
    status: "Ativo",
    href: "https://vale-forms.valeglobal.net/public?id=%2FGCDd9v%2B3IvFnie%2F2yYRKg%3D%3D&lang=pt-BR",
    searchText: "ves vale acesso formulario sistema educacao institucional",
  },
  {
    title: "IRIS Vale",
    titleHtml: "IRIS Vale",
    descriptionHtml: "Acesso Vale para registro de desvios N3 e inspeções.",
    type: "Sistema",
    owner: "Vale",
    status: "Ativo",
    href: "https://iris.valeglobal.net/home",
    searchText: "iris vale desvios n3 inspecoes registro sistema",
  },
  {
    title: "Documentações SESMT",
    titleHtml: "Documentações SESMT",
    descriptionHtml: "Biblioteca SharePoint com documentos institucionais da área.",
    type: "Biblioteca",
    owner: "SESMT",
    status: "Ativo",
    href: "https://xcmgbrasilindustria.sharepoint.com/sites/SGI-DOCUMENTAOSESMTXCMG/Documentos%20Compartilhados/Forms/AllItems.aspx?viewid=8817a399%2D4028%2D4a45%2Db3fc%2D1c0176611a0e&as=json",
    searchText: "documentações sesmt sharepoint biblioteca documentos institucional",
  },
  {
    title: "Inspeção N3",
    titleHtml: "Inspeção N3",
    descriptionHtml: "Registro operacional das inspeções críticas da operação.",
    type: "Formulário",
    owner: "Segurança",
    status: "Ativo",
    href: "https://forms.office.com/r/uftekVRsSy?origin=lprLink",
    searchText: "inspeção n3 formulário segurança operação registro",
  },
  {
    title: "Registro N3 - XCMG 01",
    titleHtml: "Registro N3 - XCMG 01",
    descriptionHtml: "Formulário Microsoft para registro de N3 da operação XCMG.",
    type: "Formulário",
    owner: "XCMG",
    status: "Ativo",
    href: "https://forms.cloud.microsoft/r/5T6140MTkc?origin=lprLink",
    searchText: "registro n3 xcmg formulario microsoft inspecao seguranca",
  },
  {
    title: "Registro N3 - XCMG 02",
    titleHtml: "Registro N3 - XCMG 02",
    descriptionHtml: "Formulário Microsoft para registro de N3 da operação XCMG.",
    type: "Formulário",
    owner: "XCMG",
    status: "Ativo",
    href: "https://forms.cloud.microsoft/r/QFULCPdRjR?origin=lprLink",
    searchText: "registro n3 xcmg formulario microsoft inspecao seguranca",
  },
  {
    title: "Registro N3 - XCMG 03",
    titleHtml: "Registro N3 - XCMG 03",
    descriptionHtml: "Formulário Microsoft para registro de N3 da operação XCMG.",
    type: "Formulário",
    owner: "XCMG",
    status: "Ativo",
    href: "https://forms.cloud.microsoft/r/tugrbGGgUu?origin=lprLink",
    searchText: "registro n3 xcmg formulario microsoft inspecao seguranca dds",
  },
  {
    title: "Registro N3 - XCMG 04",
    titleHtml: "Registro N3 - XCMG 04",
    descriptionHtml: "Formulário Microsoft para registro de N3 da operação XCMG.",
    type: "Formulário",
    owner: "XCMG",
    status: "Ativo",
    href: "https://forms.cloud.microsoft/r/Y807NMZNut?origin=lprLink",
    searchText: "registro n3 xcmg formulario microsoft inspecao seguranca",
  },
  {
    title: "Registro N3 - XCMG 05",
    titleHtml: "Registro N3 - XCMG 05",
    descriptionHtml: "Formulário Microsoft para registro de N3 da operação XCMG.",
    type: "Formulário",
    owner: "XCMG",
    status: "Ativo",
    href: "https://forms.cloud.microsoft/r/dUvnAjM2GH?origin=lprLink",
    searchText: "registro n3 xcmg formulario microsoft inspecao seguranca",
  },
  {
    title: "Registro N3 - XCMG 06",
    titleHtml: "Registro N3 - XCMG 06",
    descriptionHtml: "Formulário Microsoft para registro de N3 da operação XCMG.",
    type: "Formulário",
    owner: "XCMG",
    status: "Ativo",
    href: "https://forms.cloud.microsoft/r/35NYBAHrab?origin=lprLink",
    searchText: "registro n3 xcmg formulario microsoft inspecao seguranca epi",
  },
  {
    title: "Registro N3 - XCMG 07",
    titleHtml: "Registro N3 - XCMG 07",
    descriptionHtml: "Formulário Microsoft para registro de N3 da operação XCMG.",
    type: "Formulário",
    owner: "XCMG",
    status: "Ativo",
    href: "https://forms.cloud.microsoft/r/uftekVRsSy?origin=lprLink",
    searchText: "registro n3 xcmg formulario microsoft inspecao seguranca",
  },
  {
    title: "DDS",
    titleHtml: "DDS",
    descriptionHtml: "Canal diário de comunicação preventiva e alinhamento.",
    type: "Formulário",
    owner: "Operação",
    status: "Ativo",
    href: "https://forms.office.com/r/tugrbGGgUu?origin=lprLink",
    searchText: "dds formulario operacao comunicacao preventiva diario",
  },
  {
    title: "Solicitação de EPI",
    titleHtml: "Solicitação de EPI",
    descriptionHtml: "Canal formal para requisições de equipamentos de proteção.",
    type: "Formulário",
    owner: "SESMT",
    status: "Ativo",
    href: "https://forms.office.com/r/35NYBAHrab?origin=lprLink",
    searchText: "epi formulário solicitação sesmt requisição equipamentos",
  },
  {
    title: "Direitos Humanos Vale",
    titleHtml: "Direitos Humanos Vale",
    descriptionHtml: "Divulgação mensal de direitos humanos Vale.",
    type: "Comunicado",
    owner: "Vale",
    status: "Ativo",
    href: "https://vale-forms.valeglobal.net/public?id=VM7xNxyAY%2F55%2FTj5XZLyrg%3D%3D&lang=pt-BR",
    searchText: "direitos humanos vale divulgacao mensal comunicado formulario",
  },
  {
    title: "WhatsApp Segurança",
    titleHtml: "WhatsApp Segurança",
    descriptionHtml: "Contato rápido com a equipe de apoio da segurança.",
    type: "Suporte",
    owner: "Segurança",
    status: "Ativo",
    href: "https://wa.me/5531971840458?text=Ol%C3%A1%2C%20preciso%20de%20apoio%20na%20gest%C3%A3o%20de%20seguran%C3%A7a.",
    searchText: "whatsapp segurança suporte contato apoio atendimento",
  },
];

const campaigns = [
  {
    titleHtml: "Treinamento Trabalho em Altura",
    textHtml: "Reciclagem obrigatória para frentes com liberação crítica.",
    date: "06/05/2026",
    status: "Publicado",
    level: "ok",
  },
  {
    titleHtml: "DDS Especial - Segurança nas Mãos",
    textHtml: "Conteúdo rápido para alinhamento antes da atividade.",
    date: "05/05/2026",
    status: "Destaque",
    level: "warn",
  },
  {
    titleHtml: "Nova atualização de procedimentos",
    textHtml: "Documentos oficiais revisados para consulta SESMT.",
    date: "04/05/2026",
    status: "Revisado",
    level: "ok",
  },
];

const sharedHighlightPhotoNames = [
  "WhatsApp Image 2026-05-07 at 12.44.26 (3).jpeg",
  "WhatsApp Image 2026-05-07 at 12.44.26 (4).jpeg",
  "WhatsApp Image 2026-05-07 at 12.44.26 (5).jpeg",
  "WhatsApp Image 2026-05-07 at 12.44.26 (6).jpeg",
  "WhatsApp Image 2026-05-07 at 12.44.26.jpeg",
  "WhatsApp Image 2026-05-07 at 12.44.27 (1).jpeg",
  "WhatsApp Image 2026-05-07 at 12.44.27 (2).jpeg",
  "WhatsApp Image 2026-05-07 at 12.44.27 (3).jpeg",
  "WhatsApp Image 2026-05-07 at 12.44.27 (4).jpeg",
  "WhatsApp Image 2026-05-07 at 12.44.27.jpeg",
  "WhatsApp Image 2026-05-07 at 12.44.29 (1).jpeg",
  "WhatsApp Image 2026-05-07 at 12.44.29.jpeg",
];

const teamHighlightPhotoNames = [
  "WhatsApp Image 2026-05-07 at 12.44.26 (1).jpeg",
  "WhatsApp Image 2026-05-07 at 12.44.26 (2).jpeg",
  ...sharedHighlightPhotoNames,
];

function createHighlightPhotos(category, names, altBase) {
  return names.map((name, index) => ({
    src: `./assets/destaques/${category}/${name}`,
    alt: index === 0 ? `Foto principal de ${altBase}` : `Foto ${index + 1} de ${altBase}`,
  }));
}

const safetyHighlightPhotos = createHighlightPhotos("seguranca", sharedHighlightPhotoNames, "segurança");
const kaizenHighlightPhotos = createHighlightPhotos("kaizen", sharedHighlightPhotoNames, "Kaizen");
const n3HighlightPhotos = createHighlightPhotos("n3", sharedHighlightPhotoNames, "N3");
const inspectionHighlightPhotos = createHighlightPhotos("inspecao", sharedHighlightPhotoNames, "inspeção");
const teamHighlightPhotos = createHighlightPhotos("equipe", teamHighlightPhotoNames, "equipe");

const highlights = [
  {
    label: "Segurança",
    titleHtml: "Destaque do mês em segurança",
    textHtml: "Reconhecimento para atitude preventiva, cuidado ativo e boas práticas em campo.",
    image: safetyHighlightPhotos[0].src,
    alt: safetyHighlightPhotos[0].alt,
    status: "Mensal",
    photos: safetyHighlightPhotos,
  },
  {
    label: "Kaizen",
    titleHtml: "Destaque Kaizen",
    textHtml: "Melhoria aplicada que reduziu risco, aumentou organização ou elevou a eficiência da operação.",
    image: kaizenHighlightPhotos[0].src,
    alt: kaizenHighlightPhotos[0].alt,
    status: "Melhoria",
    photos: kaizenHighlightPhotos,
  },
  {
    label: "N3",
    titleHtml: "N3 destaque",
    textHtml: "Registro de desvio, tratativa ou ação exemplar com impacto direto na segurança operacional.",
    image: n3HighlightPhotos[0].src,
    alt: n3HighlightPhotos[0].alt,
    status: "Operação",
    photos: n3HighlightPhotos,
  },
  {
    label: "Inspeção",
    titleHtml: "Inspeção destaque",
    textHtml: "Inspeção com evidência forte, critério técnico e encaminhamento claro para a rotina.",
    image: inspectionHighlightPhotos[0].src,
    alt: inspectionHighlightPhotos[0].alt,
    status: "Auditoria",
    photos: inspectionHighlightPhotos,
  },
  {
    label: "Equipe",
    titleHtml: "Fotos da equipe",
    textHtml: "Galeria institucional para valorizar o time responsável pela rotina de segurança.",
    image: teamHighlightPhotos[0].src,
    alt: teamHighlightPhotos[0].alt,
    status: "Equipe",
    photos: teamHighlightPhotos,
  },
];

const mediaItems = [
  {
    titleHtml: "DDS - Segurança nas Mãos",
    textHtml: "Vídeo curto para reforço comportamental em campo.",
    meta: "Duração: 02:35",
  },
  {
    titleHtml: "Bloqueio e Etiquetagem",
    textHtml: "Liberação crítica para atividades com energia perigosa.",
    meta: "Duração: 05:10",
  },
  {
    titleHtml: "Trabalho em Altura - Reciclagem",
    textHtml: "Trilha com vencimento acompanhado pelo SGI.",
    meta: "Progresso médio: 65%",
  },
];

const epiStorageKey = "sgiEpiRecordsV2";
const defaultEpiRecords = [];
const auditStorageKey = "sgiAuditRecordsV1";
const defaultAuditRecords = [];
const usageStorageKey = "sgiUsageMetricsV1";
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

const roadmap = [
  {
    number: "1",
    titleHtml: "Validação visual",
    textHtml: "Conceito premium e postura institucional",
    status: "Pronto",
    level: "ok",
  },
  {
    number: "2",
    titleHtml: "Dados reais",
    textHtml: "Números, responsáveis e conteúdos oficiais",
    status: "Próxima fase",
    level: "warn",
  },
  {
    number: "3",
    titleHtml: "Publicação",
    textHtml: "Hospedagem e ambiente oficial",
    status: "Planejado",
    level: "warn",
  },
  {
    number: "4",
    titleHtml: "Expansão",
    textHtml: "BI, biblioteca, permissões e novos módulos",
    status: "Escalável",
    level: "ok",
  },
];

const dataSourceTypes = {
  real: {
    label: "Fonte real",
    title: "Acessos reais",
    description: "Links oficiais para Vale, Microsoft Forms, SharePoint e canais operacionais externos.",
  },
  local: {
    label: "Registro local",
    title: "Registros locais",
    description: "Dados calculados neste navegador, como entregas de EPI e aberturas feitas pelo usuário.",
  },
  demo: {
    label: "Demonstração",
    title: "Conteúdo demonstrativo",
    description: "Blocos editoriais preparados para apresentação, sem integração automática com fonte oficial.",
  },
};

const moduleGrid = document.querySelector("#moduleGrid");
const integrationGrid = document.querySelector("#integrationGrid");
const dataSourceGrid = document.querySelector("#dataSourceGrid");
const roadmapNode = document.querySelector("#roadmap");
const campaignList = document.querySelector("#campaignList");
const mediaList = document.querySelector("#mediaList");
const highlightGrid = document.querySelector("#highlightGrid");
const indicatorRings = document.querySelector("#indicatorRings");
const rankingList = document.querySelector("#rankingList");
const unitGrid = document.querySelector("#unitGrid");
const epiForm = document.querySelector("#epiForm");
const epiRows = document.querySelector("#epiRows");
const clearEpiRecords = document.querySelector("#clearEpiRecords");
const epiDeliveredAt = document.querySelector("#epiDeliveredAt");
const epiOkCount = document.querySelector("#epiOkCount");
const epiSoonCount = document.querySelector("#epiSoonCount");
const epiExpiredCount = document.querySelector("#epiExpiredCount");
const auditForm = document.querySelector("#auditForm");
const auditRows = document.querySelector("#auditRows");
const auditDue = document.querySelector("#auditDue");
const auditOpenCount = document.querySelector("#auditOpenCount");
const auditProgressCount = document.querySelector("#auditProgressCount");
const auditDoneCount = document.querySelector("#auditDoneCount");
const clearAuditRecords = document.querySelector("#clearAuditRecords");
const searchInput = document.querySelector("#integrationSearch");
const toggleResolved = document.querySelector("#toggleResolved");
const navToggle = document.querySelector("#navToggle");
const sidebarClose = document.querySelector("#sidebarClose");
const sidebarOverlay = document.querySelector("#sidebarOverlay");
const sidebar = document.querySelector("#sidebar");
const heroMedia = document.querySelector(".hero-media");
const formModal = document.querySelector("#formModal");
const formModalTitle = document.querySelector("#formModalTitle");
const formFrame = document.querySelector("#formFrame");
const formExternalLink = document.querySelector("#formExternalLink");
const highlightModal = document.querySelector("#highlightModal");
const highlightModalTitle = document.querySelector("#highlightModalTitle");
const highlightModalSubtitle = document.querySelector("#highlightModalSubtitle");
const highlightModalText = document.querySelector("#highlightModalText");
const highlightModalStatus = document.querySelector("#highlightModalStatus");
const highlightModalCounter = document.querySelector("#highlightModalCounter");
const highlightModalPhoto = document.querySelector("#highlightModalPhoto");
const highlightModalPhotoStrip = document.querySelector("#highlightModalPhotoStrip");
const highlightCategoryScroll = document.querySelector("#highlightCategoryScroll");
const highlightModalTrack = document.querySelector("#highlightModalTrack");
const highlightPrev = document.querySelector("#highlightPrev");
const highlightNext = document.querySelector("#highlightNext");
let showResolved = true;
let epiRecords = loadEpiRecords();
let audits = loadAuditRecords();
let usageMetrics = loadUsageMetrics();
let highlightPhotoScrollDistance = 0;
let activeHighlightIndex = 0;
let lastHighlightTrigger = null;
let persistenceMode = "browser";
let serverSyncPending = false;

const metricNodes = {
  miniCompliance: document.querySelector("#miniCompliance"),
  miniRequests: document.querySelector("#miniRequests"),
  miniIntegrations: document.querySelector("#miniIntegrations"),
  miniOpenItems: document.querySelector("#miniOpenItems"),
  heroIntegrationCount: document.querySelector("#heroIntegrationCount"),
  statusCompliance: document.querySelector("#statusCompliance"),
  statusComplianceLabel: document.querySelector("#statusComplianceLabel"),
  statusRequests: document.querySelector("#statusRequests"),
  statusRequestsLabel: document.querySelector("#statusRequestsLabel"),
  statusIntegrations: document.querySelector("#statusIntegrations"),
  statusIntegrationsLabel: document.querySelector("#statusIntegrationsLabel"),
  statusOpenItems: document.querySelector("#statusOpenItems"),
  statusOpenLabel: document.querySelector("#statusOpenLabel"),
  blueprintRequests: document.querySelector("#blueprintRequests"),
  blueprintSheets: document.querySelector("#blueprintSheets"),
  blueprintCompliant: document.querySelector("#blueprintCompliant"),
  blueprintOpenItems: document.querySelector("#blueprintOpenItems"),
  previewRequests: document.querySelector("#previewRequests"),
  previewCompliance: document.querySelector("#previewCompliance"),
  previewSheets: document.querySelector("#previewSheets"),
  previewOpenItems: document.querySelector("#previewOpenItems"),
};

function statusClass(status) {
  if (["Ativo", "Pronto", "Escalável", "Resolvido"].includes(status)) return "ok";
  if (status === "Prioridade") return "danger";
  return "warn";
}

function sourceMeta(type) {
  return dataSourceTypes[type] || dataSourceTypes.demo;
}

function shouldEmbedIntegration(item) {
  return ["Acesso", "Comunicado", "Formulário"].includes(item.type);
}

function loadEpiRecords() {
  try {
    const stored = localStorage.getItem(epiStorageKey);
    return stored ? JSON.parse(stored) : [...defaultEpiRecords];
  } catch (error) {
    return [...defaultEpiRecords];
  }
}

function saveEpiRecords() {
  localStorage.setItem(epiStorageKey, JSON.stringify(epiRecords));
  persistServerState("epi");
}

function loadAuditRecords() {
  try {
    const stored = localStorage.getItem(auditStorageKey);
    return stored ? JSON.parse(stored) : [...defaultAuditRecords];
  } catch (error) {
    return [...defaultAuditRecords];
  }
}

function saveAuditRecords() {
  localStorage.setItem(auditStorageKey, JSON.stringify(audits));
  persistServerState("audits");
}

function loadUsageMetrics() {
  try {
    const stored = localStorage.getItem(usageStorageKey);
    return stored ? { ...defaultUsageMetrics, ...JSON.parse(stored) } : { ...defaultUsageMetrics };
  } catch (error) {
    return { ...defaultUsageMetrics };
  }
}

function saveUsageMetrics() {
  localStorage.setItem(usageStorageKey, JSON.stringify(usageMetrics));
  persistServerState("usage");
}

function canUseServerApi() {
  return window.location.protocol === "http:" || window.location.protocol === "https:";
}

async function apiRequest(path, options = {}) {
  const response = await fetch(path, {
    headers: {
      "content-type": "application/json",
      ...(options.headers || {}),
    },
    ...options,
  });

  if (!response.ok) {
    throw new Error(`API ${response.status}`);
  }

  return response.json();
}

function mergeUsageMetrics(nextMetrics) {
  usageMetrics = {
    ...defaultUsageMetrics,
    ...(nextMetrics && typeof nextMetrics === "object" ? nextMetrics : {}),
  };
}

function hasUsageActivity(metrics) {
  return Boolean(
    metrics &&
      ((metrics.totalIntegrationOpens || 0) > 0 ||
        (metrics.totalHighlightViews || 0) > 0 ||
        Object.keys(metrics.integrationOpens || {}).length ||
        Object.keys(metrics.highlightViews || {}).length)
  );
}

async function persistServerState(scope) {
  if (!canUseServerApi() || persistenceMode !== "server") return;

  try {
    serverSyncPending = true;
    if (scope === "epi") {
      await apiRequest("/api/epi", {
        method: "PUT",
        body: JSON.stringify({ epiRecords }),
      });
    }

    if (scope === "audits") {
      await apiRequest("/api/audits", {
        method: "PUT",
        body: JSON.stringify({ auditRecords: audits }),
      });
    }

    if (scope === "usage") {
      await apiRequest("/api/usage", {
        method: "PUT",
        body: JSON.stringify({ usageMetrics }),
      });
    }
  } catch (error) {
    persistenceMode = "browser";
  } finally {
    serverSyncPending = false;
    renderDataSources();
  }
}

async function initializePersistence() {
  if (!canUseServerApi()) {
    renderDataSources();
    return;
  }

  try {
    const localEpiRecords = [...epiRecords];
    const localAuditRecords = [...audits];
    const localUsageMetrics = { ...usageMetrics };
    const state = await apiRequest("/api/state");
    const serverEpiRecords = Array.isArray(state.epiRecords) ? state.epiRecords : [];
    const serverAuditRecords = Array.isArray(state.auditRecords) ? state.auditRecords : [];
    const serverUsageMetrics = { ...defaultUsageMetrics, ...(state.usageMetrics || {}) };
    const shouldMigrateEpi = !serverEpiRecords.length && localEpiRecords.length;
    const shouldMigrateAudits = !serverAuditRecords.length && localAuditRecords.length;
    const shouldMigrateUsage = !hasUsageActivity(serverUsageMetrics) && hasUsageActivity(localUsageMetrics);

    epiRecords = shouldMigrateEpi ? localEpiRecords : serverEpiRecords;
    audits = shouldMigrateAudits ? localAuditRecords : serverAuditRecords;
    mergeUsageMetrics(shouldMigrateUsage ? localUsageMetrics : serverUsageMetrics);
    localStorage.setItem(epiStorageKey, JSON.stringify(epiRecords));
    localStorage.setItem(auditStorageKey, JSON.stringify(audits));
    localStorage.setItem(usageStorageKey, JSON.stringify(usageMetrics));

    persistenceMode = "server";
    if (shouldMigrateEpi) persistServerState("epi");
    if (shouldMigrateAudits) persistServerState("audits");
    if (shouldMigrateUsage) persistServerState("usage");
    renderEpiRecords();
    renderAudits();
    renderCalculatedMetrics();
    renderDataSources();
    renderIndicators();
  } catch (error) {
    persistenceMode = "browser";
    renderDataSources();
  }
}

function incrementMetricCounter(group, key, amount = 1) {
  if (!key) return;
  usageMetrics[group] = usageMetrics[group] || {};
  usageMetrics[group][key] = (usageMetrics[group][key] || 0) + amount;
}

function recordIntegrationUsage(item) {
  if (!item) return;

  incrementMetricCounter("integrationOpens", item.title);
  incrementMetricCounter("ownerAccesses", item.owner || "Sem origem");
  incrementMetricCounter("typeAccesses", item.type || "Sem tipo");

  usageMetrics.totalIntegrationOpens = (usageMetrics.totalIntegrationOpens || 0) + 1;
  if (shouldEmbedIntegration(item)) {
    usageMetrics.totalEmbeddedOpens = (usageMetrics.totalEmbeddedOpens || 0) + 1;
  } else {
    usageMetrics.totalExternalOpens = (usageMetrics.totalExternalOpens || 0) + 1;
  }
  usageMetrics.updatedAt = new Date().toISOString();
  saveUsageMetrics();
  renderCalculatedMetrics();
  renderDataSources();
  renderIndicators();
}

function recordHighlightUsage(highlight) {
  if (!highlight) return;

  const label = toPlainText(highlight.label || highlight.titleHtml || "Destaque");
  incrementMetricCounter("highlightViews", label);
  usageMetrics.totalHighlightViews = (usageMetrics.totalHighlightViews || 0) + 1;
  usageMetrics.updatedAt = new Date().toISOString();
  saveUsageMetrics();
}

function addDays(dateValue, days) {
  const date = new Date(dateValue);
  date.setDate(date.getDate() + Number(days || 0));
  return date;
}

function formatDateTime(dateValue) {
  return new Intl.DateTimeFormat("pt-BR", {
    dateStyle: "short",
    timeStyle: "short",
  }).format(new Date(dateValue));
}

function getEpiStatus(record) {
  const expiresAt = addDays(record.deliveredAt, record.validityDays);
  const diffDays = Math.ceil((expiresAt - new Date()) / 86400000);

  if (diffDays < 0) {
    return { label: `Vencido ha ${Math.abs(diffDays)} dia(s)`, level: "danger", diffDays, expiresAt };
  }

  if (diffDays <= 30) {
    return { label: `Vence em ${diffDays} dia(s)`, level: "warn", diffDays, expiresAt };
  }

  return { label: `Em dia: ${diffDays} dia(s)`, level: "ok", diffDays, expiresAt };
}

function isSpreadsheetAccess(item) {
  const text = [item.title, item.descriptionHtml, item.type, item.href, item.searchText].join(" ").toLowerCase();
  return ["sharepoint", "biblioteca", "document", "excel", "sheet", "planilha"].some((term) => text.includes(term));
}

function isRequestAccess(item) {
  return ["Acesso", "Comunicado", "Formulário"].includes(item.type);
}

function getEpiTotals() {
  return epiRecords.reduce(
    (acc, record) => {
      const status = getEpiStatus(record);
      if (status.level === "danger") acc.expired += 1;
      else if (status.level === "warn") acc.soon += 1;
      else acc.ok += 1;
      return acc;
    },
    { ok: 0, soon: 0, expired: 0 },
  );
}

function getOperationalMetrics() {
  const integrationOpenCounts = usageMetrics.integrationOpens || {};
  const usedIntegrationTitles = Object.keys(integrationOpenCounts).filter((title) => integrationOpenCounts[title] > 0);
  const activeIntegrations = usedIntegrationTitles.length;
  const spreadsheetAccesses = integrations
    .filter(isSpreadsheetAccess)
    .reduce((total, item) => total + (integrationOpenCounts[item.title] || 0), 0);
  const requestAccesses = usageMetrics.totalEmbeddedOpens || 0;
  const openAudits = audits.filter((audit) => audit.status !== "Resolvido").length;
  const epiTotals = getEpiTotals();
  const openItems = openAudits + epiTotals.soon + epiTotals.expired;
  const totalTracked = epiRecords.length + audits.length;
  const compliantTracked = epiTotals.ok + audits.filter((audit) => audit.status === "Resolvido").length;
  const compliance = totalTracked ? Math.round((compliantTracked / totalTracked) * 100) : 0;

  return {
    activeIntegrations,
    spreadsheetAccesses,
    requestAccesses,
    openAudits,
    epiTotals,
    openItems,
    totalRequests: requestAccesses + epiRecords.length,
    totalTracked,
    totalIntegrationOpens: usageMetrics.totalIntegrationOpens || 0,
    totalHighlightViews: usageMetrics.totalHighlightViews || 0,
    compliance,
  };
}

function getCalculatedRanking() {
  const totalsByEmployee = epiRecords.reduce((acc, record) => {
    const name = record.employee || "Sem identificação";
    acc[name] = (acc[name] || 0) + Number(record.quantity || 1);
    return acc;
  }, {});

  return Object.entries(totalsByEmployee)
    .map(([name, value]) => ({ name, value }))
    .sort((a, b) => b.value - a.value)
    .slice(0, 5);
}

function getCalculatedOrigins() {
  const totalsByOwner = usageMetrics.ownerAccesses || {};

  return Object.entries(totalsByOwner)
    .map(([name, value]) => ({ name, value, detail: "Acessos realizados" }))
    .sort((a, b) => b.value - a.value)
    .slice(0, 4);
}

function auditStatusClass(status) {
  if (status === "Resolvido") return "ok";
  if (status === "Prioridade") return "danger";
  return "warn";
}

function getAuditTotals() {
  return audits.reduce(
    (acc, audit) => {
      if (audit.status === "Resolvido") acc.done += 1;
      else if (audit.status === "Em andamento") acc.progress += 1;
      else acc.open += 1;
      return acc;
    },
    { open: 0, progress: 0, done: 0 },
  );
}

function setText(node, value) {
  if (node) node.textContent = value;
}

function toPlainText(value) {
  const parser = new DOMParser();
  return parser.parseFromString(value, "text/html").documentElement.textContent || value;
}

function escapeHtml(value) {
  return String(value ?? "")
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}

function getHighlightPhotos(highlight) {
  return highlight.photos?.length ? highlight.photos : [{ src: highlight.image, alt: highlight.alt }];
}

function renderCalculatedMetrics() {
  const metrics = getOperationalMetrics();
  const emptyRecordsLabel = persistenceMode === "server" ? "Sem registros persistentes" : "Sem registros locais";

  setText(metricNodes.miniCompliance, `${metrics.compliance}%`);
  setText(metricNodes.miniRequests, String(metrics.totalRequests).padStart(2, "0"));
  setText(metricNodes.miniIntegrations, String(metrics.activeIntegrations).padStart(2, "0"));
  setText(metricNodes.miniOpenItems, String(metrics.openItems).padStart(2, "0"));
  setText(metricNodes.heroIntegrationCount, String(metrics.activeIntegrations).padStart(2, "0"));
  setText(metricNodes.statusCompliance, `${metrics.compliance}%`);
  setText(metricNodes.statusComplianceLabel, metrics.totalTracked ? `${metrics.epiTotals.ok} EPIs em dia` : emptyRecordsLabel);
  setText(metricNodes.statusRequests, String(metrics.totalRequests).padStart(2, "0"));
  setText(metricNodes.statusRequestsLabel, `${metrics.requestAccesses} acessos + ${epiRecords.length} entregas`);
  setText(metricNodes.statusIntegrations, String(metrics.activeIntegrations).padStart(2, "0"));
  setText(metricNodes.statusIntegrationsLabel, `${metrics.totalIntegrationOpens} aberturas registradas`);
  setText(metricNodes.statusOpenItems, String(metrics.openItems).padStart(2, "0"));
  setText(metricNodes.statusOpenLabel, `${metrics.openAudits} auditoria + ${metrics.epiTotals.soon + metrics.epiTotals.expired} EPI`);
  setText(metricNodes.blueprintRequests, String(metrics.totalRequests));
  setText(metricNodes.blueprintSheets, String(metrics.spreadsheetAccesses));
  setText(metricNodes.blueprintCompliant, metrics.totalTracked && !metrics.openItems ? "Sim" : "Não");
  setText(metricNodes.blueprintOpenItems, String(metrics.openItems).padStart(2, "0"));
  setText(metricNodes.previewRequests, String(metrics.totalRequests));
  setText(metricNodes.previewCompliance, `${metrics.compliance}%`);
  setText(metricNodes.previewSheets, String(metrics.spreadsheetAccesses));
  setText(metricNodes.previewOpenItems, String(metrics.openItems).padStart(2, "0"));
}

function renderDataSources() {
  if (!dataSourceGrid) return;

  const metrics = getOperationalMetrics();
  const isServerMode = persistenceMode === "server";
  const localMeta = sourceMeta("local");
  const cards = [
    {
      type: "real",
      metric: String(integrations.length).padStart(2, "0"),
      label: "integrações cadastradas",
      detail: "Acesso abre ou direciona para sistemas externos oficiais.",
    },
    {
      type: "local",
      metric: `${epiRecords.length + audits.length} / ${metrics.totalIntegrationOpens}`,
      label: "EPIs, auditorias e aberturas",
      title: isServerMode ? "Base persistente" : localMeta.title,
      badge: isServerMode ? "Servidor local" : localMeta.label,
      description: isServerMode
        ? "Dados salvos em data/sgi-db.json pelo servidor Node local."
        : localMeta.description,
      detail: isServerMode
        ? "Disponível para todos que acessarem este servidor local."
        : "Persistido no navegador atual, sem base compartilhada entre usuários.",
    },
    {
      type: "demo",
      metric: String(campaigns.length + mediaItems.length + highlights.length + roadmap.length).padStart(2, "0"),
      label: "itens editoriais",
      detail: "Conteúdo pronto para apresentação e substituição por fonte oficial.",
    },
  ];

  dataSourceGrid.innerHTML = cards
    .map((card) => {
      const meta = sourceMeta(card.type);
      const badge = card.badge || meta.label;
      const title = card.title || meta.title;
      const description = card.description || meta.description;

      return `
        <article class="data-source-card ${card.type}">
          <span class="data-source-badge ${card.type}">${badge}</span>
          <strong>${card.metric}</strong>
          <h3>${title}</h3>
          <p>${description}</p>
          <em>${card.label}. ${card.detail}</em>
        </article>
      `;
    })
    .join("");
}

function renderModules() {
  moduleGrid.innerHTML = modules
    .map(
      (module) => `
        <article class="module-card">
          <span class="tag">${module.tag}</span>
          <h3>${module.titleHtml}</h3>
          <p>${module.textHtml}</p>
          <ul class="module-list">
            ${module.items.map((item) => `<li>${item}</li>`).join("")}
          </ul>
          <a class="button neutral has-arrow" href="${module.href}"><span>Abrir módulo</span></a>
        </article>
      `,
    )
    .join("");
}

function renderIntegrations(filter = "") {
  const term = filter.trim().toLowerCase();
  const filtered = integrations
    .map((item, index) => ({ ...item, index }))
    .filter((item) =>
      [item.title, item.descriptionHtml, item.type, item.owner, item.searchText].join(" ").toLowerCase().includes(term),
    );

  if (!filtered.length) {
    integrationGrid.innerHTML = `
      <article class="integration-empty">
        Nenhuma integração encontrada para a busca atual. Tente outro termo como VES, DDS ou EPI.
      </article>
    `;
    return;
  }

  integrationGrid.innerHTML = filtered
    .map((item) => {
      const source = sourceMeta(item.source || "real");

      return `
        <article class="integration-card">
          <div class="integration-card-header">
            <div>
              <h3>${item.titleHtml}</h3>
              <p>${item.descriptionHtml}</p>
            </div>
            <span class="status-pill ${statusClass(item.status)}">${item.status}</span>
          </div>
          <div class="card-meta">
            <span>${item.type}</span>
            <span>${item.owner}</span>
            <span class="data-source-badge real">${source.label}</span>
          </div>
          ${
            shouldEmbedIntegration(item)
              ? `<button class="button primary has-arrow" type="button" data-integration-index="${item.index}"><span>Preencher</span></button>`
              : `<a class="button primary has-arrow" href="${item.href}" target="_blank" rel="noreferrer"><span>Abrir</span></a>`
          }
        </article>
      `;
    })
    .join("");
}

function openEmbeddedIntegration(item) {
  if (!formModal || !formModalTitle || !formFrame || !formExternalLink) {
    window.open(item.href, "_blank", "noopener,noreferrer");
    return;
  }

  formModalTitle.textContent = item.title;
  formExternalLink.href = item.href;
  formFrame.src = item.href;
  formFrame.title = item.title;
  formModal.hidden = false;
  document.body.classList.add("modal-open");
}

function closeEmbeddedIntegration() {
  if (!formModal || !formFrame) return;

  formModal.hidden = true;
  formFrame.src = "about:blank";
  document.body.classList.remove("modal-open");
}

function updateHighlightModal(index) {
  if (!highlightModal) return;

  activeHighlightIndex = (index + highlights.length) % highlights.length;
  const highlight = highlights[activeHighlightIndex];
  const photos = getHighlightPhotos(highlight);

  if (highlightModalTitle) highlightModalTitle.textContent = `Visualização: ${toPlainText(highlight.titleHtml)}`;
  if (highlightModalSubtitle) highlightModalSubtitle.innerHTML = highlight.titleHtml;
  if (highlightModalText) highlightModalText.innerHTML = highlight.textHtml;
  if (highlightModalStatus) highlightModalStatus.textContent = highlight.status;
  if (highlightModalCounter) highlightModalCounter.textContent = `${photos.length} foto(s) | categoria ${activeHighlightIndex + 1} de ${highlights.length}`;

  if (highlightModalPhotoStrip) {
    highlightModalPhotoStrip.innerHTML = photos
      .map(
        (photo, photoIndex) => `
          <figure class="highlight-modal-photo">
            <img src="${photo.src}" alt="${photo.alt}" onerror="this.closest('.highlight-modal-photo').classList.add('is-missing'); this.remove();" />
            <figcaption>${String(photoIndex + 1).padStart(2, "0")} / ${String(photos.length).padStart(2, "0")}</figcaption>
          </figure>
        `,
      )
      .join("");
  }

  if (highlightModalTrack) {
    highlightModalTrack.querySelectorAll("[data-highlight-thumb]").forEach((button) => {
      const isCurrent = Number(button.dataset.highlightThumb) === activeHighlightIndex;
      button.classList.toggle("active", isCurrent);
      button.setAttribute("aria-current", isCurrent ? "true" : "false");
    });
  }

  if (highlightCategoryScroll) highlightCategoryScroll.scrollTop = 0;
  requestAnimationFrame(setupHighlightPhotoScroll);
}

function openHighlightModal(index, trigger = null) {
  if (!highlightModal) return;

  lastHighlightTrigger = trigger || document.activeElement;
  highlightModal.hidden = false;
  document.body.classList.add("modal-open");
  updateHighlightModal(index);
  highlightModal.querySelector("[data-highlight-close]")?.focus();
}

function closeHighlightModal() {
  if (!highlightModal || highlightModal.hidden) return;

  highlightModal.hidden = true;
  document.body.classList.remove("modal-open");
  lastHighlightTrigger?.focus?.();
  lastHighlightTrigger = null;
}

function moveHighlightModal(direction) {
  if (!highlightModal || highlightModal.hidden) return;
  updateHighlightModal(activeHighlightIndex + direction);
}

function setupHighlightPhotoScroll() {
  if (!highlightModalPhoto || !highlightModalPhotoStrip || !highlightCategoryScroll) return;

  const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  highlightPhotoScrollDistance = Math.max(0, highlightModalPhotoStrip.scrollWidth - highlightModalPhoto.clientWidth);

  if (reducedMotion || window.innerWidth <= 720) {
    highlightCategoryScroll.style.removeProperty("--highlight-photo-distance");
    highlightCategoryScroll.style.setProperty("--highlight-photo-x", "0px");
    highlightCategoryScroll.style.setProperty("--highlight-photo-progress", "0%");
    return;
  }

  highlightCategoryScroll.style.setProperty("--highlight-photo-distance", `${Math.max(1, highlightPhotoScrollDistance)}px`);
  updateHighlightPhotoScroll();
}

function updateHighlightPhotoScroll() {
  if (!highlightCategoryScroll || !highlightModalPhotoStrip) return;
  if (!highlightPhotoScrollDistance || window.innerWidth <= 720) return;

  const scrollableHeight = Math.max(1, highlightCategoryScroll.scrollHeight - highlightCategoryScroll.clientHeight);
  const progress = clamp(highlightCategoryScroll.scrollTop / scrollableHeight, 0, 1);

  highlightCategoryScroll.style.setProperty("--highlight-photo-x", `${(highlightPhotoScrollDistance * -progress).toFixed(2)}px`);
  highlightCategoryScroll.style.setProperty("--highlight-photo-progress", `${(progress * 100).toFixed(2)}%`);
}

function trapHighlightModalFocus(event) {
  if (!highlightModal || highlightModal.hidden || event.key !== "Tab") return;

  const focusable = [...highlightModal.querySelectorAll('button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])')].filter(
    (node) => !node.disabled && node.offsetParent !== null,
  );

  if (!focusable.length) return;

  const first = focusable[0];
  const last = focusable[focusable.length - 1];

  if (event.shiftKey && document.activeElement === first) {
    event.preventDefault();
    last.focus();
  } else if (!event.shiftKey && document.activeElement === last) {
    event.preventDefault();
    first.focus();
  }
}

function renderAudits() {
  const totals = getAuditTotals();
  if (auditOpenCount) auditOpenCount.textContent = totals.open;
  if (auditProgressCount) auditProgressCount.textContent = totals.progress;
  if (auditDoneCount) auditDoneCount.textContent = totals.done;

  const rows = audits.filter((audit) => showResolved || audit.status !== "Resolvido");
  if (!rows.length) {
    auditRows.innerHTML = `
      <tr>
        <td colspan="6">Nenhuma ação de auditoria cadastrada.</td>
      </tr>
    `;
    toggleResolved.innerHTML = `<span>${showResolved ? "Ocultar resolvidos" : "Mostrar resolvidos"}</span>`;
    return;
  }

  auditRows.innerHTML = rows
    .map((audit) => {
      const level = auditStatusClass(audit.status);

      return `
        <tr>
          <td>
            <strong>${escapeHtml(audit.item)}</strong>
            <span>${escapeHtml(audit.evidence || "Sem observação")}</span>
          </td>
          <td>${escapeHtml(audit.origin || "SGI")}</td>
          <td>${escapeHtml(audit.owner || "Sem responsável")}</td>
          <td>${escapeHtml(audit.due || "Sem prazo")}</td>
          <td><span class="status-pill ${level}">${escapeHtml(audit.status || "Aberto")}</span></td>
          <td>
            <div class="table-action-group">
              <button class="table-action neutral-action" type="button" data-audit-cycle="${audit.id}">Status</button>
              <button class="table-action" type="button" data-audit-remove="${audit.id}">Remover</button>
            </div>
          </td>
        </tr>
      `;
    })
    .join("");

  toggleResolved.innerHTML = `<span>${showResolved ? "Ocultar resolvidos" : "Mostrar resolvidos"}</span>`;
}

function renderRoadmap() {
  roadmapNode.innerHTML = roadmap
    .map(
      (step) => `
        <div class="roadmap-step">
          <div class="step-number">${step.number}</div>
          <div>
            <strong>${step.titleHtml}</strong>
            <span>${step.textHtml}</span>
          </div>
          <span class="status-pill ${step.level}">${step.status}</span>
        </div>
      `,
    )
    .join("");
}

function syncActiveNavigation() {
  const sections = [...document.querySelectorAll(".section-block[id]")];
  const links = [...document.querySelectorAll(".nav-link")];
  const current = sections.reduce((active, section) => {
    const rect = section.getBoundingClientRect();
    return rect.top <= 170 ? section.id : active;
  }, "painel");

  links.forEach((link) => {
    link.classList.toggle("active", link.dataset.section === current);
  });
}

function setSidebarState(isOpen) {
  document.body.classList.toggle("nav-open", isOpen);
  navToggle?.setAttribute("aria-expanded", String(isOpen));
}

function handleViewportReset() {
  if (window.innerWidth > 1080) {
    setSidebarState(false);
  }
}

function setupSidebar() {
  navToggle?.addEventListener("click", () => {
    const shouldOpen = !document.body.classList.contains("nav-open");
    setSidebarState(shouldOpen);
  });

  sidebarClose?.addEventListener("click", () => setSidebarState(false));
  sidebarOverlay?.addEventListener("click", () => setSidebarState(false));

  document.querySelectorAll(".nav-link").forEach((link) => {
    link.addEventListener("click", () => {
      if (window.innerWidth <= 1080) {
        setSidebarState(false);
      }
    });
  });

  window.addEventListener("resize", handleViewportReset);
  window.addEventListener("keydown", (event) => {
    if (event.key === "Escape") {
      setSidebarState(false);
      closeEmbeddedIntegration();
      closeHighlightModal();
    }
  });
}

function clamp(value, min, max) {
  return Math.min(Math.max(value, min), max);
}

function renderCampaigns() {
  if (!campaignList || !mediaList) return;

  campaignList.innerHTML = campaigns
    .map(
      (campaign) => `
        <article class="campaign-item">
          <div>
            <strong>${campaign.titleHtml}</strong>
            <span>${campaign.textHtml}</span>
          </div>
          <div class="campaign-item-footer">
            <em>${campaign.date}</em>
            <span class="status-pill ${campaign.level}">${campaign.status}</span>
          </div>
        </article>
      `,
    )
    .join("");

  mediaList.innerHTML = mediaItems
    .map(
      (item) => `
        <article class="media-item">
          <div class="play-mark" aria-hidden="true"></div>
          <div>
            <strong>${item.titleHtml}</strong>
            <span>${item.textHtml}</span>
            <em>${item.meta}</em>
          </div>
        </article>
      `,
    )
    .join("");
}

function renderHighlights() {
  if (!highlightGrid) return;

  highlightGrid.innerHTML = highlights
    .map(
      (highlight, index) => `
        <button
          class="highlight-card ${index === 0 ? "highlight-card-featured" : ""}"
          type="button"
          data-highlight-index="${index}"
          aria-haspopup="dialog"
          aria-label="Abrir ${toPlainText(highlight.titleHtml)}"
        >
          <span class="highlight-photo">
            <img src="${highlight.image}" alt="${highlight.alt}" loading="lazy" onerror="this.closest('.highlight-photo').classList.add('is-missing'); this.remove();" />
            <span>${highlight.label}</span>
          </span>
          <span class="highlight-content">
            <span class="tag">${highlight.status}</span>
            <span class="highlight-title">${highlight.titleHtml}</span>
            <span class="highlight-text">${highlight.textHtml}</span>
          </span>
        </button>
      `,
    )
    .join("");

  if (highlightModalTrack) {
    highlightModalTrack.innerHTML = highlights
      .map(
        (highlight, index) => `
          <button class="highlight-thumb" type="button" data-highlight-thumb="${index}" aria-label="Ir para ${toPlainText(highlight.titleHtml)}">
            <span>${String(index + 1).padStart(2, "0")}</span>
            <strong>${highlight.label}</strong>
          </button>
        `,
      )
      .join("");
  }
}

function renderIndicators() {
  if (!indicatorRings || !rankingList || !unitGrid) return;

  const metrics = getOperationalMetrics();
  const emptyRecordsLabel = persistenceMode === "server" ? "Sem registros persistentes" : "Sem registros locais";
  const calculatedIndicators = [
    {
      label: "Requisições",
      value: String(metrics.totalRequests).padStart(2, "0"),
      goal: `${metrics.requestAccesses} acessos reais + ${epiRecords.length} EPIs`,
      tone: "info",
      source: "local",
    },
    {
      label: "Planilhas / docs",
      value: String(metrics.spreadsheetAccesses).padStart(2, "0"),
      goal: "Aberturas registradas",
      tone: "info",
      source: "local",
    },
    {
      label: "Conformidade",
      value: `${metrics.compliance}%`,
      goal: metrics.totalTracked ? `${metrics.epiTotals.ok} EPIs em dia` : emptyRecordsLabel,
      tone: metrics.totalTracked && metrics.compliance >= 90 ? "good" : "warn",
      source: "local",
    },
    {
      label: "Abertos",
      value: String(metrics.openItems).padStart(2, "0"),
      goal: `${metrics.openAudits} auditoria + ${metrics.epiTotals.soon + metrics.epiTotals.expired} EPI`,
      tone: metrics.openItems ? "danger" : "good",
      source: audits.length ? "local" : "demo",
    },
  ];

  indicatorRings.innerHTML = calculatedIndicators
    .map(
      (indicator) => `
        <article class="indicator-ring tone-${indicator.tone}">
          <small class="data-source-badge ${indicator.source}">${sourceMeta(indicator.source).label}</small>
          <span>${indicator.label}</span>
          <strong>${indicator.value}</strong>
          <em>${indicator.goal}</em>
        </article>
      `,
    )
    .join("");

  const calculatedRanking = getCalculatedRanking();
  rankingList.innerHTML = calculatedRanking.length
    ? calculatedRanking
        .map(
          (item, index) => `
            <div>
              <span>${index + 1}. ${item.name}</span>
              <strong>${item.value}</strong>
            </div>
          `,
        )
        .join("")
    : `<div><span>Sem entregas cadastradas</span><strong>0</strong></div>`;

  const calculatedOrigins = getCalculatedOrigins();
  unitGrid.innerHTML = calculatedOrigins.length
    ? calculatedOrigins
        .map(
          (unit) => `
            <div>
              <span>${unit.name}</span>
              <strong>${unit.value}</strong>
              <em>${unit.detail}</em>
            </div>
          `,
        )
        .join("")
    : `<div><span>Sem acessos registrados</span><strong>0</strong><em>Use os links do portal</em></div>`;
}

function renderEpiRecords() {
  if (!epiRows) return;

  const totals = getEpiTotals();

  if (epiOkCount) epiOkCount.textContent = totals.ok;
  if (epiSoonCount) epiSoonCount.textContent = totals.soon;
  if (epiExpiredCount) epiExpiredCount.textContent = totals.expired;
  renderCalculatedMetrics();
  renderDataSources();

  if (!epiRecords.length) {
    epiRows.innerHTML = `
      <tr>
        <td colspan="7">Nenhuma entrega de EPI cadastrada.</td>
      </tr>
    `;
    return;
  }

  epiRows.innerHTML = epiRecords
    .map((record) => {
      const status = getEpiStatus(record);
      return `
        <tr>
          <td>
            <strong>${escapeHtml(record.employee)}</strong>
            <span>${escapeHtml(record.registration || "Sem matrícula")}</span>
          </td>
          <td>
            <strong>${escapeHtml(record.item)}</strong>
            <span>${escapeHtml(record.code || "Sem CA")} | Qtd. ${escapeHtml(record.quantity || 1)}</span>
          </td>
          <td>${formatDateTime(record.deliveredAt)}</td>
          <td>${record.validityDays} dias</td>
          <td>${formatDateTime(status.expiresAt)}</td>
          <td><span class="status-pill ${status.level}">${status.label}</span></td>
          <td>
            <button class="table-action" type="button" data-epi-remove="${record.id}">Remover</button>
          </td>
        </tr>
      `;
    })
    .join("");
}

function setDefaultEpiDateTime() {
  if (!epiDeliveredAt || epiDeliveredAt.value) return;
  const now = new Date();
  now.setMinutes(now.getMinutes() - now.getTimezoneOffset());
  epiDeliveredAt.value = now.toISOString().slice(0, 16);
}

function setDefaultAuditDueDate() {
  if (!auditDue || auditDue.value) return;
  const date = new Date();
  date.setDate(date.getDate() + 7);
  auditDue.value = date.toISOString().slice(0, 10);
}

function setupHeroTilt() {
  const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  const canHover = window.matchMedia("(hover: hover) and (pointer: fine)").matches;

  if (!heroMedia || prefersReducedMotion || !canHover) {
    return;
  }

  heroMedia.addEventListener("pointermove", (event) => {
    const rect = heroMedia.getBoundingClientRect();
    const x = (event.clientX - rect.left) / rect.width - 0.5;
    const y = (event.clientY - rect.top) / rect.height - 0.5;

    heroMedia.style.setProperty("--hero-rotate-x", `${(y * -6).toFixed(2)}deg`);
    heroMedia.style.setProperty("--hero-rotate-y", `${(x * 8).toFixed(2)}deg`);
  });

  heroMedia.addEventListener("pointerleave", () => {
    heroMedia.style.setProperty("--hero-rotate-x", "0deg");
    heroMedia.style.setProperty("--hero-rotate-y", "0deg");
  });
}

searchInput?.addEventListener("input", (event) => renderIntegrations(event.target.value));

integrationGrid?.addEventListener("click", (event) => {
  const trigger = event.target.closest("[data-integration-index]");
  if (!trigger) return;

  const item = integrations[Number(trigger.dataset.integrationIndex)];
  if (item) {
    recordIntegrationUsage(item);
    openEmbeddedIntegration(item);
  }
});

highlightGrid?.addEventListener("click", (event) => {
  const trigger = event.target.closest("[data-highlight-index]");
  if (!trigger) return;

  const highlightIndex = Number(trigger.dataset.highlightIndex);
  recordHighlightUsage(highlights[highlightIndex]);
  openHighlightModal(highlightIndex, trigger);
});

highlightModalTrack?.addEventListener("click", (event) => {
  const trigger = event.target.closest("[data-highlight-thumb]");
  if (!trigger) return;

  const highlightIndex = Number(trigger.dataset.highlightThumb);
  recordHighlightUsage(highlights[highlightIndex]);
  updateHighlightModal(highlightIndex);
});

highlightPrev?.addEventListener("click", () => {
  const nextIndex = (activeHighlightIndex - 1 + highlights.length) % highlights.length;
  recordHighlightUsage(highlights[nextIndex]);
  moveHighlightModal(-1);
});
highlightNext?.addEventListener("click", () => {
  const nextIndex = (activeHighlightIndex + 1) % highlights.length;
  recordHighlightUsage(highlights[nextIndex]);
  moveHighlightModal(1);
});

document.querySelectorAll("[data-highlight-close]").forEach((button) => {
  button.addEventListener("click", closeHighlightModal);
});

highlightModal?.addEventListener("keydown", (event) => {
  if (event.key === "ArrowLeft") {
    event.preventDefault();
    moveHighlightModal(-1);
  } else if (event.key === "ArrowRight") {
    event.preventDefault();
    moveHighlightModal(1);
  } else {
    trapHighlightModalFocus(event);
  }
});

document.querySelectorAll("[data-form-close]").forEach((button) => {
  button.addEventListener("click", closeEmbeddedIntegration);
});

document.addEventListener("click", (event) => {
  const link = event.target.closest("a[href]");
  if (!link || link === formExternalLink) return;

  const item = integrations.find((integration) => integration.href === link.href);
  if (!item) return;

  recordIntegrationUsage(item);
  if (shouldEmbedIntegration(item)) {
    event.preventDefault();
    openEmbeddedIntegration(item);
  }
});

epiForm?.addEventListener("submit", (event) => {
  event.preventDefault();
  const formData = new FormData(epiForm);

  epiRecords = [
    {
      id: `epi-${Date.now()}`,
      employee: String(formData.get("employee") || "").trim(),
      registration: String(formData.get("registration") || "").trim(),
      item: String(formData.get("item") || "").trim(),
      code: String(formData.get("code") || "").trim(),
      deliveredAt: String(formData.get("deliveredAt") || ""),
      validityDays: Number(formData.get("validityDays") || 0),
      quantity: Number(formData.get("quantity") || 1),
      notes: String(formData.get("notes") || "").trim(),
    },
    ...epiRecords,
  ];

  saveEpiRecords();
  renderEpiRecords();
  renderIndicators();
  epiForm.reset();
  setDefaultEpiDateTime();
});

epiRows?.addEventListener("click", (event) => {
  const removeButton = event.target.closest("[data-epi-remove]");
  if (!removeButton) return;

  epiRecords = epiRecords.filter((record) => record.id !== removeButton.dataset.epiRemove);
  saveEpiRecords();
  renderEpiRecords();
  renderIndicators();
});

clearEpiRecords?.addEventListener("click", () => {
  epiRecords = [];
  saveEpiRecords();
  renderEpiRecords();
  renderIndicators();
});

auditForm?.addEventListener("submit", (event) => {
  event.preventDefault();
  const formData = new FormData(auditForm);

  audits = [
    {
      id: `audit-${Date.now()}`,
      item: String(formData.get("item") || "").trim(),
      origin: String(formData.get("origin") || "").trim(),
      owner: String(formData.get("owner") || "").trim(),
      due: String(formData.get("due") || ""),
      status: String(formData.get("status") || "Aberto"),
      evidence: String(formData.get("evidence") || "").trim(),
      createdAt: new Date().toISOString(),
    },
    ...audits,
  ];

  saveAuditRecords();
  renderAudits();
  renderCalculatedMetrics();
  renderDataSources();
  renderIndicators();
  auditForm.reset();
  setDefaultAuditDueDate();
});

auditRows?.addEventListener("click", (event) => {
  const removeButton = event.target.closest("[data-audit-remove]");
  const cycleButton = event.target.closest("[data-audit-cycle]");

  if (removeButton) {
    audits = audits.filter((audit) => audit.id !== removeButton.dataset.auditRemove);
    saveAuditRecords();
  }

  if (cycleButton) {
    const statuses = ["Aberto", "Em andamento", "Prioridade", "Resolvido"];
    audits = audits.map((audit) => {
      if (audit.id !== cycleButton.dataset.auditCycle) return audit;
      const currentIndex = statuses.indexOf(audit.status);
      return {
        ...audit,
        status: statuses[(currentIndex + 1) % statuses.length],
        updatedAt: new Date().toISOString(),
      };
    });
    saveAuditRecords();
  }

  if (removeButton || cycleButton) {
    renderAudits();
    renderCalculatedMetrics();
    renderDataSources();
    renderIndicators();
  }
});

clearAuditRecords?.addEventListener("click", () => {
  audits = [];
  saveAuditRecords();
  renderAudits();
  renderCalculatedMetrics();
  renderDataSources();
  renderIndicators();
});

toggleResolved?.addEventListener("click", () => {
  showResolved = !showResolved;
  renderAudits();
  renderIndicators();
  renderCalculatedMetrics();
});

window.addEventListener(
  "scroll",
  () => {
    syncActiveNavigation();
  },
  { passive: true },
);

window.addEventListener("resize", () => {
  setupHighlightPhotoScroll();
  syncActiveNavigation();
});

highlightCategoryScroll?.addEventListener("scroll", updateHighlightPhotoScroll, { passive: true });

window.addEventListener("load", setupHighlightPhotoScroll);

renderModules();
renderIntegrations();
renderAudits();
renderRoadmap();
renderDataSources();
renderHighlights();
renderCampaigns();
renderIndicators();
setDefaultEpiDateTime();
setDefaultAuditDueDate();
renderEpiRecords();
renderCalculatedMetrics();
syncActiveNavigation();
setupSidebar();
setupHeroTilt();
initializePersistence();
