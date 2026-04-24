export const translations = {
  pt: {
    nav: {
      about: "Sobre",
      skills: "Habilidades",
      experience: "Experiência",
      projects: "Projetos",
      dashboard: "SRE Dashboard",
      contact: "Contato"
    },
    hero: {
      role: "Engenheiro de Software | DevOps & SRE | Full Stack",
      tagline: "Construindo sistemas críticos com precisão e resiliência.",
      contact: "Fale Comigo",
      cv: "Baixar CV"
    },
    about: {
      title: "Sobre Mim",
      summary: "Engenheiro de Software sênior especializado em sistemas críticos para o setor público brasileiro. Com mais de 5 anos de experiência, foco na construção de aplicações escaláveis, seguras e de alta disponibilidade usando Java, Go, React e Kubernetes. Meu objetivo é garantir que a infraestrutura e o software funcionem em perfeita harmonia.",
      stats: {
        experience: "Anos de Experiência",
        projects: "Projetos Entregues",
        techs: "Tecnologias Dominadas"
      }
    },
    skills: {
      title: "Habilidades Técnicas",
      software: "Software & Desenvolvimento",
      hardware: "Hardware & Infraestrutura",
      education: "Educação & Certificações",
      fluent: "Fluente",
      intermediate: "Intermediário",
      basic: "Básico"
    },
    experience: {
      title: "Experiência Profissional"
    },
    projects: {
      title: "Projetos em Destaque",
      view: "Ver Projeto",
      github: "Código Fonte"
    },
    dashboard: {
      title: "SRE Dashboard",
      status: "Status do Sistema",
      uptime: "Uptime",
      responseTime: "Tempo de Resposta",
      cpu: "Uso de CPU",
      memory: "Uso de Memória",
      requests: "Requisições / seg"
    },
    contact: {
      title: "Contato",
      name: "Nome",
      email: "E-mail",
      message: "Mensagem",
      send: "Enviar Mensagem",
      success: "Mensagem enviada com sucesso!",
      error: "Erro ao enviar a mensagem. Tente novamente mais tarde."
    },
    footer: {
      copyright: "© 2026 Reinaldo Barreto da Silva. Todos os direitos reservados."
    }
  },
  en: {
    nav: {
      about: "About",
      skills: "Skills",
      experience: "Experience",
      projects: "Projects",
      dashboard: "SRE Dashboard",
      contact: "Contact"
    },
    hero: {
      role: "Software Engineer | DevOps & SRE | Full Stack",
      tagline: "Building critical systems with precision and resilience.",
      contact: "Get in Touch",
      cv: "Download CV"
    },
    about: {
      title: "About Me",
      summary: "Senior Software Engineer specializing in critical systems for the Brazilian public sector. With over 5 years of experience, I focus on building scalable, secure, and highly available applications using Java, Go, React, and Kubernetes. My goal is to ensure infrastructure and software work in perfect harmony.",
      stats: {
        experience: "Years Experience",
        projects: "Projects Delivered",
        techs: "Technologies Mastered"
      }
    },
    skills: {
      title: "Technical Skills",
      software: "Software & Development",
      hardware: "Hardware & Infrastructure",
      education: "Education & Certifications",
      fluent: "Fluent",
      intermediate: "Intermediate",
      basic: "Basic"
    },
    experience: {
      title: "Professional Experience"
    },
    projects: {
      title: "Featured Projects",
      view: "View Project",
      github: "Source Code"
    },
    dashboard: {
      title: "SRE Dashboard",
      status: "System Status",
      uptime: "Uptime",
      responseTime: "Response Time",
      cpu: "CPU Usage",
      memory: "Memory Usage",
      requests: "Requests / sec"
    },
    contact: {
      title: "Contact",
      name: "Name",
      email: "Email",
      message: "Message",
      send: "Send Message",
      success: "Message sent successfully!",
      error: "Error sending message. Please try again later."
    },
    footer: {
      copyright: "© 2026 Reinaldo Barreto da Silva. All rights reserved."
    }
  },
  es: {
    nav: {
      about: "Sobre Mí",
      skills: "Habilidades",
      experience: "Experiencia",
      projects: "Proyectos",
      dashboard: "SRE Dashboard",
      contact: "Contacto"
    },
    hero: {
      role: "Ingeniero de Software | DevOps & SRE | Full Stack",
      tagline: "Construyendo sistemas críticos con precisión y resiliencia.",
      contact: "Contáctame",
      cv: "Descargar CV"
    },
    about: {
      title: "Sobre Mí",
      summary: "Ingeniero de Software senior especializado en sistemas críticos para el sector público brasileño. Con más de 5 años de experiencia, me enfoco en construir aplicaciones escalables, seguras y de alta disponibilidad usando Java, Go, React y Kubernetes. Mi objetivo es asegurar que la infraestructura y el software funcionen en perfecta armonía.",
      stats: {
        experience: "Años de Experiencia",
        projects: "Proyectos Entregados",
        techs: "Tecnologías Dominadas"
      }
    },
    skills: {
      title: "Habilidades Técnicas",
      software: "Software y Desarrollo",
      hardware: "Hardware e Infraestructura",
      education: "Educación y Certificaciones",
      fluent: "Fluido",
      intermediate: "Intermedio",
      basic: "Básico"
    },
    experience: {
      title: "Experiencia Profesional"
    },
    projects: {
      title: "Proyectos Destacados",
      view: "Ver Proyecto",
      github: "Código Fuente"
    },
    dashboard: {
      title: "SRE Dashboard",
      status: "Estado del Sistema",
      uptime: "Uptime",
      responseTime: "Tiempo de Respuesta",
      cpu: "Uso de CPU",
      memory: "Uso de Memoria",
      requests: "Peticiones / seg"
    },
    contact: {
      title: "Contacto",
      name: "Nombre",
      email: "Correo",
      message: "Mensaje",
      send: "Enviar Mensaje",
      success: "¡Mensaje enviado con éxito!",
      error: "Error al enviar el mensaje. Inténtelo de nuevo más tarde."
    },
    footer: {
      copyright: "© 2026 Reinaldo Barreto da Silva. Todos los derechos reservados."
    }
  }
};

export type Language = "pt" | "en" | "es";
export type TranslationKey = keyof typeof translations.pt;
