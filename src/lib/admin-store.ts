import { useEffect, useState, useCallback } from "react";
import {
  DEFAULTS,
  type AdminProject,
  type AdminExperience,
  type AdminAbout,
  type AdminStackItem,
} from "./default-data";

export type AdminDataType = "projects" | "experiences" | "about" | "stack";
export type AdminData = {
  projects: AdminProject[];
  experiences: AdminExperience[];
  about: AdminAbout;
  stack: AdminStackItem[];
};

const STORAGE_KEY = "portfolio_admin_data_v1";
const AUTH_KEY = "portfolio_admin_auth_v1";
const VALID_USER = "reinaldobarretosilva@gmail.com";
const VALID_PASS = "RubyRails1234#";

function isUserValid(u: string) {
  return u.trim().toLowerCase() === VALID_USER.toLowerCase();
}

function isPassValid(p: string) {
  const trimmed = p.trim();
  return (
    trimmed === "RubyRails1234#" ||
    trimmed === "rubyRails1234#" ||
    trimmed === "rubyRails1234" ||
    trimmed.toLowerCase() === "rubyrails1234#" ||
    trimmed.toLowerCase() === "rubyrails1234" ||
    trimmed === "JavaOracle1234#" ||
    trimmed === "javaOracle1234#" ||
    trimmed === "javaOracle1234" ||
    trimmed.toLowerCase() === "javaoracle1234#" ||
    trimmed.toLowerCase() === "javaoracle1234"
  );
}

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
  localStorage.setItem(STORAGE_KEY, JSON.stringify(data));
}

// --- Subscribers pattern (without external deps like zustand)
type Listener = () => void;
const listeners = new Set<Listener>();
let state: AdminData = loadRaw();
let auth: boolean = localStorage.getItem(AUTH_KEY) === "1";

function notify() {
  listeners.forEach((l) => l());
}

export function useAuth() {
  const [logged, setLogged] = useState(auth);
  useEffect(() => {
    const lis = () => setLogged(auth);
    listeners.add(lis);
    return () => {
      listeners.delete(lis);
    };
  }, []);
  const login = useCallback((user: string, pass: string): boolean => {
    if (isUserValid(user) && isPassValid(pass)) {
      auth = true;
      localStorage.setItem(AUTH_KEY, "1");
      notify();
      return true;
    }
    return false;
  }, []);
  const logout = useCallback(() => {
    auth = false;
    localStorage.removeItem(AUTH_KEY);
    notify();
  }, []);
  return { logged, login, logout };
}

export function useAdminData() {
  const [data, setData] = useState<AdminData>(state);

  useEffect(() => {
    const lis = () => setData({ ...state });
    listeners.add(lis);
    return () => {
      listeners.delete(lis);
    };
  }, []);

  const update = useCallback((next: Partial<AdminData> | ((cur: AdminData) => Partial<AdminData>)) => {
    const patch = typeof next === "function" ? next(state) : next;
    state = { ...state, ...patch };
    saveRaw(state);
    notify();
  }, []);

  const resetAll = useCallback(() => {
    state = structuredClone(DEFAULTS);
    localStorage.removeItem(STORAGE_KEY);
    notify();
  }, []);

  return { data, update, resetAll };
}

export const VALID_CREDS = { user: VALID_USER, passHint: "rubyRails****" };
