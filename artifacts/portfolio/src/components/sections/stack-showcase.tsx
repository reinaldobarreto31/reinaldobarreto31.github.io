import { useState } from "react";
import { motion } from "framer-motion";
import { SiRuby, SiRubyonrails, SiPostgresql, SiRedis, SiDocker, SiGithubactions } from "react-icons/si";
import { TestTube, Clock, Shield, Layers, Zap, Satellite, Cpu, Activity, ExternalLink } from "lucide-react";

type StackCard = {
  name: string;
  tagline: string;
  tone: string;
  frontIcon: "ruby" | "rails" | "postgres" | "docker" | "rspec" | "sidekiq" | "devise" | "pundit" | "hotwire" | "redis" | "api" | "observability";
  frontDetail: string;
  backTitle: string;
  backSubtitle: string;
  gems: string[];
  patterns: string[];
};

const STACK: StackCard[] = [
  {
    name: "Ruby",
    tagline: "Linguagem expressiva",
    tone: "tech-ruby",
    frontIcon: "ruby",
    frontDetail: "Código legível, orientado a objetos e pensado para entregar valor rápido.",
    backTitle: "Ecosistema Ruby",
    backSubtitle: "Padrões e ferramentas do dia a dia",
    gems: ["Bundler", "Rake", "IRB", "RubyGems", "Dry-rb"],
    patterns: ["POO", "Duck Typing", "Blocks", "Metaprogramação", "Modules"],
  },
  {
    name: "Ruby on Rails",
    tagline: "Framework principal",
    tone: "tech-rails",
    frontIcon: "rails",
    frontDetail: "Aplicações web completas com convenções sólidas, segurança e manutenção simples.",
    backTitle: "Rails além do básico",
    backSubtitle: "Recursos de sênior em produção",
    gems: ["Active Record", "Active Job", "Action Cable", "Active Storage", "Action Mailer"],
    patterns: ["MVC", "Convenção sobre Config", "Filters", "Concerns", "Engines"],
  },
  {
    name: "Testes & Qualidade",
    tagline: "Confiança em cada deploy",
    tone: "tech-ruby",
    frontIcon: "rspec",
    frontDetail: "Suíte de testes robusta, TDD e cobertura que garante refatoração segura.",
    backTitle: "Pirâmide de testes Rails",
    backSubtitle: "Gemas e técnicas de qualidade",
    gems: ["RSpec", "Capybara", "FactoryBot", "Faker", "SimpleCov", "RuboCop"],
    patterns: ["TDD / BDD", "Unit tests", "Request specs", "System tests", "Mocks & Stubs"],
  },
  {
    name: "Background Jobs",
    tagline: "Processamento assíncrono",
    tone: "tech-postgres",
    frontIcon: "sidekiq",
    frontDetail: "Filas, workers e jobs escaláveis para e-mails, relatórios e integrações.",
    backTitle: "Assíncrono e performático",
    backSubtitle: "Jobs e agendamento em produção",
    gems: ["Sidekiq", "Sidekiq Cron", "Active Job", "Resque", "GoodJob"],
    patterns: ["Filas prioritárias", "Retries com backoff", "Batch jobs", "Idempotência", "Dead Sets"],
  },
  {
    name: "Autenticação",
    tagline: "Acesso seguro e controlado",
    tone: "tech-docker",
    frontIcon: "devise",
    frontDetail: "Autenticação robusta com recuperação, confirmável, OmniAuth e 2FA.",
    backTitle: "Identidade e sessão",
    backSubtitle: "Gemas de auth e segurança",
    gems: ["Devise", "Devise-JWT", "OmniAuth", "Warden", "Rodauth"],
    patterns: ["JWT", "OAuth 2.0", "BCrypt", "Session Store", "Remember me"],
  },
  {
    name: "Autorização",
    tagline: "Permissões granulares",
    tone: "tech-actions",
    frontIcon: "pundit",
    frontDetail: "Políticas, roles e escopos para controlar exatamente quem vê o quê.",
    backTitle: "Controle de acesso",
    backSubtitle: "Autorização em camadas",
    gems: ["Pundit", "CanCanCan", "Rolify", "Consul", "Action Policy"],
    patterns: ["Policy objects", "Scoped views", "Role-based (RBAC)", "ABAC", "Auditoria"],
  },
  {
    name: "Hotwire & Frontend",
    tagline: "SPA sem JS customizado",
    tone: "tech-rails",
    frontIcon: "hotwire",
    frontDetail: "Turbo Frames/Streams + Stimulus para UI reativa sem sair do Rails.",
    backTitle: "Rails moderno no frontend",
    backSubtitle: "Hotwire, componentes e UX",
    gems: ["Turbo Rails", "Stimulus", "StimulusReflex", "CableReady", "ViewComponent"],
    patterns: ["Turbo Frames", "Turbo Streams", "Stimulus controllers", "Partials reativas", "Broadcasting"],
  },
  {
    name: "Cache & Performance",
    tagline: "Velocidade com Redis",
    tone: "tech-redis",
    frontIcon: "redis",
    frontDetail: "Fragment caching, Russian doll, view e query cache para resposta em ms.",
    backTitle: "Performance em camadas",
    backSubtitle: "Cache, sessões e pub/sub",
    gems: ["Redis", "Rails Cache", "Dalli (Memcached)", "Rack::Attack", "Bullet (N+1)"],
    patterns: ["Fragment cache", "Russian doll", "Low-level cache", "Etags", "Counter cache"],
  },
  {
    name: "PostgreSQL",
    tagline: "Dados consistentes",
    tone: "tech-postgres",
    frontIcon: "postgres",
    frontDetail: "Modelagem, JSONB, índices avançados e transactions para bases que crescem.",
    backTitle: "Além do básico no banco",
    backSubtitle: "Recursos avançados Postgres",
    gems: ["Active Record", "Scenic (views)", "PgSearch", "Foreigner", "Strong Migrations"],
    patterns: ["JSONB / Hstore", "Índices GIN/GiST", "CTE e Window Fns", "Advisory Locks", "Materialized Views"],
  },
  {
    name: "API & Microserviços",
    tagline: "Integração e escala",
    tone: "tech-actions",
    frontIcon: "api",
    frontDetail: "APIs REST e JSON:API, versionamento, autenticação e contratos bem definidos.",
    backTitle: "Rails como API & Hub",
    backSubtitle: "Padrões e integrações",
    gems: ["jsonapi-serializer", "Rack::Cors", "Devise Token Auth", "GraphQL (Ruby)", "HTTParty / Faraday"],
    patterns: ["REST puro", "JSON:API", "Versionamento URI/header", "Rate limiting", "Circuit Breaker"],
  },
  {
    name: "Mensageria & Eventos",
    tagline: "Event-driven e filas",
    tone: "tech-redis",
    frontIcon: "satellite",
    frontDetail: "Webhooks, pub/sub, Streams e integração com serviços externos de forma confiável.",
    backTitle: "Comunicação assíncrona",
    backSubtitle: "Eventos e integração",
    gems: ["Action Cable", "Redis Streams", "Kafka (ruby-kafka)", "Stripe Event", "Sidekiq Pro"],
    patterns: ["Event Sourcing", "Outbox Pattern", "Idempotência Webhook", "Pub/Sub", "Retry / DLQ"],
  },
  {
    name: "Observabilidade",
    tagline: "Sabe o que acontece em prod",
    tone: "tech-docker",
    frontIcon: "observability",
    frontDetail: "Logs estruturados, métricas, tracing e alertas para dormir tranquilo de plantão.",
    backTitle: "Monitoração e Debug",
    backSubtitle: "Rastreabilidade de ponta a ponta",
    gems: ["Lograge", "Semantic Logger", "Scout / New Relic", "Sentry", "Prometheus (Yabeda)"],
    patterns: ["Logs JSON", "APM", "Tracing distribuído", "Alertas SLO", "Health checks"],
  },
];

function FrontIcon({ kind }: { kind: StackCard["frontIcon"] }) {
  const cls = "tech-icon text-3xl";
  switch (kind) {
    case "ruby": return <SiRuby className={cls} />;
    case "rails": return <SiRubyonrails className={cls} />;
    case "postgres": return <SiPostgresql className={cls} />;
    case "docker": return <SiDocker className={cls} />;
    case "redis": return <SiRedis className={cls} />;
    case "rspec": return <TestTube className="tech-icon text-[1.75rem]" />;
    case "sidekiq": return <Clock className="tech-icon text-[1.75rem]" />;
    case "devise": return <Shield className="tech-icon text-[1.75rem]" />;
    case "pundit": return <Layers className="tech-icon text-[1.75rem]" />;
    case "hotwire": return <Zap className="tech-icon text-[1.75rem]" />;
    case "api": return <Cpu className="tech-icon text-[1.75rem]" />;
    case "satellite": return <Satellite className="tech-icon text-[1.75rem]" />;
    case "observability": return <Activity className="tech-icon text-[1.75rem]" />;
    default: return <SiRuby className={cls} />;
  }
}

export function StackShowcaseSection() {
  const [flipped, setFlipped] = useState<Record<string, boolean>>({});
  const toggle = (n: string) => setFlipped(prev => ({ ...prev, [n]: !prev[n] }));
  return (
    <section id="stack" className="py-24 relative bg-card/30 overflow-hidden">
      <div className="absolute inset-0 pointer-events-none rails-grid opacity-30" />
      <div className="container mx-auto px-4 relative">
        <div className="max-w-2xl mb-12">
          <p className="text-xs font-mono text-primary uppercase tracking-[.24em] mb-3">Stack completo</p>
          <h2 className="text-3xl md:text-4xl font-bold tracking-tighter">Ruby on Rails, do domínio ao deploy.</h2>
          <p className="text-muted-foreground mt-3 leading-relaxed">
            Passe o mouse <em className="text-primary">ou clique</em> no card e ele <strong>vira</strong> — revelando as gemas, padrões e técnicas de um Rails sênior em produção.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {STACK.map((item, index) => {
            const isFlipped = !!flipped[item.name];
            return (
              <motion.div
                key={item.name}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ delay: index * 0.05 }}
                className={`rails-flip-card-scope`}
              >
                <button
                  type="button"
                  onClick={() => toggle(item.name)}
                  aria-pressed={isFlipped}
                  className={`rails-flip-card ${item.tone} ${isFlipped ? "is-flipped" : ""}`}
                >
                  <div className="rails-flip-inner">
                    <div className="rails-flip-face rails-flip-front">
                      <div className="flex items-start justify-between mb-1">
                        <div className="rails-icon p-3 rounded-xl"><FrontIcon kind={item.frontIcon} /></div>
                        <span className="text-[10px] font-mono text-muted-foreground uppercase tracking-wider opacity-80 group-hover:opacity-100 transition-opacity">virar ↻</span>
                      </div>
                      <p className="tech-label text-xs font-mono mt-4">{item.tagline}</p>
                      <h3 className="text-xl font-bold mt-1 tracking-tight">{item.name}</h3>
                      <p className="text-sm leading-relaxed text-muted-foreground mt-3">{item.frontDetail}</p>
                      <div className="mt-auto pt-5 flex items-center justify-between">
                        <span className="text-[10px] font-mono text-muted-foreground">passe / clique →</span>
                        <span className="text-[10px] font-mono px-2 py-1 rounded-md border border-primary/40 text-primary/90">flip</span>
                      </div>
                    </div>
                    <div className="rails-flip-face rails-flip-back">
                      <div className="flex items-center gap-2 mb-3">
                        <div className="rails-icon p-2 rounded-lg"><FrontIcon kind={item.frontIcon} /></div>
                        <div className="min-w-0">
                          <p className="tech-label text-[10px] font-mono uppercase tracking-wider opacity-90">{item.backSubtitle}</p>
                          <h3 className="text-[15px] font-bold leading-tight">{item.backTitle}</h3>
                        </div>
                      </div>
                      <div className="space-y-3">
                        <div>
                          <p className="text-[10px] font-mono uppercase tracking-widest text-foreground/70 mb-1.5">Gemas</p>
                          <div className="flex flex-wrap gap-1.5">
                            {item.gems.map(g => (
                              <span key={g} className="tech-tag text-[10px] font-mono px-2 py-0.5 rounded-md border leading-tight">{g}</span>
                            ))}
                          </div>
                        </div>
                        <div>
                          <p className="text-[10px] font-mono uppercase tracking-widest text-foreground/70 mb-1.5">Padrões</p>
                          <div className="flex flex-wrap gap-1.5">
                            {item.patterns.map(p => (
                              <span key={p} className="text-[10px] font-mono px-2 py-0.5 rounded-md border border-foreground/15 bg-foreground/5 text-foreground/80 leading-tight">{p}</span>
                            ))}
                          </div>
                        </div>
                      </div>
                      <div className="mt-auto pt-4 flex items-center justify-between">
                        <span className="text-[10px] font-mono text-muted-foreground">clique para ↺ voltar</span>
                        <span className="text-[10px] font-mono px-2 py-1 rounded-md border border-foreground/25 text-foreground/80">verso</span>
                      </div>
                    </div>
                  </div>
                </button>
              </motion.div>
            );
          })}
        </div>

        <a href="#projects" className="mt-10 inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors">
          Explorar projetos Rails <ExternalLink size={15} />
        </a>
      </div>
    </section>
  );
}
