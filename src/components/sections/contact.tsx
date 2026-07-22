"use client";

import { FadeIn } from "@/components/animations";
import { site } from "@/data/site";
import { Mail, FileText } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "@/components/icons";

export function Contact() {
  const links = [
    {
      label: "EMAIL",
      value: "Send a Message",
      href: `mailto:${site.email}`,
      icon: Mail,
      circleColor: "bg-[#e8660a]/15",
      iconColor: "text-[#e8660a]",
    },
    {
      label: "GITHUB",
      value: "@pruthvi189",
      href: site.github,
      icon: GithubIcon,
      circleColor: "bg-white/[0.06]",
      iconColor: "text-[#f5f5f0]",
    },
    {
      label: "LINKEDIN",
      value: "Connect",
      href: site.linkedin,
      icon: LinkedinIcon,
      circleColor: "bg-[#0077b5]/15",
      iconColor: "text-[#0077b5]",
    },
    {
      label: "RESUME",
      value: "View Resume",
      href: site.resumeUrl,
      icon: FileText,
      circleColor: "bg-[#10b981]/15",
      iconColor: "text-[#10b981]",
    },
  ];

  return (
    <section id="contact" className="section-padding py-24 pb-40 relative">
      <div className="absolute inset-0 hex-pattern pointer-events-none opacity-50" />
      <div className="max-w-4xl mx-auto relative">
        <FadeIn>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight mb-4">
            Get in Touch
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mb-12">
            Have a project in mind or just want to chat? I&apos;m always open to
            new opportunities and interesting conversations.
          </p>
        </FadeIn>

        <FadeIn delay={0.1}>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
            {links.map((link) => {
              const Icon = link.icon;
              const isExternal = link.href.startsWith("http");
              return (
                <a
                  key={link.label}
                  href={link.href}
                  target={isExternal ? "_blank" : undefined}
                  rel={isExternal ? "noopener noreferrer" : undefined}
                  className="group flex flex-col items-center text-center border border-border rounded-2xl p-6 bg-card hover:border-border hover:shadow-[0_0_30px_-10px_rgba(232,102,10,0.06)] transition-all duration-300"
                >
                  <div className={`flex items-center justify-center w-12 h-12 rounded-full ${link.circleColor} ${link.iconColor} mb-3 transition-transform duration-300 group-hover:scale-110`}>
                    <Icon size={20} />
                  </div>
                  <p className="font-mono text-[10px] uppercase tracking-[0.15em] text-muted-foreground mb-1">
                    {link.label}
                  </p>
                  <p className="font-medium text-sm group-hover:text-primary transition-colors duration-200">
                    {link.value}
                  </p>
                </a>
              );
            })}
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
