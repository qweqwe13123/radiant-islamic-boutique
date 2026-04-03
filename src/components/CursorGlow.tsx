import { useEffect, useRef } from "react";

const CursorGlow = () => {
  const glowRef = useRef<HTMLDivElement>(null);
  const trailRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let mx = 0, my = 0;
    let gx = 0, gy = 0;
    let tx = 0, ty = 0;

    const handleMouseMove = (e: MouseEvent) => {
      mx = e.clientX;
      my = e.clientY;
    };

    const animate = () => {
      // Main glow follows with smooth lag
      gx += (mx - gx) * 0.15;
      gy += (my - gy) * 0.15;
      // Trail follows slower
      tx += (mx - tx) * 0.06;
      ty += (my - ty) * 0.06;

      if (glowRef.current) {
        glowRef.current.style.transform = `translate(${gx - 150}px, ${gy - 150}px)`;
      }
      if (trailRef.current) {
        trailRef.current.style.transform = `translate(${tx - 200}px, ${ty - 200}px)`;
      }
      requestAnimationFrame(animate);
    };

    window.addEventListener("mousemove", handleMouseMove, { passive: true });
    const id = requestAnimationFrame(animate);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      cancelAnimationFrame(id);
    };
  }, []);

  return (
    <>
      <div
        ref={glowRef}
        className="fixed top-0 left-0 w-[300px] h-[300px] rounded-full pointer-events-none z-[9999] mix-blend-soft-light hidden md:block"
        style={{
          background: "radial-gradient(circle, hsl(var(--gold) / 0.25) 0%, transparent 70%)",
          filter: "blur(30px)",
        }}
        aria-hidden="true"
      />
      <div
        ref={trailRef}
        className="fixed top-0 left-0 w-[400px] h-[400px] rounded-full pointer-events-none z-[9998] mix-blend-soft-light hidden md:block"
        style={{
          background: "radial-gradient(circle, hsl(var(--gold) / 0.1) 0%, transparent 70%)",
          filter: "blur(50px)",
        }}
        aria-hidden="true"
      />
    </>
  );
};

export default CursorGlow;
