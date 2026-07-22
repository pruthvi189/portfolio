"use client";

import { site } from "@/data/site";

export function Footer() {
  return (
    <footer className="py-8 section-container border-t border-[rgba(255,255,255,0.06)]">
      <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
        <span className="font-[family-name:var(--font-jetbrains)] text-xs" style={{ color: "rgba(245,245,240,0.35)" }}>
          © 2026 {site.name}
        </span>
        <div className="flex items-center gap-6">
          <a href={site.github} target="_blank" rel="noopener noreferrer" className="font-[family-name:var(--font-jetbrains)] text-xs hover:text-[#D97706] transition-colors" style={{ color: "rgba(245,245,240,0.35)" }}>
            GitHub
          </a>
          <a href={site.linkedin} target="_blank" rel="noopener noreferrer" className="font-[family-name:var(--font-jetbrains)] text-xs hover:text-[#D97706] transition-colors" style={{ color: "rgba(245,245,240,0.35)" }}>
            LinkedIn
          </a>
          <a href={`mailto:${site.email}`} className="font-[family-name:var(--font-jetbrains)] text-xs hover:text-[#D97706] transition-colors" style={{ color: "rgba(245,245,240,0.35)" }}>
            Email
          </a>
        </div>
      </div>
    </footer>
  );
}
