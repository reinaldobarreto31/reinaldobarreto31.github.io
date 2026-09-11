export type ProjectBadge = "DESTAQUE" | "EM CONSTRUÇÃO" | "LIVE" | "API" | "FULL-STACK" | "DESKTOP" | "MOBILE";
export type ProjectTone =
  | "tech-dotnet"
  | "tech-csharp"
  | "tech-aspnet"
  | "tech-vb"
  | "tech-vba"
  | "tech-sqlserver"
  | "tech-azure"
  | "tech-windows"
  | "tech-maui"
  | "tech-postgres"
  | "tech-redis"
  | "tech-docker"
  | "tech-actions"
  | "tech-react"
  | "tech-ts"
  | "tech-jwt"
  | "tech-openapi"
  | "tech-pdf"
  | "tech-java"
  | "tech-spring"
  | "tech-kotlin"
  | "tech-git"
  | "tech-linux";

export type AdminProject = {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  tech: string[];
  icon: string;
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
  level: number;
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
      id: "proj-desktop-csharp-wpf",
      title: "Sistema ERP & Automação Desktop (C# .NET / WPF)",
      subtitle: "Desktop · WPF · WinForms · EF Core · SQL Server",
      description:
        "Sistema corporativo Desktop de alta performance em C# e .NET 8 com interface moderna Windows 11 Fluent UI, arquitetura MVVM, WPF e Windows Forms. Integração completa com banco Microsoft SQL Server via Entity Framework Core e Dapper, autenticação com controle de acesso baseado em papéis (RBAC), relatórios automatizados, exportação contábil/fiscal em lote e rotinas multithread com Task Parallel Library (TPL).",
      tech: ["C#", ".NET 8", "WPF", "WinForms", "SQL Server", "EF Core", "LINQ", "Windows 11"],
      icon: "csharp",
      tone: "tech-csharp",
      github: `${GITHUB}/dotnet-desktop-erp`,
      badge: "DESTAQUE",
      featured: true,
    },
    {
      id: "proj-aspnet-api",
      title: "ASP.NET Core Enterprise Web API",
      subtitle: "APIs RESTful · JWT · EF Core · Swagger · Azure",
      description:
        "API corporativa robusta e escalável desenvolvida em C# com ASP.NET Core (.NET 8), estruturada sob Clean Architecture e DDD. Implementa autenticação e autorização stateless via JWT, injeção de dependência nativa, validações com FluentValidation, documentação interativa Swagger/OpenAPI, resiliência com Polly e persistência em Microsoft SQL Server. Preparada para publicação na nuvem Azure com contêineres Docker e CI/CD.",
      tech: ["C#", ".NET 8", "ASP.NET Core", "SQL Server", "JWT", "Swagger / OpenAPI", "Azure", "Docker"],
      icon: "dotnet",
      tone: "tech-aspnet",
      github: `${GITHUB}/aspnetcore-api-server`,
      badge: "DESTAQUE",
      featured: true,
    },
    {
      id: "proj-vb-migration",
      title: "Migração & Modernização de ERP Legado (VB6 & VB.NET)",
      subtitle: "Desktop · Visual Basic 6 · VB.NET · Refatoração C# .NET",
      description:
        "Sustentação, diagnóstico e modernização contínua de rotinas críticas em sistemas corporativos legados desenvolvidos em Visual Basic 6 (VB6) e Visual Basic .NET (VB.NET). Refatoração de módulos fiscais, contábeis e de folha de pagamento, com migração gradual para C# .NET moderno e APIs REST, garantindo integridade transacional de bancos relacionais e zero tempo de inatividade.",
      tech: ["Visual Basic 6", "VB.NET", "C#", ".NET 8", "SQL Server", "Crystal Reports", "Windows Server"],
      icon: "windows",
      tone: "tech-vb",
      github: `${GITHUB}/vb-legacy-migration`,
      badge: "DESTAQUE",
      featured: true,
    },
    {
      id: "proj-mobile-maui-pwa",
      title: ".NET MAUI & Blazor Hybrid Mobile PWA",
      subtitle: "Mobile & Web · PWA · .NET MAUI · Blazor · Offline-first",
      description:
        "Aplicação corporativa multiplataforma desenvolvida com C# e .NET MAUI integrada com Blazor Hybrid e Progressive Web App (PWA). Desenvolvida para equipes de campo e operações externas, com sincronização em tempo real via SignalR / WebSockets, persistência local offline com SQLite, interface responsiva adaptada a dispositivos Windows, Android e Web, e autenticação biométrica/PIN.",
      tech: ["C#", ".NET MAUI", "Blazor", "PWA", "SignalR", "SQLite", "REST APIs"],
      icon: "maui",
      tone: "tech-maui",
      github: `${GITHUB}/maui-blazor-pwa`,
      badge: "FULL-STACK",
      featured: true,
    },
    {
      id: "proj-admin-vba-access",
      title: "Automação Administrativa & Fiscal (C# + Excel VBA + Access)",
      subtitle: "Automação · VBA · Microsoft Excel · Access · C# .NET",
      description:
        "Solução corporativa de automação para departamentos administrativos, financeiros e fiscais, integrando rotinas em C# .NET com macros avançadas em VBA, planilhas inteligentes no Microsoft Excel e bases de dados relacionais em Microsoft Access. Eliminação de processos manuais, cruzamento de dados fiscais em lote e emissão automatizada de relatórios gerenciais.",
      tech: ["C#", ".NET", "Excel VBA", "Microsoft Access", "SQL", "Office Interop", "Windows"],
      icon: "vba",
      tone: "tech-vba",
      github: `${GITHUB}/vba-office-automation`,
      badge: "FULL-STACK",
    },
    {
      id: "proj-pdf",
      title: "Compressor de PDF (Padrões Brasileiros)",
      subtitle: "Padrões Oficiais BR · 100% no navegador",
      description:
        "Compressor de documentos PDF executado 100% no navegador com presets adaptados aos órgãos brasileiros: Governo Federal (até 2 MB), Empresa (até 5 MB), E-mail e Alta Resolução. Processamento em lote, visualização de compressão e download seguro.",
      tech: ["React", "TypeScript", "pdf-lib", "Tailwind CSS", "GitHub Pages"],
      icon: "pdf",
      tone: "tech-pdf",
      github: `${GITHUB}/pdf-compressor`,
      live: `${PAGES}/pdf-compressor/`,
      badge: "LIVE",
    },
    {
      id: "proj-kotlin-tasks",
      title: "Aplicativo Android em Kotlin (Projeto Anterior)",
      subtitle: "Mobile · Android Nativo · Jetpack Compose · Room",
      description:
        "Aplicativo móvel Android nativo em Kotlin para gestão de tarefas com sincronização em tempo real, persistência local com Room Database, arquitetura MVVM e interface declarativa em Jetpack Compose.",
      tech: ["Kotlin", "Jetpack Compose", "MVVM", "Room", "Retrofit", "Coroutines"],
      icon: "kotlin",
      tone: "tech-kotlin",
      github: `${GITHUB}/kotlin-android-app`,
      badge: "MOBILE",
    },
  ],

  experiences: [
    {
      id: "exp-prodeb",
      company: "PRODEB — Companhia de Processamento de Dados do Estado da Bahia",
      role: "Analista de Sistemas e Desenvolvedor · Consultor IV",
      period: "mar/2024 – set/2024",
      location: "Salvador / BA",
      description:
        "Desenvolvimento e manutenção de soluções web e backend para órgãos públicos estaduais do Governo da Bahia. Atuação na construção e otimização de sistemas corporativos, arquitetura e implementação de funcionalidades complexas em camadas, APIs RESTful escaláveis e fluxos de automação para modernização de sistemas públicos.",
      tags: [
        { name: "C#", tone: "tech-csharp" },
        { name: ".NET", tone: "tech-dotnet" },
        { name: "Java", tone: "tech-java" },
        { name: "Spring Boot", tone: "tech-spring" },
        { name: "APIs REST", tone: "tech-aspnet" },
        { name: "PostgreSQL", tone: "tech-postgres" },
        { name: "Git", tone: "tech-git" },
        { name: "Scrum", tone: "tech-windows" },
      ],
    },
    {
      id: "exp-lampp",
      company: "LAMPP IT Solutions",
      role: "Analista de Sistemas e Desenvolvedor de Software",
      period: "mar/2022 – mai/2022",
      location: "Salvador / BA",
      description:
        "Construção de APIs REST, integração de sistemas e autenticação corporativa OAuth2. Atuação em sistemas críticos para segurança pública (SSP-BA e Polícia Militar) e no Sistema de Auditoria Interna. Participação na implementação de projetos internos com C#, .NET, ASP.NET/ASP.NET Core e Visual Basic 6 / VB.NET, incluindo aplicações web e desktop, bancos relacionais e manutenção em ambiente Windows.",
      tags: [
        { name: "C#", tone: "tech-csharp" },
        { name: ".NET", tone: "tech-dotnet" },
        { name: "ASP.NET Core", tone: "tech-aspnet" },
        { name: "Visual Basic 6", tone: "tech-vb" },
        { name: "VB.NET", tone: "tech-vb" },
        { name: "SQL Server", tone: "tech-sqlserver" },
        { name: "Windows", tone: "tech-windows" },
      ],
    },
    {
      id: "exp-edza",
      company: "EDZA Planejamento Consultoria e Informática LTDA",
      role: "Analista de Sistemas e Desenvolvedor de Software",
      period: "nov/2019 – mar/2022",
      location: "Salvador / BA",
      description:
        "Desenvolvimento e sustentação de ERP Municipal (Tributário, Contábil, RH e Nota Fiscal Eletrônica) atendendo prefeituras de Ilhéus, Juazeiro, Candeias, Porto Seguro e Lauro de Freitas. Administração de parque tecnológico e servidores Linux/Windows, prestação de suporte técnico N3, manutenção de ambientes e sustentação de sistemas 24/7. Participação em projetos internos com C#, .NET, ASP.NET/ASP.NET Core e Visual Basic 6 / VB.NET, englobando aplicações web e desktop, bancos de dados relacionais e manutenção em ambiente Windows.",
      tags: [
        { name: "C#", tone: "tech-csharp" },
        { name: ".NET", tone: "tech-dotnet" },
        { name: "VB6 / VB.NET", tone: "tech-vb" },
        { name: "ASP.NET", tone: "tech-aspnet" },
        { name: "Windows Server", tone: "tech-windows" },
        { name: "Suporte N3", tone: "tech-windows" },
        { name: "SQL Server", tone: "tech-sqlserver" },
        { name: "Linux", tone: "tech-linux" },
      ],
    },
  ],

  about: {
    summary:
      "Desenvolvedor de Software com sólida experiência na plataforma Microsoft (.NET 8/9, C#, ASP.NET Core e Visual Basic 6/VB.NET), atuando no desenvolvimento de soluções completas Desktop e Web corporativas, além de forte vivência no ecossistema Java (Spring Boot, APIs RESTful e microsserviços). Experiência prática em bancos de dados relacionais (Microsoft SQL Server, PostgreSQL), versionamento com Git, testes automatizados (TDD), suporte a ambientes Windows 11 Pro e servidores corporativos Windows Server e Linux (suporte técnico N3) e noções de nuvem Azure.",
    objective:
      "Atuar como Desenvolvedor .NET / C#, aplicando sólidos conhecimentos em engenharia de software, integração de APIs e bancos relacionais no desenvolvimento, sustentação e modernização de sistemas corporativos Desktop, Web e Cloud.",
    skills: [
      { name: "C# & .NET 8/9", level: 96, color: "#0078d4", icon: "csharp" },
      { name: "ASP.NET Core & APIs RESTful", level: 94, color: "#0078d4", icon: "dotnet" },
      { name: "Desktop (WPF, WinForms & VB.NET)", level: 92, color: "#005a9e", icon: "windows" },
      { name: "Visual Basic 6 & Legados", level: 90, color: "#005a9e", icon: "vb" },
      { name: "Microsoft SQL Server & EF Core", level: 93, color: "#cc292b", icon: "sqlserver" },
      { name: "Windows 11 Pro & Servidores (Suporte N3)", level: 95, color: "#00a4ef", icon: "windows" },
      { name: "Automação VBA & Microsoft Access", level: 88, color: "#217346", icon: "vba" },
      { name: ".NET MAUI & Mobile PWA", level: 86, color: "#512bd4", icon: "maui" },
      { name: "Microsoft Azure Fundamentals", level: 82, color: "#0089d6", icon: "azure" },
      { name: "Java EE & Spring Boot", level: 88, color: "#6db33f", icon: "spring" },
      { name: "Testes Automatizados (TDD & xUnit)", level: 90, color: "#0078d4", icon: "dotnet" },
      { name: "Docker & CI/CD GitHub Actions", level: 85, color: "#2496ed", icon: "docker" },
    ],
    methodologies: [
      "Clean Architecture",
      "Domain-Driven Design (DDD)",
      "TDD (Test-Driven Development)",
      "SOLID & Design Patterns",
      "RESTful API Maturity Model",
      "Scrum & Kanban",
      "CI/CD com GitHub Actions",
      "Manutenção e Migração de Legados",
      "Suporte Técnico N3 & Redes",
      "Virtualização (Hyper-V & Docker)",
      "Modelagem Relacional SQL Server",
      "Segurança e Autenticação JWT / OAuth2",
    ],
    practices: [
      "Clean Architecture",
      "ASP.NET Core",
      "WPF / WinForms",
      "VB6 / VB.NET",
      "SQL Server",
      "EF Core",
      "Windows Server",
      "Suporte N3",
      "Excel VBA",
      ".NET MAUI",
      "Azure Cloud",
    ],
  },

  stack: [
    { id: "s-csharp", name: "C#", icon: "csharp", tone: "tech-csharp", level: 96 },
    { id: "s-dotnet", name: ".NET 8 / 9", icon: "dotnet", tone: "tech-dotnet", level: 95 },
    { id: "s-aspnet", name: "ASP.NET Core", icon: "dotnet", tone: "tech-aspnet", level: 94 },
    { id: "s-desktop", name: "Desktop (WPF / WinForms)", icon: "windows", tone: "tech-csharp", level: 92 },
    { id: "s-vb", name: "Visual Basic 6 / VB.NET", icon: "windows", tone: "tech-vb", level: 90 },
    { id: "s-sqlserver", name: "Microsoft SQL Server", icon: "sqlserver", tone: "tech-sqlserver", level: 93 },
    { id: "s-windows", name: "Windows 11 / Windows Server", icon: "windows", tone: "tech-windows", level: 95 },
    { id: "s-support", name: "Suporte Técnico N3 & Infra", icon: "windows", tone: "tech-windows", level: 94 },
    { id: "s-vba", name: "Excel VBA & Access", icon: "vba", tone: "tech-vba", level: 88 },
    { id: "s-maui", name: ".NET MAUI & PWA", icon: "maui", tone: "tech-maui", level: 86 },
    { id: "s-azure", name: "Microsoft Azure", icon: "azure", tone: "tech-azure", level: 82 },
    { id: "s-java", name: "Java & Spring Boot", icon: "spring", tone: "tech-spring", level: 88 },
    { id: "s-postgres", name: "PostgreSQL", icon: "postgres", tone: "tech-postgres", level: 88 },
    { id: "s-docker", name: "Docker & Contêineres", icon: "docker", tone: "tech-docker", level: 85 },
    { id: "s-git", name: "Git & CI/CD", icon: "git", tone: "tech-git", level: 90 },
  ],
};
