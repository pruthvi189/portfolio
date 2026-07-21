"use client";

import { useParams } from "next/navigation";
import { projects } from "@/data/projects";
import { notFound } from "next/navigation";
import Link from "next/link";
import { ArrowLeft, ExternalLink } from "lucide-react";
import { GithubIcon } from "@/components/icons";
import { Badge } from "@/components/ui/badge";
import { FadeIn } from "@/components/animations";

export default function ProjectPage() {
  const params = useParams();
  const slug = params.slug as string;
  const project = projects.find((p) => p.slug === slug);

  if (!project) {
    notFound();
  }

  return (
    <div className="min-h-screen">
      <div className="section-padding py-12">
        <Link
          href="/#projects"
          className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors duration-200 mb-12"
        >
          <ArrowLeft size={16} />
          Back to Projects
        </Link>

        <div className="max-w-4xl mx-auto">
          <FadeIn>
            <div className="mb-12">
              <p className="text-orange font-medium text-sm tracking-wide uppercase mb-3">
                {project.category === "ai-ml"
                  ? "AI & Machine Learning"
                  : project.category === "fullstack"
                    ? "Full Stack"
                    : "Data Science"}
              </p>
              <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight mb-3">
                {project.title}
              </h1>
              <p className="text-xl text-muted-foreground mb-6">
                {project.subtitle}
              </p>
              <div className="flex flex-wrap gap-2">
                {project.techStack.map((tech) => (
                  <Badge
                    key={tech}
                    variant="secondary"
                    className="text-xs font-normal bg-secondary text-muted-foreground border border-border"
                  >
                    {tech}
                  </Badge>
                ))}
              </div>
            </div>
          </FadeIn>

          <div className="space-y-16">
            <FadeIn delay={0.1}>
              <section>
                <h2 className="text-xl font-semibold mb-4 text-primary">Overview</h2>
                <p className="text-muted-foreground leading-relaxed">
                  {project.description}
                </p>
              </section>
            </FadeIn>

            <FadeIn delay={0.15}>
              <section>
                <h2 className="text-xl font-semibold mb-4 text-primary">Problem</h2>
                <p className="text-muted-foreground leading-relaxed">
                  {project.problem}
                </p>
              </section>
            </FadeIn>

            <FadeIn delay={0.2}>
              <section>
                <h2 className="text-xl font-semibold mb-4 text-primary">Solution</h2>
                <p className="text-muted-foreground leading-relaxed">
                  {project.solution}
                </p>
              </section>
            </FadeIn>

            <FadeIn delay={0.25}>
              <section>
                <h2 className="text-xl font-semibold mb-4 text-primary">Architecture</h2>
                <div className="border border-border rounded-2xl p-6 bg-card">
                  <ol className="space-y-3">
                    {project.architecture.map((step, i) => (
                      <li key={i} className="flex gap-3 text-sm text-muted-foreground">
                        <span className="text-orange font-mono text-xs mt-0.5 shrink-0">
                          {String(i + 1).padStart(2, "0")}
                        </span>
                        <span className="leading-relaxed">{step}</span>
                      </li>
                    ))}
                  </ol>
                </div>
              </section>
            </FadeIn>

            <FadeIn delay={0.3}>
              <section>
                <h2 className="text-xl font-semibold mb-4 text-primary">Key Highlights</h2>
                <ul className="space-y-3">
                  {project.highlights.map((highlight, i) => (
                    <li
                      key={i}
                      className="flex gap-3 text-muted-foreground"
                    >
                      <span className="text-orange mt-1 shrink-0">&bull;</span>
                      <span className="leading-relaxed">{highlight}</span>
                    </li>
                  ))}
                </ul>
              </section>
            </FadeIn>

            <FadeIn delay={0.35}>
              <section>
                <h2 className="text-xl font-semibold mb-4 text-primary">Challenges</h2>
                <ul className="space-y-3">
                  {project.challenges.map((challenge, i) => (
                    <li
                      key={i}
                      className="flex gap-3 text-muted-foreground"
                    >
                      <span className="text-orange mt-1 shrink-0">&bull;</span>
                      <span className="leading-relaxed">{challenge}</span>
                    </li>
                  ))}
                </ul>
              </section>
            </FadeIn>

            <FadeIn delay={0.4}>
              <section>
                <h2 className="text-xl font-semibold mb-4 text-primary">Lessons Learned</h2>
                <ul className="space-y-3">
                  {project.lessons.map((lesson, i) => (
                    <li
                      key={i}
                      className="flex gap-3 text-muted-foreground"
                    >
                      <span className="text-orange mt-1 shrink-0">&bull;</span>
                      <span className="leading-relaxed">{lesson}</span>
                    </li>
                  ))}
                </ul>
              </section>
            </FadeIn>

            <FadeIn delay={0.45}>
              <section>
                <h2 className="text-xl font-semibold mb-4 text-primary">
                  Future Improvements
                </h2>
                <ul className="space-y-3">
                  {project.futureImprovements.map((improvement, i) => (
                    <li
                      key={i}
                      className="flex gap-3 text-muted-foreground"
                    >
                      <span className="text-orange mt-1 shrink-0">&bull;</span>
                      <span className="leading-relaxed">{improvement}</span>
                    </li>
                  ))}
                </ul>
              </section>
            </FadeIn>

            <FadeIn delay={0.5}>
              <div className="flex flex-wrap gap-4 pt-4 border-t border-border">
                {project.github && (
                  <Link
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-6 py-3 rounded-full font-medium text-sm hover:opacity-90 transition-opacity duration-200"
                  >
                    <GithubIcon className="w-4 h-4" />
                    View on GitHub
                  </Link>
                )}
                {project.liveDemo && (
                  <Link
                    href={project.liveDemo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 border border-border px-6 py-3 rounded-full font-medium text-sm text-muted-foreground hover:text-foreground hover:border-muted-foreground transition-colors duration-200"
                  >
                    <ExternalLink size={16} />
                    Live Demo
                  </Link>
                )}
              </div>
            </FadeIn>
          </div>
        </div>
      </div>
    </div>
  );
}
