import {
  loadPortfolio,
  saveLocal,
  isAuthenticated,
  setAuthenticated,
  verifyCredentials,
  DEFAULT_CREDENTIALS,
  uid,
  toast,
  fileToDataUrl,
  escapeHtml
} from "./common.js";

let data = null;
let currentTab = "profile";

const panels = {
  profile: renderProfile,
  stack: renderStack,
  skills: renderSkills,
  projects: () => renderCollection("projects", projectFields, "Novo Projeto"),
  freelance: () => renderCollection("freelanceSites", siteFields, "Novo Site Freelance"),
  experience: () => renderCollection("experience", jobFields, "Nova Experiência"),
  education: renderEducation,
  publish: renderPublish,
  password: renderPassword
};

const projectFields = [
  ["title", "Título do Projeto"],
  ["category", "Categoria (ex: Mobile Nativo · Kotlin & KMP)"],
  ["status", "Status (ex: Em desenvolvimento / Portfólio / Mobile Nativo)"],
  ["summary", "Resumo para Vitrine", "textarea"],
  ["description", "Descrição Detalhada da Arquitetura", "textarea"],
  ["tags", "Tags / Tecnologias (separadas por vírgula)"],
  ["repo", "Link do Repositório (GitHub)"],
  ["demo", "Link de Demonstração / App Store / Play Store"],
  ["featured", "Destacar no topo da página inicial", "checkbox"]
];

const siteFields = [
  ["title", "Título do Site Freelance"],
  ["summary", "Resumo do Projeto Entregue", "textarea"],
  ["url", "URL do Site Publicado"],
  ["tags", "Tags (separadas por vírgula)"]
];

const jobFields = [
  ["role", "Cargo"],
  ["company", "Empresa / Órgão"],
  ["period", "Período (ex: Mar/2024 – Set/2024)"],
  ["location", "Local (ex: Salvador / BA)"],
  ["description", "Descrição das Atividades e Conquistas", "textarea"],
  ["tags", "Tags / Tecnologias (separadas por vírgula)"]
];

function persist() {
  saveLocal(data);
}

function field(id, label, type = "text", value = "") {
  if (type === "textarea") {
    return `
      <label>${label}
        <textarea data-k="${id}">${escapeHtml(value || "")}</textarea>
      </label>`;
  }
  if (type === "checkbox") {
    return `
      <label style="display:flex; align-items:center; gap:8px; cursor:pointer; margin: 16px 0;">
        <input type="checkbox" data-k="${id}" ${value ? "checked" : ""} style="width: auto;">
        <span>${label}</span>
      </label>`;
  }
  return `
    <label>${label}
      <input type="${type}" data-k="${id}" value="${escapeHtml(String(value || ""))}">
    </label>`;
}

function bindObject(root, obj, onAfterChange = null) {
  root.querySelectorAll("[data-k]").forEach((el) => {
    const update = () => {
      const key = el.dataset.k;
      if (el.type === "checkbox") {
        obj[key] = el.checked;
      } else if (el.type === "number") {
        obj[key] = Number(el.value);
      } else {
        obj[key] = el.value;
      }
      persist();
      if (onAfterChange) onAfterChange(key, obj[key]);
    };
    el.addEventListener("input", update);
    el.addEventListener("change", update);
  });
}

function uploadBox(label, currentImg, onPicked) {
  const inputId = uid("file-input");
  queueMicrotask(() => {
    const input = document.getElementById(inputId);
    if (!input) return;
    input.addEventListener("change", async () => {
      if (input.files && input.files[0]) {
        toast("Processando imagem...");
        try {
          const url = await fileToDataUrl(input.files[0]);
          onPicked(url);
          persist();
          draw();
          toast("Imagem atualizada!");
        } catch (err) {
          toast("Erro ao carregar imagem: " + err.message);
        }
      }
    });
  });

  return `
    <label>${label}</label>
    <label class="upload-box" for="${inputId}">
      <span>
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect width="18" height="18" x="3" y="3" rx="2" ry="2"/><circle cx="9" cy="9" r="2"/><path d="m21 15-3.086-3.086a2 2 0 0 0-2.828 0L6 21"/></svg>
        Clique para enviar nova imagem
      </span>
      <small>PNG, JPG ou WebP. Otimização automática.</small>
      <input id="${inputId}" type="file" accept="image/*" hidden>
    </label>
    ${currentImg ? `<div style="margin-top: 10px; max-width: 240px;"><img class="cover-img" src="${escapeHtml(currentImg)}" alt="Prévia"></div>` : ""}`;
}

function galleryEditor(item) {
  item.gallery = item.gallery || [];
  const inputId = uid("gal-input");

  queueMicrotask(() => {
    const input = document.getElementById(inputId);
    if (!input) return;
    input.addEventListener("change", async () => {
      const files = Array.from(input.files || []).filter((f) => f.type.startsWith("image/"));
      if (!files.length) return;
      toast(`Comprimindo ${files.length} foto(s)...`);
      for (const file of files) {
        try {
          const url = await fileToDataUrl(file);
          item.gallery.push(url);
        } catch (err) {
          console.error(err);
        }
      }
      persist();
      draw();
      toast("Fotos adicionadas à galeria com sucesso!");
    });
  });

  return `
    <label>Fotos Ilustrativas da Galeria (antes/depois, telas)</label>
    <label class="upload-box" for="${inputId}">
      <span>
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="17 8 12 3 7 8"/><line x1="12" x2="12" y1="3" y2="15"/></svg>
        Adicionar fotos à galeria
      </span>
      <small>Envie uma ou várias fotos de uma vez.</small>
      <input id="${inputId}" type="file" accept="image/*" multiple hidden>
    </label>
    <div class="gallery" style="margin-top: 12px;">
      ${item.gallery
        .map(
          (src, idx) => `
        <div style="position: relative; border-radius: 8px; overflow: hidden; border: 1px solid var(--line);">
          <img src="${escapeHtml(src)}" alt="Foto ${idx + 1}" style="width: 100%; height: 90px; object-fit: cover;">
          <button class="btn danger sm" data-del-photo="${idx}" type="button" style="width: 100%; border-radius: 0; padding: 4px; font-size: 0.72rem;">Excluir</button>
        </div>`
        )
        .join("")}
    </div>`;
}

// ── Profile Panel ──
function renderProfile() {
  const p = data.profile;
  const root = document.getElementById("panel");
  root.innerHTML = `
    <h2>Perfil Profissional</h2>
    <p class="subtitle">Informações do desenvolvedor, títulos, bio e links de contato.</p>
    
    <div class="row">
      ${field("name", "Nome exibido", "text", p.name)}
      ${field("fullName", "Nome completo", "text", p.fullName)}
    </div>

    ${field("headline", "Headline (Título profissional)", "text", p.headline)}
    ${field("tagline", "Tagline / Resumo curto de apresentação", "textarea", p.tagline)}
    ${field("about", "Sobre você (Bio completa)", "textarea", p.about)}
    ${field("goal", "Objetivo profissional", "textarea", p.goal)}
    
    <div class="row">
      ${field("location", "Localização", "text", p.location)}
      ${field("availability", "Disponibilidade", "text", p.availability)}
    </div>

    <div class="row">
      ${field("phone", "Telefone / WhatsApp", "text", p.phone)}
      ${field("email", "E-mail de contato", "email", p.email)}
    </div>

    <div class="row">
      ${field("github", "URL do perfil no GitHub", "text", p.github)}
      ${field("linkedin", "URL do perfil no LinkedIn", "text", p.linkedin)}
    </div>

    <div style="margin-top: 20px;">
      ${uploadBox("Foto de Perfil do Portfólio", p.photo, (newUrl) => {
        p.photo = newUrl;
      })}
    </div>

    <div style="margin-top: 24px;">
      <button class="btn kotlin" id="save-profile" type="button">Salvar Alterações</button>
    </div>`;

  bindObject(root, p);
  document.getElementById("save-profile").onclick = () => {
    persist();
    toast("Perfil salvo com sucesso!");
  };
}

// ── Stack Panel ──
function renderStack() {
  const s = data.stack;
  const root = document.getElementById("panel");

  root.innerHTML = `
    <h2>Stack Tecnológica</h2>
    <p class="subtitle">Pilares da sua atuação: 1º Mobile Nativo & KMP, 2º Backend Java, 3º iOS Nativo em Estudo.</p>

    ${field("intro", "Texto introdutório da Stack", "textarea", s.intro)}

    <h3 style="margin-top: 28px; margin-bottom: 12px;">Pilares da Stack</h3>
    <div id="pillars-list">
      ${s.pillars
        .map(
          (pillar, i) => `
        <div class="item-card" data-pillar-idx="${i}">
          <div class="item-card-header">
            <strong>${escapeHtml(pillar.level)}: ${escapeHtml(pillar.title)}</strong>
          </div>
          <div class="row">
            <label>Nível / Destaque
              <input data-pillar-k="level" value="${escapeHtml(pillar.level)}">
            </label>
            <label>Título
              <input data-pillar-k="title" value="${escapeHtml(pillar.title)}">
            </label>
          </div>
          <label>Subtítulo
            <input data-pillar-k="subtitle" value="${escapeHtml(pillar.subtitle)}">
          </label>
          <label>Itens / Tecnologias (separadas por vírgula)
            <input data-pillar-k="items" value="${escapeHtml((pillar.items || []).join(", "))}">
          </label>
        </div>`
        )
        .join("")}
    </div>

    <div style="margin-top: 20px;">
      <button class="btn kotlin" id="save-stack" type="button">Salvar Stack</button>
    </div>`;

  // Bind intro
  root.querySelector("[data-k=intro]").addEventListener("input", (e) => {
    s.intro = e.target.value;
    persist();
  });

  // Bind pillars
  root.querySelectorAll("[data-pillar-idx]").forEach((card) => {
    const idx = Number(card.dataset.pillarIdx);
    const pillar = s.pillars[idx];
    card.querySelectorAll("[data-pillar-k]").forEach((input) => {
      input.addEventListener("input", () => {
        const key = input.dataset.pillarK;
        if (key === "items") {
          pillar.items = input.value.split(",").map((t) => t.trim()).filter(Boolean);
        } else {
          pillar[key] = input.value;
        }
        persist();
      });
    });
  });

  document.getElementById("save-stack").onclick = () => {
    persist();
    toast("Stack tecnológica salva!");
  };
}

// ── Skills & Practices Panel ──
function renderSkills() {
  const root = document.getElementById("panel");
  root.innerHTML = `
    <h2>Habilidades & Práticas</h2>
    <p class="subtitle">Adicione, edite níveis percentuais e defina práticas de engenharia.</p>

    <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 16px;">
      <h3>Habilidades Técnicas (${data.skills.length})</h3>
      <button class="btn kotlin sm" id="add-skill" type="button">+ Nova Habilidade</button>
    </div>

    <div id="skills-list">
      ${data.skills
        .map(
          (skill, idx) => `
        <div class="item-card" data-skill-idx="${idx}" style="padding: 14px 18px;">
          <div style="display: flex; gap: 14px; align-items: center;">
            <div style="flex: 1;">
              <input data-skill-k="name" value="${escapeHtml(skill.name)}" placeholder="Nome da habilidade">
            </div>
            <div style="width: 100px;">
              <input data-skill-k="level" type="number" min="0" max="100" value="${skill.level}" placeholder="%">
            </div>
            <button class="btn danger sm" data-del-skill="${idx}" type="button">Excluir</button>
          </div>
        </div>`
        )
        .join("")}
    </div>

    <h3 style="margin-top: 32px; margin-bottom: 8px;">Práticas de Engenharia</h3>
    <label>Práticas e metodologias (separadas por vírgula)
      <textarea id="practices-input">${escapeHtml((data.practices || []).join(", "))}</textarea>
    </label>

    <div style="margin-top: 20px;">
      <button class="btn kotlin" id="save-skills" type="button">Salvar Habilidades</button>
    </div>`;

  // Bind skills inputs
  root.querySelectorAll("[data-skill-idx]").forEach((card) => {
    const idx = Number(card.dataset.skillIdx);
    const skill = data.skills[idx];
    card.querySelectorAll("[data-skill-k]").forEach((input) => {
      input.addEventListener("input", () => {
        const key = input.dataset.skillK;
        skill[key] = key === "level" ? Number(input.value) : input.value;
        persist();
      });
    });
    card.querySelector("[data-del-skill]").onclick = () => {
      data.skills.splice(idx, 1);
      persist();
      renderSkills();
    };
  });

  document.getElementById("add-skill").onclick = () => {
    data.skills.push({ name: "Nova Tecnologia", level: 80 });
    persist();
    renderSkills();
  };

  document.getElementById("practices-input").addEventListener("input", (e) => {
    data.practices = e.target.value.split(",").map((p) => p.trim()).filter(Boolean);
    persist();
  });

  document.getElementById("save-skills").onclick = () => {
    persist();
    toast("Habilidades salvas com sucesso!");
  };
}

// ── Generic Collection Renderer (Projects, Freelance, Experience) ──
function renderCollection(key, fields, addLabel) {
  const list = data[key] || [];
  const root = document.getElementById("panel");

  const titles = {
    projects: "Projetos em Destaque & Limpapp",
    freelanceSites: "Sites Comerciais & Freelance",
    experience: "Experiência Profissional"
  };

  const subtitles = {
    projects: "Gerencie aplicativos, repositórios, capas e galeria de fotos ilustrativas.",
    freelanceSites: "Sites corporativos e sob medida entregues para clientes.",
    experience: "Cargos e atuações no setor público e comercial."
  };

  root.innerHTML = `
    <div style="display: flex; justify-content: space-between; align-items: flex-start; margin-bottom: 20px;">
      <div>
        <h2>${titles[key] || key}</h2>
        <p class="subtitle" style="margin-bottom: 0;">${subtitles[key] || ""}</p>
      </div>
      <button class="btn kotlin" id="add-item" type="button">+ ${addLabel}</button>
    </div>

    <div id="items-list">
      ${list
        .map((item, idx) => {
          const itemTitle = item.title || item.role || `Item #${idx + 1}`;
          const isLimpapp = item.id === "limpapp";
          return `
          <div class="item-card" data-idx="${idx}" ${isLimpapp ? 'style="border-color: var(--kotlin); background: rgba(127,82,255,0.06);"' : ""}>
            <div class="item-card-header">
              <div>
                <strong>${escapeHtml(itemTitle)}</strong>
                ${isLimpapp ? '<span class="status in-dev" style="margin-left: 8px;">Destaque Mobile Principal</span>' : ""}
              </div>
              <button class="btn danger sm" data-del="${idx}" type="button">Excluir</button>
            </div>

            ${fields
              .map(([fKey, label, type]) => {
                const val = fKey === "tags" && Array.isArray(item.tags) ? item.tags.join(", ") : item[fKey];
                return field(fKey, label, type, val);
              })
              .join("")}

            ${key === "projects" || key === "freelanceSites" ? uploadBox("Imagem de Capa", item.cover, (url) => { item.cover = url; }) : ""}
            ${key === "projects" || key === "freelanceSites" ? galleryEditor(item) : ""}
          </div>`;
        })
        .join("")}
    </div>

    <div style="margin-top: 24px;">
      <button class="btn kotlin" id="save-collection" type="button">Salvar Todos</button>
    </div>`;

  // Bind object changes
  root.querySelectorAll("[data-idx]").forEach((card) => {
    const idx = Number(card.dataset.idx);
    const item = list[idx];

    bindObject(card, item, (changedKey, val) => {
      if (changedKey === "tags") {
        item.tags = String(val).split(",").map((t) => t.trim()).filter(Boolean);
      }
    });

    // Delete item button
    card.querySelector("[data-del]").onclick = () => {
      if (confirm(`Deseja realmente excluir "${item.title || item.role || "este item"}"?`)) {
        list.splice(idx, 1);
        persist();
        draw();
        toast("Item excluído!");
      }
    };

    // Delete photo in gallery
    card.querySelectorAll("[data-del-photo]").forEach((btn) => {
      btn.onclick = () => {
        const photoIdx = Number(btn.dataset.delPhoto);
        item.gallery.splice(photoIdx, 1);
        persist();
        draw();
        toast("Foto da galeria removida.");
      };
    });
  });

  document.getElementById("add-item").onclick = () => {
    const newItem = { id: uid(key) };
    if (key === "projects") {
      Object.assign(newItem, {
        title: "Novo Aplicativo Mobile",
        category: "Mobile · Kotlin",
        status: "Em desenvolvimento",
        featured: false,
        summary: "",
        description: "",
        tags: ["Kotlin", "Android"],
        gallery: []
      });
    } else if (key === "freelanceSites") {
      Object.assign(newItem, {
        title: "Novo Site Freelance",
        summary: "",
        url: "",
        tags: ["Freelance", "Web"],
        gallery: []
      });
    } else if (key === "experience") {
      Object.assign(newItem, {
        role: "Desenvolvedor Mobile / Backend",
        company: "Empresa",
        period: "2024 – Atual",
        location: "Salvador / BA",
        description: "",
        tags: ["Kotlin", "Spring Boot"]
      });
    }
    list.unshift(newItem);
    persist();
    draw();
    toast("Novo item criado!");
  };

  document.getElementById("save-collection").onclick = () => {
    persist();
    toast("Alterações salvas com sucesso!");
  };
}

// ── Education & Languages Panel ──
function renderEducation() {
  const root = document.getElementById("panel");
  root.innerHTML = `
    <h2>Formação Acadêmica &amp; Idiomas</h2>
    <p class="subtitle">Graduação, cursos de especialização e idiomas.</p>

    <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 12px;">
      <h3>Formação Acadêmica (${data.education.length})</h3>
      <button class="btn kotlin sm" id="add-edu" type="button">+ Nova Formação</button>
    </div>

    <div id="edu-list">
      ${data.education
        .map(
          (item, idx) => `
        <div class="item-card" data-edu-idx="${idx}">
          <div class="item-card-header">
            <strong>${escapeHtml(item.title)}</strong>
            <button class="btn danger sm" data-del-edu="${idx}" type="button">Excluir</button>
          </div>
          <div class="row">
            ${field("title", "Curso / Grau", "text", item.title)}
            ${field("period", "Período", "text", item.period)}
          </div>
          ${field("place", "Instituição", "text", item.place)}
        </div>`
        )
        .join("")}
    </div>

    <h3 style="margin-top: 32px; margin-bottom: 8px;">Cursos de Aperfeiçoamento (um por linha)</h3>
    <textarea id="courses-textarea" style="min-height: 120px;">${escapeHtml((data.courses || []).join("\n"))}</textarea>

    <h3 style="margin-top: 32px; margin-bottom: 12px;">Idiomas</h3>
    <div id="lang-list">
      ${data.languages
        .map(
          (lang, idx) => `
        <div class="item-card" data-lang-idx="${idx}" style="padding: 12px 18px;">
          <div class="row">
            <label>Idioma
              <input data-lang-k="name" value="${escapeHtml(lang.name)}">
            </label>
            <label>Nível
              <input data-lang-k="level" value="${escapeHtml(lang.level)}">
            </label>
          </div>
          <label>Porcentagem de Domínio (%)
            <input data-lang-k="percent" type="number" min="0" max="100" value="${lang.percent}">
          </label>
        </div>`
        )
        .join("")}
    </div>

    <div style="margin-top: 24px;">
      <button class="btn kotlin" id="save-edu" type="button">Salvar Formação e Idiomas</button>
    </div>`;

  // Bind education
  root.querySelectorAll("[data-edu-idx]").forEach((card) => {
    const idx = Number(card.dataset.eduIdx);
    bindObject(card, data.education[idx]);
    card.querySelector("[data-del-edu]").onclick = () => {
      data.education.splice(idx, 1);
      persist();
      renderEducation();
    };
  });

  document.getElementById("add-edu").onclick = () => {
    data.education.push({ title: "Novo Curso", place: "Instituição", period: "2024" });
    persist();
    renderEducation();
  };

  // Bind courses
  document.getElementById("courses-textarea").addEventListener("input", (e) => {
    data.courses = e.target.value.split("\n").map((c) => c.trim()).filter(Boolean);
    persist();
  });

  // Bind languages
  root.querySelectorAll("[data-lang-idx]").forEach((card) => {
    const idx = Number(card.dataset.langIdx);
    const lang = data.languages[idx];
    card.querySelectorAll("[data-lang-k]").forEach((input) => {
      input.addEventListener("input", () => {
        const key = input.dataset.langK;
        lang[key] = key === "percent" ? Number(input.value) : input.value;
        persist();
      });
    });
  });

  document.getElementById("save-edu").onclick = () => {
    persist();
    toast("Formação e idiomas salvos!");
  };
}

// ── Publish & Export Panel ──
function renderPublish() {
  const pub = data.githubPublish || {
    owner: "reinaldobarreto31",
    repo: "reinaldobarreto31.github.io",
    branch: "main",
    jsonPath: "data/portfolio.json"
  };
  data.githubPublish = pub;

  const root = document.getElementById("panel");
  root.innerHTML = `
    <h2>Salvar &amp; Publicar no GitHub Pages</h2>
    <p class="subtitle">As alterações já ficam ativas neste navegador. Para atualizar o site público mundial, publique no repositório GitHub.</p>

    <div class="item-card" style="border-color: rgba(127, 82, 255, 0.35);">
      <h3 style="color: #ddd6fe; margin-bottom: 12px;">Publicação Automatizada no GitHub Pages</h3>
      <p class="lede" style="font-size: 0.9rem;">Insira seu Personal Access Token do GitHub (PAT) com escopo <code>repo</code> para salvar direto no branch <code>main</code>:</p>
      
      <div class="row">
        ${field("owner", "Usuário GitHub", "text", pub.owner)}
        ${field("repo", "Nome do Repositório", "text", pub.repo)}
      </div>
      <div class="row">
        ${field("branch", "Branch", "text", pub.branch)}
        ${field("jsonPath", "Caminho do arquivo", "text", pub.jsonPath)}
      </div>

      <label>Token de Acesso GitHub (Personal Access Token - PAT)
        <input id="github-token" type="password" placeholder="ghp_xxxxxxxxxxxxxxxxxxxx" autocomplete="off">
      </label>
      <p style="font-size: 0.78rem; color: var(--muted-dark); margin-top: 4px;">O token é usado apenas nesta chamada de publicação e nunca fica salvo no site.</p>

      <div style="margin-top: 16px;">
        <button class="btn kotlin" id="publish-github-btn" type="button">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="17 8 12 3 7 8"/><line x1="12" x2="12" y1="3" y2="15"/></svg>
          Publicar no GitHub Pages
        </button>
      </div>
      <p id="publish-status" style="margin-top: 12px; font-size: 0.88rem; font-weight: 600;"></p>
    </div>

    <div class="item-card" style="margin-top: 24px;">
      <h3 style="margin-bottom: 8px;">Backup e Arquivos Locais</h3>
      <p class="lede" style="font-size: 0.9rem;">Baixe o arquivo <code>portfolio.json</code> para commitar via terminal ou importar em outro computador:</p>
      
      <div class="chips">
        <button class="btn ghost" id="download-json-btn" type="button">⬇️ Baixar portfolio.json</button>
        <label class="btn ghost" for="import-json-input" style="cursor: pointer;">
          ⬆️ Importar portfolio.json
          <input id="import-json-input" type="file" accept=".json" hidden>
        </label>
        <button class="btn danger" id="reset-defaults-btn" type="button">🔄 Restaurar Padrões de Fábrica</button>
      </div>
    </div>`;

  bindObject(root, pub);

  document.getElementById("download-json-btn").onclick = () => {
    const blob = new Blob([JSON.stringify(data, null, 2)], { type: "application/json" });
    const a = document.createElement("a");
    a.href = URL.createObjectURL(blob);
    a.download = "portfolio.json";
    a.click();
    toast("Download iniciado!");
  };

  document.getElementById("import-json-input").onchange = (e) => {
    const file = e.target.files && e.target.files[0];
    if (!file) return;
    const reader = new FileReader();
    reader.onload = (event) => {
      try {
        const imported = JSON.parse(event.target.result);
        if (imported && imported.profile) {
          data = imported;
          persist();
          draw();
          toast("Arquivo importado com sucesso!");
        } else {
          toast("Arquivo JSON inválido.");
        }
      } catch (err) {
        toast("Erro ao processar JSON: " + err.message);
      }
    };
    reader.readAsText(file);
  };

  document.getElementById("reset-defaults-btn").onclick = () => {
    if (confirm("Deseja apagar os dados locais e recarregar os dados padrão do servidor?")) {
      localStorage.removeItem("portfolio-cms-data");
      location.reload();
    }
  };

  document.getElementById("publish-github-btn").onclick = publishToGitHub;
}

function utf8ToBase64(str) {
  const bytes = new TextEncoder().encode(str);
  let binary = "";
  bytes.forEach((b) => (binary += String.fromCharCode(b)));
  return btoa(binary);
}

async function publishToGitHub() {
  const token = document.getElementById("github-token").value.trim();
  const statusEl = document.getElementById("publish-status");

  if (!token) {
    statusEl.textContent = "Por favor, cole um token do GitHub (PAT) para publicar.";
    statusEl.style.color = "#f87171";
    return;
  }

  persist();
  const pub = data.githubPublish;
  statusEl.textContent = "Conectando ao GitHub API e enviando dados...";
  statusEl.style.color = "#ddd6fe";

  try {
    const api = `https://api.github.com/repos/${pub.owner}/${pub.repo}/contents/${pub.jsonPath}`;
    
    // Check current SHA
    const curRes = await fetch(`${api}?ref=${pub.branch}`, {
      headers: {
        Authorization: `Bearer ${token}`,
        Accept: "application/vnd.github+json"
      }
    });

    const curJson = curRes.ok ? await curRes.json() : {};

    // Put updated content
    const putRes = await fetch(api, {
      method: "PUT",
      headers: {
        Authorization: `Bearer ${token}`,
        Accept: "application/vnd.github+json",
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        message: "Atualiza conteúdo do portfólio pelo Painel CMS",
        content: utf8ToBase64(JSON.stringify(data, null, 2)),
        branch: pub.branch,
        sha: curJson.sha
      })
    });

    if (!putRes.ok) {
      const err = await putRes.json().catch(() => ({}));
      throw new Error(err.message || `Erro HTTP ${putRes.status}`);
    }

    statusEl.textContent = "✅ Publicado com sucesso no GitHub Pages! O site atualizará em 1 a 2 minutos.";
    statusEl.style.color = "#4ade80";
    toast("Portfólio publicado com sucesso!");
  } catch (err) {
    statusEl.textContent = `❌ Falha ao publicar: ${err.message}`;
    statusEl.style.color = "#f87171";
  }
}

// ── Password / Security Panel ──
function renderPassword() {
  data.auth = data.auth || { ...DEFAULT_CREDENTIALS };
  const root = document.getElementById("panel");
  root.innerHTML = `
    <h2>Segurança &amp; Credenciais de Acesso</h2>
    <p class="subtitle">Altere o usuário e a senha padrão de acesso ao painel de gerenciamento.</p>

    <div class="item-card" style="max-width: 500px;">
      <label>Usuário de Login
        <input id="cms-user" value="${escapeHtml(data.auth.username)}">
      </label>
      <label>Nova Senha
        <input id="cms-pass" type="text" value="${escapeHtml(data.auth.password)}">
      </label>
      <div style="margin-top: 18px;">
        <button class="btn kotlin" id="save-pass-btn" type="button">Atualizar Credenciais</button>
      </div>
    </div>`;

  document.getElementById("save-pass-btn").onclick = () => {
    const u = document.getElementById("cms-user").value.trim();
    const p = document.getElementById("cms-pass").value.trim();
    if (!u || !p) {
      toast("Usuário e senha não podem ficar em branco.");
      return;
    }
    data.auth.username = u;
    data.auth.password = p;
    persist();
    toast("Credenciais salvas com sucesso!");
  };
}

// ── Render CMS Shell ──
function renderShell() {
  const root = document.getElementById("admin-root");
  root.innerHTML = `
    <div class="admin-shell">
      <aside class="side">
        <div class="side-brand">
          <a class="brand" href="index.html" style="margin-bottom: 6px;">
            <img src="${escapeHtml(data.profile.photo || "foto-reinaldo.png")}" alt="Foto">
            <span>Portfólio CMS</span>
          </a>
          <p>Gerenciamento visual completo sem mexer no código.</p>
        </div>

        <button class="${currentTab === "profile" ? "active" : ""}" data-tab="profile" type="button">👤 Perfil &amp; Foto</button>
        <button class="${currentTab === "stack" ? "active" : ""}" data-tab="stack" type="button">⚡ Stack Tecnológica</button>
        <button class="${currentTab === "skills" ? "active" : ""}" data-tab="skills" type="button">📊 Habilidades</button>
        <button class="${currentTab === "projects" ? "active" : ""}" data-tab="projects" type="button">📱 Projetos (Limpapp)</button>
        <button class="${currentTab === "freelance" ? "active" : ""}" data-tab="freelance" type="button">🌐 Sites Freelance</button>
        <button class="${currentTab === "experience" ? "active" : ""}" data-tab="experience" type="button">💼 Experiência</button>
        <button class="${currentTab === "education" ? "active" : ""}" data-tab="education" type="button">🎓 Formação &amp; Idiomas</button>
        <button class="${currentTab === "publish" ? "active" : ""}" data-tab="publish" type="button">🚀 Salvar &amp; Publicar</button>
        <button class="${currentTab === "password" ? "active" : ""}" data-tab="password" type="button">🔒 Mudar Senha</button>

        <div class="side-footer">
          <a class="side-link" href="index.html" target="_blank">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"/><circle cx="12" cy="12" r="3"/></svg>
            Ver Portfólio ao Vivo
          </a>
          <button class="side-link" id="logout-btn" type="button" style="color: #f87171;">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4"/><polyline points="16 17 21 12 16 7"/><line x1="21" x2="9" y1="12" y2="12"/></svg>
            Sair (Logout)
          </button>
        </div>
      </aside>

      <main class="admin-main" id="panel">
        <p>Carregando seção...</p>
      </main>
    </div>`;

  // Bind tab switching
  root.querySelectorAll("[data-tab]").forEach((btn) => {
    btn.onclick = () => {
      currentTab = btn.dataset.tab;
      root.querySelectorAll("[data-tab]").forEach((b) => b.classList.toggle("active", b === btn));
      draw();
    };
  });

  // Bind logout
  document.getElementById("logout-btn").onclick = () => {
    setAuthenticated(false);
    toast("Sessão finalizada.");
    renderLogin();
  };

  draw();
}

function draw() {
  if (panels[currentTab]) {
    panels[currentTab]();
  }
}

// ── Render Login Screen ──
function renderLogin() {
  const root = document.getElementById("admin-root");
  const expectedUser = data?.auth?.username || DEFAULT_CREDENTIALS.username;
  const expectedPass = data?.auth?.password || DEFAULT_CREDENTIALS.password;

  root.innerHTML = `
    <div class="login-screen">
      <div class="login-card">
        <div class="login-icon">
          <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><rect width="18" height="11" x="3" y="11" rx="2" ry="2"/><path d="M7 11V7a5 5 0 0 1 10 0v4"/></svg>
        </div>
        <h2>Gestão do Portfólio</h2>
        <p>Painel administrativo para editar, excluir, enviar fotos e publicar alterações.</p>

        <form id="login-form">
          <label>Usuário
            <input id="login-user" type="text" value="${escapeHtml(expectedUser)}" autocomplete="username" required>
          </label>
          <label>Senha
            <input id="login-pass" type="password" placeholder="Digite sua senha" autocomplete="current-password" required autofocus>
          </label>
          <div style="margin-top: 20px;">
            <button class="btn kotlin" type="submit" style="width: 100%;">Entrar no Painel</button>
          </div>
        </form>

        <div class="login-hint">
          💡 Credenciais padrão configuradas:<br>
          Usuário: <code>${escapeHtml(expectedUser)}</code> &nbsp;|&nbsp; Senha: <code>${escapeHtml(expectedPass)}</code>
        </div>

        <p style="margin-top: 18px; margin-bottom: 0;">
          <a href="index.html" style="color: var(--muted); font-size: 0.85rem; text-decoration: underline;">← Voltar para o Portfólio Público</a>
        </p>
      </div>
    </div>`;

  document.getElementById("login-form").onsubmit = (e) => {
    e.preventDefault();
    const u = document.getElementById("login-user").value;
    const p = document.getElementById("login-pass").value;

    if (verifyCredentials(u, p, data)) {
      setAuthenticated(true, true);
      toast("Bem-vindo ao Painel Administrativo!");
      renderShell();
    } else {
      toast("Usuário ou senha inválidos!");
    }
  };
}

// ── Initialize App ──
loadPortfolio()
  .then((loaded) => {
    data = loaded;
    persist();
    if (isAuthenticated()) {
      renderShell();
    } else {
      renderLogin();
    }
  })
  .catch((err) => {
    console.error("Falha ao inicializar CMS:", err);
    document.getElementById("admin-root").innerHTML = `
      <div style="padding: 40px; text-align: center; color: #f87171;">
        <h2>Erro ao carregar dados</h2>
        <p>${escapeHtml(err.message)}</p>
        <button class="btn ghost" onclick="location.reload()">Tentar novamente</button>
      </div>`;
  });
