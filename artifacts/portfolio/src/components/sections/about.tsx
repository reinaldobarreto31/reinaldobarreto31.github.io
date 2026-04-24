import { Cloud } from "lucide-react";
import { SiRubyonrails, SiRuby, SiOpenjdk, SiGo, SiDocker, SiKubernetes, SiLinux, SiGit, SiPostgresql, SiRedis } from "react-icons/si";

export function AboutSection() {
  const devSkills = [
    { name: "Ruby on Rails", icon: SiRubyonrails, color: "text-primary" },
    { name: "Ruby", icon: SiRuby, color: "text-primary" },
    { name: "Java", icon: SiOpenjdk, color: "text-blue-500" },
    { name: "Go", icon: SiGo, color: "text-cyan-400" },
  ];

  const opsSkills = [
    { name: "Docker", icon: SiDocker, color: "text-blue-400" },
    { name: "Kubernetes", icon: SiKubernetes, color: "text-blue-600" },
    { name: "AWS", icon: Cloud, color: "text-yellow-500" },
    { name: "Linux", icon: SiLinux, color: "text-foreground" },
    { name: "Git", icon: SiGit, color: "text-orange-500" },
    { name: "PostgreSQL", icon: SiPostgresql, color: "text-blue-300" },
    { name: "Redis", icon: SiRedis, color: "text-red-500" },
  ];

  return (
    <section id="about" className="py-24 relative bg-card/30">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row gap-12 items-start">
          
          <div className="flex-1 space-y-6">
            <h2 className="text-3xl font-bold tracking-tighter" data-testid="text-about-title">
              <span className="text-primary mr-2">#</span>Transição de Carreira
            </h2>
            
            <div className="prose prose-invert prose-p:font-sans prose-p:text-muted-foreground max-w-none">
              <p>
                Iniciei minha jornada resolvendo problemas de infraestrutura e administração de sistemas. 
                Com o tempo, evoluí para o desenvolvimento, atuando com Java e ecossistema corporativo, mas sempre 
                com um olhar atento para a esteira de CI/CD, observabilidade e containers.
              </p>
              <p>
                Atualmente, estou focado em me tornar um especialista em <strong>Ruby on Rails</strong>. 
                A filosofia do Rails de "convenção sobre configuração" combinada com minha bagagem em SRE 
                me permite construir e operar aplicações web robustas com velocidade e previsibilidade.
              </p>
            </div>
            
            {/* Timeline transition */}
            <div className="pt-6 relative">
              <div className="absolute left-4 top-10 bottom-4 w-0.5 bg-gradient-to-b from-blue-500 via-muted to-primary" />
              
              <div className="relative pl-12 mb-6">
                <div className="absolute left-2.5 top-1.5 w-3 h-3 rounded-full bg-blue-500 shadow-[0_0_10px_rgba(59,130,246,0.8)]" />
                <h4 className="font-mono text-sm text-blue-500 mb-1">O Passado</h4>
                <p className="text-sm text-muted-foreground">Java, Spring Boot, microsserviços pesados e resolução de gargalos de infraestrutura.</p>
              </div>
              
              <div className="relative pl-12">
                <div className="absolute left-2.5 top-1.5 w-3 h-3 rounded-full bg-primary shadow-[0_0_10px_rgba(220,38,38,0.8)]" />
                <h4 className="font-mono text-sm text-primary mb-1">O Presente / Futuro</h4>
                <p className="text-sm text-muted-foreground">Ruby on Rails, monolitos majestosos, Go para ferramentas de CLI e automação de operações de alta performance.</p>
              </div>
            </div>
          </div>
          
          <div className="flex-1 w-full space-y-8 bg-background border border-border p-6 rounded-lg shadow-xl">
            <div>
              <h3 className="font-mono text-sm text-muted-foreground mb-4 border-b border-border pb-2 uppercase tracking-wider">
                Dev_Stack
              </h3>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
                {devSkills.map((skill) => (
                  <div key={skill.name} className="flex flex-col items-center justify-center p-3 bg-card border border-border rounded-md hover:border-primary/50 transition-colors group">
                    <skill.icon className={`text-2xl mb-2 ${skill.color} opacity-80 group-hover:opacity-100 group-hover:scale-110 transition-all`} />
                    <span className="text-[10px] font-mono text-muted-foreground group-hover:text-foreground">{skill.name}</span>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <h3 className="font-mono text-sm text-muted-foreground mb-4 border-b border-border pb-2 uppercase tracking-wider">
                Ops_Stack
              </h3>
              <div className="flex flex-wrap gap-2">
                {opsSkills.map((skill) => (
                  <div key={skill.name} className="flex items-center gap-2 px-3 py-1.5 bg-card border border-border rounded-full text-xs font-mono hover:bg-muted transition-colors">
                    <skill.icon className={`${skill.color} opacity-70`} />
                    <span>{skill.name}</span>
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
