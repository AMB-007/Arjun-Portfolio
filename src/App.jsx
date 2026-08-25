import React from "react";
import { ThemeProvider } from "@/context/ThemeContext";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { ScrollProgress } from "@/components/layout/ScrollProgress";
import { CustomCursor } from "@/components/layout/CustomCursor";
import { BackToTop } from "@/components/layout/BackToTop";
import { CodeBackground } from "@/components/ui/CodeBackground";
import { Hero } from "@/components/sections/Hero";
import { About } from "@/components/sections/About";
import { FocusAreas } from "@/components/sections/FocusAreas";
import { Skills } from "@/components/sections/Skills";
import { Projects } from "@/components/sections/Projects";
import { LearningJourney } from "@/components/sections/LearningJourney";
import { Education } from "@/components/sections/Education";
import { Certifications } from "@/components/sections/Certifications";
import { GitHubSection } from "@/components/sections/GitHubSection";
import { Contact } from "@/components/sections/Contact";
import { useActiveSection } from "@/hooks/useActiveSection";

const SECTION_IDS = [
  "hero",
  "about",
  "focus",
  "skills",
  "projects",
  "learning-journey",
  "education",
  "certifications",
  "github",
  "contact",
];

export function App() {
  const activeSection = useActiveSection(SECTION_IDS, 100);

  return (
    <ThemeProvider>
      <div className="relative min-h-screen flex flex-col bg-slate-50 dark:bg-slate-950 text-slate-900 dark:text-slate-100 transition-colors selection:bg-sky-500/20 selection:text-sky-600 dark:selection:text-sky-300">
        {/* Subtle Background Syntax Particles */}
        <CodeBackground />

        {/* Scroll Progress Bar */}
        <ScrollProgress />

        {/* Custom Circular Cursor (Desktop Only) */}
        <CustomCursor />

        {/* Sticky Editorial Navbar */}
        <Navbar activeSection={activeSection} />

        {/* Main Content Sections */}
        <main className="flex-1 relative z-10">
          <Hero />
          <About />
          <FocusAreas />
          <Skills />
          <Projects />
          <LearningJourney />
          <Education />
          <Certifications />
          <GitHubSection />
          <Contact />
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
