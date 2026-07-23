import { Navigation } from "@/components/sections/navigation";
import { Hero } from "@/components/sections/hero";
import { Projects } from "@/components/sections/projects";
import { Skills } from "@/components/sections/skills";
import { About } from "@/components/sections/about";
import { Contact } from "@/components/sections/contact";
import { Footer } from "@/components/sections/footer";
import { IntroSplash } from "@/components/intro-splash";

export default function Home() {
  return (
    <>
      <IntroSplash />
      <Navigation />
      <main className="pb-24 sm:pb-0">
        <Hero />
        <Projects />
        <Skills />
        <About />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
