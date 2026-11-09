import React, { useState } from "react";
import { User } from "lucide-react";
import { TiltCard } from "@/components/ui/TiltCard";

export function ProfilePortrait({ className = "" }) {
  const [imageError, setImageError] = useState(false);

  return (
    <div className={`relative flex items-center justify-center ${className}`}>
      {/* Refined Frame with Perspective Tilt & Glare */}
      <TiltCard
        maxTilt={5}
        glareOpacity={0.18}
        className="p-1.5 sm:p-2 rounded-2xl bg-[var(--surface)] border border-[var(--border-accent)] shadow-xl transition-all duration-300 notebook-card"
      >
        <div className="relative w-48 h-56 sm:w-60 sm:h-72 md:w-64 md:h-80 rounded-xl overflow-hidden bg-[var(--surface-subtle)] border border-[var(--border-accent)]">
          {!imageError ? (
            <picture>
              <source srcSet="/images/arjun-profile.webp" type="image/webp" />
              <img
                src="/images/arjun-profile.jpeg"
                alt="Arjun M Babu — Data Analyst & Machine Learning Engineer"
                width={256}
                height={320}
                loading="eager"
                decoding="async"
                fetchPriority="high"
                onError={() => setImageError(true)}
                className="w-full h-full object-cover object-top transition-all duration-500"
                style={{
                  filter: "saturate(0.72) contrast(1.08)",
                }}
              />
            </picture>
          ) : (
            <div className="w-full h-full flex flex-col items-center justify-center text-[var(--text-muted)] bg-[var(--surface-subtle)]">
              <User className="w-16 h-16 text-[var(--text-muted)] mb-2" />
              <span className="text-xs font-mono text-[var(--text-primary)]">Arjun M Babu</span>
            </div>
          )}

          {/* Token-Driven Color Grading Overlay (soft-light + multiply) */}
          <div
            className="absolute inset-0 pointer-events-none mix-blend-soft-light transition-colors duration-500 z-10"
            style={{
              background: "linear-gradient(180deg, var(--accent) 0%, transparent 45%, var(--bg) 100%)",
              opacity: 0.35,
            }}
            aria-hidden="true"
          />
          <div
            className="absolute inset-0 pointer-events-none mix-blend-multiply transition-colors duration-500 z-10"
            style={{
              backgroundColor: "var(--portrait-overlay)",
            }}
            aria-hidden="true"
          />

          {/* 1px Inner Highlight */}
          <div
            className="absolute inset-0 pointer-events-none rounded-[inherit] z-20"
            style={{ boxShadow: "var(--card-inner-highlight)" }}
            aria-hidden="true"
          />

          {/* Subtle Corner Caption Tag */}
          <div className="absolute bottom-2.5 left-2.5 right-2.5 px-3 py-1.5 rounded-lg bg-[var(--surface)]/90 backdrop-blur-md border border-[var(--border)] flex items-center justify-between text-[11px] font-mono z-30 shadow-xs">
            <span className="flex items-center gap-1.5 text-[var(--text-primary)] font-medium">
              <span className="w-2 h-2 rounded-full bg-[var(--accent)]" />
              Luminar Technolab
            </span>
            <span className="text-[var(--text-muted)]">2026</span>
          </div>
        </div>
      </TiltCard>
    </div>
  );
}

export default ProfilePortrait;
