import { motion } from "framer-motion";
import { TerminalSquare, Briefcase } from "lucide-react";

export function ExperienceSection() {
  const experiences = [
    {
      company: "PRODEB — Companhia de Processamento de Dados da Bahia",
      role: "Desenvolvedor Full Stack — Servidor Público",
      period: "mar/2024 – set/2024",
      location: "Salvador/BA",
      description:
        "Desenvolvimento e manutenção de sistemas web para órgãos estaduais utilizando Vue.js no front-end e Spring Boot (Java) no back-end. Construção de APIs RESTful seguras com autenticação e versionamento via Git. Colaboração em equipes ágeis (Scrum) com entrega contínua. Ambiente híbrido: Linux Ubuntu como primário e Windows no suporte.",
      tags: ["Vue.js", "Spring Boot", "Java", "APIs REST", "PostgreSQL", "Git", "Scrum", "Linux Ubuntu", "Windows"],
    },
    {
      company: "LAMPP IT Solutions",
      role: "Desenvolvedor Full Stack",
      period: "mar/2022 – mai/2022",
      location: "Salvador/BA",
      description:
        "Desenvolvimento de aplicações web com Ruby on Rails no back-end (Projeto PIT — sistema interno de laboratório) com ActiveRecord, Devise e PostgreSQL. Front-end em Angular 2+. Participação em projetos de segurança pública com Node.js e integração de APIs REST com bancos de dados relacionais. Foco em autenticação segura e arquitetura responsiva. Ambiente Linux Ubuntu.",
      tags: ["Ruby on Rails", "Angular", "Node.js", "APIs REST", "PostgreSQL", "Devise", "Linux Ubuntu"],
    },
    {
      company: "EDZA Planejamento Consultoria e Informática LTDA",
      role: "Desenvolvedor Full Stack",
      period: "nov/2019 – mar/2022",
      location: "Salvador/BA",
      description:
        "Desenvolvimento de sistemas administrativos internos para prefeituras: módulos de RH, Tributário e Contábil. Front-end com Angular e Vue.js; back-end em Java EE, JSP e JavaScript/TypeScript com jQuery. Integração de APIs REST e manutenção de sistemas legados. Scripts de automação em Bash (Linux Ubuntu). Suporte técnico e administração de redes. Ambiente Linux Ubuntu e Windows.",
      tags: ["Angular", "Vue.js", "JavaScript", "TypeScript", "Java EE", "jQuery", "MySQL", "Bash Script", "Linux Ubuntu", "Redes"],
    },
  ];

  return (
    <section id="experience" className="py-24 relative border-y border-border">
      {/* Train track motif */}
      <div className="absolute left-4 md:left-1/2 md:-translate-x-1/2 top-0 bottom-0 w-8 flex flex-col items-center opacity-20 pointer-events-none">
        <div className="w-0.5 h-full bg-border absolute" />
        <div className="w-0.5 h-full bg-border absolute ml-4" />
        {Array.from({ length: 30 }).map((_, i) => (
          <div key={i} className="w-full h-1 bg-border my-6" />
        ))}
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold tracking-tighter inline-flex items-center gap-3 bg-background px-4">
            <Briefcase className="text-primary" />
            Experiência_Profissional
          </h2>
        </div>

        <div className="max-w-3xl mx-auto space-y-12">
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-card border border-border p-6 rounded-lg shadow-md relative group hover:border-primary/50 transition-colors"
            >
              {/* Connector dot */}
              <div className="hidden md:block absolute top-1/2 -translate-y-1/2 -left-12 w-4 h-4 rounded-full border-2 border-primary bg-background group-hover:bg-primary transition-colors" />

              <div className="flex flex-col md:flex-row md:items-start justify-between mb-4 gap-2 border-b border-border/50 pb-4">
                <div>
                  <h3 className="text-lg font-bold text-foreground flex items-center gap-2">
                    <TerminalSquare size={16} className="text-muted-foreground shrink-0" />
                    {exp.company}
                  </h3>
                  <p className="text-primary font-mono text-sm mt-1">{exp.role}</p>
                </div>
                <div className="flex flex-col md:items-end text-sm text-muted-foreground font-mono shrink-0">
                  <span>{exp.period}</span>
                  <span>{exp.location}</span>
                </div>
              </div>

              <p className="text-muted-foreground text-sm font-sans leading-relaxed mb-4">
                {exp.description}
              </p>

              {exp.tags && (
                <div className="flex flex-wrap gap-2 pt-2 border-t border-border/30">
                  {exp.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-2 py-0.5 bg-background border border-border rounded text-[10px] font-mono text-muted-foreground"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
