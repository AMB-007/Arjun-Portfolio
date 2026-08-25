import React, { useState } from "react";
import { motion } from "framer-motion";
import { ArrowRight, FileText, Terminal, Box } from "lucide-react";
import { PERSONAL_INFO } from "@/data/portfolioData";
import { Button } from "@/components/ui/Button";
import { ProfilePortrait } from "@/components/ui/ProfilePortrait";
import { Hero3DScene } from "@/components/ui/Hero3DScene";
import { TechNetwork } from "@/components/ui/TechNetwork";
import { CodePanel } from "@/components/ui/CodePanel";
import { GithubIcon, LinkedinIcon } from "@/components/ui/Icons";
import { cn } from "@/utils/helpers";

export function Hero() {
  const [rightTab, setRightTab] = useState("portrait"); // "portrait" | "3d" | "network" | "code"

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
      transition: { duration: 0.4, ease: "easeOut" },
    },
  };

  return (
    <section
      id="hero"
      className="relative min-h-[90vh] flex items-center pt-28 pb-16 md:pt-36 md:pb-24 overflow-hidden"
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
            {/* Technical Eyebrow & Learning Status */}
            <motion.div variants={itemVariants} className="flex flex-wrap items-center gap-2.5">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded text-xs font-mono font-bold tracking-wider uppercase bg-[#ABD2FA]/30 text-[#1B2CC1] dark:bg-[#7692FF]/20 dark:text-[#ABD2FA] border border-[#C9E6F0] dark:border-[#50577A]">
                <Terminal className="w-3.5 h-3.5 text-[#1B2CC1] dark:text-[#7692FF]" />
                <span>FULL-STACK DEVELOPER / AI & DATA</span>
              </span>

              <a
                href="#learning-journey"
                className="inline-flex items-center gap-2 px-3 py-1 rounded text-xs font-mono text-[#C2410C] dark:text-[#F96E2A] bg-[#FFE5BF]/70 dark:bg-[#F96E2A]/15 border border-[#FFE5BF] dark:border-[#50577A] hover:border-[#F96E2A] transition-colors cursor-pointer"
              >
                <span className="w-2 h-2 rounded-full bg-[#F96E2A] animate-pulse" />
                <span>CURRENTLY LEARNING: Data Science · ML · AI · Power BI</span>
              </a>
            </motion.div>

            {/* Display Heading & Headline */}
            <motion.div variants={itemVariants} className="space-y-3">
              <h1 className="text-4xl sm:text-6xl md:text-7xl lg:text-7.5xl font-extrabold tracking-tight text-[#091540] dark:text-[#FFFAF3] font-sans leading-[1.02]">
                {PERSONAL_INFO.name}
              </h1>
              <p className="text-lg sm:text-xl md:text-2xl font-medium text-[#1B2CC1] dark:text-[#7692FF] font-sans leading-snug">
                {PERSONAL_INFO.headline}
              </p>
            </motion.div>

            {/* Supporting Bio */}
            <motion.p
              variants={itemVariants}
              className="text-base sm:text-lg text-[#404258] dark:text-[#C9E6F0] leading-relaxed max-w-2xl font-sans"
            >
              {PERSONAL_INFO.supportingParagraph}
            </motion.p>

            {/* Compact CTA Row */}
            <motion.div variants={itemVariants} className="flex flex-wrap items-center gap-3 pt-2 font-mono">
              <Button
                href="#projects"
                variant="primary"
                size="md"
                icon={<ArrowRight className="w-4 h-4" />}
              >
                View Selected Work
              </Button>

              <Button
                href={PERSONAL_INFO.github}
                target="_blank"
                variant="outline"
                size="md"
                icon={<GithubIcon className="w-3.5 h-3.5" />}
                iconPosition="left"
              >
                GitHub
              </Button>

              <Button
                href={PERSONAL_INFO.linkedin}
                target="_blank"
                variant="outline"
                size="md"
                icon={<LinkedinIcon className="w-3.5 h-3.5" />}
                iconPosition="left"
              >
                LinkedIn
              </Button>

              <Button
                href={PERSONAL_INFO.resumePath}
                target="_blank"
                variant="secondary"
                size="md"
                icon={<FileText className="w-3.5 h-3.5" />}
                iconPosition="left"
              >
                Resume
              </Button>
            </motion.div>

            {/* Verified Meta Footnote */}
            <motion.div
              variants={itemVariants}
              className="pt-4 border-t border-[#C9E6F0] dark:border-[#404258] flex flex-wrap items-center gap-4 text-xs font-mono text-[#6B728E] dark:text-[#ABD2FA]"
            >
              <span>Toc H Institute (B.Tech CSE 2022–2026)</span>
              <span>•</span>
              <span className="text-[#091540] dark:text-[#FFFAF3] font-bold">
                github.com/AMB-007
              </span>
            </motion.div>
          </motion.div>

          {/* RIGHT COLUMN: Portrait + 3D System Visual */}
          <motion.div
            initial={{ opacity: 0, scale: 0.97 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.15 }}
            className="lg:col-span-5 w-full flex flex-col space-y-3"
          >
            {/* View Switcher Controls */}
            <div className="flex items-center justify-between pb-1 font-mono text-xs">
              <span className="text-[#6B728E] dark:text-[#ABD2FA] text-[11px] uppercase font-bold tracking-wider">
                // SYSTEM VISUALIZER:
              </span>
              <div className="flex items-center gap-1 text-[11px]">
                <button
                  onClick={() => setRightTab("portrait")}
                  className={cn(
                    "px-2.5 py-1 rounded transition-colors cursor-pointer",
                    rightTab === "portrait"
                      ? "bg-[#091540] text-white dark:bg-[#FFFAF3] dark:text-[#091540] font-bold"
                      : "text-[#404258] hover:text-[#091540] dark:text-[#C9E6F0] dark:hover:text-white"
                  )}
                >
                  Portrait
                </button>
                <button
                  onClick={() => setRightTab("3d")}
                  className={cn(
                    "px-2.5 py-1 rounded transition-colors cursor-pointer flex items-center gap-1",
                    rightTab === "3d"
                      ? "bg-[#091540] text-white dark:bg-[#FFFAF3] dark:text-[#091540] font-bold"
                      : "text-[#404258] hover:text-[#091540] dark:text-[#C9E6F0] dark:hover:text-white"
                  )}
                >
                  <Box className="w-3 h-3" />
                  <span>3D Scene</span>
                </button>
                <button
                  onClick={() => setRightTab("network")}
                  className={cn(
                    "px-2.5 py-1 rounded transition-colors cursor-pointer",
                    rightTab === "network"
                      ? "bg-[#091540] text-white dark:bg-[#FFFAF3] dark:text-[#091540] font-bold"
                      : "text-[#404258] hover:text-[#091540] dark:text-[#C9E6F0] dark:hover:text-white"
                  )}
                >
                  Network
                </button>
                <button
                  onClick={() => setRightTab("code")}
                  className={cn(
                    "px-2.5 py-1 rounded transition-colors cursor-pointer",
                    rightTab === "code"
                      ? "bg-[#091540] text-white dark:bg-[#FFFAF3] dark:text-[#091540] font-bold"
                      : "text-[#404258] hover:text-[#091540] dark:text-[#C9E6F0] dark:hover:text-white"
                  )}
                >
                  Code
                </button>
              </div>
            </div>

            {/* Dynamic View Display */}
            {rightTab === "portrait" ? (
              <div className="w-full max-w-[380px] sm:max-w-[420px] mx-auto">
                <ProfilePortrait />
              </div>
            ) : rightTab === "3d" ? (
              <Hero3DScene />
            ) : rightTab === "network" ? (
              <TechNetwork />
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
