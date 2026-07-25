"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { site } from "@/data/site";

function BlurChar({
  char,
  index,
  delay,
  inView,
}: {
  char: string;
  index: number;
  delay: number;
  inView: boolean;
}) {
  return (
    <span
      style={{
        display: "inline-block",
        filter: inView ? "blur(0px)" : "blur(12px)",
        opacity: inView ? 1 : 0,
        transform: inView ? "translateY(0)" : "translateY(16px)",
        transition: `all 0.6s cubic-bezier(0.21, 0.47, 0.32, 0.98) ${delay + index * 60}ms`,
      }}
    >
      {char === " " ? "\u00A0" : char}
    </span>
  );
}

export function IntroSplash() {
  const [show, setShow] = useState(false);
  const [animateIn, setAnimateIn] = useState(false);
  const [animateOut, setAnimateOut] = useState(false);
  const [firstName, lastName] = site.name.split(" ");

  useEffect(() => {
    let canStore = false;
    try {
      const seen = sessionStorage.getItem("intro-seen");
      if (seen) return;
      canStore = true;
    } catch {
      // sessionStorage unavailable — show splash once per load
    }

    setShow(true);
    document.body.style.overflow = "hidden";
    const t1 = setTimeout(() => setAnimateIn(true), 100);
    const t2 = setTimeout(() => setAnimateOut(true), 2600);
    const t3 = setTimeout(() => {
      setShow(false);
      document.body.style.overflow = "";
      if (canStore) {
        try {
          sessionStorage.setItem("intro-seen", "1");
        } catch {}
      }
    }, 3400);

    const safety = setTimeout(() => {
      setShow(false);
      document.body.style.overflow = "";
    }, 5000);

    return () => {
      clearTimeout(t1);
      clearTimeout(t2);
      clearTimeout(t3);
      clearTimeout(safety);
      document.body.style.overflow = "";
    };
  }, []);

  return (
    <AnimatePresence>
      {show && (
        <motion.div
          className="fixed inset-0 z-[100] flex items-center justify-center bg-[#08080a]"
          style={{ pointerEvents: animateOut ? "none" : "auto" }}
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.8, ease: [0.21, 0.47, 0.32, 0.98] }}
        >
          <div className="text-center select-none">
            <div className="overflow-hidden">
              <div
                className="text-[clamp(3rem,10vw,7rem)] font-light tracking-tight leading-none text-[#f0ece4]"
                style={{ fontFamily: "var(--font-poppins), sans-serif" }}
              >
                {firstName.split("").map((char, i) => (
                  <BlurChar
                    key={`f-${i}`}
                    char={char}
                    index={i}
                    delay={200}
                    inView={animateIn && !animateOut}
                  />
                ))}
              </div>
            </div>
            <div className="overflow-hidden mt-1">
              <div
                className="text-[clamp(3rem,10vw,7rem)] font-light tracking-tight leading-none text-[#f0ece4]"
                style={{ fontFamily: "var(--font-poppins), sans-serif" }}
              >
                {lastName.split("").map((char, i) => (
                  <BlurChar
                    key={`l-${i}`}
                    char={char}
                    index={i}
                    delay={600}
                    inView={animateIn && !animateOut}
                  />
                ))}
              </div>
            </div>
            <motion.div
              initial={{ opacity: 0, scaleX: 0 }}
              animate={{
                opacity: animateIn && !animateOut ? 0.15 : 0,
                scaleX: animateIn && !animateOut ? 1 : 0,
              }}
              transition={{ duration: 0.8, delay: 1.4, ease: [0.21, 0.47, 0.32, 0.98] }}
              className="mt-6 mx-auto w-24 h-px bg-[#e8660a] origin-center"
            />
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
