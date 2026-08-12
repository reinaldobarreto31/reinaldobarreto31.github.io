import React, { useState } from "react";
import { Github, Linkedin, Mail, Lock, Unlock, Settings } from "lucide-react";
import { useAuth } from "@/lib/admin-store";

type FooterProps = {
  onOpenAdmin: () => void;
};

export function Footer({ onOpenAdmin }: FooterProps) {
  const { logged, login, logout } = useAuth();
  const [showLogin, setShowLogin] = useState(false);
  const [user, setUser] = useState("");
  const [pass, setPass] = useState("");
  const [err, setErr] = useState<string | null>(null);

  function tryLogin(e: React.FormEvent) {
    e.preventDefault();
    const ok = login(user, pass);
    if (!ok) {
      setErr("Usuário ou senha incorretos.");
      return;
    }
    setErr(null);
    setShowLogin(false);
    setUser("");
    setPass("");
    onOpenAdmin();
  }

  return (
    <footer className="bg-card border-t border-border py-10 pb-24 md:pb-10 mt-16 relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-primary to-transparent" />

      <div className="container mx-auto px-4 flex flex-col md:flex-row items-center justify-between gap-5">
        <div className="text-center md:text-left">
          <span
            className="font-bold text-xl tracking-tighter select-none cursor-pointer"
            title={logged ? "Painel Admin disponível" : "Clique 5x rapidamente para abrir login admin (ou use o botão ⚙)"}
            onClick={() => {
              const k = "__secret_clicks";
              const t = Date.now();
              const prev = Number(sessionStorage.getItem(k) || "0");
              const n = t - prev < 800 ? Number(sessionStorage.getItem(k + "_c") || "0") + 1 : 1;
              sessionStorage.setItem(k + "_c", String(n));
              sessionStorage.setItem(k, String(t));
              if (n >= 5) {
                sessionStorage.removeItem(k);
                sessionStorage.removeItem(k + "_c");
                if (logged) onOpenAdmin();
                else setShowLogin((s) => !s);
              }
            }}
          >
            reinaldo.barreto
          </span>
          <p className="text-sm text-muted-foreground mt-1">Java · Spring Boot · Kotlin · Flutter Dev</p>

          {showLogin && !logged && (
            <form
              onSubmit={tryLogin}
              className="mt-4 w-full max-w-sm mx-auto md:mx-0 bg-[#e0e5ec] border border-white/80 shadow-[6px_6px_14px_#b8c1ec,-6px_-6px_14px_#ffffff] rounded-xl p-3 text-left animate-in fade-in slide-in-from-bottom-4"
            >
              <div className="flex items-center justify-between mb-2">
                <div className="flex items-center gap-2 text-xs font-bold font-mono uppercase tracking-wider text-[#2f855a]">
                  <Lock size={14} /> Painel Admin — Login
                </div>
                <button
                  type="button"
                  onClick={() => {
                    setShowLogin(false);
                    setErr(null);
                  }}
                  className="text-muted-foreground hover:text-foreground text-[11px] font-mono"
                >
                  ✖ fechar
                </button>
              </div>
              <div className="grid grid-cols-2 gap-2 mb-2">
                <input
                  value={user}
                  onChange={(e) => setUser(e.target.value)}
                  type="text"
                  placeholder="e-mail"
                  className="rounded-lg px-2 py-1.5 text-xs bg-[#e0e5ec] border border-white/60 shadow-[inset_2px_2px_5px_#b8c1ec,inset_-2px_-2px_5px_#ffffff] text-foreground outline-none focus:border-primary"
                  autoComplete="username"
                />
                <input
                  value={pass}
                  onChange={(e) => setPass(e.target.value)}
                  type="password"
                  placeholder="senha"
                  className="rounded-lg px-2 py-1.5 text-xs bg-[#e0e5ec] border border-white/60 shadow-[inset_2px_2px_5px_#b8c1ec,inset_-2px_-2px_5px_#ffffff] text-foreground outline-none focus:border-primary"
                  autoComplete="current-password"
                />
              </div>
              <div className="flex items-center justify-between gap-2 flex-wrap">
                <span className="text-[10.5px] font-mono text-muted-foreground">
                  Acesso Restrito Admin
                </span>
                <button
                  type="submit"
                  className="neo-button rounded-lg px-3 py-1.5 text-xs font-semibold"
                >
                  Entrar
                </button>
              </div>
              {err && <div className="text-[11px] text-[#e44857] mt-1.5 font-mono">{err}</div>}
            </form>
          )}
        </div>

        <div className="flex items-center gap-3">
          <button
            type="button"
            onClick={() => {
              if (logged) onOpenAdmin();
              else setShowLogin((s) => !s);
            }}
            title={logged ? "Abrir Painel Admin" : "Acesso Administrativo (Login Admin)"}
            className="footer-social"
            aria-label="Painel Admin"
          >
            {logged ? <Unlock size={18} className="text-[#2f855a]" /> : <Lock size={18} className="text-muted-foreground hover:text-primary transition-colors" />}
          </button>

          {logged && (
            <button
              type="button"
              onClick={logout}
              className="rounded-full px-3 py-1.5 text-[11px] font-bold font-mono bg-[#e0e5ec] border border-white/80 shadow-[3px_3px_8px_#b8c1ec,-3px_-3px_8px_#ffffff] text-[#7c3aed] hover:bg-[#7c3aed]/10 transition-colors"
            >
              Sair do Admin
            </button>
          )}

          <a
            href="https://github.com/reinaldobarreto31"
            target="_blank"
            rel="noreferrer"
            className="footer-social"
            aria-label="GitHub"
          >
            <Github size={19} />
          </a>
          <a
            href="https://linkedin.com/in/reinaldo-barreto-2a4ba2116"
            target="_blank"
            rel="noreferrer"
            className="footer-social"
            aria-label="LinkedIn"
          >
            <Linkedin size={19} />
          </a>
          <a href="mailto:reinaldobarretosilva@gmail.com" className="footer-social" aria-label="E-mail">
            <Mail size={19} />
          </a>
        </div>
      </div>

      <span className="block text-center text-xs font-mono text-muted-foreground mt-5">
        Construído com Java · Spring Boot · Kotlin · Flutter.
      </span>
    </footer>
  );
}
