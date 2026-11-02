import React, { useState, useRef } from "react";
import { Camera } from "lucide-react";
import { cn } from "@/utils/helpers";

const CANDIDATE_IMAGES = [
  "/images/arjun-profile.jpeg",
  "/images/arjun-profile.jpg",
  "/images/Profile.jpeg",
  "/images/Profile.jpg",
];

/**
 * ProfilePortrait Component
 * 3D Tilt Card with perspective, preserve-3d, specular glare following pointer,
 * layered depth shadow, and champagne gold glass framing.
 */
export function ProfilePortrait({ className = "" }) {
  const cardRef = useRef(null);
  const [candidateIndex, setCandidateIndex] = useState(0);
  const [imageError, setImageError] = useState(false);
  const [tilt, setTilt] = useState({ x: 0, y: 0, glareX: 50, glareY: 50, opacity: 0 });

  const handleImageError = () => {
    if (candidateIndex < CANDIDATE_IMAGES.length - 1) {
      setCandidateIndex((prev) => prev + 1);
    } else {
      setImageError(true);
    }
  };

  const handleMouseMove = (e) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width;
    const y = (e.clientY - rect.top) / rect.height;

    const rotX = (0.5 - y) * 14;
    const rotY = (x - 0.5) * 14;

    setTilt({
      x: rotX,
      y: rotY,
      glareX: x * 100,
      glareY: y * 100,
      opacity: 0.28,
    });
  };

  const handleMouseLeave = () => {
    setTilt({ x: 0, y: 0, glareX: 50, glareY: 50, opacity: 0 });
  };

  const currentSrc = CANDIDATE_IMAGES[candidateIndex];

  return (
    <div
      style={{ perspective: "1000px" }}
      className={cn("w-full max-w-[420px] mx-auto preserve-3d", className)}
    >
      <div
        ref={cardRef}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        style={{
          transform: `rotateX(${tilt.x}deg) rotateY(${tilt.y}deg)`,
          transition: tilt.opacity === 0 ? "transform 0.5s ease-out" : "none",
        }}
        className={cn(
          "relative rounded-2xl overflow-hidden border border-[#D6B979]/25 bg-[#0D0F14]/90 backdrop-blur-xl select-none preserve-3d",
          "shadow-[0_24px_64px_rgba(0,0,0,0.8),0_0_32px_rgba(214,185,121,0.12)] transition-shadow duration-300 group"
        )}
      >
        {/* Specular Glare Overlay following cursor */}
        <div
          className="absolute inset-0 pointer-events-none z-30 transition-opacity duration-300 rounded-2xl"
          style={{
            opacity: tilt.opacity,
            background: `radial-gradient(circle 240px at ${tilt.glareX}% ${tilt.glareY}%, rgba(240, 221, 168, 0.45), transparent 80%)`,
          }}
          aria-hidden="true"
        />

        {/* Viewfinder Corner Accents (Champagne Gold) */}
        <div className="absolute top-3 left-3 w-3.5 h-3.5 border-t border-l border-[#D6B979] z-20 pointer-events-none" />
        <div className="absolute top-3 right-3 w-3.5 h-3.5 border-t border-r border-[#D6B979] z-20 pointer-events-none" />
        <div className="absolute bottom-3 left-3 w-3.5 h-3.5 border-b border-l border-[#D6B979] z-20 pointer-events-none" />
        <div className="absolute bottom-3 right-3 w-3.5 h-3.5 border-b border-r border-[#D6B979] z-20 pointer-events-none" />

        {/* Portrait Image */}
        {!imageError ? (
          <div className="relative w-full aspect-[4/5] overflow-hidden bg-[#07080C]">
            <img
              src={currentSrc}
              alt="Arjun M Babu - Data Analyst & Machine Learning Engineer"
              width={400}
              height={500}
              loading="eager"
              decoding="async"
              onError={handleImageError}
              className="w-full h-full object-cover object-center grayscale contrast-110 brightness-95 transition-all duration-700 ease-out group-hover:scale-[1.03] group-hover:grayscale-0 group-hover:brightness-100"
            />
            {/* Vignette Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-[#07080C] via-transparent to-transparent opacity-80 pointer-events-none" />
          </div>
        ) : (
          <div className="w-full aspect-[4/5] bg-[#07080C] flex flex-col items-center justify-center p-8 text-center space-y-4">
            <div className="w-16 h-16 rounded-full bg-[#12151C] border border-white/10 flex items-center justify-center text-white">
              <Camera className="w-7 h-7 text-[#D6B979]" />
            </div>
            <div className="space-y-1">
              <h4 className="text-base font-bold text-[#F3EFE6] font-sans uppercase">
                Profile Photo
              </h4>
              <p className="text-xs font-mono text-[#A8A59C]">
                Arjun M Babu
              </p>
            </div>
          </div>
        )}

        {/* Floating Identity Strip */}
        <div className="absolute bottom-3.5 left-3.5 right-3.5 p-3 rounded-xl bg-[#0D0F14]/90 backdrop-blur-md border border-white/[0.08] flex items-center justify-between text-xs font-mono z-20">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#D6B979] shadow-[0_0_8px_#D6B979]" />
            <span className="font-bold text-[#F3EFE6]">ARJUN M BABU</span>
          </div>
          <span className="text-[10px] text-[#A8A59C] uppercase font-semibold">
            DATA &amp; ML
          </span>
        </div>
      </div>
    </div>
  );
}

export default ProfilePortrait;
