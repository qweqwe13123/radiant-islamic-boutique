import { useEffect, useRef, useState } from "react";

interface ParallaxState {
  x: number;
  y: number;
  rotateX: number;
  rotateY: number;
}

export function useMouseParallax(intensity = 1) {
  const [state, setState] = useState<ParallaxState>({ x: 0, y: 0, rotateX: 0, rotateY: 0 });
  const rafRef = useRef<number>(0);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      cancelAnimationFrame(rafRef.current);
      rafRef.current = requestAnimationFrame(() => {
        const cx = window.innerWidth / 2;
        const cy = window.innerHeight / 2;
        const x = ((e.clientX - cx) / cx) * intensity;
        const y = ((e.clientY - cy) / cy) * intensity;
        setState({
          x: x * 20,
          y: y * 20,
          rotateX: -y * 8,
          rotateY: x * 8,
        });
      });
    };

    window.addEventListener("mousemove", handleMouseMove, { passive: true });
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      cancelAnimationFrame(rafRef.current);
    };
  }, [intensity]);

  return state;
}
