import { Navigation } from "@/components/sections/navigation";
import { Hero } from "@/components/sections/hero";
import { Projects } from "@/components/sections/projects";
import { Skills } from "@/components/sections/skills";
import { About } from "@/components/sections/about";
import { Contact } from "@/components/sections/contact";
import { Footer } from "@/components/sections/footer";
import { IntroSplash } from "@/components/intro-splash";
import { SectionDivider } from "@/components/section-divider";
import { PageTransition } from "@/components/page-transition";
import { ParallaxFade } from "@/components/parallax-fade";

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
