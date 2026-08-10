export type ProjectBadge = "DESTAQUE" | "EM CONSTRUÇÃO" | "LIVE" | "API" | "FULL-STACK";
export type ProjectTone =
  | "tech-ruby"
  | "tech-rails"
  | "tech-postgres"
  | "tech-docker"
  | "tech-actions"
  | "tech-react"
  | "tech-ts"
  | "tech-jwt"
  | "tech-openapi"
  | "tech-pdf"
  | "tech-golang"
  | "tech-java"
  | "tech-api"
  | "tech-vue"
  | "tech-git"
  | "tech-angular"
  | "tech-linux"
  | "tech-mysql"
  | "tech-bash";

export type AdminProject = {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  tech: string[];
  icon: string; // key of ICONS_MAP
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
  skills: AdminSkill[];
  methodologies: string[];
  practices: string[];
};

export type AdminStackItem = {
  id: string;
  name: string;
  icon: string;
  tone: ProjectTone;
  level: number; // 0-100
};

const GITHUB = "https://github.com/reinaldobarreto31";
const PAGES = "https://reinaldobarreto31.github.io";

export const DEFAULTS: {
  projects: AdminProject[];
  experiences: AdminExperience[];
  about: AdminAbout;
  stack: AdminStackItem[];
} = {
  projects: [
    {
      id: "proj-pdf",
      title: "Compressor de PDF",
      subtitle: "Padrões Brasileiros · 100% navegador",
      description:
        "Compressor de PDFs 100% no navegador com presets brasileiros: Governo BR (até 2 MB), Empresa (até 5 MB), E-mail e Qualidade. Múltiplos arquivos em lote, progresso individual e renomear antes de baixar. Interface em tema Dracula + vermelho Ruby on Rails.",
      tech: ["React", "TypeScript", "pdf-lib", "Tailwind"],
      icon: "sparkles",
      tone: "tech-pdf",
      github: `${GITHUB}/pdf-compressor`,
      live: `${PAGES}/pdf-compressor/`,
      badge: "LIVE",
      featured: true,
    },
    {
      id: "proj-swagger",
      title: "rails-swagger-crud",
      subtitle: "API REST + OpenAPI 3 + TDD",
      description:
        "RESTful CRUD API em Rails API mode com documentação OpenAPI 3 (Swagger UI em /api-docs) gerada automaticamente pelos testes RSpec via Rswag. TDD first — FactoryBot + Shoulda Matchers. Autenticação Devise/JWT, PostgreSQL estruturado e Docker Compose para dev local com um comando.",
      tech: ["Ruby", "Rails", "Rswag", "RSpec", "OpenAPI 3", "Docker", "PostgreSQL"],
      icon: "swagger",
      tone: "tech-openapi",
      github: `${GITHUB}/rails-swagger-crud`,
      live: `${PAGES}/rails-swagger-crud/`,
      badge: "DESTAQUE",
      featured: true,
    },
    {
      id: "proj-railshub",
      title: "RailsHub",
      subtitle: "Full-stack · API Rails + React 18",
      description:
        "Hub full-stack: API REST em Rails com autenticação Devise/JWT, documentação OpenAPI 3 automática via Rswag e TDD com RSpec + FactoryBot. Frontend React 18 + Tailwind com dashboard paginado, filtros e CRUD visual. Docker Compose + pipeline CI/CD em GitHub Actions para deploy automatizado.",
      tech: ["Ruby", "Rails", "React 18", "Docker", "RSpec"],
      icon: "rails",
      tone: "tech-rails",
      github: `${GITHUB}/railshub`,
      live: `${PAGES}/railshub/`,
      badge: "EM CONSTRUÇÃO",
      featured: true,
    },
    {
      id: "proj-stockwise",
      title: "StockWise",
      subtitle: "Controle de Estoque · Go + React.js",
      description:
        "Backend em Go com API RESTful, autenticação JWT, CRUD de produtos e controle de movimentações de estoque. Frontend React.js com dashboard, listagens paginadas e formulários tipados. GitHub: github.com/reinaldobarreto31/stockwise-go",
      tech: ["Go", "React.js", "PostgreSQL", "JWT", "REST"],
      icon: "package",
      tone: "tech-golang",
      github: `${GITHUB}/stockwise-go`,
      live: `${PAGES}/stockwise/`,
      badge: "FULL-STACK",
    },
    {
      id: "proj-short",
      title: "Rails Link Shortener",
      subtitle: "Encurtador de URLs",
      description:
        "Aplicação Ruby on Rails para criar, organizar e redirecionar links curtos com contagem de acessos. Projeto enxuto que demonstra modelagem limpa, rotas RESTful e o ciclo completo de uma aplicação Rails MVC.",
      tech: ["Ruby", "Rails", "PostgreSQL", "MVC"],
      icon: "rails",
      tone: "tech-rails",
      github: `${GITHUB}/rails-link-shortener`,
      badge: "API",
    },
    {
      id: "proj-tasks",
      title: "Rails Tasks API",
      subtitle: "API de tarefas",
      description:
        "API REST para gestão de tarefas (todo list) estruturada com convenções Rails, endpoints claros, paginação e persistência em banco de dados relacional.",
      tech: ["Ruby", "Rails API", "PostgreSQL", "REST"],
      icon: "terminal",
      tone: "tech-ruby",
      github: `${GITHUB}/rails-tasks-api`,
      badge: "API",
    },
    {
      id: "proj-expense",
      title: "Ruby Expense Tracker",
      subtitle: "Controle financeiro",
      description:
        "Projeto em Ruby puro voltado ao controle de despesas e exploração da lógica de negócio — com classes de domínio limpas e legíveis, prontas para evoluir em uma aplicação Rails completa.",
      tech: ["Ruby", "Domínio", "CLI", "Testes"],
      icon: "postgres",
      tone: "tech-postgres",
      github: `${GITHUB}/ruby-expense-tracker`,
      badge: "API",
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
        "Desenvolvimento e manutenção de APIs REST e soluções web para órgãos públicos do Governo da Bahia. Arquitetura RESTful escalável com separação de camadas (controller / service / repository) — padrões diretamente alinhados ao desenvolvimento em Ruby on Rails. Frontend em Vue.js. Entregas em Scrum.",
      tags: [
        { name: "Java", tone: "tech-java" },
        { name: "APIs REST", tone: "tech-api" },
        { name: "Vue.js", tone: "tech-vue" },
        { name: "PostgreSQL", tone: "tech-postgres" },
        { name: "Git", tone: "tech-git" },
        { name: "Scrum", tone: "tech-rails" },
      ],
    },
    {
      id: "exp-lampp",
      company: "LAMPP IT Solutions",
      role: "Analista de Sistemas e Desenvolvedor de Software",
      period: "mar/2022 – mai/2022",
      location: "Salvador / BA",
      description:
        "Implementação de APIs REST em Ruby on Rails, integração de sistemas via OAuth2 com provedores externos e frontends interativos em Angular e React.js. Configuração de ambientes Linux Ubuntu e bancos PostgreSQL performáticos.",
      tags: [
        { name: "Ruby", tone: "tech-ruby" },
        { name: "Rails", tone: "tech-rails" },
        { name: "OAuth2", tone: "tech-api" },
        { name: "Angular", tone: "tech-angular" },
        { name: "React.js", tone: "tech-react" },
        { name: "PostgreSQL", tone: "tech-postgres" },
        { name: "Linux Ubuntu", tone: "tech-linux" },
      ],
    },
    {
      id: "exp-edza",
      company: "EDZA Planejamento",
      role: "Analista de Sistemas e Desenvolvedor de Software",
      period: "nov/2019 – mar/2022",
      location: "Salvador / BA",
      description:
        "Desenvolvimento full stack em Ruby on Rails e Java EE para plataforma de planejamento empresarial. Dashboards em Angular e Vue.js, automações com Bash Script e administração de servidores Linux e bancos MySQL.",
      tags: [
        { name: "Ruby", tone: "tech-ruby" },
        { name: "Rails", tone: "tech-rails" },
        { name: "Angular", tone: "tech-angular" },
        { name: "Vue.js", tone: "tech-vue" },
        { name: "Java EE", tone: "tech-java" },
        { name: "MySQL", tone: "tech-mysql" },
        { name: "Linux Ubuntu", tone: "tech-linux" },
        { name: "Bash Script", tone: "tech-bash" },
      ],
    },
  ],

  about: {
    summary:
      "Engenheiro de Software com trajetória sólida em Ruby on Rails e background enterprise em Java / Spring Boot. Especialista em APIs RESTful para o setor público (estadual, municipal) e segurança pública. Domínio de TDD com RSpec, documentação automática via Rswag / OpenAPI 3 e entrega com CI/CD (GitHub Actions). Convention over Configuration como filosofia de trabalho.",
    objective:
      "Atuar como Engenheiro de Software Ruby on Rails em produto de alto impacto — contribuindo com arquitetura de APIs RESTful, TDD rigoroso, documentação OpenAPI 3 e entrega contínua em produção.",
    skills: [
      { name: "Ruby on Rails", level: 95, color: "#cc0000", icon: "rails" },
      { name: "RSpec · TDD", level: 98, color: "#cc0000", icon: "rails" },
      { name: "APIs RESTful · OpenAPI 3", level: 92, color: "#cc0000", icon: "swagger" },
      { name: "PostgreSQL", level: 85, color: "#cc0000", icon: "postgres" },
      { name: "React · TypeScript", level: 88, color: "#bd93f9", icon: "react" },
      { name: "Docker · CI/CD", level: 78, color: "#bd93f9", icon: "docker" },
      { name: "Java · Spring Boot", level: 75, color: "#f1fa8c", icon: "java" },
      { name: "Vue.js · Angular", level: 78, color: "#f1fa8c", icon: "vue" },
    ],
    methodologies: [
      "Convention over Config",
      "TDD / RSpec",
      "Service Objects",
      "Clean Code",
      "Scrum · Kanban",
      "CI/CD",
      "OpenAPI / Swagger",
      "FactoryBot",
      "Clean Architecture",
    ],
    practices: ["MVC", "REST APIs", "Active Record", "RSpec", "TDD", "SOLID", "Clean Code", "CI/CD"],
  },

  stack: [
    { id: "s-ruby", name: "Ruby", icon: "ruby", tone: "tech-ruby", level: 95 },
    { id: "s-rails", name: "Rails", icon: "rails", tone: "tech-rails", level: 95 },
    { id: "s-postgres", name: "PostgreSQL", icon: "postgres", tone: "tech-postgres", level: 85 },
    { id: "s-redis", name: "Redis", icon: "redis", tone: "tech-ruby", level: 70 },
    { id: "s-docker", name: "Docker", icon: "docker", tone: "tech-docker", level: 78 },
    { id: "s-actions", name: "GitHub Actions", icon: "actions", tone: "tech-actions", level: 80 },
  ],
};
