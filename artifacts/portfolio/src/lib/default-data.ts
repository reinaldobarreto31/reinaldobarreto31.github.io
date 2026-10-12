export type ProjectBadge = "DESTAQUE" | "EM CONSTRUÇÃO" | "LIVE" | "API" | "FULL-STACK" | "MOBILE";
export type ProjectTone =
  | "tech-java"
  | "tech-spring"
  | "tech-php"
  | "tech-laravel"
  | "tech-node"
  | "tech-ts"
  | "tech-js"
  | "tech-react"
  | "tech-vue"
  | "tech-angular"
  | "tech-postgres"
  | "tech-mysql"
  | "tech-redis"
  | "tech-docker"
  | "tech-actions"
  | "tech-jwt"
  | "tech-openapi"
  | "tech-pdf"
  | "tech-kotlin"
  | "tech-git"
  | "tech-linux"
  | "tech-api";

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

export const DEFAULTS: {
  projects: AdminProject[];
  experiences: AdminExperience[];
  about: AdminAbout;
  stack: AdminStackItem[];
} = {
  projects: [
    {
      id: "proj-spring-api",
      title: "API RESTful Enterprise em Java & Spring Boot 3",
      subtitle: "Back-end · Spring Boot 3 · Spring Security · JPA · PostgreSQL",
      description:
        "API corporativa robusta e escalável desenvolvida em Java 17/21 com Spring Boot 3, arquitetura em camadas (Controller, Service, Repository), persistência com Spring Data JPA/Hibernate e transações ACID em PostgreSQL. Implementa autenticação stateless com Spring Security 6 e JWT, validações Bean Validation, documentação interativa OpenAPI 3 / Swagger e cobertura de testes automatizados com JUnit 5 e Mockito.",
      tech: ["Java 21", "Spring Boot 3", "Spring Data JPA", "Spring Security", "PostgreSQL", "JWT", "Swagger / OpenAPI", "JUnit 5", "Docker"],
      icon: "spring",
      tone: "tech-spring",
      github: `${GITHUB}/spring-boot-enterprise-api`,
      badge: "DESTAQUE",
      featured: true,
    },


    {
      id: "proj-spring-cloud",
      title: "Arquitetura de Microsserviços com Spring Cloud",
      subtitle: "Microsserviços · Spring Cloud Gateway · Eureka · Resilience4j",
      description:
        "Ecossistema distribuído de microsserviços com Spring Cloud Gateway, Service Discovery com Netflix Eureka, tolerância a falhas e circuit breaker com Resilience4j, comunicação assíncrona orientada a eventos e autenticação centralizada com Keycloak / OAuth2. Monitoramento de métricas via Spring Boot Actuator e Prometheus.",
      tech: ["Spring Cloud", "Spring Boot", "Eureka", "Gateway", "Resilience4j", "Keycloak", "Docker Compose"],
      icon: "spring",
      tone: "tech-spring",
      github: `${GITHUB}/spring-cloud-microservices`,
      badge: "API",
      featured: false,
    },
    {
      id: "proj-vue-admin",
      title: "Painel de Gestão Pública em Vue.js 3 & Spring Boot",
      subtitle: "Front-end & API · Vue 3 Composition API · Pinia · REST",
      description:
        "Dashboard analítico e módulo de atendimento ao cidadão inspirado na experiência com órgãos públicos estaduais e municipais (PRODEB / EDZA). Construído com Vue.js 3, Composition API, Pinia para gerenciamento de estado, Tailwind CSS, e integração de alto desempenho com APIs RESTful Spring Boot.",
      tech: ["Vue.js 3", "Pinia", "TypeScript", "Spring Boot", "Tailwind CSS", "Axios"],
      icon: "vue",
      tone: "tech-vue",
      github: `${GITHUB}/public-management-dashboard`,
      badge: "FULL-STACK",
      featured: false,
    },
    {
      id: "proj-kotlin-tasks",
      title: "Aplicativo Mobile de Gestão em Kotlin Android",
      subtitle: "Mobile · Kotlin 2.0 · Jetpack Compose · Room DB · Coroutines",
      description:
        "Aplicativo Android nativo em Kotlin com interface moderna em Jetpack Compose, arquitetura MVVM limpa, reatividade com Kotlin Coroutines e StateFlow, injeção de dependências com Hilt, banco de dados local Room DB e sincronização inteligente com APIs RESTful remotas.",
      tech: ["Kotlin", "Android", "Jetpack Compose", "Coroutines", "Room DB", "Hilt"],
      icon: "kotlin",
      tone: "tech-kotlin",
      github: `${GITHUB}/kotlin-tasks-android`,
      badge: "MOBILE",
      featured: false,
    },
    {
      id: "proj-pdf-compressor",
      title: "PDF Compressor Web & Utilitários",
      subtitle: "Web Tool · TypeScript · Web Workers · Client-side",
      description:
        "Ferramenta cliente de alta performance para compressão e manipulação de documentos PDF diretamente no navegador, sem upload de dados sensíveis para servidores terceiros, com Web Workers, TypeScript e Vite.",
      tech: ["TypeScript", "Vite", "Web Workers", "PDF.js", "Tailwind CSS"],
      icon: "ts",
      tone: "tech-ts",
      github: `${GITHUB}/pdf-compressor`,
      badge: "LIVE",
      featured: false,
    },
  ],

  experiences: [
    {
      id: "exp-prodeb",
      company: "PRODEB — Companhia de Processamento de Dados da Bahia",
      role: "Analista de Sistemas e Desenvolvedor (Consultor IV)",
      period: "mar/2024 – set/2024",
      location: "Salvador / BA",
      description:
        "Desenvolvimento e manutenção de APIs RESTful corporativas em Java e Spring Boot para órgãos públicos estaduais. Modernização de sistemas com Java EE, Struts e JSF, modelagem e queries performáticas em PostgreSQL e integração com frontends Vue.js. Entregas ágeis contínuas com Scrum e Git Flow.",
      tags: [
        { name: "Java 17+", tone: "tech-java" },
        { name: "Spring Boot 3", tone: "tech-spring" },
        { name: "PostgreSQL", tone: "tech-postgres" },
        { name: "APIs REST", tone: "tech-api" },
        { name: "Vue.js", tone: "tech-vue" },
        { name: "Git", tone: "tech-git" },
        { name: "Scrum", tone: "tech-spring" },
      ],
    },
    {
      id: "exp-lampp",
      company: "LAMPP IT Solutions",
      role: "Analista de Sistemas e Desenvolvedor de Software",
      period: "mar/2022 – mai/2022",
      location: "Salvador / BA",
      description:
        "Construção de APIs REST com Spring Boot e Java EE, além de desenvolvimento e manutenção de sistemas corporativos com PHP e Laravel. Atuação em soluções de segurança pública e auditoria para a SSP-BA e Polícia Militar, com autenticação OAuth2 / Spring Security e PostgreSQL em Linux.",
      tags: [
        { name: "Java EE", tone: "tech-java" },
        { name: "Spring Boot", tone: "tech-spring" },
        { name: "PHP", tone: "tech-php" },
        { name: "Laravel", tone: "tech-laravel" },
        { name: "OAuth2", tone: "tech-api" },
        { name: "PostgreSQL", tone: "tech-postgres" },
        { name: "Linux", tone: "tech-linux" },
      ],
    },
    {
      id: "exp-edza",
      company: "EDZA Planejamento Consultoria e Informática LTDA",
      role: "Analista de Sistemas e Desenvolvedor de Software",
      period: "nov/2019 – mar/2022",
      location: "Salvador / BA",
      description:
        "Desenvolvimento backend em Java EE, JSP, Struts e Spring Boot para ERP de gestão pública municipal (módulos Tributário, Contábil, RH e Nota Fiscal Eletrônica). Criação de APIs REST integradas a Angular e Vue.js, automação de rotinas em Shell Script e bancos de dados MySQL e PostgreSQL.",
      tags: [
        { name: "Java EE", tone: "tech-java" },
        { name: "Spring Boot", tone: "tech-spring" },
        { name: "Angular", tone: "tech-angular" },
        { name: "Vue.js", tone: "tech-vue" },
        { name: "MySQL", tone: "tech-mysql" },
        { name: "PostgreSQL", tone: "tech-postgres" },
        { name: "Shell Script", tone: "tech-linux" },
        { name: "Scrum", tone: "tech-spring" },
      ],
    },
    {
      id: "exp-freelance",
      company: "Desenvolvimento Full-Stack (Projetos Comerciais / Freelance)",
      role: "Desenvolvedor Backend & Web",
      period: "Períodos Intermitentes",
      location: "Remoto",
      description:
        "Desenvolvimento de aplicações corporativas e portais sob medida com PHP 8, Laravel e Vue.js. Criação de APIs RESTful estruturadas em camadas em Java Spring Boot e Node.js / TypeScript, com persistência relacional em MySQL e PostgreSQL, autenticação JWT e conteinerização com Docker.",
      tags: [
        { name: "PHP 8", tone: "tech-php" },
        { name: "Laravel", tone: "tech-laravel" },
        { name: "Java", tone: "tech-java" },
        { name: "Spring Boot", tone: "tech-spring" },
        { name: "Node.js", tone: "tech-node" },
        { name: "TypeScript", tone: "tech-ts" },
        { name: "Docker", tone: "tech-docker" },
      ],
    },
  ],

  about: {
    summary:
      "Engenheiro de Software e Desenvolvedor Backend com sólida experiência no ecossistema Java (Java 17/21+, Spring Boot 3, Spring Data JPA, Spring Security, Hibernate, Maven), arquiteturas de microsserviços com Spring Cloud e desenvolvimento mobile com Kotlin Android.\n\nVivência comprovada no desenvolvimento, modernização e sustentação de sistemas corporativos de alta demanda para o setor público (Governo do Estado da Bahia — PRODEB, Secretaria de Segurança Pública — LAMPP IT e prefeituras municipais — EDZA). Domínio de arquiteturas orientadas a microsserviços, modelagem de bancos de dados relacionais (PostgreSQL, MySQL, Oracle), autenticação OAuth2 / JWT, documentação OpenAPI 3 / Swagger, conteinerização com Docker e esteiras CI/CD.",
    objective:
      "Atuar como Desenvolvedor Java / Spring Boot ou Engenheiro de Software Backend, aplicando sólidos padrões de engenharia de software (Clean Architecture, SOLID, TDD), integração de APIs RESTful, documentação Swagger / OpenAPI 3 e persistência relacional na construção de soluções escaláveis e de alta disponibilidade.",
    skills: [
      { name: "Java (17 / 21+)", level: 95, color: "#007396", icon: "java" },
      { name: "Spring Boot 3", level: 95, color: "#6db33f", icon: "spring" },
      { name: "Spring Security & JWT", level: 90, color: "#6db33f", icon: "spring" },
      { name: "Spring Data JPA / Hibernate", level: 94, color: "#6db33f", icon: "spring" },
      { name: "PostgreSQL & MySQL", level: 92, color: "#336791", icon: "postgres" },
      { name: "APIs REST & OpenAPI 3 / Swagger", level: 94, color: "#6db33f", icon: "swagger" },
      { name: "Docker & CI/CD", level: 85, color: "#2496ed", icon: "docker" },
      { name: "TDD · JUnit 5 & Mockito", level: 88, color: "#6db33f", icon: "spring" },
      { name: "Kotlin & Android", level: 80, color: "#7F52FF", icon: "kotlin" },
      { name: "TypeScript & JavaScript", level: 85, color: "#3178c6", icon: "ts" },
      { name: "Vue.js 3", level: 82, color: "#42b883", icon: "vue" },
      { name: "Git & GitHub Actions", level: 92, color: "#f05032", icon: "git" },
    ],
    methodologies: [
      "Clean Architecture",
      "Domain-Driven Design (DDD)",
      "Hexagonal Architecture",
      "TDD · JUnit 5 & Mockito",
      "SOLID & Clean Code",
      "Scrum & Kanban",
      "CI/CD · GitHub Actions",
      "OpenAPI 3 / Swagger",
      "12-Factor Apps",
    ],
    practices: [
      "Clean Architecture",
      "SOLID",
      "TDD · JUnit 5",
      "Spring Data JPA",
      "Swagger / OpenAPI",
      "APIs RESTful",
      "Docker",
      "CI/CD",
    ],
  },

  stack: [
    { id: "s-java", name: "Java 17/21+", icon: "java", tone: "tech-java", level: 95 },
    { id: "s-spring", name: "Spring Boot 3", icon: "spring", tone: "tech-spring", level: 95 },
    { id: "s-postgres", name: "PostgreSQL", icon: "postgres", tone: "tech-postgres", level: 92 },
    { id: "s-mysql", name: "MySQL", icon: "mysql", tone: "tech-mysql", level: 90 },
    { id: "s-docker", name: "Docker & Compose", icon: "docker", tone: "tech-docker", level: 85 },
    { id: "s-swagger", name: "Swagger / OpenAPI 3", icon: "swagger", tone: "tech-openapi", level: 94 },
    { id: "s-kotlin", name: "Kotlin & Android", icon: "kotlin", tone: "tech-kotlin", level: 80 },
    { id: "s-git", name: "Git & GitHub Actions", icon: "git", tone: "tech-git", level: 92 },
    { id: "s-linux", name: "Linux / Windows Server", icon: "linux", tone: "tech-linux", level: 88 },
  ],
};
