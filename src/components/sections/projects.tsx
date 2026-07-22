"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowUpRight, ExternalLink } from "lucide-react";
import { GithubIcon } from "@/components/icons";
import { projects } from "@/data/projects";
import { FadeIn, StaggerContainer, StaggerItem } from "@/components/animations";
import { Badge } from "@/components/ui/badge";

const projectVisuals: Record<string, { pattern: string; label: string }> = {
  "football-iq-ai": {
    pattern: "grid-cols-[repeat(8,1fr)] grid-rows-[repeat(4,1fr)]",
    label: "RAG Pipeline",
  },
  "stock-market-analysis": {
    pattern: "grid-cols-[repeat(12,1fr)] grid-rows-[repeat(3,1fr)]",
    label: "Forecast Models",
  },
  medify: {
    pattern: "grid-cols-[repeat(6,1fr)] grid-rows-[repeat(4,1fr)]",
    label: "OCR + AI",
  },
};

function ProjectVisual({ slug, title }: { slug: string; title: string }) {
  const visual = projectVisuals[slug] || {
    pattern: "grid-cols-[repeat(6,1fr)] grid-rows-[repeat(3,1fr)]",
    label: title,
  };

  return (
    <div className="relative w-full h-32 sm:h-40 rounded-xl overflow-hidden bg-secondary/50 border border-border/50 mb-6">
      <div className={`absolute inset-2 grid ${visual.pattern} gap-1 opacity-30`}>
        {Array.from({ length: 24 }).map((_, i) => (
          <div
            key={i}
            className={`rounded-sm ${
              i % 7 === 0
                ? "bg-orange/30"
                : i % 5 === 0
                  ? "bg-foreground/8"
                  : "bg-muted-foreground/5"
            }`}
          />
        ))}
      </div>
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="text-center">
          <div className="font-mono text-xs text-muted-foreground/60 tracking-widest uppercase">
            {visual.label}
          </div>
          <div className="mt-1 w-16 h-px bg-orange/20 mx-auto" />
        </div>
      </div>
      <div className="absolute top-3 right-3">
        <span className="font-mono text-[10px] text-muted-foreground/40 tracking-wider">
          {title.split(" ").length > 2
            ? title
                .split(" ")
                .slice(0, 2)
                .join(" ")
                .toUpperCase()
            : title.toUpperCase()}
        </span>
      </div>
    </div>
  );
}

export function Projects() {
  return (
    <section id="projects" className="section-padding py-24 relative">
      <div className="max-w-6xl mx-auto relative">
        <FadeIn>
          <p className="text-orange font-medium text-sm tracking-wide uppercase mb-3">
            Work
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight mb-4">
            Featured Projects
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mb-16">
            A selection of projects I&apos;ve built — from RAG systems to forecasting dashboards.
          </p>
        </FadeIn>

        <StaggerContainer className="grid gap-8" staggerDelay={0.1}>
          {projects.map((project, index) => {
            return (
              <StaggerItem key={project.slug}>
                <Link href={`/projects/${project.slug}`} className="group block">
                    <div className="relative border border-border rounded-2xl bg-card hover:border-border transition-all duration-300 overflow-hidden group-hover:shadow-[0_0_40px_-12px_rgba(232,102,10,0.08)]">
                    <div className="absolute top-0 left-0 w-1 h-full bg-gradient-to-b from-orange/40 via-orange/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                    <div className="absolute -left-2 -top-2 h-3 w-3 bg-foreground/0 group-hover:bg-orange/10 transition-colors duration-300 rounded-sm" />
                    <div className="absolute -right-2 -top-2 h-3 w-3 bg-foreground/0 group-hover:bg-orange/10 transition-colors duration-300 rounded-sm" />
                    <div className="absolute -left-2 -bottom-2 h-3 w-3 bg-foreground/0 group-hover:bg-orange/10 transition-colors duration-300 rounded-sm" />
                    <div className="absolute -right-2 -bottom-2 h-3 w-3 bg-foreground/0 group-hover:bg-orange/10 transition-colors duration-300 rounded-sm" />

                    <div className="p-6 sm:p-8">
                      <ProjectVisual slug={project.slug} title={project.title} />

                      <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-4 mb-4">
                        <div>
                          <div className="flex items-center gap-3 mb-1">
                            <span className="font-mono text-xs text-muted-foreground/30 tracking-wider">
                              {String(index + 1).padStart(2, "0")}
                            </span>
                            <h3 className="text-xl sm:text-2xl font-bold group-hover:text-orange transition-colors duration-500">
                              {project.title}
                            </h3>
                            <ArrowUpRight
                              size={16}
                              className="text-muted-foreground/40 group-hover:text-orange group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all duration-300"
                            />
                          </div>
                          <p className="text-muted-foreground text-sm ml-8">
                            {project.subtitle}
                          </p>
                        </div>
                        <div className="flex items-center gap-3 shrink-0 ml-8 sm:ml-0">
                          {project.github && (
                            <span className="inline-flex items-center gap-1.5 text-xs text-muted-foreground/60 hover:text-foreground transition-colors">
                              <GithubIcon className="w-3.5 h-3.5" />
                              Source
                            </span>
                          )}
                          {project.liveDemo && (
                            <span className="inline-flex items-center gap-1.5 text-xs text-muted-foreground/60 hover:text-foreground transition-colors">
                              <ExternalLink size={13} />
                              Live
                            </span>
                          )}
                        </div>
                      </div>

                      <p className="text-muted-foreground leading-relaxed mb-5 text-sm ml-8">
                        {project.description}
                      </p>

                      <div className="flex flex-wrap gap-1.5 ml-8">
                        {project.techStack.slice(0, 6).map((tech) => (
                          <Badge
                            key={tech}
                            variant="secondary"
                            className="text-[11px] font-mono font-normal bg-secondary text-muted-foreground border border-border"
                          >
                            {tech}
                          </Badge>
                        ))}
                        {project.techStack.length > 6 && (
                          <Badge
                            variant="secondary"
                            className="text-[11px] font-mono font-normal bg-secondary text-muted-foreground border border-border"
                          >
                            +{project.techStack.length - 6}
                          </Badge>
                        )}
                      </div>
                    </div>
                  </div>
                </Link>
              </StaggerItem>
            );
          })}
        </StaggerContainer>
      </div>
    </section>
  );
}
