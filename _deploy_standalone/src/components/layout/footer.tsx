import { useEffect, useState } from "react";
import { Github, Linkedin, Mail, Lock, Unlock, Settings, AlertCircle, CheckCircle } from "lucide-react";
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
    setErr(null);
    const u = (user || "").trim();
    const p = (pass || "").trim();
    if (!u) {
      setErr("Por favor, informe o usuário de acesso.");
      return;
    }
    if (!p) {
      setErr("Por favor, informe a senha.");
      return;
    }
    const result = await login(u, p);
    if (!result.ok) {
      setErr(result.error ?? "Credenciais inválidas. Use usuário 'admin' e senha 'admin123'.");
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
              noValidate
              onSubmit={recoveryRequired ? submitNewPassword : tryLogin}
              className="mt-4 w-full max-w-md mx-auto md:mx-0 bg-card/95 border border-[#7f52ff]/40 rounded-2xl p-4 text-left shadow-2xl backdrop-blur-xl animate-in fade-in slide-in-from-bottom-4 transition-all"
            >
              <div className="flex items-center justify-between pb-3 mb-3 border-b border-border/60">
                <div className="flex items-center gap-2 text-xs font-bold font-mono uppercase tracking-wider text-[#a78bfa]">
                  <Lock size={15} className="text-[#a78bfa]" />
                  <span>{recoveryRequired ? "Redefinir Senha do Painel" : "Painel Administrativo — Login"}</span>
                </div>
                <button
                  type="button"
                  onClick={() => {
                    setShowLogin(false);
                    setErr(null);
                  }}
                  className="text-muted-foreground hover:text-foreground text-xs font-mono px-2 py-1 rounded-md hover:bg-white/5 transition-colors"
                >
                  ✖ Fechar
                </button>
              </div>

              {recoveryRequired ? (
                <div className="space-y-3">
                  <input
                    value={newPass}
                    onChange={(e) => setNewPass(e.target.value)}
                    type="password"
                    placeholder="Nova senha (mínimo 8 caracteres)"
                    className="w-full rounded-lg px-3 py-2 text-sm bg-background border border-border text-foreground outline-none focus:border-[#7f52ff] focus:ring-1 focus:ring-[#7f52ff]/40 transition-all placeholder:text-muted-foreground/40"
                    autoComplete="new-password"
                  />
                  <input
                    value={confirmPass}
                    onChange={(e) => setConfirmPass(e.target.value)}
                    type="password"
                    placeholder="Confirme a nova senha"
                    className="w-full rounded-lg px-3 py-2 text-sm bg-background border border-border text-foreground outline-none focus:border-[#7f52ff] focus:ring-1 focus:ring-[#7f52ff]/40 transition-all placeholder:text-muted-foreground/40"
                    autoComplete="new-password"
                  />
                  <button
                    type="submit"
                    disabled={loading}
                    className="w-full rounded-lg px-4 py-2 text-xs font-semibold bg-[#7f52ff] hover:bg-[#6333ea] text-white shadow-md shadow-[#7f52ff]/25 transition-all disabled:opacity-50"
                  >
                    {loading ? "Atualizando..." : "Atualizar senha"}
                  </button>
                </div>
              ) : (
                <div className="space-y-3">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                    <div>
                      <label className="block text-[11px] font-mono text-muted-foreground mb-1">Usuário</label>
                      <input
                        value={user}
                        onChange={(e) => {
                          setUser(e.target.value);
                          if (err) setErr(null);
                        }}
                        type="text"
                        placeholder="admin"
                        className="w-full rounded-lg px-3 py-2 text-sm bg-background border border-border text-foreground outline-none focus:border-[#7f52ff] focus:ring-1 focus:ring-[#7f52ff]/40 transition-all placeholder:text-muted-foreground/40"
                        autoComplete="username"
                      />
                    </div>
                    <div>
                      <label className="block text-[11px] font-mono text-muted-foreground mb-1">Senha</label>
                      <input
                        value={pass}
                        onChange={(e) => {
                          setPass(e.target.value);
                          if (err) setErr(null);
                        }}
                        type="password"
                        placeholder="admin123"
                        className="w-full rounded-lg px-3 py-2 text-sm bg-background border border-border text-foreground outline-none focus:border-[#7f52ff] focus:ring-1 focus:ring-[#7f52ff]/40 transition-all placeholder:text-muted-foreground/40"
                        autoComplete="current-password"
                      />
                    </div>
                  </div>

                  <div className="flex items-center justify-between gap-2 pt-1 flex-wrap">
                    <span className="text-[11px] font-mono text-muted-foreground bg-muted/40 border border-border/50 px-2.5 py-1 rounded-md">
                      Padrão: <span className="text-foreground font-semibold">admin</span> / <span className="text-foreground font-semibold">admin123</span>
                    </span>
                    <button
                      type="submit"
                      disabled={loading}
                      className="rounded-lg px-4 py-2 text-xs font-semibold bg-[#7f52ff] hover:bg-[#6333ea] text-white shadow-md shadow-[#7f52ff]/25 transition-all disabled:opacity-50 inline-flex items-center gap-1.5"
                    >
                      <Lock size={12} />
                      {loading ? "Entrando..." : "Entrar no Painel"}
                    </button>
                  </div>
                </div>
              )}

              {/* Mensagens de validação e status estilizadas com Tailwind CSS */}
              {(err || authError) && (
                <div className="flex items-center gap-2.5 p-3 mt-3 rounded-lg bg-rose-500/10 border border-rose-500/30 text-rose-400 text-xs font-mono animate-in fade-in">
                  <AlertCircle size={15} className="shrink-0 text-rose-400" />
                  <span>{err || authError}</span>
                </div>
              )}

              {authMessage && (
                <div className="flex items-center gap-2.5 p-3 mt-3 rounded-lg bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-xs font-mono animate-in fade-in">
                  <CheckCircle size={15} className="shrink-0 text-emerald-400" />
                  <span>{authMessage}</span>
                </div>
              )}
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
