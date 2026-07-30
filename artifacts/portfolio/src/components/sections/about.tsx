import { Cloud, Database, GitBranch, ShieldCheck, MessageSquare, Cpu } from "lucide-react";
import {
  SiSpring, SiKotlin, SiGo,
  SiReact, SiAngular, SiVuedotjs, SiNodedotjs,
  SiDocker, SiKubernetes, SiJenkins, SiLinux, SiGit,
  SiPostgresql, SiMysql, SiRedis,
  SiApachekafka, SiRabbitmq,
  SiJavascript, SiTypescript,
  SiGithubactions,
} from "react-icons/si";
import { JavaIcon } from "@/components/icons/JavaIcon";

export function AboutSection() {
  /* ── Core stack (3-D cards with glow) ── */
  const coreStack = [
    { name: "Java",        icon: JavaIcon,  color: "text-orange-400", variant: "java" },
    { name: "Spring Boot", icon: SiSpring, color: "text-green-400",  variant: "spring" },
    { name: "Kotlin",      icon: SiKotlin, color: "text-purple-400", variant: "kotlin" },
    { name: "Go (Golang)", icon: SiGo,     color: "text-cyan-400",   variant: "plain" },
  ];

  const springEcosystem = [
    "Spring Data / JPA", "Spring Security", "Spring Cloud",
    "JPA / Hibernate", "Maven / Gradle", "Microsserviços",
  ];

  const frontendSkills = [
    { name: "React / Next.js", icon: SiReact,    color: "text-cyan-400" },
    { name: "Angular",         icon: SiAngular,  color: "text-red-500" },
    { name: "Vue.js",          icon: SiVuedotjs, color: "text-green-500" },
    { name: "Node / Nest.js",  icon: SiNodedotjs, color: "text-green-400" },
  ];

  const dbSkills = [
    { name: "PostgreSQL",  icon: SiPostgresql, color: "text-blue-300" },
    { name: "MySQL",       icon: SiMysql,      color: "text-orange-400" },
    { name: "Redis",       icon: SiRedis,      color: "text-red-500" },
    { name: "Oracle / MSSQL", icon: Database,  color: "text-muted-foreground" },
  ];

  const opsSkills = [
    { name: "Docker",          icon: SiDocker,        color: "text-blue-400" },
    { name: "Kubernetes",      icon: SiKubernetes,    color: "text-blue-500" },
    { name: "Jenkins",         icon: SiJenkins,       color: "text-red-400" },
    { name: "GitHub Actions",  icon: SiGithubactions, color: "text-gray-300" },
    { name: "Linux Ubuntu",    icon: SiLinux,         color: "text-foreground" },
    { name: "Git",             icon: SiGit,           color: "text-orange-500" },
    { name: "AWS / Azure / GCP", icon: Cloud,         color: "text-yellow-400" },
  ];

  const messagingSkills = [
    { name: "Apache Kafka",  icon: SiApachekafka, color: "text-foreground" },
    { name: "RabbitMQ",      icon: SiRabbitmq,   color: "text-orange-400" },
  ];

  const securitySkills = [
    { name: "OAuth2 / Keycloak", icon: ShieldCheck,   color: "text-primary" },
    { name: "Spring Security",   icon: SiSpring,      color: "text-green-400" },
    { name: "JWT",               icon: ShieldCheck,   color: "text-yellow-400" },
  ];

  const methodologies = [
    "Scrum", "Kanban", "APIs RESTful", "Clean Code",
    "TDD / JUnit", "Clean Architecture", "DDD", "CI/CD",
    "Microsserviços", "OpenAPI / Swagger", "SonarQube",
  ];

  const aiSkills = [
    { name: "Prompt Engineering", desc: "ChatGPT · Claude · Gemini",      emoji: "🧠" },
    { name: "GitHub Copilot",     desc: "Autocomplete & code review",      emoji: "🤖" },
    { name: "OpenAI API",         desc: "Integração em apps Spring/React", emoji: "⚡" },
    { name: "AI-assisted Dev",    desc: "Cursor · Replit AI · Codeium",    emoji: "🚀" },
  ];

  const cardClass = (variant: string) => {
    if (variant === "spring")  return "icon-card-3d icon-card-spring flex flex-col items-center justify-center p-3 rounded-md cursor-default group relative overflow-hidden";
    if (variant === "java")    return "icon-card-3d icon-card-java flex flex-col items-center justify-center p-3 rounded-md cursor-default group relative overflow-hidden";
    if (variant === "kotlin")  return "icon-card-3d icon-card-kotlin flex flex-col items-center justify-center p-3 rounded-md cursor-default group relative overflow-hidden";
    return "icon-card-3d flex flex-col items-center justify-center p-3 bg-card border border-border rounded-md cursor-default group";
  };

  const floatClass = (variant: string) => {
    if (variant === "spring") return "text-3xl mb-2 icon-spring-float text-green-400";
    if (variant === "java")   return "text-3xl mb-2 icon-java-float text-orange-400";
    if (variant === "kotlin") return "text-3xl mb-2 icon-kotlin-float text-purple-400";
    return "text-2xl mb-2 text-cyan-400 opacity-80 group-hover:opacity-100 group-hover:scale-110 transition-all";
  };

  const labelClass = (variant: string) => {
    if (variant === "spring") return "text-[10px] font-mono font-bold boot-shine text-center leading-tight";
    if (variant === "java")   return "text-[10px] font-mono font-bold java-glow text-center leading-tight";
    if (variant === "kotlin") return "text-[10px] font-mono font-bold kotlin-glow text-center leading-tight";
    return "text-[10px] font-mono text-muted-foreground group-hover:text-foreground text-center";
  };

  return (
    <section id="about" className="py-24 relative bg-card/30">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row gap-12 items-start">

          {/* ── Left: narrative ── */}
          <div className="flex-1 space-y-6">
            <h2 className="text-3xl font-bold tracking-tighter" data-testid="text-about-title">
              <span className="text-primary mr-2">#</span>Perfil Profissional
            </h2>

            <div className="prose prose-invert prose-p:font-sans prose-p:text-muted-foreground max-w-none space-y-4">
              <p>
                Engenheiro de Software com trajetória sólida no ecossistema{" "}
                <strong className="boot-shine font-bold">Java/Kotlin Spring Boot</strong>, Node.js/Nest.js
                e desenvolvimento avançado em <strong className="text-cyan-400">Go (Golang)</strong>.
                Especialista em sistemas críticos para o setor público — estadual, municipal e segurança pública.
              </p>
              <p>
                Expertise em unir desenvolvimento de alta complexidade com práticas de <strong>DevOps, SRE e
                Infraestrutura</strong>. Domínio de automação de pipelines CI/CD, autenticação{" "}
                <strong className="text-primary">OAuth2/Keycloak</strong>, testes automatizados (JUnit/Mockito)
                e análise de qualidade com SonarQube.
              </p>
            </div>

            {/* Timeline — cockpit style */}
            <div className="pt-4 relative">
              <div className="absolute left-4 top-10 bottom-4 w-0.5 bg-gradient-to-b from-secondary via-primary to-accent" />

              <div className="relative pl-12 mb-6">
                <div className="absolute left-2.5 top-1.5 w-3 h-3 rounded-full bg-secondary shadow-[0_0_10px_rgba(237,139,0,0.8)]" />
                <h4 className="font-mono text-sm text-secondary mb-1">Trajetória</h4>
                <p className="text-sm text-muted-foreground">
                  EDZA (<span className="java-glow font-semibold">Java EE / JSP / Struts</span>)
                  → LAMPP (<span className="boot-shine font-semibold">Spring Boot / OAuth2</span>)
                  → PRODEB (<span className="boot-shine font-semibold">Spring Boot / Java</span>)
                </p>
              </div>

              <div className="relative pl-12 mb-6">
                <div className="absolute left-2.5 top-1.5 w-3 h-3 rounded-full bg-primary shadow-[0_0_10px_rgba(109,179,63,0.8)]" />
                <h4 className="font-mono text-sm text-primary mb-1">Agora</h4>
                <p className="text-sm text-muted-foreground">
                  Consolidando <span className="boot-shine font-semibold">Spring Boot + Kotlin + Go</span>{" "}
                  como stack principal — microsserviços, DDD, Clean Architecture
                </p>
              </div>

              <div className="relative pl-12">
                <div className="absolute left-2.5 top-1.5 w-3 h-3 rounded-full border-2 border-accent bg-transparent animate-pulse" />
                <h4 className="font-mono text-sm text-muted-foreground mb-1">Próximo</h4>
                <p className="text-sm text-muted-foreground">
                  Engenheiro Sênior <span className="boot-shine font-semibold">Java/Spring Boot</span>{" "}
                  em produto de alto impacto e escala
                </p>
              </div>
            </div>

            {/* Methodologies */}
            <div>
              <h3 className="font-mono text-sm font-semibold mb-3 text-foreground">Metodologias &amp; Arquitetura</h3>
              <div className="flex flex-wrap gap-2">
                {methodologies.map((m) => (
                  <span key={m} className="px-3 py-1 bg-primary/10 border border-primary/20 text-primary rounded-md text-xs font-mono">
                    {m}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* ── Right: skill panels — instrument panel ── */}
          <div className="flex-1 w-full space-y-5 bg-background border border-border p-4 sm:p-6 rounded-lg shadow-xl cockpit-scanline relative">

            {/* Core Stack — Java · Spring Boot · Kotlin · Go */}
            <div>
              <h3 className="font-mono text-xs text-muted-foreground mb-3 border-b border-border pb-2 uppercase tracking-wider flex items-center gap-2">
                <Cpu size={12} className="text-primary" /> Core Stack
              </h3>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                {coreStack.map((skill) => (
                  <div key={skill.name} className={cardClass(skill.variant)}>
                    <div className="absolute inset-0 bg-gradient-to-br from-white/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none rounded-md" />
                    <skill.icon className={floatClass(skill.variant)} />
                    <span className={labelClass(skill.variant)}>{skill.name}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Spring Ecosystem */}
            <div>
              <h3 className="font-mono text-xs text-muted-foreground mb-3 border-b border-border pb-2 uppercase tracking-wider flex items-center gap-2">
                <SiSpring size={12} className="text-green-400" /> Ecossistema Spring
              </h3>
              <div className="flex flex-wrap gap-2">
                {springEcosystem.map((s) => (
                  <span key={s} className="px-2.5 py-1 bg-primary/10 border border-primary/20 text-primary rounded text-[11px] font-mono">
                    {s}
                  </span>
                ))}
              </div>
            </div>

            {/* Frontend */}
            <div>
              <h3 className="font-mono text-xs text-muted-foreground mb-3 border-b border-border pb-2 uppercase tracking-wider">Frontend</h3>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                {frontendSkills.map((skill) => (
                  <div key={skill.name} className="icon-card-3d flex flex-col items-center justify-center p-2.5 bg-card border border-border rounded-md cursor-default group">
                    <skill.icon className={`text-2xl mb-1.5 ${skill.color} opacity-80 group-hover:opacity-100 group-hover:scale-110 transition-all`} />
                    <span className="text-[10px] font-mono text-muted-foreground group-hover:text-foreground text-center leading-tight">{skill.name}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Databases */}
            <div>
              <h3 className="font-mono text-xs text-muted-foreground mb-3 border-b border-border pb-2 uppercase tracking-wider">Banco de Dados</h3>
              <div className="flex flex-wrap gap-2">
                {dbSkills.map((skill) => (
                  <div key={skill.name} className="icon-card-3d flex items-center gap-2 px-3 py-1.5 bg-card border border-border rounded-full text-xs font-mono cursor-default">
                    <skill.icon className={`${skill.color} opacity-80`} />
                    <span>{skill.name}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* DevOps */}
            <div>
              <h3 className="font-mono text-xs text-muted-foreground mb-3 border-b border-border pb-2 uppercase tracking-wider">Linux &amp; DevOps / Cloud</h3>
              <div className="flex flex-wrap gap-2">
                {opsSkills.map((skill) => (
                  <div key={skill.name} className="icon-card-3d flex items-center gap-2 px-3 py-1.5 bg-card border border-border rounded-full text-xs font-mono cursor-default">
                    <skill.icon className={`${skill.color} opacity-80`} />
                    <span>{skill.name}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Messaging + Security */}
            <div className="grid grid-cols-2 gap-3">
              <div>
                <h3 className="font-mono text-xs text-muted-foreground mb-2 border-b border-border pb-1.5 uppercase tracking-wider">
                  <MessageSquare size={10} className="inline mr-1" />Mensageria
                </h3>
                <div className="flex flex-col gap-1.5">
                  {messagingSkills.map((skill) => (
                    <div key={skill.name} className="icon-card-3d flex items-center gap-2 px-3 py-1.5 bg-card border border-border rounded-full text-xs font-mono cursor-default">
                      <skill.icon className={`${skill.color} opacity-80`} />
                      <span>{skill.name}</span>
                    </div>
                  ))}
                </div>
              </div>
              <div>
                <h3 className="font-mono text-xs text-muted-foreground mb-2 border-b border-border pb-1.5 uppercase tracking-wider">
                  <ShieldCheck size={10} className="inline mr-1" />Segurança
                </h3>
                <div className="flex flex-col gap-1.5">
                  {securitySkills.map((skill) => (
                    <div key={skill.name} className="icon-card-3d flex items-center gap-2 px-3 py-1.5 bg-card border border-border rounded-full text-xs font-mono cursor-default">
                      <skill.icon className={`${skill.color} opacity-80`} />
                      <span>{skill.name}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* AI Skills */}
            <div>
              <h3 className="font-mono text-xs text-muted-foreground mb-3 border-b border-border pb-2 uppercase tracking-wider">🤖 IA &amp; Prompts</h3>
              <div className="grid grid-cols-2 gap-2">
                {aiSkills.map((skill) => (
                  <div key={skill.name} className="icon-card-3d flex flex-col p-3 bg-card border border-primary/20 rounded-md cursor-default group">
                    <div className="flex items-center gap-2 mb-0.5">
                      <span className="text-base group-hover:scale-110 transition-transform">{skill.emoji}</span>
                      <span className="text-xs font-mono text-primary font-semibold">{skill.name}</span>
                    </div>
                    <span className="text-[10px] text-muted-foreground">{skill.desc}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
