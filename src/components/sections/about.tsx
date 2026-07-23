"use client";

import { FadeIn, StaggerContainer, StaggerItem } from "@/components/animations";
import { Briefcase, GraduationCap } from "lucide-react";

const timeline = [
  {
    period: "Jan 2026 — Apr 2026",
    title: "ML Intern",
    organization: "Thick Code, Rajkot",
    icon: Briefcase,
    details: [
      "Led model development on a 4-person team building a stock forecasting platform benchmarking ARIMA, Prophet, and LSTM models",
      "Applied core ML and data science foundations — NumPy, pandas, and applied statistics — to iterative, hands-on project work",
      "Independently designed and delivered 8+ applied ML projects on biweekly deadlines",
    ],
  },
  {
    period: "May 2025 — Jun 2025",
    title: "Full Stack Web Developer Intern",
    organization: "Gleamoro, Bhavnagar",
    icon: Briefcase,
    details: [
      "Reduced API response latency by an estimated 30% through query optimization and connection pooling",
      "Integrated React/Redux frontend with the authenticated API; diagnosed and fixed a race condition in concurrent requests",
    ],
  },
  {
    period: "May 2026",
    title: "B.Tech, Information Technology",
    organization: "G H Patel College of Engineering and Technology (GCET), Anand",
    icon: GraduationCap,
    details: [
      "CGPA: 8.60/10",
      "Affiliated with CVM University",
    ],
  },
];

export function About() {
  return (
    <section id="about" className="section-padding py-24">
      <div className="max-w-4xl mx-auto">
        <FadeIn>
          <p className="text-orange font-medium text-sm tracking-wide uppercase mb-3">
            About
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight mb-6">
            About Me
          </h2>
        </FadeIn>

        <FadeIn delay={0.2}>
          <p className="text-muted-foreground text-lg leading-relaxed max-w-3xl mb-16">
            Hi, I&apos;m Pruthvi. I recently graduated with a B.Tech in Information Technology
            and enjoy building AI applications that solve real-world problems. My work primarily
            revolves around machine learning, with experience in full-stack development whenever
            a project calls for it. I like turning ideas that genuinely interest me into projects,
            using each one as an opportunity to learn, experiment, and build something meaningful.
          </p>
        </FadeIn>

        <FadeIn delay={0.4}>
          <div className="relative">
            <div className="absolute left-4 sm:left-6 top-0 bottom-0 w-px bg-border" />

            <StaggerContainer className="space-y-12" staggerDelay={0.1}>
            {timeline.map((item, index) => {
              const Icon = item.icon;
              return (
                <StaggerItem key={index}>
                  <div className="relative flex gap-4 sm:gap-6">
                    <div className="relative z-10 flex items-center justify-center w-8 h-8 sm:w-12 sm:h-12 rounded-full bg-secondary border border-border shrink-0">
                      <Icon
                        size={16}
                        className="text-muted-foreground sm:w-5 sm:h-5"
                      />
                    </div>
                    <div className="flex-1 pb-2">
                      <p className="text-xs text-muted-foreground mb-1">
                        {item.period}
                      </p>
                      <h3 className="text-lg font-semibold text-primary">{item.title}</h3>
                      {item.organization && (
                        <p className="text-sm text-muted-foreground mb-3">
                          {item.organization}
                        </p>
                      )}
                      {item.details && (
                        <ul className="space-y-2">
                          {item.details.map((detail, i) => (
                            <li
                              key={i}
                              className="text-sm text-muted-foreground leading-relaxed flex gap-2"
                            >
                              <span className="text-orange mt-1.5 shrink-0">
                                &bull;
                              </span>
                              {detail}
                            </li>
                          ))}
                        </ul>
                      )}
                    </div>
                  </div>
                </StaggerItem>
              );
            })}
          </StaggerContainer>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
