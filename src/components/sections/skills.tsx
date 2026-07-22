"use client";

import { skillCategories } from "@/data/skills";
import { FadeIn, StaggerContainer, StaggerItem } from "@/components/animations";

export function Skills() {
  return (
    <section id="skills" className="section-padding py-24">
      <div className="max-w-6xl mx-auto">
        <FadeIn>
          <p className="text-orange font-medium text-sm tracking-wide uppercase mb-3">
            Skills
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight mb-4">
            Technologies I Work With
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mb-16">
            The tools and frameworks I use to build intelligent systems.
          </p>
        </FadeIn>

        <StaggerContainer className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3" staggerDelay={0.08}>
          {skillCategories.map((category) => (
            <StaggerItem key={category.name}>
              <div className="border border-border rounded-2xl p-6 bg-card hover:border-border hover:shadow-[0_0_30px_-10px_rgba(232,102,10,0.06)] transition-all duration-300 group">
                <h3 className="font-semibold text-lg mb-4 text-primary group-hover:text-orange transition-colors duration-300">{category.name}</h3>
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill) => (
                    <span
                      key={skill}
                      className="text-sm text-muted-foreground bg-secondary border border-border px-3 py-1.5 rounded-lg hover:border-orange/30 hover:text-foreground transition-all duration-200"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
}
