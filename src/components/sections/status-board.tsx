import { motion } from "framer-motion";
import { format } from "date-fns";
import { Activity, AlertCircle, CheckCircle2, Clock, ServerCrash, AlertTriangle } from "lucide-react";

export function StatusBoardSection() {
  const isLoadingStatus = false;
  const isLoadingIncidents = false;

  const statusData = {
    generatedAt: new Date().toISOString(),
    overall: "operational",
    services: [
      { name: "API Gateway", region: "sa-east-1 (SP)", uptime: 99.98, latencyMs: 14, state: "operational" },
      { name: "PostgreSQL Database", region: "sa-east-1 (SP)", uptime: 99.99, latencyMs: 8, state: "operational" },
      { name: "Redis Cache Cluster", region: "sa-east-1 (SP)", uptime: 100.0, latencyMs: 2, state: "operational" },
      { name: "S3 Object Storage", region: "us-east-1 (VA)", uptime: 99.95, latencyMs: 42, state: "operational" },
      { name: "CDN Edge Nodes", region: "Global Edge", uptime: 99.99, latencyMs: 5, state: "operational" },
    ]
  };

  const incidentsData = [
    {
      id: "inc-1",
      severity: "info",
      title: "Manutenção Programada Concluída",
      service: "PostgreSQL Database",
      startedAt: new Date(Date.now() - 3600000 * 24 * 2).toISOString(),
      summary: "Atualização de índice e otimização de queries no banco de dados concluídas com sucesso. Zero downtime."
    }
  ];

  const getStatusColor = (state?: string) => {
    switch (state) {
      case "operational": return "text-secondary";
      case "degraded": return "text-yellow-500";
      case "maintenance": return "text-blue-500";
      case "down": return "text-destructive";
      default: return "text-muted-foreground";
    }
  };

  const getStatusBgColor = (state?: string) => {
    switch (state) {
      case "operational": return "bg-secondary";
      case "degraded": return "bg-yellow-500";
      case "maintenance": return "bg-blue-500";
      case "down": return "bg-destructive";
      default: return "bg-muted";
    }
  };

  const getSeverityIcon = (severity?: string) => {
    switch (severity) {
      case "critical": return <ServerCrash className="text-destructive" size={16} />;
      case "high": return <AlertTriangle className="text-destructive" size={16} />;
      case "medium": return <AlertCircle className="text-yellow-500" size={16} />;
      case "low": return <AlertCircle className="text-blue-500" size={16} />;
      case "info": return <Activity className="text-muted-foreground" size={16} />;
      default: return <Activity className="text-muted-foreground" size={16} />;
    }
  };

  return (
    <section id="status" className="py-24 relative border-b border-border bg-card/50">
      <div className="container mx-auto px-4">
        <div className="mb-12 flex flex-col md:flex-row md:items-end justify-between gap-4">
          <div>
            <h2 className="text-3xl font-bold tracking-tighter flex items-center gap-2">
              <Activity className="text-primary" />
              sys.status
            </h2>
            <p className="text-muted-foreground font-mono text-sm mt-2">
              Monitoramento em tempo real da infraestrutura
            </p>
          </div>
          
          <div className="flex items-center gap-2 bg-background border border-border px-3 py-1.5 rounded-md font-mono text-xs">
            <span className="text-muted-foreground">last_check:</span>
            <span className={statusData?.generatedAt ? "text-foreground" : "text-muted-foreground"} data-testid="text-status-last-checked">
              {statusData?.generatedAt ? format(new Date(statusData.generatedAt), "HH:mm:ss") : "--:--:--"}
            </span>
            <div className={`w-2 h-2 rounded-full ml-2 ${statusData ? 'bg-secondary animate-pulse' : 'bg-muted'}`} />
          </div>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Main Status Board */}
          <div className="lg:col-span-2 space-y-6">
            <div className="bg-background border border-border rounded-lg overflow-hidden shadow-lg">
              <div className="p-4 border-b border-border bg-card flex justify-between items-center">
                <h3 className="font-mono text-sm uppercase tracking-wider font-bold">Services_Overview</h3>
                {statusData?.overall && (
                  <div className={`flex items-center gap-2 px-3 py-1 rounded-full border border-border bg-background text-xs font-mono font-bold ${getStatusColor(statusData.overall)}`} data-testid="badge-overall-status">
                    <div className={`w-2 h-2 rounded-full ${getStatusBgColor(statusData.overall)}`} />
                    {statusData.overall.toUpperCase()}
                  </div>
                )}
              </div>
              
              <div className="p-0">
                {isLoadingStatus ? (
                  <div className="p-8 text-center text-muted-foreground font-mono text-sm flex items-center justify-center gap-2">
                    <Activity className="animate-spin" size={16} /> Carregando métricas...
                  </div>
                ) : (
                  <table className="w-full text-sm font-mono text-left">
                    <thead className="bg-card text-muted-foreground border-b border-border">
                      <tr>
                        <th className="px-4 py-3 font-normal">Service</th>
                        <th className="px-4 py-3 font-normal hidden sm:table-cell">Region</th>
                        <th className="px-4 py-3 font-normal text-right">Uptime</th>
                        <th className="px-4 py-3 font-normal text-right">Latency</th>
                        <th className="px-4 py-3 font-normal text-right">Status</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-border">
                      {statusData?.services?.map((service, i) => (
                        <motion.tr 
                          key={service.name}
                          initial={{ opacity: 0, x: -10 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: i * 0.05 }}
                          className="hover:bg-muted/50 transition-colors"
                          data-testid={`row-service-${service.name.toLowerCase()}`}
                        >
                          <td className="px-4 py-3 font-bold">{service.name}</td>
                          <td className="px-4 py-3 text-muted-foreground hidden sm:table-cell">{service.region}</td>
                          <td className="px-4 py-3 text-right">
                            {service.uptime.toFixed(2)}%
                          </td>
                          <td className="px-4 py-3 text-right text-muted-foreground">
                            {service.latencyMs}ms
                          </td>
                          <td className="px-4 py-3">
                            <div className="flex items-center justify-end gap-2">
                              <span className={getStatusColor(service.state)}>{service.state}</span>
                              <div className={`w-1.5 h-1.5 rounded-full ${getStatusBgColor(service.state)}`} />
                            </div>
                          </td>
                        </motion.tr>
                      ))}
                    </tbody>
                  </table>
                )}
              </div>
            </div>
          </div>

          {/* Incidents List */}
          <div className="space-y-6">
            <div className="bg-background border border-border rounded-lg overflow-hidden shadow-lg h-full flex flex-col">
              <div className="p-4 border-b border-border bg-card flex items-center gap-2">
                <AlertCircle size={16} className="text-muted-foreground" />
                <h3 className="font-mono text-sm uppercase tracking-wider font-bold">Incidentes_Recentes</h3>
              </div>
              
              <div className="flex-1 overflow-auto max-h-[400px]">
                {isLoadingIncidents ? (
                  <div className="p-8 text-center text-muted-foreground font-mono text-sm flex items-center justify-center gap-2">
                    <Clock className="animate-spin" size={16} /> Buscando histórico...
                  </div>
                ) : incidentsData && incidentsData.length > 0 ? (
                  <div className="divide-y divide-border">
                    {incidentsData.map((incident) => (
                      <div key={incident.id} className="p-4 hover:bg-muted/50 transition-colors" data-testid={`item-incident-${incident.id}`}>
                        <div className="flex items-start gap-3">
                          <div className="mt-0.5">{getSeverityIcon(incident.severity)}</div>
                          <div className="flex-1">
                            <h4 className="font-bold text-sm mb-1">{incident.title}</h4>
                            <p className="text-xs text-muted-foreground font-mono mb-2">
                              {incident.service} • {format(new Date(incident.startedAt), "dd/MM/yyyy HH:mm")}
                            </p>
                            <p className="text-xs text-foreground/80 leading-relaxed">
                              {incident.summary}
                            </p>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                ) : (
                  <div className="p-8 flex flex-col items-center justify-center text-center text-muted-foreground h-full gap-3">
                    <CheckCircle2 size={32} className="text-secondary/50" />
                    <p className="font-mono text-sm">Nenhum incidente recente.</p>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
