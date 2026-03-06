import { About } from "@/components/about";
import { BackToTop } from "@/components/back-to-top";
import { Contact } from "@/components/contact";
import { Education } from "@/components/education";
import { Experience } from "@/components/experience";
import { Footer } from "@/components/footer";
import { Hero } from "@/components/hero";
import { Navbar } from "@/components/navbar";
import { Projects } from "@/components/projects";
import { Skills } from "@/components/skills";
import { Spotlight } from "@/components/spotlight";

export default function HomePage() {
  return (
    <div className="relative min-h-screen bg-background text-foreground">
      <Spotlight />
      <Navbar />
      <main className="relative">
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Experience />
        <Education />
        <Contact />
      </main>
      <Footer />
      <BackToTop />
    </div>
  );
}
