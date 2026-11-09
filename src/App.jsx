import React, { useState, useEffect, Suspense, lazy } from "react";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Hero } from "@/components/sections/Hero";
import { About } from "@/components/sections/About";
import { Skills } from "@/components/sections/Skills";
import { ModelPlayground } from "@/components/sections/ModelPlayground";
import { Projects } from "@/components/sections/Projects";
import { Experience } from "@/components/sections/Experience";
import { Contact } from "@/components/sections/Contact";
import { CommandMenu } from "@/components/ui/CommandMenu";
import { SectionRail } from "@/components/ui/SectionRail";
import { DataLatticePoster } from "@/components/3d/DataLatticePoster";
import { useActiveSection } from "@/hooks/useActiveSection";
import { useTheme } from "@/hooks/useTheme";

// Lazy load Three.js 3D lattice chunk for optimal initial paint (< 110 kB gzipped main bundle)
const HeroDataLattice = lazy(() => import("@/components/3d/HeroDataLattice"));

const SECTION_IDS = [
  "hero",
  "about",
  "skills",
  "interactive-demo",
  "projects",
  "experience",
  "contact",
];

export function App() {
  const activeSection = useActiveSection(SECTION_IDS, 120);
  const {
    theme,
    isDark,
    toggleTheme,
    accent,
    setAccent,
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
    <div className="min-h-screen flex flex-col bg-[var(--bg)] text-[var(--text-primary)] antialiased transition-colors selection:bg-[var(--accent)] selection:text-[var(--accent-contrast)] relative">
      {/* Film Grain Texture Overlay (~3% opacity) */}
      <div className="grain-overlay" aria-hidden="true" />

      {/* 3D Animated Layer or Fallback Poster */}
      {enable3DFlag && is3DEnabled ? (
        <Suspense fallback={<DataLatticePoster isDark={isDark} />}>
          <HeroDataLattice
            isDark={isDark}
            accent={accent}
            onPerformanceDrop={() => {
              toggle3D(false);
            }}
          />
        </Suspense>
      ) : (
        <DataLatticePoster isDark={isDark} />
      )}

      {/* Skip to Main Content Link (Accessibility) */}
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 z-50 px-4 py-2 bg-[var(--accent)] text-[var(--accent-contrast)] rounded-md text-xs font-mono font-medium shadow-lg"
      >
        Skip to main content
      </a>

      {/* Sticky Translucent Navbar */}
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
        <Hero />
        <About />
        <Skills />
        <ModelPlayground />
        <Projects />
        <Experience />
        <Contact />
      </main>

      {/* Minimal Editorial Footer */}
      <Footer />

      {/* Accessible Command Palette (Cmd+K) */}
      <CommandMenu
        isOpen={commandMenuOpen}
        onClose={() => setCommandMenuOpen(false)}
        isDark={isDark}
        onToggleTheme={toggleTheme}
        accent={accent}
        onSetAccent={setAccent}
        is3DEnabled={is3DEnabled}
        onToggle3D={toggle3D}
        enable3DFlag={enable3DFlag}
      />
    </div>
  );
}

export default App;
