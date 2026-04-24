import {
  SiJava, SiGo, SiKotlin, SiCplusplus, SiCsharp, SiPhp, SiPython, SiJavascript, SiTypescript,
  SiSpringboot, SiSpring, SiSpringsecurity, SiHibernate, SiNodedotjs, SiNestjs, SiNextdotjs, SiReact, SiAngular, SiVuedotjs,
  SiPostgresql, SiMysql, SiOracle, SiMicrosoftsqlserver,
  SiDocker, SiKubernetes, SiGit, SiJenkins, SiGithubactions, SiAmazonaws, SiMicrosoftazure, SiGooglecloud, SiSonarqube,
  SiKeycloak, SiJunit5, SiRabbitmq, SiApachekafka
} from "react-icons/si";

export const portfolioData = {
  profile: {
    name: "Reinaldo Barreto da Silva",
    email: "reinaldobarretosilva@gmail.com",
    phone: "+55 47 98830-2308",
    location: "Navegantes, SC, Brazil",
    github: "reinaldobarreto31",
    linkedin: "reinaldo-barreto-2a4ba2116",
  },
  stats: {
    years: 5,
    projects: 10,
    technologies: 25
  },
  skills: {
    software: [
      {
        category: "Languages",
        items: [
          { name: "Java", icon: SiJava, level: 95 },
          { name: "Go", icon: SiGo, level: 85 },
          { name: "Kotlin", icon: SiKotlin, level: 80 },
          { name: "Python", icon: SiPython, level: 80 },
          { name: "TypeScript", icon: SiTypescript, level: 90 },
          { name: "JavaScript", icon: SiJavascript, level: 90 },
          { name: "C/C++", icon: SiCplusplus, level: 70 },
          { name: "C#", icon: SiCsharp, level: 75 },
          { name: "PHP", icon: SiPhp, level: 70 }
        ]
      },
      {
        category: "Frameworks & Libraries",
        items: [
          { name: "Spring Boot", icon: SiSpringboot, level: 95 },
          { name: "Spring Cloud", icon: SiSpring, level: 90 },
          { name: "React", icon: SiReact, level: 85 },
          { name: "Node.js", icon: SiNodedotjs, level: 85 },
          { name: "NestJS", icon: SiNestjs, level: 80 },
          { name: "Next.js", icon: SiNextdotjs, level: 80 },
          { name: "Vue.js", icon: SiVuedotjs, level: 75 },
          { name: "Angular", icon: SiAngular, level: 70 },
        ]
      },
      {
        category: "Databases",
        items: [
          { name: "PostgreSQL", icon: SiPostgresql, level: 90 },
          { name: "MySQL", icon: SiMysql, level: 85 },
          { name: "Oracle", icon: SiOracle, level: 75 },
          { name: "SQL Server", icon: SiMicrosoftsqlserver, level: 75 }
        ]
      },
      {
        category: "DevOps & Cloud",
        items: [
          { name: "Docker", icon: SiDocker, level: 90 },
          { name: "Kubernetes", icon: SiKubernetes, level: 85 },
          { name: "AWS", icon: SiAmazonaws, level: 80 },
          { name: "Azure", icon: SiMicrosoftazure, level: 75 },
          { name: "GCP", icon: SiGooglecloud, level: 70 },
          { name: "Jenkins", icon: SiJenkins, level: 85 },
          { name: "GitHub Actions", icon: SiGithubactions, level: 85 },
          { name: "SonarQube", icon: SiSonarqube, level: 80 }
        ]
      },
      {
        category: "Architecture & Messaging",
        items: [
          { name: "RabbitMQ", icon: SiRabbitmq, level: 85 },
          { name: "Kafka", icon: SiApachekafka, level: 80 },
          { name: "Microservices", level: 90 },
          { name: "Clean Architecture", level: 90 },
          { name: "DDD", level: 85 }
        ]
      }
    ],
    hardware: [
      "Linux Administration (Debian/Zorin OS)",
      "Windows 11 Pro",
      "Virtualization",
      "Networks",
      "N3 Support",
      "Hardware Maintenance",
      "24/7 Server Availability"
    ],
    education: [
      {
        degree: "CST Análise e Desenvolvimento de Sistemas",
        institution: "Centro Universitário Jorge Amado (UNIJORGE)",
        period: "2021-2023"
      },
      {
        degree: "Técnico em Administração",
        institution: "CEEP Newton Sucupira",
        period: "1994-1996"
      }
    ],
    certifications: [
      "Java/Kotlin (Udemy)",
      "REST APIs Spring Boot (Udemy)",
      "Spring Cloud Microservices (Udemy)",
      "JUnit/Mockito TDD (Udemy)",
      "Docker/Kubernetes (Udemy)",
      "Android Kotlin/Java (Udemy)"
    ]
  },
  experiences: [
    {
      company: "PRODEB",
      role: "Analista de Sistemas e Desenvolvedor (Consultor IV)",
      period: "Mar/2024 – Set/2024",
      description: "State government systems development.",
      techs: ["Java", "Spring Boot", "Java EE", "Struts", "JSP", "Vue.js"]
    },
    {
      company: "LAMPP IT Solutions",
      role: "Analista de Sistemas e Desenvolvedor de Software",
      period: "Mar/2022 – Mai/2022",
      description: "Security systems for SSP-BA and Polícia Militar, internal audit systems.",
      techs: ["Spring Boot", "REST APIs", "OAuth2"]
    },
    {
      company: "EDZA Planejamento Consultoria e Informática",
      role: "Analista de Sistemas e Desenvolvedor de Software",
      period: "Nov/2019 – Mar/2022",
      description: "Municipal ERP (Tributário, Saúde, RH, NFe) for multiple cities. Linux/Windows infra admin.",
      techs: ["Java", "Spring Boot", "Linux", "Windows Server"]
    }
  ],
  projects: [
    {
      id: "stockwise",
      title: "StockWise",
      description: "Inventory Control System",
      techs: ["Go", "React", "PostgreSQL"],
      image: "/project-1.png",
      github: "https://github.com/reinaldobarreto31/stockwise"
    },
    {
      id: "api-cadastro",
      title: "User Management API",
      description: "REST API JWT + CRUD",
      techs: ["Spring Boot", "PostgreSQL", "JWT"],
      image: "/project-2.png",
      github: "https://github.com/reinaldobarreto31/api-cadastro"
    },
    {
      id: "app-android",
      title: "Task Management App",
      description: "Android Kotlin app with real-time synchronization",
      techs: ["Kotlin", "Android", "Firebase"],
      image: "/project-3.png",
      github: "https://github.com/reinaldobarreto31/app-android"
    }
  ]
};
