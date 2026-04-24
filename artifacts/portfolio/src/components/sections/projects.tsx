import { motion } from "framer-motion";
import { ExternalLink, Github, Server, Database, Container } from "lucide-react";

export function ProjectsSection() {
  const projects = [
    {
      title: "Rails Ops Control",
      description: "Um painel de controle construído em Ruby on Rails para gerenciar clusters Kubernetes. Utiliza Hotwire para atualizações em tempo real do estado dos pods.",
      tech: ["Ruby on Rails", "Hotwire", "PostgreSQL", "K8s API"],
      icon: Server,
      link: "#",
      github: "#"
    },
    {
      title: "Go-Log-Streamer",
      description: "CLI em Go para streaming e agregação de logs de múltiplos containers Docker em tempo real. Baixíssimo consumo de memória.",
      tech: ["Go", "Docker API", "CLI"],
      icon: Terminal,
      link: "#",
      github: "#"
    },
    {
      title: "Auto-Deployer",
      description: "Webhook receiver em Rails que orquestra deploys usando pipelines do GitLab CI. Monitora tempo de build e taxa de sucesso.",
      tech: ["Ruby on Rails", "GitLab CI", "Redis", "Sidekiq"],
      icon: Container,
      link: "#",
      github: "#"
    },
    {
      title: "Observability Metrics",
      description: "Microserviço em Java Spring Boot exportando métricas customizadas para o Prometheus com dashboards no Grafana.",
      tech: ["Java", "Spring Boot", "Prometheus", "Grafana"],
      icon: Database,
      link: "#",
      github: "#"
    }
  ];

  return (
    <section id="projects" className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold tracking-tighter mb-12 flex items-center gap-2">
          <span className="text-primary">~/</span>projetos_destaque
        </h2>

        <div className="grid md:grid-cols-2 gap-6">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group relative bg-card border border-border rounded-lg p-6 overflow-hidden flex flex-col"
            >
              {/* Hover effect gradient */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              
              <div className="relative z-10 flex-1 flex flex-col">
                <div className="flex items-center justify-between mb-4">
                  <div className="p-2 bg-background border border-border rounded-md">
                    <project.icon className="text-primary" size={24} />
                  </div>
                  <div className="flex items-center gap-2 opacity-50 group-hover:opacity-100 transition-opacity">
                    <a href={project.github} className="hover:text-primary transition-colors">
                      <Github size={20} />
                    </a>
                    <a href={project.link} className="hover:text-primary transition-colors">
                      <ExternalLink size={20} />
                    </a>
                  </div>
                </div>

                <h3 className="text-xl font-bold mb-2 group-hover:text-primary transition-colors">{project.title}</h3>
                <p className="text-sm text-muted-foreground font-sans flex-1 mb-6">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2 mt-auto">
                  {project.tech.map((t) => (
                    <span key={t} className="text-xs font-mono px-2 py-1 bg-muted rounded-sm border border-border">
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

// Temporary icon to avoid import issues
function Terminal(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <polyline points="4 17 10 11 4 5" />
      <line x1="12" x2="20" y1="19" y2="19" />
    </svg>
  );
}
