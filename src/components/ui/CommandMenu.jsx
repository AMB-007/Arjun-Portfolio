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
import { PALETTES } from "@/config/theme.config";

export function CommandMenu({
  isOpen,
  onClose,
  isDark,
  onToggleTheme,
  palette = "navy",
  onSetPalette,
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
      id: "experience",
      label: "Jump to Career Timeline & Education",
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
      label: `Switch to ${isDark ? "Light ('Warm Paper')" : "Dark ('Ink Navy')"} mode`,
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
            label: `3D Data Lattice: ${is3DEnabled ? "Turn OFF (Save GPU / Battery)" : "Turn ON (Volumetric 3D)"}`,
            group: "Appearance",
            icon: Box,
            perform: () => {
              if (onToggle3D) onToggle3D();
              onClose();
            },
          },
        ]
      : []),

    // Palette Family Presets
    ...Object.entries(PALETTES).map(([key, item]) => ({
      id: `palette-${key}`,
      label: `Set Palette: ${item.name} ${palette === key ? "(Active)" : ""}`,
      group: "Color Palettes",
      icon: Palette,
      perform: () => {
        if (onSetPalette) onSetPalette(key);
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
      aria-label="Command Menu Palette"
      className="fixed inset-0 z-50 flex items-start justify-center pt-20 px-4 bg-black/60 backdrop-blur-sm animate-editorial-fade"
      onClick={onClose}
    >
      <div
        className="w-full max-w-xl rounded-2xl bg-[var(--surface)] border border-[var(--border)] shadow-2xl overflow-hidden notebook-card"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Search Bar Input */}
        <div className="flex items-center gap-3 px-4 py-3.5 border-b border-[var(--border)]">
          <Search className="w-4 h-4 text-[var(--accent)] shrink-0" />
          <input
            ref={inputRef}
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Type a command, navigate, or choose a palette..."
            className="flex-1 bg-transparent text-sm font-sans text-[var(--text-primary)] placeholder-[var(--text-muted)] focus:outline-none"
            aria-label="Search commands"
          />
          <button
            onClick={onClose}
            aria-label="Close command palette"
            className="p-1 rounded-md text-[var(--text-muted)] hover:text-[var(--text-primary)] hover:bg-[var(--surface-subtle)]"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Action Items List */}
        <div className="max-h-80 overflow-y-auto p-2 divide-y divide-transparent">
          {filteredActions.length === 0 ? (
            <div className="p-8 text-center text-xs font-mono text-[var(--text-muted)]">
              No actions matching "{query}"
            </div>
          ) : (
            filteredActions.map((item, idx) => {
              const isSelected = idx === selectedIndex;
              const Icon = item.icon || ArrowRight;

              return (
                <button
                  key={item.id}
                  onClick={item.perform}
                  onMouseEnter={() => setSelectedIndex(idx)}
                  className={`w-full flex items-center justify-between px-3.5 py-2.5 rounded-lg text-xs font-mono text-left transition-colors cursor-pointer ${
                    isSelected
                      ? "bg-[var(--accent)] text-[var(--accent-contrast)]"
                      : "text-[var(--text-primary)] hover:bg-[var(--surface-subtle)]"
                  }`}
                >
                  <div className="flex items-center gap-3 min-w-0">
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
                      <Check className="w-3.5 h-3.5 text-[var(--positive)]" />
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
        <div className="px-4 py-2 bg-[var(--surface-subtle)] border-t border-[var(--border)] flex items-center justify-between text-[11px] font-mono text-[var(--text-muted)]">
          <div className="flex items-center gap-3">
            <span>&uarr;&darr; Navigate</span>
            <span>&crarr; Select</span>
            <span>ESC Close</span>
          </div>
          <span>Analyst's Notebook</span>
        </div>
      </div>
    </div>
  );
}

export default CommandMenu;
