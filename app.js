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

const indicators = [
  { label: "N3 no mes", value: "142", goal: "Meta 150", tone: "good" },
  { label: "DDS realizados", value: "97%", goal: "Meta 95%", tone: "info" },
  { label: "Treinamentos", value: "07", goal: "Vencendo no mes", tone: "warn" },
  { label: "Pendencias", value: "03", goal: "Prioridade RAC", tone: "danger" },
];

const ranking = [
  { name: "Joao Silva", value: "28" },
  { name: "Pedro Santos", value: "24" },
  { name: "Carlos Lima", value: "18" },
  { name: "Rafael Costa", value: "15" },
  { name: "Lucas Martins", value: "12" },
];

const units = [
  { name: "Brucutu", value: "78", detail: "Registros N3" },
  { name: "Itabira", value: "70", detail: "Registros N3" },
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
const campaignList = document.querySelector("#campaignList");
const mediaList = document.querySelector("#mediaList");
const indicatorRings = document.querySelector("#indicatorRings");
const rankingList = document.querySelector("#rankingList");
const unitGrid = document.querySelector("#unitGrid");
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
let showResolved = true;

function statusClass(status) {
  if (["Ativo", "Pronto", "Escalável", "Resolvido"].includes(status)) return "ok";
  if (status === "Prioridade") return "danger";
  return "warn";
}

function shouldEmbedIntegration(item) {
  return ["Acesso", "Comunicado", "Formulario", "Formulário"].includes(item.type);
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
      closeEmbeddedIntegration();
    }
  });
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

function renderIndicators() {
  if (!indicatorRings || !rankingList || !unitGrid) return;

  indicatorRings.innerHTML = indicators
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

  rankingList.innerHTML = ranking
    .map(
      (item, index) => `
        <div>
          <span>${index + 1}. ${item.name}</span>
          <strong>${item.value}</strong>
        </div>
      `,
    )
    .join("");

  unitGrid.innerHTML = units
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

toggleResolved?.addEventListener("click", () => {
  showResolved = !showResolved;
  renderAudits();
});

window.addEventListener("scroll", syncActiveNavigation, { passive: true });

renderModules();
renderIntegrations();
renderAudits();
renderRoadmap();
renderCampaigns();
renderIndicators();
syncActiveNavigation();
setupSidebar();
setupHeroTilt();
