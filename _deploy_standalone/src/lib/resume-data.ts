export type ResumeIcon =
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
  "Engenheiro de Software com trajetória sólida em Java Enterprise e Spring Boot. Especialista em APIs RESTful, microsserviços e segurança para produtos de alto impacto. Backend Java 17+ / Spring Boot 3 em primeiro plano; Kotlin (Jetpack Compose Android) como segundo pilar; e Flutter / Dart para mobile híbrido quando estratégico. Domínio de TDD com JUnit 5 + Mockito, documentação SpringDoc OpenAPI 3 e entrega com CI/CD (GitHub Actions). Clean Architecture, Ports & Adapters (Hexagonal) e DDD como filosofia de trabalho.",
];

export const PROFESSIONAL_OBJECTIVE =
  "Atuar como Engenheiro Java / Spring Boot em produto de alto impacto — contribuindo com arquitetura de APIs REST escaláveis, microsserviços robustos, testes rigorosos, documentação OpenAPI 3 e entrega contínua em produção. Usar Kotlin (Android nativo) e Flutter / Dart como diferenciais de entrega mobile.";

export const CONTACT = {
  name: "Reinaldo Barreto da Silva",
  phone: "55 47 98830 2308",
  email: "reinaldobarretosilva@gmail.com",
  location: "Navegantes / SC, Brasil",
  linkedin: "linkedin.com/in/reinaldo-barreto-2a4ba2116",
  github: "github.com/reinaldobarreto31",
  headline: "Java 17 · Spring Boot 3 · Kotlin Android · Flutter/Dart · REST APIs · JPA/Hibernate · Docker",
};

export const HARD_SKILLS: ResumeSkill[] = [
  { name: "Java 17+ · Spring Boot 3", level: 96, color: "#6db33f", icon: "spring" },
  { name: "JUnit 5 · Mockito · TDD", level: 94, color: "#007396", icon: "java" },
  { name: "APIs RESTful · SpringDoc OpenAPI 3", level: 93, color: "#007396", icon: "openapi" },
  { name: "Kotlin · Jetpack Compose · Android", level: 88, color: "#7f52ff", icon: "kotlin" },
  { name: "Next.js 14 · App Router · Server Actions", level: 85, color: "#000000", icon: "next" },
  { name: "Node.js · NestJS · Express", level: 82, color: "#339933", icon: "node" },
  { name: "Vue.js 3 · Nuxt 3 · Pinia", level: 80, color: "#42b883", icon: "vue" },
  { name: "Angular 18 · Signals · NgRx", level: 78, color: "#dd0031", icon: "angular" },
  { name: "React 18 · TypeScript", level: 86, color: "#3178c6", icon: "react" },
  { name: "PostgreSQL · JPA · Hibernate", level: 87, color: "#007396", icon: "postgres" },
  { name: "Docker · CI/CD · GitHub Actions", level: 82, color: "#007396", icon: "docker" },
  { name: "Flutter 3 · Dart · Firebase", level: 78, color: "#02569b", icon: "flutter" },
];

export const METHODOLOGIES = [
  "Clean Architecture",
  "Hexagonal · Ports & Adapters",
  "DDD (Domain-Driven Design)",
  "TDD / JUnit 5 · Mockito",
  "REST Maturity Model · Richardson",
  "SOLID · Design Patterns GoF",
  "Scrum · Kanban",
  "CI/CD · GitHub Actions",
  "OpenAPI 3 · SpringDoc",
  "12-Factor App",
  "Jest · Vitest Front-end",
  "Next.js RSC · ISR · SSR",
];

export const PRACTICES = [
  "Clean Arch", "REST APIs", "JPA/Hibernate", "JUnit 5", "TDD", "SOLID", "Clean Code", "CI/CD", "Next.js SSR", "Vue Composition", "Angular Signals",
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
  "Java Spring Boot Expert: REST APIs, JPA, Security, Docker · Udemy",
  "Android Nativo com Kotlin e Jetpack Compose · Udemy",
  "Flutter & Dart: Mobile Híbrido com Firebase e Provider · Udemy",
  "Next.js 14: App Router · RSC · Server Actions · tRPC · Udemy",
  "Vue.js 3 + Nuxt + Pinia: SPA modernas · Udemy",
  "Angular 18 · Signals · Standalone Components · RxJS · Udemy",
  "Microsserviços em Java: Kafka, RabbitMQ e Docker · Udemy · 2024",
  "JUnit 5 + Mockito: TDD na prática · Spring Boot · Udemy",
  "Spring Security 6: JWT, OAuth2 e Auth Server · Udemy · 2024",
];

export const LANGUAGES = [
  { name: "Português", level: "Fluente", percent: 100, tone: "tech-spring" },
  { name: "Inglês", level: "Intermediário", percent: 58, tone: "tech-java" },
  { name: "Espanhol", level: "Básico", percent: 32, tone: "tech-kotlin" },
];

export const EXPERIENCES: ResumeExperience[] = [
  {
    company: "PRODEB — Companhia de Processamento de Dados da Bahia",
    role: "Analista de Sistemas e Desenvolvedor · Consultor IV",
    period: "mar/2024 – set/2024",
    location: "Salvador / BA",
    description:
      "Desenvolvimento e manutenção de APIs REST e soluções web para órgãos públicos do Governo da Bahia. Backend Java 17 / Spring Boot 3 com separação de camadas (controller / service / repository / dto) e mapeamento JPA/Hibernate em PostgreSQL. Frontend em Vue.js. Entregas em Scrum. Migração gradual de monolitos legados para arquitetura de serviços Spring Boot.",
    tags: [
      { name: "Java 17", icon: "java", tone: "tech-java" },
      { name: "Spring Boot 3", icon: "spring", tone: "tech-spring" },
      { name: "APIs REST", icon: "openapi", tone: "tech-api" },
      { name: "PostgreSQL", icon: "postgres", tone: "tech-postgres" },
      { name: "Vue.js", icon: "vue", tone: "tech-vue" },
      { name: "Git", icon: "git", tone: "tech-git" },
      { name: "Scrum", icon: "actions", tone: "tech-actions" },
    ],
  },
  {
    company: "LAMPP IT Solutions",
    role: "Analista de Sistemas e Desenvolvedor de Software",
    period: "mar/2022 – mai/2022",
    location: "Salvador / BA",
    description:
      "APIs REST seguras para sistemas críticos da SSP BA e PM BA. Módulo de controle de acesso do Sistema de Auditoria Interna reescrito em Java Spring Boot + Spring Security 6 (JWT), prototipado em prova de conceito e validado pela diretoria. Autenticação e autorização baseadas em RBAC + JWT. Frontend em Angular e React.js.",
    tags: [
      { name: "Java 17", icon: "java", tone: "tech-java" },
      { name: "Spring Boot 3", icon: "spring", tone: "tech-spring" },
      { name: "Spring Security", icon: "jwt", tone: "tech-jwt" },
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
      "ERP Municipal (Tributário, Saúde, RH e NF-e) para prefeituras de Ilhéus, Juazeiro, Candeias, Porto Seguro e Lauro de Freitas. Modernização do módulo de Nota Fiscal Eletrônica: extração da regra de negócio em Java Spring Boot microserviço, deploy em Docker e integração REST com legado PHP/Java EE. Administração de servidores Linux Ubuntu 24/7.",
    tags: [
      { name: "Java Spring Boot", icon: "spring", tone: "tech-spring" },
      { name: "Kotlin", icon: "kotlin", tone: "tech-kotlin" },
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
    title: "Spring Boot CRUD API — REST + JPA + Security",
    subtitle: "Clean Arch · SpringDoc · PostgreSQL · Docker",
    badge: "DESTAQUE",
    stack: "Java 17 · Spring Boot 3 · Spring Security 6 · SpringDoc OpenAPI 3 · JPA/Hibernate · PostgreSQL · Docker Compose",
    description:
      "CRUD completo em Spring Boot 3 API Mode com autenticação JWT, autorização por roles (RBAC), documentação OpenAPI 3 em /swagger-ui.html gerada automaticamente via SpringDoc. Clean Architecture: use cases / ports / adapters / entities separados. Testes JUnit 5 + Mockito (TDD), paginação, filtros dinâmicos e Docker Compose one-liner para subir DB + API + Swagger.",
    tags: ["Java 17", "Spring Boot 3", "Spring Security", "OpenAPI 3", "PostgreSQL", "Docker", "JUnit 5"],
    github: `${GITHUB}/spring-boot-crud`,
    tone: "tech-spring",
    icon: "spring",
  },
  {
    title: "Kotlin Android App — Jetpack Compose · MVVM",
    subtitle: "Room · Retrofit · Hilt · Coroutines Flow",
    badge: "DESTAQUE",
    stack: "Kotlin · Jetpack Compose · MVVM · Room · Retrofit 2 · Hilt DI · Coroutines Flow · Coil",
    description:
      "Aplicativo Android nativo em Kotlin com UI declarativa via Jetpack Compose, estado reativo por ViewModel + StateFlow, persistência offline com Room DataBase e integração REST usando Retrofit 2 + Moshi. Injeção de dependência com Hilt, carregamento de imagens Coil, testes instrumentados Espresso e testes unitários MockK.",
    tags: ["Kotlin", "Jetpack Compose", "MVVM", "Room", "Retrofit", "Hilt", "Coroutines"],
    github: `${GITHUB}/kotlin-android-app`,
    tone: "tech-kotlin",
    icon: "kotlin",
  },
  {
    title: "Spring Microservices — Kafka · Eureka · Gateway",
    subtitle: "Java 17 · Spring Cloud · Docker · Kubernetes",
    badge: "DESTAQUE",
    stack: "Java 17 · Spring Boot 3 · Spring Cloud · Netflix Eureka · API Gateway · Resilience4j · Apache Kafka · Docker · K8s",
    description:
      "Arquitetura de microsserviços com Service Discovery (Eureka), API Gateway com roteamento dinâmico, Circuit Breaker Resilience4j e mensageria assíncrona Apache Kafka. Config Server centralizado, tracing distribuído e deploy em Docker Compose com templates Kubernetes para produção.",
    tags: ["Java 17", "Spring Cloud", "Apache Kafka", "Eureka", "Docker", "Kubernetes"],
    github: `${GITHUB}/spring-microservices`,
    tone: "tech-java",
    icon: "java",
  },
  {
    title: "Flutter Mobile App — Firebase · Provider · Material 3",
    subtitle: "Híbrido iOS + Android · Backend Firebase",
    badge: "FULL-STACK",
    stack: "Flutter 3 · Dart 3 · Firebase Core · Cloud Firestore · Firebase Auth · Provider State Management · Material 3",
    description:
      "Aplicativo híbrido multiplataforma (iOS + Android) em Flutter 3/Dart 3 com autenticação Firebase (email/senha + Google), banco em tempo real Cloud Firestore, gerenciamento de estado Provider, theming Material 3 dinâmico e notificações push via FCM. Design responsivo, suporte a modo escuro e publicação automatizada por Fastlane.",
    tags: ["Flutter 3", "Dart 3", "Firebase", "Provider", "Firestore", "Material 3"],
    github: `${GITHUB}/flutter-app`,
    tone: "tech-flutter",
    icon: "flutter",
  },
  {
    title: "Compressor de PDF · Padrões Brasileiros",
    subtitle: "100% navegador · Múltiplos arquivos",
    badge: "LIVE",
    stack: "React 18 · TypeScript · pdf-lib · pdf.js · GitHub Pages",
    description:
      "Compressor de PDFs 100% no navegador com presets brasileiros: Governo BR (até 2 MB), Empresa (até 5 MB), E-mail e Qualidade. Múltiplos arquivos em lote, progresso individual e renomear antes de baixar. Interface em tema técnico Java/Spring com foco em produtividade.",
    tags: ["React 18", "TypeScript", "pdf-lib", "Tailwind"],
    github: `${GITHUB}/pdf-compressor`,
    live: `${PAGES}/pdf-compressor/`,
    tone: "tech-pdf",
    icon: "pdf",
  },
];

export const STACK_SHOWCASE = [
  { name: "Java", icon: "java" as ResumeIcon, tone: "tech-java" },
  { name: "Spring Boot", icon: "spring" as ResumeIcon, tone: "tech-spring" },
  { name: "Kotlin", icon: "kotlin" as ResumeIcon, tone: "tech-kotlin" },
  { name: "Flutter", icon: "flutter" as ResumeIcon, tone: "tech-flutter" },
  { name: "Next.js", icon: "next" as ResumeIcon, tone: "tech-next" },
  { name: "Node.js", icon: "node" as ResumeIcon, tone: "tech-node" },
  { name: "Vue.js", icon: "vue" as ResumeIcon, tone: "tech-vue" },
  { name: "Angular", icon: "angular" as ResumeIcon, tone: "tech-angular" },
  { name: "React", icon: "react" as ResumeIcon, tone: "tech-react" },
  { name: "TypeScript", icon: "ts" as ResumeIcon, tone: "tech-ts" },
  { name: "JavaScript", icon: "js" as ResumeIcon, tone: "tech-js" },
  { name: "PostgreSQL", icon: "postgres" as ResumeIcon, tone: "tech-postgres" },
  { name: "Redis", icon: "redis" as ResumeIcon, tone: "tech-redis" },
  { name: "MongoDB", icon: "mongo" as ResumeIcon, tone: "tech-mongo" },
  { name: "Docker", icon: "docker" as ResumeIcon, tone: "tech-docker" },
  { name: "GitHub Actions", icon: "actions" as ResumeIcon, tone: "tech-actions" },
];

export const COMPLEMENTARY_TECHS = [
  { name: "Java", icon: "java" as ResumeIcon, tone: "tech-java" },
  { name: "Spring Boot", icon: "spring" as ResumeIcon, tone: "tech-spring" },
  { name: "Kotlin", icon: "kotlin" as ResumeIcon, tone: "tech-kotlin" },
  { name: "Flutter", icon: "flutter" as ResumeIcon, tone: "tech-flutter" },
  { name: "Node.js", icon: "node" as ResumeIcon, tone: "tech-node" },
  { name: "Next.js", icon: "next" as ResumeIcon, tone: "tech-next" },
  { name: "Vue.js", icon: "vue" as ResumeIcon, tone: "tech-vue" },
  { name: "Angular", icon: "angular" as ResumeIcon, tone: "tech-angular" },
  { name: "React", icon: "react" as ResumeIcon, tone: "tech-react" },
  { name: "TypeScript", icon: "ts" as ResumeIcon, tone: "tech-ts" },
  { name: "JavaScript", icon: "js" as ResumeIcon, tone: "tech-js" },
  { name: "Docker", icon: "docker" as ResumeIcon, tone: "tech-docker" },
  { name: "GitHub Actions", icon: "actions" as ResumeIcon, tone: "tech-actions" },
];
