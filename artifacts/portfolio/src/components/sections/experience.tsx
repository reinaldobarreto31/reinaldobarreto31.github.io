import { motion } from "framer-motion";
import { TerminalSquare, Briefcase } from "lucide-react";
import { SiSpring, SiKotlin } from "react-icons/si";
import { Coffee } from "lucide-react";

export function ExperienceSection() {
  const experiences = [
    {
      company: "PRODEB — Companhia de Processamento de Dados da Bahia",
      role: "Analista de Sistemas e Desenvolvedor (Consultor IV)",
      period: "mar/2024 – set/2024",
      location: "Salvador/BA",
      description:
        "Desenvolvimento e manutenção de soluções web e back-end para órgãos públicos estaduais. Utilização de Java, Spring Boot, Java EE, Struts JSP e Vue.js na construção e otimização de sistemas. Desenvolvimento de soluções backend escaláveis em Java e Spring Boot para o Governo do Estado da Bahia. Otimização de arquitetura e implementação de fluxos de automação para modernização de sistemas públicos. Colaboração na arquitetura e implementação de funcionalidades complexas em squads Scrum.",
      tags: ["Java", "Spring Boot", "Java EE", "Vue.js", "APIs REST", "PostgreSQL", "Git", "Scrum", "Linux Ubuntu"],
    },
    {
      company: "LAMPP IT Solutions",
      role: "Analista de Sistemas e Desenvolvedor de Software",
      period: "mar/2022 – mai/2022",
      location: "Salvador/BA",
      description:
        "Construção de APIs REST com Spring Boot, Java EE, JSP, Struts, JSF e desenvolvimento de Front-end em Angular 2+ e React.js. Foco em integração de sistemas e autenticação com OAuth2 e Spring Security. Desenvolvimento de sistemas críticos para a Secretaria de Segurança Pública (SSP-BA) e Polícia Militar (PM-BA). Atuação direta no Sistema de Auditoria Interna, garantindo integridade de dados e conformidade com normas de segurança. Implementação de APIs REST seguras com Spring Security e OAuth2.",
      tags: ["Java", "Spring Boot", "Spring Security", "OAuth2", "Angular", "React.js", "APIs REST", "PostgreSQL", "Linux Ubuntu"],
    },
    {
      company: "EDZA Planejamento Consultoria e Informática LTDA",
      role: "Analista de Sistemas e Desenvolvedor de Software",
      period: "nov/2019 – mar/2022",
      location: "Salvador/BA",
      description:
        "Desenvolvimento de soluções backend em Java EE, JSP, Struts e Spring Boot para sistemas de gestão pública municipal (tributário, contábil, RH). Evolução do ERP Municipal (Módulos: Tributário, Saúde, RH e Nota Fiscal Eletrônica) para prefeituras de Ilhéus, Juazeiro, Candeias, Porto Seguro e Lauro de Freitas. Criação e manutenção de APIs REST, integrando com frontend em Angular e Vue.js. Infraestrutura & DevOps: administração de servidores Linux/Windows e disponibilidade 24/7. Colaboração em equipes ágeis Scrum.",
      tags: ["Java EE", "Spring Boot", "Angular", "Vue.js", "JavaScript", "MySQL", "Bash Script", "Linux Ubuntu", "APIs REST"],
    },
  ];

  const SPRING_TAGS = new Set(["Spring Boot", "Spring Security", "Spring Cloud", "OAuth2"]);
  const JAVA_TAGS   = new Set(["Java", "Java EE"]);
  const KOTLIN_TAGS = new Set(["Kotlin"]);

  return (
    <section id="experience" className="py-24 relative border-y border-border">
      {/* Car track motif — circuit lines */}
      <div className="absolute left-4 md:left-1/2 md:-translate-x-1/2 top-0 bottom-0 w-8 flex flex-col items-center opacity-10 pointer-events-none">
        <div className="w-0.5 h-full bg-primary absolute" />
        <div className="w-0.5 h-full bg-primary absolute ml-4" />
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
              <div className="hidden md:block absolute top-1/2 -translate-y-1/2 -left-12 w-4 h-4 rounded-full border-2 border-primary bg-background group-hover:bg-primary transition-colors shadow-[0_0_8px_rgba(109,179,63,0.4)]" />

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
                  {exp.tags.map((tag) =>
                    SPRING_TAGS.has(tag) ? (
                      <span key={tag} className="tag-spring inline-flex items-center gap-1.5 px-2.5 py-1 bg-background border rounded text-[10px] font-mono font-bold transition-all hover:scale-105">
                        <SiSpring className="text-green-400 text-xs project-icon-orb" />
                        {tag}
                      </span>
                    ) : JAVA_TAGS.has(tag) ? (
                      <span key={tag} className="tag-java inline-flex items-center gap-1.5 px-2.5 py-1 bg-background border rounded text-[10px] font-mono font-bold transition-all hover:scale-105">
                        <Coffee className="text-orange-400 text-xs" size={10} />
                        {tag}
                      </span>
                    ) : KOTLIN_TAGS.has(tag) ? (
                      <span key={tag} className="tag-kotlin inline-flex items-center gap-1.5 px-2.5 py-1 bg-background border rounded text-[10px] font-mono font-bold transition-all hover:scale-105">
                        <SiKotlin className="text-purple-400 text-xs project-icon-orb-kotlin" />
                        {tag}
                      </span>
                    ) : (
                      <span key={tag} className="px-2 py-0.5 bg-background border border-border rounded text-[10px] font-mono text-muted-foreground">
                        {tag}
                      </span>
                    )
                  )}
                </div>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
