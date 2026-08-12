import React, { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { CheckCircle2, Play, Terminal, ShieldCheck, Cpu, Flame, Coffee, Zap, Activity } from "lucide-react";
import { FaJava } from "react-icons/fa6";
import { SiSpringboot, SiKotlin, SiGo, SiDocker, SiQuarkus, SiPostgresql } from "react-icons/si";

type TestRun = {
  id: number;
  suite: string;
  lang: "Java 21" | "Kotlin" | "Go" | "QA Test";
  duration: string;
  status: "PASS" | "SUCCESS";
  color: string;
};

const INITIAL_TESTS: TestRun[] = [
  { id: 1, suite: "JUnit5 :: ConcurrentVirtualThreadsTest", lang: "Java 21", duration: "12ms", status: "PASS", color: "#007396" },
  { id: 2, suite: "SpringSecurity :: JwtAuthenticationFilterTest", lang: "Java 21", duration: "18ms", status: "PASS", color: "#6db33f" },
  { id: 3, suite: "QuarkusMutiny :: ReactiveEventLoopStreamTest", lang: "Java 21", duration: "8ms", status: "PASS", color: "#e0234e" },
  { id: 4, suite: "KotlinCoroutines :: ChannelStateFlowTest", lang: "Kotlin", duration: "5ms", status: "PASS", color: "#7f52ff" },
  { id: 5, suite: "GoBench :: GoroutinePoolLoadBench (1.5M ops/s)", lang: "Go", duration: "1ms", status: "PASS", color: "#00add8" },
  { id: 6, suite: "Testcontainers :: PostgreSQLDatabaseIntegrationTest", lang: "QA Test", duration: "45ms", status: "PASS", color: "#336791" },
  { id: 7, suite: "RestAssured :: HighConcurrencyApiContractTest", lang: "QA Test", duration: "22ms", status: "PASS", color: "#2f855a" },
];

export function TechStackAnimation() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const [logs, setLogs] = useState<TestRun[]>(INITIAL_TESTS);
  const [activeTab, setActiveTab] = useState<"ALL" | "JAVA" | "KOTLIN" | "GO" | "QA">("ALL");

  // Canvas particle background with code symbols and connection nodes
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animationFrameId: number;
    let width = (canvas.width = canvas.offsetWidth);
    let height = (canvas.height = canvas.offsetHeight);

    const handleResize = () => {
      if (!canvas) return;
      width = canvas.width = canvas.offsetWidth;
      height = canvas.height = canvas.offsetHeight;
    };
    window.addEventListener("resize", handleResize);

    // Particle nodes
    const particles = Array.from({ length: 32 }, () => ({
      x: Math.random() * width,
      y: Math.random() * height,
      vx: (Math.random() - 0.5) * 0.6,
      vy: (Math.random() - 0.5) * 0.6,
      size: Math.random() * 3 + 2,
      symbol: ["Java", "Kotlin", "Go", "QA", "{ }", "JUnit5", "✓"][Math.floor(Math.random() * 7)],
      color: ["#007396", "#6db33f", "#7f52ff", "#00add8", "#2f855a"][Math.floor(Math.random() * 5)],
      alpha: Math.random() * 0.5 + 0.2,
    }));

    const render = () => {
      ctx.clearRect(0, 0, width, height);

      // Draw subtle connections
      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x;
          const dy = particles[i].y - particles[j].y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < 130) {
            ctx.beginPath();
            ctx.moveTo(particles[i].x, particles[i].y);
            ctx.lineTo(particles[j].x, particles[j].y);
            ctx.strokeStyle = `rgba(184, 193, 236, ${0.15 * (1 - dist / 130)})`;
            ctx.lineWidth = 1;
            ctx.stroke();
          }
        }
      }

      // Draw particles & symbols
      particles.forEach((p) => {
        p.x += p.vx;
        p.y += p.vy;

        if (p.x < 0) p.x = width;
        if (p.x > width) p.x = 0;
        if (p.y < 0) p.y = height;
        if (p.y > height) p.y = 0;

        ctx.fillStyle = p.color;
        ctx.globalAlpha = p.alpha;
        ctx.font = "10px monospace";
        ctx.fillText(p.symbol, p.x, p.y);
      });

      ctx.globalAlpha = 1.0;
      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      window.removeEventListener("resize", handleResize);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  // Periodic simulated test execution stream
  useEffect(() => {
    const interval = setInterval(() => {
      const suites = [
        { name: "JUnit5 :: GarbageCollectorPauseZeroBenchmark", lang: "Java 21" as const, color: "#007396" },
        { name: "SpringData :: PanachePostgresPoolConcurrencyTest", lang: "Java 21" as const, color: "#6db33f" },
        { name: "KotlinFlow :: AndroidLiveDataPipelineTest", lang: "Kotlin" as const, color: "#7f52ff" },
        { name: "GoChannel :: ParallelWorkerPoolStreamTest", lang: "Go" as const, color: "#00add8" },
        { name: "QAAutomated :: EndToEndRestAssuredApiSuite", lang: "QA Test" as const, color: "#2f855a" },
        { name: "TDDMockito :: ServiceLayerIsolatedUnitTest", lang: "Java 21" as const, color: "#007396" },
      ];
      const pick = suites[Math.floor(Math.random() * suites.length)];
      const newRun: TestRun = {
        id: Date.now(),
        suite: pick.name,
        lang: pick.lang,
        duration: `${Math.floor(Math.random() * 20) + 2}ms`,
        status: "PASS",
        color: pick.color,
      };

      setLogs((prev) => [newRun, ...prev.slice(0, 7)]);
    }, 3200);

    return () => clearInterval(interval);
  }, []);

  const filteredLogs = logs.filter((log) => {
    if (activeTab === "ALL") return true;
    if (activeTab === "JAVA") return log.lang === "Java 21";
    if (activeTab === "KOTLIN") return log.lang === "Kotlin";
    if (activeTab === "GO") return log.lang === "Go";
    if (activeTab === "QA") return log.lang === "QA Test";
    return true;
  });

  return (
    <div className="relative w-full overflow-hidden my-6 rounded-2xl bg-[#e0e5ec] border border-white/80 shadow-[8px_8px_20px_#b8c1ec,-8px_-8px_20px_#ffffff] p-4 md:p-6">
      {/* Background Interactive Canvas */}
      <canvas ref={canvasRef} className="absolute inset-0 w-full h-full pointer-events-none opacity-60 z-0" />

      <div className="relative z-10 flex flex-col gap-4">
        {/* Header Bar */}
        <div className="flex flex-wrap items-center justify-between gap-3 border-b border-black/10 pb-3">
          <div className="flex items-center gap-2.5">
            <div className="w-9 h-9 rounded-xl bg-[#e0e5ec] border border-white/90 shadow-[inset_2px_2px_5px_#b8c1ec,inset_-2px_-2px_5px_#ffffff] flex items-center justify-center text-[#2f855a]">
              <Terminal size={18} />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <span className="font-mono font-bold text-xs uppercase tracking-wider text-[#2f855a] flex items-center gap-1.5">
                  <Activity size={13} className="animate-pulse" /> QA &amp; High-Performance Testing Pipeline
                </span>
                <span className="text-[10px] font-mono px-2 py-0.5 rounded-full bg-[#2f855a]/15 text-[#2f855a] font-semibold border border-[#2f855a]/30">
                  Java 21 · Kotlin · Go
                </span>
              </div>
              <p className="text-[11.5px] font-mono text-muted-foreground">
                Suíte de Testes Automatizados em Tempo Real (JUnit 5 · Mockito · RestAssured · Go Test · Coroutines)
              </p>
            </div>
          </div>

          {/* Technology Badges Filter */}
          <div className="flex items-center gap-1.5 flex-wrap">
            <button
              onClick={() => setActiveTab("ALL")}
              className={`px-2.5 py-1 rounded-lg text-[11px] font-mono font-bold transition-all ${
                activeTab === "ALL"
                  ? "bg-[#2f855a] text-white shadow-md"
                  : "bg-[#e0e5ec] text-muted-foreground border border-white/60 shadow-[2px_2px_5px_#b8c1ec,-2px_-2px_5px_#ffffff]"
              }`}
            >
              Todos (QA)
            </button>
            <button
              onClick={() => setActiveTab("JAVA")}
              className={`px-2.5 py-1 rounded-lg text-[11px] font-mono font-bold flex items-center gap-1 transition-all ${
                activeTab === "JAVA"
                  ? "bg-[#007396] text-white shadow-md"
                  : "bg-[#e0e5ec] text-[#007396] border border-white/60 shadow-[2px_2px_5px_#b8c1ec,-2px_-2px_5px_#ffffff]"
              }`}
            >
              <FaJava size={12} /> Java
            </button>
            <button
              onClick={() => setActiveTab("KOTLIN")}
              className={`px-2.5 py-1 rounded-lg text-[11px] font-mono font-bold flex items-center gap-1 transition-all ${
                activeTab === "KOTLIN"
                  ? "bg-[#7f52ff] text-white shadow-md"
                  : "bg-[#e0e5ec] text-[#7f52ff] border border-white/60 shadow-[2px_2px_5px_#b8c1ec,-2px_-2px_5px_#ffffff]"
              }`}
            >
              <SiKotlin size={12} /> Kotlin
            </button>
            <button
              onClick={() => setActiveTab("GO")}
              className={`px-2.5 py-1 rounded-lg text-[11px] font-mono font-bold flex items-center gap-1 transition-all ${
                activeTab === "GO"
                  ? "bg-[#00add8] text-white shadow-md"
                  : "bg-[#e0e5ec] text-[#00add8] border border-white/60 shadow-[2px_2px_5px_#b8c1ec,-2px_-2px_5px_#ffffff]"
              }`}
            >
              <SiGo size={12} /> Go
            </button>
          </div>
        </div>

        {/* Live Terminal Stream of QA Tests */}
        <div className="bg-[#181921] rounded-xl border border-[#44475a] p-3 text-xs font-mono shadow-inner min-h-[140px] flex flex-col justify-between">
          <div className="space-y-1.5 overflow-hidden">
            {filteredLogs.map((log) => (
              <motion.div
                key={log.id}
                initial={{ opacity: 0, x: -12 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.3 }}
                className="flex items-center justify-between gap-2 border-b border-[#282a36]/60 pb-1 text-[11px]"
              >
                <div className="flex items-center gap-2 min-w-0">
                  <CheckCircle2 size={13} className="text-[#50fa7b] shrink-0" />
                  <span
                    className="px-1.5 py-0.5 rounded text-[9.5px] font-bold uppercase shrink-0"
                    style={{ backgroundColor: `${log.color}25`, color: log.color, border: `1px solid ${log.color}50` }}
                  >
                    {log.lang}
                  </span>
                  <span className="text-[#f8f8f2] font-semibold truncate">{log.suite}</span>
                </div>
                <div className="flex items-center gap-2 shrink-0">
                  <span className="text-[#8be9fd] text-[10px]">{log.duration}</span>
                  <span className="text-[#50fa7b] font-bold text-[10px] bg-[#50fa7b]/10 px-1.5 py-0.2 rounded border border-[#50fa7b]/30">
                    {log.status}
                  </span>
                </div>
              </motion.div>
            ))}
          </div>

          <div className="pt-2 border-t border-[#282a36] flex items-center justify-between text-[10.5px] text-[#6272a4]">
            <span className="flex items-center gap-1.5">
              <ShieldCheck size={13} className="text-[#50fa7b]" /> 100% Cobertura de Testes Automatizados &amp; Validação QA
            </span>
            <span className="text-[#f1fa8c] animate-pulse">● Rodando Testes em Background...</span>
          </div>
        </div>
      </div>
    </div>
  );
}
