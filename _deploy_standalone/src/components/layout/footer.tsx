import { useEffect, useState } from "react";
import { Github, Linkedin, Mail, Lock, Unlock, Settings } from "lucide-react";
import { useAuth } from "@/lib/admin-store";

type FooterProps = {
  onOpenAdmin: () => void;
};

export function Footer({ onOpenAdmin }: FooterProps) {
  const {
    logged,
    loading,
    error: authError,
    message: authMessage,
    recoveryRequired,
    login,
    logout,
    requestPasswordReset,
    changePassword,
  } = useAuth();
  const [showLogin, setShowLogin] = useState(false);
  const [user, setUser] = useState("");
  const [pass, setPass] = useState("");
  const [err, setErr] = useState<string | null>(null);
  const [newPass, setNewPass] = useState("");
  const [confirmPass, setConfirmPass] = useState("");

  useEffect(() => {
    if (recoveryRequired) {
      setShowLogin(true);
      setErr(null);
    }
  }, [recoveryRequired]);

  async function tryLogin(e: React.FormEvent) {
    e.preventDefault();
    const result = await login(user, pass);
    if (!result.ok) {
      setErr(result.error ?? "Não foi possível entrar.");
      return;
    }
    setErr(null);
    setShowLogin(false);
    setUser("");
    setPass("");
    onOpenAdmin();
  }

  async function sendRecovery() {
    const result = await requestPasswordReset(user);
    if (!result.ok) setErr(result.error ?? "Não foi possível enviar o link.");
    else setErr(null);
  }

  async function submitNewPassword(e: React.FormEvent) {
    e.preventDefault();
    if (newPass.length < 8) {
      setErr("Use uma senha com pelo menos 8 caracteres.");
      return;
    }
    if (newPass !== confirmPass) {
      setErr("As senhas não coincidem.");
      return;
    }
    const result = await changePassword(newPass);
    if (!result.ok) {
      setErr(result.error ?? "Não foi possível atualizar a senha.");
      return;
    }
    setErr(null);
    setNewPass("");
    setConfirmPass("");
    setShowLogin(false);
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
          <p className="text-sm text-muted-foreground mt-1">1º Mobile Android (Kotlin) · 2º Java 21 &amp; Spring Boot 3 · 3º Node.js</p>

          {((showLogin && !logged) || recoveryRequired) && (
            <form
              onSubmit={recoveryRequired ? submitNewPassword : tryLogin}
              className="mt-4 w-full max-w-sm mx-auto md:mx-0 bg-[#0b1220] border border-[#6db33f]/40 rounded-xl p-3 text-left animate-in fade-in slide-in-from-bottom-4"
            >
              <div className="flex items-center justify-between mb-2">
                <div className="flex items-center gap-2 text-xs font-bold font-mono uppercase tracking-wider" style={{ color: "#6db33f" }}>
                  <Lock size={14} /> {recoveryRequired ? "Redefinir senha do painel" : "Painel Admin — Login"}
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
              {recoveryRequired ? (
                <>
                  <input
                    value={newPass}
                    onChange={(e) => setNewPass(e.target.value)}
                    type="password"
                    placeholder="Nova senha (mínimo 8 caracteres)"
                    className="w-full rounded-lg px-2 py-1.5 text-sm bg-[#070b15] border border-[#1e3a8a]/60 text-foreground outline-none focus:border-primary mb-2"
                    autoComplete="new-password"
                    minLength={8}
                    required
                  />
                  <input
                    value={confirmPass}
                    onChange={(e) => setConfirmPass(e.target.value)}
                    type="password"
                    placeholder="Confirme a nova senha"
                    className="w-full rounded-lg px-2 py-1.5 text-sm bg-[#070b15] border border-[#1e3a8a]/60 text-foreground outline-none focus:border-primary mb-2"
                    autoComplete="new-password"
                    required
                  />
                  <button type="submit" disabled={loading} className="rails-button rounded-lg px-3 py-1.5 text-xs font-semibold disabled:opacity-50">
                    Atualizar senha
                  </button>
                </>
              ) : (
                <>
                  <div className="grid grid-cols-2 gap-2 mb-2">
                    <input
                      value={user}
                      onChange={(e) => setUser(e.target.value)}
                      type="text"
                      placeholder="usuário (ex: admin)"
                      className="rounded-lg px-2 py-1.5 text-sm bg-[#070b15] border border-[#1e3a8a]/60 text-foreground outline-none focus:border-primary"
                      autoComplete="username"
                      required
                    />
                    <input
                      value={pass}
                      onChange={(e) => setPass(e.target.value)}
                      type="password"
                      placeholder="senha (ex: admin123)"
                      className="rounded-lg px-2 py-1.5 text-sm bg-[#070b15] border border-[#1e3a8a]/60 text-foreground outline-none focus:border-primary"
                      autoComplete="current-password"
                      required
                    />
                  </div>
                  <div className="flex items-center justify-between gap-2 flex-wrap">
                    <span className="text-[10.5px] font-mono text-muted-foreground">Credenciais padrão: admin / admin123</span>
                    <button type="submit" disabled={loading} className="rails-button rounded-lg px-3 py-1.5 text-xs font-semibold disabled:opacity-50">
                      {loading ? "Entrando..." : "Entrar"}
                    </button>
                  </div>
                  <button type="button" onClick={() => void sendRecovery()} disabled={loading} className="mt-2 text-[11px] font-mono text-[#9ed866] hover:underline disabled:opacity-50">
                    Esqueci minha senha
                  </button>
                </>
              )}
              {(err || authError) && <div className="text-[11px] text-[#e44857] mt-1.5 font-mono">{err || authError}</div>}
              {authMessage && <div className="text-[11px] text-[#9ed866] mt-1.5 font-mono">{authMessage}</div>}
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
            title={logged ? "Abrir Painel Admin" : "Abrir login do Painel Admin"}
            className="footer-social"
            aria-label="Painel Admin"
          >
            {logged ? <Unlock size={19} className="text-[#50fa7b]" /> : <Settings size={19} />}
          </button>

          {logged && (
            <button
              type="button"
              onClick={logout}
              className="rounded-full px-3 py-1.5 text-[11px] font-bold font-mono bg-[#101117] border border-[#7f52ff]/40 text-[#b497ff] hover:bg-[#7f52ff]/15 transition-colors"
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
        Construído com Kotlin &amp; Jetpack Compose (Android) · Java 21 &amp; Spring Boot 3 · Node.js &amp; TypeScript.
      </span>
    </footer>
  );
}
