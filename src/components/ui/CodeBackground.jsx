import React, { useEffect, useState } from "react";

const DS_SYMBOLS = [
  { text: "y = f(X) + ε", x: "6%", y: "14%" },
  { text: "df.describe()", x: "90%", y: "18%" },
  { text: "XGBClassifier()", x: "8%", y: "45%" },
  { text: "precision / recall", x: "88%", y: "52%" },
  { text: "SELECT * FROM features", x: "5%", y: "75%" },
  { text: "CNN.forward()", x: "86%", y: "78%" },
  { text: "import numpy as np", x: "12%", y: "90%" },
  { text: "SHAP.TreeExplainer", x: "82%", y: "35%" },
  { text: "pd.DataFrame()", x: "18%", y: "30%" },
  { text: "confusion_matrix(y_true, y_pred)", x: "80%", y: "65%" },
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
      const x = (e.clientX / window.innerWidth - 0.5) * 6;
      const y = (e.clientY / window.innerHeight - 0.5) * 6;
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
      {/* Subtle Dot Matrix Grid in Background */}
      <div className="absolute inset-0 opacity-[0.03] dark:opacity-[0.05] [background-image:radial-gradient(#000000_1px,transparent_1px)] dark:[background-image:radial-gradient(#ffffff_1px,transparent_1px)] [background-size:24px_24px]" />

      {/* Subtle Data Science Math & Code Tokens */}
      {DS_SYMBOLS.map((item, idx) => (
        <span
          key={idx}
          className="absolute text-xs font-semibold text-black/[0.04] dark:text-white/[0.05] transition-transform duration-700 ease-out"
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
