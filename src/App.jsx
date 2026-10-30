import React, { useEffect, Suspense, lazy } from "react";
import { ThemeProvider } from "@/context/ThemeContext";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { ScrollProgress } from "@/components/layout/ScrollProgress";
import { CustomCursor } from "@/components/layout/CustomCursor";
import { BackToTop } from "@/components/layout/BackToTop";
import { Preloader } from "@/components/layout/Preloader";
import { CodeBackground } from "@/components/ui/CodeBackground";
import { Hero } from "@/components/sections/Hero";
import { About } from "@/components/sections/About";
import { useActiveSection } from "@/hooks/useActiveSection";
import { initSmoothScroll } from "@/lib/smoothScroll";

// Code-split and lazy-load sections below the fold
const FocusAreas = lazy(() => import("@/components/sections/FocusAreas"));
const Skills = lazy(() => import("@/components/sections/Skills"));
const Projects = lazy(() => import("@/components/sections/Projects"));
const ProcessSection = lazy(() => import("@/components/sections/ProcessSection"));
const DataShowcase = lazy(() => import("@/components/sections/DataShowcase"));
const Education = lazy(() => import("@/components/sections/Education"));
const Certifications = lazy(() => import("@/components/sections/Certifications"));
const GitHubSection = lazy(() => import("@/components/sections/GitHubSection"));
const Contact = lazy(() => import("@/components/sections/Contact"));

const SECTION_IDS = [
  "hero",
  "about",
  "focus",
  "skills",
  "projects",
  "process",
  "analytics",
  "education",
  "certifications",
  "github",
  "contact",
];

export function App() {
  const activeSection = useActiveSection(SECTION_IDS, 100);

  useEffect(() => {
    // Initialize Lenis Smooth Scroll with GSAP ScrollTrigger Integration
    const cleanupScroll = initSmoothScroll();
    return () => {
      if (typeof cleanupScroll === "function") {
        cleanupScroll();
      }
    };
  }, []);

  return (
    <ThemeProvider>
      {/* Monogram Brand Preloader (Brief < 1.1s, session-cached, Esc skippable) */}
      <Preloader />

      <div className="relative min-h-screen flex flex-col bg-[#060608] text-[#F4F4F5] selection:bg-[#C8F31D] selection:text-black">
        {/* Subtle Background Monochrome Dot Grid & Syntax */}
        <CodeBackground />

        {/* Electric Lime Top Scroll Progress Bar */}
        <ScrollProgress />

        {/* Custom Circular Precision Cursor (Pointer: Fine only) */}
        <CustomCursor />

        {/* Floating Glass Pill Navbar with Iridescent Conic Rings */}
        <Navbar activeSection={activeSection} />

        {/* Main Content Sections with Accessibility Landmark */}
        <main id="main-content" tabIndex="-1" className="flex-1 relative z-10 outline-none">
          {/* Above the fold: Instantly interactive */}
          <Hero />
          <About />

          {/* Below the fold: Code-split and lazy-loaded */}
          <Suspense fallback={<div className="min-h-[200px]" aria-hidden="true" />}>
            <FocusAreas />
            <Skills />
            <Projects />
            <ProcessSection />
            <DataShowcase />
            <Education />
            <Certifications />
            <GitHubSection />
            <Contact />
          </Suspense>
        </main>

        {/* Minimal Editorial Footer */}
        <Footer />

        {/* Floating Back To Top */}
        <BackToTop />
      </div>
    </ThemeProvider>
  );
}

export default App;
