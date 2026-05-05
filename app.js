const modules = [
  {
    tag: "Core",
    title: "Segurança do Trabalho",
    text: "Rotina operacional com inspeções, DDS, APR, bloqueio, EPI e suporte.",
    items: ["Inspeção N3", "DDS", "Solicitação de EPI"],
    href: "#integracoes",
  },
  {
    tag: "Ambiental",
    title: "Meio Ambiente",
    text: "Frente para resíduos, descarte, 5S e conformidade ambiental.",
    items: ["Evidências", "Planos de ação", "Rotinas de campo"],
    href: "#auditoria",
  },
  {
    tag: "Pessoas",
    title: "Treinamentos",
    text: "Gestão de integração, capacitação, validade e competências críticas.",
    items: ["Matriz de treinamento", "Validades", "Reciclagens"],
    href: "#governanca",
  },
  {
    tag: "Gestão",
    title: "Indicadores e Governança",
    text: "Camada executiva para auditoria, apresentação e tomada de decisão.",
    items: ["KPIs", "BI", "Versionamento"],
    href: "#painel",
  },
];

const integrations = [
  {
    title: "VES Vale",
    description: "Solicitação institucional de acesso ao sistema VES.",
    type: "Acesso",
    owner: "Vale",
    status: "Ativo",
    href: "https://vale-forms.valeglobal.net/public?id=%2FGCDd9v%2B3IvFnie%2F2yYRKg%3D%3D&lang=pt-BR",
  },
  {
    title: "Documentações SESMT",
    description: "Biblioteca SharePoint com documentos institucionais da área.",
    type: "Biblioteca",
    owner: "SESMT",
    status: "Ativo",
    href: "https://xcmgbrasilindustria.sharepoint.com/sites/SGI-DOCUMENTAOSESMTXCMG/Documentos%20Compartilhados/Forms/AllItems.aspx?viewid=8817a399%2D4028%2D4a45%2Db3fc%2D1c0176611a0e&as=json",
  },
  {
    title: "Inspeção N3",
    description: "Registro operacional das inspeções críticas da operação.",
    type: "Formulário",
    owner: "Segurança",
    status: "Ativo",
    href: "https://forms.office.com/r/uftekVRsSy?origin=lprLink",
  },
  {
    title: "DDS",
    description: "Canal diário de comunicação preventiva e alinhamento.",
    type: "Formulário",
    owner: "Operação",
    status: "Ativo",
    href: "https://forms.office.com/r/tugrbGGgUu?origin=lprLink",
  },
  {
    title: "Solicitação de EPI",
    description: "Canal formal para requisições de equipamentos de proteção.",
    type: "Formulário",
    owner: "SESMT",
    status: "Ativo",
    href: "https://forms.office.com/r/35NYBAHrab?origin=lprLink",
  },
  {
    title: "WhatsApp Segurança",
    description: "Contato rápido com a equipe de apoio da segurança.",
    type: "Suporte",
    owner: "Segurança",
    status: "Ativo",
    href: "https://wa.me/5531971840458?text=Ol%C3%A1%2C%20preciso%20de%20apoio%20na%20gest%C3%A3o%20de%20seguran%C3%A7a.",
  },
];

const audits = [
  {
    item: "Atualizar biblioteca oficial de procedimentos",
    origin: "SESMT Docs",
    owner: "Coordenação SGI",
    due: "10/05/2026",
    status: "Em andamento",
    level: "warn",
  },
  {
    item: "Validar evidências das inspeções N3",
    origin: "Inspeção N3",
    owner: "Técnico de segurança",
    due: "08/05/2026",
    status: "Prioridade",
    level: "danger",
  },
  {
    item: "Consolidar indicadores para reunião executiva",
    origin: "Painel SGI",
    owner: "Analista SGI",
    due: "12/05/2026",
    status: "Em andamento",
    level: "warn",
  },
  {
    item: "Revisar canal de solicitação de EPI",
    origin: "Formulário EPI",
    owner: "Almoxarifado + SESMT",
    due: "06/05/2026",
    status: "Resolvido",
    level: "ok",
  },
];

const roadmap = [
  ["1", "Validação visual", "Conceito premium e postura institucional", "Pronto", "ok"],
  ["2", "Dados reais", "Números, responsáveis e conteúdos oficiais", "Próxima fase", "warn"],
  ["3", "Publicação", "Hospedagem e ambiente oficial", "Planejado", "warn"],
  ["4", "Expansão", "BI, biblioteca, permissões e novos módulos", "Escalável", "ok"],
];

const moduleGrid = document.querySelector("#moduleGrid");
const integrationGrid = document.querySelector("#integrationGrid");
const auditRows = document.querySelector("#auditRows");
const roadmapNode = document.querySelector("#roadmap");
const searchInput = document.querySelector("#integrationSearch");
const toggleResolved = document.querySelector("#toggleResolved");
let showResolved = true;

function statusClass(status) {
  if (status === "Ativo" || status === "Pronto" || status === "Escalável" || status === "Resolvido") return "ok";
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
      <a class="button neutral" href="${module.href}">Abrir módulo</a>
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
