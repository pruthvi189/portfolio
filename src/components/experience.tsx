"use client";

import { motion } from "framer-motion";
import { experience } from "@/data/site";

export function Experience() {
  return (
    <section id="experience" className="py-24 section-container relative">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.6, ease: [0.21, 0.47, 0.32, 0.98] }}
      >
        <span className="font-[family-name:var(--font-jetbrains)] text-xs uppercase tracking-[0.2em] text-[#D97706] mb-3 block">
          03 / Experience
        </span>
        <h2 className="text-3xl sm:text-4xl font-bold tracking-tight mb-12">
          Where I've Worked
        </h2>
      </motion.div>

      <div className="relative">
        <div className="absolute left-[7px] top-2 bottom-2 w-px bg-[rgba(255,255,255,0.08)]" />

        <div className="space-y-12">
          {experience.map((job, i) => (
            <motion.div
              key={job.role}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.6, delay: i * 0.1, ease: [0.21, 0.47, 0.32, 0.98] }}
              className="relative pl-8"
            >
              <div className="absolute left-0 top-2 w-[15px] h-[15px] rounded-full border-2 border-[#D97706] bg-[#0A0A0A]" />

              <div className="group rounded-2xl border border-[rgba(255,255,255,0.08)] bg-[rgba(255,255,255,0.02)] p-6 hover:border-[rgba(255,255,255,0.15)] transition-all duration-300">
                <div className="flex flex-wrap items-baseline justify-between gap-2 mb-3">
                  <h3 className="font-semibold text-[#F5F5F0] text-lg">{job.role}</h3>
                  <span className="font-[family-name:var(--font-jetbrains)] text-xs" style={{ color: "rgba(245,245,240,0.4)" }}>
                    {job.period}
                  </span>
                </div>
                <div className="flex items-center gap-2 mb-4">
                  <span className="text-sm font-medium" style={{ color: "rgba(245,245,240,0.55)" }}>
                    {job.company}
                  </span>
                  <span style={{ color: "rgba(245,245,240,0.25)" }}>·</span>
                  <span className="text-sm" style={{ color: "rgba(245,245,240,0.4)" }}>
                    {job.location}
                  </span>
                </div>
                <ul className="space-y-2">
                  {job.bullets.map((bullet, j) => (
                    <li key={j} className="flex gap-3 text-sm" style={{ color: "rgba(245,245,240,0.55)", lineHeight: "1.7" }}>
                      <span className="mt-2.5 w-1.5 h-1.5 rounded-full bg-[#D97706]/60 shrink-0" />
                      {bullet}
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
