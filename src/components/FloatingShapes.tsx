import { useMouseParallax } from "@/hooks/useMouseParallax";

const FloatingShapes = () => {
  const p = useMouseParallax(0.5);

  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden" aria-hidden="true">
      {/* Diamond */}
      <div
        className="absolute top-[15%] right-[10%] w-16 h-16 border border-gold/20 animate-float"
        style={{
          transform: `translate(${p.x * 0.8}px, ${p.y * 0.8}px) rotate(45deg)`,
          transition: "transform 0.6s cubic-bezier(0.16, 1, 0.3, 1)",
          animationDelay: "0s",
        }}
      />
      {/* Circle */}
      <div
        className="absolute top-[40%] left-[5%] w-20 h-20 rounded-full border border-gold/15"
        style={{
          transform: `translate(${-p.x * 1.2}px, ${-p.y * 0.6}px)`,
          transition: "transform 0.8s cubic-bezier(0.16, 1, 0.3, 1)",
          animation: "float 8s ease-in-out infinite",
          animationDelay: "1s",
        }}
      />
      {/* Small dot */}
      <div
        className="absolute bottom-[25%] right-[20%] w-3 h-3 rounded-full bg-gold/30"
        style={{
          transform: `translate(${p.x * 1.5}px, ${p.y * 1.5}px)`,
          transition: "transform 0.5s cubic-bezier(0.16, 1, 0.3, 1)",
          animation: "float 5s ease-in-out infinite",
          animationDelay: "2s",
        }}
      />
      {/* Line */}
      <div
        className="absolute top-[60%] right-[35%] w-24 h-px bg-gradient-to-r from-transparent via-gold/25 to-transparent"
        style={{
          transform: `translate(${p.x * 0.6}px, ${p.y * 0.4}px) rotate(-15deg)`,
          transition: "transform 0.7s cubic-bezier(0.16, 1, 0.3, 1)",
        }}
      />
      {/* Triangle outline */}
      <div
        className="absolute bottom-[35%] left-[15%] w-12 h-12"
        style={{
          transform: `translate(${-p.x * 0.9}px, ${p.y * 0.9}px)`,
          transition: "transform 0.9s cubic-bezier(0.16, 1, 0.3, 1)",
          animation: "float 7s ease-in-out infinite",
          animationDelay: "0.5s",
        }}
      >
        <svg viewBox="0 0 48 48" fill="none" className="w-full h-full">
          <path d="M24 4L44 40H4L24 4Z" stroke="hsl(var(--gold))" strokeWidth="0.5" opacity="0.2" />
        </svg>
      </div>
      {/* Cross */}
      <div
        className="absolute top-[75%] right-[8%] w-8 h-8 opacity-20"
        style={{
          transform: `translate(${p.x * 1.1}px, ${-p.y * 0.7}px) rotate(${p.rotateY * 2}deg)`,
          transition: "transform 0.6s cubic-bezier(0.16, 1, 0.3, 1)",
        }}
      >
        <div className="absolute top-1/2 left-0 w-full h-px bg-gold -translate-y-1/2" />
        <div className="absolute left-1/2 top-0 h-full w-px bg-gold -translate-x-1/2" />
      </div>
    </div>
  );
};

export default FloatingShapes;
