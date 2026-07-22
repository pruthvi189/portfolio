"use client";

import { FadeIn } from "@/components/animations";
import { site } from "@/data/site";
import { Mail, FileText } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "@/components/icons";

export function Contact() {
  const links = [
    {
      label: "Email",
      value: site.email,
      href: `mailto:${site.email}`,
      icon: Mail,
    },
    {
      label: "GitHub",
      value: "pruthvi189",
      href: site.github,
      icon: GithubIcon,
    },
    {
      label: "LinkedIn",
      value: "Pruthvi Shah",
      href: site.linkedin,
      icon: LinkedinIcon,
    },
    {
      label: "Resume",
      value: "Download PDF",
      href: site.resumeUrl,
      icon: FileText,
    },
  ];

  return (
    <section id="contact" className="section-padding py-24 pb-40 relative">
      <div className="absolute inset-0 hex-pattern pointer-events-none opacity-50" />
      <div className="max-w-6xl mx-auto relative">
        <FadeIn>
          <p className="text-orange font-medium text-sm tracking-wide uppercase mb-3">
            Contact
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight mb-4">
            Get in Touch
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mb-12">
            Open to opportunities and collaborations. Feel free to reach out.
          </p>
        </FadeIn>

        <FadeIn delay={0.1}>
          <div className="grid gap-4 sm:grid-cols-2">
            {links.map((link) => {
              const Icon = link.icon;
              const isExternal = link.href.startsWith("http");
              const isMailto = link.href.startsWith("mailto:");
              return (
                <a
                  key={link.label}
                  href={link.href}
                  target={isExternal ? "_blank" : undefined}
                  rel={isExternal ? "noopener noreferrer" : undefined}
                  className="group flex items-center gap-4 border border-border rounded-2xl p-5 bg-card hover:border-border hover:shadow-[0_0_30px_-10px_rgba(232,102,10,0.06)] transition-all duration-300"
                >
                  <div className="flex items-center justify-center w-10 h-10 rounded-xl bg-secondary text-muted-foreground group-hover:text-orange transition-colors duration-300">
                    <Icon size={18} />
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">
                      {link.label}
                    </p>
                    <p className="font-medium group-hover:text-primary transition-colors duration-200">
                      {link.value}
                    </p>
                  </div>
                </a>
              );
            })}
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
