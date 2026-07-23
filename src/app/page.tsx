import { Navigation } from "@/components/sections/navigation";
import { Projects } from "@/components/sections/projects";
import { Contact } from "@/components/sections/contact";
import { Footer } from "@/components/sections/footer";
import { IntroSplash } from "@/components/intro-splash";

export default function Home() {
  return (
    <>
      <IntroSplash />
      <Navigation />
      <main className="pb-24 sm:pb-0">
        <Projects />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
