export type ProjectBadge = "DESTAQUE" | "EM CONSTRUÇÃO" | "LIVE" | "API" | "FULL-STACK" | "GOLANG";
export type ProjectTone =
  | "tech-rails"
  | "tech-ruby"
  | "tech-java"
  | "tech-spring"
  | "tech-quarkus"
  | "tech-kotlin"
  | "tech-flutter"
  | "tech-golang"
  | "tech-postgres"
  | "tech-redis"
  | "tech-docker"
  | "tech-actions"
  | "tech-react"
  | "tech-ts"
  | "tech-jwt"
  | "tech-openapi"
  | "tech-pdf"
  | "tech-api"
  | "tech-vue"
  | "tech-git"
  | "tech-angular"
  | "tech-linux"
  | "tech-mysql"
  | "tech-bash"
  | "tech-node"
  | "tech-next"
  | "tech-js"
  | "tech-mongo"
  | "tech-tailwind"
  | "tech-vite";

export type AdminProject = {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  tech: string[];
  icon: string;
  customIconUrl?: string;
  tone: ProjectTone;
  github: string;
  live?: string;
  badge?: ProjectBadge;
  featured?: boolean;
};

export type AdminExperience = {
  id: string;
  company: string;
  role: string;
  period: string;
  location: string;
  description: string;
  tags: { name: string; tone: ProjectTone }[];
};

export type AdminSkill = { name: string; level: number; color: string; icon: string };
export type AdminAbout = {
  summary: string;
  objective: string;
  mantra?: string;
  skills: AdminSkill[];
  methodologies: string[];
  practices: string[];
};

export type AdminStackItem = {
  id: string;
  name: string;
  icon: string;
  customIconUrl?: string;
  tone: ProjectTone;
  level: number;
};

const GITHUB = "https://github.com/reinaldobarreto31";

export const DEFAULTS: {
  projects: AdminProject[];
  experiences: AdminExperience[];
  about: AdminAbout;
  stack: AdminStackItem[];
} = {
  projects: [
    {
      id: "proj-railshub",
      title: "RailsHub — Gestão & Microsserviços",
      subtitle: "Ruby on Rails 7 · Ruby 3 · Sidekiq · PostgreSQL · Redis",
      description:
        "Plataforma completa em Ruby on Rails 7 e Ruby 3 com arquitetura MVC/API limpa, Sidekiq para processamento de background jobs assíncronos, Redis, RSpec para suíte de testes de integração e banco PostgreSQL conteinerizado em Docker Compose.",
      tech: ["Ruby on Rails", "Ruby 3", "PostgreSQL", "RSpec", "Sidekiq", "Redis", "Docker"],
      icon: "rails",
      tone: "tech-rails",
      github: `${GITHUB}/railshub`,
      badge: "DESTAQUE",
      featured: true,
    },
    {
      id: "proj-rails-swagger-crud",
      title: "Rails Swagger CRUD API",
      subtitle: "Ruby on Rails 7 · rswag · Devise JWT · OpenAPI 3",
      description:
        "API RESTful robusta desenvolvida em Ruby on Rails 7 com rswag para geração automática de documentação Swagger UI interativa, autenticação JWT via Devise e testes de integração com RSpec e FactoryBot.",
      tech: ["Ruby on Rails", "Ruby 3", "Swagger UI", "Devise", "JWT", "RSpec", "PostgreSQL"],
      icon: "rails",
      tone: "tech-rails",
      github: `${GITHUB}/rails-swagger-crud`,
      badge: "DESTAQUE",
      featured: true,
    },
    {
      id: "proj-stockwise",
      title: "StockWise (Controle de Estoque)",
      subtitle: "Ruby on Rails API · React 18 · PostgreSQL · Tailwind",
      description:
        "Plataforma de gestão e controle de estoque corporativo de alta performance. Backend API em Ruby on Rails com autenticação segura, testes em RSpec e painel administrativo reativo construído com React, TypeScript e Tailwind CSS.",
      tech: ["Ruby on Rails", "React 18", "PostgreSQL", "Docker", "Tailwind CSS"],
      icon: "rails",
      tone: "tech-rails",
      github: `${GITHUB}/stockwise`,
      badge: "DESTAQUE",
      featured: true,
    },
    {
      id: "proj-pdf",
      title: "PDF Compressor (Compressor de PDF)",
      subtitle: "Script Python & Ghostscript · Ferramenta Web Client-Side",
      description:
        "Projeto de otimização de PDFs no GitHub (reinaldobarreto31/PDF-Compressor). Inclui script em Python acoplado ao Ghostscript para redução drástica no tamanho de arquivos PDF mantendo legibilidade, e ferramenta web com presets brasileiros.",
      tech: ["Python", "Ghostscript", "React 18", "TypeScript", "pdf-lib", "Tailwind"],
      icon: "pdf",
      tone: "tech-pdf",
      github: `${GITHUB}/PDF-Compressor`,
      badge: "FULL-STACK",
    },
    {
      id: "proj-nextjs-hub",
      title: "Next.js Full-Stack Hub",
      subtitle: "App Router · tRPC · NextAuth · Prisma",
      description:
        "Aplicação full-stack com Next.js 14 (App Router + Server Components), autenticação NextAuth, tRPC para endpoints tipados e ORM Prisma com PostgreSQL.",
      tech: ["Next.js 14", "React 18", "TypeScript", "Prisma", "PostgreSQL", "Tailwind"],
      icon: "next",
      tone: "tech-next",
      github: `${GITHUB}/nextjs-fullstack-hub`,
      badge: "FULL-STACK",
    },
  ],

  experiences: [
    {
      id: "exp-prodeb",
      company: "PRODEB — Companhia de Processamento de Dados da Bahia",
      role: "Analista de Sistemas e Desenvolvedor · Consultor IV",
      period: "mar/2024 – set/2024",
      location: "Salvador / BA",
      description:
        "Desenvolvimento e manutenção de soluções web e APIs RESTful enterprise em Ruby on Rails e integração de sistemas para o Governo do Estado da Bahia. Arquitetura em camadas, suporte e evolução de ecossistema de dados, transações ACID em PostgreSQL e dashboards reativos em Vue.js / React.",
      tags: [
        { name: "Ruby on Rails", tone: "tech-rails" },
        { name: "Ruby 3", tone: "tech-ruby" },
        { name: "APIs REST", tone: "tech-api" },
        { name: "PostgreSQL", tone: "tech-postgres" },
        { name: "RSpec", tone: "tech-ruby" },
        { name: "Vue.js", tone: "tech-vue" },
        { name: "Git", tone: "tech-git" },
      ],
    },
    {
      id: "exp-lampp",
      company: "LAMPP IT Solutions",
      role: "Analista de Sistemas e Desenvolvedor de Software",
      period: "mar/2022 – mai/2022",
      location: "Salvador / BA",
      description:
        "Atuação em sistemas críticos da Secretaria de Segurança Pública da Bahia (SSP-BA) e Polícia Militar (PMBA). Reescrita e otimização do módulo de controle de acesso e auditoria interna em Ruby on Rails + Devise + JWT (RBAC). Interfaces interativas em React.js e Angular.",
      tags: [
        { name: "Ruby on Rails", tone: "tech-rails" },
        { name: "Ruby", tone: "tech-ruby" },
        { name: "Devise", tone: "tech-rails" },
        { name: "React.js", tone: "tech-react" },
        { name: "PostgreSQL", tone: "tech-postgres" },
        { name: "Linux Ubuntu", tone: "tech-linux" },
      ],
    },
    {
      id: "exp-edza",
      company: "EDZA Planejamento Consultoria e Informática LTDA",
      role: "Analista de Sistemas e Desenvolvedor de Software",
      period: "nov/2019 – mar/2022",
      location: "Salvador / BA",
      description:
        "Desenvolvimento e evolução de ERP Municipal em Ruby on Rails cobrindo diversas prefeituras. Módulos da gestão pública: Tributário / Gestão Fiscal, Secretaria da Fazenda Municipal, RH e Folha de Pagamento, Finanças, Saúde e NF-e. Criação de APIs com Docker, dashboards Angular / Vue.js e scripts Bash.",
      tags: [
        { name: "Ruby on Rails", tone: "tech-rails" },
        { name: "Ruby", tone: "tech-ruby" },
        { name: "ERP Municipal", tone: "tech-api" },
        { name: "PostgreSQL / MySQL", tone: "tech-postgres" },
        { name: "Angular", tone: "tech-angular" },
        { name: "Linux / Bash", tone: "tech-bash" },
      ],
    },
  ],

  about: {
    summary:
      "Engenheiro de Software Full-Cycle com sólida trajetória no desenvolvimento de sistemas corporativos de alta criticidade e performance. Especialista no ecossistema Ruby on Rails, Ruby 3, PostgreSQL, RSpec, Sidekiq e Docker, com forte domínio de arquitetura MVC/API, serviços assíncronos e ecossistema React / Next.js. Experiência em modernização de sistemas governamentais e empresariais, auditoria, segurança e resiliência de dados.",
    objective:
      "Atuar como Engenheiro de Software Backend / Full-Stack focado no ecossistema Ruby on Rails (Ruby 3, RSpec, Sidekiq, PostgreSQL) e tecnologias modernas da web (React, Next.js, Docker, CI/CD) em projetos de alto impacto.",
    mantra:
      'Convencional sobre configuração, testes concisos com RSpec e código limpo e elegante em Ruby.',
    skills: [
      { name: "Ruby on Rails 7/8", level: 96, color: "#cc0000", icon: "rails" },
      { name: "Ruby 3", level: 95, color: "#cc0000", icon: "ruby" },
      { name: "RSpec · TDD", level: 92, color: "#cc0000", icon: "ruby" },
      { name: "Sidekiq · Redis", level: 90, color: "#dc2626", icon: "redis" },
      { name: "PostgreSQL · ActiveRecord", level: 90, color: "#336791", icon: "postgres" },
      { name: "Devise · JWT Auth", level: 88, color: "#cc0000", icon: "rails" },
      { name: "Docker · Docker Compose", level: 86, color: "#2496ed", icon: "docker" },
      { name: "React 18 · TypeScript", level: 88, color: "#3178c6", icon: "react" },
      { name: "Next.js 14 · App Router", level: 85, color: "#ffffff", icon: "next" },
      { name: "APIs REST · Swagger / OpenAPI", level: 92, color: "#6db33f", icon: "swagger" },
      { name: "Vue.js 3", level: 80, color: "#42b883", icon: "vue" },
      { name: "Tailwind CSS", level: 90, color: "#38bdf8", icon: "tailwind" },
    ],
    methodologies: [
      "Convention over Configuration",
      "Clean Architecture",
      "TDD · RSpec",
      "Domain-Driven Design",
      "Clean Code",
      "Scrum · Kanban",
      "CI/CD · GitHub Actions",
      "OpenAPI / Swagger",
      "12-Factor App",
      "RESTful API Design",
    ],
    practices: ["SOLID", "REST APIs", "ActiveRecord", "RSpec", "TDD", "Clean Code", "CI/CD", "Background Jobs"],
  },

  stack: [
    { id: "s-rails", name: "Ruby on Rails", icon: "rails", tone: "tech-rails", level: 96 },
    { id: "s-ruby", name: "Ruby 3", icon: "ruby", tone: "tech-ruby", level: 95 },
    { id: "s-rspec", name: "RSpec", icon: "ruby", tone: "tech-ruby", level: 92 },
    { id: "s-sidekiq", name: "Sidekiq / Redis", icon: "redis", tone: "tech-redis", level: 90 },
    { id: "s-postgres", name: "PostgreSQL", icon: "postgres", tone: "tech-postgres", level: 90 },
    { id: "s-docker", name: "Docker", icon: "docker", tone: "tech-docker", level: 86 },
    { id: "s-react", name: "React 18", icon: "react", tone: "tech-react", level: 88 },
    { id: "s-next", name: "Next.js 14", icon: "next", tone: "tech-next", level: 85 },
    { id: "s-ts", name: "TypeScript", icon: "ts", tone: "tech-ts", level: 90 },
    { id: "s-js", name: "JavaScript", icon: "js", tone: "tech-js", level: 92 },
    { id: "s-tailwind", name: "Tailwind CSS", icon: "tailwind", tone: "tech-tailwind", level: 90 },
    { id: "s-node", name: "Node.js", icon: "node", tone: "tech-node", level: 80 },
    { id: "s-vue", name: "Vue.js 3", icon: "vue", tone: "tech-vue", level: 78 },
  ],
};
