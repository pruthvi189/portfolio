"use client";

import { motion } from "framer-motion";
import { site } from "@/data/site";
import { GithubIcon, LinkedinIcon } from "@/components/icons";

export function Contact() {
  return (
    <section id="contact" className="py-24 section-container relative">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.6, ease: [0.21, 0.47, 0.32, 0.98] }}
      >
        <span className="font-[family-name:var(--font-jetbrains)] text-xs uppercase tracking-[0.2em] text-[#D97706] mb-3 block">
          05 / Contact
        </span>
        <h2 className="text-3xl sm:text-4xl font-bold tracking-tight mb-4">
          Get in Touch
        </h2>
        <p className="max-w-md mb-12" style={{ color: "rgba(245,245,240,0.55)", lineHeight: "1.7" }}>
          Have a project in mind or just want to chat? I'm always open to
          new opportunities and interesting conversations.
        </p>
      </motion.div>

      <div className="grid sm:grid-cols-3 gap-4 max-w-2xl">
        <motion.a
          href={`mailto:${site.email}`}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6, delay: 0.1, ease: [0.21, 0.47, 0.32, 0.98] }}
          className="group rounded-2xl border border-[rgba(255,255,255,0.08)] bg-[rgba(255,255,255,0.02)] p-6 hover:border-[rgba(255,255,255,0.15)] hover:bg-[rgba(255,255,255,0.04)] transition-all duration-300 flex flex-col items-center text-center"
        >
          <div className="w-10 h-10 rounded-full bg-[rgba(217,119,6,0.1)] flex items-center justify-center mb-3 group-hover:bg-[rgba(217,119,6,0.15)] transition-colors">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#D97706" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="16" x="2" y="4" rx="2"/><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/></svg>
          </div>
          <span className="font-[family-name:var(--font-jetbrains)] text-[10px] uppercase tracking-wider mb-1" style={{ color: "rgba(245,245,240,0.4)" }}>
            Email
          </span>
          <span className="text-sm text-[#F5F5F0]">Send a Message</span>
        </motion.a>

        <motion.a
          href={site.github}
          target="_blank"
          rel="noopener noreferrer"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6, delay: 0.2, ease: [0.21, 0.47, 0.32, 0.98] }}
          className="group rounded-2xl border border-[rgba(255,255,255,0.08)] bg-[rgba(255,255,255,0.02)] p-6 hover:border-[rgba(255,255,255,0.15)] hover:bg-[rgba(255,255,255,0.04)] transition-all duration-300 flex flex-col items-center text-center"
        >
          <div className="w-10 h-10 rounded-full bg-[rgba(245,245,240,0.05)] flex items-center justify-center mb-3 group-hover:bg-[rgba(245,245,240,0.08)] transition-colors">
            <GithubIcon className="w-5 h-5 text-[#F5F5F0]" />
          </div>
          <span className="font-[family-name:var(--font-jetbrains)] text-[10px] uppercase tracking-wider mb-1" style={{ color: "rgba(245,245,240,0.4)" }}>
            GitHub
          </span>
          <span className="text-sm text-[#F5F5F0]">@pruthvi189</span>
        </motion.a>

        <motion.a
          href={site.linkedin}
          target="_blank"
          rel="noopener noreferrer"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6, delay: 0.3, ease: [0.21, 0.47, 0.32, 0.98] }}
          className="group rounded-2xl border border-[rgba(255,255,255,0.08)] bg-[rgba(255,255,255,0.02)] p-6 hover:border-[rgba(255,255,255,0.15)] hover:bg-[rgba(255,255,255,0.04)] transition-all duration-300 flex flex-col items-center text-center"
        >
          <div className="w-10 h-10 rounded-full bg-[rgba(245,245,240,0.05)] flex items-center justify-center mb-3 group-hover:bg-[rgba(245,245,240,0.08)] transition-colors">
            <LinkedinIcon className="w-5 h-5 text-[#F5F5F0]" />
          </div>
          <span className="font-[family-name:var(--font-jetbrains)] text-[10px] uppercase tracking-wider mb-1" style={{ color: "rgba(245,245,240,0.4)" }}>
            LinkedIn
          </span>
          <span className="text-sm text-[#F5F5F0]">Connect</span>
        </motion.a>
      </div>
    </section>
  );
}
