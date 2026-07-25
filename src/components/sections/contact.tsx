"use client";

import { FadeIn, StaggerContainer, StaggerItem } from "@/components/animations";
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
    },
    {
      label: "GITHUB",
      value: "@pruthvi189",
      href: site.github,
      icon: GithubIcon,
    },
    {
      label: "LINKEDIN",
      value: "Connect",
      href: site.linkedin,
      icon: LinkedinIcon,
    },
    {
      label: "RESUME",
      value: "View Resume",
      href: site.resumeUrl,
      icon: FileText,
    },
  ];

  return (
    <section id="contact" className="section-padding py-24 pb-40 relative">
      <div className="max-w-4xl mx-auto relative">
        <FadeIn>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight mb-4 text-center">
            Get in Touch
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mb-12 text-center mx-auto">
            Have a project in mind or just want to chat? I&apos;m always open to
            new opportunities and interesting conversations.
          </p>
        </FadeIn>

        <StaggerContainer staggerDelay={0.08}>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
            {links.map((link) => {
              const Icon = link.icon;
              const isExternal = link.href.startsWith("http");
              return (
                <StaggerItem key={link.label}>
                  <a
                    href={link.href}
                    target={isExternal ? "_blank" : undefined}
                    rel={isExternal ? "noopener noreferrer" : undefined}
                    className="group flex flex-col items-center text-center border-[1.5px] border-border rounded-[20px] p-6 bg-card hover:-translate-y-1 hover:border-orange hover:shadow-[0_0_30px_-10px_rgba(232,102,10,0.1)] transition-[transform,border-color,box-shadow] duration-300"
                  >
                    <div className="flex items-center justify-center w-12 h-12 rounded-full bg-secondary text-muted-foreground group-hover:bg-orange/15 group-hover:text-orange mb-3 transition-[background-color,color] duration-300">
                      <Icon size={20} />
                    </div>
                    <p className="font-mono text-[10px] uppercase tracking-[0.15em] text-muted-foreground mb-1">
                      {link.label}
                    </p>
                    <p className="font-medium text-sm text-muted-foreground group-hover:text-foreground transition-colors duration-200">
                      {link.value}
                    </p>
                  </a>
                </StaggerItem>
              );
            })}
          </div>
        </StaggerContainer>
      </div>
    </section>
  );
}
