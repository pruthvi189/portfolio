"use client";

import { motion } from "framer-motion";
import { skills } from "@/data/site";

export function Skills() {
  return (
    <section id="skills" className="py-24 section-container relative">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.6, ease: [0.21, 0.47, 0.32, 0.98] }}
      >
        <span className="font-[family-name:var(--font-jetbrains)] text-xs uppercase tracking-[0.2em] text-[#D97706] mb-3 block">
          02 / Skills
        </span>
        <h2 className="text-3xl sm:text-4xl font-bold tracking-tight mb-12">
          Technologies
        </h2>
      </motion.div>

      <div className="grid sm:grid-cols-2 gap-4">
        {skills.map((cat, i) => (
          <motion.div
            key={cat.category}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6, delay: i * 0.08, ease: [0.21, 0.47, 0.32, 0.98] }}
            className="group rounded-2xl border border-[rgba(255,255,255,0.08)] bg-[rgba(255,255,255,0.02)] p-6 hover:border-[rgba(255,255,255,0.15)] hover:bg-[rgba(255,255,255,0.04)] transition-all duration-300"
          >
            <div className="flex items-baseline gap-3 mb-4">
              <span className="font-[family-name:var(--font-jetbrains)] text-xs text-[#D97706] tracking-wider">
                {cat.number}
              </span>
              <h3 className="font-[family-name:var(--font-jetbrains)] text-sm uppercase tracking-[0.15em] font-medium">
                {cat.category}
              </h3>
            </div>
            <div className="flex flex-wrap gap-2">
              {cat.items.map((item) => (
                <span
                  key={item}
                  className="px-3 py-1 rounded-full text-xs border border-[rgba(255,255,255,0.08)] bg-[rgba(255,255,255,0.03)] text-[rgba(245,245,240,0.55)]"
                >
                  {item}
                </span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
