import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, Copy, Check, Download, Github, Sparkles } from "lucide-react";
import { toast } from "sonner";

type Props = {
  open: boolean;
  onClose: () => void;
};

export const GITHUB_PROFILE_README_MARKDOWN = `# 👋 Olá! Eu sou Reinaldo Barreto

### 🚀 Engenheiro de Software Full-Cycle · Especialista Ruby on Rails & React / Next.js

> *"Convencional sobre configuração, testes concisos com RSpec e código limpo, elegante e performático em Ruby on Rails."*

---

### 🛠️ Stack Principal & Ecossistema

[![Ruby on Rails 7](https://img.shields.io/badge/Ruby_on_Rails-7.x%20%2F%208.x-CC0000?style=for-the-badge&logo=rubyonrails&logoColor=white)](https://rubyonrails.org)
[![Ruby 3](https://img.shields.io/badge/Ruby-3.x-CC0000?style=for-the-badge&logo=ruby&logoColor=white)](https://www.ruby-lang.org)
[![RSpec](https://img.shields.io/badge/RSpec-TDD-CC0000?style=for-the-badge&logo=ruby&logoColor=white)](https://rspec.info)
[![Sidekiq](https://img.shields.io/badge/Sidekiq-Redis_Jobs-DC2626?style=for-the-badge&logo=redis&logoColor=white)](https://sidekiq.org)
[![PostgreSQL](https://img.shields.io/badge/PostgreSQL-ActiveRecord-4169E1?style=for-the-badge&logo=postgresql&logoColor=white)](https://postgresql.org)
[![Docker](https://img.shields.io/badge/Docker-Compose-2496ED?style=for-the-badge&logo=docker&logoColor=white)](https://docker.com)
[![React 18](https://img.shields.io/badge/React-18.x-61DAFB?style=for-the-badge&logo=react&logoColor=black)](https://react.dev)
[![Next.js](https://img.shields.io/badge/Next.js-14.x-000000?style=for-the-badge&logo=nextdotjs&logoColor=white)](https://nextjs.org)

---

### 📐 Padrões de Arquitetura & Boas Práticas

- **Convention over Configuration & Clean Code**: Arquitetura expressiva, módulos coesos e alta legibilidade.
- **MVC & API Mode**: Construção de APIs RESTful estruturadas e aplicações reativas no ecossistema Web.
- **TDD (Test-Driven Development) com RSpec & FactoryBot**: Suítes de testes robustas e automatizadas.
- **Processamento Assíncrono com Sidekiq & Redis**: Filas concorrentes e serviços de background de alta performance.
- **Segurança & Autenticação (Devise, JWT, OAuth2)**: Controle de acesso refinado (RBAC) e rotas protegidas.
- **Conteinerização & CI/CD (Docker, Docker Compose, GitHub Actions)**: Ambientes reproduzíveis e pipelines automatizados.

---

### 🔭 Experiência Profissional Destacada

- **PRODEB (Companhia de Processamento de Dados da Bahia)**:
  - Desenvolvimento e evolução de soluções web e APIs RESTful em Ruby on Rails para órgãos governamentais do Estado da Bahia.
  - Otimização de transações ACID e consultas relacionais em PostgreSQL, integrando front-ends reativos.
- **SSP-BA (Secretaria de Segurança Pública da Bahia)**:
  - Reescrita e otimização do módulo de controle de acesso e auditoria interna em **Ruby on Rails + Devise + JWT**.
- **EDZA / Sistemas Governamentais e ERPs**:
  - Desenvolvimento e evolução de ERPs Municipais em Ruby on Rails abrangendo módulos de **Tributário, RH, Finanças, Saúde e Nota Fiscal Eletrônica (NF-e)**.

---

### 💻 Projetos em Destaque

1. **[RailsHub — Gestão & Microsserviços](https://github.com/reinaldobarreto31/railshub)**
   - *Ruby on Rails 7 · Ruby 3 · Sidekiq · PostgreSQL · Redis · RSpec · Docker Compose*
   - Plataforma completa com arquitetura limpa, Sidekiq para background jobs e testes RSpec.

2. **[Rails Swagger CRUD API](https://github.com/reinaldobarreto31/rails-swagger-crud)**
   - *Ruby on Rails 7 · rswag · Devise JWT · OpenAPI 3 · RSpec · PostgreSQL*
   - API RESTful com documentação Swagger UI interativa automática, autenticação JWT via Devise e testes de integração.

3. **[StockWise — Controle de Estoque](https://github.com/reinaldobarreto31/stockwise)**
   - *Ruby on Rails API · React 18 · TypeScript · PostgreSQL · Docker · Tailwind CSS*
   - Plataforma de gestão de estoque corporativo com backend API Rails e painel administrativo reativo.

4. **[PDF Compressor Web & Script](https://github.com/reinaldobarreto31/PDF-Compressor)**
   - *Python · Ghostscript · React 18 · TypeScript · Web Client-Side*
   - Otimização e compressão de arquivos PDF com script Python e ferramenta web interativa.

---

### 📊 Estatísticas do GitHub

<p align="center">
  <img height="160" src="https://github-readme-stats.vercel.app/api?username=reinaldobarreto31&show_icons=true&theme=dracula&count_private=true" alt="Estatísticas de Reinaldo Barreto" />
  <img height="160" src="https://github-readme-stats.vercel.app/api/top-langs/?username=reinaldobarreto31&layout=compact&theme=dracula&hide=html,css" alt="Linguagens mais usadas por Reinaldo Barreto" />
</p>

---

### 📬 Conecte-se comigo

- 💼 **LinkedIn**: [reinaldo-barreto-2a4ba2116](https://linkedin.com/in/reinaldo-barreto-da-silva-2a4ba2116)
- 🌐 **Portfólio Web**: [reinaldobarreto31.github.io](https://reinaldobarreto31.github.io)
- ✉️ **E-mail**: [reinaldobarretosilva@gmail.com](mailto:reinaldobarretosilva@gmail.com)
`;

export function GithubReadmeModal({ open, onClose }: Props) {
  const [copied, setCopied] = useState(false);

  if (!open) return null;

  const handleCopy = () => {
    navigator.clipboard.writeText(GITHUB_PROFILE_README_MARKDOWN);
    setCopied(true);
    toast.success("Markdown do README do GitHub copiado para a área de transferência!");
    setTimeout(() => setCopied(false), 2000);
  };

  const handleDownload = () => {
    const blob = new Blob([GITHUB_PROFILE_README_MARKDOWN], { type: "text/markdown;charset=utf-8" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = "README.md";
    a.click();
    URL.revokeObjectURL(url);
    toast.success("Arquivo README.md baixado com sucesso!");
  };

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm overflow-y-auto">
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 15 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 15 }}
          className="relative w-full max-w-4xl max-h-[90vh] flex flex-col rounded-2xl bg-[#1e1f29] border border-[#44475a] text-[#f8f8f2] shadow-2xl overflow-hidden"
        >
          {/* Header */}
          <div className="flex items-center justify-between px-6 py-4 border-b border-[#44475a] bg-[#181921]">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-red-500/15 border border-red-500/30 flex items-center justify-center text-red-500">
                <Github size={20} />
              </div>
              <div>
                <h3 className="font-bold text-base text-white flex items-center gap-2">
                  Gerador do README.md do Perfil GitHub
                  <span className="text-[10px] font-mono px-2 py-0.5 rounded-full bg-red-500/20 text-red-400 border border-red-500/30">
                    reinaldobarreto31/reinaldobarreto31
                  </span>
                </h3>
                <p className="text-xs text-[#8be9fd] font-mono">
                  Copie e cole diretamente no seu repositório especial de perfil do GitHub
                </p>
              </div>
            </div>
            <button
              onClick={onClose}
              className="p-2 rounded-lg text-[#6272a4] hover:text-white hover:bg-[#282a36] transition-colors"
            >
              <X size={20} />
            </button>
          </div>

          {/* Action Bar */}
          <div className="px-6 py-3 bg-[#282a36] border-b border-[#44475a] flex flex-wrap items-center justify-between gap-3">
            <div className="flex items-center gap-2 text-xs font-mono text-[#f1fa8c]">
              <Sparkles size={14} className="text-[#50fa7b]" />
              <span>Inclui perfil Ruby on Rails 7, Ruby 3, RSpec, Sidekiq, PostgreSQL e React / Next.js!</span>
            </div>
            <div className="flex items-center gap-2">
              <button
                onClick={handleCopy}
                className="px-4 py-2 rounded-lg bg-[#50fa7b] hover:bg-[#50fa7b]/90 text-[#191a21] font-bold text-xs flex items-center gap-1.5 transition-all shadow-md"
              >
                {copied ? <Check size={15} /> : <Copy size={15} />}
                {copied ? "Copiado!" : "Copiar Markdown"}
              </button>
              <button
                onClick={handleDownload}
                className="px-4 py-2 rounded-lg bg-[#44475a] hover:bg-[#6272a4] text-white font-semibold text-xs flex items-center gap-1.5 transition-all border border-white/10"
              >
                <Download size={15} />
                Baixar README.md
              </button>
            </div>
          </div>

          {/* Markdown Content Viewer */}
          <div className="p-6 overflow-y-auto flex-1 font-mono text-xs leading-relaxed bg-[#191a21] text-[#f8f8f2] space-y-2 select-text">
            <pre className="whitespace-pre-wrap font-mono p-4 rounded-xl bg-[#282a36] border border-[#44475a] text-[#8be9fd] overflow-x-auto shadow-inner">
              {GITHUB_PROFILE_README_MARKDOWN}
            </pre>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
}
