import { useHealthCheck, getHealthCheckQueryKey } from "@workspace/api-client-react";
import { Github, Linkedin, Mail } from "lucide-react";

export function Footer() {
  const { data: health, isError } = useHealthCheck({
    query: {
      refetchInterval: 30000,
      queryKey: getHealthCheckQueryKey()
    }
  });

  const isHealthy = !isError && health?.status === "ok";

  return (
    <footer className="bg-card border-t border-border py-12 pb-24 md:pb-12 mt-24 relative overflow-hidden">
      {/* Track motif */}
      <div className="absolute top-0 left-0 w-full h-1 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI0MCIgaGVpZ2h0PSI0Ij48cmVjdCB3aWR0aD0iMjAiIGhlaWdodD0iNCIgZmlsbD0icmdiYSgyNTUsMjU1LDI1NSwwLjEpIi8+PC9zdmc+')] opacity-50" />
      
      <div className="container mx-auto px-4 flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="flex flex-col items-center md:items-start gap-2">
          <span className="font-bold text-xl tracking-tighter">reinaldo.barreto</span>
          <p className="text-sm text-muted-foreground">Engenheiro de Software & DevOps</p>
        </div>

        <div className="flex items-center gap-4">
          <a href="https://github.com/reinaldobarreto31" target="_blank" rel="noreferrer" className="p-2 bg-muted rounded-full hover:bg-primary hover:text-primary-foreground transition-colors" data-testid="link-footer-github">
            <Github size={20} />
          </a>
          <a href="https://linkedin.com/in/reinaldo-barreto-2a4ba2116" target="_blank" rel="noreferrer" className="p-2 bg-muted rounded-full hover:bg-primary hover:text-primary-foreground transition-colors" data-testid="link-footer-linkedin">
            <Linkedin size={20} />
          </a>
          <a href="mailto:reinaldobarretosilva@gmail.com" className="p-2 bg-muted rounded-full hover:bg-primary hover:text-primary-foreground transition-colors" data-testid="link-footer-email">
            <Mail size={20} />
          </a>
        </div>

        <div className="flex items-center gap-2 text-xs font-mono bg-background px-3 py-1.5 rounded-md border border-border">
          <div className={`w-2 h-2 rounded-full ${isHealthy ? 'bg-secondary animate-pulse' : 'bg-destructive'}`} data-testid="indicator-api-health" />
          <span className="text-muted-foreground">API {isHealthy ? 'ok' : 'down'}</span>
        </div>
      </div>
    </footer>
  );
}
