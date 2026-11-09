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
  /** Caminho da imagem/tela do app (mockup ou screenshot real) exibida no card */
  image?: string;
  /** Telas do app exibidas lado a lado no card (mockups ou screenshots reais) */
  screens?: string[];
  /** Como o app é distribuído: "apk" = arquivo APK (fora da Play Store) ou "store" = loja */
  distribution?: "apk" | "store";
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
      id: "proj-kotlin-android",
      title: "Kotlin Tasks — Aplicativo Android Nativo",
      subtitle: "Android · Kotlin · MVVM · Room Database · Material Design 3",
      description:
        "Aplicativo Android público para gestão de tarefas, documentado com arquitetura MVVM, Room Database e Material Design 3. Inclui telas reais do app e fluxo de criação e filtro de tarefas por prioridade.",
      tech: ["Kotlin", "Android SDK", "MVVM", "Room Database", "Material Design 3"],
      icon: "kotlin",
      tone: "tech-kotlin",
      github: `${GITHUB}/kotlin-tasks-android`,
      image: "/screenshots/screen_task_list.png",
      screens: [
        "/screenshots/screen_task_list.png",
        "/screenshots/screen_create_task.png",
        "/screenshots/screen_filter_priority.png",
      ],
      distribution: "apk",
      badge: "DESTAQUE",
      featured: true,
    },
    {
      id: "proj-limpapp",
      title: "Limpapp — Marketplace de Limpeza (Kotlin · Android)",
      subtitle: "Projeto principal · Android nativo · Kotlin · Jetpack Compose · KMP",
      description:
        "Projeto principal em desenvolvimento: um app Android para conectar clientes a diaristas e profissionais de limpeza, com busca de prestadores, perfis e solicitação/agendamento de serviços planejados. As telas exibidas são mockups; o aplicativo ainda está sendo construído e não foi publicado em loja.",
      tech: ["Kotlin", "Android SDK", "Jetpack Compose", "KMP", "Marketplace", "Room (planejado)"],
      icon: "kotlin",
      tone: "tech-kotlin",
      github: "",
      image: "/mockups/mockup-limpapp.svg",
      distribution: "apk",
      badge: "EM CONSTRUÇÃO",
      featured: true,
    },
    {
      id: "proj-pixpay",
      title: "PixPay Wallet — Carteira Digital Android",
      subtitle: "Android Nativo · Kotlin · Compose · Biometria · Ktor · Segurança",
      description:
        "Protótipo de carteira digital nativa (ainda não publicado em loja) desenvolvido em Kotlin com Jetpack Compose: saldo e extrato de transações, área de transferências e pagamentos via PIX, autenticação por biometria (BiometricPrompt), criptografia local dos dados sensíveis e consumo de API REST com Ktor Client sob arquitetura MVVM.",
      tech: ["Kotlin", "Jetpack Compose", "Android SDK", "Biometria", "Ktor Client", "MVVM", "StateFlow"],
      icon: "kotlin",
      tone: "tech-kotlin",
      github: "",
      image: "/mockups/mockup-pixpay.svg",
      distribution: "apk",
      badge: "MOBILE",
      featured: false,
    },
    {
      id: "proj-notafacil",
      title: "NotaFácil — Leitor de Nota Fiscal com ML Kit",
      subtitle: "Android Nativo · Kotlin · ML Kit · CameraX · Room",
      description:
        "Protótipo Android em desenvolvimento que digitaliza notas fiscais: captura e detecção automática de QR Code / código de barras com ML Kit e CameraX, extração dos dados do emitente e do valor total, histórico offline com Room e exportação dos lançamentos. Ainda não publicado em loja.",
      tech: ["Kotlin", "Android SDK", "ML Kit", "CameraX", "Room", "Compose", "Coroutines"],
      icon: "kotlin",
      tone: "tech-kotlin",
      github: "",
      image: "/mockups/mockup-notafacil.svg",
      distribution: "apk",
      badge: "MOBILE",
      featured: false,
    },
    {
      id: "proj-habitflow",
      title: "HabitFlow — Hábitos, Rotinas e Lembretes",
      subtitle: "Android Nativo · Kotlin · Compose · Room · WorkManager",
      description:
        "App Android de acompanhamento de hábitos com streak diário, metas semanais e gráficos de progresso. Persistência local com Room, agendamento de notificações com WorkManager, Widget de tela inicial e tema dinâmico Material 3. Protótipo em desenvolvimento (fora de loja).",
      tech: ["Kotlin", "Jetpack Compose", "Room", "WorkManager", "Notificações", "Material 3"],
      icon: "kotlin",
      tone: "tech-kotlin",
      github: "",
      image: "/mockups/mockup-habitflow.svg",
      distribution: "apk",
      badge: "MOBILE",
      featured: false,
    },
    {
      id: "proj-chefexpress",
      title: "ChefExpress — App de Delivery em Compose",
      subtitle: "Android Nativo · Kotlin · MVVM · Compose · Carrinho",
      description:
        "Protótipo de aplicativo de delivery de restaurante: listagem de pratos, detalhes do produto, carrinho com cálculo de total, acompanhamento do pedido e navegação fluida com Navigation Compose. Arquitetura MVVM com ViewModels e StateFlow. Em desenvolvimento, fora de loja.",
      tech: ["Kotlin", "Jetpack Compose", "MVVM", "Navigation", "Retrofit", "Coil"],
      icon: "kotlin",
      tone: "tech-kotlin",
      github: "",
      image: "/mockups/mockup-chefexpress.svg",
      distribution: "apk",
      badge: "MOBILE",
      featured: false,
    },
    {
      id: "proj-climatemp",
      title: "ClimaTempo — Previsão do Tempo Android",
      subtitle: "Android Nativo · Kotlin · Retrofit · Geolocalização · MVVM",
      description:
        "Aplicativo Android de previsão do tempo consumindo API pública via Retrofit com cache local, geolocalização do usuário (GPS) e busca por cidade. Previsão para os próximos dias, dados de umidade e vento, tudo em UI declarativa com Jetpack Compose. Protótipo em desenvolvimento.",
      tech: ["Kotlin", "Jetpack Compose", "Retrofit", "Geolocalização", "MVVM", "Coroutines"],
      icon: "kotlin",
      tone: "tech-kotlin",
      github: "",
      image: "/mockups/mockup-climatemp.svg",
      distribution: "apk",
      badge: "MOBILE",
      featured: false,
    },
    {
      id: "proj-cryptopulse",
      title: "CryptoPulse — Cotações em Tempo Real",
      subtitle: "Android Nativo · Kotlin · Ktor Client · StateFlow · Compose",
      description:
        "App Android que acompanha cotações de criptomoedas em tempo real, com atualização periódica via Ktor Client, gráficos de variação, favoritos persistidos e estado reativo com StateFlow. Arquitetura MVVM + repositório. Protótipo em desenvolvimento, ainda fora de loja.",
      tech: ["Kotlin", "Jetpack Compose", "Ktor Client", "StateFlow", "MVVM", "Coroutines"],
      icon: "kotlin",
      tone: "tech-kotlin",
      github: "",
      image: "/mockups/mockup-cryptopulse.svg",
      distribution: "apk",
      badge: "MOBILE",
      featured: false,
    },
    {
      id: "proj-spring-api",
      title: "API CRUD — Java 21 & Spring Boot 3",
      subtitle: "Backend · Java 21 · Spring Boot 3 · OpenAPI/Swagger · PostgreSQL",
      description:
        "API RESTful de operações CRUD desenvolvida com Java 21 e Spring Boot 3. Repositório público documenta persistência PostgreSQL com Spring Data JPA, validação Bean Validation, documentação OpenAPI/Swagger e execução com Docker Compose.",
      tech: ["Java 21", "Spring Boot 3", "Spring Data JPA", "PostgreSQL", "OpenAPI 3", "Docker Compose"],
      icon: "spring",
      tone: "tech-spring",
      github: `${GITHUB}/spring-boot-swagger-crud`,
      badge: "API",
      featured: false,
    },
    {
      id: "proj-flutter-app",
      title: "FitPulse — App Multiplataforma com Flutter (Intermediário)",
      subtitle: "Multiplataforma · Flutter · Dart · Provider/Bloc · REST",
      description:
        "Aplicativo multiplataforma (Android + iOS) de acompanhamento fitness desenvolvido com Flutter e Dart: widgets customizados, gerenciamento de estado reativo com Provider/Bloc, consumo de APIs RESTful e navegação fluida. Código único para as duas plataformas — tecnologia complementar ao foco nativo Android/Kotlin.",
      tech: ["Flutter", "Dart", "Provider / Bloc", "REST APIs", "Multiplataforma"],
      icon: "flutter",
      tone: "tech-react",
      github: "",
      image: "/mockups/mockup-fitpulse.svg",
      badge: "LIVE",
      featured: false,
    },
    {
      id: "proj-react-native",
      title: "App Mobile em React Native (Básico)",
      subtitle: "Cross-Platform · React Native · Expo · TypeScript",
      description:
        "Entregas pontuais em React Native para clientes que precisam de uma única base de código JavaScript/TypeScript para lançamento ágil em lojas. Perfil complementar — a preferência técnica permanece no ecossistema nativo Android com Kotlin.",
      tech: ["React Native", "TypeScript", "Expo", "REST API"],
      icon: "react",
      tone: "tech-react",
      github: "",
      badge: "MOBILE",
      featured: false,
    },
    {
      id: "proj-ios-swift",
      title: "Aprendizado de Swift e iOS (em andamento)",
      subtitle: "Swift · fundamentos de iOS · SwiftUI em estudo · sem Mac/Xcode",
      description:
        "Estudo inicial dos fundamentos de Swift e do desenvolvimento iOS, com exploração conceitual de SwiftUI e interoperabilidade com Kotlin Multiplatform. Ainda sem Mac, não consigo executar o Xcode nem compilar ou testar aplicativos iOS; essa etapa depende de acesso a um Mac.",
      tech: ["Swift (em aprendizado)", "SwiftUI (estudo)", "iOS", "Sem Mac/Xcode"],
      icon: "swift",
      tone: "tech-actions",
      github: "",
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
        { name: "Suporte a Usuários", tone: "tech-kotlin" },
        { name: "Auditores Fiscais", tone: "tech-api" },
        { name: "Java EE / Spring", tone: "tech-java" },
        { name: "NFS-e / Tributos", tone: "tech-spring" },
        { name: "MySQL / Postgres", tone: "tech-postgres" },
        { name: "Linux", tone: "tech-linux" },
      ],
    },
    {
      id: "exp-freelance",
      company: "Desenvolvimento Mobile & Projetos Comerciais (Freelance)",
      role: "Desenvolvedor Mobile Android & Backend",
      period: "Períodos Intermitentes / Em Andamento",
      location: "Navegantes / SC & Remoto",
      description:
        "Desenvolvimento mobile com prioridade para Android nativo em Kotlin e Jetpack Compose. Projeto principal em andamento: Limpapp, marketplace planejado para conectar clientes a diaristas e profissionais de limpeza. Criação de protótipos de interface Android para projetos pequenos e integração com APIs Java/Spring. Estudos complementares em Flutter, React Native e Swift/iOS.",
      tags: [
        { name: "Kotlin", tone: "tech-kotlin" },
        { name: "Android", tone: "tech-kotlin" },
        { name: "Jetpack Compose", tone: "tech-kotlin" },
        { name: "KMP", tone: "tech-kotlin" },
        { name: "Flutter", tone: "tech-react" },
        { name: "Spring Boot 3", tone: "tech-spring" },
      ],
    },
  ],

  about: {
    summary:
      "Desenvolvedor Mobile com foco principal em Android Nativo com Kotlin (Android SDK, Jetpack Compose, MVVM, Coroutines, StateFlow, Room, Hilt) e arquitetura compartilhada com Kotlin Multiplatform (KMP). Perfil mobile com experiência real em aplicativos Android e integração com backend.\n\nPrioridades: 1º Android/Kotlin, 2º Backend Java 17/21+ com Spring Boot 3 e 3º Node.js/TypeScript. Como tecnologias complementares, Flutter (intermediário), React Native (básico), fundamentos de Swift/iOS em aprendizado e PHP (noções). Ainda sem Mac, não consigo executar o Xcode nem compilar/testar apps iOS.\n\nSólida vivência corporativa em sistemas de missão crítica para o setor público (PRODEB, SSP-BA) e municipal (EDZA), combinando desenvolvimento de software com suporte técnico especializado a Auditores Fiscais do Município e usuários corporativos.",
    objective:
      "Atuar como Desenvolvedor Android / Mobile (Kotlin, Jetpack Compose e KMP), aplicando Clean Architecture, MVVM, SOLID, persistência reativa e integração com APIs RESTful de alta performance na construção de aplicativos Android nativos robustos, fluidos e intuitivos.",
    skills: [
      { name: "Kotlin & Jetpack Compose (Android)", level: 92, color: "#7f52ff", icon: "kotlin" },
      { name: "Android SDK (MVVM, Coroutines, StateFlow, Room, Hilt)", level: 90, color: "#7f52ff", icon: "kotlin" },
      { name: "Kotlin Multiplatform (KMP)", level: 84, color: "#7f52ff", icon: "kotlin" },
      { name: "Java 17 / 21+ & Spring Boot 3", level: 90, color: "#6db33f", icon: "spring" },
      { name: "APIs RESTful & Swagger/OpenAPI 3", level: 92, color: "#6db33f", icon: "swagger" },
      { name: "Node.js & TypeScript (3º foco)", level: 70, color: "#339933", icon: "node" },
      { name: "Flutter & Dart (Intermediário)", level: 75, color: "#02569b", icon: "flutter" },
      { name: "React Native (Básico)", level: 62, color: "#61dafb", icon: "react" },
      { name: "Swift / iOS (em aprendizado; ainda sem Mac/Xcode)", level: 35, color: "#f05138", icon: "swift" },
      { name: "PostgreSQL & MySQL", level: 90, color: "#336791", icon: "postgres" },
      { name: "Clean Architecture & MVVM", level: 90, color: "#7f52ff", icon: "kotlin" },
      { name: "PHP (Noções básicas / legados)", level: 32, color: "#777bb4", icon: "php" },
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
      "Kotlin Multiplatform",
      "Room Database",
      "Hilt · Koin",
      "Flutter & Dart",
      "Spring Boot 3",
      "Node.js",
      "PostgreSQL",
      "Docker",
    ],
  },

  stack: [
    { id: "s-kotlin", name: "Kotlin (Android Nativo)", icon: "kotlin", tone: "tech-kotlin", level: 92 },
    { id: "s-compose", name: "Jetpack Compose", icon: "kotlin", tone: "tech-kotlin", level: 90 },
    { id: "s-kmp", name: "Kotlin Multiplatform (KMP)", icon: "kotlin", tone: "tech-kotlin", level: 84 },
    { id: "s-android", name: "Android SDK · MVVM · Room · Hilt", icon: "kotlin", tone: "tech-kotlin", level: 90 },
    { id: "s-java", name: "Java 17 / 21+", icon: "java", tone: "tech-java", level: 90 },
    { id: "s-spring", name: "Spring Boot 3", icon: "spring", tone: "tech-spring", level: 90 },
    { id: "s-node", name: "Node.js & Express", icon: "node", tone: "tech-node", level: 70 },
    { id: "s-flutter", name: "Flutter (Intermediário)", icon: "flutter", tone: "tech-react", level: 75 },
    { id: "s-react-native", name: "React Native (Básico)", icon: "react", tone: "tech-react", level: 62 },
    { id: "s-swift", name: "iOS / Swift (Noções)", icon: "swift", tone: "tech-actions", level: 42 },
    { id: "s-postgres", name: "PostgreSQL & MySQL", icon: "postgres", tone: "tech-postgres", level: 90 },
    { id: "s-docker", name: "Docker & CI/CD", icon: "docker", tone: "tech-docker", level: 84 },
    { id: "s-php", name: "PHP (Noções básicas)", icon: "php", tone: "tech-php", level: 32 },
  ],
};
