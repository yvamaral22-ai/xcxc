const modules = [
  {
    tag: "Core",
    title: "Seguranca do Trabalho",
    text: "Rotina operacional com inspecoes, DDS, APR, bloqueio, EPI e suporte.",
    items: ["Inspecao N3", "DDS", "Solicitacao de EPI"],
    href: "#integracoes",
  },
  {
    tag: "Ambiental",
    title: "Meio Ambiente",
    text: "Frente para residuos, descarte, 5S e conformidade ambiental.",
    items: ["Evidencias", "Planos de acao", "Rotinas de campo"],
    href: "#auditoria",
  },
  {
    tag: "Pessoas",
    title: "Treinamentos",
    text: "Gestao de integracao, capacitacao, validade e competencias criticas.",
    items: ["Matriz de treinamento", "Validades", "Reciclagens"],
    href: "#governanca",
  },
  {
    tag: "Gestao",
    title: "Indicadores e Governanca",
    text: "Camada executiva para auditoria, apresentacao e tomada de decisao.",
    items: ["KPIs", "BI", "Versionamento"],
    href: "#painel",
  },
];

const integrations = [
  {
    title: "VES Vale",
    description: "Solicitacao institucional de acesso ao sistema VES.",
    type: "Acesso",
    owner: "Vale",
    status: "Ativo",
    href: "https://vale-forms.valeglobal.net/public?id=%2FGCDd9v%2B3IvFnie%2F2yYRKg%3D%3D&lang=pt-BR",
  },
  {
    title: "Documentacoes SESMT",
    description: "Biblioteca SharePoint com documentos institucionais da area.",
    type: "Biblioteca",
    owner: "SESMT",
    status: "Ativo",
    href: "https://xcmgbrasilindustria.sharepoint.com/sites/SGI-DOCUMENTAOSESMTXCMG/Documentos%20Compartilhados/Forms/AllItems.aspx?viewid=8817a399%2D4028%2D4a45%2Db3fc%2D1c0176611a0e&as=json",
  },
  {
    title: "Inspecao N3",
    description: "Registro operacional das inspecoes criticas da operacao.",
    type: "Formulario",
    owner: "Seguranca",
    status: "Ativo",
    href: "https://forms.office.com/r/uftekVRsSy?origin=lprLink",
  },
  {
    title: "DDS",
    description: "Canal diario de comunicacao preventiva e alinhamento.",
    type: "Formulario",
    owner: "Operacao",
    status: "Ativo",
    href: "https://forms.office.com/r/tugrbGGgUu?origin=lprLink",
  },
  {
    title: "Solicitacao de EPI",
    description: "Canal formal para requisicoes de equipamentos de protecao.",
    type: "Formulario",
    owner: "SESMT",
    status: "Ativo",
    href: "https://forms.office.com/r/35NYBAHrab?origin=lprLink",
  },
  {
    title: "WhatsApp Seguranca",
    description: "Contato rapido com a equipe de apoio da seguranca.",
    type: "Suporte",
    owner: "Seguranca",
    status: "Ativo",
    href: "https://wa.me/5531971840458?text=Ol%C3%A1%2C%20preciso%20de%20apoio%20na%20gest%C3%A3o%20de%20seguran%C3%A7a.",
  },
];

const audits = [
  {
    item: "Atualizar biblioteca oficial de procedimentos",
    origin: "SESMT Docs",
    owner: "Coordenacao SGI",
    due: "10/05/2026",
    status: "Em andamento",
    level: "warn",
  },
  {
    item: "Validar evidencias das inspecoes N3",
    origin: "Inspecao N3",
    owner: "Tecnico de seguranca",
    due: "08/05/2026",
    status: "Prioridade",
    level: "danger",
  },
  {
    item: "Consolidar indicadores para reuniao executiva",
    origin: "Painel SGI",
    owner: "Analista SGI",
    due: "12/05/2026",
    status: "Em andamento",
    level: "warn",
  },
  {
    item: "Revisar canal de solicitacao de EPI",
    origin: "Formulario EPI",
    owner: "Almoxarifado + SESMT",
    due: "06/05/2026",
    status: "Resolvido",
    level: "ok",
  },
];

const roadmap = [
  ["1", "Validacao visual", "Conceito premium e postura institucional", "Pronto", "ok"],
  ["2", "Dados reais", "Numeros, responsaveis e conteudos oficiais", "Proxima fase", "warn"],
  ["3", "Publicacao", "Hospedagem e ambiente oficial", "Planejado", "warn"],
  ["4", "Expansao", "BI, biblioteca, permissoes e novos modulos", "Escalavel", "ok"],
];

const moduleGrid = document.querySelector("#moduleGrid");
const integrationGrid = document.querySelector("#integrationGrid");
const auditRows = document.querySelector("#auditRows");
const roadmapNode = document.querySelector("#roadmap");
const searchInput = document.querySelector("#integrationSearch");
const toggleResolved = document.querySelector("#toggleResolved");
let showResolved = true;

function statusClass(status) {
  if (status === "Ativo" || status === "Pronto" || status === "Escalavel" || status === "Resolvido") return "ok";
  if (status === "Prioridade") return "danger";
  return "warn";
}

function renderModules() {
  moduleGrid.innerHTML = modules.map((module) => `
    <article class="module-card">
      <span class="tag">${module.tag}</span>
      <h3>${module.title}</h3>
      <p>${module.text}</p>
      <ul>${module.items.map((item) => `<li>${item}</li>`).join("")}</ul>
      <a class="button neutral" href="${module.href}">Abrir modulo</a>
    </article>
  `).join("");
}

function renderIntegrations(filter = "") {
  const term = filter.trim().toLowerCase();
  const filtered = integrations.filter((item) => {
    return [item.title, item.description, item.type, item.owner].join(" ").toLowerCase().includes(term);
  });

  integrationGrid.innerHTML = filtered.map((item) => `
    <article class="integration-card">
      <div>
        <h3>${item.title}</h3>
        <p>${item.description}</p>
      </div>
      <div class="card-meta">
        <span>${item.type}</span>
        <span>${item.owner}</span>
        <span class="status-pill ${statusClass(item.status)}">${item.status}</span>
      </div>
      <a class="button primary" href="${item.href}" target="_blank" rel="noreferrer">Abrir</a>
    </article>
  `).join("");
}

function renderAudits() {
  const rows = audits.filter((audit) => showResolved || audit.status !== "Resolvido");
  auditRows.innerHTML = rows.map((audit) => `
    <tr>
      <td>${audit.item}</td>
      <td>${audit.origin}</td>
      <td>${audit.owner}</td>
      <td>${audit.due}</td>
      <td><span class="status-pill ${audit.level}">${audit.status}</span></td>
    </tr>
  `).join("");
  toggleResolved.textContent = showResolved ? "Ocultar resolvidos" : "Mostrar resolvidos";
}

function renderRoadmap() {
  roadmapNode.innerHTML = roadmap.map(([number, title, text, status, level]) => `
    <div class="roadmap-step">
      <div class="step-number">${number}</div>
      <div>
        <strong>${title}</strong>
        <span>${text}</span>
      </div>
      <span class="status-pill ${level}">${status}</span>
    </div>
  `).join("");
}

function syncActiveNavigation() {
  const sections = [...document.querySelectorAll(".section-block")];
  const links = [...document.querySelectorAll(".nav-link")];
  const current = sections.reduce((active, section) => {
    const rect = section.getBoundingClientRect();
    return rect.top <= 150 ? section.id : active;
  }, "painel");

  links.forEach((link) => {
    link.classList.toggle("active", link.dataset.section === current);
  });
}

searchInput.addEventListener("input", (event) => renderIntegrations(event.target.value));
toggleResolved.addEventListener("click", () => {
  showResolved = !showResolved;
  renderAudits();
});
window.addEventListener("scroll", syncActiveNavigation, { passive: true });

renderModules();
renderIntegrations();
renderAudits();
renderRoadmap();
syncActiveNavigation();
