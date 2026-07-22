"use client";

import { motion } from "framer-motion";
import { site } from "@/data/site";
import Link from "next/link";

export function Hero() {
  return (
    <section id="hero" className="min-h-screen flex items-center section-container pt-24 pb-16 relative">
      <div className="absolute inset-0 opacity-[0.015] pointer-events-none"
        style={{
          backgroundImage: "repeating-linear-gradient(0deg, transparent, transparent 80px, rgba(245,245,240,0.5) 80px, rgba(245,245,240,0.5) 81px)",
        }}
      />

      <div className="max-w-3xl relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1, ease: [0.21, 0.47, 0.32, 0.98] }}
          className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-[rgba(16,185,129,0.3)] bg-[rgba(16,185,129,0.08)] mb-8"
        >
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#10B981] opacity-75" />
            <span className="relative inline-flex rounded-full h-2 w-2 bg-[#10B981]" />
          </span>
          <span className="font-[family-name:var(--font-jetbrains)] text-xs uppercase tracking-[0.15em] text-[#10B981]">
            Open for Opportunities
          </span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2, ease: [0.21, 0.47, 0.32, 0.98] }}
          className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold tracking-[-0.03em] leading-[1.05] mb-6"
        >
          Pruthvi Shah
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.35, ease: [0.21, 0.47, 0.32, 0.98] }}
          className="text-lg sm:text-xl leading-relaxed mb-10 max-w-2xl"
          style={{ color: "rgba(245,245,240,0.55)" }}
        >
          {site.tagline}
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5, ease: [0.21, 0.47, 0.32, 0.98] }}
          className="flex flex-wrap items-center gap-4"
        >
          <Link
            href="#projects"
            className="inline-flex items-center px-6 py-3 rounded-2xl bg-[#D97706] text-[#0A0A0A] font-medium text-sm hover:bg-[#D97706]/90 transition-colors duration-200"
          >
            View My Work
          </Link>
          <Link
            href="#contact"
            className="inline-flex items-center px-6 py-3 rounded-2xl border border-[rgba(255,255,255,0.1)] text-[#F5F5F0] font-medium text-sm hover:border-[rgba(255,255,255,0.2)] transition-colors duration-200"
          >
            Get in Touch
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
