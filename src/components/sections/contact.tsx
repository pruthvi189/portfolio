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
      circleColor: "bg-orange",
      iconColor: "text-white",
    },
    {
      label: "GITHUB",
      value: "@pruthvi189",
      href: site.github,
      icon: GithubIcon,
      circleColor: "bg-[#2d2d2d]",
      iconColor: "text-white",
    },
    {
      label: "LINKEDIN",
      value: "Connect",
      href: site.linkedin,
      icon: LinkedinIcon,
      circleColor: "bg-[#0077b5]",
      iconColor: "text-white",
    },
    {
      label: "RESUME",
      value: "View Resume",
      href: site.resumeUrl,
      icon: FileText,
      circleColor: "bg-orange",
      iconColor: "text-white",
    },
  ];

  return (
    <section id="contact" className="section-padding py-24 pb-40 relative">
      <div className="max-w-5xl mx-auto relative">
        <FadeIn>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight mb-4 text-center">
            Get in Touch
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mb-12 text-center mx-auto">
            Have a project in mind or just want to chat? I&apos;m always open to
            new opportunities and interesting conversations.
          </p>
        </FadeIn>

        <FadeIn delay={0.1}>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-5">
            {links.map((link) => {
              const Icon = link.icon;
              const isExternal = link.href.startsWith("http");
              return (
                <a
                  key={link.label}
                  href={link.href}
                  target={isExternal ? "_blank" : undefined}
                  rel={isExternal ? "noopener noreferrer" : undefined}
                  className="group flex flex-col items-center text-center border border-border rounded-3xl p-6 bg-card hover:border-orange hover:shadow-[0_0_30px_-10px_rgba(232,102,10,0.1)] transition-all duration-300"
                >
                  <div className={`flex items-center justify-center w-[50px] h-[50px] rounded-full ${link.circleColor} ${link.iconColor} mb-4 transition-all duration-300`}>
                    <Icon size={22} />
                  </div>
                  <p className="font-mono text-[10px] uppercase tracking-[0.15em] text-muted-foreground mb-2">
                    {link.label}
                  </p>
                  <p className="font-semibold text-sm text-foreground group-hover:text-orange transition-colors duration-200">
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
