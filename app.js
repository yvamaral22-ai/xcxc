const modules = [
  {
    tag: "Core",
    titleHtml: "Segurança do Trabalho",
    textHtml: "Rotina operacional com inspeções, DDS, APR, bloqueio, EPI e suporte.",
    items: ["Inspeção N3", "DDS", "Solicitação de EPI"],
    href: "#integracoes",
  },
  {
    tag: "Ambiental",
    titleHtml: "Meio Ambiente",
    textHtml: "Frente para resíduos, descarte, 5S e conformidade ambiental.",
    items: ["Evidências", "Planos de ação", "Rotinas de campo"],
    href: "#auditoria",
  },
  {
    tag: "Pessoas",
    titleHtml: "Treinamentos",
    textHtml: "Gestão de integração, capacitação, validade e competências críticas.",
    items: ["Matriz de treinamento", "Validades", "Reciclagens"],
    href: "#governanca",
  },
  {
    tag: "Gestao",
    titleHtml: "Indicadores e Governança",
    textHtml: "Camada executiva para auditoria, apresentação e tomada de decisão.",
    items: ["KPIs", "BI", "Versionamento"],
    href: "#painel",
  },
];

const integrations = [
  {
    title: "VES Vale",
    titleHtml: "VES Vale",
    descriptionHtml: "Solicitação institucional de acesso ao sistema VES.",
    type: "Acesso",
    owner: "Vale",
    status: "Ativo",
    href: "https://vale-forms.valeglobal.net/public?id=%2FGCDd9v%2B3IvFnie%2F2yYRKg%3D%3D&lang=pt-BR",
    searchText: "ves vale acesso formulário sistema institucional",
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

const audits = [
  {
    itemHtml: "Atualizar biblioteca oficial de procedimentos",
    originHtml: "SESMT Docs",
    ownerHtml: "Coordenação SGI",
    due: "10/05/2026",
    status: "Em andamento",
    level: "warn",
  },
  {
    itemHtml: "Validar evidências das inspeções N3",
    originHtml: "Inspeção N3",
    ownerHtml: "Técnico de segurança",
    due: "08/05/2026",
    status: "Prioridade",
    level: "danger",
  },
  {
    itemHtml: "Consolidar indicadores para reunião executiva",
    originHtml: "Painel SGI",
    ownerHtml: "Analista SGI",
    due: "12/05/2026",
    status: "Em andamento",
    level: "warn",
  },
  {
    itemHtml: "Revisar canal de solicitação de EPI",
    originHtml: "Formulário EPI",
    ownerHtml: "Almoxarifado + SESMT",
    due: "06/05/2026",
    status: "Resolvido",
    level: "ok",
  },
];

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
const searchInput = document.querySelector("#integrationSearch");
const toggleResolved = document.querySelector("#toggleResolved");
const navToggle = document.querySelector("#navToggle");
const sidebarClose = document.querySelector("#sidebarClose");
const sidebarOverlay = document.querySelector("#sidebarOverlay");
const sidebar = document.querySelector("#sidebar");
const heroMedia = document.querySelector(".hero-media");
let showResolved = true;

function statusClass(status) {
  if (["Ativo", "Pronto", "Escalável", "Resolvido"].includes(status)) return "ok";
  if (status === "Prioridade") return "danger";
  return "warn";
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
  const filtered = integrations.filter((item) =>
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
          <a class="button primary has-arrow" href="${item.href}" target="_blank" rel="noreferrer"><span>Abrir</span></a>
        </article>
      `,
    )
    .join("");
}

function renderAudits() {
  const rows = audits.filter((audit) => showResolved || audit.status !== "Resolvido");
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
    }
  });
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

toggleResolved?.addEventListener("click", () => {
  showResolved = !showResolved;
  renderAudits();
});

window.addEventListener("scroll", syncActiveNavigation, { passive: true });

renderModules();
renderIntegrations();
renderAudits();
renderRoadmap();
syncActiveNavigation();
setupSidebar();
setupHeroTilt();
