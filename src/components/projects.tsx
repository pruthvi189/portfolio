"use client";

import { motion } from "framer-motion";
import { featuredProjects, compactProjects } from "@/data/site";
import { GithubIcon } from "@/components/icons";

export function Projects() {
  return (
    <section id="projects" className="py-24 section-container relative">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.6, ease: [0.21, 0.47, 0.32, 0.98] }}
      >
        <span className="font-[family-name:var(--font-jetbrains)] text-xs uppercase tracking-[0.2em] text-[#D97706] mb-3 block">
          04 / Projects
        </span>
        <h2 className="text-3xl sm:text-4xl font-bold tracking-tight mb-12">
          Featured Work
        </h2>
      </motion.div>

      <div className="grid md:grid-cols-3 gap-4 mb-8">
        {featuredProjects.map((project, i) => (
          <motion.div
            key={project.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6, delay: i * 0.08, ease: [0.21, 0.47, 0.32, 0.98] }}
            className="group rounded-2xl border border-[rgba(255,255,255,0.08)] bg-[rgba(255,255,255,0.02)] p-6 hover:border-[rgba(255,255,255,0.15)] hover:bg-[rgba(255,255,255,0.04)] hover:shadow-[0_8px_30px_rgba(217,119,6,0.06)] transition-all duration-300 flex flex-col"
          >
            <div className="flex items-center justify-between mb-3">
              <h3 className="font-semibold text-[#F5F5F0]">{project.title}</h3>
              <a href={project.github} target="_blank" rel="noopener noreferrer" className="text-[rgba(245,245,240,0.3)] hover:text-[#D97706] transition-colors">
                <GithubIcon className="w-4 h-4" />
              </a>
            </div>
            <p className="text-sm mb-4 flex-1" style={{ color: "rgba(245,245,240,0.55)", lineHeight: "1.7" }}>
              {project.description}
            </p>
            <div className="flex flex-wrap gap-2 mt-auto">
              {project.tags.map((tag) => (
                <span key={tag} className="font-[family-name:var(--font-jetbrains)] text-[10px] uppercase tracking-wider px-2 py-1 rounded-full border border-[rgba(255,255,255,0.08)] text-[rgba(245,245,240,0.4)]">
                  {tag}
                </span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.6, delay: 0.3, ease: [0.21, 0.47, 0.32, 0.98] }}
      >
        <h3 className="font-[family-name:var(--font-jetbrains)] text-sm uppercase tracking-[0.15em] font-medium mb-4" style={{ color: "rgba(245,245,240,0.4)" }}>
          More Projects
        </h3>
      </motion.div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-3">
        {compactProjects.map((project, i) => (
          <motion.div
            key={project.title}
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.5, delay: 0.35 + i * 0.05, ease: [0.21, 0.47, 0.32, 0.98] }}
            className="group rounded-xl border border-[rgba(255,255,255,0.06)] bg-[rgba(255,255,255,0.015)] p-4 hover:border-[rgba(255,255,255,0.12)] transition-all duration-300"
          >
            <h4 className="font-medium text-sm text-[#F5F5F0] mb-2">{project.title}</h4>
            <div className="flex flex-wrap gap-1.5">
              {project.tags.map((tag) => (
                <span key={tag} className="font-[family-name:var(--font-jetbrains)] text-[10px] tracking-wider text-[rgba(245,245,240,0.35)]">
                  {tag}
                </span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
