import React, { useState } from "react";
import { User } from "lucide-react";

export function ProfilePortrait({ className = "" }) {
  const [imageError, setImageError] = useState(false);

  return (
    <div className={`relative flex items-center justify-center ${className}`}>
      {/* Clean Editorial Portrait Frame with Solid Hairline Borders (NO GRADIENTS) */}
      <div className="p-2 sm:p-2.5 rounded-2xl bg-[var(--surface)] border border-[var(--border)] shadow-md transition-all duration-300 hover:border-[var(--primary-accent)]">
        <div className="relative w-52 h-64 sm:w-64 sm:h-80 md:w-72 md:h-88 rounded-xl overflow-hidden bg-[var(--surface-subtle)] border border-[var(--border)]">
          {!imageError ? (
            <picture>
              <source srcSet="/images/arjun-profile.webp" type="image/webp" />
              <img
                src="/images/arjun-profile.jpeg"
                alt="Arjun M Babu — Full-Stack Developer | Data Science & Machine Learning"
                width={288}
                height={352}
                loading="eager"
                decoding="async"
                fetchPriority="high"
                onError={() => setImageError(true)}
                className="w-full h-full object-cover object-top transition-all duration-300"
              />
            </picture>
          ) : (
            <div className="w-full h-full flex flex-col items-center justify-center text-[var(--text-muted)] bg-[var(--surface-subtle)]">
              <User className="w-16 h-16 text-[var(--text-muted)] mb-2" />
              <span className="text-xs font-mono text-[var(--text-primary)]">Arjun M Babu</span>
            </div>
          )}

          {/* Clean Bottom Technical Detail Pill (NO face coverage) */}
          <div className="absolute bottom-2.5 left-2.5 right-2.5 px-3 py-1.5 rounded-lg bg-[var(--surface)] border border-[var(--border)] flex items-center justify-between text-[11px] font-mono z-20 shadow-xs">
            <span className="flex items-center gap-1.5 text-[var(--text-primary)] font-medium">
              <span className="w-2 h-2 rounded-full bg-[var(--data-accent)]" />
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
