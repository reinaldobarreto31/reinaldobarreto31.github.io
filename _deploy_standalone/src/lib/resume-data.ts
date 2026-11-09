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
  "Engenheiro de Software e Desenvolvedor Mobile com foco em Android nativo usando Kotlin (Android SDK, Jetpack Compose, MVVM, Coroutines, StateFlow, Room e Hilt), além de Kotlin Multiplatform (KMP). Prioridades: 1º Mobile Android/Kotlin, 2º backend Java 17/21+ com Spring Boot 3 e 3º APIs Node.js/TypeScript. Flutter (intermediário), React Native (básico), Swift/iOS em aprendizado (ainda sem Mac para executar e testar com Xcode) e PHP (noções). Experiência em sistemas de missão crítica no setor público (PRODEB, SSP-BA e EDZA), incluindo suporte técnico especializado a Auditores Fiscais do Município e usuários corporativos. Projeto principal em andamento: Limpapp, marketplace Android planejado para conectar clientes a diaristas; as telas atuais são mockups.",
];

export const PROFESSIONAL_OBJECTIVE =
  "Atuar como Desenvolvedor Mobile (Kotlin / Android / KMP / Flutter) ou Desenvolvedor Mobile & Backend Java Spring, aplicando princípios de Clean Architecture, MVVM, SOLID, TDD e persistência reativa na construção de aplicativos fluidos, escaláveis e integrados a APIs robustas.";

export const CONTACT = {
  name: "Reinaldo Barreto da Silva",
  phone: "(71) 99182-3131",
  email: "reinaldobarreto31@gmail.com",
  location: "Navegantes – Santa Catarina (Disponível Remoto / Híbrido / Presencial na região)",
  linkedin: "linkedin.com/in/reinaldo-barreto-2a4ba2116",
  github: "github.com/reinaldobarreto31",
  headline: "Desenvolvedor Mobile (Kotlin · KMP · Android Nativo) · Java 21 & Spring Boot 3 · Node.js",
};

export const HARD_SKILLS: ResumeSkill[] = [
  { name: "Kotlin & Jetpack Compose (Android)", level: 95, color: "#7f52ff", icon: "kotlin" },
  { name: "Kotlin Multiplatform (KMP)", level: 85, color: "#7f52ff", icon: "kotlin" },
  { name: "Flutter & Dart (Intermediário)", level: 75, color: "#02569b", icon: "react" },
  { name: "Java 17 / 21+ & Spring Boot 3", level: 90, color: "#6db33f", icon: "spring" },
  { name: "Node.js & TypeScript (3º foco)", level: 70, color: "#339933", icon: "node" },
  { name: "React Native (Básico)", level: 65, color: "#61dafb", icon: "react" },
  { name: "Swift / iOS (em aprendizado; ainda sem Mac/Xcode)", level: 35, color: "#f05138", icon: "actions" },
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
  "Fundamentos de Swift e iOS (em aprendizado; ainda sem Mac para executar o Xcode)",
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
location: "Navegantes / SC & Remoto",
    description:
      "Projeto principal em andamento: planejamento e prototipação do Limpapp, um marketplace Android para conectar clientes a diaristas e profissionais de limpeza. Os mockups ilustram a proposta; as funcionalidades ainda estão em desenvolvimento. Estudos e entregas complementares em Flutter, React Native e backend Java/Spring.",
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
    title: "Limpapp — Marketplace de Limpeza sob Demanda",
    subtitle: "Projeto principal · Android · Kotlin · Jetpack Compose · Em desenvolvimento",
    badge: "EM CONSTRUÇÃO",
    stack: "Kotlin, Android SDK, Jetpack Compose, KMP",
    description:
      "Projeto principal em desenvolvimento: aplicativo Android planejado para conectar clientes a diaristas e profissionais de limpeza. A proposta inclui descoberta de prestadores e solicitação/agendamento de serviços. As telas atuais são mockups; as funcionalidades ainda não estão concluídas e o app não foi publicado em loja.",
    tags: ["Kotlin", "Android", "Compose", "KMP", "Marketplace", "Protótipo"],
    github: "https://reinaldobarreto31.github.io/#projects",
    tone: "tech-kotlin",
    icon: "kotlin",
  },
  {
    title: "Kotlin Tasks — Aplicativo Android Nativo",
    subtitle: "Android Nativo · Kotlin · MVVM · Room Database · Material Design 3",
    badge: "DESTAQUE",
    stack: "Kotlin, Android SDK, MVVM, Room Database, Material Design 3",
    description:
      "Aplicativo Android público para gestão de tarefas, com arquitetura MVVM, persistência local em Room Database e Material Design 3. Inclui telas reais do app e fluxo de criação e filtro de tarefas por prioridade.",
    tags: ["Kotlin", "Android", "MVVM", "Room", "Material 3"],
    github: "https://github.com/reinaldobarreto31/kotlin-tasks-android",
    tone: "tech-kotlin",
    icon: "kotlin",
  },
  {
    title: "PixPay Wallet — Carteira Digital Android",
    subtitle: "Android Nativo · Kotlin · Compose · Biometria · Ktor",
    badge: "MOBILE",
    stack: "Kotlin, Jetpack Compose, BiometricPrompt, Ktor Client, MVVM, StateFlow",
    description:
      "Protótipo de carteira digital nativa (fora de loja) em Kotlin com Jetpack Compose: saldo e extrato, transferências e pagamentos via PIX, autenticação por biometria e criptografia local dos dados sensíveis sob arquitetura MVVM.",
    tags: ["Kotlin", "Compose", "Biometria", "Ktor", "MVVM"],
    github: "https://github.com/reinaldobarreto31",
    tone: "tech-kotlin",
    icon: "kotlin",
  },
  {
    title: "NotaFácil — Leitor de Nota Fiscal (ML Kit)",
    subtitle: "Android Nativo · Kotlin · ML Kit · CameraX · Room",
    badge: "MOBILE",
    stack: "Kotlin, ML Kit, CameraX, Room, Compose, Coroutines",
    description:
      "Protótipo Android (fora de loja) que digitaliza notas fiscais: detecção automática de QR Code / código de barras com ML Kit e CameraX, extração dos dados do emitente e valor total, histórico offline com Room e exportação dos lançamentos.",
    tags: ["Kotlin", "ML Kit", "CameraX", "Room", "Compose"],
    github: "https://github.com/reinaldobarreto31",
    tone: "tech-kotlin",
    icon: "kotlin",
  },
  {
    title: "ChefExpress — App de Delivery em Compose",
    subtitle: "Android Nativo · Kotlin · MVVM · Navigation · Carrinho",
    badge: "MOBILE",
    stack: "Kotlin, Jetpack Compose, MVVM, Navigation Compose, Retrofit, Coil",
    description:
      "Protótipo de delivery (fora de loja): listagem de pratos, detalhes do produto, carrinho com cálculo de total e acompanhamento do pedido, com navegação fluida pelo Navigation Compose e arquitetura MVVM com StateFlow.",
    tags: ["Kotlin", "Compose", "MVVM", "Navigation", "Retrofit"],
    github: "https://github.com/reinaldobarreto31",
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
    github: "https://reinaldobarreto31.github.io/#projects",
    tone: "tech-react",
    icon: "react",
  },
  {
    title: "API CRUD — Java 21 & Spring Boot 3",
    subtitle: "Backend · Java 21 · Spring Boot 3 · OpenAPI/Swagger · PostgreSQL",
    badge: "API",
    stack: "Java 21, Spring Boot 3, Spring Data JPA, PostgreSQL, OpenAPI 3, Docker Compose",
    description:
      "API RESTful de operações CRUD desenvolvida com Java 21 e Spring Boot 3. O repositório público documenta persistência PostgreSQL com Spring Data JPA, validação com Bean Validation, documentação OpenAPI/Swagger e execução com Docker Compose.",
    tags: ["Java 21", "Spring Boot 3", "JPA", "PostgreSQL", "OpenAPI", "Docker"],
    github: "https://github.com/reinaldobarreto31/spring-boot-swagger-crud",
    tone: "tech-spring",
    icon: "spring",
  },
];

export const LANGUAGES = [
  { name: "Português", level: "Fluente (leitura, escrita e fala)", percent: 100 },
  { name: "Inglês", level: "Intermediário técnico (leitura, escrita e fala)", percent: 65 },
  { name: "Espanhol", level: "Básico (leitura, escrita e fala)", percent: 40 },
];

export const PERSONAL_PROJECTS = PROJECTS;
