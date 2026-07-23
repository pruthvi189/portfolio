"use client";

import { motion, useInView } from "framer-motion";
import { useRef, useMemo, useEffect, useState } from "react";
import { site } from "@/data/site";
import Link from "next/link";

function BlurText({
  text,
  delay = 50,
  animateBy = "words",
  direction = "top",
  className = "",
}: {
  text: string;
  delay?: number;
  animateBy?: "words" | "letters";
  direction?: "top" | "bottom";
  className?: string;
}) {
  const [inView, setInView] = useState(false);
  const ref = useRef<HTMLParagraphElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setInView(true);
      },
      { threshold: 0.1 },
    );
    if (ref.current) observer.observe(ref.current);
    return () => {
      if (ref.current) observer.unobserve(ref.current);
    };
  }, []);

  const segments = useMemo(() => {
    return animateBy === "words" ? text.split(" ") : text.split("");
  }, [text, animateBy]);

  return (
    <p ref={ref} className={`inline-flex flex-wrap ${className}`}>
      {segments.map((segment, i) => (
        <span
          key={i}
          style={{
            display: "inline-block",
            filter: inView ? "blur(0px)" : "blur(10px)",
            opacity: inView ? 1 : 0,
            transform: inView
              ? "translateY(0)"
              : `translateY(${direction === "top" ? "-16px" : "16px"})`,
            transition: `all 0.6s cubic-bezier(0.21, 0.47, 0.32, 0.98) ${i * delay}ms`,
          }}
        >
          {segment}
          {animateBy === "words" && i < segments.length - 1 ? "\u00A0" : ""}
        </span>
      ))}
    </p>
  );
}

export function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center section-padding pt-32 pb-32 sm:pb-20"
    >
      <div className="absolute inset-0 bg-[#08080a] pointer-events-none opacity-30" />

      <div className="max-w-4xl mx-auto w-full relative">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.5, ease: [0.21, 0.47, 0.32, 0.98] }}
          className="space-y-8"
        >
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.7 }}
          >
            <p className="text-orange font-mono text-xs tracking-[0.2em] uppercase mb-4">
              {site.title}
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.8 }}
          >
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-light tracking-tight leading-[1.1]">
              <BlurText
                text="Hi, I'm"
                delay={80}
                animateBy="words"
                direction="top"
                className="text-primary"
              />
            </h1>
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-light tracking-tight leading-[1.1] mt-1">
              <BlurText
                text={site.name.split(" ")[0]}
                delay={80}
                animateBy="letters"
                direction="top"
                className="text-primary"
              />
              <span className="text-orange">.</span>
            </h1>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 1 }}
            className="text-lg sm:text-xl text-muted-foreground max-w-2xl leading-relaxed font-light"
          >
            {site.tagline}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 1.1 }}
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
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 1.4 }}
          className="mt-16 overflow-hidden"
        >
          <div className="flex w-[200%] animate-marquee">
            {[...Array(2)].map((_, setIndex) => (
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
      </div>
    </section>
  );
}
