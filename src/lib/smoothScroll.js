import Lenis from "lenis";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

let lenisInstance = null;

/**
 * Initialize Lenis smooth momentum scrolling and synchronize with GSAP ScrollTrigger.
 * Respects prefers-reduced-motion and touch device optimization.
 * Returns a cleanup function that safely unbinds listeners and destroys the instance.
 */
export function initSmoothScroll() {
  if (typeof window === "undefined") return () => {};

  // Check reduced motion preference
  const isReduced =
    window.matchMedia("(prefers-reduced-motion: reduce)").matches ||
    document.documentElement.classList.contains("reduce-motion");

  if (isReduced) {
    return () => {};
  }

  // Clean up any existing instance first
  if (lenisInstance) {
    try {
      lenisInstance.destroy();
    } catch (_) {}
    lenisInstance = null;
  }

  // Create Lenis instance
  lenisInstance = new Lenis({
    duration: 1.1,
    easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)), // exponential ease-out
    orientation: "vertical",
    gestureOrientation: "vertical",
    smoothWheel: true,
    wheelMultiplier: 0.9,
    touchMultiplier: 1.5,
    autoRaf: true,
  });

  // Synchronize Lenis scroll updates with GSAP ScrollTrigger
  const handleScroll = () => {
    ScrollTrigger.update();
  };
  lenisInstance.on("scroll", handleScroll);

  const tickerCallback = (time) => {
    if (lenisInstance) {
      lenisInstance.raf(time * 1000);
    }
  };

  gsap.ticker.add(tickerCallback);
  gsap.ticker.lagSmoothing(0);

  // Return callable cleanup function
  return () => {
    try {
      gsap.ticker.remove(tickerCallback);
      if (lenisInstance) {
        lenisInstance.destroy();
        lenisInstance = null;
      }
    } catch (_) {}
  };
}

export function getLenis() {
  return lenisInstance;
}

export function destroySmoothScroll() {
  if (lenisInstance) {
    lenisInstance.destroy();
    lenisInstance = null;
  }
}

