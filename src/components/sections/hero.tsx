"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { site } from "@/data/site";
import Link from "next/link";

function BlurRevealText({
  text,
  delay = 0,
  animateBy = "words",
  className = "",
}: {
  text: string;
  delay?: number;
  animateBy?: "words" | "letters";
  className?: string;
}) {
  const segments = animateBy === "words" ? text.split(" ") : text.split("");

  return (
    <span className={`inline-flex flex-wrap ${className}`}>
      {segments.map((segment, i) => (
        <motion.span
          key={i}
          initial={{ opacity: 0, filter: "blur(10px)", y: -16 }}
          animate={{ opacity: 1, filter: "blur(0px)", y: 0 }}
          transition={{
            duration: 0.6,
            delay: delay + i * 0.08,
            ease: [0.21, 0.47, 0.32, 0.98],
          }}
          style={{ display: "inline-block" }}
        >
          {segment}
          {animateBy === "words" && i < segments.length - 1 ? "\u00A0" : ""}
        </motion.span>
      ))}
    </span>
  );
}

export function Hero() {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const textY = useTransform(scrollYProgress, [0, 1], [0, 150]);
  const textOpacity = useTransform(scrollYProgress, [0, 0.6], [1, 0]);
  const marqueeY = useTransform(scrollYProgress, [0, 1], [0, 80]);

  return (
    <section
      ref={ref}
      id="home"
      className="relative min-h-screen flex items-center section-padding pt-32 pb-32 sm:pb-20"
    >
      <div className="absolute inset-0 bg-[#08080a] pointer-events-none opacity-30" />

      <motion.div
        style={{ y: textY, opacity: textOpacity }}
        className="max-w-4xl mx-auto w-full relative"
      >
        <div className="space-y-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.7 }}
          >
            <p className="text-orange font-mono text-xs tracking-[0.2em] uppercase mb-4">
              {site.title}
            </p>
          </motion.div>

          <div>
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-light tracking-tight leading-[1.1]">
              <BlurRevealText
                text="Hi, I'm"
                delay={0.8}
                animateBy="words"
                className="text-primary"
              />
            </h1>
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-light tracking-tight leading-[1.1] mt-1">
              <BlurRevealText
                text={site.name.split(" ")[0]}
                delay={1.0}
                animateBy="letters"
                className="text-primary"
              />
              <motion.span
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.4, delay: 1.6 }}
                className="text-orange"
              >
                .
              </motion.span>
            </h1>
          </div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 1.8 }}
            className="text-lg sm:text-xl text-muted-foreground max-w-2xl leading-relaxed font-light"
          >
            {site.tagline}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 2.0 }}
            className="flex flex-wrap items-center gap-4 pt-4"
          >
            <Link
              href="#projects"
              className="inline-flex items-center gap-2 bg-orange text-white px-6 py-3 rounded-full font-medium text-sm hover:bg-orange/90 transition-colors duration-200"
            >
              View Projects
            </Link>
            <Link
              href="#contact"
              className="inline-flex items-center gap-2 border border-border px-6 py-3 rounded-full font-medium text-sm text-muted-foreground hover:text-foreground hover:border-muted-foreground/50 transition-colors duration-200"
            >
              Contact Me
            </Link>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 2.2, ease: [0.21, 0.47, 0.32, 0.98] }}
          style={{ y: marqueeY }}
          className="mt-16 overflow-hidden"
          aria-hidden="true"
        >
          <div className="flex w-[200%] animate-marquee">
            {[0, 1].map((setIndex) => (
              <div key={setIndex} className="flex items-center gap-4 shrink-0 whitespace-nowrap pr-4">
                {["Python", "TensorFlow", "React", "Next.js", "Node.js", "FastAPI", "Flask", "LangChain", "Scikit-learn", "MongoDB", "PostgreSQL", "Docker", "Git", "NumPy", "Pandas", "OpenCV"].map((tech) => (
                  <span key={`${setIndex}-${tech}`} className="text-sm text-muted-foreground/50 font-mono">
                    {tech}<span className="text-orange/40 ml-4">·</span>
                  </span>
                ))}
              </div>
            ))}
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
}
