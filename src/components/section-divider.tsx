"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

export function SectionDivider() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const scaleX = useTransform(scrollYProgress, [0, 0.5, 1], [0, 1, 0]);
  const opacity = useTransform(scrollYProgress, [0, 0.5, 1], [0, 1, 0]);

  return (
    <div ref={ref} className="relative py-8 flex items-center justify-center">
      <motion.div
        style={{ scaleX, opacity }}
        className="w-full max-w-5xl h-px bg-gradient-to-r from-transparent via-orange/30 to-transparent origin-center"
      />
      <div className="absolute w-1.5 h-1.5 rounded-full bg-orange/40" aria-hidden="true" />
    </div>
  );
}
