import React from "react";
import { motion } from "framer-motion";
import { BriefcaseBusiness, MapPin, CalendarDays } from "lucide-react";
import {
  SiJavascript, SiVuedotjs, SiPostgresql, SiGit,
  SiAngular, SiReact, SiLinux, SiMysql, SiGnubash,
  SiRedis, SiDocker, SiSwagger, SiGo, SiSpringboot, SiTailwindcss,
  SiGithubactions, SiTypescript, SiKotlin, SiFlutter, SiNodedotjs, SiMongodb, SiVite, SiQuarkus,
  SiRubyonrails, SiRuby
} from "react-icons/si";
import { FaJava as SiJava } from "react-icons/fa6";
import type { AdminExperience, ProjectTone } from "@/lib/default-data";

const ICON_FALLBACKS: Record<ProjectTone, React.ComponentType<{ size?: number; className?: string }>> = {
  "tech-rails": SiRubyonrails,
  "tech-ruby": SiRuby,
  "tech-java": SiJava,
  "tech-spring": SiSpringboot,
  "tech-quarkus": SiQuarkus,
  "tech-kotlin": SiKotlin,
  "tech-flutter": SiFlutter,
  "tech-node": SiNodedotjs,
  "tech-next": SiNodedotjs,
  "tech-js": SiJavascript,
  "tech-postgres": SiPostgresql,
  "tech-mysql": SiMysql,
  "tech-redis": SiRedis,
  "tech-mongo": SiMongodb,
  "tech-docker": SiDocker,
  "tech-actions": SiGithubactions,
  "tech-react": SiReact,
  "tech-ts": SiTypescript,
  "tech-vue": SiVuedotjs,
  "tech-angular": SiAngular,
  "tech-jwt": SiJavascript,
  "tech-openapi": SiSwagger,
  "tech-pdf": SiJavascript,
  "tech-golang": SiGo,
  "tech-api": SiJavascript,
  "tech-tailwind": SiTailwindcss,
  "tech-vite": SiVite,
  "tech-git": SiGit,
  "tech-linux": SiLinux,
  "tech-bash": SiGnubash,
};

function TagIcon({ tone }: { tone: ProjectTone }) {
  const Cmp = ICON_FALLBACKS[tone] ?? SiJava;
  return <Cmp size={11} />;
}

type Props = { experiences: AdminExperience[] };

export function ExperienceSection({ experiences }: Props) {
  return (
    <section id="experience" className="py-24 relative border-y border-border overflow-hidden">
      <div className="absolute inset-0 neo-grid opacity-20 pointer-events-none" />
      <div className="container mx-auto px-4 relative">
        <p className="text-xs font-mono text-primary uppercase tracking-[0.24em] mb-3">
          Trajetória
        </p>
        <h2 className="text-3xl md:text-4xl font-bold tracking-tighter">
          Experiência que fortalece cada entrega.
        </h2>

        <div className="mt-10 max-w-4xl space-y-5">
          {experiences.map((item, index) => (
            <motion.article
              key={item.id}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="neo-experience-card rounded-xl p-5 sm:p-6 grid md:grid-cols-[11rem_1fr] gap-5"
            >
              <div className="font-mono text-xs text-muted-foreground space-y-3">
                <span className="flex items-center gap-2">
                  <CalendarDays size={14} className="text-primary" />
                  {item.period}
                </span>
                <span className="flex items-center gap-2">
                  <MapPin size={14} className="text-primary" />
                  {item.location}
                </span>
              </div>
              <div>
                <div className="flex gap-3">
                  <BriefcaseBusiness className="text-primary shrink-0 mt-1" size={18} />
                  <div>
                    <h3 className="font-bold text-lg">{item.role}</h3>
                    <p className="text-sm text-primary mt-1">{item.company}</p>
                  </div>
                </div>
                <p className="text-sm text-muted-foreground leading-relaxed mt-4 whitespace-pre-wrap">
                  {item.description}
                </p>
                <div className="flex flex-wrap gap-2 mt-4">
                  {item.tags.map((t, i) => (
                    <span
                      key={`${t.name}-${i}`}
                      className={`tech-tag ${t.tone} inline-flex items-center gap-1.5 font-mono px-2.5 py-1 rounded border text-[10.5px]`}
                    >
                      <TagIcon tone={t.tone} />
                      {t.name}
                    </span>
                  ))}
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
