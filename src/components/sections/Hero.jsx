import React, { useState } from "react";
import { motion } from "framer-motion";
import { ArrowRight, Terminal, ExternalLink, Code2, User } from "lucide-react";
import { PERSONAL_INFO } from "@/data/portfolioData";
import { Button } from "@/components/ui/Button";
import { ProfilePortrait } from "@/components/ui/ProfilePortrait";
import { CodePanel } from "@/components/ui/CodePanel";
import { GithubIcon } from "@/components/ui/Icons";
import { FocusTextReveal } from "@/components/ui/FocusTextReveal";
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
    hidden: { opacity: 0, y: 12 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.35, ease: "easeOut" },
    },
  };

  return (
    <section
      id="hero"
      className="relative min-h-[88vh] flex items-center pt-28 pb-16 md:pt-36 md:pb-24 overflow-hidden border-b border-[#D4D4D4] dark:border-[#171717]"
    >
      <div className="editorial-container w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          {/* LEFT COLUMN: Editorial Typography & Actions */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="lg:col-span-7 flex flex-col space-y-6"
          >
            {/* Technical Eyebrow */}
            <motion.div variants={itemVariants} className="flex flex-wrap items-center gap-2.5">
              <span className="inline-flex items-center gap-1.5 px-2.5 py-1 text-xs font-mono font-bold tracking-wider uppercase bg-[#F5F5F5] dark:bg-[#171717] text-black dark:text-white border border-[#D4D4D4] dark:border-[#262626]">
                <Terminal className="w-3.5 h-3.5" />
                <span>COMPUTER SCIENCE ENGINEERING // DATA SCIENCE &amp; ML</span>
              </span>
            </motion.div>

            {/* Display Heading & Supporting Text with Interactive Viewfinder Focus Reveal */}
            <motion.div variants={itemVariants} className="space-y-4">
              <FocusTextReveal
                text="DATA SCIENCE & MACHINE LEARNING"
                as="h1"
                bracketSize="lg"
                className="text-4xl sm:text-6xl md:text-7xl lg:text-7.5xl font-extrabold tracking-tight text-black dark:text-white font-sans leading-[1.02] uppercase"
              />
              <FocusTextReveal
                text="I explore data, build machine learning solutions, and transform complex datasets into meaningful insights."
                as="p"
                bracketSize="sm"
                className="text-lg sm:text-xl md:text-2xl font-medium text-[#171717] dark:text-[#F5F5F5] font-sans leading-snug"
              />
            </motion.div>

            {/* Short Professional Introduction */}
            <motion.p
              variants={itemVariants}
              className="text-base sm:text-lg text-[#737373] dark:text-[#A3A3A3] leading-relaxed max-w-2xl font-sans"
            >
              I'm Arjun M Babu, a Computer Science Engineering student interested in Data Science, Machine Learning, Artificial Intelligence, and analytical problem-solving.
            </motion.p>

            {/* Primary & Secondary CTA Row */}
            <motion.div variants={itemVariants} className="flex flex-wrap items-center gap-3 pt-2 font-mono">
              {/* Primary CTA */}
              <Button
                href="#projects"
                variant="primary"
                size="md"
                icon={<ArrowRight className="w-4 h-4" />}
              >
                Explore Projects
              </Button>

              {/* Secondary CTA */}
              <Button
                href={PERSONAL_INFO.github}
                target="_blank"
                variant="secondary"
                size="md"
                icon={<GithubIcon className="w-3.5 h-3.5" />}
                iconPosition="left"
              >
                View GitHub
              </Button>

              {/* Optional Third CTA */}
              <Button
                href="#contact"
                variant="outline"
                size="md"
                icon={<ArrowRight className="w-3.5 h-3.5" />}
              >
                Contact Me
              </Button>
            </motion.div>

            {/* Verified Meta Footnote */}
            <motion.div
              variants={itemVariants}
              className="pt-6 border-t border-[#D4D4D4] dark:border-[#171717] flex flex-wrap items-center gap-4 text-xs font-mono text-[#737373] dark:text-[#737373]"
            >
              <span>Toc H Institute of Science and Technology (B.Tech CSE 2022–2026)</span>
              <span>•</span>
              <a
                href={PERSONAL_INFO.github}
                target="_blank"
                rel="noopener noreferrer"
                className="text-black dark:text-white hover:underline flex items-center gap-1 font-bold"
              >
                <span>github.com/AMB-007</span>
                <ExternalLink className="w-3 h-3" />
              </a>
            </motion.div>
          </motion.div>

          {/* RIGHT COLUMN: Profile Portrait & Verified Code Artifact */}
          <motion.div
            initial={{ opacity: 0, scale: 0.98 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.45, delay: 0.1 }}
            className="lg:col-span-5 w-full flex flex-col space-y-3"
          >
            {/* View Switcher Controls */}
            <div className="flex items-center justify-between pb-1 font-mono text-xs">
              <span className="text-[#737373] text-[11px] uppercase font-bold tracking-wider">
                // SYSTEM ARTIFACT:
              </span>
              <div className="flex items-center gap-1 text-[11px]">
                <button
                  onClick={() => setRightTab("portrait")}
                  className={cn(
                    "px-3 py-1 font-semibold uppercase tracking-wider transition-colors cursor-pointer border flex items-center gap-1",
                    rightTab === "portrait"
                      ? "bg-black text-white dark:bg-white dark:text-black border-black dark:border-white"
                      : "bg-transparent text-[#737373] hover:text-black dark:hover:text-white border-transparent"
                  )}
                >
                  <User className="w-3 h-3" />
                  <span>Portrait</span>
                </button>
                <button
                  onClick={() => setRightTab("code")}
                  className={cn(
                    "px-3 py-1 font-semibold uppercase tracking-wider transition-colors cursor-pointer border flex items-center gap-1",
                    rightTab === "code"
                      ? "bg-black text-white dark:bg-white dark:text-black border-black dark:border-white"
                      : "bg-transparent text-[#737373] hover:text-black dark:hover:text-white border-transparent"
                  )}
                >
                  <Code2 className="w-3 h-3" />
                  <span>ML Pipelines</span>
                </button>
              </div>
            </div>

            {/* Dynamic View Display */}
            {rightTab === "portrait" ? (
              <div className="w-full max-w-[380px] sm:max-w-[420px] mx-auto">
                <ProfilePortrait />
              </div>
            ) : (
              <CodePanel />
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
