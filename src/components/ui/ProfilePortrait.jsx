import React, { useState } from "react";
import { Camera, Sparkles } from "lucide-react";
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
        "relative rounded-xl overflow-hidden border border-white/10 bg-[#0E0E12] transition-all duration-300 group select-none shadow-2xl",
        isHovered ? "border-[#C8F31D]/40 -translate-y-1 shadow-[0_12px_40px_rgba(200,243,29,0.08)]" : "",
        className
      )}
    >
      {/* Viewfinder Corner Accents */}
      <div className="absolute top-2 left-2 w-3 h-3 border-t-2 border-l-2 border-[#C8F31D]/70 z-20 pointer-events-none transition-transform duration-200 group-hover:scale-110" />
      <div className="absolute top-2 right-2 w-3 h-3 border-t-2 border-r-2 border-[#C8F31D]/70 z-20 pointer-events-none transition-transform duration-200 group-hover:scale-110" />
      <div className="absolute bottom-2 left-2 w-3 h-3 border-b-2 border-l-2 border-[#C8F31D]/70 z-20 pointer-events-none transition-transform duration-200 group-hover:scale-110" />
      <div className="absolute bottom-2 right-2 w-3 h-3 border-b-2 border-r-2 border-[#C8F31D]/70 z-20 pointer-events-none transition-transform duration-200 group-hover:scale-110" />

      {/* Real Portrait Image or Fallback */}
      {!imageError ? (
        <div className="relative w-full aspect-[4/5] overflow-hidden bg-[#0A0A0C]">
          <img
            src={currentSrc}
            alt="Arjun M Babu, MCA - Data Science & Machine Learning"
            onError={handleImageError}
            className="w-full h-full object-cover object-center grayscale contrast-110 brightness-95 transition-transform duration-700 ease-out group-hover:scale-[1.03] group-hover:grayscale-0 group-hover:brightness-100"
          />
          {/* Subtle Gradient Vignette Overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-[#060608] via-transparent to-transparent opacity-80 pointer-events-none" />
        </div>
      ) : (
        /* Clean Professional Monochrome Fallback Slot */
        <div className="w-full aspect-[4/5] bg-[#0A0A0C] flex flex-col items-center justify-center p-8 text-center space-y-4">
          <div className="w-16 h-16 rounded-full bg-[#141417] border border-white/10 flex items-center justify-center text-white">
            <Camera className="w-7 h-7 text-[#C8F31D]" />
          </div>
          <div className="space-y-1">
            <h4 className="text-base font-bold text-white font-sans uppercase">
              Profile Photo
            </h4>
            <p className="text-xs font-mono text-[#8B8B93] font-semibold">
              Arjun M Babu
            </p>
          </div>
          <p className="text-[11px] font-mono text-[#8B8B93] max-w-[200px] leading-relaxed pt-2 border-t border-white/10">
            public/images/arjun-profile.jpeg
          </p>
        </div>
      )}

      {/* Floating Personal Metadata Tag */}
      <div className="absolute bottom-3 left-3 right-3 p-3 rounded-lg bg-[#0E0E12]/90 backdrop-blur-md border border-white/10 flex items-center justify-between text-xs font-mono z-10">
        <div className="flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-[#C8F31D] animate-pulse" />
          <span className="font-bold text-white text-[11px] tracking-wider uppercase">
            ARJUN M BABU
          </span>
        </div>
        <span className="text-[10px] font-mono font-bold text-[#C8F31D] uppercase tracking-wider bg-[#C8F31D]/10 px-2 py-0.5 rounded border border-[#C8F31D]/20">
          B.TECH CSE • DATA SCIENCE
        </span>
      </div>
    </div>
  );
}

export default ProfilePortrait;
