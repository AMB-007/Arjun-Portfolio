import React, { useEffect, useState } from "react";
import { ArrowUp } from "lucide-react";

export function BackToTop() {
  const [show, setShow] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const totalHeight =
        document.documentElement.scrollHeight - window.innerHeight;
      if (totalHeight > 0) {
        const progress = Math.min(100, Math.max(0, (window.scrollY / totalHeight) * 100));
        setScrollProgress(progress);
        setShow(window.scrollY > 350);
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  if (!show) return null;

  const circumference = 2 * Math.PI * 14;
  const strokeDashoffset = circumference - (scrollProgress / 100) * circumference;

  return (
    <button
      onClick={scrollToTop}
      aria-label="Back to top"
      title="Back to top"
      className="fixed bottom-6 right-6 z-40 p-2.5 rounded-full bg-white dark:bg-[#141F46] border border-[#C9E6F0] dark:border-[#404258] text-[#091540] dark:text-[#FFFAF3] shadow-md hover:border-[#1B2CC1] dark:hover:border-[#7692FF] hover:text-[#1B2CC1] dark:hover:text-[#7692FF] transition-all cursor-pointer select-none group flex items-center justify-center"
    >
      <svg className="w-8 h-8 -rotate-90" viewBox="0 0 36 36">
        <circle
          cx="18"
          cy="18"
          r="14"
          fill="none"
          stroke="currentColor"
          strokeWidth="2.5"
          className="text-[#C9E6F0] dark:text-[#404258]"
        />
        <circle
          cx="18"
          cy="18"
          r="14"
          fill="none"
          stroke="#1B2CC1"
          strokeWidth="2.5"
          strokeDasharray={circumference}
          strokeDashoffset={strokeDashoffset}
          strokeLinecap="round"
          className="transition-all duration-100 ease-out"
        />
      </svg>
      <ArrowUp className="w-3.5 h-3.5 absolute group-hover:-translate-y-0.5 transition-transform" />
    </button>
  );
}

export default BackToTop;
