import { useState, useEffect } from "react";
import { Lock, X, AlertCircle, CheckCircle, ShieldCheck } from "lucide-react";
import { useAuth } from "@/lib/admin-store";

type Props = {
  open: boolean;
  onClose: () => void;
  onSuccess: () => void;
};

export function AdminLoginModal({ open, onClose, onSuccess }: Props) {
  const { login, loading, error: authError } = useAuth();
  const [user, setUser] = useState("admin");
  const [pass, setPass] = useState("admin123");
  const [err, setErr] = useState<string | null>(null);

  useEffect(() => {
    if (open) {
      setUser("admin");
      setPass("admin123");
      setErr(null);
    }
  }, [open]);

  if (!open) return null;

  async function handleSubmit(e: React.FormEvent) {
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
    onClose();
    onSuccess();
  }

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-in fade-in duration-200">
      <div 
        className="relative w-full max-w-md bg-card border border-[#7f52ff]/50 rounded-2xl p-6 shadow-[0_20px_60px_rgba(0,0,0,0.85)] text-foreground overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Glow accent */}
        <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-[#7f52ff] via-[#6db33f] to-[#38bdf8]" />

        {/* Header */}
        <div className="flex items-center justify-between pb-4 mb-4 border-b border-border/60">
          <div className="flex items-center gap-2.5">
            <div className="w-8 h-8 rounded-lg bg-[#7f52ff]/15 border border-[#7f52ff]/35 flex items-center justify-center text-[#a78bfa]">
              <Lock size={16} />
            </div>
            <div>
              <h3 className="font-bold text-sm tracking-tight text-foreground flex items-center gap-1.5">
                Área de Gestão do Portfólio
              </h3>
              <p className="text-[11px] font-mono text-muted-foreground">
                Painel Administrativo CMS
              </p>
            </div>
          </div>
          <button
            type="button"
            onClick={onClose}
            className="p-1.5 rounded-lg text-muted-foreground hover:text-foreground hover:bg-white/5 transition-colors"
            title="Fechar"
            aria-label="Fechar modal"
          >
            <X size={18} />
          </button>
        </div>

        {/* Form without native browser validation */}
        <form noValidate onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-xs font-mono text-muted-foreground mb-1.5 font-medium">
              Usuário de Acesso
            </label>
            <input
              type="text"
              value={user}
              onChange={(e) => {
                setUser(e.target.value);
                if (err) setErr(null);
              }}
              placeholder="admin"
              className="w-full rounded-lg px-3 py-2 text-sm bg-background border border-border text-foreground outline-none focus:border-[#7f52ff] focus:ring-1 focus:ring-[#7f52ff]/40 transition-all font-mono"
              autoComplete="username"
            />
          </div>

          <div>
            <label className="block text-xs font-mono text-muted-foreground mb-1.5 font-medium">
              Senha de Acesso
            </label>
            <input
              type="password"
              value={pass}
              onChange={(e) => {
                setPass(e.target.value);
                if (err) setErr(null);
              }}
              placeholder="••••••••"
              className="w-full rounded-lg px-3 py-2 text-sm bg-background border border-border text-foreground outline-none focus:border-[#7f52ff] focus:ring-1 focus:ring-[#7f52ff]/40 transition-all font-mono"
              autoComplete="current-password"
            />
          </div>

          {/* Quick Info Box */}
          <div className="flex items-center justify-between p-2.5 rounded-lg bg-[#7f52ff]/10 border border-[#7f52ff]/25 text-[11px] font-mono text-muted-foreground">
            <span className="flex items-center gap-1.5 text-foreground/90">
              <ShieldCheck size={14} className="text-[#a78bfa]" />
              Padrão: <strong className="text-[#a78bfa]">admin</strong> / <strong className="text-[#a78bfa]">admin123</strong>
            </span>
            <button
              type="button"
              onClick={() => {
                setUser("admin");
                setPass("admin123");
                setErr(null);
              }}
              className="text-[10px] text-[#a78bfa] hover:underline uppercase font-bold"
            >
              Preencher
            </button>
          </div>

          {/* Styled Tailwind Error Alert */}
          {(err || authError) && (
            <div className="flex items-center gap-2 p-3 rounded-lg bg-rose-500/10 border border-rose-500/30 text-rose-400 text-xs font-mono animate-in fade-in">
              <AlertCircle size={16} className="shrink-0 text-rose-400" />
              <span>{err || authError}</span>
            </div>
          )}

          {/* Action Buttons */}
          <div className="flex items-center justify-end gap-2 pt-2">
            <button
              type="button"
              onClick={onClose}
              className="px-4 py-2 rounded-lg text-xs font-semibold text-muted-foreground hover:text-foreground hover:bg-white/5 transition-colors"
            >
              Cancelar
            </button>
            <button
              type="submit"
              disabled={loading}
              className="px-5 py-2.5 rounded-lg text-xs font-semibold bg-[#7f52ff] hover:bg-[#6333ea] text-white shadow-md shadow-[#7f52ff]/25 transition-all disabled:opacity-50 inline-flex items-center gap-2"
            >
              <Lock size={13} />
              {loading ? "Entrando..." : "Entrar no Painel"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
