import React, { useState, useEffect, useRef } from "react";
import {
  Search,
  ArrowRight,
  Copy,
  Check,
  FileText,
  Sun,
  Moon,
  ExternalLink,
  X,
  Palette,
  Box,
  CornerDownLeft,
} from "lucide-react";
import { PERSONAL_INFO } from "@/data/portfolioData";
import { copyToClipboard } from "@/utils/helpers";
import { ACCENT_PRESETS } from "@/config/theme.config";

export function CommandMenu({
  isOpen,
  onClose,
  isDark,
  onToggleTheme,
  accent = "sapphire",
  onSetAccent,
  is3DEnabled = true,
  onToggle3D,
  enable3DFlag = true,
}) {
  const [query, setQuery] = useState("");
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [copied, setCopied] = useState(false);
  const inputRef = useRef(null);

  const actions = [
    // Navigation
    {
      id: "work",
      label: "Jump to Selected Work",
      group: "Navigation",
      perform: () => {
        window.location.hash = "#projects";
        onClose();
      },
    },
    {
      id: "skills",
      label: "Jump to Toolbox Index",
      group: "Navigation",
      perform: () => {
        window.location.hash = "#skills";
        onClose();
      },
    },
    {
      id: "demo",
      label: "Jump to Interactive ML Simulator",
      group: "Navigation",
      perform: () => {
        window.location.hash = "#interactive-demo";
        onClose();
      },
    },
    {
      id: "experience",
      label: "Jump to Background & Journey",
      group: "Navigation",
      perform: () => {
        window.location.hash = "#experience";
        onClose();
      },
    },
    {
      id: "contact",
      label: "Jump to Contact Form",
      group: "Navigation",
      perform: () => {
        window.location.hash = "#contact";
        onClose();
      },
    },

    // Theme & 3D Preferences
    {
      id: "theme",
      label: `Switch to ${isDark ? "Light ('Warm Paper')" : "Dark ('Midnight Graphite')"} theme`,
      group: "Appearance",
      icon: isDark ? Sun : Moon,
      perform: () => {
        onToggleTheme();
        onClose();
      },
    },
    ...(enable3DFlag
      ? [
          {
            id: "3d-toggle",
            label: `3D Data Lattice: ${is3DEnabled ? "Turn OFF (Save GPU / Battery)" : "Turn ON (WebGL Animation)"}`,
            group: "Appearance",
            icon: Box,
            perform: () => {
              if (onToggle3D) onToggle3D();
              onClose();
            },
          },
        ]
      : []),

    // Accent Presets
    ...Object.entries(ACCENT_PRESETS).map(([key, item]) => ({
      id: `accent-${key}`,
      label: `Set Accent Color: ${item.name} ${accent === key ? "(Active)" : ""}`,
      group: "Color Presets",
      icon: Palette,
      perform: () => {
        if (onSetAccent) onSetAccent(key);
        onClose();
      },
    })),

    // Quick Actions
    {
      id: "email",
      label: "Copy Email (arjunmbabu.ds@gmail.com)",
      group: "Actions",
      icon: Copy,
      perform: () => {
        copyToClipboard(PERSONAL_INFO.email);
        setCopied(true);
        setTimeout(() => {
          setCopied(false);
          onClose();
        }, 800);
      },
    },
    {
      id: "resume",
      label: "Open Printable Resume (PDF / Print)",
      group: "Actions",
      icon: FileText,
      perform: () => {
        window.open(PERSONAL_INFO.resumePath, "_blank");
        onClose();
      },
    },

    // External Profiles
    {
      id: "github",
      label: "Open GitHub Profile (@AMB-007)",
      group: "External Links",
      icon: ExternalLink,
      perform: () => {
        window.open(PERSONAL_INFO.github, "_blank");
        onClose();
      },
    },
    {
      id: "linkedin",
      label: "Open LinkedIn Profile (arjun-m-babu)",
      group: "External Links",
      icon: ExternalLink,
      perform: () => {
        window.open(PERSONAL_INFO.linkedin, "_blank");
        onClose();
      },
    },
  ];

  const filtered = actions.filter(
    (a) =>
      a.label.toLowerCase().includes(query.toLowerCase()) ||
      a.group.toLowerCase().includes(query.toLowerCase())
  );

  useEffect(() => {
    if (isOpen) {
      setQuery("");
      setSelectedIndex(0);
      setTimeout(() => inputRef.current?.focus(), 50);
    }
  }, [isOpen]);

  useEffect(() => {
    setSelectedIndex(0);
  }, [query]);

  // Close on Escape
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "Escape" && isOpen) {
        onClose();
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isOpen, onClose]);

  const handleKeyDown = (e) => {
    if (e.key === "ArrowDown") {
      e.preventDefault();
      setSelectedIndex((prev) => (prev + 1) % (filtered.length || 1));
    } else if (e.key === "ArrowUp") {
      e.preventDefault();
      setSelectedIndex((prev) => (prev - 1 + filtered.length) % (filtered.length || 1));
    } else if (e.key === "Enter" && filtered[selectedIndex]) {
      e.preventDefault();
      filtered[selectedIndex].perform();
    }
  };

  if (!isOpen) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label="Command Menu"
      className="fixed inset-0 z-50 flex items-start justify-center pt-20 sm:pt-28 px-4 bg-black/60 backdrop-blur-sm animate-editorial-fade"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-xl rounded-xl border border-[var(--border)] bg-[var(--surface)] text-[var(--text-primary)] shadow-2xl overflow-hidden font-sans"
        onClick={(e) => e.stopPropagation()}
        style={{
          boxShadow: "var(--shadow-soft), var(--card-inner-highlight)",
        }}
      >
        {/* Search Input Bar */}
        <div className="flex items-center px-4 border-b border-[var(--border)]">
          <Search className="w-4 h-4 text-[var(--text-muted)] shrink-0 mr-3" />
          <input
            ref={inputRef}
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            onKeyDown={handleKeyDown}
            placeholder="Type a command, section, or theme preset..."
            className="w-full py-4 text-sm bg-transparent outline-none text-[var(--text-primary)] placeholder-[var(--text-muted)]"
          />
          <button
            onClick={onClose}
            aria-label="Close command menu"
            className="p-1 text-[var(--text-muted)] hover:text-[var(--text-primary)]"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Results List */}
        <div className="max-h-[380px] overflow-y-auto p-2 divide-y divide-[var(--border)]">
          {filtered.length === 0 ? (
            <div className="py-8 text-center text-xs font-mono text-[var(--text-muted)]">
              No matching commands found.
            </div>
          ) : (
            filtered.map((item, index) => {
              const isSelected = index === selectedIndex;
              const Icon = item.icon || ArrowRight;

              return (
                <button
                  key={item.id}
                  onClick={item.perform}
                  onMouseEnter={() => setSelectedIndex(index)}
                  className={`w-full flex items-center justify-between px-3.5 py-2.5 rounded-lg text-left text-xs transition-colors cursor-pointer ${
                    isSelected
                      ? "bg-[var(--accent)] text-[var(--accent-contrast)]"
                      : "text-[var(--text-primary)] hover:bg-[var(--surface-subtle)]"
                  }`}
                >
                  <div className="flex items-center gap-2.5 min-w-0">
                    <span
                      className={`text-[10px] font-mono uppercase tracking-wider px-1.5 py-0.5 rounded border ${
                        isSelected
                          ? "border-[var(--accent-contrast)]/30 text-[var(--accent-contrast)]"
                          : "border-[var(--border)] text-[var(--text-muted)]"
                      }`}
                    >
                      {item.group}
                    </span>
                    <span className="font-medium truncate">{item.label}</span>
                  </div>

                  <div className="flex items-center gap-2 shrink-0 ml-2">
                    {copied && item.id === "email" ? (
                      <Check className="w-3.5 h-3.5 text-teal-400" />
                    ) : (
                      <Icon className="w-3.5 h-3.5 opacity-60" />
                    )}
                    {isSelected && <CornerDownLeft className="w-3 h-3 opacity-80" />}
                  </div>
                </button>
              );
            })
          )}
        </div>

        {/* Footer Hint Bar */}
        <div className="flex items-center justify-between px-4 py-2.5 border-t border-[var(--border)] bg-[var(--surface-subtle)] text-[11px] font-mono text-[var(--text-muted)]">
          <span>Navigate with &uarr;&darr; &bull; Enter to select</span>
          <span>Esc to close</span>
        </div>
      </div>
    </div>
  );
}

export default CommandMenu;
