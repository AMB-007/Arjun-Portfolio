import React, { useState, useEffect, useRef } from "react";
import {
  Search,
  ArrowRight,
  FileText,
  Copy,
  ExternalLink,
  Sun,
  Moon,
  Box,
  Layers,
  Cpu,
  GraduationCap,
  BookOpen,
} from "lucide-react";
import { PERSONAL_INFO } from "@/data/portfolioData";
import { copyToClipboard } from "@/utils/helpers";

export function CommandMenu({
  isOpen,
  onClose,
  isDark,
  onToggleTheme,
  is3DEnabled,
  onToggle3D,
  enable3DFlag,
}) {
  const [query, setQuery] = useState("");
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [copied, setCopied] = useState(false);
  const inputRef = useRef(null);

  const actions = [
    // Navigation
    {
      id: "hero",
      label: "Jump to Overview (Top)",
      group: "Navigation",
      perform: () => {
        window.location.hash = "#hero";
        onClose();
      },
    },
    {
      id: "about",
      label: "Jump to About Section",
      group: "Navigation",
      perform: () => {
        window.location.hash = "#about";
        onClose();
      },
    },
    {
      id: "capabilities",
      label: "Jump to Capabilities",
      group: "Navigation",
      perform: () => {
        window.location.hash = "#capabilities";
        onClose();
      },
    },
    {
      id: "skills",
      label: "Jump to Technical Skills Matrix",
      group: "Navigation",
      perform: () => {
        window.location.hash = "#skills";
        onClose();
      },
    },
    {
      id: "projects",
      label: "Jump to Selected Engineering Projects",
      group: "Navigation",
      perform: () => {
        window.location.hash = "#projects";
        onClose();
      },
    },
    {
      id: "learning",
      label: "Jump to Currently Learning Roadmap",
      group: "Navigation",
      perform: () => {
        window.location.hash = "#learning";
        onClose();
      },
    },
    {
      id: "education",
      label: "Jump to Education & Certifications",
      group: "Navigation",
      perform: () => {
        window.location.hash = "#education";
        onClose();
      },
    },
    {
      id: "contact",
      label: "Jump to Contact Section",
      group: "Navigation",
      perform: () => {
        window.location.hash = "#contact";
        onClose();
      },
    },

    // Theme & 3D Preferences
    {
      id: "theme",
      label: `Switch to ${isDark ? "Light ('Warm Paper')" : "Dark ('Layered Navy')"} mode`,
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
            label: `3D Technology Network: ${is3DEnabled ? "Turn OFF" : "Turn ON"}`,
            group: "Appearance",
            icon: Box,
            perform: () => {
              if (onToggle3D) onToggle3D();
              onClose();
            },
          },
        ]
      : []),

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

  const filteredActions = actions.filter((action) =>
    action.label.toLowerCase().includes(query.toLowerCase()) ||
    action.group.toLowerCase().includes(query.toLowerCase())
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

  // Keyboard navigation
  useEffect(() => {
    if (!isOpen) return;

    const handleKeyDown = (e) => {
      if (e.key === "Escape") {
        e.preventDefault();
        onClose();
      } else if (e.key === "ArrowDown") {
        e.preventDefault();
        setSelectedIndex((prev) => (prev + 1) % Math.max(1, filteredActions.length));
      } else if (e.key === "ArrowUp") {
        e.preventDefault();
        setSelectedIndex((prev) => (prev - 1 + filteredActions.length) % Math.max(1, filteredActions.length));
      } else if (e.key === "Enter" && filteredActions[selectedIndex]) {
        e.preventDefault();
        filteredActions[selectedIndex].perform();
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isOpen, filteredActions, selectedIndex, onClose]);

  if (!isOpen) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label="Command Palette"
      className="fixed inset-0 z-50 flex items-start justify-center pt-20 px-4 bg-black/60 backdrop-blur-sm animate-editorial-fade"
      onClick={onClose}
    >
      <div
        className="w-full max-w-xl rounded-xl bg-[var(--surface)] border border-[var(--border)] shadow-2xl overflow-hidden font-sans text-left"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Search Input Bar */}
        <div className="flex items-center gap-3 px-4 py-3.5 border-b border-[var(--border)]">
          <Search className="w-4 h-4 text-[var(--text-muted)] shrink-0" />
          <input
            ref={inputRef}
            type="text"
            placeholder="Type a command or jump to section..."
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            className="w-full bg-transparent text-sm text-[var(--text-primary)] placeholder-[var(--text-muted)] focus:outline-none font-sans"
          />
          <kbd className="hidden sm:inline-block px-1.5 py-0.5 rounded text-[10px] font-mono text-[var(--text-muted)] bg-[var(--surface-subtle)] border border-[var(--border)]">
            ESC
          </kbd>
        </div>

        {/* Results List */}
        <div className="max-h-80 overflow-y-auto p-2 divide-y divide-[var(--border-subtle)]">
          {filteredActions.length > 0 ? (
            filteredActions.map((action, index) => {
              const isSelected = index === selectedIndex;
              const Icon = action.icon || ArrowRight;

              return (
                <button
                  key={action.id}
                  onClick={() => action.perform()}
                  onMouseEnter={() => setSelectedIndex(index)}
                  className={`w-full flex items-center justify-between px-3 py-2.5 rounded-lg text-left transition-colors cursor-pointer outline-none ${
                    isSelected
                      ? "bg-[var(--primary-accent)] text-[var(--accent-contrast)]"
                      : "text-[var(--text-primary)] hover:bg-[var(--surface-subtle)]"
                  }`}
                >
                  <div className="flex items-center gap-3 truncate">
                    <Icon className="w-4 h-4 shrink-0" />
                    <span className="text-xs sm:text-[13px] font-sans font-medium truncate">
                      {action.label}
                    </span>
                  </div>
                  <span
                    className={`text-[10px] font-mono uppercase tracking-wider shrink-0 px-1.5 py-0.5 rounded ${
                      isSelected
                        ? "bg-[var(--accent-contrast)]/15 text-[var(--accent-contrast)]"
                        : "text-[var(--text-muted)] bg-[var(--surface-subtle)]"
                    }`}
                  >
                    {action.group}
                  </span>
                </button>
              );
            })
          ) : (
            <div className="p-8 text-center text-xs font-mono text-[var(--text-muted)]">
              No matching commands found.
            </div>
          )}
        </div>

        {/* Footer Info */}
        <div className="px-4 py-2 border-t border-[var(--border)] bg-[var(--surface-subtle)] flex items-center justify-between text-[11px] font-mono text-[var(--text-muted)]">
          <span>Navigate with &uarr; &darr;</span>
          <span>Select with &crarr;</span>
        </div>
      </div>
    </div>
  );
}

export default CommandMenu;
