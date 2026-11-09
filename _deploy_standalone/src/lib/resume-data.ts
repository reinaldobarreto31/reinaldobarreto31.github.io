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
  "Engenheiro de Software e Desenvolvedor especializado em ecossistema Mobile nativo com Kotlin (Android SDK, Jetpack Compose, MVVM, Coroutines, StateFlow, Room, Hilt) e arquitetura multiplataforma com Kotlin Multiplatform (KMP), com atuação intermediária em Flutter (Dart), noções em React Native e iOS (Swift), além de sólida base backend corporativa em Java (Java 17/21+, Spring Boot 3, Spring Data JPA, Spring Security, JWT, PostgreSQL, Docker). Vivência consolidada na modernização e sustentação de sistemas de missão crítica para o setor público estadual (PRODEB, SSP-BA/Polícia Militar) e municipal (EDZA), combinando desenvolvimento de software com suporte técnico especializado a Auditores Fiscais do Município e usuários corporativos. Concepção e desenvolvimento do aplicativo próprio Limpapp (Kotlin nativo & KMP com upload de fotos ilustrativas).",
];

export const PROFESSIONAL_OBJECTIVE =
  "Atuar como Desenvolvedor Mobile (Kotlin / Android / KMP / Flutter) ou Desenvolvedor Mobile & Backend Java Spring, aplicando princípios de Clean Architecture, MVVM, SOLID, TDD e persistência reativa na construção de aplicativos fluidos, escaláveis e integrados a APIs robustas.";

export const CONTACT = {
  name: "Reinaldo Barreto da Silva",
  phone: "(71) 99182-3131",
  email: "reinaldobarreto31@gmail.com",
  location: "Salvador – BA (Disponível Remoto / Presencial)",
  linkedin: "linkedin.com/in/reinaldo-barreto-2a4ba2116",
  github: "github.com/reinaldobarreto31",
  headline: "Desenvolvedor Mobile (Kotlin · KMP · Android Nativo) · Flutter (Intermediário) · Java Spring Boot",
};

export const HARD_SKILLS: ResumeSkill[] = [
  { name: "Kotlin & Jetpack Compose (Android)", level: 95, color: "#7f52ff", icon: "kotlin" },
  { name: "Kotlin Multiplatform (KMP)", level: 85, color: "#7f52ff", icon: "kotlin" },
  { name: "Flutter & Dart (Intermediário)", level: 75, color: "#02569b", icon: "react" },
  { name: "Java 17 / 21+ & Spring Boot 3", level: 90, color: "#6db33f", icon: "spring" },
  { name: "React Native (Básico)", level: 65, color: "#61dafb", icon: "react" },
  { name: "iOS Nativo / Swift (Noções)", level: 45, color: "#f05138", icon: "actions" },
  { name: "PostgreSQL & MySQL", level: 90, color: "#336791", icon: "postgres" },
  { name: "APIs RESTful & OpenAPI 3 / Swagger", level: 94, color: "#6db33f", icon: "swagger" },
  { name: "Docker & Docker Compose", level: 86, color: "#2496ed", icon: "docker" },
  { name: "Clean Architecture & MVVM", level: 90, color: "#7f52ff", icon: "kotlin" },
  { name: "Git, GitHub & CI/CD Actions", level: 90, color: "#f05032", icon: "git" },
  { name: "PHP (Noções básicas / legados)", level: 35, color: "#777bb4", icon: "php" },
];

export const METHODOLOGIES = [
  "Clean Architecture",
  "MVVM (Model-View-ViewModel)",
  "Kotlin Multiplatform (KMP)",
  "Flutter State Management (Provider/Bloc)",
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
  "Kotlin Android Nativo",
  "Jetpack Compose",
  "Kotlin Multiplatform",
  "Flutter & Dart",
  "Java 21 / Spring Boot 3",
  "Spring Security & JWT",
  "PostgreSQL & MySQL",
  "Room Database",
  "Docker & Compose",
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
  "Formação Kotlin para Android: Jetpack Compose, MVVM e Coroutines",
  "Kotlin Multiplatform (KMP): Compartilhamento de Código entre Android e iOS",
  "Desenvolvimento de Aplicativos Multiplataforma com Flutter & Dart",
  "APIs RESTful com Java 21 e Spring Boot 3 Enterprise — Udemy",
  "Testes Automatizados e TDD com JUnit 5 e Mockito — Udemy",
  "Docker e Orquestração de Containers para Desenvolvedores — Udemy",
  "Desenvolvimento iOS Nativo com Swift & SwiftUI (em aprendizado contínuo)",
];

export const EXPERIENCES: ResumeExperience[] = [
  {
    company: "PRODEB — Companhia de Processamento de Dados da Bahia",
    role: "Analista de Sistemas e Desenvolvedor (Consultor IV)",
    period: "Mar/2024 – Set/2024",
    location: "Salvador / BA",
    description:
      "Desenvolveu e manteve soluções corporativas enterprise em Java 17/21+ e Spring Boot 3 na estruturação de APIs de alta performance consumidas por aplicações web e mobile do Governo da Bahia. Atuação com microsserviços, modelagem de dados transacionais em PostgreSQL e entregas ágeis contínuas com Scrum e Git Flow.",
    tags: [
      { name: "Java 17+", icon: "java", tone: "tech-java" },
      { name: "Spring Boot 3", icon: "spring", tone: "tech-spring" },
      { name: "PostgreSQL", icon: "postgres", tone: "tech-postgres" },
      { name: "APIs REST", icon: "openapi", tone: "tech-api" },
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
      "Construiu APIs RESTful escaláveis com Spring Boot e Java EE para projetos de missão crítica voltados à segurança pública (SSP-BA / Polícia Militar). Implementação de regras de autenticação e controle granular de permissões com OAuth2 e Spring Security, auditoria interna e persistência performática em PostgreSQL sobre servidores Linux.",
    tags: [
      { name: "Java EE", icon: "java", tone: "tech-java" },
      { name: "Spring Boot", icon: "spring", tone: "tech-spring" },
      { name: "OAuth2", icon: "jwt", tone: "tech-jwt" },
      { name: "PostgreSQL", icon: "postgres", tone: "tech-postgres" },
      { name: "Linux", icon: "linux", tone: "tech-linux" },
    ],
  },
  {
    company: "EDZA Planejamento Consultoria e Informática LTDA",
    role: "Analista de TI / Analista de Sistemas e Suporte Especializado",
    period: "Nov/2019 – Mar/2022",
    location: "Salvador / BA",
    description:
      "Atuação como Analista de TI e Desenvolvedor com suporte técnico especializado e atendimento consultivo direto a Auditores Fiscais do Município, secretarias de fazenda e servidores públicos municipais de diversas prefeituras (Ilhéus, Juazeiro, Candeias, Porto Seguro, Lauro de Freitas). Diagnóstico e resolução de incidentes críticos em regras de tributação municipal (ISS, IPTU, ITBI), arrecadação e validação de Nota Fiscal de Serviços Eletrônica (NFS-e). Desenvolvimento e sustentação de backend em Java EE e Spring Boot para o ERP municipal com bancos relacionais MySQL e PostgreSQL em Linux.",
    tags: [
      { name: "Analista de TI", icon: "spring", tone: "tech-spring" },
      { name: "Suporte a Auditores", icon: "kotlin", tone: "tech-kotlin" },
      { name: "Java EE", icon: "java", tone: "tech-java" },
      { name: "Spring Boot", icon: "spring", tone: "tech-spring" },
      { name: "NFS-e / Tributos", icon: "openapi", tone: "tech-api" },
      { name: "MySQL / Postgres", icon: "postgres", tone: "tech-postgres" },
    ],
  },
  {
    company: "Desenvolvimento Mobile & Projetos Comerciais (Freelance)",
    role: "Desenvolvedor Mobile & Backend",
    period: "Períodos Intermitentes / Em Andamento",
    location: "Salvador / BA & Remoto",
    description:
      "Concepção e desenvolvimento do aplicativo mobile nativo Limpapp em Kotlin e Kotlin Multiplatform (KMP), com upload e compressão de fotos ilustrativas dos serviços antes/depois do atendimento, cache offline com Room e integração com API Spring Boot 3. Desenvolvimento de aplicativos multiplataforma em Flutter, soluções em React Native e entregas comerciais sob demanda.",
    tags: [
      { name: "Kotlin", icon: "kotlin", tone: "tech-kotlin" },
      { name: "KMP", icon: "kotlin", tone: "tech-kotlin" },
      { name: "Flutter", icon: "react", tone: "tech-react" },
      { name: "React Native", icon: "react", tone: "tech-react" },
      { name: "Spring Boot 3", icon: "spring", tone: "tech-spring" },
    ],
  },
];

export const PROJECTS: ResumeProject[] = [
  {
    title: "Limpapp — App de Serviços & Limpeza",
    subtitle: "Mobile Nativo · Kotlin · Compose · KMP · Upload de Fotos",
    badge: "EM CONSTRUÇÃO",
    stack: "Kotlin, Jetpack Compose, KMP, Room Database, Coroutines, Spring Boot 3, PostgreSQL",
    description:
      "Aplicativo mobile nativo em desenvolvimento com Kotlin e Kotlin Multiplatform (KMP). Inclui catálogo de serviços, agenda de atendimentos e fluxo inteligente de upload de fotos ilustrativas dos serviços (antes e depois do trabalho) com compressão local, sincronização offline com Room e integração com API Spring Boot 3.",
    tags: ["Kotlin", "Compose", "KMP", "Room", "Fotos", "Spring Boot 3"],
    github: "https://github.com/reinaldobarreto31/limpapp-mobile",
    tone: "tech-kotlin",
    icon: "kotlin",
  },
  {
    title: "App Android Nativo com Jetpack Compose & Clean Arch",
    subtitle: "Android Nativo · Kotlin · MVVM · Coroutines · Hilt · Room",
    badge: "DESTAQUE",
    stack: "Kotlin, Android SDK, Jetpack Compose, Coroutines, Flow, Room, Hilt, Material 3",
    description:
      "Aplicativo Android moderno seguindo as diretrizes oficiais da Google: arquitetura limpa em camadas (MVVM), StateFlow, Coroutines, Room para persistência reativa, injeção de dependência com Hilt e consumo de APIs REST.",
    tags: ["Kotlin", "Compose", "MVVM", "Flow", "Hilt", "Room"],
    github: "https://github.com/reinaldobarreto31/kotlin-android-native",
    tone: "tech-kotlin",
    icon: "kotlin",
  },
  {
    title: "App Multiplataforma com Flutter & Dart",
    subtitle: "Mobile Multiplataforma · Flutter (Intermediário) · Dart · State Management",
    badge: "LIVE",
    stack: "Flutter 3, Dart, Provider/Bloc, REST APIs, Material Design",
    description:
      "Aplicativo multiplataforma para Android e iOS desenvolvido com Flutter e Dart: widgets customizados, gerenciamento de estado reativo, consumo de APIs RESTful e navegação fluida.",
    tags: ["Flutter", "Dart", "Multiplataforma", "REST APIs", "State Management"],
    github: "https://github.com/reinaldobarreto31/flutter-cross-app",
    tone: "tech-react",
    icon: "react",
  },
  {
    title: "API RESTful Enterprise em Java & Spring Boot 3",
    subtitle: "Spring Boot 3 · Spring Security · JPA · PostgreSQL",
    badge: "API",
    stack: "Java 21, Spring Boot 3, Spring Data JPA, Spring Security, PostgreSQL, Docker, JUnit 5",
    description:
      "API corporativa robusta e escalável desenvolvida em Java 21 com Spring Boot 3 sob Clean Architecture. Autenticação stateless via Spring Security 6 e JWT, validações com Bean Validation, documentação Swagger/OpenAPI e testes com JUnit 5 e Mockito.",
    tags: ["Java 21", "Spring Boot 3", "PostgreSQL", "JWT", "Swagger", "Docker"],
    github: "https://github.com/reinaldobarreto31/spring-boot-enterprise-api",
    tone: "tech-spring",
    icon: "spring",
  },
];
