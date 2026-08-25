import React, { useState, useEffect } from "react";
import { Terminal, Database, Cpu, Globe, Server, Layers, GitBranch } from "lucide-react";
import { cn } from "@/utils/helpers";

const NODES = [
  { id: "python", label: "PYTHON", x: 20, y: 22, color: "blue", icon: Terminal, category: "Core Language", detail: "Flask, Scripting, NumPy, Pandas, Scikit-Learn" },
  { id: "react", label: "REACT", x: 78, y: 22, color: "softBlue", icon: Layers, category: "Frontend UI", detail: "React 19, Hooks, Vite, Tailwind CSS" },
  { id: "api", label: "REST API", x: 50, y: 48, color: "tech", icon: Globe, category: "Service Layer", detail: "Flask Blueprints, Express.js Endpoints" },
  { id: "sql", label: "SQL / MYSQL", x: 22, y: 78, color: "green", icon: Database, category: "Relational DB", detail: "19-Table Schemas, Foreign Keys, Indexes" },
  { id: "ml", label: "ML & AI", x: 78, y: 78, color: "mlGreen", icon: Cpu, category: "Machine Learning", detail: "XGBoost, CatBoost, SHAP, CNN Computer Vision" },
  { id: "git", label: "GIT / CI", x: 50, y: 92, color: "orange", icon: GitBranch, category: "Version Control", detail: "Git Workflows, GitHub Actions, Open Source" },
];

const CONNECTIONS = [
  { from: "python", to: "api" },
  { from: "react", to: "api" },
  { from: "api", to: "sql" },
  { from: "api", to: "ml" },
  { from: "python", to: "ml" },
  { from: "sql", to: "git" },
  { from: "ml", to: "git" },
];

const COLOR_CONFIG = {
  blue: {
    bg: "bg-[#ABD2FA]/20 dark:bg-[#1B2CC1]/30",
    text: "text-[#1B2CC1] dark:text-[#ABD2FA]",
    border: "border-[#C9E6F0] dark:border-[#50577A]",
  },
  softBlue: {
    bg: "bg-[#ABD2FA]/30 dark:bg-[#7692FF]/20",
    text: "text-[#1B2CC1] dark:text-[#ABD2FA]",
    border: "border-[#7692FF]/40 dark:border-[#7692FF]/50",
  },
  tech: {
    bg: "bg-[#C9E6F0]/40 dark:bg-[#1A2752]",
    text: "text-[#091540] dark:text-[#C9E6F0]",
    border: "border-[#78B3CE] dark:border-[#50577A]",
  },
  green: {
    bg: "bg-[#E8F5BD]/60 dark:bg-[#84B179]/20",
    text: "text-[#15803D] dark:text-[#A2CB8B]",
    border: "border-[#C7EABB] dark:border-[#50577A]",
  },
  mlGreen: {
    bg: "bg-[#C7EABB]/50 dark:bg-[#A2CB8B]/20",
    text: "text-[#15803D] dark:text-[#A2CB8B]",
    border: "border-[#A2CB8B] dark:border-[#50577A]",
  },
  orange: {
    bg: "bg-[#FFE5BF]/70 dark:bg-[#F96E2A]/20",
    text: "text-[#C2410C] dark:text-[#F96E2A]",
    border: "border-[#FFE5BF] dark:border-[#50577A]",
  },
};

export function TechNetwork() {
  const [hoveredNodeId, setHoveredNodeId] = useState(null);
  const [mouseOffset, setMouseOffset] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMove = (e) => {
      const x = (e.clientX / window.innerWidth - 0.5) * 6;
      const y = (e.clientY / window.innerHeight - 0.5) * 6;
      setMouseOffset({ x, y });
    };
    window.addEventListener("mousemove", handleMove, { passive: true });
    return () => window.removeEventListener("mousemove", handleMove);
  }, []);

  const activeNode = NODES.find((n) => n.id === hoveredNodeId);

  const isConnected = (id1, id2) => {
    return CONNECTIONS.some(
      (c) => (c.from === id1 && c.to === id2) || (c.from === id2 && c.to === id1)
    );
  };

  return (
    <div className="w-full flex flex-col space-y-3 font-mono">
      {/* Network Canvas */}
      <div
        className="relative w-full h-[320px] sm:h-[350px] rounded-2xl bg-white dark:bg-[#141F46] border border-[#C9E6F0] dark:border-[#404258] overflow-hidden select-none p-4 flex items-center justify-center shadow-2xs"
        style={{
          transform: `translate3d(${mouseOffset.x}px, ${mouseOffset.y}px, 0)`,
          transition: "transform 0.15s ease-out",
        }}
      >
        {/* Subtle grid background */}
        <div
          className="absolute inset-0 opacity-[0.04] dark:opacity-[0.08] pointer-events-none"
          style={{
            backgroundImage: "radial-gradient(var(--text-primary) 1px, transparent 1px)",
            backgroundSize: "20px 20px",
          }}
        />

        {/* SVG Connections */}
        <svg className="absolute inset-0 w-full h-full pointer-events-none">
          {CONNECTIONS.map((conn, idx) => {
            const nodeA = NODES.find((n) => n.id === conn.from);
            const nodeB = NODES.find((n) => n.id === conn.to);
            if (!nodeA || !nodeB) return null;

            const isHighlighted =
              hoveredNodeId &&
              (hoveredNodeId === conn.from || hoveredNodeId === conn.to);

            return (
              <line
                key={idx}
                x1={`${nodeA.x}%`}
                y1={`${nodeA.y}%`}
                x2={`${nodeB.x}%`}
                y2={`${nodeB.y}%`}
                stroke="currentColor"
                strokeWidth={isHighlighted ? 2.5 : 1.2}
                className={cn(
                  "transition-all duration-200",
                  isHighlighted
                    ? "text-[#1B2CC1] dark:text-[#7692FF] stroke-solid"
                    : "text-[#C9E6F0] dark:text-[#404258]"
                )}
                strokeDasharray={isHighlighted ? "none" : "4 4"}
              />
            );
          })}
        </svg>

        {/* Nodes */}
        {NODES.map((node) => {
          const Icon = node.icon;
          const config = COLOR_CONFIG[node.color] || COLOR_CONFIG.blue;
          const isHovered = hoveredNodeId === node.id;
          const isRelated = hoveredNodeId ? isConnected(hoveredNodeId, node.id) : false;
          const isDimmed = hoveredNodeId && !isHovered && !isRelated;

          return (
            <div
              key={node.id}
              onMouseEnter={() => setHoveredNodeId(node.id)}
              onMouseLeave={() => setHoveredNodeId(null)}
              style={{
                left: `${node.x}%`,
                top: `${node.y}%`,
                transform: "translate(-50%, -50%)",
              }}
              className={cn(
                "absolute flex items-center gap-2 px-3 py-1.5 rounded-lg border transition-all duration-200 cursor-pointer shadow-2xs z-10",
                config.bg,
                config.border,
                isHovered
                  ? "scale-110 shadow-md ring-2 ring-[#1B2CC1]/30 dark:ring-[#7692FF]/40"
                  : isDimmed
                  ? "opacity-40 scale-95"
                  : "opacity-100 hover:scale-105"
              )}
            >
              <Icon className={cn("w-3.5 h-3.5 shrink-0", config.text)} />
              <span className={cn("text-xs font-bold font-mono", config.text)}>
                {node.label}
              </span>
            </div>
          );
        })}
      </div>

      {/* Interactive Telemetry Console */}
      <div className="p-3 rounded-xl bg-white dark:bg-[#141F46] border border-[#C9E6F0] dark:border-[#404258] flex items-center justify-between text-xs">
        <div className="flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-[#1B2CC1] dark:bg-[#7692FF] animate-pulse" />
          <span className="text-[#6B728E] dark:text-[#ABD2FA] uppercase text-[10px]">
            // SYSTEM INSPECTOR:
          </span>
          <span className="font-bold text-[#091540] dark:text-[#FFFAF3]">
            {activeNode ? `${activeNode.label} (${activeNode.category})` : "Hover any node to inspect telemetry"}
          </span>
        </div>
        {activeNode && (
          <span className="text-[11px] text-[#1B2CC1] dark:text-[#7692FF] font-sans line-clamp-1">
            {activeNode.detail}
          </span>
        )}
      </div>
    </div>
  );
}

export default TechNetwork;
