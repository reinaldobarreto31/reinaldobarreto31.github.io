import { motion } from "framer-motion";
import {
  Database, ShieldCheck, Workflow, Sparkles, BookOpen, GraduationCap,
  Award, Languages, Target, Briefcase,
} from "lucide-react";
import {
  SiRuby, SiRubyonrails, SiPostgresql, SiRedis, SiDocker, SiGithubactions,
  SiReact, SiTypescript, SiJava, SiSpringboot, SiVuedotjs, SiAngular,
  SiGo, SiSwagger, SiJavascript, SiMysql, SiLinux, SiGnubash, SiGit,
  SiKubernetes, SiTailwindcss, SiVite, SiMongodb, SiNodedotjs,
} from "react-icons/si";
import type { AdminAbout, AdminSkill, ProjectTone } from "@/lib/default-data";

const ICON_MAP: Record<string, React.ComponentType<{ className?: string; size?: number }>> = {
  ruby: SiRuby,
  rails: SiRubyonrails,
  postgres: SiPostgresql,
  redis: SiRedis,
  docker: SiDocker,
  actions: SiGithubactions,
  react: SiReact,
  ts: SiTypescript,
  java: SiJava,
  spring: SiSpringboot,
  vue: SiVuedotjs,
  angular: SiAngular,
  go: SiGo,
  swagger: SiSwagger,
  js: SiJavascript,
  mysql: SiMysql,
  linux: SiLinux,
  bash: SiGnubash,
  git: SiGit,
  k8s: SiKubernetes,
  tailwind: SiTailwindcss,
  vite: SiVite,
  mongo: SiMongodb,
  node: SiNodedotjs,
  sparkles: Sparkles,
};

const TONE_MAP: Record<ProjectTone, true> = {
  "tech-ruby": true, "tech-rails": true, "tech-postgres": true, "tech-redis": true,
  "tech-docker": true, "tech-actions": true, "tech-react": true, "tech-ts": true,
  "tech-jwt": true, "tech-openapi": true, "tech-pdf": true, "tech-golang": true,
  "tech-java": true, "tech-api": true, "tech-vue": true, "tech-git": true,
  "tech-angular": true, "tech-linux": true, "tech-mysql": true, "tech-bash": true,
};

function isTone(v: string): v is ProjectTone {
  return Object.prototype.hasOwnProperty.call(TONE_MAP, v);
}

const DEFAULT_TOOL_CARDS: { name: string; iconKey: string; tone: ProjectTone }[] = [
  { name: "Ruby", iconKey: "ruby", tone: "tech-ruby" },
  { name: "Rails", iconKey: "rails", tone: "tech-rails" },
  { name: "PostgreSQL", iconKey: "postgres", tone: "tech-postgres" },
  { name: "Redis", iconKey: "redis", tone: "tech-redis" },
  { name: "Docker", iconKey: "docker", tone: "tech-docker" },
  { name: "GitHub Actions", iconKey: "actions", tone: "tech-actions" },
];

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
  { name: "Português", level: "Fluente", percent: 100, tone: "tech-rails" as ProjectTone },
  { name: "Inglês", level: "Intermediário", percent: 55, tone: "tech-docker" as ProjectTone },
  { name: "Espanhol", level: "Básico", percent: 30, tone: "tech-api" as ProjectTone },
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

type Props = { about: AdminAbout };

export function AboutSection({ about }: Props) {
  const toolCards = about.skills.length > 0
    ? about.skills.map<{ name: string; iconKey: string; tone: ProjectTone }>((s: AdminSkill) => {
        const name = s.name;
        const iconKey = ICON_MAP[s.icon] ? s.icon : "rails";
        const colorTone =
          /rails/i.test(name) ? "tech-rails" :
          /ruby/i.test(name) ? "tech-ruby" :
          /postgres|pg|sql/i.test(name) ? "tech-postgres" :
          /docker|kube|k8s/i.test(name) ? "tech-docker" :
          /action|ci.?cd|deploy/i.test(name) ? "tech-actions" :
          /react|vite|tailwind/i.test(name) ? "tech-react" :
          /ts|type/i.test(name) ? "tech-ts" :
          /go/i.test(name) ? "tech-golang" :
          /java|spring/i.test(name) ? "tech-java" :
          /vue/i.test(name) ? "tech-vue" :
          /angular/i.test(name) ? "tech-angular" :
          /git/i.test(name) ? "tech-git" :
          /linux|bash|ubuntu/i.test(name) ? "tech-linux" :
          /swagger|openapi/i.test(name) ? "tech-openapi" :
          /api|rest/i.test(name) ? "tech-api" :
          "tech-rails";
        const tone = isTone(colorTone) ? colorTone : "tech-rails";
        return { name, iconKey, tone };
      })
    : DEFAULT_TOOL_CARDS;

  const practices = about.practices.length > 0 ? about.practices : ["MVC", "REST APIs", "Active Record", "RSpec", "TDD", "SOLID", "Clean Code", "CI/CD"];
  const methodologies = about.methodologies.length > 0 ? about.methodologies : ["Convention over Config", "TDD / RSpec", "Service Objects", "Clean Code", "Scrum · Kanban", "CI/CD", "OpenAPI / Swagger", "FactoryBot", "Clean Architecture"];

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
                <p className="text-[14.5px] leading-[1.75] whitespace-pre-wrap">
                  {about.summary}
                </p>
              </div>

              <div className="mt-4 p-5 rounded-xl border border-[#bd93f9]/45 bg-[linear-gradient(145deg,rgba(189,147,249,.12),rgba(40,42,54,.92))]">
                <div className="inline-flex items-center gap-2 mb-2 font-mono text-[11px] uppercase tracking-wider text-[#bd93f9]">
                  <Target size={12} /> Objetivo profissional
                </div>
                <p className="text-[14.5px] leading-[1.75] text-foreground/92 whitespace-pre-wrap">
                  {about.objective}
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
                {practices.map((item: string) => (
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
              <div className={`grid ${toolCards.length >= 6 ? "grid-cols-2 sm:grid-cols-3" : "grid-cols-2"} gap-3 mt-6`}>
                {toolCards.map((t) => {
                  const Icon = ICON_MAP[t.iconKey] ?? SiRubyonrails;
                  return (
                    <div key={`${t.name}-${t.iconKey}`} className={`rails-tool-card ${t.tone} rounded-lg p-4 text-center`}>
                      <Icon className="tech-icon text-3xl mx-auto mb-3" />
                      <span className="text-xs font-mono text-muted-foreground">{t.name}</span>
                    </div>
                  );
                })}
              </div>

              <div className="mt-7 pt-6 border-t border-border">
                <div className="flex items-center gap-2 mb-4 font-mono text-xs uppercase tracking-wider text-muted-foreground">
                  <ShieldCheck size={13} /> Habilidades técnicas
                </div>
                <div className="grid sm:grid-cols-2 gap-x-6 gap-y-4">
                  {about.skills.map((s) => (
                    <SkillBar key={s.name} name={s.name} level={s.level} color={s.color} />
                  ))}
                  {about.skills.length === 0 && (
                    <>
                      <SkillBar name="Ruby on Rails" level={95} color="#cc0000" />
                      <SkillBar name="RSpec · TDD" level={98} color="#cc0000" />
                      <SkillBar name="APIs RESTful · OpenAPI 3" level={92} color="#cc0000" />
                      <SkillBar name="PostgreSQL" level={85} color="#cc0000" />
                      <SkillBar name="React · TypeScript" level={88} color="#bd93f9" />
                      <SkillBar name="Docker · CI/CD" level={78} color="#bd93f9" />
                      <SkillBar name="Java · Spring Boot" level={75} color="#f1fa8c" />
                      <SkillBar name="Vue.js · Angular" level={78} color="#f1fa8c" />
                    </>
                  )}
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
                {methodologies.map((m: string) => (
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
                    { name: "React", iconKey: "react", tone: "tech-react" as ProjectTone },
                    { name: "TypeScript", iconKey: "ts", tone: "tech-ts" as ProjectTone },
                    { name: "Java", iconKey: "java", tone: "tech-java" as ProjectTone },
                    { name: "Spring", iconKey: "spring", tone: "tech-java" as ProjectTone },
                    { name: "Vue.js", iconKey: "vue", tone: "tech-vue" as ProjectTone },
                    { name: "Angular", iconKey: "angular", tone: "tech-angular" as ProjectTone },
                    { name: "Docker", iconKey: "docker", tone: "tech-docker" as ProjectTone },
                    { name: "Actions", iconKey: "actions", tone: "tech-actions" as ProjectTone },
                  ].map(({ name, iconKey, tone }) => {
                    const Icon = ICON_MAP[iconKey] ?? SiReact;
                    return (
                      <div
                        key={name}
                        className={`rails-tool-card ${tone} rounded-lg p-3 text-center grid place-items-center gap-1.5`}
                      >
                        <Icon className="tech-icon text-2xl" />
                        <span className="text-[10.5px] font-mono text-muted-foreground">{name}</span>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
