import { useEffect, useRef, useState, useCallback } from "react";

type AnimationType = "fade-up" | "fade-left" | "fade-right" | "zoom-in" | "flip-up" | "blur-in" | "slide-rotate";

interface UseAnimatedRevealOptions {
  type?: AnimationType;
  threshold?: number;
  delay?: number;
  duration?: number;
  staggerChildren?: number;
}

export function useAnimatedReveal<T extends HTMLElement = HTMLDivElement>(
  options: UseAnimatedRevealOptions = {}
) {
  const {
    type = "fade-up",
    threshold = 0.15,
    delay = 0,
    duration = 800,
    staggerChildren = 0,
  } = options;

  const ref = useRef<T>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTimeout(() => setIsVisible(true), delay);
          observer.unobserve(el);
        }
      },
      { threshold, rootMargin: "0px 0px -60px 0px" }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [threshold, delay]);

  const getStyles = useCallback((): React.CSSProperties => {
    const base: React.CSSProperties = {
      transition: `all ${duration}ms cubic-bezier(0.16, 1, 0.3, 1)`,
      willChange: "transform, opacity",
    };

    const hidden: Record<AnimationType, React.CSSProperties> = {
      "fade-up": { opacity: 0, transform: "translateY(60px)" },
      "fade-left": { opacity: 0, transform: "translateX(-60px)" },
      "fade-right": { opacity: 0, transform: "translateX(60px)" },
      "zoom-in": { opacity: 0, transform: "scale(0.85)" },
      "flip-up": { opacity: 0, transform: "perspective(800px) rotateX(25deg) translateY(40px)" },
      "blur-in": { opacity: 0, filter: "blur(12px)", transform: "translateY(20px)" },
      "slide-rotate": { opacity: 0, transform: "translateY(50px) rotate(3deg)" },
    };

    const visible: Record<AnimationType, React.CSSProperties> = {
      "fade-up": { opacity: 1, transform: "translateY(0)" },
      "fade-left": { opacity: 1, transform: "translateX(0)" },
      "fade-right": { opacity: 1, transform: "translateX(0)" },
      "zoom-in": { opacity: 1, transform: "scale(1)" },
      "flip-up": { opacity: 1, transform: "perspective(800px) rotateX(0deg) translateY(0)" },
      "blur-in": { opacity: 1, filter: "blur(0px)", transform: "translateY(0)" },
      "slide-rotate": { opacity: 1, transform: "translateY(0) rotate(0deg)" },
    };

    return { ...base, ...(isVisible ? visible[type] : hidden[type]) };
  }, [isVisible, type, duration]);

  return { ref, isVisible, style: getStyles() };
}
