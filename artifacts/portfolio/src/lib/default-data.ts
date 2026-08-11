export type ProjectBadge = "DESTAQUE" | "EM CONSTRUÇÃO" | "LIVE" | "API" | "FULL-STACK";
export type ProjectTone =
  | "tech-postgres"
  | "tech-redis"
  | "tech-docker"
  | "tech-actions"
  | "tech-react"
  | "tech-ts"
  | "tech-jwt"
  | "tech-openapi"
  | "tech-pdf"
  | "tech-golang"
  | "tech-java"
  | "tech-spring"
  | "tech-kotlin"
  | "tech-flutter"
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
      id: "proj-spring-crud",
      title: "Spring Boot CRUD API",
      subtitle: "REST · JPA · PostgreSQL · Swagger",
      description:
        "API RESTful completa em Java 17 + Spring Boot 3 com Spring Data JPA, PostgreSQL, autenticação JWT e documentação OpenAPI 3 (Swagger UI / springdoc-openapi). Testes unitários com JUnit 5 + Mockito, DTOs com MapStruct e validação Bean Validation. Docker Compose para subir banco + app em um comando.",
      tech: ["Java 17", "Spring Boot 3", "Spring Data JPA", "PostgreSQL", "JWT", "Swagger / OpenAPI 3", "Docker", "JUnit 5"],
      icon: "spring",
      tone: "tech-spring",
      github: `${GITHUB}/spring-boot-crud`,
      badge: "DESTAQUE",
      featured: true,
    },
    {
      id: "proj-kotlin-mobile",
      title: "Kotlin Android App",
      subtitle: "Mobile · Jetpack Compose · MVVM",
      description:
        "Aplicativo Android nativo em Kotlin com Jetpack Compose, arquitetura MVVM + Clean Architecture, Room para persistência local, Retrofit para consumo de APIs REST e injeção de dependência com Hilt. Corrotinas + Flow para reatividade, Material 3 e testes com MockK + Turbine.",
      tech: ["Kotlin", "Jetpack Compose", "MVVM", "Room", "Retrofit", "Hilt", "Coroutines", "Flow"],
      icon: "kotlin",
      tone: "tech-kotlin",
      github: `${GITHUB}/kotlin-android-app`,
      badge: "DESTAQUE",
      featured: true,
    },
    {
      id: "proj-spring-micros",
      title: "Spring Microservices",
      subtitle: "Microsserviços · Kafka · Eureka · Gateway",
      description:
        "Arquitetura de microsserviços em Java Spring Boot: Service Discovery (Eureka), API Gateway com Spring Cloud Gateway, comunicação assíncrona via Apache Kafka, resiliência com Resilience4j (Circuit Breaker) e autenticação centralizada em Keycloak / OAuth2. Observabilidade com Micrometer + Prometheus + Grafana.",
      tech: ["Java", "Spring Boot 3", "Spring Cloud", "Apache Kafka", "Eureka", "Keycloak", "Docker", "PostgreSQL"],
      icon: "java",
      tone: "tech-java",
      github: `${GITHUB}/spring-microservices`,
      badge: "DESTAQUE",
      featured: true,
    },
    {
      id: "proj-flutter-app",
      title: "Flutter / Dart Mobile App",
      subtitle: "Cross-Platform · iOS + Android · Firebase",
      description:
        "Aplicação multiplataforma em Flutter / Dart com autenticação Firebase (e-mail + Google), Firestore para dados em tempo real, Cloud Storage para uploads, Provider para gerenciamento de estado e padrão Repository. Material 3 responsivo, CI/CD com GitHub Actions e integração nativa.",
      tech: ["Flutter", "Dart", "Firebase", "Firestore", "Provider", "Material 3", "REST APIs"],
      icon: "flutter",
      tone: "tech-flutter",
      github: `${GITHUB}/flutter-app`,
      badge: "FULL-STACK",
    },
    {
      id: "proj-pdf",
      title: "Compressor de PDF",
      subtitle: "Padrões Brasileiros · 100% navegador",
      description:
        "Compressor de PDFs 100% no navegador com presets brasileiros: Governo BR (até 2 MB), Empresa (até 5 MB), E-mail e Qualidade. Múltiplos arquivos em lote, progresso individual e renomear antes de baixar.",
      tech: ["React", "TypeScript", "pdf-lib", "Tailwind"],
      icon: "sparkles",
      tone: "tech-pdf",
      github: `${GITHUB}/pdf-compressor`,
      live: `${PAGES}/pdf-compressor/`,
      badge: "LIVE",
    },
    {
      id: "proj-spring-auth",
      title: "Spring Auth & Security",
      subtitle: "OAuth2 · JWT · Keycloak · RBAC",
      description:
        "Projeto Spring Security completo: autenticação JWT stateless, integração com Keycloak via OAuth2 / OIDC, controle de acesso baseado em Roles e Permissões (RBAC + ABAC), refresh token e endpoints protegidos. Criptografia com BCrypt e auditoria via Spring Data Envers.",
      tech: ["Java", "Spring Boot 3", "Spring Security", "JWT", "OAuth2", "Keycloak", "BCrypt"],
      icon: "spring",
      tone: "tech-spring",
      github: `${GITHUB}/spring-auth-security`,
      badge: "API",
    },
    {
      id: "proj-flutter-chat",
      title: "Flutter Realtime Chat",
      subtitle: "WebSocket · Riverpod · Supabase",
      description:
        "Aplicativo de chat em tempo real com Flutter + Dart: backend Supabase com PostgreSQL e Realtime Broadcast, gerenciamento de estado Riverpod, notificações push via Firebase Cloud Messaging e upload de mídia com compressão nativa.",
      tech: ["Flutter", "Dart", "Supabase", "Riverpod", "WebSocket", "FCM"],
      icon: "flutter",
      tone: "tech-flutter",
      github: `${GITHUB}/flutter-realtime-chat`,
      badge: "EM CONSTRUÇÃO",
    },
    {
      id: "proj-nextjs-hub",
      title: "Next.js Full-Stack Hub",
      subtitle: "App Router · tRPC · NextAuth · Prisma",
      description:
        "Aplicação full-stack com Next.js 14 (App Router + Server Components + Server Actions), autenticação NextAuth (Credentials + GitHub), tRPC para endpoints end-to-end tipados, ORM Prisma com PostgreSQL e deploy em Vercel. Dashboard administrativo com Tailwind UI e upload de arquivos via Server Actions.",
      tech: ["Next.js 14", "React 18", "TypeScript", "tRPC", "NextAuth", "Prisma", "PostgreSQL", "Tailwind"],
      icon: "next",
      tone: "tech-next",
      github: `${GITHUB}/nextjs-fullstack-hub`,
      badge: "FULL-STACK",
    },
    {
      id: "proj-vue-dash",
      title: "Vue.js 3 Dashboards",
      subtitle: "Composition API · Pinia · Nuxt · Axios",
      description:
        "Painéis administrativos em Vue 3 com Composition API + <script setup>, gerenciamento de estado Pinia, roteamento Vue Router com guards, gráficos ECharts, integração REST via Axios e SSR com Nuxt 3. Prototipagem rápida, responsividade e theming escuro claro integrados.",
      tech: ["Vue.js 3", "Nuxt 3", "Pinia", "TypeScript", "Tailwind", "Axios"],
      icon: "vue",
      tone: "tech-vue",
      github: `${GITHUB}/vue3-dashboards`,
      badge: "FULL-STACK",
    },
    {
      id: "proj-angular-corp",
      title: "Angular 18 Enterprise SPA",
      subtitle: "Signals · Standalone · NgRx · RxJS",
      description:
        "Single Page Application corporativa em Angular 18 com Standalone Components, gerenciamento de estado global NgRx, reatividade com RxJS + Signals, interceptors HTTP com refresh token JWT, lazy loading de rotas e modularidade por domínio. Publicação em pipeline CI/CD GitHub Actions.",
      tech: ["Angular 18", "TypeScript", "RxJS", "NgRx", "Angular Material", "JWT"],
      icon: "angular",
      tone: "tech-angular",
      github: `${GITHUB}/angular-enterprise-spa`,
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
        "Desenvolvimento e manutenção de APIs REST enterprise em Java / Spring Boot e integração de sistemas para órgãos públicos do Governo da Bahia. Arquitetura em camadas (controller / service / repository), transações ACID em PostgreSQL e frontends Vue.js. Entregas contínuas em Scrum com Git Flow.",
      tags: [
        { name: "Java", tone: "tech-java" },
        { name: "Spring Boot", tone: "tech-spring" },
        { name: "APIs REST", tone: "tech-api" },
        { name: "PostgreSQL", tone: "tech-postgres" },
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
        "Integração de sistemas Java EE / Spring com provedores OAuth2 externos, construção de APIs REST e frontends interativos Angular e React.js. Ambientes Linux Ubuntu com deploy em contêineres e bancos PostgreSQL performáticos.",
      tags: [
        { name: "Java EE", tone: "tech-java" },
        { name: "Spring", tone: "tech-spring" },
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
        "Desenvolvimento de plataforma enterprise em Java EE e Spring Boot com dashboards em Angular / Vue.js. Automações e rotinas batch com Bash Script, administração de servidores Linux e bancos relacionais MySQL.",
      tags: [
        { name: "Java EE", tone: "tech-java" },
        { name: "Spring Boot", tone: "tech-spring" },
        { name: "Angular", tone: "tech-angular" },
        { name: "Vue.js", tone: "tech-vue" },
        { name: "Kotlin", tone: "tech-kotlin" },
        { name: "MySQL", tone: "tech-mysql" },
        { name: "Linux Ubuntu", tone: "tech-linux" },
        { name: "Bash Script", tone: "tech-bash" },
      ],
    },
  ],

  about: {
    summary:
      "Engenheiro de Software com foco principal em Java & Spring Boot e background sólido no setor público (estadual, municipal) e segurança pública. Segundo pilar em Kotlin para desenvolvimento Android nativo, e em terceiro lugar Flutter / Dart para aplicações mobile cross-platform iOS + Android. Entrega também front-ends modernos com Next.js, React, Vue.js 3 e Angular 18 para consumir as APIs Spring. Experiência com APIs RESTful escaláveis, arquitetura em microsserviços, autenticação OAuth2 / JWT / Keycloak e entrega contínua com CI/CD e Docker.",
    objective:
      "Atuar como Engenheiro de Software Java / Spring Boot em produto de alto impacto — com atenção também a oportunidades em Kotlin (mobile Android nativo) e Flutter / Dart (multiplataforma). Aproveitar também a vivência front-end com Next.js, React, Vue e Angular para entregar soluções FULL-STACK.",
    skills: [
      { name: "Java", level: 95, color: "#007396", icon: "java" },
      { name: "Spring Boot 3", level: 95, color: "#6db33f", icon: "spring" },
      { name: "Kotlin · Android", level: 88, color: "#7f52ff", icon: "kotlin" },
      { name: "Flutter / Dart", level: 82, color: "#02569b", icon: "flutter" },
      { name: "Next.js 14 · React", level: 85, color: "#ffffff", icon: "next" },
      { name: "Node.js · NestJS", level: 82, color: "#339933", icon: "node" },
      { name: "Vue.js 3 · Nuxt", level: 80, color: "#42b883", icon: "vue" },
      { name: "Angular 18 · RxJS", level: 78, color: "#dd0031", icon: "angular" },
      { name: "TypeScript · JavaScript", level: 90, color: "#3178c6", icon: "ts" },
      { name: "APIs REST · OpenAPI 3", level: 90, color: "#6db33f", icon: "swagger" },
      { name: "PostgreSQL · MySQL", level: 85, color: "#336791", icon: "postgres" },
      { name: "Docker · CI/CD", level: 80, color: "#2496ed", icon: "docker" },
      { name: "Spring Security · JWT", level: 88, color: "#6db33f", icon: "spring" },
    ],
    methodologies: [
      "Clean Architecture",
      "TDD · JUnit 5",
      "Domain-Driven Design",
      "Clean Code",
      "Scrum · Kanban",
      "CI/CD · GitHub Actions",
      "OpenAPI / Swagger",
      "Hexagonal (Ports & Adapters)",
      "Arquitetura em Camadas",
    ],
    practices: ["SOLID", "REST APIs", "MVC / MVVM", "JUnit + Mockito", "TDD", "Clean Code", "CI/CD", "Microsserviços"],
  },

  stack: [
    { id: "s-java", name: "Java", icon: "java", tone: "tech-java", level: 95 },
    { id: "s-spring", name: "Spring Boot", icon: "spring", tone: "tech-spring", level: 95 },
    { id: "s-kotlin", name: "Kotlin", icon: "kotlin", tone: "tech-kotlin", level: 88 },
    { id: "s-flutter", name: "Flutter / Dart", icon: "flutter", tone: "tech-flutter", level: 82 },
    { id: "s-next", name: "Next.js", icon: "next", tone: "tech-next", level: 85 },
    { id: "s-node", name: "Node.js · NestJS", icon: "node", tone: "tech-node", level: 80 },
    { id: "s-vue", name: "Vue.js 3", icon: "vue", tone: "tech-vue", level: 78 },
    { id: "s-angular", name: "Angular 18", icon: "angular", tone: "tech-angular", level: 75 },
    { id: "s-ts", name: "TypeScript", icon: "ts", tone: "tech-ts", level: 90 },
    { id: "s-js", name: "JavaScript", icon: "js", tone: "tech-js", level: 92 },
    { id: "s-react", name: "React 18", icon: "react", tone: "tech-react", level: 86 },
    { id: "s-postgres", name: "PostgreSQL", icon: "postgres", tone: "tech-postgres", level: 85 },
    { id: "s-mysql", name: "MySQL", icon: "mysql", tone: "tech-mysql", level: 82 },
    { id: "s-docker", name: "Docker", icon: "docker", tone: "tech-docker", level: 78 },
    { id: "s-redis", name: "Redis", icon: "redis", tone: "tech-redis", level: 72 },
    { id: "s-mongo", name: "MongoDB", icon: "mongo", tone: "tech-mongo", level: 70 },
  ],
};
