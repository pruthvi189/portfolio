import type { Metadata } from "next";
import { Navigation } from "@/components/sections/navigation";
import { About } from "@/components/sections/about";
import { Footer } from "@/components/sections/footer";

export const metadata: Metadata = {
  title: "About",
  description:
    "Learn about Pruthvi Shah's journey — ML Engineer with experience in deep learning, NLP, and full-stack AI applications.",
};

export default function AboutPage() {
  return (
    <>
      <Navigation />
      <main className="pt-20">
        <About />
      </main>
      <Footer />
    </>
  );
}
