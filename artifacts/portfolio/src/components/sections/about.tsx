import { Cloud, Database, GitBranch } from "lucide-react";
import {
  SiRubyonrails, SiRuby, SiReact, SiAngular, SiVuedotjs,
  SiDocker, SiLinux, SiGit, SiPostgresql, SiRedis,
  SiMysql, SiJavascript, SiTypescript,
} from "react-icons/si";

export function AboutSection() {
  const backendSkills = [
    { name: "Ruby on Rails", icon: SiRubyonrails, color: "text-red-400", rails: true },
    { name: "Ruby",          icon: SiRuby,        color: "text-red-300", rails: true },
    { name: "JavaScript",   icon: SiJavascript,  color: "text-yellow-400", rails: false },
    { name: "TypeScript",   icon: SiTypescript,  color: "text-blue-400", rails: false },
  ];

  const frontendSkills = [
    { name: "React",   icon: SiReact,   color: "text-cyan-400" },
    { name: "Angular", icon: SiAngular, color: "text-red-500" },
    { name: "Vue.js",  icon: SiVuedotjs, color: "text-green-500" },
  ];

  const dbSkills = [
    { name: "PostgreSQL", icon: SiPostgresql, color: "text-blue-300" },
    { name: "MySQL",      icon: SiMysql,      color: "text-orange-400" },
    { name: "Redis",      icon: SiRedis,      color: "text-red-500" },
    { name: "SQLite",     icon: Database,     color: "text-muted-foreground" },
  ];

  const opsSkills = [
    { name: "Linux Ubuntu", icon: SiLinux,    color: "text-foreground" },
    { name: "Bash Script",  icon: GitBranch,  color: "text-green-400" },
    { name: "Docker",       icon: SiDocker,   color: "text-blue-400" },
    { name: "Git / GitHub", icon: SiGit,      color: "text-orange-500" },
    { name: "AWS",          icon: Cloud,      color: "text-yellow-500" },
  ];

  const methodologies = [
    "Scrum", "Kanban", "APIs RESTful", "Clean Code",
    "TDD / RSpec", "MVC", "DevOps", "CI/CD",
  ];

  const aiSkills = [
    { name: "Prompt Engineering", desc: "ChatGPT · Claude · Gemini", emoji: "🧠" },
    { name: "GitHub Copilot",     desc: "Autocomplete & code review", emoji: "🤖" },
    { name: "OpenAI API",         desc: "Integração em apps Rails/React", emoji: "⚡" },
    { name: "AI-assisted Dev",    desc: "Cursor · Replit AI · Codeium", emoji: "🚀" },
  ];

  return (
    <section id="about" className="py-24 relative bg-card/30">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row gap-12 items-start">

          {/* — Left: narrative — */}
          <div className="flex-1 space-y-6">
            <h2 className="text-3xl font-bold tracking-tighter" data-testid="text-about-title">
              <span className="text-primary mr-2">#</span>Perfil Profissional
            </h2>

            <div className="prose prose-invert prose-p:font-sans prose-p:text-muted-foreground max-w-none space-y-4">
              <p>
                Desenvolvedor Full Stack com sólida experiência em{" "}
                <strong className="rails-shine font-bold">Ruby on Rails</strong>, React, Angular e
                Vue.js. Passei por três empresas entregando módulos internos, sistemas para prefeituras, projetos de
                segurança pública e sistemas para órgãos estaduais. Ambiente primário sempre <strong>Linux Ubuntu</strong>,
                com domínio de Shell Script e automações Bash.
              </p>
              <p>
                Habituado a metodologias ágeis (<strong>Scrum e Kanban</strong>), bancos de dados relacionais
                (PostgreSQL, MySQL) e APIs RESTful. Em consolidação como especialista{" "}
                <strong className="rails-shine">Rails</strong> com projetos
                pessoais publicados no GitHub Pages.
              </p>
            </div>

            {/* Timeline */}
            <div className="pt-4 relative">
              <div className="absolute left-4 top-10 bottom-4 w-0.5 bg-gradient-to-b from-blue-500 via-muted to-primary" />

              <div className="relative pl-12 mb-6">
                <div className="absolute left-2.5 top-1.5 w-3 h-3 rounded-full bg-blue-500 shadow-[0_0_10px_rgba(59,130,246,0.8)]" />
                <h4 className="font-mono text-sm text-blue-500 mb-1">Trajetória</h4>
                <p className="text-sm text-muted-foreground">
                  EDZA (Angular/Vue/Java EE) → LAMPP (<span className="rails-shine font-semibold">Ruby on Rails</span>/Node.js) → PRODEB (Vue.js/Spring Boot)
                </p>
              </div>

              <div className="relative pl-12 mb-6">
                <div className="absolute left-2.5 top-1.5 w-3 h-3 rounded-full bg-primary shadow-[0_0_10px_rgba(204,0,0,0.8)]" />
                <h4 className="font-mono text-sm text-primary mb-1">Agora</h4>
                <p className="text-sm text-muted-foreground">
                  Consolidando <span className="rails-shine font-semibold">Ruby on Rails</span> como stack principal — projetos pessoais publicados
                </p>
              </div>

              <div className="relative pl-12">
                <div className="absolute left-2.5 top-1.5 w-3 h-3 rounded-full border-2 border-primary bg-transparent animate-pulse" />
                <h4 className="font-mono text-sm text-muted-foreground mb-1">Próximo</h4>
                <p className="text-sm text-muted-foreground">
                  Engenheiro Sênior <span className="rails-shine font-semibold">Rails</span> em equipe de produto
                </p>
              </div>
            </div>

            {/* Methodologies */}
            <div>
              <h3 className="font-mono text-sm font-semibold mb-3 text-foreground">Metodologias</h3>
              <div className="flex flex-wrap gap-2">
                {methodologies.map((m) => (
                  <span
                    key={m}
                    className="px-3 py-1 bg-primary/10 border border-primary/20 text-primary rounded-md text-xs font-mono"
                  >
                    {m}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* — Right: skill panels — */}
          <div className="flex-1 w-full space-y-6 bg-background border border-border p-6 rounded-lg shadow-xl">

            {/* Backend / Core — Rails & Ruby get 3D treatment */}
            <div>
              <h3 className="font-mono text-xs text-muted-foreground mb-3 border-b border-border pb-2 uppercase tracking-wider">
                Backend &amp; Core
              </h3>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                {backendSkills.map((skill) =>
                  skill.rails ? (
                    /* ── 3D Rails / Ruby card ── */
                    <div
                      key={skill.name}
                      className="icon-card-3d icon-card-rails flex flex-col items-center justify-center p-3 rounded-md cursor-default group relative overflow-hidden"
                    >
                      {/* reflection sweep */}
                      <div className="absolute inset-0 bg-gradient-to-br from-white/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none rounded-md" />
                      <skill.icon className={`text-3xl mb-2 icon-rails-float ${skill.color}`} />
                      <span className="text-[10px] font-mono font-bold rails-shine text-center leading-tight">
                        {skill.name}
                      </span>
                    </div>
                  ) : (
                    /* ── regular 3D card ── */
                    <div
                      key={skill.name}
                      className="icon-card-3d flex flex-col items-center justify-center p-3 bg-card border border-border rounded-md cursor-default group"
                    >
                      <skill.icon className={`text-2xl mb-2 ${skill.color} opacity-80 group-hover:opacity-100 group-hover:scale-110 transition-all`} />
                      <span className="text-[10px] font-mono text-muted-foreground group-hover:text-foreground text-center">
                        {skill.name}
                      </span>
                    </div>
                  )
                )}
              </div>
            </div>

            {/* Frontend */}
            <div>
              <h3 className="font-mono text-xs text-muted-foreground mb-3 border-b border-border pb-2 uppercase tracking-wider">
                Frontend
              </h3>
              <div className="grid grid-cols-3 gap-3">
                {frontendSkills.map((skill) => (
                  <div
                    key={skill.name}
                    className="icon-card-3d flex flex-col items-center justify-center p-3 bg-card border border-border rounded-md cursor-default group"
                  >
                    <skill.icon className={`text-2xl mb-2 ${skill.color} opacity-80 group-hover:opacity-100 group-hover:scale-110 transition-all`} />
                    <span className="text-[10px] font-mono text-muted-foreground group-hover:text-foreground text-center">
                      {skill.name}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Databases */}
            <div>
              <h3 className="font-mono text-xs text-muted-foreground mb-3 border-b border-border pb-2 uppercase tracking-wider">
                Banco de Dados
              </h3>
              <div className="flex flex-wrap gap-2">
                {dbSkills.map((skill) => (
                  <div
                    key={skill.name}
                    className="icon-card-3d flex items-center gap-2 px-3 py-1.5 bg-card border border-border rounded-full text-xs font-mono cursor-default"
                  >
                    <skill.icon className={`${skill.color} opacity-80`} />
                    <span>{skill.name}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Infra / OS */}
            <div>
              <h3 className="font-mono text-xs text-muted-foreground mb-3 border-b border-border pb-2 uppercase tracking-wider">
                Linux &amp; DevOps
              </h3>
              <div className="flex flex-wrap gap-2">
                {opsSkills.map((skill) => (
                  <div
                    key={skill.name}
                    className="icon-card-3d flex items-center gap-2 px-3 py-1.5 bg-card border border-border rounded-full text-xs font-mono cursor-default"
                  >
                    <skill.icon className={`${skill.color} opacity-80`} />
                    <span>{skill.name}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* AI Skills */}
            <div>
              <h3 className="font-mono text-xs text-muted-foreground mb-3 border-b border-border pb-2 uppercase tracking-wider">
                🤖 IA &amp; Prompts
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                {aiSkills.map((skill) => (
                  <div
                    key={skill.name}
                    className="icon-card-3d flex flex-col p-3 bg-card border border-primary/20 rounded-md cursor-default group"
                  >
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
