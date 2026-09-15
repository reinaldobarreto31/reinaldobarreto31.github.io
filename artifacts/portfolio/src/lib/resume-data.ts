export type ResumeIcon =
  | "java" | "spring" | "php" | "laravel" | "kotlin"
  | "react" | "ts" | "js" | "node"
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
  badge: "DESTAQUE" | "EM CONSTRUÇÃO" | "LIVE" | "FULL-STACK" | "API" | "MOBILE";
  stack: string;
  description: string;
  tags: string[];
  github: string;
  live?: string;
  tone: string;
  icon: ResumeIcon;
}

export const PROFESSIONAL_SUMMARY = [
  "Engenheiro de Software e Desenvolvedor Backend com sólida vivência no desenvolvimento, modernização e sustentação de sistemas corporativos de missão crítica para a gestão pública estadual e municipal. Especialista no ecossistema Java (Java 17/21+, Spring Boot 3, Spring Data JPA, Spring Security, Hibernate, Maven) e PHP moderno (PHP 8+, Laravel 10/11, Eloquent ORM, Composer), atuando também no desenvolvimento full-stack com Node.js, TypeScript e React / Vue.js. Domínio comprovado em arquitetura em microsserviços, modelagem de bancos de dados relacionais (PostgreSQL, MySQL, Oracle), autenticação OAuth2 / JWT, conteinerização com Docker e esteiras CI/CD.",
];

export const PROFESSIONAL_OBJECTIVE =
  "Atuar como Desenvolvedor Java / Spring Boot, Desenvolvedor PHP / Laravel ou Desenvolvedor Full-Stack (Node.js / TypeScript), aplicando sólidas práticas de engenharia de software (Clean Architecture, SOLID, TDD), integração de APIs RESTful e persistência relacional na construção de soluções corporativas escaláveis e de alta disponibilidade.";

export const CONTACT = {
  name: "Reinaldo Barreto da Silva",
  phone: "(71) 99182-3131",
  email: "reinaldobarreto31@gmail.com",
  location: "Salvador – BA (Disponível Remoto / Presencial)",
  linkedin: "linkedin.com/in/reinaldo-barreto-2a4ba2116",
  github: "github.com/reinaldobarreto31",
  headline: "Desenvolvedor Java / Spring Boot · PHP (Laravel) · Node.js & TypeScript",
};

export const HARD_SKILLS: ResumeSkill[] = [
  { name: "Java 17 / 21+ & Spring Boot 3", level: 96, color: "#6db33f", icon: "spring" },
  { name: "Spring Data JPA & Hibernate", level: 94, color: "#6db33f", icon: "spring" },
  { name: "Spring Security & JWT", level: 92, color: "#6db33f", icon: "spring" },
  { name: "PHP 8+ & Laravel 10/11", level: 92, color: "#ff2d20", icon: "laravel" },
  { name: "Eloquent ORM & Composer", level: 90, color: "#777bb4", icon: "php" },
  { name: "Node.js, TypeScript & Express", level: 88, color: "#3178c6", icon: "node" },
  { name: "PostgreSQL, MySQL & Oracle", level: 92, color: "#336791", icon: "postgres" },
  { name: "APIs RESTful & OpenAPI 3 / Swagger", level: 94, color: "#6db33f", icon: "swagger" },
  { name: "Docker & Docker Compose", level: 86, color: "#2496ed", icon: "docker" },
  { name: "Testes Unitários (JUnit 5 & Mockito)", level: 90, color: "#6db33f", icon: "spring" },
  { name: "Front-end (React 18 & Vue.js 3)", level: 84, color: "#61dafb", icon: "react" },
  { name: "Git, GitHub & CI/CD Actions", level: 90, color: "#f05032", icon: "git" },
];

export const METHODOLOGIES = [
  "Clean Architecture",
  "Domain-Driven Design (DDD)",
  "Hexagonal Architecture",
  "TDD (Test-Driven Development)",
  "SOLID & Clean Code",
  "APIs RESTful · Richardson Maturity",
  "Scrum & Kanban",
  "CI/CD com GitHub Actions",
  "Microsserviços & 12-Factor Apps",
  "Modelagem Relacional e ACID",
  "Segurança e Autenticação JWT / OAuth2",
];

export const PRACTICES = [
  "Clean Architecture",
  "Java 21 / Spring Boot 3",
  "PHP 8 / Laravel 11",
  "Spring Security & JWT",
  "Laravel Eloquent",
  "Node.js & TypeScript",
  "PostgreSQL & MySQL",
  "Docker & Compose",
  "JUnit 5 & Mockito",
  "APIs RESTful",
  "CI/CD Actions",
];

export const EDUCATION = [
  {
    school: "Centro Universitário Jorge Amado (UNIJORGE)",
    degree: "Curso Superior de Tecnologia (CST) em Análise e Desenvolvimento de Sistemas",
    period: "2021 – 2023",
  },
  {
    school: "CEEP Newton Sucupira",
    degree: "Técnico em Processamento de Dados / Informática",
    period: "1994 – 1996",
  },
];

export const COURSES = [
  "APIs RESTful com Spring Boot 3 e Java 17+ – Udemy",
  "PHP 8 e Laravel Completo com Projetos Práticos – Udemy",
  "Node.js, TypeScript e Arquitetura de Microserviços – Udemy",
  "Testes Unitários e TDD com JUnit 5 e Mockito – Udemy",
  "Docker e Kubernetes na Prática – Udemy",
  "Spring Cloud e Microsserviços Corporativos – Udemy",
];

export const EXPERIENCES: ResumeExperience[] = [
  {
    company: "PRODEB — Companhia de Processamento de Dados do Estado da Bahia",
    role: "Analista de Sistemas e Desenvolvedor (Consultor IV)",
    period: "Mar/2024 – Set/2024",
    location: "Salvador / BA",
    description:
      "Desenvolveu e manteve soluções web e backend enterprise para órgãos públicos estaduais do Governo da Bahia com Java, Spring Boot, Java EE, Struts e JSF. Colaborou na arquitetura e implementação de funcionalidades complexas em microsserviços Spring, persistência transacional com PostgreSQL e frontends Vue.js, atuando em equipes ágeis com Scrum e Git Flow.",
    tags: [
      { name: "Java 17+", icon: "java", tone: "tech-java" },
      { name: "Spring Boot 3", icon: "spring", tone: "tech-spring" },
      { name: "PostgreSQL", icon: "postgres", tone: "tech-postgres" },
      { name: "Vue.js", icon: "vue", tone: "tech-vue" },
      { name: "Git", icon: "git", tone: "tech-git" },
      { name: "Scrum", icon: "spring", tone: "tech-spring" },
    ],
  },
  {
    company: "LAMPP IT Solutions",
    role: "Analista de Sistemas e Desenvolvedor de Software",
    period: "Mar/2022 – Mai/2022",
    location: "Salvador / BA",
    description:
      "Construiu APIs RESTful escaláveis com Spring Boot e Java EE, além de atuar no desenvolvimento e manutenção de sistemas corporativos com PHP e Laravel para a SSP-BA e Polícia Militar. Autenticação e autorização via OAuth2 e Spring Security, integração de sistemas e persistência com PostgreSQL em Linux.",
    tags: [
      { name: "Java EE", icon: "java", tone: "tech-java" },
      { name: "Spring Boot", icon: "spring", tone: "tech-spring" },
      { name: "PHP", icon: "php", tone: "tech-php" },
      { name: "Laravel", icon: "laravel", tone: "tech-laravel" },
      { name: "OAuth2", icon: "jwt", tone: "tech-jwt" },
      { name: "PostgreSQL", icon: "postgres", tone: "tech-postgres" },
      { name: "Linux", icon: "linux", tone: "tech-linux" },
    ],
  },
  {
    company: "EDZA Planejamento Consultoria e Informática LTDA",
    role: "Analista de Sistemas e Desenvolvedor de Software",
    period: "Nov/2019 – Mar/2022",
    location: "Salvador / BA",
    description:
      "Desenvolveu soluções backend em Java EE, JSP, Struts e Spring Boot para ERP de gestão pública municipal (módulos Tributário, Contábil, RH e Nota Fiscal Eletrônica). Criação de APIs REST integradas a frontends em Angular e Vue.js, automação de rotinas em Shell Script e manutenção de bancos MySQL e PostgreSQL.",
    tags: [
      { name: "Java EE", icon: "java", tone: "tech-java" },
      { name: "Spring Boot", icon: "spring", tone: "tech-spring" },
      { name: "Angular", icon: "angular", tone: "tech-angular" },
      { name: "Vue.js", icon: "vue", tone: "tech-vue" },
      { name: "MySQL", icon: "mysql", tone: "tech-mysql" },
      { name: "PostgreSQL", icon: "postgres", tone: "tech-postgres" },
      { name: "Shell Script", icon: "bash", tone: "tech-bash" },
    ],
  },
  {
    company: "Desenvolvimento Full-Stack (Projetos Comerciais / Freelance)",
    role: "Desenvolvedor Backend & Web",
    period: "Períodos Intermitentes",
    location: "Remoto",
    description:
      "Desenvolvimento de aplicações corporativas sob medida utilizando PHP 8, Laravel e Vue.js, além de APIs RESTful estruturadas em Java Spring Boot e Node.js / TypeScript, com persistência relacional em MySQL e PostgreSQL, autenticação JWT e deploy em contêineres Docker.",
    tags: [
      { name: "PHP 8", icon: "php", tone: "tech-php" },
      { name: "Laravel", icon: "laravel", tone: "tech-laravel" },
      { name: "Java", icon: "java", tone: "tech-java" },
      { name: "Spring Boot", icon: "spring", tone: "tech-spring" },
      { name: "Node.js", icon: "node", tone: "tech-node" },
      { name: "TypeScript", icon: "ts", tone: "tech-ts" },
      { name: "Docker", icon: "docker", tone: "tech-docker" },
    ],
  },
];

export const PROJECTS: ResumeProject[] = [
  {
    title: "API RESTful Enterprise em Java & Spring Boot 3",
    subtitle: "Spring Boot 3 · Spring Security · JPA · PostgreSQL",
    badge: "DESTAQUE",
    stack: "Java 21, Spring Boot 3, Spring Data JPA, Spring Security, PostgreSQL, Docker, JUnit 5",
    description:
      "API corporativa robusta e escalável desenvolvida em Java 21 com Spring Boot 3 sob Clean Architecture. Autenticação stateless via Spring Security 6 e JWT, validações com Bean Validation, documentação Swagger/OpenAPI e testes com JUnit 5 e Mockito.",
    tags: ["Java 21", "Spring Boot 3", "PostgreSQL", "JWT", "Swagger", "Docker"],
    github: "https://github.com/reinaldobarreto31/spring-boot-enterprise-api",
    tone: "tech-spring",
    icon: "spring",
  },
  {
    title: "Plataforma Corporativa em PHP 8 & Laravel 11",
    subtitle: "PHP 8.3 · Laravel 11 · Eloquent ORM · Blade · MySQL",
    badge: "DESTAQUE",
    stack: "PHP 8.3, Laravel 11, Eloquent ORM, Blade, MySQL, Composer, REST APIs",
    description:
      "Sistema corporativo e portal web desenvolvido com PHP 8 e framework Laravel 11 (experiência LAMPP IT e Freelance). Utiliza Eloquent ORM para modelagem relacional, filas assíncronas, painel administrativo responsivo Blade e APIs RESTful integradas.",
    tags: ["PHP 8.3", "Laravel 11", "Eloquent ORM", "MySQL", "Composer", "Blade"],
    github: "https://github.com/reinaldobarreto31/laravel-corporate-portal",
    tone: "tech-laravel",
    icon: "laravel",
  },
  {
    title: "Full-Stack Hub em Node.js, TypeScript & React",
    subtitle: "Node.js · TypeScript · Express · React 18 · Tailwind",
    badge: "FULL-STACK",
    stack: "Node.js, TypeScript, Express, React 18, Tailwind CSS, Prisma, PostgreSQL, Docker",
    description:
      "Aplicação full-stack modular com backend em Node.js e TypeScript estrito, estruturada com padrão Repository. Frontend em React 18 com Vite e Tailwind CSS, validação com Zod e persistência em PostgreSQL via Prisma.",
    tags: ["Node.js", "TypeScript", "React 18", "Tailwind CSS", "Prisma", "PostgreSQL"],
    github: "https://github.com/reinaldobarreto31/nodejs-typescript-hub",
    tone: "tech-node",
    icon: "node",
  },
  {
    title: "Arquitetura de Microsserviços com Spring Cloud",
    subtitle: "Spring Cloud Gateway · Eureka · Resilience4j · Keycloak",
    badge: "API",
    stack: "Spring Cloud, Spring Boot, Eureka, Gateway, Resilience4j, Keycloak, Docker",
    description:
      "Ecossistema distribuído de microsserviços com Spring Cloud Gateway, Service Discovery com Netflix Eureka, tolerância a falhas e circuit breaker com Resilience4j e autenticação centralizada com Keycloak / OAuth2.",
    tags: ["Spring Cloud", "Eureka", "Gateway", "Resilience4j", "Keycloak"],
    github: "https://github.com/reinaldobarreto31/spring-cloud-microservices",
    tone: "tech-spring",
    icon: "spring",
  },
  {
    title: "Aplicativo Mobile em Kotlin Android",
    subtitle: "Kotlin 2.0 · Jetpack Compose · Room DB · Coroutines",
    badge: "MOBILE",
    stack: "Kotlin, Android, Jetpack Compose, Coroutines, Room DB, Hilt",
    description:
      "Aplicativo Android nativo em Kotlin com interface moderna em Jetpack Compose, arquitetura MVVM, reatividade com Coroutines/StateFlow e persistência local com Room DB.",
    tags: ["Kotlin", "Android", "Jetpack Compose", "Room DB", "Coroutines"],
    github: "https://github.com/reinaldobarreto31/kotlin-tasks-android",
    tone: "tech-kotlin",
    icon: "kotlin",
  },
  {
    title: "PDF Compressor Web & Utilitários",
    subtitle: "TypeScript · Web Workers · Client-side · Vite",
    badge: "LIVE",
    stack: "TypeScript, Vite, Web Workers, PDF.js, Tailwind CSS",
    description:
      "Ferramenta cliente de alta performance para compressão e manipulação de documentos PDF diretamente no navegador, sem upload para servidores terceiros.",
    tags: ["TypeScript", "Vite", "Web Workers", "PDF.js", "Tailwind CSS"],
    github: "https://github.com/reinaldobarreto31/pdf-compressor",
    tone: "tech-ts",
    icon: "ts",
  },
];

export const LANGUAGES = [
  { name: "Português", level: "Fluente (leitura, escrita e fala)", percent: 100 },
  { name: "Inglês", level: "Intermediário técnico (leitura, escrita e fala)", percent: 65 },
  { name: "Espanhol", level: "Básico (leitura, escrita e fala)", percent: 40 },
];

export const PERSONAL_PROJECTS = PROJECTS;
