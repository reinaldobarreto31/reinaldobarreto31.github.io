import { motion } from "framer-motion";
import { BriefcaseBusiness, MapPin, CalendarDays } from "lucide-react";
import {
  SiJava, SiJavascript, SiVueDotJs, SiPostgresql, SiGit, SiRuby,
  SiRubyonrails, SiAngular, SiReact, SiLinux, SiMysql, SiGnubash
} from "react-icons/si";

const experiences = [
  {
    company: "PRODEB — Companhia de Processamento de Dados da Bahia",
    role: "Analista de Sistemas e Desenvolvedor · Consultor IV",
    period: "mar/2024 – set/2024",
    location: "Salvador / BA",
    description:
      "Desenvolvimento e manutenção de APIs REST e soluções web para órgãos públicos do Governo da Bahia. Arquitetura RESTful escalável com separação de camadas (controller / service / repository) — padrões diretamente alinhados ao desenvolvimento em Ruby on Rails. Frontend em Vue.js. Entregas em Scrum.",
    tags: [
      { name: "Java", icon: SiJava, tone: "tech-java" },
      { name: "APIs REST", icon: SiJavascript, tone: "tech-api" },
      { name: "Vue.js", icon: SiVueDotJs, tone: "tech-vue" },
      { name: "PostgreSQL", icon: SiPostgresql, tone: "tech-postgres" },
      { name: "Git", icon: SiGit, tone: "tech-git" },
      { name: "Scrum", icon: SiRubyonrails, tone: "tech-rails" },
    ],
  },
  {
    company: "LAMPP IT Solutions",
    role: "Analista de Sistemas e Desenvolvedor de Software",
    period: "mar/2022 – mai/2022",
    location: "Salvador / BA",
    description:
      "APIs REST seguras para sistemas críticos da SSP BA e PM BA. Módulo de controle de acesso do Sistema de Auditoria Interna prototipado em Ruby on Rails, demonstrando viabilidade da stack para sistemas de alta criticidade. Autenticação OAuth2. Frontend em Angular e React.js.",
    tags: [
      { name: "Ruby", icon: SiRuby, tone: "tech-ruby" },
      { name: "Rails", icon: SiRubyonrails, tone: "tech-rails" },
      { name: "OAuth2", icon: SiJavascript, tone: "tech-jwt" },
      { name: "Angular", icon: SiAngular, tone: "tech-angular" },
      { name: "React.js", icon: SiReact, tone: "tech-react" },
      { name: "PostgreSQL", icon: SiPostgresql, tone: "tech-postgres" },
      { name: "Linux Ubuntu", icon: SiLinux, tone: "tech-linux" },
    ],
  },
  {
    company: "EDZA Planejamento Consultoria e Informática LTDA",
    role: "Analista de Sistemas e Desenvolvedor de Software",
    period: "nov/2019 – mar/2022",
    location: "Salvador / BA",
    description:
      "ERP Municipal (Tributário, Saúde, RH e NF-e) para prefeituras de Ilhéus, Juazeiro, Candeias, Porto Seguro e Lauro de Freitas. Modernização de módulo NF-e explorado em Ruby on Rails como proposta de refatoração da camada de APIs REST. Administração de servidores Linux Ubuntu 24/7.",
    tags: [
      { name: "Ruby", icon: SiRuby, tone: "tech-ruby" },
      { name: "Rails", icon: SiRubyonrails, tone: "tech-rails" },
      { name: "Angular", icon: SiAngular, tone: "tech-angular" },
      { name: "Vue.js", icon: SiVueDotJs, tone: "tech-vue" },
      { name: "Java EE", icon: SiJava, tone: "tech-java" },
      { name: "MySQL", icon: SiMysql, tone: "tech-mysql" },
      { name: "Linux Ubuntu", icon: SiLinux, tone: "tech-linux" },
      { name: "Bash Script", icon: SiGnubash, tone: "tech-bash" },
    ],
  },
];

export function ExperienceSection() {
  return (
    <section id="experience" className="py-24 relative border-y border-border overflow-hidden">
      <div className="absolute inset-0 rails-grid opacity-20 pointer-events-none" />
      <div className="container mx-auto px-4 relative">
        <p className="text-xs font-mono text-primary uppercase tracking-[0.24em] mb-3">
          Trajetória
        </p>
        <h2 className="text-3xl md:text-4xl font-bold tracking-tighter">
          Experiência que fortalece cada entrega.
        </h2>

        <div className="mt-10 max-w-4xl space-y-5">
          {experiences.map((item, index) => (
            <motion.article
              key={item.company}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="rails-experience-card rounded-xl p-5 sm:p-6 grid md:grid-cols-[11rem_1fr] gap-5"
            >
              <div className="font-mono text-xs text-muted-foreground space-y-3">
                <span className="flex items-center gap-2">
                  <CalendarDays size={14} className="text-primary" />
                  {item.period}
                </span>
                <span className="flex items-center gap-2">
                  <MapPin size={14} className="text-primary" />
                  {item.location}
                </span>
              </div>
              <div>
                <div className="flex gap-3">
                  <BriefcaseBusiness className="text-primary shrink-0 mt-1" size={18} />
                  <div>
                    <h3 className="font-bold text-lg">{item.role}</h3>
                    <p className="text-sm text-primary mt-1">{item.company}</p>
                  </div>
                </div>
                <p className="text-sm text-muted-foreground leading-relaxed mt-4">
                  {item.description}
                </p>
                <div className="flex flex-wrap gap-2 mt-4">
                  {item.tags.map((t) => (
                    <span
                      key={t.name}
                      className={`tech-tag ${t.tone} inline-flex items-center gap-1.5 font-mono px-2.5 py-1 rounded border text-[10.5px]`}
                    >
                      <t.icon size={11} />
                      {t.name}
                    </span>
                  ))}
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
