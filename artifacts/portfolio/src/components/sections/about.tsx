import { motion } from "framer-motion";
import {
  Database, ShieldCheck, Workflow, Sparkles, BookOpen, GraduationCap,
  Award, Languages, Target, Briefcase,
} from "lucide-react";
import {
  SiRuby, SiRubyonrails, SiPostgresql, SiRedis, SiDocker, SiGithubactions,
  SiReact, SiTypescript, SiJava, SiSpringboot, SiVuedotjs, SiAngular,
} from "react-icons/si";

const SKILLS = [
  { name: "Ruby", icon: SiRuby, tone: "tech-ruby" },
  { name: "Rails", icon: SiRubyonrails, tone: "tech-rails" },
  { name: "PostgreSQL", icon: SiPostgresql, tone: "tech-postgres" },
  { name: "Redis", icon: SiRedis, tone: "tech-redis" },
  { name: "Docker", icon: SiDocker, tone: "tech-docker" },
  { name: "GitHub Actions", icon: SiGithubactions, tone: "tech-actions" },
];

const HARD_SKILLS = [
  { name: "Ruby on Rails", level: 95, color: "#cc0000" },
  { name: "RSpec · TDD", level: 98, color: "#cc0000" },
  { name: "APIs RESTful · OpenAPI 3", level: 92, color: "#cc0000" },
  { name: "PostgreSQL", level: 85, color: "#cc0000" },
  { name: "React · TypeScript", level: 88, color: "#bd93f9" },
  { name: "Docker · CI/CD", level: 78, color: "#bd93f9" },
  { name: "Java · Spring Boot", level: 75, color: "#f1fa8c" },
  { name: "Vue.js · Angular", level: 78, color: "#f1fa8c" },
];

const METHODOLOGIES = [
  "Convention over Config",
  "TDD / RSpec",
  "Service Objects",
  "Clean Code",
  "Scrum · Kanban",
  "CI/CD",
  "OpenAPI / Swagger",
  "FactoryBot",
  "Clean Architecture",
];

const PRACTICES = ["MVC", "REST APIs", "Active Record", "RSpec", "TDD", "SOLID", "Clean Code", "CI/CD"];

const EDUCATION = [
  {
    course: "CST em Análise e Desenvolvimento de Sistemas",
    school: "Centro Universitário Jorge Amado — UNIJORGE (Bahia)",
    period: "Concluído · 2022",
    icon: GraduationCap,
  },
  {
    course: "Técnico em Administração",
    school: "CEEP Newton SULTIPNE",
    period: "Concluído",
    icon: BookOpen,
  },
];

const COURSES = [
  "Ruby on Rails — API Mode completo · Udemy",
  "Docker e Kubernetes na prática · Udemy",
  "Go (Golang) — APIs e Microsserviços · Udemy",
  "APIs RESTful com Spring Boot e Java · Udemy · 2022",
  "Full Stack com Node.js e Vue.js · Udemy · 2023",
  "React.js Completo · Udemy · 2023",
];

const LANGUAGES = [
  { name: "Português", level: "Fluente", percent: 100, tone: "tech-rails" },
  { name: "Inglês", level: "Intermediário", percent: 55, tone: "tech-docker" },
  { name: "Espanhol", level: "Básico", percent: 30, tone: "tech-api" },
];

function SkillBar({ name, level, color }: { name: string; level: number; color: string }) {
  return (
    <div className="space-y-1.5">
      <div className="flex items-center justify-between text-xs font-mono">
        <span className="text-foreground font-semibold">{name}</span>
        <span style={{ color }}>{level}%</span>
      </div>
      <div className="h-[6px] w-full rounded-full bg-[#44475a] overflow-hidden">
        <motion.div
          initial={{ width: 0 }}
          whileInView={{ width: `${level}%` }}
          viewport={{ once: true }}
          transition={{ duration: 0.9, ease: "easeOut", delay: 0.05 }}
          className="h-full rounded-full"
          style={{
            background: `linear-gradient(to right, ${color}, ${color === "#cc0000" ? "#ff6e6e" : color === "#bd93f9" ? "#8be9fd" : "#ffb86c"})`,
          }}
        />
      </div>
    </div>
  );
}

export function AboutSection() {
  return (
    <section id="about" className="py-24 relative bg-card/30">
      <div className="container mx-auto px-4 space-y-14">
        <div className="grid lg:grid-cols-[1.05fr_.95fr] gap-10 items-start">
          <div>
            <p className="text-xs font-mono text-primary uppercase tracking-[0.24em] mb-3">
              Perfil profissional
            </p>
            <h2 className="text-3xl md:text-4xl font-bold tracking-tighter">
              Produtos web claros por fora. Estruturados por dentro.
            </h2>

            <div className="mt-6 space-y-5 text-muted-foreground leading-relaxed max-w-2xl">
              <div>
                <div className="inline-flex items-center gap-2 mb-2 font-mono text-[11px] text-primary uppercase tracking-wider">
                  <Briefcase size={12} /> Resumo profissional
                </div>
                <p className="text-[14.5px] leading-[1.75]">
                  Engenheiro de Software com trajetória sólida em{" "}
                  <strong className="text-primary">Ruby on Rails</strong> e background enterprise em{" "}
                  <strong className="text-primary">Java / Spring Boot</strong>. Especialista em{" "}
                  <strong className="text-foreground">APIs RESTful</strong> para o setor público
                  (estadual, municipal), segurança pública. Domínio de{" "}
                  <strong className="text-foreground">TDD com RSpec</strong>, documentação automática
                  via <strong className="text-primary">Rswag / OpenAPI 3</strong> e entrega com{" "}
                  <strong className="text-primary">CI/CD (GitHub Actions)</strong>.{" "}
                  <em className="text-primary/90">Convention over Configuration</em> como filosofia de
                  trabalho.
                </p>
              </div>

              <div className="mt-4 p-5 rounded-xl border border-[#bd93f9]/45 bg-[linear-gradient(145deg,rgba(189,147,249,.12),rgba(40,42,54,.92))]">
                <div className="inline-flex items-center gap-2 mb-2 font-mono text-[11px] uppercase tracking-wider text-[#bd93f9]">
                  <Target size={12} /> Objetivo profissional
                </div>
                <p className="text-[14.5px] leading-[1.75] text-foreground/92">
                  Atuar como <strong className="text-primary">Engenheiro de Software Ruby on Rails</strong>{" "}
                  em produto de alto impacto — contribuindo com arquitetura de APIs RESTful, TDD rigoroso,
                  documentação OpenAPI 3 e entrega contínua em produção.
                </p>
              </div>
            </div>

            <div className="mt-8 grid sm:grid-cols-3 gap-3">
              {[
                { icon: Database, title: "Dados", text: "Modelagem e migrations seguras." },
                { icon: ShieldCheck, title: "Qualidade", text: "Testes e boas práticas desde o início." },
                { icon: Workflow, title: "Entrega", text: "Fluxo automatizado e ambientes reproduzíveis." },
              ].map(({ icon: Icon, title, text }) => (
                <div key={title} className="rails-mini-card rounded-lg p-4">
                  <Icon size={18} className="text-primary mb-3" />
                  <h3 className="font-semibold text-sm">{title}</h3>
                  <p className="text-xs text-muted-foreground mt-1 leading-relaxed">{text}</p>
                </div>
              ))}
            </div>

            <div className="mt-8">
              <h3 className="font-mono text-xs uppercase tracking-wider text-[#ff5555] mb-3">
                Práticas de engenharia
              </h3>
              <div className="flex flex-wrap gap-2">
                {PRACTICES.map((item) => (
                  <span
                    key={item}
                    className="px-3 py-1.5 rounded-full border border-[#cc0000]/55 bg-[#cc0000]/10 text-[#ff5555] text-xs font-mono font-semibold shadow-[inset_0_0_0_1px_rgba(255,85,85,.18)]"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="rails-panel rounded-xl p-5 sm:p-7 relative overflow-hidden"
          >
            <div className="absolute inset-0 rails-grid opacity-30 pointer-events-none" />
            <div className="relative">
              <div className="flex items-center gap-2 font-mono text-xs text-primary uppercase tracking-wider">
                <Sparkles size={14} /> Ferramentas do dia a dia
              </div>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 mt-6">
                {SKILLS.map(({ name, icon: Icon, tone }) => (
                  <div key={name} className={`rails-tool-card ${tone} rounded-lg p-4 text-center`}>
                    <Icon className="tech-icon text-3xl mx-auto mb-3" />
                    <span className="text-xs font-mono text-muted-foreground">{name}</span>
                  </div>
                ))}
              </div>

              <div className="mt-7 pt-6 border-t border-border">
                <div className="flex items-center gap-2 mb-4 font-mono text-xs uppercase tracking-wider text-muted-foreground">
                  <ShieldCheck size={13} /> Habilidades técnicas
                </div>
                <div className="grid sm:grid-cols-2 gap-x-6 gap-y-4">
                  {HARD_SKILLS.map((s) => (
                    <SkillBar key={s.name} name={s.name} level={s.level} color={s.color} />
                  ))}
                </div>
              </div>

              <div className="mt-6 pt-5 border-t border-border">
                <p className="font-mono text-xs text-muted-foreground">
                  <span className="text-primary">$</span> rails new produto --database=postgresql
                </p>
              </div>
            </div>
          </motion.div>
        </div>

        <div className="grid md:grid-cols-2 gap-8 items-start">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div>
              <div className="flex items-center gap-2 mb-4 font-mono text-[11px] text-primary uppercase tracking-widest">
                <Workflow size={12} /> Metodologias
              </div>
              <div className="flex flex-wrap gap-2">
                {METHODOLOGIES.map((m) => (
                  <span
                    key={m}
                    className="px-3 py-1.5 rounded-lg border border-[#6272a4]/35 bg-[#44475a]/50 text-[12px] font-medium text-foreground/90"
                  >
                    {m}
                  </span>
                ))}
              </div>
            </div>

            <div>
              <div className="flex items-center gap-2 mb-4 font-mono text-[11px] uppercase tracking-widest" style={{ color: "#bd93f9" }}>
                <GraduationCap size={12} /> Formação acadêmica
              </div>
              <div className="space-y-3">
                {EDUCATION.map((e) => (
                  <div key={e.course} className="rails-mini-card rounded-xl p-4 flex gap-4">
                    <div className="shrink-0 w-10 h-10 rounded-lg bg-[#bd93f9]/15 border border-[#bd93f9]/40 grid place-items-center text-[#bd93f9]">
                      <e.icon size={18} />
                    </div>
                    <div>
                      <h4 className="font-semibold text-sm leading-snug">{e.course}</h4>
                      <p className="text-xs text-muted-foreground mt-0.5">{e.school}</p>
                      <p className="text-[11px] font-mono mt-1 text-primary">{e.period}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <div className="flex items-center gap-2 mb-4 font-mono text-[11px] uppercase tracking-widest text-[#f1fa8c]">
                <Award size={12} /> Cursos & certificações
              </div>
              <div className="space-y-2">
                {COURSES.map((c) => (
                  <div key={c} className="rounded-lg border border-border/60 px-4 py-3 bg-[#44475a]/30 text-sm text-foreground/90">
                    <span className="font-mono text-[11px] text-[#f1fa8c] mr-2">udemy</span>
                    {c}
                  </div>
                ))}
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="rails-panel rounded-xl p-6 sm:p-8 relative overflow-hidden"
          >
            <div className="absolute inset-0 rails-grid opacity-30 pointer-events-none" />
            <div className="relative">
              <div className="flex items-center gap-2 mb-6 font-mono text-[11px] uppercase tracking-widest text-[#50fa7b]">
                <Languages size={13} /> Idiomas
              </div>
              <div className="space-y-6">
                {LANGUAGES.map((lang) => (
                  <div key={lang.name} className="space-y-2">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <div className={`w-9 h-9 rounded-lg grid place-items-center text-[13px] font-bold bg-[#44475a]/60 border tech-tag ${lang.tone}`}>
                          {lang.name.slice(0, 2).toUpperCase()}
                        </div>
                        <div>
                          <h4 className="font-semibold">{lang.name}</h4>
                          <p className="text-xs font-mono text-muted-foreground">{lang.level}</p>
                        </div>
                      </div>
                      <span className="font-mono text-sm text-foreground/80">{lang.percent}%</span>
                    </div>
                    <div className="h-[7px] rounded-full bg-[#44475a] overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: `${lang.percent}%` }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.9, ease: "easeOut" }}
                        className="h-full rounded-full"
                        style={{
                          background:
                            lang.tone === "tech-rails"
                              ? "linear-gradient(90deg,#cc0000,#ff6e6e)"
                              : lang.tone === "tech-docker"
                              ? "linear-gradient(90deg,#50fa7b,#8be9fd)"
                              : "linear-gradient(90deg,#6272a4,#bd93f9)",
                        }}
                      />
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-10 pt-6 border-t border-border/70">
                <div className="flex items-center gap-2 mb-4 font-mono text-[11px] uppercase tracking-widest text-[#bd93f9]">
                  <SiReact size={12} /> Techs complementares
                </div>
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                  {[
                    { name: "React", icon: SiReact, tone: "tech-react" },
                    { name: "TypeScript", icon: SiTypescript, tone: "tech-ts" },
                    { name: "Java", icon: SiJava, tone: "tech-java" },
                    { name: "Spring", icon: SiSpringboot, tone: "tech-java" },
                    { name: "Vue.js", icon: SiVuedotjs, tone: "tech-vue" },
                    { name: "Angular", icon: SiAngular, tone: "tech-angular" },
                    { name: "Docker", icon: SiDocker, tone: "tech-docker" },
                    { name: "Actions", icon: SiGithubactions, tone: "tech-actions" },
                  ].map(({ name, icon: Icon, tone }) => (
                    <div
                      key={name}
                      className={`rails-tool-card ${tone} rounded-lg p-3 text-center grid place-items-center gap-1.5`}
                    >
                      <Icon className="tech-icon text-2xl" />
                      <span className="text-[10.5px] font-mono text-muted-foreground">{name}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
