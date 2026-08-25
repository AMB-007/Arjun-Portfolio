import React, { useEffect, useState } from "react";

const CODE_SYMBOLS = [
  { text: "{ }", x: "6%", y: "14%", size: "text-base", color: "text-[#1B2CC1]/10 dark:text-[#7692FF]/10" },
  { text: "< />", x: "92%", y: "18%", size: "text-sm", color: "text-[#7692FF]/10 dark:text-[#ABD2FA]/10" },
  { text: "() =>", x: "8%", y: "45%", size: "text-xs", color: "text-[#1B2CC1]/10 dark:text-[#7692FF]/10" },
  { text: "[ ... ]", x: "90%", y: "52%", size: "text-xs", color: "text-[#78B3CE]/10 dark:text-[#78B3CE]/10" },
  { text: "const", x: "4%", y: "75%", size: "text-xs", color: "text-[#1B2CC1]/10 dark:text-[#7692FF]/10" },
  { text: "async / await", x: "86%", y: "78%", size: "text-xs", color: "text-[#7692FF]/10 dark:text-[#ABD2FA]/10" },
  { text: "import React", x: "12%", y: "90%", size: "text-xs", color: "text-[#1B2CC1]/10 dark:text-[#7692FF]/10" },
  { text: "SELECT * FROM", x: "82%", y: "35%", size: "text-xs", color: "text-[#84B179]/10 dark:text-[#A2CB8B]/10" },
  { text: "Python", x: "18%", y: "28%", size: "text-xs", color: "text-[#1B2CC1]/10 dark:text-[#7692FF]/10" },
  { text: "model.predict()", x: "84%", y: "65%", size: "text-xs", color: "text-[#84B179]/10 dark:text-[#A2CB8B]/10" },
];

export function CodeBackground() {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [reducedMotion, setReducedMotion] = useState(false);

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      setReducedMotion(true);
      return;
    }

    const handleMouseMove = (e) => {
      const x = (e.clientX / window.innerWidth - 0.5) * 8;
      const y = (e.clientY / window.innerHeight - 0.5) * 8;
      setMousePos({ x, y });
    };

    window.addEventListener("mousemove", handleMouseMove, { passive: true });
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <div
      aria-hidden="true"
      className="fixed inset-0 pointer-events-none z-0 overflow-hidden select-none font-mono"
    >
      {CODE_SYMBOLS.map((item, idx) => (
        <span
          key={idx}
          className={`absolute ${item.size} font-semibold ${item.color} transition-transform duration-700 ease-out`}
          style={{
            left: item.x,
            top: item.y,
            transform: reducedMotion
              ? "none"
              : `translate3d(${mousePos.x * (idx % 2 === 0 ? 1 : -1)}px, ${
                  mousePos.y * (idx % 3 === 0 ? 1 : -1)
                }px, 0)`,
          }}
        >
          {item.text}
        </span>
      ))}
    </div>
  );
}

export default CodeBackground;
