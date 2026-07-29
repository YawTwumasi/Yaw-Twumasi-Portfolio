import { createFileRoute } from "@tanstack/react-router";
import { LazyMotion } from "framer-motion";

// Above-the-fold — loaded eagerly for instant first paint
import { Navbar } from "@/components/portfolio/Navbar";
import { Hero } from "@/components/portfolio/Hero";
import { ScrollProgress } from "@/components/portfolio/ScrollProgress";
import { Toaster } from "@/components/ui/sonner";

// Eager imports for all sections so they are present in the DOM for anchor link scrolling
import { About } from "@/components/portfolio/About";
import { Skills } from "@/components/portfolio/Skills";
import { Projects } from "@/components/portfolio/Projects";

import { Experience } from "@/components/portfolio/Experience";
import { Certificates } from "@/components/portfolio/Certificates";
import { Contact } from "@/components/portfolio/Contact";
import { Footer } from "@/components/portfolio/Footer";
import { BackToTop } from "@/components/portfolio/BackToTop";

// Loads framer-motion's domAnimation feature set (~18 kB) instead of the full bundle (~100 kB)
const loadFeatures = () => import("@/lib/motion").then((m) => m.default);

export const Route = createFileRoute("/")({
  component: Index,
});

function Index() {
  return (
    <LazyMotion features={loadFeatures} strict>
      <div className="relative min-h-screen bg-background text-foreground">
        <ScrollProgress />
        <Navbar />
        <main>
          <Hero />
          <About />
          <Skills />
          <Projects />

          <Experience />
          <Certificates />
          <Contact />
        </main>
        <Footer />
        <BackToTop />
        <Toaster richColors position="top-right" />
      </div>
    </LazyMotion>
  );
}
