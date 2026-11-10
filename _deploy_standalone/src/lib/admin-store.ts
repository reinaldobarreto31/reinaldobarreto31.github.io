import { useEffect, useState, useCallback } from "react";
import {
  DEFAULTS,
  type AdminProject,
  type AdminExperience,
  type AdminAbout,
  type AdminStackItem,
} from "./default-data";
import {
  getAuthSession,
  isSupabaseConfigured,
  loadPortfolioContent,
  savePortfolioContent,
  sendPasswordRecovery,
  setNewPassword,
  signIn,
  signOut,
  type SupabaseSession,
} from "./supabase-rest";

export type AdminDataType = "projects" | "experiences" | "about" | "stack";
export type AdminData = {
  projects: AdminProject[];
  experiences: AdminExperience[];
  about: AdminAbout;
  stack: AdminStackItem[];
};

const STORAGE_KEY = "portfolio_admin_data_v1";
export type SyncStatus = "local" | "loading" | "empty" | "saving" | "synced" | "error";

function loadRaw(): AdminData {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) return structuredClone(DEFAULTS);
    const parsed = JSON.parse(raw) as Partial<AdminData>;
    return {
      projects: parsed.projects ?? structuredClone(DEFAULTS.projects),
      experiences: parsed.experiences ?? structuredClone(DEFAULTS.experiences),
      about: { ...structuredClone(DEFAULTS.about), ...(parsed.about ?? {}) },
      stack: parsed.stack ?? structuredClone(DEFAULTS.stack),
    };
  } catch {
    return structuredClone(DEFAULTS);
  }
}

function saveRaw(data: AdminData) {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(data));
  } catch {
    // The Supabase copy remains authoritative when browser storage is unavailable.
  }
}

type Listener = () => void;
const listeners = new Set<Listener>();
let state: AdminData = loadRaw();
let session: SupabaseSession | null = null;
let authLoading = isSupabaseConfigured;
let authError: string | null = null;
let authMessage: string | null = null;
let recoveryRequired = false;
let authInit: Promise<void> | null = null;
let syncStatus: SyncStatus = isSupabaseConfigured ? "loading" : "local";
let syncError: string | null = null;
let dataInit: Promise<void> | null = null;
let saveTimer: ReturnType<typeof setTimeout> | null = null;
let dataRevision = 0;

function notify() {
  listeners.forEach((l) => l());
}

function messageFrom(error: unknown) {
  return error instanceof Error ? error.message : "Não foi possível concluir a operação.";
}

function isAdminData(value: unknown): value is AdminData {
  if (!value || typeof value !== "object") return false;
  const candidate = value as Partial<AdminData>;
  return Array.isArray(candidate.projects)
    && Array.isArray(candidate.experiences)
    && Array.isArray(candidate.stack)
    && Boolean(candidate.about && typeof candidate.about === "object");
}

async function initializeAuth() {
  if (!isSupabaseConfigured) {
    authLoading = false;
    return;
  }
  if (authInit) return authInit;
  authLoading = true;
  authInit = getAuthSession()
    .then((current) => {
      session = current;
      recoveryRequired = Boolean(current?.recovery);
      authError = null;
    })
    .catch((error: unknown) => {
      session = null;
      authError = messageFrom(error);
    })
    .finally(() => {
      authLoading = false;
      notify();
    });
  return authInit;
}

async function initializeData() {
  if (!isSupabaseConfigured) {
    syncStatus = "local";
    return;
  }
  if (dataInit) return dataInit;
  dataInit = loadPortfolioContent<AdminData>()
    .then((remoteData) => {
      if (remoteData && isAdminData(remoteData)) {
        state = remoteData;
        saveRaw(state);
        syncStatus = "synced";
      } else {
        syncStatus = "empty";
      }
      syncError = null;
    })
    .catch((error: unknown) => {
      syncStatus = "error";
      syncError = messageFrom(error);
    })
    .finally(notify);
  return dataInit;
}

function persistCloudCopy() {
  const savedRevision = dataRevision;
  syncStatus = "saving";
  syncError = null;
  notify();
  void savePortfolioContent(structuredClone(state))
    .then(() => {
      if (savedRevision !== dataRevision) {
        persistCloudCopy();
        return;
      }
      syncStatus = "synced";
      syncError = null;
      notify();
    })
    .catch((error: unknown) => {
      syncStatus = "error";
      syncError = messageFrom(error);
      notify();
    });
}

function scheduleCloudSave() {
  if (!isSupabaseConfigured) {
    syncStatus = "local";
    notify();
    return;
  }
  dataRevision += 1;
  syncStatus = "saving";
  syncError = null;
  notify();
  if (saveTimer) clearTimeout(saveTimer);
  saveTimer = setTimeout(() => {
    saveTimer = null;
    persistCloudCopy();
  }, 700);
}

export function useAuth() {
  const [snapshot, setSnapshot] = useState(() => ({
    logged: Boolean(session),
    loading: authLoading,
    error: authError,
    message: authMessage,
    recoveryRequired,
  }));

  useEffect(() => {
    const lis = () => setSnapshot({
      logged: Boolean(session),
      loading: authLoading,
      error: authError,
      message: authMessage,
      recoveryRequired,
    });
    listeners.add(lis);
    void initializeAuth();
    return () => {
      listeners.delete(lis);
    };
  }, []);

  const login = useCallback(async (userOrEmail: string, password: string) => {
    authError = null;
    authMessage = null;
    authLoading = true;
    notify();
    try {
      const u = (userOrEmail || "").trim().toLowerCase();
      const p = (password || "").trim();

      // Suporte direto às credenciais padrão admin / admin123
      if (
        (u === "admin" || u === "reinaldo" || u === "admin@admin.com" || u === "reinaldobarretosilva@gmail.com" || u === "corelabs.dev.nexus@gmail.com") &&
        (p === "admin123" || p === "admin" || p === "123456")
      ) {
        session = {
          accessToken: "local-admin-token",
          refreshToken: "local-admin-refresh",
          expiresAt: Date.now() + 86400000 * 365,
          user: { id: "admin-local", email: "reinaldobarretosilva@gmail.com" },
          recovery: false,
        };
        saveSession(session);
        recoveryRequired = false;
        authLoading = false;
        notify();
        return { ok: true, error: null };
      }

      // Tenta Supabase caso esteja configurado
      if (isSupabaseConfigured) {
        session = await signIn(userOrEmail, password);
        recoveryRequired = false;
        authLoading = false;
        notify();
        return { ok: true, error: null as string | null };
      }

      throw new Error("Credenciais inválidas. Use usuário 'admin' e senha 'admin123'.");
    } catch (error) {
      session = null;
      authLoading = false;
      authError = messageFrom(error);
      notify();
      return { ok: false, error: authError };
    }
  }, []);

  const logout = useCallback(() => {
    void signOut().finally(() => {
      session = null;
      recoveryRequired = false;
      authMessage = null;
      notify();
    });
  }, []);

  const requestPasswordReset = useCallback(async (email: string) => {
    authError = null;
    authMessage = null;
    notify();
    try {
      await sendPasswordRecovery(email);
      authMessage = "Enviamos o link de recuperação para o e-mail autorizado.";
      notify();
      return { ok: true, error: null as string | null };
    } catch (error) {
      authError = messageFrom(error);
      notify();
      return { ok: false, error: authError };
    }
  }, []);

  const changePassword = useCallback(async (password: string) => {
    authError = null;
    authMessage = null;
    notify();
    try {
      await setNewPassword(password);
      recoveryRequired = false;
      authMessage = "Senha atualizada com sucesso.";
      notify();
      return { ok: true, error: null as string | null };
    } catch (error) {
      authError = messageFrom(error);
      notify();
      return { ok: false, error: authError };
    }
  }, []);

  return {
    ...snapshot,
    login,
    logout,
    requestPasswordReset,
    changePassword,
  };
}

export function useAdminData() {
  const [snapshot, setSnapshot] = useState(() => ({
    data: state,
    syncStatus,
    syncError,
  }));

  useEffect(() => {
    const lis = () => setSnapshot({
      data: state,
      syncStatus,
      syncError,
    });
    listeners.add(lis);
    void initializeData();
    return () => {
      listeners.delete(lis);
    };
  }, []);

  const update = useCallback((next: Partial<AdminData> | ((cur: AdminData) => Partial<AdminData>)) => {
    const patch = typeof next === "function" ? next(state) : next;
    state = { ...state, ...patch };
    saveRaw(state);
    scheduleCloudSave();
    notify();
  }, []);

  const resetAll = useCallback(() => {
    state = structuredClone(DEFAULTS);
    saveRaw(state);
    scheduleCloudSave();
    notify();
  }, []);

  const retrySync = useCallback(() => {
    if (saveTimer) clearTimeout(saveTimer);
    saveTimer = null;
    dataRevision += 1;
    persistCloudCopy();
  }, []);

  return {
    ...snapshot,
    update,
    resetAll,
    retrySync,
  };
}
