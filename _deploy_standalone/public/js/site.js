import { loadPortfolio, saveLocal, escapeHtml, chips, fileToDataUrl, toast } from "./common.js";

let portfolioData = null;

function renderGallery(images = [], projectId = "") {
  if (!images || !images.length) {
    return `<p style="font-size: 0.8rem; color: var(--muted-dark); font-style: italic; grid-column: 1 / -1;">Nenhuma foto cadastrada ainda. Clique no botão abaixo para adicionar.</p>`;
  }
  return images
    .map(
      (src, index) => `
      <div class="gallery-item" data-lightbox-src="${escapeHtml(src)}" title="Clique para ampliar">
        <img src="${escapeHtml(src)}" alt="Foto ilustrativa ${index + 1}">
      </div>`
    )
    .join("");
}

function projectCard(project, featured = false) {
  const isLimpapp = project.id === "limpapp";
  const hasCover = Boolean(project.cover);
  const galleryHtml = renderGallery(project.gallery || [], project.id);

  const mediaSection = isLimpapp
    ? `
      <div class="gallery-wrap">
        <div class="gallery-title">
          <span>Galeria de Fotos Ilustrativas</span>
          <small style="color: #c4b5fd;">${(project.gallery || []).length} imagem(ns)</small>
        </div>
        <div class="gallery" id="limpapp-gallery-grid">
          ${galleryHtml}
        </div>
        <label class="upload-box" for="limpapp-upload">
          <span>
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="17 8 12 3 7 8"/><line x1="12" x2="12" y1="3" y2="15"/></svg>
            Adicionar fotos ilustrativas ao Limpapp
          </span>
          <small>Envie telas do app ou fotos de serviços (antes/depois). Atualiza no ato.</small>
          <input id="limpapp-upload" type="file" accept="image/*" multiple hidden>
        </label>
      </div>`
    : hasCover
    ? `<img class="cover-img" src="${escapeHtml(project.cover)}" alt="${escapeHtml(project.title)}">`
    : project.gallery && project.gallery.length
    ? `<div class="gallery-wrap"><div class="gallery">${galleryHtml}</div></div>`
    : "";

  return `
    <article class="card project ${featured ? "featured" : ""}" id="project-${escapeHtml(project.id)}">
      <div>
        <span class="status ${project.status === "Em desenvolvimento" ? "in-dev" : ""}">${escapeHtml(project.status || "Projeto")}</span>
        <p class="kicker" style="margin-top: 4px;">${escapeHtml(project.category || "")}</p>
        <h3>${escapeHtml(project.title)}</h3>
        <p class="lede" style="font-size: 0.95rem; margin-bottom: 12px;">${escapeHtml(project.summary)}</p>
        <div class="chips">${chips(project.tags)}</div>
        <div class="chips" style="margin-top: 14px;">
          ${project.repo ? `<a class="btn ghost sm" href="${escapeHtml(project.repo)}" target="_blank" rel="noreferrer">Código no GitHub</a>` : ""}
          ${project.demo ? `<a class="btn sm" href="${escapeHtml(project.demo)}" target="_blank" rel="noreferrer">Demonstração</a>` : ""}
        </div>
      </div>
      <div>
        ${mediaSection}
      </div>
    </article>`;
}

function render(data) {
  portfolioData = data;
  const p = data.profile;

  // Title and header
  document.title = `${p.name} — Desenvolvedor Mobile Android (Kotlin · KMP) · Java Spring · Node.js`;
  
  document.querySelectorAll("[data-bind=name]").forEach((el) => {
    el.textContent = p.name;
  });
  
  const heroNameEl = document.querySelector("[data-bind=hero-name]");
  if (heroNameEl) heroNameEl.textContent = p.name;

  document.querySelectorAll("[data-bind=headline]").forEach((el) => {
    el.textContent = p.headline;
  });

  const taglineEl = document.querySelector("[data-bind=tagline]");
  if (taglineEl) taglineEl.textContent = p.tagline;

  const aboutEl = document.querySelector("[data-bind=about]");
  if (aboutEl) aboutEl.textContent = p.about;

  const goalEl = document.querySelector("[data-bind=goal]");
  if (goalEl) goalEl.textContent = p.goal;

  const locEl = document.querySelector("[data-bind=location]");
  if (locEl) locEl.textContent = `${p.location} (${p.availability})`;

  const emailEl = document.querySelector("[data-bind=email]");
  if (emailEl) {
    emailEl.href = `mailto:${p.email}`;
    emailEl.textContent = p.email;
  }

  const phoneEl = document.querySelector("[data-bind=phone]");
  if (phoneEl) {
    phoneEl.href = `tel:${p.phone.replace(/[\s()-]/g, "")}`;
    phoneEl.textContent = p.phone;
  }

  const waBtn = document.querySelector("[data-bind=whatsapp-btn]");
  if (waBtn) {
    const cleanPhone = p.phone.replace(/\D/g, "");
    waBtn.href = `https://wa.me/${cleanPhone}?text=Ol%C3%A1%20Reinaldo,%20vi%20seu%20portf%C3%B3lio%20mobile%20e%20gostaria%20de%20conversar!`;
  }

  const emailBtn = document.querySelector("[data-bind=email-btn]");
  if (emailBtn) {
    emailBtn.href = `mailto:${p.email}?subject=Contato%20via%20Portf%C3%B3lio%20Mobile`;
  }

  const liEl = document.querySelector("[data-bind=linkedin]");
  if (liEl) liEl.href = p.linkedin;

  const ghEl = document.querySelector("[data-bind=github]");
  if (ghEl) ghEl.href = p.github;

  document.querySelectorAll("[data-bind=photo]").forEach((el) => {
    el.src = p.photo || "foto-reinaldo.png";
    el.alt = p.name;
  });

  // Pillars
  const pillarsEl = document.getElementById("pillars");
  if (pillarsEl && data.stack && data.stack.pillars) {
    pillarsEl.innerHTML = data.stack.pillars
      .map(
        (pillar) => `
        <article class="card">
          <div class="level">${escapeHtml(pillar.level)}</div>
          <h3>${escapeHtml(pillar.title)}</h3>
          <p class="lede" style="font-size: 0.9rem; margin-bottom: 12px;">${escapeHtml(pillar.subtitle)}</p>
          <div class="chips">${chips(pillar.items)}</div>
        </article>`
      )
      .join("");
  }

  const introEl = document.getElementById("stack-intro");
  if (introEl && data.stack) {
    introEl.textContent = data.stack.intro;
  }

  // Projects
  const featured = data.projects.filter((item) => item.featured);
  const others = data.projects.filter((item) => !item.featured);

  const featEl = document.getElementById("featured-projects");
  if (featEl) {
    featEl.innerHTML = featured.map((item) => projectCard(item, true)).join("");
  }

  const otherEl = document.getElementById("other-projects");
  if (otherEl) {
    otherEl.innerHTML = others.map((item) => projectCard(item, false)).join("");
  }

  // Freelance Sites
  const freeEl = document.getElementById("freelance");
  if (freeEl && data.freelanceSites) {
    freeEl.innerHTML = data.freelanceSites
      .map(
        (site) => `
        <article class="card">
          ${site.cover ? `<img class="cover-img" src="${escapeHtml(site.cover)}" alt="${escapeHtml(site.title)}">` : ""}
          <h3>${escapeHtml(site.title)}</h3>
          <p class="lede" style="font-size: 0.92rem;">${escapeHtml(site.summary)}</p>
          <div class="chips">${chips(site.tags)}</div>
          ${site.gallery && site.gallery.length ? `<div class="gallery">${renderGallery(site.gallery)}</div>` : ""}
          ${site.url ? `<p style="margin-top: 14px;"><a class="btn sm ghost" href="${escapeHtml(site.url)}" target="_blank" rel="noreferrer">Visitar Site</a></p>` : ""}
        </article>`
      )
      .join("");
  }

  // Skills
  const skillsEl = document.getElementById("skills");
  if (skillsEl && data.skills) {
    skillsEl.innerHTML = data.skills
      .map(
        (skill) => `
        <div class="skill">
          <div class="skill-header">
            <strong>${escapeHtml(skill.name)}</strong>
            <span style="color: var(--muted); font-size: 0.85rem;">${skill.level}%</span>
          </div>
          <div class="bar">
            <span style="width: ${Number(skill.level) || 0}%;"></span>
          </div>
        </div>`
      )
      .join("");
  }

  // Practices
  const pracEl = document.getElementById("practices");
  if (pracEl && data.practices) {
    pracEl.innerHTML = chips(data.practices);
  }

  // Experience
  const expEl = document.getElementById("experience");
  if (expEl && data.experience) {
    expEl.innerHTML = data.experience
      .map(
        (job) => `
        <article class="card exp">
          <div>
            <div class="exp-period">${escapeHtml(job.period)}</div>
            <div class="exp-location">${escapeHtml(job.location)}</div>
          </div>
          <div>
            <h3>${escapeHtml(job.role)}</h3>
            <p style="color: #ddd6fe; font-weight: 600; margin-bottom: 6px;">${escapeHtml(job.company)}</p>
            <p class="lede" style="font-size: 0.92rem;">${escapeHtml(job.description)}</p>
            <div class="chips">${chips(job.tags)}</div>
          </div>
        </article>`
      )
      .join("");
  }

  // Education & Courses
  const eduEl = document.getElementById("education");
  if (eduEl && data.education) {
    eduEl.innerHTML = data.education
      .map(
        (item) => `
        <article class="card">
          <div class="level" style="color: #c4b5fd;">${escapeHtml(item.period)}</div>
          <h3>${escapeHtml(item.title)}</h3>
          <p class="lede" style="font-size: 0.9rem;">${escapeHtml(item.place)}</p>
        </article>`
      )
      .join("");
  }

  const coursesEl = document.getElementById("courses");
  if (coursesEl && data.courses) {
    coursesEl.innerHTML = data.courses.map((item) => `<li>${escapeHtml(item)}</li>`).join("");
  }

  const langEl = document.getElementById("languages");
  if (langEl && data.languages) {
    langEl.innerHTML = data.languages
      .map(
        (lang) => `
        <article class="card">
          <h3>${escapeHtml(lang.name)}</h3>
          <p style="color: var(--muted); font-size: 0.88rem; margin-bottom: 8px;">${escapeHtml(lang.level)}</p>
          <div class="bar"><span style="width: ${lang.percent}%;"></span></div>
        </article>`
      )
      .join("");
  }

  // Setup dynamic Limpapp upload listener
  setupLimpappUpload(data);

  // Setup lightbox clicks
  setupLightbox();
}

function setupLimpappUpload(data) {
  const input = document.getElementById("limpapp-upload");
  if (!input) return;

  const limpapp = data.projects.find((p) => p.id === "limpapp");
  if (!limpapp) return;

  limpapp.gallery = limpapp.gallery || [];

  input.addEventListener("change", async (e) => {
    const files = Array.from(input.files || []).filter((f) => f.type.startsWith("image/"));
    if (!files.length) return;

    toast(`Carregando e comprimindo ${files.length} foto(s)...`);

    for (const file of files) {
      try {
        const dataUrl = await fileToDataUrl(file, 1200, 0.82);
        limpapp.gallery.push(dataUrl);
      } catch (err) {
        console.error("Erro ao processar imagem:", err);
      }
    }

    saveLocal(data);
    toast("Fotos do Limpapp salvas no portfólio com sucesso!");

    // Refresh gallery in place
    const grid = document.getElementById("limpapp-gallery-grid");
    if (grid) {
      grid.innerHTML = renderGallery(limpapp.gallery, "limpapp");
      setupLightbox();
    }
  });
}

function setupLightbox() {
  const modal = document.getElementById("lightbox");
  const modalImg = document.getElementById("lightbox-img");
  const closeBtn = document.getElementById("lightbox-close");
  if (!modal || !modalImg) return;

  document.querySelectorAll("[data-lightbox-src]").forEach((item) => {
    item.onclick = (e) => {
      e.stopPropagation();
      const src = item.dataset.lightboxSrc;
      if (src) {
        modalImg.src = src;
        modal.classList.add("active");
      }
    };
  });

  const closeModal = () => modal.classList.remove("active");
  if (closeBtn) closeBtn.onclick = closeModal;
  modal.onclick = (e) => {
    if (e.target === modal) closeModal();
  };
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") closeModal();
  });
}

// Initial boot
loadPortfolio()
  .then(render)
  .catch((err) => {
    console.error("Erro ao carregar dados:", err);
    document.body.innerHTML += `<div class="toast" style="display:block;background:#dc2626;color:#fff;">Erro: ${err.message}</div>`;
  });
