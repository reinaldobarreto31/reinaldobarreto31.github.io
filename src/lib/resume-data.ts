export type ResumeIcon =
  | "rails" | "ruby" | "rspec"
  | "react" | "ts" | "js" | "next" | "node"
  | "postgres" | "mysql" | "mongo" | "redis" | "docker" | "actions"
  | "vue" | "angular" | "git" | "linux" | "bash" | "jwt"
  | "openapi" | "swagger" | "pdf" | "package" | "tailwind" | "vite";

export interface ResumeSkill {
  name: string;
  level: number;
  color: string;
  icon: ResumeIcon;
}

export interface ResumeExperience {
  company: string;
  role: string;
  period: string;
  location: string;
  description: string;
  tags: { name: string; icon: ResumeIcon; tone: string }[];
}

export interface ResumeProject {
  title: string;
  subtitle?: string;
  badge: "DESTAQUE" | "EM CONSTRUÇÃO" | "LIVE" | "FULL-STACK" | "API";
  stack: string;
  description: string;
  tags: string[];
  github: string;
  live?: string;
  tone: string;
  icon: ResumeIcon;
}

export const PROFESSIONAL_SUMMARY = [
  "Engenheiro de Software Full-Cycle com sólida trajetória no desenvolvimento de sistemas corporativos de alta criticidade e performance. Especialista no ecossistema Ruby on Rails, Ruby 3, PostgreSQL, RSpec, Sidekiq e Docker, com forte domínio de arquitetura MVC/API, serviços assíncronos e ecossistema React / Next.js. Experiência em modernização de sistemas governamentais (PRODEB), segurança pública (SSP-BA / Cartão do Policial) e ERPs Municipais (EDZA) abrangendo todos os módulos (Tributário, RH, Finanças, Saúde, Educação, NF-e). Backend Ruby on Rails como pilar principal, com diferenciais em React, Next.js, TypeScript e automação de testes.",
];

export const PROFESSIONAL_OBJECTIVE =
  "Atuar como Engenheiro de Software Backend / Full-Stack focado no ecossistema Ruby on Rails (Ruby 3, RSpec, Sidekiq, PostgreSQL) e tecnologias modernas da web (React, Next.js, Docker, CI/CD) em projetos de alto impacto e evolução de arquiteturas.";

export const CONTACT = {
  name: "Reinaldo Barreto da Silva",
  phone: "55 47 98830 2308",
  email: "reinaldobarretosilva@gmail.com",
  location: "Navegantes / SC, Brasil",
  linkedin: "linkedin.com/in/reinaldo-barreto-2a4ba2116",
  github: "github.com/reinaldobarreto31",
  headline: "Ruby on Rails · Ruby 3 · RSpec · Sidekiq · PostgreSQL · Docker · React 18 · Next.js 14",
};

export const HARD_SKILLS: ResumeSkill[] = [
  { name: "Ruby on Rails 7/8 · Ruby 3", level: 96, color: "#cc0000", icon: "rails" },
  { name: "RSpec · TDD · FactoryBot", level: 94, color: "#cc0000", icon: "ruby" },
  { name: "Sidekiq · Redis · Background Jobs", level: 90, color: "#dc2626", icon: "redis" },
  { name: "APIs RESTful · Swagger / rswag", level: 93, color: "#6db33f", icon: "swagger" },
  { name: "Devise · JWT Auth · OAuth2", level: 90, color: "#cc0000", icon: "rails" },
  { name: "React 18 · TypeScript", level: 88, color: "#3178c6", icon: "react" },
  { name: "Next.js 14 · App Router", level: 85, color: "#ffffff", icon: "next" },
  { name: "PostgreSQL · ActiveRecord", level: 90, color: "#336791", icon: "postgres" },
  { name: "Docker · Docker Compose · CI/CD", level: 86, color: "#2496ed", icon: "docker" },
  { name: "Tailwind CSS · Hotwire / Stimulus", level: 88, color: "#38bdf8", icon: "tailwind" },
];

export const METHODOLOGIES = [
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
];

export const PRACTICES = [
  "SOLID", "REST APIs", "ActiveRecord", "RSpec", "TDD", "Clean Code", "CI/CD", "Sidekiq Jobs",
];

export const EDUCATION = [
  {
    course: "CST em Análise e Desenvolvimento de Sistemas",
    school: "Centro Universitário Jorge Amado — UNIJORGE (Bahia)",
    period: "Concluído · 2022",
  },
  {
    course: "Técnico em Administração",
    school: "CEEP Newton SULTIPNE",
    period: "Concluído",
  },
];

export const COURSES = [
  "Ruby on Rails Enterprise: REST APIs, Active Record, Sidekiq, Docker · Udemy",
  "RSpec & TDD com Ruby on Rails na Prática · Udemy",
  "Next.js 14: App Router · RSC · Server Actions · tRPC · Udemy",
  "React 18 + TypeScript + Tailwind CSS · Udemy",
  "Docker & Docker Compose: Conteinerização do zero à produção · Udemy",
];

export const LANGUAGES = [
  { name: "Português", level: "Fluente", percent: 100, tone: "tech-rails" },
  { name: "Inglês", level: "Intermediário", percent: 62, tone: "tech-ruby" },
  { name: "Espanhol", level: "Básico", percent: 35, tone: "tech-ts" },
];

export const EXPERIENCES: ResumeExperience[] = [
  {
    company: "PRODEB — Companhia de Processamento de Dados da Bahia",
    role: "Analista de Sistemas e Desenvolvedor · Consultor IV",
    period: "mar/2024 – set/2024",
    location: "Salvador / BA",
    description:
      "Desenvolvimento e manutenção de soluções web e APIs RESTful enterprise em Ruby on Rails e integração de sistemas para o Governo do Estado da Bahia. Arquitetura em camadas, suporte e evolução de ecossistema de dados, transações ACID em PostgreSQL e dashboards reativos em Vue.js / React.",
    tags: [
      { name: "Ruby on Rails", icon: "rails", tone: "tech-rails" },
      { name: "Ruby 3", icon: "ruby", tone: "tech-ruby" },
      { name: "RSpec", icon: "ruby", tone: "tech-ruby" },
      { name: "PostgreSQL", icon: "postgres", tone: "tech-postgres" },
      { name: "Vue.js", icon: "vue", tone: "tech-vue" },
      { name: "Git Flow", icon: "git", tone: "tech-git" },
    ],
  },
  {
    company: "LAMPP IT Solutions",
    role: "Analista de Sistemas e Desenvolvedor de Software",
    period: "mar/2022 – mai/2022",
    location: "Salvador / BA",
    description:
      "Atuação em sistemas críticos da Secretaria de Segurança Pública da Bahia (SSP-BA) e Polícia Militar (PMBA). Reescrita e otimização do módulo de controle de acesso e auditoria interna em Ruby on Rails + Devise + JWT (RBAC). Interfaces interativas em React.js e Angular.",
    tags: [
      { name: "Ruby on Rails", icon: "rails", tone: "tech-rails" },
      { name: "Ruby", icon: "ruby", tone: "tech-ruby" },
      { name: "Devise", icon: "rails", tone: "tech-rails" },
      { name: "React.js", icon: "react", tone: "tech-react" },
      { name: "PostgreSQL", icon: "postgres", tone: "tech-postgres" },
      { name: "Linux Ubuntu", icon: "linux", tone: "tech-linux" },
    ],
  },
  {
    company: "EDZA Planejamento Consultoria e Informática LTDA",
    role: "Analista de Sistemas e Desenvolvedor de Software",
    period: "nov/2019 – mar/2022",
    location: "Salvador / BA",
    description:
      "Desenvolvimento e evolução de ERP Municipal em Ruby on Rails cobrindo diversas prefeituras. Módulos da gestão pública: Tributário / Gestão Fiscal, Secretaria da Fazenda Municipal, RH e Folha de Pagamento, Finanças, Saúde e NF-e. Criação de APIs com Docker, dashboards Angular / Vue.js e scripts Bash.",
    tags: [
      { name: "Ruby on Rails", icon: "rails", tone: "tech-rails" },
      { name: "Ruby", icon: "ruby", tone: "tech-ruby" },
      { name: "ERP Municipal", icon: "openapi", tone: "tech-api" },
      { name: "PostgreSQL / MySQL", icon: "postgres", tone: "tech-postgres" },
      { name: "Angular", icon: "angular", tone: "tech-angular" },
      { name: "Linux / Bash", icon: "bash", tone: "tech-bash" },
    ],
  },
];

const GITHUB = "https://github.com/reinaldobarreto31";

export const PERSONAL_PROJECTS: ResumeProject[] = [
  {
    title: "RailsHub — Microsserviços e Gestão Rails 7 API",
    subtitle: "Ruby 3 · Sidekiq · PostgreSQL · Redis · RSpec",
    badge: "DESTAQUE",
    stack: "Ruby on Rails 7 · Ruby 3 · Sidekiq · Redis · RSpec · PostgreSQL · Docker Compose",
    description:
      "Plataforma completa em Ruby on Rails 7 e Ruby 3 com arquitetura limpa, Sidekiq para jobs assíncronos, Redis, RSpec para suíte de testes de integração e banco PostgreSQL com Docker Compose.",
    tags: ["Ruby on Rails", "Ruby 3", "PostgreSQL", "RSpec", "Sidekiq", "Redis", "Docker"],
    github: `${GITHUB}/railshub`,
    tone: "tech-rails",
    icon: "rails",
  },
  {
    title: "Rails Swagger CRUD API",
    subtitle: "Ruby on Rails 7 · rswag · Devise JWT · OpenAPI 3",
    badge: "DESTAQUE",
    stack: "Ruby on Rails 7 · Ruby 3 · Swagger UI (rswag) · Devise · JWT · RSpec · PostgreSQL",
    description:
      "API RESTful robusta desenvolvida em Ruby on Rails 7 com rswag para geração automática de documentação Swagger UI interativa, autenticação JWT via Devise e testes de integração com RSpec e FactoryBot.",
    tags: ["Ruby on Rails", "Swagger UI", "Devise", "JWT", "RSpec", "PostgreSQL"],
    github: `${GITHUB}/rails-swagger-crud`,
    tone: "tech-rails",
    icon: "rails",
  },
  {
    title: "StockWise (Controle de Estoque)",
    subtitle: "Ruby on Rails API · React 18 · PostgreSQL · Tailwind",
    badge: "DESTAQUE",
    stack: "Ruby on Rails · React 18 · TypeScript · PostgreSQL · Docker · Tailwind CSS",
    description:
      "Plataforma avançada de controle e gestão de estoque corporativo de alto desempenho. Backend API em Rails e painel administrativo reativo com React e Tailwind CSS.",
    tags: ["Ruby on Rails", "React 18", "PostgreSQL", "Docker", "Tailwind CSS"],
    github: `${GITHUB}/stockwise`,
    tone: "tech-rails",
    icon: "rails",
  },
  {
    title: "PDF Compressor (Compressor de PDF)",
    subtitle: "Script Python & Ghostscript · Ferramenta Web Client-Side",
    badge: "FULL-STACK",
    stack: "Python · Ghostscript · React 18 · TypeScript · pdf-lib",
    description:
      "Projeto de redução e otimização de arquivos PDF hospedado no GitHub (reinaldobarreto31/PDF-Compressor). Apresenta script em Python com automação via Ghostscript para otimização em lote no servidor, além de ferramenta web interativa.",
    tags: ["Python", "Ghostscript", "React 18", "TypeScript", "pdf-lib"],
    github: `${GITHUB}/PDF-Compressor`,
    tone: "tech-pdf",
    icon: "pdf",
  },
];

export const STACK_SHOWCASE = [
  { name: "Ruby on Rails", icon: "rails" as ResumeIcon, tone: "tech-rails" },
  { name: "Ruby 3", icon: "ruby" as ResumeIcon, tone: "tech-ruby" },
  { name: "RSpec", icon: "ruby" as ResumeIcon, tone: "tech-ruby" },
  { name: "Sidekiq", icon: "redis" as ResumeIcon, tone: "tech-redis" },
  { name: "PostgreSQL", icon: "postgres" as ResumeIcon, tone: "tech-postgres" },
  { name: "Docker", icon: "docker" as ResumeIcon, tone: "tech-docker" },
  { name: "React", icon: "react" as ResumeIcon, tone: "tech-react" },
  { name: "Next.js", icon: "next" as ResumeIcon, tone: "tech-next" },
  { name: "TypeScript", icon: "ts" as ResumeIcon, tone: "tech-ts" },
  { name: "JavaScript", icon: "js" as ResumeIcon, tone: "tech-js" },
  { name: "Node.js", icon: "node" as ResumeIcon, tone: "tech-node" },
  { name: "Tailwind CSS", icon: "tailwind" as ResumeIcon, tone: "tech-tailwind" },
  { name: "Redis", icon: "redis" as ResumeIcon, tone: "tech-redis" },
  { name: "GitHub Actions", icon: "actions" as ResumeIcon, tone: "tech-actions" },
];

export const COMPLEMENTARY_TECHS = [
  { name: "Ruby on Rails", icon: "rails" as ResumeIcon, tone: "tech-rails" },
  { name: "Ruby", icon: "ruby" as ResumeIcon, tone: "tech-ruby" },
  { name: "PostgreSQL", icon: "postgres" as ResumeIcon, tone: "tech-postgres" },
  { name: "Redis", icon: "redis" as ResumeIcon, tone: "tech-redis" },
  { name: "Docker", icon: "docker" as ResumeIcon, tone: "tech-docker" },
  { name: "React", icon: "react" as ResumeIcon, tone: "tech-react" },
  { name: "Next.js", icon: "next" as ResumeIcon, tone: "tech-next" },
  { name: "TypeScript", icon: "ts" as ResumeIcon, tone: "tech-ts" },
  { name: "JavaScript", icon: "js" as ResumeIcon, tone: "tech-js" },
  { name: "GitHub Actions", icon: "actions" as ResumeIcon, tone: "tech-actions" },
];
