import React, { useState, useEffect } from "react";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Hero } from "@/components/sections/Hero";
import { About } from "@/components/sections/About";
import { Capabilities } from "@/components/sections/Capabilities";
import { Skills } from "@/components/sections/Skills";
import { Projects } from "@/components/sections/Projects";
import { LearningJourney } from "@/components/sections/LearningJourney";
import { Experience } from "@/components/sections/Experience";
import { Contact } from "@/components/sections/Contact";
import { CommandMenu } from "@/components/ui/CommandMenu";
import { SectionRail } from "@/components/ui/SectionRail";
import { GitBranchVisual } from "@/components/ui/GitBranchVisual";
import { ErrorBoundary } from "@/components/ui/ErrorBoundary";
import { useActiveSection } from "@/hooks/useActiveSection";
import { useTheme } from "@/hooks/useTheme";

const SECTION_IDS = [
  "hero",
  "about",
  "capabilities",
  "skills",
  "projects",
  "learning",
  "education",
  "contact",
];

export function App() {
  const activeSection = useActiveSection(SECTION_IDS, 120);
  const {
    theme,
    isDark,
    toggleTheme,
    is3DEnabled,
    toggle3D,
    enable3DFlag,
  } = useTheme();

  const [commandMenuOpen, setCommandMenuOpen] = useState(false);

  // Global Ctrl+K / Cmd+K listener to open Command Menu
  useEffect(() => {
    const handleKeyDown = (e) => {
      if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === "k") {
        e.preventDefault();
        setCommandMenuOpen((prev) => !prev);
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  return (
    <div className="min-h-screen flex flex-col bg-[var(--bg)] text-[var(--text-primary)] antialiased transition-colors selection:bg-[var(--primary-accent)] selection:text-[var(--accent-contrast)] relative">
      {/* Subtle Background Telemetry & Git Branch Detail (low opacity, 2-5%) */}
      <GitBranchVisual />

      {/* Skip to Main Content Link (Accessibility) */}
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 z-50 px-4 py-2 bg-[var(--primary-accent)] text-[var(--accent-contrast)] rounded-md text-xs font-mono font-medium shadow-lg"
      >
        Skip to main content
      </a>

      {/* Minimal Professional Navigation */}
      <Navbar
        activeSection={activeSection}
        isDark={isDark}
        onToggleTheme={toggleTheme}
        onOpenCommandMenu={() => setCommandMenuOpen(true)}
      />

      {/* Section Indicator Rail on Wide Screens (2xl) */}
      <SectionRail activeSection={activeSection} />

      {/* Main Content Sections */}
      <main id="main-content" tabIndex="-1" className="flex-1 outline-none relative z-10">
        <ErrorBoundary>
          <Hero
            isDark={isDark}
            is3DEnabled={is3DEnabled}
            onPerformanceDrop={() => toggle3D(false)}
          />
          <About />
          <Capabilities />
          <Skills />
          <Projects />
          <LearningJourney />
          <Experience />
          <Contact />
        </ErrorBoundary>
      </main>

      {/* Minimal Editorial Footer */}
      <Footer />

      {/* Accessible Command Palette (Cmd+K) */}
      <CommandMenu
        isOpen={commandMenuOpen}
        onClose={() => setCommandMenuOpen(false)}
        isDark={isDark}
        onToggleTheme={toggleTheme}
        is3DEnabled={is3DEnabled}
        onToggle3D={toggle3D}
        enable3DFlag={enable3DFlag}
      />
    </div>
  );
}

export default App;
