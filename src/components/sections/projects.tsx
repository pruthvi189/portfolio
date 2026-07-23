"use client";

import { motion } from "framer-motion";
import { ExternalLink, GithubIcon } from "@/components/icons";
import { projects } from "@/data/projects";

export function Projects() {
  return (
    <section id="projects" className="scroll-mt-24 relative flex w-full flex-col items-center bg-[#080808] px-4 pt-32 pb-24 sm:px-6 lg:px-8">
      <div className="pointer-events-none absolute left-1/2 top-0 -z-10 h-px w-1/2 -translate-x-1/2 bg-gradient-to-r from-transparent via-[#d97706]/20 to-transparent" />

      <div className="relative z-10 w-full max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6, ease: [0.21, 0.47, 0.32, 0.98] }}
          className="mb-14 flex flex-col gap-1 md:flex-row md:items-end md:justify-between"
        >
          <div>
            <div className="mb-3 flex items-center gap-2.5">
              <span className="font-mono text-[9px] uppercase tracking-[0.25em] text-white/30">Work</span>
            </div>
            <h2 className="font-sans text-4xl font-black uppercase leading-none tracking-tighter text-[#f5f5f0] sm:text-5xl md:text-6xl">
              Selected Work
            </h2>
          </div>
          <p className="font-mono text-[10px] uppercase tracking-widest text-white/30 md:text-right">
            {projects.length} projects
          </p>
        </motion.div>

        <div className="flex flex-col gap-5">
          {projects.map((project, index) => (
            <motion.div
              key={project.slug}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.6, delay: index * 0.2, ease: [0.21, 0.47, 0.32, 0.98] }}
              className="group relative overflow-hidden rounded-sm border border-white/[0.08] bg-white/[0.008] transition-shadow hover:shadow-[0_24px_64px_rgba(0,0,0,0.7)]"
            >
              <div className="absolute inset-x-0 top-0 h-[1px] bg-gradient-to-r from-transparent via-[#d97706]/50 to-transparent" />
              <div className="absolute inset-y-0 left-0 w-[2px] origin-top bg-gradient-to-b from-[#d97706] to-[#d97706]/10 scale-y-0 group-hover:scale-y-100 transition-transform duration-500" />

              <div className="flex flex-col lg:flex-row">
                <div className="flex flex-col gap-5 p-7 sm:p-8 lg:flex-1">
                  <div className="flex items-center gap-2.5">
                    <span className="flex items-center gap-1.5 rounded-full border border-[#d97706]/30 bg-[#d97706]/10 px-2.5 py-1 font-mono text-[9px] uppercase tracking-widest text-[#d97706]">
                      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-2.5 w-2.5" aria-hidden="true">
                        <path d="M11.017 2.814a1 1 0 0 1 1.966 0l1.051 5.558a2 2 0 0 0 1.594 1.594l5.558 1.051a1 1 0 0 1 0 1.966l-5.558 1.051a2 2 0 0 0-1.594 1.594l-1.051 5.558a1 1 0 0 1-1.966 0l-1.051-5.558a2 2 0 0 0-1.594-1.594l-5.558-1.051a1 1 0 0 1 0-1.966l5.558-1.051a2 2 0 0 0 1.594-1.594z" />
                        <path d="M20 2v4" />
                        <path d="M22 4h-4" />
                        <circle cx="4" cy="20" r="2" />
                      </svg>
                      Featured
                    </span>
                  </div>
                  <div>
                    <h3 className="text-2xl font-black uppercase leading-none tracking-tight text-[#f5f5f0] sm:text-3xl">
                      {project.title}
                    </h3>
                    <p className="mt-4 max-w-[55ch] text-sm leading-relaxed text-white/55">
                      {project.description}
                    </p>
                  </div>
                </div>

                <div className="hidden w-px self-stretch bg-white/[0.05] lg:block" />

                <div className="flex flex-col gap-5 border-t border-white/[0.05] p-7 sm:p-8 lg:w-72 lg:border-t-0 xl:w-80">
                  <div>
                    <p className="mb-1.5 font-mono text-[9px] uppercase tracking-[0.2em] text-white/25">Stack</p>
                    <div className="flex flex-wrap gap-1.5">
                      {project.techStack.slice(0, 6).map((tech) => (
                        <span key={tech} className="border border-white/5 bg-white/[0.02] px-2 py-0.5 font-mono text-[9px] text-white/35 transition-colors group-hover:text-white/50">
                          {tech}
                        </span>
                      ))}
                      {project.techStack.length > 6 && (
                        <span className="border border-white/5 bg-white/[0.02] px-2 py-0.5 font-mono text-[9px] text-white/35 transition-colors group-hover:text-white/50">
                          +{project.techStack.length - 6}
                        </span>
                      )}
                    </div>
                  </div>

                  <div className="mt-auto flex flex-wrap items-center gap-2.5 pt-1">
                    {project.github && (
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-1.5 rounded-sm border border-white/10 bg-white/[0.04] px-3.5 py-1.5 font-mono text-[10px] uppercase tracking-wider text-white/60 transition-colors hover:border-white/20 hover:text-white"
                      >
                        <GithubIcon className="h-3.5 w-3.5" />
                        GitHub
                      </a>
                    )}
                    {project.liveDemo && (
                      <a
                        href={project.liveDemo}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-1.5 rounded-sm border border-[#d97706]/40 bg-[#d97706]/10 px-3.5 py-1.5 font-mono text-[10px] font-semibold uppercase tracking-wider text-[#d97706] transition-all hover:bg-[#d97706] hover:text-[#080808]"
                      >
                        <ExternalLink className="h-3.5 w-3.5" />
                        Live
                      </a>
                    )}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
