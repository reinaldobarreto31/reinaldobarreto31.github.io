import { Router, type IRouter } from "express";

const router: IRouter = Router();

type ServiceState = "operational" | "degraded" | "maintenance" | "down";
type Severity = "info" | "low" | "medium" | "high" | "critical";

interface ServiceDef {
  name: string;
  region: string;
  baseLatency: number;
  baseUptime: number;
}

const SERVICES: ReadonlyArray<ServiceDef> = [
  { name: "API Gateway", region: "us-east-1", baseLatency: 42, baseUptime: 99.99 },
  { name: "Rails Web", region: "sa-east-1", baseLatency: 78, baseUptime: 99.97 },
  { name: "PostgreSQL Primary", region: "sa-east-1", baseLatency: 6, baseUptime: 99.995 },
  { name: "Redis Cache", region: "sa-east-1", baseLatency: 2, baseUptime: 99.99 },
  { name: "Sidekiq Workers", region: "sa-east-1", baseLatency: 120, baseUptime: 99.92 },
  { name: "S3 Storage", region: "us-east-1", baseLatency: 35, baseUptime: 99.999 },
  { name: "CDN Edge", region: "global", baseLatency: 18, baseUptime: 99.998 },
  { name: "Observability Stack", region: "us-east-1", baseLatency: 28, baseUptime: 99.95 },
];

function pickState(seed: number): ServiceState {
  const r = seed % 100;
  if (r < 92) return "operational";
  if (r < 97) return "degraded";
  if (r < 99) return "maintenance";
  return "down";
}

function jitter(base: number, range: number, seed: number): number {
  const noise = ((Math.sin(seed * 12.9898) * 43758.5453) % 1 + 1) % 1;
  return base + (noise - 0.5) * range;
}

router.get("/status/services", (_req, res) => {
  const now = Date.now();
  const bucket = Math.floor(now / 5000);

  const services = SERVICES.map((svc, idx) => {
    const seed = bucket + idx * 17;
    const state = pickState(seed);
    const latencyMultiplier =
      state === "down"
        ? 0
        : state === "degraded"
          ? 3.5
          : state === "maintenance"
            ? 1.6
            : 1;
    const latencyMs = Math.max(
      1,
      Math.round(jitter(svc.baseLatency * latencyMultiplier, svc.baseLatency * 0.4, seed)),
    );
    const uptime = Math.max(
      95,
      Math.min(100, svc.baseUptime - (state === "operational" ? 0 : 0.05)),
    );
    return {
      name: svc.name,
      region: svc.region,
      state,
      uptime: Number(uptime.toFixed(3)),
      latencyMs: state === "down" ? 0 : latencyMs,
      lastCheckedAt: new Date(now - (idx % 4) * 1000).toISOString(),
    };
  });

  const hasDown = services.some((s) => s.state === "down");
  const hasDegraded = services.some((s) => s.state === "degraded");
  const hasMaint = services.some((s) => s.state === "maintenance");
  const overall: ServiceState = hasDown
    ? "down"
    : hasDegraded
      ? "degraded"
      : hasMaint
        ? "maintenance"
        : "operational";

  res.json({
    overall,
    generatedAt: new Date(now).toISOString(),
    services,
  });
});

interface IncidentSeed {
  id: number;
  title: string;
  severity: Severity;
  service: string;
  startedHoursAgo: number;
  resolvedHoursAgo: number | null;
  summary: string;
}

const INCIDENTS: ReadonlyArray<IncidentSeed> = [
  {
    id: 1,
    title: "Elevated p99 em /api/v1/orders",
    severity: "medium",
    service: "Rails Web",
    startedHoursAgo: 6,
    resolvedHoursAgo: 5,
    summary:
      "Pico de latência causado por consulta N+1 em endpoint de pedidos. Mitigado com eager loading e cache de fragmentos.",
  },
  {
    id: 2,
    title: "Sidekiq queue backlog",
    severity: "low",
    service: "Sidekiq Workers",
    startedHoursAgo: 22,
    resolvedHoursAgo: 21,
    summary:
      "Acúmulo de jobs após deploy. Escalado de 4 para 8 workers temporariamente; throughput normalizado em 14 minutos.",
  },
  {
    id: 3,
    title: "Janela de manutenção programada",
    severity: "info",
    service: "PostgreSQL Primary",
    startedHoursAgo: 72,
    resolvedHoursAgo: 71,
    summary:
      "Upgrade menor de versão e VACUUM FULL aplicados durante janela de baixo tráfego. Zero downtime usando réplica.",
  },
  {
    id: 4,
    title: "Spike de erros 5xx no CDN Edge",
    severity: "high",
    service: "CDN Edge",
    startedHoursAgo: 168,
    resolvedHoursAgo: 167,
    summary:
      "Cache poisoning detectado em uma região; purge global e ajuste de regra de cache resolveram em 8 minutos.",
  },
  {
    id: 5,
    title: "Drift de configuração detectado",
    severity: "low",
    service: "Observability Stack",
    startedHoursAgo: 240,
    resolvedHoursAgo: 239,
    summary:
      "Terraform plan acusou diff inesperado em alertas Prometheus. Reaplicado via pipeline; documentação atualizada.",
  },
];

router.get("/status/incidents", (_req, res) => {
  const now = Date.now();
  const incidents = INCIDENTS.map((i) => ({
    id: i.id,
    title: i.title,
    severity: i.severity,
    service: i.service,
    startedAt: new Date(now - i.startedHoursAgo * 3600 * 1000).toISOString(),
    resolvedAt:
      i.resolvedHoursAgo === null
        ? null
        : new Date(now - i.resolvedHoursAgo * 3600 * 1000).toISOString(),
    summary: i.summary,
  }));
  res.json(incidents);
});

export default router;
