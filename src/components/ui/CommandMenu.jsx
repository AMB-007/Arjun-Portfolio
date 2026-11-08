import React, { useState, useEffect, useRef } from "react";
import { Search, ArrowRight, Copy, Check, FileText, Sun, Moon, ExternalLink, X, CornerDownLeft } from "lucide-react";
import { PERSONAL_INFO } from "@/data/portfolioData";
import { copyToClipboard } from "@/utils/helpers";

export function CommandMenu({ isOpen, onClose, isDark, onToggleTheme }) {
  const [query, setQuery] = useState("");
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [copied, setCopied] = useState(false);
  const inputRef = useRef(null);

  const actions = [
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
    {
      id: "email",
      label: "Copy Email (arjunmbabu.ds@gmail.com)",
      group: "Actions",
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
      label: "Open Printable Resume",
      group: "Actions",
      perform: () => {
        window.open(PERSONAL_INFO.resumePath, "_blank");
        onClose();
      },
    },
    {
      id: "theme",
      label: `Switch to ${isDark ? "Light ('Paper & Ink')" : "Dark ('Graphite')"} theme`,
      group: "Preferences",
      perform: () => {
        onToggleTheme();
        onClose();
      },
    },
    {
      id: "github",
      label: "Open GitHub Profile (@AMB-007)",
      group: "External Links",
      perform: () => {
        window.open(PERSONAL_INFO.github, "_blank");
        onClose();
      },
    },
    {
      id: "linkedin",
      label: "Open LinkedIn Profile",
      group: "External Links",
      perform: () => {
        window.open(PERSONAL_INFO.linkedin, "_blank");
        onClose();
      },
    },
  ];

  const filtered = actions.filter((a) =>
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
    >
      <div className="relative w-full max-w-xl rounded-xl border border-[var(--border)] bg-[var(--surface)] text-[var(--text-primary)] shadow-2xl overflow-hidden font-sans">
        {/* Search Input Bar */}
        <div className="flex items-center px-4 border-b border-[var(--border)]">
          <Search className="w-4 h-4 text-[var(--text-muted)] shrink-0 mr-3" />
          <input
            ref={inputRef}
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            onKeyDown={handleKeyDown}
            placeholder="Type a command or search..."
            className="w-full py-3.5 bg-transparent text-sm text-[var(--text-primary)] placeholder:text-[var(--text-muted)] outline-none"
          />
          <button
            onClick={onClose}
            aria-label="Close command menu"
            className="p-1 rounded text-[var(--text-muted)] hover:text-[var(--text-primary)] transition-colors cursor-pointer"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Results List */}
        <div className="max-h-80 overflow-y-auto p-2 space-y-1">
          {filtered.length > 0 ? (
            filtered.map((item, idx) => {
              const isSelected = idx === selectedIndex;
              return (
                <button
                  key={item.id}
                  onClick={item.perform}
                  onMouseEnter={() => setSelectedIndex(idx)}
                  className={`w-full flex items-center justify-between px-3 py-2.5 rounded-lg text-xs sm:text-sm font-medium transition-colors text-left cursor-pointer ${
                    isSelected
                      ? "bg-[var(--surface-subtle)] text-[var(--text-primary)] border border-[var(--border)]"
                      : "text-[var(--text-secondary)] hover:text-[var(--text-primary)]"
                  }`}
                >
                  <div className="flex items-center gap-2.5">
                    <span className="text-[11px] font-mono uppercase tracking-wider text-[var(--text-muted)] px-1.5 py-0.5 rounded bg-[var(--surface-subtle)] border border-[var(--border)]">
                      {item.group}
                    </span>
                    <span>{item.label}</span>
                  </div>
                  {copied && item.id === "email" ? (
                    <span className="text-xs text-[var(--highlight-amber)] font-medium flex items-center gap-1">
                      <Check className="w-3.5 h-3.5" /> Copied
                    </span>
                  ) : (
                    <CornerDownLeft className={`w-3.5 h-3.5 text-[var(--text-muted)] ${isSelected ? "opacity-100" : "opacity-0"}`} />
                  )}
                </button>
              );
            })
          ) : (
            <div className="py-8 text-center text-xs text-[var(--text-muted)]">
              No matching commands found.
            </div>
          )}
        </div>

        {/* Keyboard Footer Tip */}
        <div className="px-4 py-2 border-t border-[var(--border)] bg-[var(--surface-subtle)] flex items-center justify-between text-[11px] text-[var(--text-muted)] font-mono">
          <span>Navigate with &uarr;&darr; &bull; Enter to select</span>
          <span>Esc to close</span>
        </div>
      </div>
    </div>
  );
}

export default CommandMenu;
