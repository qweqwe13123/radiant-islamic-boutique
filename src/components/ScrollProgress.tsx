import { useSmoothScroll } from "@/hooks/useSmoothScroll";

const ScrollProgress = () => {
  const { scrollProgress } = useSmoothScroll();

  return (
    <div className="fixed top-0 left-0 right-0 z-[100] h-[2px]" aria-hidden="true">
      <div
        className="h-full origin-left"
        style={{
          transform: `scaleX(${scrollProgress})`,
          background: "linear-gradient(90deg, hsl(var(--gold)), hsl(38, 70%, 65%), hsl(var(--gold)))",
          transition: "transform 0.1s linear",
        }}
      />
    </div>
  );
};

export default ScrollProgress;
