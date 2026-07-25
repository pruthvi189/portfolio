"use client";

import { motion } from "framer-motion";
import { Laptop, Server, Cpu, Database } from "lucide-react";

const skillCards = [
  {
    title: "Frontend",
    icon: Laptop,
    gradientColor: "rgba(59,130,246,0.12)",
    skills: ["React", "HTML", "CSS", "JavaScript", "Tailwind"],
  },
  {
    title: "Backend",
    icon: Server,
    gradientColor: "rgba(16,185,129,0.12)",
    skills: ["Node.js", "Express", "Flask", "FastAPI"],
  },
  {
    title: "AI / ML",
    icon: Cpu,
    gradientColor: "rgba(139,92,246,0.12)",
    skills: ["TensorFlow", "Scikit-learn", "Pandas", "NumPy", "OpenCV"],
  },
  {
    title: "Database & Tools",
    icon: Database,
    gradientColor: "rgba(217,119,6,0.12)",
    skills: ["MongoDB", "PostgreSQL", "SQLite", "Git", "GitHub", "VS Code", "Postman", "Figma"],
  },
];

export function Skills() {
  return (
    <section id="skills" className="scroll-mt-24 relative flex w-full flex-col items-center bg-[#080808] px-4 py-24 sm:px-6 lg:px-8">
      <div className="pointer-events-none absolute left-1/2 top-0 -z-10 h-px w-1/2 -translate-x-1/2 bg-gradient-to-r from-transparent via-[#d97706]/20 to-transparent" />

      <div className="relative z-10 w-full max-w-5xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6, ease: [0.21, 0.47, 0.32, 0.98] }}
          className="mb-14"
        >
          <div className="mb-3 flex items-center gap-2.5">
            <span className="font-mono text-[9px] uppercase tracking-[0.25em] text-white/30">Skills</span>
          </div>
          <h2 className="font-sans text-4xl font-black uppercase leading-none tracking-tighter text-[#f5f5f0] sm:text-5xl md:text-6xl">
            Tech Stack
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
          {skillCards.map((card, i) => {
            const Icon = card.icon;
            return (
              <motion.div
                key={card.title}
                initial={{ opacity: 0, y: 28 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.6, delay: i * 0.08, ease: [0.21, 0.47, 0.32, 0.98] }}
                className="group relative overflow-hidden rounded-sm border border-white/[0.07] bg-white/[0.01] p-5 transition-colors hover:border-white/[0.12]"
              >
                <div className="absolute right-0 top-0 h-1.5 w-1.5 bg-[#d97706]/20 transition-colors group-hover:bg-[#d97706]/60" />
                <div
                  className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100 rounded-sm"
                  style={{ background: `radial-gradient(ellipse 80% 60% at 50% 0%, ${card.gradientColor}, transparent)` }}
                />
                <div className="relative mb-4 flex items-center gap-2.5 border-b border-white/[0.05] pb-3">
                  <Icon className="h-4 w-4 text-[#d97706]/70" />
                  <h4 className="font-mono text-[10px] font-bold uppercase tracking-widest text-[#f5f5f0]">{card.title}</h4>
                </div>
                <div className="relative flex flex-wrap gap-1.5">
                  {card.skills.map((skill) => (
                    <span key={skill} className="border border-white/5 bg-white/[0.02] px-2 py-0.5 font-mono text-[10px] text-white/45 transition-colors group-hover:text-white/60">
                      {skill}
                    </span>
                  ))}
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
