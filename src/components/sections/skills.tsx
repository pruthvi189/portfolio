"use client";

import { useRef, useState } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";
import { StaggerContainer, StaggerItem, FadeIn } from "@/components/animations";
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
    skills: ["TensorFlow", "Scikit-learn", "Pandas", "NumPy", "OpenCV", "LangChain", "RAG"],
  },
  {
    title: "Databases & Tools",
    icon: Database,
    gradientColor: "rgba(217,119,6,0.12)",
    skills: ["MongoDB", "PostgreSQL", "SQLite", "Git", "GitHub", "VS Code", "Postman"],
  },
];

function SkillCard({ card }: { card: (typeof skillCards)[number] }) {
  const ref = useRef<HTMLDivElement>(null);
  const [isHovered, setIsHovered] = useState(false);
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const glowX = useSpring(mouseX, { stiffness: 300, damping: 30 });
  const glowY = useSpring(mouseY, { stiffness: 300, damping: 30 });

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    mouseX.set(e.clientX - rect.left);
    mouseY.set(e.clientY - rect.top);
  };

  const Icon = card.icon;

  return (
    <StaggerItem>
      <div
        ref={ref}
        onMouseMove={handleMouseMove}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        className="group relative overflow-hidden rounded-sm border border-white/[0.07] bg-white/[0.01] p-5 transition-colors hover:border-white/[0.12]"
      >
        <div className="absolute right-0 top-0 h-1.5 w-1.5 bg-orange/20 transition-colors group-hover:bg-orange/60" />
        <motion.div
          className="pointer-events-none absolute inset-0 rounded-sm"
          style={{
            background: isHovered
              ? `radial-gradient(ellipse 80% 60% at ${glowX.get()}px ${glowY.get()}px, ${card.gradientColor}, transparent)`
              : "transparent",
            opacity: isHovered ? 1 : 0,
          }}
          animate={{
            background: `radial-gradient(ellipse 80% 60% at ${glowX}px ${glowY}px, ${card.gradientColor}, transparent)`,
            opacity: isHovered ? 1 : 0,
          }}
          transition={{ duration: 0.3 }}
        />
        <div className="relative mb-4 flex items-center gap-2.5 border-b border-white/[0.05] pb-3">
          <Icon className="h-4 w-4 text-orange/70" />
          <h4 className="font-mono text-[10px] font-bold uppercase tracking-widest text-[#f5f5f0]">{card.title}</h4>
        </div>
        <div className="relative flex flex-wrap gap-1.5">
          {card.skills.map((skill) => (
            <span key={skill} className="border border-white/5 bg-white/[0.02] px-2 py-0.5 font-mono text-[10px] text-white/45 transition-colors group-hover:text-white/60">
              {skill}
            </span>
          ))}
        </div>
      </div>
    </StaggerItem>
  );
}

export function Skills() {
  return (
    <section id="skills" className="scroll-mt-24 relative flex w-full flex-col items-center bg-[#080808] px-4 py-24 sm:px-6 lg:px-8">
      <div className="pointer-events-none absolute left-1/2 top-0 -z-10 h-px w-1/2 -translate-x-1/2 bg-gradient-to-r from-transparent via-orange/20 to-transparent" />

      <div className="relative z-10 w-full max-w-5xl">
        <FadeIn className="mb-14">
          <div className="mb-3 flex items-center gap-2.5">
            <span className="font-mono text-[9px] uppercase tracking-[0.25em] text-white/30">Skills</span>
          </div>
          <h2 className="font-sans text-4xl font-black uppercase leading-none tracking-tighter text-[#f5f5f0] sm:text-5xl md:text-6xl">
            Tech Stack
          </h2>
        </FadeIn>

        <StaggerContainer className="grid grid-cols-1 gap-4 sm:grid-cols-2" staggerDelay={0.08}>
          {skillCards.map((card) => (
            <SkillCard key={card.title} card={card} />
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
}
