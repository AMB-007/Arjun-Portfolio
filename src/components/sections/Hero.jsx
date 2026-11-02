import React, { useState, lazy, Suspense } from "react";
import { motion } from "framer-motion";
import { ArrowRight, Terminal, ExternalLink, User, Code2, FileText } from "lucide-react";
import { PERSONAL_INFO } from "@/data/portfolioData";
import { ProfilePortrait } from "@/components/ui/ProfilePortrait";
import { CodePanel } from "@/components/ui/CodePanel";
import { GithubIcon } from "@/components/ui/Icons";
import { FocusTextReveal } from "@/components/ui/FocusTextReveal";
import { MagneticButton } from "@/components/ui/MagneticButton";
import { cn } from "@/utils/helpers";

// Code-split 3D WebGL Lattice so initial HTML/CSS paint is instant (0 TBT)
const HeroDataLattice = lazy(() =>
  import("@/components/3d/HeroDataLattice").then((m) => ({ default: m.HeroDataLattice }))
);

export function Hero() {
  const [rightTab, setRightTab] = useState("portrait"); // "portrait" | "code"

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.08,
        delayChildren: 0.05,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 16 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.45, ease: [0.22, 1, 0.36, 1] },
    },
  };

  return (
    <section
      id="hero"
      className="relative min-h-[92vh] flex items-center pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden border-b border-white/[0.07] bg-[#07080C]"
    >
      {/* 3D WebGL Data Lattice Background Layer (Lazy loaded) */}
      <div className="absolute inset-0 pointer-events-none z-0 overflow-hidden opacity-60">
        <Suspense fallback={null}>
          <HeroDataLattice className="w-full h-full" />
        </Suspense>
      </div>

      {/* Atmospheric Radial Gradients */}
      <div
        className="absolute top-1/4 right-1/4 w-96 h-96 rounded-full pointer-events-none blur-[120px] opacity-15 bg-[#D6B979]"
        aria-hidden="true"
      />
      <div
        className="absolute bottom-1/4 left-1/4 w-96 h-96 rounded-full pointer-events-none blur-[140px] opacity-12 bg-[#3B3F9E]"
        aria-hidden="true"
      />

      <div className="editorial-container w-full relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-14 items-center">
          {/* LEFT COLUMN: Editorial Typography & Actions */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="lg:col-span-7 flex flex-col space-y-7"
          >
            {/* Technical Eyebrow */}
            <motion.div variants={itemVariants} className="flex flex-wrap items-center gap-3">
              <span className="inline-flex items-center gap-2 px-3.5 py-1 text-xs font-mono font-bold tracking-wider uppercase rounded-full bg-[#0D0F14] text-[#F3EFE6] border border-white/[0.08] shadow-sm">
                <span className="w-2 h-2 rounded-full bg-[#D6B979] shadow-[0_0_8px_#D6B979]" />
                <Terminal className="w-3.5 h-3.5 text-[#D6B979]" />
                <span>DATA ANALYTICS &amp; ML // B.TECH '26</span>
              </span>
              <span className="hidden sm:inline-flex items-center text-xs font-mono text-[#A8A59C]">
                Toc H Institute of Science and Technology
              </span>
            </motion.div>

            {/* Display Heading & Tagline with Interactive Focus Reveal */}
            <motion.div variants={itemVariants} className="space-y-4">
              <FocusTextReveal
                text="DATA SCIENCE & MACHINE LEARNING"
                as="h1"
                bracketSize="lg"
                className="text-4xl sm:text-6xl md:text-7xl lg:text-7.5xl font-extrabold tracking-tight text-[#F3EFE6] font-sans leading-[1.02] uppercase"
              />
              <FocusTextReveal
                text="I turn raw data into decisions, predictive models, and production-grade intelligent systems."
                as="p"
                bracketSize="sm"
                className="text-lg sm:text-xl md:text-2xl font-medium text-[#A8A59C] font-sans leading-snug"
              />
            </motion.div>

            {/* Concise Introduction */}
            <motion.p
              variants={itemVariants}
              className="text-base sm:text-lg text-[#A8A59C] leading-relaxed max-w-2xl font-sans"
            >
              I'm <strong className="text-[#F3EFE6] font-semibold">Arjun M Babu</strong>, a Computer Science graduate skilled in Python, SQL, Power BI, data analysis, and machine learning. Seeking a Data Analyst role to apply analytical and problem-solving skills to real-world challenges.
            </motion.p>

            {/* Primary & Secondary CTA Row (Defect c: Fixed Wrapping, Body Font, Flex) */}
            <motion.div variants={itemVariants} className="flex flex-wrap items-center gap-3.5 pt-2">
              <MagneticButton
                href="#projects"
                variant="primary"
                size="lg"
                data-cursor="PROJECTS"
              >
                <span>Explore Projects</span>
                <ArrowRight className="w-4 h-4 ml-1.5" />
              </MagneticButton>

              <MagneticButton
                href="/resume.html"
                target="_blank"
                variant="secondary"
                size="lg"
                data-cursor="RESUME"
              >
                <FileText className="w-4 h-4 mr-1.5 text-[#D6B979]" />
                <span>Resume</span>
              </MagneticButton>

              <MagneticButton
                href={PERSONAL_INFO.github}
                target="_blank"
                variant="ghost"
                size="lg"
                data-cursor="GITHUB"
              >
                <GithubIcon className="w-4 h-4 mr-1.5" />
                <span>GitHub</span>
                <ExternalLink className="w-3.5 h-3.5 ml-1 opacity-60" />
              </MagneticButton>
            </motion.div>

            {/* Verified Meta Footnote */}
            <motion.div
              variants={itemVariants}
              className="pt-6 border-t border-white/[0.07] flex flex-wrap items-center gap-3 text-xs font-mono text-[#6E6C66]"
            >
              <span>Toc H Institute of Science and Technology (B.Tech CSE 2022–2026)</span>
              <span>•</span>
              <a
                href={PERSONAL_INFO.github}
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#F3EFE6] hover:text-[#D6B979] transition-colors flex items-center gap-1 font-bold"
              >
                <span>github.com/AMB-007</span>
                <ExternalLink className="w-3 h-3" />
              </a>
              <span>•</span>
              <span className="text-[#6E6C66]">{PERSONAL_INFO.location}</span>
            </motion.div>
          </motion.div>

          {/* RIGHT COLUMN: 3D Tilt Portrait & Interactive Architecture Artifact */}
          <motion.div
            initial={{ opacity: 0, scale: 0.98 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
            className="lg:col-span-5 w-full flex flex-col space-y-3"
          >
            {/* View Switcher Controls */}
            <div className="flex items-center justify-between pb-1 font-mono text-xs">
              <span className="text-[#A8A59C] text-[11px] uppercase font-bold tracking-wider flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-[#D6B979]" />
                // TECHNICAL FOCUS:
              </span>
              <div className="flex items-center gap-1 text-[11px] bg-[#0D0F14] p-1 rounded-xl border border-white/[0.08]">
                <button
                  onClick={() => setRightTab("portrait")}
                  className={cn(
                    "px-3 py-1 font-semibold uppercase tracking-wider rounded-lg transition-colors cursor-pointer flex items-center gap-1.5",
                    rightTab === "portrait"
                      ? "bg-[#D6B979] text-[#07080C] font-bold shadow-sm"
                      : "bg-transparent text-[#A8A59C] hover:text-white"
                  )}
                >
                  <User className="w-3 h-3" />
                  <span>Portrait</span>
                </button>
                <button
                  onClick={() => setRightTab("code")}
                  className={cn(
                    "px-3 py-1 font-semibold uppercase tracking-wider rounded-lg transition-colors cursor-pointer flex items-center gap-1.5",
                    rightTab === "code"
                      ? "bg-[#D6B979] text-[#07080C] font-bold shadow-sm"
                      : "bg-transparent text-[#A8A59C] hover:text-white"
                  )}
                >
                  <Code2 className="w-3 h-3" />
                  <span>Architecture</span>
                </button>
              </div>
            </div>

            {/* Dynamic Artifact Panel with 3D Tilt Card */}
            <div className="relative">
              {rightTab === "portrait" ? (
                <ProfilePortrait />
              ) : (
                <CodePanel />
              )}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
