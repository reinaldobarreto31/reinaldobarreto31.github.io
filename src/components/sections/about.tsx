import React from "react";
import { motion } from "framer-motion";
import {
  Database, ShieldCheck, Workflow, Sparkles, BookOpen, GraduationCap,
  Award, Languages, Target, Briefcase,
} from "lucide-react";
import {
  SiPostgresql, SiRedis, SiDocker, SiGithubactions,
  SiReact, SiTypescript, SiSpringboot, SiVuedotjs, SiAngular,
  SiGo, SiSwagger, SiJavascript, SiMysql, SiLinux, SiGnubash, SiGit,
  SiKubernetes, SiTailwindcss, SiVite, SiMongodb, SiNodedotjs,
  SiKotlin, SiFlutter,
} from "react-icons/si";
import { FaJava as SiJava } from "react-icons/fa6";
import type { AdminAbout, AdminSkill, ProjectTone } from "@/lib/default-data";

const ICON_MAP: Record<string, React.ComponentType<{ className?: string; size?: number }>> = {
  java: SiJava,
  spring: SiSpringboot,
  kotlin: SiKotlin,
  flutter: SiFlutter,
  node: SiNodedotjs,
  js: SiJavascript,
  next: SiNodedotjs,
  postgres: SiPostgresql,
  mysql: SiMysql,
  redis: SiRedis,
  docker: SiDocker,
  k8s: SiKubernetes,
  actions: SiGithubactions,
  react: SiReact,
  ts: SiTypescript,
  vue: SiVuedotjs,
  angular: SiAngular,
  mongo: SiMongodb,
  tailwind: SiTailwindcss,
  vite: SiVite,
  go: SiGo,
  swagger: SiSwagger,
  linux: SiLinux,
  bash: SiGnubash,
  git: SiGit,
  sparkles: Sparkles,
};

const TONE_MAP: Record<ProjectTone, true> = {
  "tech-rails": true, "tech-ruby": true,
  "tech-java": true, "tech-spring": true, "tech-quarkus": true, "tech-kotlin": true, "tech-flutter": true,
  "tech-node": true, "tech-next": true, "tech-js": true, "tech-mongo": true, "tech-tailwind": true, "tech-vite": true,
  "tech-postgres": true, "tech-mysql": true, "tech-redis": true,
  "tech-docker": true, "tech-actions": true, "tech-react": true, "tech-ts": true,
  "tech-jwt": true, "tech-openapi": true, "tech-pdf": true, "tech-golang": true,
  "tech-api": true, "tech-vue": true, "tech-git": true,
  "tech-angular": true, "tech-linux": true, "tech-bash": true,
};

function isTone(v: string): v is ProjectTone {
  return Object.prototype.hasOwnProperty.call(TONE_MAP, v);
}

const DEFAULT_TOOL_CARDS: { name: string; iconKey: string; tone: ProjectTone }[] = [
  { name: "Ruby on Rails 7/8", iconKey: "rails", tone: "tech-rails" },
  { name: "Ruby 3 · RSpec", iconKey: "ruby", tone: "tech-ruby" },
  { name: "Sidekiq · Redis", iconKey: "redis", tone: "tech-redis" },
  { name: "PostgreSQL", iconKey: "postgres", tone: "tech-postgres" },
  { name: "Docker", iconKey: "docker", tone: "tech-docker" },
  { name: "React 18 · TypeScript", iconKey: "react", tone: "tech-react" },
  { name: "Next.js 14", iconKey: "next", tone: "tech-next" },
  { name: "Vue.js 3", iconKey: "vue", tone: "tech-vue" },
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
  "Java com Spring Boot — APIs RESTful, Microsserviços e JWT · Udemy",
  "Android Nativo com Kotlin + Jetpack Compose · Udemy · 2024",
  "Flutter / Dart — Apps Multiplataforma iOS & Android · Udemy · 2024",
  "Docker e Kubernetes na prática · Udemy",
  "Microsserviços Java com Kafka, Eureka e Keycloak · Udemy",
  "Testes com JUnit 5, Mockito e TDD · Udemy",
];

const LANGUAGES = [
  { name: "Português", level: "Fluente", percent: 100, tone: "tech-spring" as ProjectTone },
  { name: "Inglês", level: "Intermediário", percent: 55, tone: "tech-java" as ProjectTone },
  { name: "Espanhol", level: "Básico", percent: 30, tone: "tech-kotlin" as ProjectTone },
];

function SkillBar({ name, level, color }: { name: string; level: number; color: string; key?: string }) {
  return (
    <div className="space-y-1.5">
      <div className="flex items-center justify-between text-xs font-mono">
        <span className="text-foreground font-semibold">{name}</span>
        <span style={{ color }}>{level}%</span>
      </div>
      <div className="h-[6px] w-full rounded-full bg-[#1e293b] overflow-hidden border border-white/5">
        <motion.div
          initial={{ width: 0 }}
          whileInView={{ width: `${level}%` }}
          viewport={{ once: true }}
          transition={{ duration: 0.9, ease: "easeOut", delay: 0.05 }}
          className="h-full rounded-full"
          style={{
            background: (() => {
              if (color.toLowerCase() === "#6db33f" || color.toLowerCase() === "#50fa7b" || color.includes("6db") || color.includes("50fa")) {
                return "linear-gradient(to right,#3d7a27,#6db33f,#9ed866)";
              }
              if (color.toLowerCase() === "#007396" || color.toLowerCase() === "#f89820" || color.includes("007396") || color.includes("f898")) {
                return "linear-gradient(to right,#005d7c,#007396,#2fa4c8)";
              }
              if (color.toLowerCase() === "#7f52ff" || color.includes("7f52") || color.includes("9333ea")) {
                return "linear-gradient(to right,#5a3ad1,#7f52ff,#a78bfa)";
              }
              if (color.toLowerCase() === "#02569b" || color.toLowerCase() === "#42a5f5" || color.includes("02569b") || color.includes("42a5")) {
                return "linear-gradient(to right,#013f73,#02569b,#42a5f5)";
              }
              return `linear-gradient(to right, ${color}, ${color})`;
            })(),
            boxShadow: `0 0 12px ${color}55`,
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
        const iconKey = ICON_MAP[s.icon] ? s.icon : "spring";
        const colorTone =
          /spring|spring.?boot/i.test(name) ? "tech-spring" :
          /kotlin|compose|android/i.test(name) ? "tech-kotlin" :
          /flutter|dart/i.test(name) ? "tech-flutter" :
          /java|jvm|jpa|hibernate|jakarta/i.test(name) ? "tech-java" :
          /postgres|pg|sql/i.test(name) ? "tech-postgres" :
          /mysql|maria/i.test(name) ? "tech-mysql" :
          /redis/i.test(name) ? "tech-redis" :
          /docker|kube|k8s/i.test(name) ? "tech-docker" :
          /action|ci.?cd|deploy/i.test(name) ? "tech-actions" :
          /react|vite|tailwind/i.test(name) ? "tech-react" :
          /ts|type/i.test(name) ? "tech-ts" :
          /go/i.test(name) ? "tech-golang" :
          /vue/i.test(name) ? "tech-vue" :
          /angular/i.test(name) ? "tech-angular" :
          /git/i.test(name) ? "tech-git" :
          /linux|bash|ubuntu/i.test(name) ? "tech-linux" :
          /swagger|openapi/i.test(name) ? "tech-openapi" :
          /api|rest/i.test(name) ? "tech-api" :
          /node|nest/i.test(name) ? "tech-node" :
          /next|vercel/i.test(name) ? "tech-next" :
          /mongo|mongodb/i.test(name) ? "tech-mongo" :
          /tailwind/i.test(name) ? "tech-tailwind" :
          /vite/i.test(name) ? "tech-vite" :
          "tech-spring";
        const tone = isTone(colorTone) ? colorTone : "tech-spring";
        return { name, iconKey, tone };
      })
    : DEFAULT_TOOL_CARDS;

  const practices = about.practices.length > 0 ? about.practices : ["Clean Architecture", "Hexagonal / Ports & Adapters", "DDD", "TDD · JUnit 5", "SOLID", "Clean Code", "Microserviços", "CI/CD"];
  const methodologies = about.methodologies.length > 0 ? about.methodologies : ["Clean Architecture", "DDD", "Hexagonal Architecture", "TDD / JUnit 5 · Mockito", "Repository · Service Layer", "Scrum · Kanban", "OpenAPI 3 · Swagger", "12-Factor Apps", "CQRS"];

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

              {/* Java Mantra Highlight Box */}
              <div className="mt-4 p-5 rounded-2xl border border-white/80 bg-[#e0e5ec] shadow-[6px_6px_16px_#b8c1ec,-6px_-6px_16px_#ffffff] relative overflow-hidden">
                <div className="absolute top-0 right-0 w-24 h-24 bg-[#007396]/10 rounded-full blur-xl pointer-events-none" />
                <div className="inline-flex items-center gap-2 mb-2 font-mono text-[11px] uppercase tracking-wider text-[#007396] font-bold">
                  <Sparkles size={13} className="text-[#007396] animate-pulse" /> Mantra da Engenharia Java
                </div>
                <blockquote className="text-[14px] font-medium italic text-foreground leading-relaxed border-l-3 border-[#007396] pl-3 py-1 my-1">
                  "{about.mantra || "A pausa foi criada para que o coletor de lixo (Garbage Collector) trabalhe sem distrações — mas do Java 8 ao Java 21 com ZGC e Threads Virtuais, a alta performance nunca para."}"
                </blockquote>
                <div className="flex flex-wrap items-center gap-2 mt-3 pt-2 border-t border-black/5 text-[11px] font-mono text-muted-foreground">
                  <span className="text-[#007396] font-semibold">Boas Práticas:</span>
                  <span>SOLID</span> · <span>Clean Architecture</span> · <span>DDD</span> · <span>TDD (JUnit 5 + Mockito)</span> · <span>Design Patterns</span> · <span>GoF</span>
                </div>
              </div>
            </div>

            <div className="mt-8 grid sm:grid-cols-3 gap-3">
              {[
                { icon: Database, title: "Dados", text: "Modelagem e migrations seguras." },
                { icon: ShieldCheck, title: "Qualidade", text: "Testes e boas práticas desde o início." },
                { icon: Workflow, title: "Entrega", text: "Fluxo automatizado e ambientes reproduzíveis." },
              ].map(({ icon: Icon, title, text }) => (
                <div key={title} className="neo-mini-card rounded-lg p-4">
                  <Icon size={18} className="text-primary mb-3" />
                  <h3 className="font-semibold text-sm">{title}</h3>
                  <p className="text-xs text-muted-foreground mt-1 leading-relaxed">{text}</p>
                </div>
              ))}
            </div>

            <div className="mt-8">
              <h3 className="font-mono text-xs uppercase tracking-wider mb-3" style={{ color: "#6db33f" }}>
                Práticas de engenharia
              </h3>
              <div className="flex flex-wrap gap-2">
                {practices.map((item: string) => (
                  <span
                    key={item}
                    className="px-3 py-1.5 rounded-full border text-xs font-mono font-semibold"
                    style={{
                      borderColor: "rgba(109,179,63,.55)",
                      backgroundColor: "rgba(109,179,63,.10)",
                      color: "#9ed866",
                      boxShadow: "inset 0 0 0 1px rgba(109,179,63,.18)",
                    }}
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
            className="neo-panel rounded-xl p-5 sm:p-7 relative overflow-hidden"
          >
            <div className="absolute inset-0 neo-grid opacity-30 pointer-events-none" />
            <div className="relative">
              <div className="flex items-center gap-2 font-mono text-xs text-primary uppercase tracking-wider">
                <Sparkles size={14} /> Ferramentas do dia a dia
              </div>
              <div className={`grid ${toolCards.length >= 6 ? "grid-cols-2 sm:grid-cols-3" : "grid-cols-2"} gap-3 mt-6`}>
                {toolCards.map((t) => {
                  const Icon = ICON_MAP[t.iconKey] ?? SiSpringboot;
                  return (
                    <div key={`${t.name}-${t.iconKey}`} className={`neo-tool-card ${t.tone} rounded-lg p-4 text-center`}>
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
                      <SkillBar name="Java 17 LTS" level={95} color="#007396" />
                      <SkillBar name="Spring Boot 3 · Spring Security" level={93} color="#6db33f" />
                      <SkillBar name="Kotlin · Jetpack Compose (Android)" level={86} color="#7f52ff" />
                      <SkillBar name="Flutter / Dart (Cross-platform)" level={78} color="#02569b" />
                      <SkillBar name="APIs RESTful · OpenAPI 3 · JWT" level={92} color="#007396" />
                      <SkillBar name="PostgreSQL · MySQL · Redis" level={85} color="#336791" />
                      <SkillBar name="JUnit 5 · Mockito · TDD" level={88} color="#6db33f" />
                      <SkillBar name="Docker · Kubernetes · CI/CD" level={80} color="#2496ed" />
                    </>
                  )}
                </div>
              </div>

              <div className="mt-6 pt-5 border-t border-border">
                <p className="font-mono text-xs text-muted-foreground">
                  <span className="text-primary">$</span> spring init --type=maven-project --dependencies=web,data-jpa,security,postgresql produto
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
                  <div key={e.course} className="neo-mini-card rounded-xl p-4 flex gap-4">
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
            className="neo-panel rounded-xl p-6 sm:p-8 relative overflow-hidden"
          >
            <div className="absolute inset-0 neo-grid opacity-30 pointer-events-none" />
            <div className="relative">
              <div className="flex items-center gap-2 mb-6 font-mono text-[11px] uppercase tracking-widest text-[#2f855a]">
                <Languages size={13} /> Idiomas
              </div>
              <div className="space-y-6">
                {LANGUAGES.map((lang) => (
                  <div key={lang.name} className="space-y-2">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <div className={`w-9 h-9 rounded-lg grid place-items-center text-[13px] font-bold bg-[#e0e5ec] shadow-[inset_2px_2px_4px_#b8c1ec,inset_-2px_-2px_4px_#ffffff] border tech-tag ${lang.tone}`}>
                          {lang.name.slice(0, 2).toUpperCase()}
                        </div>
                        <div>
                          <h4 className="font-semibold">{lang.name}</h4>
                          <p className="text-xs font-mono text-muted-foreground">{lang.level}</p>
                        </div>
                      </div>
                      <span className="font-mono text-sm text-foreground/80">{lang.percent}%</span>
                    </div>
                    <div className="h-[7px] rounded-full bg-[#e0e5ec] shadow-[inset_2px_2px_4px_#b8c1ec,inset_-2px_-2px_4px_#ffffff] overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: `${lang.percent}%` }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.9, ease: "easeOut" }}
                        className="h-full rounded-full"
                        style={{
                          background:
                            lang.tone === "tech-spring"
                              ? "linear-gradient(90deg,#6db33f,#9ed866)"
                              : lang.tone === "tech-java"
                              ? "linear-gradient(90deg,#007396,#f89820)"
                              : "linear-gradient(90deg,#7f52ff,#b497ff)",
                        }}
                      />
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-10 pt-6 border-t border-border/70">
                <div className="flex items-center gap-2 mb-4 font-mono text-[11px] uppercase tracking-widest text-[#6db33f]">
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
                        className={`neo-tool-card ${tone} rounded-lg p-3 text-center grid place-items-center gap-1.5`}
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
