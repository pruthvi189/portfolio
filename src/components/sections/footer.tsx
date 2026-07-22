"use client";

import { FadeIn } from "@/components/animations";
import { site } from "@/data/site";

export function Footer() {
  return (
    <footer className="section-padding py-12 pb-28 border-t border-border">
      <FadeIn>
        <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-sm text-muted-foreground">
            &copy; {new Date().getFullYear()}{" "}
            <span className="text-primary">{site.name}</span>. Built with Next.js &
            Tailwind CSS.
          </p>
          <p className="text-sm text-muted-foreground">
            Designed with precision.
          </p>
        </div>
      </FadeIn>
    </footer>
  );
}
