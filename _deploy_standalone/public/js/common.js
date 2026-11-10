export const DATA_URL = "data/portfolio.json";
export const STORAGE_KEY = "portfolio-cms-data";
export const AUTH_STORAGE_KEY = "portfolio-cms-auth";

export const DEFAULT_CREDENTIALS = {
  username: "admin",
  password: "admin123"
};

export async function loadPortfolio() {
  const local = localStorage.getItem(STORAGE_KEY);
  if (local) {
    try {
      const parsed = JSON.parse(local);
      if (parsed && parsed.profile && parsed.projects) {
        return parsed;
      }
    } catch (_) {
      /* ignore invalid JSON in storage */
    }
  }

  const res = await fetch(`${DATA_URL}?t=${Date.now()}`);
  if (!res.ok) throw new Error("Não foi possível carregar os dados do portfólio.");
  const data = await res.json();
  return data;
}

export function saveLocal(data) {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(data));
  } catch (err) {
    console.error("Falha ao salvar no localStorage:", err);
    toast("Atenção: limite de armazenamento local atingido!");
  }
}

export function isAuthenticated() {
  return (
    localStorage.getItem(AUTH_STORAGE_KEY) === "true" ||
    sessionStorage.getItem(AUTH_STORAGE_KEY) === "true"
  );
}

export function setAuthenticated(status = true, remember = true) {
  if (status) {
    if (remember) {
      localStorage.setItem(AUTH_STORAGE_KEY, "true");
    } else {
      sessionStorage.setItem(AUTH_STORAGE_KEY, "true");
    }
  } else {
    localStorage.removeItem(AUTH_STORAGE_KEY);
    sessionStorage.removeItem(AUTH_STORAGE_KEY);
  }
}

export function verifyCredentials(user, pass, data) {
  const expectedUser = data?.auth?.username || DEFAULT_CREDENTIALS.username;
  const expectedPass = data?.auth?.password || DEFAULT_CREDENTIALS.password;
  return user.trim() === expectedUser && pass.trim() === expectedPass;
}

export function uid(prefix = "id") {
  return `${prefix}-${Math.random().toString(36).slice(2, 8)}`;
}

export function escapeHtml(value = "") {
  return String(value)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;");
}

export function chips(list = []) {
  if (!Array.isArray(list)) return "";
  return list
    .map((item) => `<span class="chip">${escapeHtml(item)}</span>`)
    .join("");
}

export async function fileToDataUrl(file, maxW = 1200, quality = 0.82) {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.onload = (e) => {
      const img = new Image();
      img.onload = () => {
        const scale = Math.min(1, maxW / img.width);
        const canvas = document.createElement("canvas");
        canvas.width = Math.round(img.width * scale);
        canvas.height = Math.round(img.height * scale);
        const ctx = canvas.getContext("2d");
        ctx.drawImage(img, 0, 0, canvas.width, canvas.height);
        resolve(canvas.toDataURL("image/jpeg", quality));
      };
      img.onerror = () => reject(new Error("Erro ao carregar imagem"));
      img.src = e.target.result;
    };
    reader.onerror = () => reject(new Error("Erro ao ler arquivo"));
    reader.readAsDataURL(file);
  });
}

export function toast(message) {
  let el = document.querySelector(".toast");
  if (!el) {
    el = document.createElement("div");
    el.className = "toast";
    document.body.appendChild(el);
  }
  el.textContent = message;
  el.style.display = "block";
  setTimeout(() => {
    el.style.display = "none";
  }, 2800);
}
