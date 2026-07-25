"use client";

import dynamic from "next/dynamic";
import { Navigation } from "@/components/sections/navigation";
import { Hero } from "@/components/sections/hero";
import { Projects } from "@/components/sections/projects";
import { Footer } from "@/components/sections/footer";
import { IntroSplash } from "@/components/intro-splash";
import { SectionDivider } from "@/components/section-divider";
import { PageTransition } from "@/components/page-transition";
import { ParallaxFade } from "@/components/parallax-fade";

const Skills = dynamic(() => import("@/components/sections/skills").then(m => ({ default: m.Skills })), { ssr: false });
const About = dynamic(() => import("@/components/sections/about").then(m => ({ default: m.About })), { ssr: false });
const Contact = dynamic(() => import("@/components/sections/contact").then(m => ({ default: m.Contact })), { ssr: false });

export default function Home() {
  return (
    <>
      <IntroSplash />
      <PageTransition>
        <Navigation />
        <main className="pb-24 sm:pb-0">
          <Hero />
          <ParallaxFade>
            <SectionDivider />
            <Projects />
          </ParallaxFade>
          <ParallaxFade>
            <SectionDivider />
            <Skills />
          </ParallaxFade>
          <ParallaxFade>
            <SectionDivider />
            <About />
          </ParallaxFade>
          <ParallaxFade>
            <SectionDivider />
            <Contact />
          </ParallaxFade>
        </main>
        <Footer />
      </PageTransition>
    </>
  );
}
