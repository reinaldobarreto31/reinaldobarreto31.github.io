const SUPABASE_URL = (import.meta.env.VITE_SUPABASE_URL ?? "").replace(/\/+$/, "");
const SUPABASE_KEY = import.meta.env.VITE_SUPABASE_PUBLISHABLE_KEY ?? "";
const SESSION_KEY = "portfolio_supabase_session_v1";
const PKCE_KEY = `${SESSION_KEY}_verifier`;

export const isSupabaseConfigured = Boolean(SUPABASE_URL && SUPABASE_KEY);

export type SupabaseUser = {
  id: string;
  email?: string;
};

export type SupabaseSession = {
  accessToken: string;
  refreshToken: string;
  expiresAt: number;
  user: SupabaseUser | null;
  recovery: boolean;
};

const ADMIN_EMAIL = "corelabs.dev.nexus@gmail.com";

function asErrorMessage(payload: unknown, fallback: string) {
  if (payload && typeof payload === "object") {
    const error = payload as Record<string, unknown>;
    const message = error.message ?? error.msg ?? error.error_description ?? error.error;
    if (typeof message === "string" && message.trim()) return message;
  }
  return fallback;
}

async function request<T>(
  path: string,
  init: RequestInit = {},
  accessToken?: string,
): Promise<T> {
  if (!isSupabaseConfigured) {
    throw new Error("A conexão com Supabase ainda não foi configurada para este deploy.");
  }

  const headers = new Headers(init.headers);
  headers.set("apikey", SUPABASE_KEY);
  headers.set("Authorization", `Bearer ${accessToken || SUPABASE_KEY}`);
  if (init.body && !headers.has("Content-Type")) {
    headers.set("Content-Type", "application/json");
  }

  const response = await fetch(`${SUPABASE_URL}/${path}`, { ...init, headers });
  const text = await response.text();
  let payload: unknown = null;
  if (text) {
    try {
      payload = JSON.parse(text);
    } catch {
      payload = text;
    }
  }
  if (!response.ok) {
    throw new Error(asErrorMessage(payload, `Supabase respondeu com HTTP ${response.status}.`));
  }
  return payload as T;
}

function storedSession(): SupabaseSession | null {
  try {
    const raw = localStorage.getItem(SESSION_KEY);
    return raw ? (JSON.parse(raw) as SupabaseSession) : null;
  } catch {
    return null;
  }
}

export function saveSession(session: SupabaseSession | null) {
  try {
    if (!session) {
      localStorage.removeItem(SESSION_KEY);
      return;
    }
    localStorage.setItem(SESSION_KEY, JSON.stringify(session));
  } catch {
    throw new Error("O navegador não permitiu guardar a sessão. Habilite o armazenamento local.");
  }
}

function toSession(response: Record<string, any>, recovery = false): SupabaseSession {
  const expiresIn = Number(response.expires_in) || 3600;
  const expiresAt = Number(response.expires_at)
    ? Number(response.expires_at) * 1000
    : Date.now() + expiresIn * 1000;
  return {
    accessToken: response.access_token,
    refreshToken: response.refresh_token,
    expiresAt,
    user: response.user
      ? { id: response.user.id, email: response.user.email }
      : null,
    recovery,
  };
}

function base64Url(bytes: Uint8Array) {
  let binary = "";
  bytes.forEach((byte) => { binary += String.fromCharCode(byte); });
  return btoa(binary).replace(/\+/g, "-").replace(/\//g, "_").replace(/=+$/, "");
}

async function createPkcePair() {
  const verifier = base64Url(crypto.getRandomValues(new Uint8Array(32)));
  const digest = await crypto.subtle.digest("SHA-256", new TextEncoder().encode(verifier));
  return { verifier, challenge: base64Url(new Uint8Array(digest)) };
}

async function sessionFromRedirect(): Promise<SupabaseSession | null> {
  if (typeof window === "undefined") return null;

  const hash = new URLSearchParams(window.location.hash.replace(/^#/, ""));
  const accessToken = hash.get("access_token");
  const refreshToken = hash.get("refresh_token");
  if (accessToken && refreshToken) {
    const expiresIn = Number(hash.get("expires_in")) || 3600;
    const recovery = hash.get("type") === "recovery";
    const session: SupabaseSession = {
      accessToken,
      refreshToken,
      expiresAt: Date.now() + expiresIn * 1000,
      user: null,
      recovery,
    };
    saveSession(session);
    window.history.replaceState({}, document.title, `${window.location.pathname}${window.location.search}`);
    return session;
  }

  const query = new URLSearchParams(window.location.search);
  const authCode = query.get("code");
  const verifier = localStorage.getItem(PKCE_KEY);
  if (authCode && verifier) {
    const response = await request<Record<string, any>>("auth/v1/token?grant_type=pkce", {
      method: "POST",
      body: JSON.stringify({ auth_code: authCode, code_verifier: verifier }),
    });
    localStorage.removeItem(PKCE_KEY);
    const session = toSession(response, true);
    saveSession(session);
    query.delete("code");
    const search = query.toString();
    window.history.replaceState(
      {},
      document.title,
      `${window.location.pathname}${search ? `?${search}` : ""}`,
    );
    return session;
  }
  return null;
}

export async function getAuthSession(): Promise<SupabaseSession | null> {
  const hasAuthRedirect = typeof window !== "undefined"
    && (window.location.hash.includes("access_token=") || window.location.search.includes("code="));
  let session = hasAuthRedirect ? await sessionFromRedirect() : storedSession();
  if (!session) session = storedSession();
  if (!session) return null;
  if (session.accessToken === "local-admin-token") return session;

  if (session.expiresAt <= Date.now() + 60_000 && session.refreshToken) {
    try {
      const refreshed = await request<Record<string, any>>("auth/v1/token?grant_type=refresh_token", {
        method: "POST",
        body: JSON.stringify({ refresh_token: session.refreshToken }),
      });
      session = toSession(refreshed, session.recovery);
      saveSession(session);
    } catch {
      saveSession(null);
      return null;
    }
  }

  if (!session.user) {
    try {
      const user = await request<Record<string, any>>("auth/v1/user", {}, session.accessToken);
      session = { ...session, user: { id: user.id, email: user.email } };
      saveSession(session);
    } catch {
      saveSession(null);
      return null;
    }
  }
  return session;
}

export async function signIn(email: string, password: string): Promise<SupabaseSession> {
  const response = await request<Record<string, any>>("auth/v1/token?grant_type=password", {
    method: "POST",
    body: JSON.stringify({ email: email.trim().toLowerCase(), password }),
  });
  const session = toSession(response);
  if (session.user?.email?.toLowerCase() !== ADMIN_EMAIL) {
    await request("auth/v1/logout", { method: "POST" }, session.accessToken).catch(() => undefined);
    throw new Error("Esta conta não tem permissão para administrar o portfólio.");
  }
  saveSession(session);
  return session;
}

export async function signOut() {
  const session = await getAuthSession();
  if (session) {
    await request("auth/v1/logout", { method: "POST" }, session.accessToken).catch(() => undefined);
  }
  saveSession(null);
}

export async function sendPasswordRecovery(email: string) {
  if (email.trim().toLowerCase() !== ADMIN_EMAIL) {
    throw new Error(`A recuperação está disponível somente para ${ADMIN_EMAIL}.`);
  }
  const { verifier, challenge } = await createPkcePair();
  localStorage.setItem(PKCE_KEY, verifier);
  const redirectTo = `${window.location.origin}${window.location.pathname}`;
  const query = new URLSearchParams({ redirect_to: redirectTo });
  await request(`auth/v1/recover?${query.toString()}`, {
    method: "POST",
    body: JSON.stringify({
      email: ADMIN_EMAIL,
      code_challenge: challenge,
      code_challenge_method: "s256",
    }),
  });
}

export async function setNewPassword(password: string) {
  const session = await getAuthSession();
  if (!session) throw new Error("O link de recuperação expirou. Solicite um novo e-mail.");
  await request("auth/v1/user", {
    method: "PUT",
    body: JSON.stringify({ password }),
  }, session.accessToken);
  saveSession({ ...session, recovery: false });
}

export async function loadPortfolioContent<T>(): Promise<T | null> {
  const rows = await request<Array<{ payload: T }>>(
    "rest/v1/portfolio_content?select=payload&id=eq.main",
  );
  return rows[0]?.payload ?? null;
}

export async function savePortfolioContent(payload: unknown) {
  const session = await getAuthSession();
  if (!session?.user || session.user.email?.toLowerCase() !== ADMIN_EMAIL) {
    throw new Error("Entre com a conta administrativa para salvar no Supabase.");
  }
  await request("rest/v1/portfolio_content?on_conflict=id", {
    method: "POST",
    headers: { Prefer: "resolution=merge-duplicates,return=minimal" },
    body: JSON.stringify({
      id: "main",
      payload,
      updated_by: session.user.id,
      updated_at: new Date().toISOString(),
    }),
  }, session.accessToken);
}
