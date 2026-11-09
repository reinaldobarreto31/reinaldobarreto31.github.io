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
      id: "proj-limpapp",
      title: "Limpapp — App de Serviços & Limpeza",
      subtitle: "Mobile Nativo · Kotlin · Jetpack Compose · KMP · Upload de Fotos",
      description:
        "Aplicativo mobile nativo em desenvolvimento utilizando Kotlin, Jetpack Compose e Kotlin Multiplatform (KMP). Inclui catálogo de serviços, agenda de atendimentos e fluxo inteligente de upload de fotos ilustrativas dos serviços (antes e depois do trabalho) com compressão local, sincronização offline com Room e integração com API Spring Boot 3.",
      tech: ["Kotlin", "Jetpack Compose", "KMP", "Android SDK", "Room", "Upload de Fotos", "Spring Boot 3"],
      icon: "kotlin",
      tone: "tech-kotlin",
      github: `${GITHUB}/limpapp-mobile`,
      badge: "EM CONSTRUÇÃO",
      featured: true,
    },
    {
      id: "proj-kotlin-android",
      title: "App Android Nativo com Jetpack Compose & Clean Arch",
      subtitle: "Android Nativo · Kotlin · MVVM · Coroutines · StateFlow · Hilt",
      description:
        "Aplicativo Android moderno seguindo as diretrizes oficiais da Google: arquitetura limpa em camadas (MVVM), StateFlow, Coroutines, Room para persistência reativa, injeção de dependência com Hilt e consumo de APIs REST.",
      tech: ["Kotlin", "Android", "Jetpack Compose", "Coroutines", "Room", "Hilt", "Material 3"],
      icon: "kotlin",
      tone: "tech-kotlin",
      github: `${GITHUB}/kotlin-android-native`,
      badge: "DESTAQUE",
      featured: true,
    },
    {
      id: "proj-flutter-app",
      title: "App Multiplataforma com Flutter & Dart",
      subtitle: "Mobile Multiplataforma · Flutter (Intermediário) · Dart · State Management",
      description:
        "Aplicativo multiplataforma para Android e iOS desenvolvido com Flutter e Dart: widgets customizados, gerenciamento de estado reativo com Provider/Bloc, consumo de APIs RESTful e navegação fluida.",
      tech: ["Flutter", "Dart", "Provider / Bloc", "REST APIs", "Multiplataforma"],
      icon: "flutter",
      tone: "tech-react",
      github: `${GITHUB}/flutter-cross-app`,
      badge: "LIVE",
      featured: true,
    },
    {
      id: "proj-spring-api",
      title: "API RESTful Enterprise em Java & Spring Boot 3",
      subtitle: "Back-end Corporativo · Java 21 · Spring Boot 3 · JPA · PostgreSQL",
      description:
        "API corporativa robusta e escalável desenvolvida em Java 17/21 com Spring Boot 3, arquitetura em camadas (Controller, Service, Repository), persistência com Spring Data JPA/Hibernate e transações ACID em PostgreSQL. Implementa autenticação stateless com Spring Security 6 e JWT, validações Bean Validation, documentação interativa OpenAPI 3 / Swagger e cobertura de testes automatizados com JUnit 5 e Mockito.",
      tech: ["Java 21", "Spring Boot 3", "Spring Data JPA", "Spring Security", "PostgreSQL", "JWT", "Swagger / OpenAPI", "JUnit 5", "Docker"],
      icon: "spring",
      tone: "tech-spring",
      github: `${GITHUB}/spring-boot-enterprise-api`,
      badge: "API",
      featured: false,
    },
    {
      id: "proj-react-native",
      title: "App Mobile em React Native (Básico)",
      subtitle: "Mobile Cross-Platform · React Native · Expo · TypeScript",
      description:
        "Entregas pontuais em React Native para clientes sob demanda quando o projeto prioriza uma única base de código JavaScript/TypeScript para lançamento ágil em lojas.",
      tech: ["React Native", "TypeScript", "Expo", "REST API"],
      icon: "react",
      tone: "tech-react",
      github: `${GITHUB}/react-native-cross-app`,
      badge: "MOBILE",
      featured: false,
    },
    {
      id: "proj-ios-swift",
      title: "Estudos de iOS Nativo com Swift & SwiftUI (Noções)",
      subtitle: "iOS Nativo · Swift 5/6 · SwiftUI · Xcode (Noções em estudo)",
      description:
        "Laboratório de aprendizado contínuo no ecossistema Apple: interfaces declarativas com SwiftUI, integração com módulos KMP e consumo de APIs REST.",
      tech: ["Swift", "SwiftUI", "Xcode", "iOS Nativo", "Noções"],
      icon: "actions",
      tone: "tech-actions",
      github: `${GITHUB}/ios-swift-studies`,
      badge: "EM CONSTRUÇÃO",
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
        "Desenvolvimento e manutenção de APIs RESTful corporativas em Java 17/21+ e Spring Boot 3 para órgãos públicos estaduais. Modernização de sistemas, modelagem e queries performáticas em PostgreSQL e integração com clientes web e mobile. Entregas ágeis contínuas com Scrum e Git Flow.",
      tags: [
        { name: "Java 17+", tone: "tech-java" },
        { name: "Spring Boot 3", tone: "tech-spring" },
        { name: "PostgreSQL", tone: "tech-postgres" },
        { name: "APIs REST", tone: "tech-api" },
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
        "Construção de APIs REST com Spring Boot e Java EE para projetos de missão crítica voltados à segurança pública (SSP-BA / Polícia Militar). Implementação de regras de autenticação e controle granular de permissões com OAuth2 e Spring Security, auditoria interna e persistência performática em PostgreSQL sobre servidores Linux.",
      tags: [
        { name: "Java EE", tone: "tech-java" },
        { name: "Spring Boot", tone: "tech-spring" },
        { name: "OAuth2", tone: "tech-api" },
        { name: "PostgreSQL", tone: "tech-postgres" },
        { name: "Linux", tone: "tech-linux" },
      ],
    },
    {
      id: "exp-edza",
      company: "EDZA Planejamento Consultoria e Informática LTDA",
      role: "Analista de TI / Analista de Sistemas e Suporte Especializado",
      period: "nov/2019 – mar/2022",
      location: "Salvador / BA",
      description:
        "Atuação como Analista de TI e Desenvolvedor prestando suporte técnico especializado e atendimento consultivo direto a Auditores Fiscais do Município, secretarias de fazenda e servidores públicos municipais de diversas prefeituras (Ilhéus, Juazeiro, Candeias, Porto Seguro, Lauro de Freitas). Diagnóstico e resolução de incidentes críticos em regras de tributação municipal (ISS, IPTU, ITBI), arrecadação e validação de Nota Fiscal de Serviços Eletrônica (NFS-e). Desenvolvimento e sustentação de backend em Java EE e Spring Boot para o ERP municipal com bancos relacionais MySQL e PostgreSQL em Linux.",
      tags: [
        { name: "Analista de TI", tone: "tech-spring" },
        { name: "Suporte a Auditores", tone: "tech-kotlin" },
        { name: "Java EE", tone: "tech-java" },
        { name: "Spring Boot", tone: "tech-spring" },
        { name: "NFS-e / Tributos", tone: "tech-api" },
        { name: "MySQL / Postgres", tone: "tech-postgres" },
        { name: "Linux", tone: "tech-linux" },
      ],
    },
    {
      id: "exp-freelance",
      company: "Desenvolvimento Mobile & Projetos Comerciais (Freelance)",
      role: "Desenvolvedor Mobile & Backend",
      period: "Períodos Intermitentes / Em Andamento",
      location: "Salvador / BA & Remoto",
      description:
        "Concepção e desenvolvimento do aplicativo mobile nativo Limpapp em Kotlin e Kotlin Multiplatform (KMP), com upload e compressão de fotos ilustrativas dos serviços antes/depois do atendimento, cache offline com Room e integração com API Spring Boot 3. Desenvolvimento de aplicativos multiplataforma em Flutter, soluções em React Native e entregas comerciais sob demanda.",
      tags: [
        { name: "Kotlin", tone: "tech-kotlin" },
        { name: "KMP", tone: "tech-kotlin" },
        { name: "Flutter", tone: "tech-react" },
        { name: "React Native", tone: "tech-react" },
        { name: "Spring Boot 3", tone: "tech-spring" },
      ],
    },
  ],

  about: {
    summary:
      "Engenheiro de Software e Desenvolvedor focado em ecossistema Mobile nativo e multiplataforma. Atuação destacada no desenvolvimento de aplicativos Android com Kotlin, Jetpack Compose, Coroutines, StateFlow, Room e Hilt, além de arquitetura compartilhada com Kotlin Multiplatform (KMP).\n\nPossui experiência intermediária em Flutter (Dart) para aplicativos multiplataforma fluidos, entregas básicas em React Native e noções em expansão em iOS nativo com Swift & SwiftUI. Ampla vivência em backend corporativo com Java 17/21+, Spring Boot 3, Spring Data JPA, Spring Security e PostgreSQL em sistemas de alta demanda para o setor público (PRODEB, SSP-BA e EDZA com suporte direto a Auditores Fiscais do Município). Conhecimento pontual em PHP apenas para noções básicas.",
    objective:
      "Atuar como Desenvolvedor Mobile (Android Kotlin / KMP / Flutter), aplicando padrões de Clean Architecture, MVVM, SOLID, persistência reativa e integração com APIs RESTful de alta performance na entrega de produtos mobile robustos e intuitivos.",
    skills: [
      { name: "Kotlin & Jetpack Compose (Android)", level: 92, color: "#7f52ff", icon: "kotlin" },
      { name: "Kotlin Multiplatform (KMP)", level: 84, color: "#7f52ff", icon: "kotlin" },
      { name: "Flutter & Dart (Intermediário)", level: 75, color: "#02569b", icon: "flutter" },
      { name: "Java 17 / 21+ & Spring Boot 3", level: 90, color: "#6db33f", icon: "spring" },
      { name: "React Native (Básico)", level: 65, color: "#61dafb", icon: "react" },
      { name: "iOS Nativo / Swift (Noções)", level: 45, color: "#f05138", icon: "actions" },
      { name: "PostgreSQL & MySQL", level: 90, color: "#336791", icon: "postgres" },
      { name: "APIs RESTful & Swagger/OpenAPI", level: 94, color: "#6db33f", icon: "swagger" },
      { name: "Clean Architecture & MVVM", level: 90, color: "#7f52ff", icon: "kotlin" },
      { name: "PHP (Noções básicas / legados)", level: 35, color: "#777bb4", icon: "php" },
    ],
    methodologies: [
      "Clean Architecture",
      "MVVM (Model-View-ViewModel)",
      "Kotlin Multiplatform (KMP)",
      "Flutter State Management",
      "TDD · Testes Automatizados",
      "SOLID & Clean Code",
      "Scrum & Kanban",
      "CI/CD · GitHub Actions",
      "APIs RESTful Resilientes",
    ],
    practices: [
      "Kotlin Android Nativo",
      "Jetpack Compose",
      "Flutter & Dart",
      "Kotlin Multiplatform",
      "Spring Boot 3",
      "PostgreSQL",
      "Room Database",
      "Docker",
    ],
  },

  stack: [
    { id: "s-kotlin", name: "Kotlin (Android Nativo)", icon: "kotlin", tone: "tech-kotlin", level: 92 },
    { id: "s-kmp", name: "Kotlin Multiplatform (KMP)", icon: "kotlin", tone: "tech-kotlin", level: 84 },
    { id: "s-flutter", name: "Flutter (Intermediário)", icon: "flutter", tone: "tech-react", level: 75 },
    { id: "s-java", name: "Java 17/21+", icon: "java", tone: "tech-java", level: 90 },
    { id: "s-spring", name: "Spring Boot 3", icon: "spring", tone: "tech-spring", level: 90 },
    { id: "s-react-native", name: "React Native (Básico)", icon: "react", tone: "tech-react", level: 65 },
    { id: "s-swift", name: "iOS / Swift (Noções)", icon: "actions", tone: "tech-actions", level: 45 },
    { id: "s-postgres", name: "PostgreSQL", icon: "postgres", tone: "tech-postgres", level: 90 },
    { id: "s-mysql", name: "MySQL", icon: "mysql", tone: "tech-mysql", level: 85 },
    { id: "s-docker", name: "Docker & Containers", icon: "docker", tone: "tech-docker", level: 85 },
    { id: "s-git", name: "Git & GitHub", icon: "git", tone: "tech-git", level: 92 },
    { id: "s-php", name: "PHP (Noções básicas)", icon: "php", tone: "tech-php", level: 35 },
  ],
};
