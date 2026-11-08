import React, { useState } from "react";
import { User } from "lucide-react";

const CANDIDATE_IMAGES = [
  "/images/arjun-profile.jpeg",
  "/images/arjun-profile.jpg",
  "/images/Profile.jpeg",
  "/images/Profile.jpg",
];

export function ProfilePortrait({ className = "" }) {
  const [candidateIndex, setCandidateIndex] = useState(0);
  const [imageError, setImageError] = useState(false);

  const handleImageError = () => {
    if (candidateIndex < CANDIDATE_IMAGES.length - 1) {
      setCandidateIndex((prev) => prev + 1);
    } else {
      setImageError(true);
    }
  };

  const currentSrc = CANDIDATE_IMAGES[candidateIndex];

  return (
    <div className={`relative flex items-center justify-center ${className}`}>
      {/* Refined Architectural Frame: Soft Rounded Arch with Hairline Border */}
      <div className="relative p-1.5 sm:p-2 rounded-2xl bg-[var(--surface)] border border-[var(--border)] shadow-xl transition-all duration-300">
        <div className="relative w-48 h-56 sm:w-60 sm:h-72 md:w-64 md:h-80 rounded-xl overflow-hidden bg-[var(--surface-subtle)] border border-[var(--border)]">
          {!imageError ? (
            <img
              src={currentSrc}
              alt="Arjun M Babu — Data Analyst & Machine Learning Engineer"
              width={256}
              height={320}
              loading="eager"
              decoding="async"
              onError={handleImageError}
              className="w-full h-full object-cover object-top filter contrast-[1.02] brightness-[1.01]"
            />
          ) : (
            <div className="w-full h-full flex flex-col items-center justify-center text-[var(--text-muted)] bg-[var(--surface-subtle)]">
              <User className="w-16 h-16 text-[var(--text-muted)] mb-2" />
              <span className="text-xs font-mono text-[var(--text-primary)]">Arjun M Babu</span>
            </div>
          )}

          {/* Subtle Corner Caption Tag */}
          <div className="absolute bottom-2 left-2 right-2 px-2.5 py-1.5 rounded-lg bg-[var(--surface)]/90 backdrop-blur-md border border-[var(--border)] flex items-center justify-between text-[11px] font-mono">
            <span className="flex items-center gap-1.5 text-[var(--text-primary)]">
              <span className="w-2 h-2 rounded-full bg-[var(--highlight-amber)]" />
              Luminar Technolab
            </span>
            <span className="text-[var(--text-muted)]">2026</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProfilePortrait;
