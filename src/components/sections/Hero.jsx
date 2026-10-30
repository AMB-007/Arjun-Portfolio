import React, { useState } from "react";
import { motion } from "framer-motion";
import { ArrowRight, Terminal, ExternalLink, User, Code2, Sparkles, FileText } from "lucide-react";
import { PERSONAL_INFO } from "@/data/portfolioData";
import { ProfilePortrait } from "@/components/ui/ProfilePortrait";
import { CodePanel } from "@/components/ui/CodePanel";
import { GithubIcon } from "@/components/ui/Icons";
import { FocusTextReveal } from "@/components/ui/FocusTextReveal";
import { MagneticButton } from "@/components/ui/MagneticButton";
import { NeuralCanvas } from "@/components/ui/NeuralCanvas";
import { cn } from "@/utils/helpers";

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
      className="relative min-h-[92vh] flex items-center pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden border-b border-white/5 bg-[#060608]"
    >
      {/* Background Interactive Neural Particle Network */}
      <NeuralCanvas className="opacity-25" />

      {/* Subtle Noise / Radial Glow */}
      <div
        className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(200,243,29,0.04),transparent_50%)] pointer-events-none"
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
              <span className="inline-flex items-center gap-2 px-3 py-1 text-xs font-mono font-bold tracking-wider uppercase rounded-full bg-[#0E0E12] text-[#F4F4F5] border border-white/10 shadow-sm">
                <span className="w-2 h-2 rounded-full bg-[#C8F31D] animate-pulse" />
                <Terminal className="w-3.5 h-3.5 text-[#C8F31D]" />
                <span>DATA ANALYTICS &amp; ML // B.TECH '26</span>
              </span>
              <span className="hidden sm:inline-flex items-center text-xs font-mono text-[#8B8B93]">
                Toc H Institute of Science and Technology
              </span>
            </motion.div>

            {/* Display Heading & Supporting Text with Interactive Viewfinder Focus Reveal */}
            <motion.div variants={itemVariants} className="space-y-4">
              <FocusTextReveal
                text="DATA SCIENCE & MACHINE LEARNING"
                as="h1"
                bracketSize="lg"
                className="text-4xl sm:text-6xl md:text-7xl lg:text-7.5xl font-extrabold tracking-tight text-[#F4F4F5] font-sans leading-[1.02] uppercase"
              />
              <FocusTextReveal
                text="I turn raw data into decisions, predictive models, and production-grade intelligent systems."
                as="p"
                bracketSize="sm"
                className="text-lg sm:text-xl md:text-2xl font-medium text-[#D4D4D8] font-sans leading-snug"
              />
            </motion.div>

            {/* Short Professional Introduction */}
            <motion.p
              variants={itemVariants}
              className="text-base sm:text-lg text-[#8B8B93] leading-relaxed max-w-2xl font-sans"
            >
              I'm <strong className="text-[#F4F4F5] font-semibold">Arjun M Babu</strong>, a Computer Science graduate skilled in Python, SQL, Power BI, data analysis, and machine learning. Seeking a Data Analyst role to apply analytical and problem-solving skills to real-world challenges.
            </motion.p>

            {/* Primary & Secondary CTA Row with Magnetic Physics */}
            <motion.div variants={itemVariants} className="flex flex-wrap items-center gap-4 pt-2">
              <MagneticButton
                href="#projects"
                variant="primary"
                size="lg"
                data-cursor="PROJECTS"
              >
                <span>Explore Projects</span>
                <ArrowRight className="w-4 h-4 ml-2" />
              </MagneticButton>

              <MagneticButton
                href="/resume.html"
                target="_blank"
                variant="secondary"
                size="lg"
                data-cursor="RESUME"
              >
                <FileText className="w-4 h-4 mr-2 text-[#C8F31D]" />
                <span>Resume</span>
              </MagneticButton>

              <MagneticButton
                href={PERSONAL_INFO.github}
                target="_blank"
                variant="ghost"
                size="lg"
                data-cursor="GITHUB"
              >
                <GithubIcon className="w-4 h-4 mr-2" />
                <span>GitHub</span>
                <ExternalLink className="w-3.5 h-3.5 ml-1.5 opacity-60" />
              </MagneticButton>
            </motion.div>

            {/* Verified Meta Footnote */}
            <motion.div
              variants={itemVariants}
              className="pt-6 border-t border-white/5 flex flex-wrap items-center gap-4 text-xs font-mono text-[#8B8B93]"
            >
              <span>Toc H Institute of Science and Technology (B.Tech CSE 2022–2026)</span>
              <span>•</span>
              <a
                href={PERSONAL_INFO.github}
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#F4F4F5] hover:text-[#C8F31D] transition-colors flex items-center gap-1 font-bold"
              >
                <span>github.com/AMB-007</span>
                <ExternalLink className="w-3 h-3" />
              </a>
              <span>•</span>
              <span className="text-[#8B8B93]">{PERSONAL_INFO.location}</span>
            </motion.div>
          </motion.div>

          {/* RIGHT COLUMN: Profile Portrait & Verified Code Artifact */}
          <motion.div
            initial={{ opacity: 0, scale: 0.98 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
            className="lg:col-span-5 w-full flex flex-col space-y-3"
          >
            {/* View Switcher Controls */}
            <div className="flex items-center justify-between pb-1 font-mono text-xs">
              <span className="text-[#8B8B93] text-[11px] uppercase font-bold tracking-wider flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-[#C8F31D]" />
                // SYSTEM ARTIFACT:
              </span>
              <div className="flex items-center gap-1 text-[11px] bg-[#0E0E12] p-1 rounded-lg border border-white/10">
                <button
                  onClick={() => setRightTab("portrait")}
                  className={cn(
                    "px-3 py-1 font-semibold uppercase tracking-wider rounded transition-colors cursor-pointer flex items-center gap-1.5",
                    rightTab === "portrait"
                      ? "bg-white text-black font-bold shadow-sm"
                      : "bg-transparent text-[#8B8B93] hover:text-white"
                  )}
                >
                  <User className="w-3 h-3" />
                  <span>Portrait</span>
                </button>
                <button
                  onClick={() => setRightTab("code")}
                  className={cn(
                    "px-3 py-1 font-semibold uppercase tracking-wider rounded transition-colors cursor-pointer flex items-center gap-1.5",
                    rightTab === "code"
                      ? "bg-white text-black font-bold shadow-sm"
                      : "bg-transparent text-[#8B8B93] hover:text-white"
                  )}
                >
                  <Code2 className="w-3 h-3" />
                  <span>Architecture</span>
                </button>
              </div>
            </div>

            {/* Dynamic Artifact Panel */}
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
