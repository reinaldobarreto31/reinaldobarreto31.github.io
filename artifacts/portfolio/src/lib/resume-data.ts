export type ResumeIcon =
  | "dotnet" | "csharp" | "windows" | "sqlserver" | "azure" | "maui" | "vba"
  | "java" | "spring" | "kotlin" | "flutter"
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
  badge: "DESTAQUE" | "EM CONSTRUÇÃO" | "LIVE" | "FULL-STACK" | "API" | "DESKTOP" | "MOBILE";
  stack: string;
  description: string;
  tags: string[];
  github: string;
  live?: string;
  tone: string;
  icon: ResumeIcon;
}

export const PROFESSIONAL_SUMMARY = [
  "Desenvolvedor de Software com sólida experiência no ecossistema Java (Spring Boot, APIs RESTful, microsserviços e integração de sistemas legados e críticos). Experiência complementar com a plataforma Microsoft (.NET, C#, ASP.NET Core e Visual Basic 6/VB.NET), atuando no desenvolvimento web e desktop. Vivência com bancos de dados relacionais (SQL Server, PostgreSQL), versionamento com Git, testes automatizados, suporte a ambientes Windows e noções de nuvem Azure.",
];

export const PROFESSIONAL_OBJECTIVE =
  "Atuar como Desenvolvedor .NET / C# ou Desenvolvedor Java, aplicando sólidos conhecimentos em engenharia de software, integração de APIs e bancos relacionais no desenvolvimento, sustentação e modernização de sistemas corporativos.";

export const CONTACT = {
  name: "Reinaldo Barreto da Silva",
  phone: "+55 (47) 98830-2308",
  email: "reinaldobarretosilva@gmail.com",
  location: "Navegantes, Santa Catarina – SC",
  linkedin: "linkedin.com/in/reinaldo-barreto-2a4ba2116",
  github: "github.com/reinaldobarreto31",
  headline: "Desenvolvedor .NET / C# | ASP.NET Core, VB6/VB.NET e Infraestrutura Windows",
};

export const HARD_SKILLS: ResumeSkill[] = [
  { name: "C# & .NET 8/9", level: 96, color: "#0078d4", icon: "csharp" },
  { name: "ASP.NET Core & APIs RESTful", level: 94, color: "#0078d4", icon: "dotnet" },
  { name: "Desktop (WPF, WinForms & VB.NET)", level: 92, color: "#005a9e", icon: "windows" },
  { name: "Visual Basic 6 & Legados", level: 90, color: "#005a9e", icon: "windows" },
  { name: "Microsoft SQL Server & EF Core", level: 93, color: "#cc292b", icon: "sqlserver" },
  { name: "Windows 11 Pro & Servidores (Suporte N3)", level: 95, color: "#00a4ef", icon: "windows" },
  { name: "Automação com VBA & Access", level: 88, color: "#217346", icon: "vba" },
  { name: ".NET MAUI & Mobile PWA", level: 86, color: "#512bd4", icon: "maui" },
  { name: "Microsoft Azure Fundamentals", level: 82, color: "#0089d6", icon: "azure" },
  { name: "Java EE & Spring Boot", level: 88, color: "#6db33f", icon: "spring" },
  { name: "Testes Automatizados (TDD / xUnit)", level: 90, color: "#0078d4", icon: "dotnet" },
  { name: "Docker & CI/CD GitHub Actions", level: 85, color: "#2496ed", icon: "docker" },
];

export const METHODOLOGIES = [
  "Clean Architecture",
  "Domain-Driven Design (DDD)",
  "TDD (Test-Driven Development)",
  "SOLID & Design Patterns",
  "APIs RESTful · Richardson Maturity",
  "Scrum & Kanban",
  "CI/CD com GitHub Actions",
  "Manutenção e Migração de Legados",
  "Suporte Técnico N3 & Infraestrutura",
  "Virtualização (Hyper-V & Docker)",
  "Modelagem Relacional SQL Server",
  "Segurança e Autenticação JWT / OAuth2",
];

export const PRACTICES = [
  "Clean Architecture",
  "C# / .NET 8",
  "ASP.NET Core",
  "WPF / WinForms",
  "VB6 / VB.NET",
  "Microsoft SQL Server",
  "EF Core",
  "Windows Server & N3",
  "Excel VBA & Access",
  ".NET MAUI PWA",
  "Azure Cloud",
];

export const EDUCATION = [
  {
    course: "Curso Superior de Tecnologia (CST) em Análise e Desenvolvimento de Sistemas",
    school: "Centro Universitário Jorge Amado (UNIJORGE)",
    period: "2021 – 2023",
  },
  {
    course: "Técnico em Administração",
    school: "CEEP Newton Sucupira",
    period: "1994 – 1996",
  },
];

export const COURSES = [
  "Cursos em C#, .NET, .NET Core, ASP.NET e CSS – Udemy",
  "APIs RESTful com Spring Boot e Java – Udemy",
  "Spring Cloud e Microservices – Udemy",
  "Testes unitários e TDD com JUnit e Mockito – Udemy",
  "Docker e Kubernetes na prática – Udemy",
  "Desenvolvimento Android com Kotlin e Java – Udemy",
];

export const LANGUAGES = [
  { name: "Português", level: "Fluente (leitura, escrita e fala)", percent: 100, tone: "tech-csharp" },
  { name: "Inglês", level: "Intermediário (leitura, escrita e fala)", percent: 65, tone: "tech-dotnet" },
  { name: "Espanhol", level: "Básico (leitura, escrita e fala)", percent: 40, tone: "tech-windows" },
];

export const EXPERIENCES: ResumeExperience[] = [
  {
    company: "PRODEB — Companhia de Processamento de Dados do Estado da Bahia",
    role: "Analista de Sistemas e Desenvolvedor · Consultor IV",
    period: "mar/2024 – set/2024 (6 meses)",
    location: "Salvador / BA",
    description:
      "Desenvolveu e manteve soluções web e backend para órgãos públicos estaduais. Utilizou Java, Spring Boot, Java EE, Struts e JSF na construção e otimização de sistemas corporativos. Colaborou na arquitetura e implementação de funcionalidades complexas, incluindo soluções backend escaláveis em Java e Spring Boot. Otimizou arquiteturas e implementou fluxos de automação para modernização de sistemas públicos.",
    tags: [
      { name: "C#", icon: "csharp", tone: "tech-csharp" },
      { name: ".NET", icon: "dotnet", tone: "tech-dotnet" },
      { name: "Java EE", icon: "java", tone: "tech-java" },
      { name: "Spring Boot", icon: "spring", tone: "tech-spring" },
      { name: "APIs REST", icon: "openapi", tone: "tech-aspnet" },
      { name: "PostgreSQL", icon: "postgres", tone: "tech-postgres" },
      { name: "Git", icon: "git", tone: "tech-git" },
      { name: "Scrum", icon: "actions", tone: "tech-windows" },
    ],
  },
  {
    company: "LAMPP IT Solutions",
    role: "Analista de Sistemas e Desenvolvedor de Software",
    period: "mar/2022 – mai/2022 (3 meses)",
    location: "Salvador / BA",
    description:
      "Construiu APIs REST com Spring Boot, Java EE, Struts e JSF. Atuou na integração de sistemas e autenticação OAuth2 com Spring Security. Contribuiu para soluções de segurança pública e sistemas críticos para SSP-BA (Secretaria de Segurança Pública da Bahia) e Polícia Militar. Atuou no Sistema de Auditoria Interna. Participou da implementação de projetos internos com C#, .NET, ASP.NET/ASP.NET Core e Visual Basic 6 / VB.NET, incluindo aplicações web e desktop, bancos relacionais e manutenção em ambiente Windows.",
    tags: [
      { name: "C#", icon: "csharp", tone: "tech-csharp" },
      { name: ".NET", icon: "dotnet", tone: "tech-dotnet" },
      { name: "ASP.NET Core", icon: "dotnet", tone: "tech-aspnet" },
      { name: "VB6 / VB.NET", icon: "windows", tone: "tech-vb" },
      { name: "Desktop", icon: "windows", tone: "tech-windows" },
      { name: "SQL Server", icon: "sqlserver", tone: "tech-sqlserver" },
      { name: "Windows", icon: "windows", tone: "tech-windows" },
    ],
  },
  {
    company: "EDZA Planejamento Consultoria e Informática LTDA",
    role: "Analista de Sistemas e Desenvolvedor de Software",
    period: "nov/2019 – mar/2022 (2 anos e 5 meses)",
    location: "Salvador / BA",
    description:
      "Desenvolveu soluções backend em Java EE, JSP, Struts e Spring Boot para sistemas de gestão pública municipal nos módulos Tributário, Contábil e RH. Criou e manteve APIs REST integradas a frontends em Angular e Vue.js. Atuou com sistemas legados, migração de funcionalidades e Git para versionamento. Colaborou em equipes ágeis com Scrum e evoluiu o ERP Municipal do Poder Executivo nos módulos Tributário, Saúde, RH e Nota Fiscal Eletrônica. Prestou atendimento técnico e sustentação para prefeituras municipais. Administrou parque tecnológico e servidores Linux/Windows, prestou suporte técnico N3, realizou manutenção de ambientes e atuou na sustentação de sistemas. Participou de forma complementar em projetos internos com C#, .NET, ASP.NET/ASP.NET Core e Visual Basic 6/VB.NET, incluindo aplicações web e desktop, bancos relacionais e manutenção em ambiente Windows.",
    tags: [
      { name: "C#", icon: "csharp", tone: "tech-csharp" },
      { name: ".NET", icon: "dotnet", tone: "tech-dotnet" },
      { name: "VB6 / VB.NET", icon: "windows", tone: "tech-vb" },
      { name: "ASP.NET", icon: "dotnet", tone: "tech-aspnet" },
      { name: "Windows Server", icon: "windows", tone: "tech-windows" },
      { name: "Suporte N3", icon: "windows", tone: "tech-windows" },
      { name: "SQL Server", icon: "sqlserver", tone: "tech-sqlserver" },
      { name: "Linux", icon: "linux", tone: "tech-linux" },
    ],
  },
];

const GITHUB = "https://github.com/reinaldobarreto31";
const PAGES = "https://reinaldobarreto31.github.io";

export const PERSONAL_PROJECTS: ResumeProject[] = [
  {
    title: "Sistema ERP & Automação Desktop (C# .NET / WPF)",
    subtitle: "Desktop · WPF · WinForms · EF Core · SQL Server",
    badge: "DESTAQUE",
    stack: "C# · .NET 8 · WPF · Windows Forms · Entity Framework Core · Microsoft SQL Server · LINQ · Windows 11 Fluent UI",
    description:
      "Sistema corporativo Desktop de alta performance em C# e .NET 8 com interface moderna Windows 11 Fluent UI, WPF e Windows Forms. Integração completa com banco Microsoft SQL Server via Entity Framework Core, controle de permissões de usuário (RBAC), relatórios automatizados, exportação contábil/fiscal e processamento em lote multithread com Task Parallel Library (TPL).",
    tags: ["C#", ".NET 8", "WPF", "WinForms", "SQL Server", "EF Core", "LINQ", "Windows 11"],
    github: `${GITHUB}/dotnet-desktop-erp`,
    tone: "tech-csharp",
    icon: "csharp",
  },
  {
    title: "ASP.NET Core Enterprise Web API",
    subtitle: "APIs RESTful · JWT · EF Core · Swagger · Azure",
    badge: "DESTAQUE",
    stack: "C# · .NET 8 · ASP.NET Core · Clean Architecture · Microsoft SQL Server · JWT · Swagger / OpenAPI · Docker · Azure",
    description:
      "API corporativa robusta e escalável desenvolvida em C# com ASP.NET Core (.NET 8), estruturada sob Clean Architecture e Domain-Driven Design (DDD). Implementa autenticação e autorização via JWT, injeção de dependência nativa, validações FluentValidation, documentação Swagger/OpenAPI e persistência relacional com Entity Framework Core em SQL Server. Preparada para publicação em nuvem Azure.",
    tags: ["C#", ".NET 8", "ASP.NET Core", "SQL Server", "JWT", "Swagger / OpenAPI", "Azure", "Docker"],
    github: `${GITHUB}/aspnetcore-api-server`,
    tone: "tech-aspnet",
    icon: "dotnet",
  },
  {
    title: "Migração & Modernização de ERP Legado (VB6 & VB.NET)",
    subtitle: "Desktop · Visual Basic 6 · VB.NET · Refatoração C# .NET",
    badge: "DESTAQUE",
    stack: "Visual Basic 6 · VB.NET · C# · .NET 8 · Microsoft SQL Server · Windows Server · Crystal Reports",
    description:
      "Manutenção, sustentação e modernização de módulos corporativos legados em Visual Basic 6 (VB6) e Visual Basic .NET (VB.NET). Diagnóstico e refatoração de regras de negócio contábeis, tributárias e de folha de pagamento, com migração planejada para C# .NET moderno e APIs REST, garantindo integridade de dados e estabilidade contínua.",
    tags: ["Visual Basic 6", "VB.NET", "C#", ".NET 8", "SQL Server", "Crystal Reports", "Windows Server"],
    github: `${GITHUB}/vb-legacy-migration`,
    tone: "tech-vb",
    icon: "windows",
  },
  {
    title: ".NET MAUI & Blazor Hybrid Mobile PWA",
    subtitle: "Mobile & Web · PWA · .NET MAUI · Blazor · Offline-first",
    badge: "FULL-STACK",
    stack: "C# · .NET MAUI · Blazor Hybrid · Progressive Web App (PWA) · SignalR · SQLite · REST APIs",
    description:
      "Aplicação corporativa multiplataforma com C# .NET MAUI integrada com Blazor Hybrid e Progressive Web App (PWA). Desenvolvida para operações de campo com sincronização em tempo real via WebSockets/SignalR, armazenamento local seguro com SQLite e interface adaptada a dispositivos Windows, Android e Web.",
    tags: ["C#", ".NET MAUI", "Blazor", "PWA", "SignalR", "SQLite", "REST APIs"],
    github: `${GITHUB}/maui-blazor-pwa`,
    tone: "tech-maui",
    icon: "maui",
  },
  {
    title: "Automação Administrativa & Fiscal (C# + Excel VBA + Access)",
    subtitle: "Automação · VBA · Microsoft Excel · Access · C# .NET",
    badge: "FULL-STACK",
    stack: "C# · .NET · Excel VBA · Microsoft Access · Office Interop · Windows · SQL",
    description:
      "Suite corporativa de automação administrativa e fiscal, integrando rotinas em C# .NET com macros avançadas em VBA, planilhas inteligentes no Microsoft Excel e bases de dados relacionais em Microsoft Access. Automação de fechamentos financeiros e geração de relatórios oficiais.",
    tags: ["C#", ".NET", "Excel VBA", "Microsoft Access", "SQL", "Windows"],
    github: `${GITHUB}/vba-office-automation`,
    tone: "tech-vba",
    icon: "vba",
  },
  {
    title: "Compressor de PDF (Padrões Brasileiros)",
    subtitle: "100% no navegador · Presets Oficiais BR",
    badge: "LIVE",
    stack: "React 18 · TypeScript · pdf-lib · Tailwind CSS · GitHub Pages",
    description:
      "Compressor de documentos PDF no navegador com limites padrão do Governo Federal (2 MB), Empresa (5 MB), e-mail e alta resolução. Suporta múltiplos arquivos em fila, visualização de compressão e download direto.",
    tags: ["React 18", "TypeScript", "pdf-lib", "Tailwind CSS"],
    github: `${GITHUB}/pdf-compressor`,
    live: `${PAGES}/pdf-compressor/`,
    tone: "tech-pdf",
    icon: "pdf",
  },
];

export const STACK_SHOWCASE = [
  { name: "C#", icon: "csharp" as ResumeIcon, tone: "tech-csharp" },
  { name: ".NET 8 / 9", icon: "dotnet" as ResumeIcon, tone: "tech-dotnet" },
  { name: "ASP.NET Core", icon: "dotnet" as ResumeIcon, tone: "tech-aspnet" },
  { name: "Desktop (WPF/WinForms)", icon: "windows" as ResumeIcon, tone: "tech-csharp" },
  { name: "Visual Basic 6 / VB.NET", icon: "windows" as ResumeIcon, tone: "tech-vb" },
  { name: "Microsoft SQL Server", icon: "sqlserver" as ResumeIcon, tone: "tech-sqlserver" },
  { name: "Windows 11 & Servidores", icon: "windows" as ResumeIcon, tone: "tech-windows" },
  { name: "Suporte N3 & Infraestrutura", icon: "windows" as ResumeIcon, tone: "tech-windows" },
  { name: "Excel VBA & Access", icon: "vba" as ResumeIcon, tone: "tech-vba" },
  { name: ".NET MAUI & PWA", icon: "maui" as ResumeIcon, tone: "tech-maui" },
  { name: "Microsoft Azure", icon: "azure" as ResumeIcon, tone: "tech-azure" },
  { name: "Java & Spring Boot", icon: "spring" as ResumeIcon, tone: "tech-spring" },
  { name: "PostgreSQL", icon: "postgres" as ResumeIcon, tone: "tech-postgres" },
  { name: "Docker", icon: "docker" as ResumeIcon, tone: "tech-docker" },
  { name: "Git & CI/CD", icon: "git" as ResumeIcon, tone: "tech-git" },
];

export const COMPLEMENTARY_TECHS = [
  { name: "C#", icon: "csharp" as ResumeIcon, tone: "tech-csharp" },
  { name: ".NET 8", icon: "dotnet" as ResumeIcon, tone: "tech-dotnet" },
  { name: "ASP.NET Core", icon: "dotnet" as ResumeIcon, tone: "tech-aspnet" },
  { name: "VB6 / VB.NET", icon: "windows" as ResumeIcon, tone: "tech-vb" },
  { name: "SQL Server", icon: "sqlserver" as ResumeIcon, tone: "tech-sqlserver" },
  { name: "Windows 11 Pro", icon: "windows" as ResumeIcon, tone: "tech-windows" },
  { name: "Suporte Técnico N3", icon: "windows" as ResumeIcon, tone: "tech-windows" },
  { name: "Excel VBA", icon: "vba" as ResumeIcon, tone: "tech-vba" },
  { name: ".NET MAUI", icon: "maui" as ResumeIcon, tone: "tech-maui" },
  { name: "Azure Cloud", icon: "azure" as ResumeIcon, tone: "tech-azure" },
  { name: "Java Spring Boot", icon: "spring" as ResumeIcon, tone: "tech-spring" },
  { name: "PostgreSQL", icon: "postgres" as ResumeIcon, tone: "tech-postgres" },
  { name: "Docker", icon: "docker" as ResumeIcon, tone: "tech-docker" },
  { name: "Git", icon: "git" as ResumeIcon, tone: "tech-git" },
];
