import React, { useState } from "react";
import { Camera } from "lucide-react";
import { cn } from "@/utils/helpers";

const CANDIDATE_IMAGES = [
  "/images/arjun-profile.jpeg",
  "/images/arjun-profile.jpg",
  "/images/Profile.jpeg",
  "/images/Profile.jpg",
  "/images/profile.jpeg",
  "/images/profile.jpg",
];

export function ProfilePortrait({ className = "" }) {
  const [candidateIndex, setCandidateIndex] = useState(0);
  const [imageError, setImageError] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  const handleImageError = () => {
    if (candidateIndex < CANDIDATE_IMAGES.length - 1) {
      setCandidateIndex((prev) => prev + 1);
    } else {
      setImageError(true);
    }
  };

  const currentSrc = CANDIDATE_IMAGES[candidateIndex];

  return (
    <div
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className={cn(
        "relative overflow-hidden border border-[#D4D4D4] dark:border-[#171717] bg-white dark:bg-[#0A0A0A] transition-all duration-300 group select-none",
        isHovered ? "border-black dark:border-white -translate-y-1" : "",
        className
      )}
    >
      {/* Real Portrait Image or Clean Fallback Slot */}
      {!imageError ? (
        <div className="relative w-full aspect-[4/5] overflow-hidden bg-[#F5F5F5] dark:bg-[#0A0A0A]">
          <img
            src={currentSrc}
            alt="Arjun M Babu, Computer Science Engineering - Data Science"
            onError={handleImageError}
            className="w-full h-full object-cover object-center grayscale contrast-105 transition-transform duration-500 ease-out group-hover:scale-[1.02]"
          />
        </div>
      ) : (
        /* Clean Professional Monochrome Fallback Slot */
        <div className="w-full aspect-[4/5] bg-[#F5F5F5] dark:bg-[#0A0A0A] flex flex-col items-center justify-center p-8 text-center space-y-4">
          <div className="w-16 h-16 bg-white dark:bg-[#171717] border border-[#D4D4D4] dark:border-[#262626] flex items-center justify-center text-black dark:text-white">
            <Camera className="w-7 h-7" />
          </div>
          <div className="space-y-1">
            <h4 className="text-base font-bold text-black dark:text-white font-sans uppercase">
              Profile Photo
            </h4>
            <p className="text-xs font-mono text-[#737373] dark:text-[#A3A3A3] font-semibold">
              Arjun M Babu
            </p>
          </div>
          <p className="text-[11px] font-mono text-[#737373] dark:text-[#A3A3A3] max-w-[200px] leading-relaxed pt-2 border-t border-[#D4D4D4] dark:border-[#262626]">
            Place photo at public/images/arjun-profile.jpeg
          </p>
        </div>
      )}

      {/* Floating Personal Metadata Tag */}
      <div className="absolute bottom-3 left-3 right-3 p-3 bg-white/95 dark:bg-black/95 backdrop-blur-xs border border-[#D4D4D4] dark:border-[#262626] flex items-center justify-between text-xs font-mono">
        <div className="flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-black dark:bg-white animate-pulse" />
          <span className="font-bold text-black dark:text-white text-[11px] tracking-wider uppercase">
            ARJUN M BABU
          </span>
        </div>
        <span className="text-[10px] font-bold text-[#737373] dark:text-[#A3A3A3] uppercase tracking-wider">
          DATA SCIENCE &amp; ML
        </span>
      </div>
    </div>
  );
}

export default ProfilePortrait;
