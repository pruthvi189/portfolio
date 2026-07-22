"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { site } from "@/data/site";
import { GithubIcon, LinkedinIcon, XIcon } from "@/components/icons";

const navLinks = [
  { name: "About", href: "#about" },
  { name: "Experience", href: "#experience" },
  { name: "Projects", href: "#projects" },
  { name: "Contact", href: "#contact" },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState("About");

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 20);
      const sections = navLinks.map((l) => l.href.replace("#", ""));
      for (let i = sections.length - 1; i >= 0; i--) {
        const el = document.getElementById(sections[i]);
        if (el && el.offsetTop - 120 <= window.scrollY) {
          setActive(navLinks[i].name);
          break;
        }
      }
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <motion.nav
      initial={{ y: -80 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: [0.21, 0.47, 0.32, 0.98] }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-[#0A0A0A]/80 backdrop-blur-xl border-b border-[rgba(255,255,255,0.08)]"
          : "bg-transparent"
      }`}
    >
      <div className="section-container flex items-center justify-between h-16">
        <a href="#hero" className="font-[family-name:var(--font-jetbrains)] text-sm font-medium tracking-wide">
          {site.name.split(" ")[0]}
          <span className="text-[#D97706]">.</span>
        </a>

        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={() => setActive(link.name)}
              className={`font-[family-name:var(--font-jetbrains)] text-xs uppercase tracking-[0.15em] transition-colors duration-200 ${
                active === link.name
                  ? "text-[#D97706]"
                  : "text-[rgba(245,245,240,0.55)] hover:text-[#F5F5F0]"
              }`}
            >
              {link.name}
            </a>
          ))}
        </div>

        <div className="flex items-center gap-4">
          <a href={site.github} target="_blank" rel="noopener noreferrer" className="text-[rgba(245,245,240,0.4)] hover:text-[#D97706] transition-colors">
            <GithubIcon className="w-4 h-4" />
          </a>
          <a href={site.linkedin} target="_blank" rel="noopener noreferrer" className="text-[rgba(245,245,240,0.4)] hover:text-[#D97706] transition-colors">
            <LinkedinIcon className="w-4 h-4" />
          </a>
          <a href={`mailto:${site.email}`} className="text-[rgba(245,245,240,0.4)] hover:text-[#D97706] transition-colors">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="16" x="2" y="4" rx="2"/><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/></svg>
          </a>
        </div>
      </div>
    </motion.nav>
  );
}
