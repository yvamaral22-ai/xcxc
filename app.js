const modules = [
  {
    tag: "Core",
    titleHtml: "Segurança do Trabalho",
    textHtml: "Rotina operacional com inspeções, DDS, APR, bloqueio, EPI e suporte.",
    items: ["Inspeção N3", "DDS", "Solicitação de EPI"],
    href: "#integracoes",
  },
  {
    tag: "Comunicacao",
    titleHtml: "Campanhas e Comunicados",
    textHtml: "Destaques do mes, comunicados recentes e materiais para engajamento em campo.",
    items: ["Campanha do mes", "Comunicados", "Materiais de apoio"],
    href: "#campanhas",
  },
  {
    tag: "Midia",
    titleHtml: "Videos, Treinamentos e DDS",
    textHtml: "Conteudos audiovisuais para abertura, reciclagem, DDS e liberacoes criticas.",
    items: ["Videos em destaque", "Treinamentos", "DDS orientado"],
    href: "#campanhas",
  },
  {
    tag: "Gestao",
    titleHtml: "Indicadores e Performance",
    textHtml: "Camada executiva para metas, ranking, unidades e tomada de decisao.",
    items: ["KPIs", "Ranking N3", "Unidades"],
    href: "#indicadores",
  },
  {
    tag: "Documentos",
    titleHtml: "Biblioteca SESMT",
    textHtml: "Procedimentos, evidencias, formularios e documentos oficiais do SGI.",
    items: ["SharePoint", "Procedimentos", "Evidencias"],
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
    titleHtml: "Pendencias e Evidencias",
    textHtml: "Fila de acoes, responsaveis, prazos e status para acompanhamento de auditoria.",
    items: ["Plano de acao", "Prazos", "Responsaveis"],
    href: "#auditoria",
  },
];

const integrations = [
  {
    title: "VES Vale",
    titleHtml: "VES Vale",
    descriptionHtml: "Formulario Vale de solicitacao de acesso ao sistema de educacao - VES.",
    type: "Acesso",
    owner: "Vale",
    status: "Ativo",
    href: "https://vale-forms.valeglobal.net/public?id=%2FGCDd9v%2B3IvFnie%2F2yYRKg%3D%3D&lang=pt-BR",
    searchText: "ves vale acesso formulario sistema educacao institucional",
  },
  {
    title: "IRIS Vale",
    titleHtml: "IRIS Vale",
    descriptionHtml: "Acesso Vale para registro de desvios N3 e inspecoes.",
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
    descriptionHtml: "Formulario Microsoft para registro de N3 da operacao XCMG.",
    type: "Formulario",
    owner: "XCMG",
    status: "Ativo",
    href: "https://forms.cloud.microsoft/r/5T6140MTkc?origin=lprLink",
    searchText: "registro n3 xcmg formulario microsoft inspecao seguranca",
  },
  {
    title: "Registro N3 - XCMG 02",
    titleHtml: "Registro N3 - XCMG 02",
    descriptionHtml: "Formulario Microsoft para registro de N3 da operacao XCMG.",
    type: "Formulario",
    owner: "XCMG",
    status: "Ativo",
    href: "https://forms.cloud.microsoft/r/QFULCPdRjR?origin=lprLink",
    searchText: "registro n3 xcmg formulario microsoft inspecao seguranca",
  },
  {
    title: "Registro N3 - XCMG 03",
    titleHtml: "Registro N3 - XCMG 03",
    descriptionHtml: "Formulario Microsoft para registro de N3 da operacao XCMG.",
    type: "Formulario",
    owner: "XCMG",
    status: "Ativo",
    href: "https://forms.cloud.microsoft/r/tugrbGGgUu?origin=lprLink",
    searchText: "registro n3 xcmg formulario microsoft inspecao seguranca dds",
  },
  {
    title: "Registro N3 - XCMG 04",
    titleHtml: "Registro N3 - XCMG 04",
    descriptionHtml: "Formulario Microsoft para registro de N3 da operacao XCMG.",
    type: "Formulario",
    owner: "XCMG",
    status: "Ativo",
    href: "https://forms.cloud.microsoft/r/Y807NMZNut?origin=lprLink",
    searchText: "registro n3 xcmg formulario microsoft inspecao seguranca",
  },
  {
    title: "Registro N3 - XCMG 05",
    titleHtml: "Registro N3 - XCMG 05",
    descriptionHtml: "Formulario Microsoft para registro de N3 da operacao XCMG.",
    type: "Formulario",
    owner: "XCMG",
    status: "Ativo",
    href: "https://forms.cloud.microsoft/r/dUvnAjM2GH?origin=lprLink",
    searchText: "registro n3 xcmg formulario microsoft inspecao seguranca",
  },
  {
    title: "Registro N3 - XCMG 06",
    titleHtml: "Registro N3 - XCMG 06",
    descriptionHtml: "Formulario Microsoft para registro de N3 da operacao XCMG.",
    type: "Formulario",
    owner: "XCMG",
    status: "Ativo",
    href: "https://forms.cloud.microsoft/r/35NYBAHrab?origin=lprLink",
    searchText: "registro n3 xcmg formulario microsoft inspecao seguranca epi",
  },
  {
    title: "Registro N3 - XCMG 07",
    titleHtml: "Registro N3 - XCMG 07",
    descriptionHtml: "Formulario Microsoft para registro de N3 da operacao XCMG.",
    type: "Formulario",
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
    searchText: "dds formulário operação comunicação preventiva diário",
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
    descriptionHtml: "Divulgacao mensal de direitos humanos Vale.",
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

const audits = [];

const campaigns = [
  {
    titleHtml: "Treinamento Trabalho em Altura",
    textHtml: "Reciclagem obrigatoria para frentes com liberacao critica.",
    date: "06/05/2026",
    status: "Publicado",
    level: "ok",
  },
  {
    titleHtml: "DDS Especial - Seguranca nas Maos",
    textHtml: "Conteudo rapido para alinhamento antes da atividade.",
    date: "05/05/2026",
    status: "Destaque",
    level: "warn",
  },
  {
    titleHtml: "Nova atualizacao de procedimentos",
    textHtml: "Documentos oficiais revisados para consulta SESMT.",
    date: "04/05/2026",
    status: "Revisado",
    level: "ok",
  },
];

const highlights = [
  {
    label: "Seguranca",
    titleHtml: "Destaque do mes em seguranca",
    textHtml: "Reconhecimento para atitude preventiva, cuidado ativo e boas praticas em campo.",
    image: "./assets/destaque-seguranca.jpg",
    alt: "Foto do destaque do mes em seguranca",
    status: "Mensal",
    photos: [
      { src: "./assets/destaque-seguranca.jpg", alt: "Foto principal do destaque do mes em seguranca" },
      { src: "./assets/destaque-seguranca-02.jpg", alt: "Segunda foto do destaque do mes em seguranca" },
      { src: "./assets/destaque-seguranca-03.jpg", alt: "Terceira foto do destaque do mes em seguranca" },
    ],
  },
  {
    label: "Kaizen",
    titleHtml: "Destaque Kaizen",
    textHtml: "Melhoria aplicada que reduziu risco, aumentou organizacao ou elevou a eficiencia da operacao.",
    image: "./assets/destaque-kaizen.jpg",
    alt: "Foto do destaque Kaizen",
    status: "Melhoria",
    photos: [
      { src: "./assets/destaque-kaizen.jpg", alt: "Foto principal do destaque Kaizen" },
      { src: "./assets/destaque-kaizen-02.jpg", alt: "Segunda foto do destaque Kaizen" },
      { src: "./assets/destaque-kaizen-03.jpg", alt: "Terceira foto do destaque Kaizen" },
    ],
  },
  {
    label: "N3",
    titleHtml: "N3 destaque",
    textHtml: "Registro de desvio, tratativa ou acao exemplar com impacto direto na seguranca operacional.",
    image: "./assets/destaque-n3.jpg",
    alt: "Foto do destaque N3",
    status: "Operacao",
    photos: [
      { src: "./assets/destaque-n3.jpg", alt: "Foto principal do destaque N3" },
      { src: "./assets/destaque-n3-02.jpg", alt: "Segunda foto do destaque N3" },
      { src: "./assets/destaque-n3-03.jpg", alt: "Terceira foto do destaque N3" },
    ],
  },
  {
    label: "Inspecao",
    titleHtml: "Inspecao destaque",
    textHtml: "Inspecao com evidencia forte, criterio tecnico e encaminhamento claro para a rotina.",
    image: "./assets/destaque-inspecao.jpg",
    alt: "Foto da inspecao destaque",
    status: "Auditoria",
    photos: [
      { src: "./assets/destaque-inspecao.jpg", alt: "Foto principal da inspecao destaque" },
      { src: "./assets/destaque-inspecao-02.jpg", alt: "Segunda foto da inspecao destaque" },
      { src: "./assets/destaque-inspecao-03.jpg", alt: "Terceira foto da inspecao destaque" },
    ],
  },
  {
    label: "Equipe",
    titleHtml: "Fotos da equipe",
    textHtml: "Galeria institucional para valorizar o time responsavel pela rotina de seguranca.",
    image: "./assets/destaque-equipe.jpg",
    alt: "Foto da equipe de seguranca",
    status: "Equipe",
    photos: [
      { src: "./assets/destaque-equipe.jpg", alt: "Foto principal da equipe de seguranca" },
      { src: "./assets/destaque-equipe-02.jpg", alt: "Segunda foto da equipe de seguranca" },
      { src: "./assets/destaque-equipe-03.jpg", alt: "Terceira foto da equipe de seguranca" },
    ],
  },
];

const mediaItems = [
  {
    titleHtml: "DDS - Seguranca nas Maos",
    textHtml: "Video curto para reforco comportamental em campo.",
    meta: "Duracao: 02:35",
  },
  {
    titleHtml: "Bloqueio e Etiquetagem",
    textHtml: "Liberacao critica para atividades com energia perigosa.",
    meta: "Duracao: 05:10",
  },
  {
    titleHtml: "Trabalho em Altura - Reciclagem",
    textHtml: "Trilha com vencimento acompanhado pelo SGI.",
    meta: "Progresso medio: 65%",
  },
];

const epiStorageKey = "sgiEpiRecordsV2";
const defaultEpiRecords = [];

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

const moduleGrid = document.querySelector("#moduleGrid");
const integrationGrid = document.querySelector("#integrationGrid");
const auditRows = document.querySelector("#auditRows");
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
let highlightPhotoScrollDistance = 0;
let activeHighlightIndex = 0;
let lastHighlightTrigger = null;

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

function shouldEmbedIntegration(item) {
  return ["Acesso", "Comunicado", "Formulario", "Formulário"].includes(item.type);
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
  return ["Acesso", "Comunicado", "Formulario", "Formulário"].includes(item.type);
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
  const activeIntegrations = integrations.filter((item) => item.status === "Ativo").length;
  const spreadsheetAccesses = integrations.filter(isSpreadsheetAccess).length;
  const requestAccesses = integrations.filter(isRequestAccess).length;
  const openAudits = audits.filter((audit) => audit.status !== "Resolvido").length;
  const epiTotals = getEpiTotals();
  const openItems = openAudits + epiTotals.soon + epiTotals.expired;
  const totalTracked = requestAccesses + epiRecords.length + audits.length;
  const compliantTracked = requestAccesses + epiTotals.ok + audits.filter((audit) => audit.status === "Resolvido").length;
  const compliance = totalTracked ? Math.round((compliantTracked / totalTracked) * 100) : 100;

  return {
    activeIntegrations,
    spreadsheetAccesses,
    requestAccesses,
    openAudits,
    epiTotals,
    openItems,
    totalRequests: requestAccesses + epiRecords.length,
    compliance,
  };
}

function getCalculatedRanking() {
  const totalsByEmployee = epiRecords.reduce((acc, record) => {
    const name = record.employee || "Sem identificacao";
    acc[name] = (acc[name] || 0) + Number(record.quantity || 1);
    return acc;
  }, {});

  return Object.entries(totalsByEmployee)
    .map(([name, value]) => ({ name, value }))
    .sort((a, b) => b.value - a.value)
    .slice(0, 5);
}

function getCalculatedOrigins() {
  const totalsByOwner = integrations.reduce((acc, item) => {
    const name = item.owner || "Sem origem";
    acc[name] = (acc[name] || 0) + 1;
    return acc;
  }, {});

  return Object.entries(totalsByOwner)
    .map(([name, value]) => ({ name, value, detail: "Acessos cadastrados" }))
    .sort((a, b) => b.value - a.value)
    .slice(0, 4);
}

function setText(node, value) {
  if (node) node.textContent = value;
}

function toPlainText(value) {
  const parser = new DOMParser();
  return parser.parseFromString(value, "text/html").documentElement.textContent || value;
}

function getHighlightPhotos(highlight) {
  return highlight.photos?.length ? highlight.photos : [{ src: highlight.image, alt: highlight.alt }];
}

function renderCalculatedMetrics() {
  const metrics = getOperationalMetrics();

  setText(metricNodes.miniCompliance, `${metrics.compliance}%`);
  setText(metricNodes.miniRequests, String(metrics.totalRequests).padStart(2, "0"));
  setText(metricNodes.miniIntegrations, String(metrics.activeIntegrations).padStart(2, "0"));
  setText(metricNodes.miniOpenItems, String(metrics.openItems).padStart(2, "0"));
  setText(metricNodes.heroIntegrationCount, String(metrics.activeIntegrations).padStart(2, "0"));
  setText(metricNodes.statusCompliance, `${metrics.compliance}%`);
  setText(metricNodes.statusComplianceLabel, `${metrics.epiTotals.ok} EPIs em dia`);
  setText(metricNodes.statusRequests, String(metrics.totalRequests).padStart(2, "0"));
  setText(metricNodes.statusRequestsLabel, `${metrics.requestAccesses} acessos + ${epiRecords.length} entregas`);
  setText(metricNodes.statusIntegrations, String(metrics.activeIntegrations).padStart(2, "0"));
  setText(metricNodes.statusOpenItems, String(metrics.openItems).padStart(2, "0"));
  setText(metricNodes.statusOpenLabel, `${metrics.openAudits} auditoria + ${metrics.epiTotals.soon + metrics.epiTotals.expired} EPI`);
  setText(metricNodes.blueprintRequests, String(metrics.totalRequests));
  setText(metricNodes.blueprintSheets, String(metrics.spreadsheetAccesses));
  setText(metricNodes.blueprintCompliant, metrics.openItems ? "Nao" : "Sim");
  setText(metricNodes.blueprintOpenItems, String(metrics.openItems).padStart(2, "0"));
  setText(metricNodes.previewRequests, String(metrics.totalRequests));
  setText(metricNodes.previewCompliance, `${metrics.compliance}%`);
  setText(metricNodes.previewSheets, String(metrics.spreadsheetAccesses));
  setText(metricNodes.previewOpenItems, String(metrics.openItems).padStart(2, "0"));
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
    .map(
      (item) => `
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
          </div>
          ${
            shouldEmbedIntegration(item)
              ? `<button class="button primary has-arrow" type="button" data-integration-index="${item.index}"><span>Preencher</span></button>`
              : `<a class="button primary has-arrow" href="${item.href}" target="_blank" rel="noreferrer"><span>Abrir</span></a>`
          }
        </article>
      `,
    )
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

  if (highlightModalTitle) highlightModalTitle.textContent = `Visualizacao: ${toPlainText(highlight.titleHtml)}`;
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
  const rows = audits.filter((audit) => showResolved || audit.status !== "Resolvido");
  if (!rows.length) {
    auditRows.innerHTML = `
      <tr>
        <td colspan="5">Nenhuma acao aberta cadastrada em fonte integrada.</td>
      </tr>
    `;
    toggleResolved.innerHTML = `<span>${showResolved ? "Ocultar resolvidos" : "Mostrar resolvidos"}</span>`;
    return;
  }

  auditRows.innerHTML = rows
    .map(
      (audit) => `
        <tr>
          <td>${audit.itemHtml}</td>
          <td>${audit.originHtml}</td>
          <td>${audit.ownerHtml}</td>
          <td>${audit.due}</td>
          <td><span class="status-pill ${audit.level}">${audit.status}</span></td>
        </tr>
      `,
    )
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
  const calculatedIndicators = [
    {
      label: "Requisicoes",
      value: String(metrics.totalRequests).padStart(2, "0"),
      goal: `${metrics.requestAccesses} acessos + ${epiRecords.length} EPIs`,
      tone: "info",
    },
    {
      label: "Planilhas / docs",
      value: String(metrics.spreadsheetAccesses).padStart(2, "0"),
      goal: "Acessos calculados",
      tone: "info",
    },
    {
      label: "Conformidade",
      value: `${metrics.compliance}%`,
      goal: `${metrics.epiTotals.ok} EPIs em dia`,
      tone: metrics.compliance >= 90 ? "good" : "warn",
    },
    {
      label: "Abertos",
      value: String(metrics.openItems).padStart(2, "0"),
      goal: `${metrics.openAudits} auditoria + ${metrics.epiTotals.soon + metrics.epiTotals.expired} EPI`,
      tone: metrics.openItems ? "danger" : "good",
    },
  ];

  indicatorRings.innerHTML = calculatedIndicators
    .map(
      (indicator) => `
        <article class="indicator-ring tone-${indicator.tone}">
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

  unitGrid.innerHTML = getCalculatedOrigins()
    .map(
      (unit) => `
        <div>
          <span>${unit.name}</span>
          <strong>${unit.value}</strong>
          <em>${unit.detail}</em>
        </div>
      `,
    )
    .join("");
}

function renderEpiRecords() {
  if (!epiRows) return;

  const totals = getEpiTotals();

  if (epiOkCount) epiOkCount.textContent = totals.ok;
  if (epiSoonCount) epiSoonCount.textContent = totals.soon;
  if (epiExpiredCount) epiExpiredCount.textContent = totals.expired;
  renderCalculatedMetrics();

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
            <strong>${record.employee}</strong>
            <span>${record.registration || "Sem matricula"}</span>
          </td>
          <td>
            <strong>${record.item}</strong>
            <span>${record.code || "Sem CA"} | Qtd. ${record.quantity || 1}</span>
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
    openEmbeddedIntegration(item);
  }
});

highlightGrid?.addEventListener("click", (event) => {
  const trigger = event.target.closest("[data-highlight-index]");
  if (!trigger) return;

  openHighlightModal(Number(trigger.dataset.highlightIndex), trigger);
});

highlightModalTrack?.addEventListener("click", (event) => {
  const trigger = event.target.closest("[data-highlight-thumb]");
  if (!trigger) return;

  updateHighlightModal(Number(trigger.dataset.highlightThumb));
});

highlightPrev?.addEventListener("click", () => moveHighlightModal(-1));
highlightNext?.addEventListener("click", () => moveHighlightModal(1));

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

  const item = integrations.find((integration) => integration.href === link.href && shouldEmbedIntegration(integration));
  if (!item) return;

  event.preventDefault();
  openEmbeddedIntegration(item);
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
renderHighlights();
renderCampaigns();
renderIndicators();
setDefaultEpiDateTime();
renderEpiRecords();
renderCalculatedMetrics();
syncActiveNavigation();
setupSidebar();
setupHeroTilt();
