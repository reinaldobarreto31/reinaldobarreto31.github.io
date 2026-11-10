import { Github, Linkedin, Mail, Unlock, Settings } from "lucide-react";
import { useAuth } from "@/lib/admin-store";

type FooterProps = {
  onOpenAdmin: () => void;
};

export function Footer({ onOpenAdmin }: FooterProps) {
  const { logged, logout } = useAuth();

  return (
    <footer className="bg-card border-t border-border py-10 pb-24 md:pb-10 mt-16 relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-[#7f52ff] to-transparent" />

      <div className="container mx-auto px-4 flex flex-col md:flex-row items-center justify-between gap-5">
        <div className="text-center md:text-left">
          <span
            className="font-bold text-xl tracking-tighter select-none cursor-pointer hover:text-[#a78bfa] transition-colors"
            title={logged ? "Painel Admin autenticado (clique para abrir)" : "Área de Gestão do Portfólio (clique para entrar)"}
            onClick={onOpenAdmin}
          >
            reinaldo.barreto
          </span>
          <p className="text-sm text-muted-foreground mt-1">
            1º Mobile Android (Kotlin &amp; KMP) · 2º Java 21 &amp; Spring Boot 3 · 3º Node.js
          </p>
        </div>

        <div className="flex items-center gap-3">
          <button
            type="button"
            onClick={onOpenAdmin}
            title={logged ? "Abrir Painel Admin" : "Abrir Área de Gestão (Login)"}
            className="footer-social hover:border-[#7f52ff]/50 hover:text-[#a78bfa]"
            aria-label="Área de Gestão"
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
