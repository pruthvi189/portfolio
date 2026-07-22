"use client";

import { motion, useInView } from "framer-motion";
import { useRef, useEffect, useState } from "react";
import { stats } from "@/data/site";

function CountUp({ target, suffix }: { target: number; suffix: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!isInView) return;
    let start = 0;
    const duration = 1500;
    const step = (ts: number) => {
      if (!start) start = ts;
      const progress = Math.min((ts - start) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setCount(Math.floor(eased * target));
      if (progress < 1) requestAnimationFrame(step);
    };
    requestAnimationFrame(step);
  }, [isInView, target]);

  return (
    <span ref={ref}>
      {count}{suffix}
    </span>
  );
}

export function About() {
  return (
    <section id="about" className="py-24 section-container relative">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.6, ease: [0.21, 0.47, 0.32, 0.98] }}
      >
        <span className="font-[family-name:var(--font-jetbrains)] text-xs uppercase tracking-[0.2em] text-[#D97706] mb-3 block">
          01 / About
        </span>
        <h2 className="text-3xl sm:text-4xl font-bold tracking-tight mb-8">
          About Me
        </h2>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.6, delay: 0.1, ease: [0.21, 0.47, 0.32, 0.98] }}
        className="max-w-2xl mb-16 space-y-4"
        style={{ color: "rgba(245,245,240,0.55)", lineHeight: "1.75" }}
      >
        <p>
          I'm a B.Tech IT graduate from GCET (CGPA 8.60/10) with a passion for
          building full-stack web applications and intelligent AI systems. My work spans
          from crafting responsive frontends to designing LLM-powered agents and
          RAG pipelines.
        </p>
        <p>
          Currently focused on AI automation and agentic systems, I've shipped 12+
          projects across React, Next.js, Python, FastAPI, LangChain, and more.
          I thrive on turning complex problems into elegant, scalable solutions.
        </p>
      </motion.div>

      <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
        {stats.map((stat, i) => (
          <motion.div
            key={stat.label}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6, delay: 0.15 + i * 0.08, ease: [0.21, 0.47, 0.32, 0.98] }}
            className="text-center p-4"
          >
            <div className="font-[family-name:var(--font-jetbrains)] text-3xl sm:text-4xl font-bold text-[#F5F5F0] mb-2">
              <CountUp target={stat.value} suffix={stat.suffix} />
            </div>
            <div className="font-[family-name:var(--font-jetbrains)] text-xs uppercase tracking-[0.15em]" style={{ color: "rgba(245,245,240,0.4)" }}>
              {stat.label}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
