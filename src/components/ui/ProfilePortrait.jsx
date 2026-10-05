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
        "relative rounded-[18px] overflow-hidden border border-[#C9E6F0] dark:border-[#404258] bg-white dark:bg-[#141F46] shadow-2xs transition-all duration-300 group select-none",
        isHovered ? "border-[#1B2CC1] dark:border-[#7692FF] -translate-y-1 shadow-md" : "",
        className
      )}
    >
      {/* Real Portrait Image or Clean Fallback Slot */}
      {!imageError ? (
        <div className="relative w-full aspect-[4/5] overflow-hidden bg-[#FBF8EF] dark:bg-[#101A3D]">
          <img
            src={currentSrc}
            alt="Arjun M Babu, Full-Stack Developer"
            onError={handleImageError}
            className="w-full h-full object-cover object-center transition-transform duration-500 ease-out group-hover:scale-[1.02]"
          />
        </div>
      ) : (
        /* Clean Professional Placeholder Slot */
        <div className="w-full aspect-[4/5] bg-[#FBF8EF] dark:bg-[#101A3D] flex flex-col items-center justify-center p-8 text-center space-y-4">
          <div className="w-16 h-16 rounded-2xl bg-white dark:bg-[#141F46] border border-[#C9E6F0] dark:border-[#404258] flex items-center justify-center text-[#1B2CC1] dark:text-[#7692FF] shadow-2xs">
            <Camera className="w-7 h-7" />
          </div>
          <div className="space-y-1">
            <h4 className="text-base font-bold text-[#091540] dark:text-[#FFFAF3] font-sans">
              Add profile photo
            </h4>
            <p className="text-xs font-mono text-[#1B2CC1] dark:text-[#7692FF] font-semibold">
              Arjun M Babu
            </p>
          </div>
          <p className="text-[11px] font-mono text-[#6B728E] dark:text-[#ABD2FA] max-w-[200px] leading-relaxed pt-2 border-t border-[#C9E6F0] dark:border-[#404258]">
            Place photo at public/images/arjun-profile.jpg
          </p>
        </div>
      )}

      {/* Floating Personal Metadata Tag */}
      <div className="absolute bottom-3 left-3 right-3 p-2.5 rounded-xl bg-white/95 dark:bg-[#101A3D]/95 backdrop-blur-xs border border-[#C9E6F0]/90 dark:border-[#404258]/90 flex items-center justify-between text-xs font-mono">
        <div className="flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-[#84B179] dark:bg-[#A2CB8B] animate-pulse" />
          <span className="font-bold text-[#091540] dark:text-[#FFFAF3] text-[11px]">
            ARJUN M BABU
          </span>
        </div>
        <span className="text-[10px] font-bold text-[#1B2CC1] dark:text-[#7692FF] uppercase">
          FULL-STACK
        </span>
      </div>
    </div>
  );
}

export default ProfilePortrait;
