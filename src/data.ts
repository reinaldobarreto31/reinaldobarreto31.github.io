export interface Project {
  id: string;
  title: string;
  tagline: { pt: string; en: string };
  description: { pt: string; en: string };
  techs: string[];
  links: { github?: string; demo?: string };
  highlight?: boolean;
}

export interface Experience {
  id: string;
  company: string;
  role: { pt: string; en: string };
  period: string;
  description: { pt: string; en: string };
  techs: string[];
}

export interface SkillCategory {
  id: string;
  title: { pt: string; en: string };
  iconName: string;
  skills: string[];
}

export interface PortfolioData {
  profile: {
    name: string;
    role: { pt: string; en: string };
    location: { pt: string; en: string };
    email: string;
    phone: string;
    github: string;
    linkedin: string;
    avatarUrl: string;
  };
  summary: { pt: string; en: string };
  experiences: Experience[];
  projects: Project[];
  skills: SkillCategory[];
}

export const portfolioData: PortfolioData = {
  profile: {
    name: "Reinaldo Barreto",
    role: {
      pt: "Software Engineer (Full-Cycle / Ruby on Rails)",
      en: "Full-Cycle Software Engineer (Ruby on Rails)"
    },
    location: {
      pt: "Navegantes - SC, Brasil (Disponível para Remoto)",
      en: "Navegantes - SC, Brazil (Available for Remote)"
    },
    email: "reinaldobarretosilva@gmail.com",
    phone: "+55 47 98830-2308",
    github: "https://github.com/reinaldobarreto31",
    linkedin: "https://linkedin.com/in/reinaldo-barreto-da-silva-2a4ba2116",
    avatarUrl: "https://github.com/reinaldobarreto31.png"
  },
  summary: {
    pt: "Engenheiro de Software Full-Cycle com sólida trajetória no desenvolvimento de sistemas corporativos de alta criticidade e performance. Especialista no ecossistema Ruby on Rails, Ruby 3, PostgreSQL, RSpec, Sidekiq e Docker, com forte domínio de arquitetura MVC/API, serviços assíncronos e ecossistema React / Next.js. Experiência em modernização de sistemas governamentais e empresariais, auditoria, segurança (OAuth2, Devise, JWT) e resiliência de dados.",
    en: "Full-Cycle Software Engineer with a solid track record in developing high-criticality and high-performance enterprise systems. Specialist in the Ruby on Rails ecosystem, Ruby 3, PostgreSQL, RSpec, Sidekiq, and Docker, with strong domain expertise in MVC/API architecture, asynchronous jobs, and React / Next.js ecosystem."
  },
  experiences: [
    {
      id: "prodeb",
      company: "PRODEB (Bahia)",
      role: {
        pt: "Analista de Sistemas e Desenvolvedor (Consultor IV)",
        en: "Systems Analyst & Developer (Consultant IV)"
      },
      period: "03/2024 - 09/2024",
      description: {
        pt: "Desenvolvimento e manutenção de soluções web e back-end para órgãos públicos estaduais. Utilização de Ruby on Rails, APIs RESTful, PostgreSQL e Vue.js na construção e otimização de sistemas. Colaboração na arquitetura e implementação de soluções de backend escaláveis e seguras para o Governo do Estado da Bahia, otimizando fluxos de automação para modernização de sistemas públicos.",
        en: "Development and maintenance of web and back-end solutions for state public agencies. Utilization of Ruby on Rails, RESTful APIs, PostgreSQL, and Vue.js in system construction and optimization."
      },
      techs: ["Ruby on Rails", "Ruby", "PostgreSQL", "RSpec", "Sidekiq", "APIs RESTful", "Automação"]
    },
    {
      id: "lampp",
      company: "LAMPP IT Solutions",
      role: {
        pt: "Analista de Sistemas e Desenvolvedor de Software",
        en: "Systems Analyst & Software Developer"
      },
      period: "03/2022 - 05/2022",
      description: {
        pt: "Construção de APIs REST robustas e seguras com Ruby on Rails, integrando front-ends em React.js e Angular. Atuação direta na integração de sistemas críticos para a Secretaria de Segurança Pública da Bahia (SSP-BA) e Polícia Militar (PM). Desenvolvimento e auditoria do Sistema de Auditoria Interna, garantindo estrita integridade dos dados e conformidade com autenticação segura.",
        en: "Construction of robust and secure REST APIs with Ruby on Rails, integrating React.js and Angular front-ends."
      },
      techs: ["Ruby on Rails", "Ruby", "Devise", "JWT", "React.js", "PostgreSQL", "Segurança Pública"]
    },
    {
      id: "edza",
      company: "EDZA Planejamento Consultoria e Informática",
      role: {
        pt: "Analista de Sistemas e Desenvolvedor de Software",
        en: "Systems Analyst & Software Developer"
      },
      period: "11/2019 - 03/2022",
      description: {
        pt: "Desenvolvimento de soluções de backend robustas em Ruby on Rails e Web APIs para ERP Municipal de gestão pública (Tributário, Saúde, RH, Nota Fiscal Eletrônica), atendendo prefeituras de Ilhéus, Juazeiro, Candeias, Porto Seguro, Lauro de Freitas. Criação de APIs REST com integrações complexas de front-end. Administração de servidores Linux/Windows.",
        en: "Development of robust backend solutions in Ruby on Rails for municipal ERP in public management."
      },
      techs: ["Ruby on Rails", "Ruby", "PostgreSQL", "Angular", "Vue.js", "Linux/Windows", "ERP"]
    }
  ],
  projects: [
    {
      id: "railshub",
      title: "RailsHub",
      tagline: {
        pt: "Plataforma de Microsserviços e Gestão Rails 7 API",
        en: "Rails 7 API Microservices & Management Platform"
      },
      description: {
        pt: "Plataforma completa em Ruby on Rails 7 e Ruby 3 com arquitetura limpa, Sidekiq para jobs assíncronos, Redis, RSpec para suíte de testes e banco PostgreSQL com Docker Compose.",
        en: "Complete Ruby on Rails 7 platform with clean architecture, Sidekiq, Redis, RSpec, and PostgreSQL with Docker Compose."
      },
      techs: ["Ruby on Rails", "Ruby 3", "PostgreSQL", "RSpec", "Sidekiq", "Redis", "Docker"],
      links: {
        github: "https://github.com/reinaldobarreto31/railshub",
        demo: "https://reinaldobarreto31.github.io/railshub/"
      },
      highlight: true
    },
    {
      id: "rails-swagger-crud",
      title: "Rails Swagger CRUD API",
      tagline: {
        pt: "API RESTful Rails com Documentação Swagger / OpenAPI 3",
        en: "Rails RESTful API with Swagger / OpenAPI 3 Documentation"
      },
      description: {
        pt: "API RESTful robusta desenvolvida em Ruby on Rails 7 com rswag para geração automática de documentação Swagger UI interativa, autenticação JWT via Devise e testes de integração com RSpec.",
        en: "Robust RESTful API in Ruby on Rails 7 with rswag Swagger UI, JWT Devise auth, and RSpec integration tests."
      },
      techs: ["Ruby on Rails", "Swagger UI", "Devise", "JWT", "RSpec", "PostgreSQL"],
      links: {
        github: "https://github.com/reinaldobarreto31/rails-swagger-crud",
        demo: "https://reinaldobarreto31.github.io/rails-swagger-crud/"
      },
      highlight: true
    },
    {
      id: "stockwise",
      title: "StockWise",
      tagline: {
        pt: "Controle de Estoque Inteligente",
        en: "Intelligent Inventory Control"
      },
      description: {
        pt: "Plataforma avançada de controle e gestão de estoque corporativo de alto desempenho. Backend API em Rails e painel administrativo reativo com React e Tailwind CSS.",
        en: "Advanced enterprise inventory management platform with Rails backend API and React dashboard."
      },
      techs: ["Ruby on Rails", "React", "PostgreSQL", "Docker", "Tailwind CSS"],
      links: {
        github: "https://github.com/reinaldobarreto31/stockwise",
        demo: "https://reinaldobarreto31.github.io/stockwise/"
      }
    }
  ],
  skills: [
    {
      id: "backend",
      title: { pt: "Backend & Linguagens", en: "Backend & Languages" },
      iconName: "Code",
      skills: ["Ruby on Rails", "Ruby 3", "RSpec", "Sidekiq", "Node.js", "Express", "TypeScript", "Python"]
    },
    {
      id: "devops",
      title: { pt: "DevOps & Infraestrutura", en: "DevOps & Infrastructure" },
      iconName: "Terminal",
      skills: ["Docker", "Docker Compose", "CI/CD Pipelines", "GitHub Actions", "Linux / Shell Scripting", "Nginx", "Redis"]
    },
    {
      id: "security",
      title: { pt: "Segurança & Dados", en: "Security & Data" },
      iconName: "Shield",
      skills: ["PostgreSQL", "SQLite", "Devise", "JWT", "OAuth2", "Criptografia", "Auditoria de Sistemas"]
    },
    {
      id: "frontend",
      title: { pt: "Frontend & Web", en: "Frontend & Web" },
      iconName: "Globe",
      skills: ["React 18", "Next.js", "Vue.js", "Tailwind CSS", "Hotwire / Stimulus", "HTML5 & CSS3"]
    }
  ]
};
