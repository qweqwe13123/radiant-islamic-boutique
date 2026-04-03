import { useEffect, useState, useRef } from "react";

export function useSmoothScroll() {
  const [scrollY, setScrollY] = useState(0);
  const [scrollProgress, setScrollProgress] = useState(0);
  const raf = useRef<number>(0);

  useEffect(() => {
    let current = 0;
    let target = 0;

    const handleScroll = () => {
      target = window.scrollY;
    };

    const animate = () => {
      current += (target - current) * 0.1;
      setScrollY(current);
      const maxScroll = document.documentElement.scrollHeight - window.innerHeight;
      setScrollProgress(maxScroll > 0 ? current / maxScroll : 0);
      raf.current = requestAnimationFrame(animate);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    raf.current = requestAnimationFrame(animate);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      cancelAnimationFrame(raf.current);
    };
  }, []);

  return { scrollY, scrollProgress };
}
