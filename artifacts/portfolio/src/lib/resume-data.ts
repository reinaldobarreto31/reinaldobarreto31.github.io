export type ResumeIcon =
  | "ruby" | "rails" | "react" | "ts" | "postgres" | "docker" | "actions"
  | "redis" | "java" | "spring" | "vue" | "angular" | "git" | "mysql"
  | "linux" | "bash" | "jwt" | "openapi" | "swagger" | "pdf" | "golang"
  | "package";

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
  "Engenheiro de Software com trajetória sólida em Ruby on Rails e background enterprise em Java / Spring Boot. Especialista em APIs RESTful para o setor público (estadual, municipal) e segurança pública. Domínio de TDD com RSpec, documentação automática via Rswag / OpenAPI 3 e entrega com CI/CD (GitHub Actions). Convention over Configuration como filosofia de trabalho.",
];

export const PROFESSIONAL_OBJECTIVE =
  "Atuar como Engenheiro de Software Ruby on Rails em produto de alto impacto — contribuindo com arquitetura de APIs RESTful, TDD rigoroso, documentação OpenAPI 3 e entrega contínua em produção.";

export const CONTACT = {
  name: "Reinaldo Barreto da Silva",
  phone: "55 47 98830 2308",
  email: "reinaldobarretosilva@gmail.com",
  location: "Navegantes / SC, Brasil",
  linkedin: "linkedin.com/in/reinaldo-barreto-2a4ba2116",
  github: "github.com/reinaldobarreto31",
  headline: "APIs RESTful · TDD · OpenAPI 3 · PostgreSQL · Docker",
};

export const HARD_SKILLS: ResumeSkill[] = [
  { name: "Ruby on Rails", level: 95, color: "#cc0000", icon: "rails" },
  { name: "RSpec · TDD", level: 98, color: "#cc0000", icon: "rails" },
  { name: "APIs RESTful · OpenAPI 3", level: 92, color: "#cc0000", icon: "openapi" },
  { name: "PostgreSQL", level: 85, color: "#cc0000", icon: "postgres" },
  { name: "React · TypeScript", level: 88, color: "#bd93f9", icon: "react" },
  { name: "Docker · CI/CD", level: 78, color: "#bd93f9", icon: "docker" },
  { name: "Java · Spring Boot", level: 75, color: "#f1fa8c", icon: "spring" },
  { name: "Vue.js · Angular", level: 78, color: "#f1fa8c", icon: "vue" },
];

export const METHODOLOGIES = [
  "Convention over Config",
  "TDD / RSpec",
  "Service Objects",
  "Clean Code",
  "Scrum · Kanban",
  "CI/CD",
  "OpenAPI / Swagger",
  "FactoryBot",
  "Clean Architecture",
];

export const PRACTICES = [
  "MVC", "REST APIs", "Active Record", "RSpec", "TDD", "SOLID", "Clean Code", "CI/CD",
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
  "Ruby on Rails — API Mode completo · Udemy",
  "Docker e Kubernetes na prática · Udemy",
  "Go (Golang) — APIs e Microsserviços · Udemy",
  "APIs RESTful com Spring Boot e Java · Udemy · 2022",
  "Full Stack com Node.js e Vue.js · Udemy · 2023",
  "React.js Completo · Udemy · 2023",
];

export const LANGUAGES = [
  { name: "Português", level: "Fluente", percent: 100, tone: "tech-rails" },
  { name: "Inglês", level: "Intermediário", percent: 55, tone: "tech-docker" },
  { name: "Espanhol", level: "Básico", percent: 30, tone: "tech-api" },
];

export const EXPERIENCES: ResumeExperience[] = [
  {
    company: "PRODEB — Companhia de Processamento de Dados da Bahia",
    role: "Analista de Sistemas e Desenvolvedor · Consultor IV",
    period: "mar/2024 – set/2024",
    location: "Salvador / BA",
    description:
      "Desenvolvimento e manutenção de APIs REST e soluções web para órgãos públicos do Governo da Bahia. Arquitetura RESTful escalável com separação de camadas (controller / service / repository) — padrões diretamente alinhados ao desenvolvimento em Ruby on Rails. Frontend em Vue.js. Entregas em Scrum.",
    tags: [
      { name: "Java", icon: "java", tone: "tech-java" },
      { name: "APIs REST", icon: "openapi", tone: "tech-api" },
      { name: "Vue.js", icon: "vue", tone: "tech-vue" },
      { name: "PostgreSQL", icon: "postgres", tone: "tech-postgres" },
      { name: "Git", icon: "git", tone: "tech-git" },
      { name: "Scrum", icon: "rails", tone: "tech-rails" },
    ],
  },
  {
    company: "LAMPP IT Solutions",
    role: "Analista de Sistemas e Desenvolvedor de Software",
    period: "mar/2022 – mai/2022",
    location: "Salvador / BA",
    description:
      "APIs REST seguras para sistemas críticos da SSP BA e PM BA. Módulo de controle de acesso do Sistema de Auditoria Interna prototipado em Ruby on Rails, demonstrando viabilidade da stack para sistemas de alta criticidade. Autenticação OAuth2. Frontend em Angular e React.js.",
    tags: [
      { name: "Ruby", icon: "ruby", tone: "tech-ruby" },
      { name: "Rails", icon: "rails", tone: "tech-rails" },
      { name: "OAuth2", icon: "jwt", tone: "tech-jwt" },
      { name: "Angular", icon: "angular", tone: "tech-angular" },
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
      "ERP Municipal (Tributário, Saúde, RH e NF-e) para prefeituras de Ilhéus, Juazeiro, Candeias, Porto Seguro e Lauro de Freitas. Modernização de módulo NF-e explorado em Ruby on Rails como proposta de refatoração da camada de APIs REST. Administração de servidores Linux Ubuntu 24/7.",
    tags: [
      { name: "Ruby", icon: "ruby", tone: "tech-ruby" },
      { name: "Rails", icon: "rails", tone: "tech-rails" },
      { name: "Angular", icon: "angular", tone: "tech-angular" },
      { name: "Vue.js", icon: "vue", tone: "tech-vue" },
      { name: "Java EE", icon: "java", tone: "tech-java" },
      { name: "MySQL", icon: "mysql", tone: "tech-mysql" },
      { name: "Linux Ubuntu", icon: "linux", tone: "tech-linux" },
      { name: "Bash Script", icon: "bash", tone: "tech-bash" },
    ],
  },
];

const GITHUB = "https://github.com/reinaldobarreto31";
const PAGES = "https://reinaldobarreto31.github.io";

export const PERSONAL_PROJECTS: ResumeProject[] = [
  {
    title: "Compressor de PDF · Padrões Brasileiros",
    subtitle: "100% navegador · Múltiplos arquivos",
    badge: "LIVE",
    stack: "React 18 · TypeScript · pdf-lib · pdf.js · GitHub Pages",
    description:
      "Compressor de PDFs 100% no navegador com presets brasileiros: Governo BR (≤2MB), Empresa (≤5MB), E-mail e Qualidade. Múltiplos arquivos em lote, progresso individual e renomear antes de baixar. UI em tema Dracula + vermelho Rails.",
    tags: ["React", "TypeScript", "pdf-lib", "Tailwind"],
    github: `${GITHUB}/pdf-compressor`,
    live: `${PAGES}/pdf-compressor/`,
    tone: "tech-pdf",
    icon: "pdf",
  },
  {
    title: "rails-swagger-crud — API REST + OpenAPI 3",
    subtitle: "TDD completo · Documentação automática",
    badge: "DESTAQUE",
    stack: "Ruby on Rails · Rswag · RSpec · FactoryBot · Devise/JWT · PostgreSQL · Docker",
    description:
      "RESTful CRUD API em Rails API mode com documentação OpenAPI 3 (Swagger UI em /api-docs) gerada automaticamente pelos testes RSpec via Rswag. TDD first — FactoryBot + Shoulda Matchers. Autenticação Devise/JWT, PostgreSQL estruturado e Docker Compose para dev local com um comando.",
    tags: ["Ruby", "Rails", "Rswag", "RSpec", "OpenAPI 3", "Docker", "PostgreSQL"],
    github: `${GITHUB}/rails-swagger-crud`,
    tone: "tech-openapi",
    icon: "swagger",
  },
  {
    title: "RailsHub — API Rails + Frontend React",
    subtitle: "Full-stack em construção",
    badge: "EM CONSTRUÇÃO",
    stack: "Ruby on Rails · React 18 · Rswag · JWT · PostgreSQL · Docker · RSpec · GitHub Actions",
    description:
      "Hub full-stack: API REST em Rails com autenticação Devise/JWT, documentação OpenAPI 3 automática via Rswag e TDD com RSpec + FactoryBot. Frontend React 18 + Tailwind com dashboard paginado, filtros e CRUD visual. Docker Compose + pipeline CI/CD em GitHub Actions para deploy automatizado.",
    tags: ["Ruby", "Rails", "React 18", "Docker", "RSpec"],
    github: `${GITHUB}/railshub`,
    tone: "tech-jwt",
    icon: "rails",
  },
  {
    title: "StockWise — Controle de Estoque",
    subtitle: "Go (Golang) + React.js",
    badge: "FULL-STACK",
    stack: "Go (Golang) · React.js · PostgreSQL · JWT · REST API",
    description:
      "Backend em Go com API RESTful, autenticação JWT, CRUD de produtos e controle de movimentações de estoque. Frontend React.js com dashboard, listagens paginadas e formulários tipados. GitHub: github.com/reinaldobarreto31/stockwise-go",
    tags: ["Go", "React.js", "PostgreSQL", "JWT", "REST"],
    github: `${GITHUB}/stockwise-go`,
    tone: "tech-golang",
    icon: "golang",
  },
];

export const STACK_SHOWCASE = [
  { name: "Ruby", icon: "ruby" as ResumeIcon, tone: "tech-ruby" },
  { name: "Rails", icon: "rails" as ResumeIcon, tone: "tech-rails" },
  { name: "PostgreSQL", icon: "postgres" as ResumeIcon, tone: "tech-postgres" },
  { name: "Redis", icon: "redis" as ResumeIcon, tone: "tech-redis" },
  { name: "Docker", icon: "docker" as ResumeIcon, tone: "tech-docker" },
  { name: "GitHub Actions", icon: "actions" as ResumeIcon, tone: "tech-actions" },
];

export const COMPLEMENTARY_TECHS = [
  { name: "React", icon: "react" as ResumeIcon, tone: "tech-react" },
  { name: "TypeScript", icon: "ts" as ResumeIcon, tone: "tech-ts" },
  { name: "Java", icon: "java" as ResumeIcon, tone: "tech-java" },
  { name: "Spring", icon: "spring" as ResumeIcon, tone: "tech-java" },
  { name: "Vue.js", icon: "vue" as ResumeIcon, tone: "tech-vue" },
  { name: "Angular", icon: "angular" as ResumeIcon, tone: "tech-angular" },
  { name: "Docker", icon: "docker" as ResumeIcon, tone: "tech-docker" },
  { name: "Actions", icon: "actions" as ResumeIcon, tone: "tech-actions" },
];
