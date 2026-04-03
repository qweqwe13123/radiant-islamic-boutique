import { useEffect, useRef, useState } from "react";
import heroModel from "@/assets/hero-model.jpg";
import { ArrowDownRight, Play } from "lucide-react";

const HeroSection = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const [scrollY, setScrollY] = useState(0);
  const [loaded, setLoaded] = useState(false);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  useEffect(() => {
    setLoaded(true);
    const handleScroll = () => setScrollY(window.scrollY);
    const handleMouse = (e: MouseEvent) => {
      setMousePos({
        x: (e.clientX / window.innerWidth - 0.5) * 2,
        y: (e.clientY / window.innerHeight - 0.5) * 2,
      });
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    window.addEventListener("mousemove", handleMouse, { passive: true });
    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("mousemove", handleMouse);
    };
  }, []);

  const parallax = scrollY * 0.3;

  return (
    <section ref={sectionRef} className="relative min-h-screen flex items-end pb-16 md:pb-24 overflow-hidden">
      {/* Full-screen image with parallax */}
      <div className="absolute inset-0 overflow-hidden">
        <div
          className="absolute inset-0 transition-transform duration-[1.5s]"
          style={{ transform: `translateY(${parallax}px) scale(${1 + scrollY * 0.0002})` }}
        >
          <img
            src={heroModel}
            alt="Элегантная исламская мода"
            className={`w-full h-full object-cover transition-all duration-[2s] ${loaded ? "scale-100 opacity-100" : "scale-110 opacity-0"}`}
            style={{
              transform: `translate(${mousePos.x * 8}px, ${mousePos.y * 5}px)`,
              transition: "transform 1.2s cubic-bezier(0.16, 1, 0.3, 1)",
            }}
          />
        </div>
        {/* Gradient overlays */}
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/40 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-r from-background/70 via-transparent to-transparent" />
      </div>

      {/* Floating decorative elements */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Orbiting dot */}
        <div className="absolute top-1/3 left-1/3 w-2 h-2 rounded-full bg-rose/60 animate-orbit" />
        {/* Breathing circle */}
        <div className="absolute top-20 right-20 w-32 h-32 rounded-full border border-rose/10 animate-breathe" />
        {/* Morphing blob */}
        <div
          className="absolute bottom-1/4 right-1/4 w-64 h-64 animate-morph opacity-20"
          style={{
            background: `radial-gradient(circle, hsl(var(--rose) / 0.15), transparent 70%)`,
            transform: `translate(${mousePos.x * 20}px, ${mousePos.y * 15}px)`,
            transition: "transform 1.5s ease-out",
          }}
        />
        {/* Animated vertical line */}
        <div className="absolute left-12 md:left-20 top-0 h-full">
          <div className={`w-px bg-gradient-to-b from-transparent via-rose/30 to-transparent transition-all duration-[2s] ${loaded ? "h-full" : "h-0"}`} />
        </div>
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-5 sm:px-8 w-full">
        <div className="max-w-2xl">
          {/* Label */}
          <div className={`transition-all duration-1000 delay-300 ${loaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
            <div className="flex items-center gap-3 mb-6">
              <div className="w-8 h-px bg-rose" />
              <span className="text-[10px] font-body font-semibold tracking-[0.4em] uppercase text-rose">
                Коллекция 2026
              </span>
            </div>
          </div>

          {/* Title */}
          <div className={`transition-all duration-1000 delay-500 ${loaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"}`}>
            <h1 className="font-display text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-light leading-[0.95] text-foreground mb-2">
              Искусство
            </h1>
          </div>
          <div className={`transition-all duration-1000 delay-700 ${loaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"}`}>
            <h1 className="font-display text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-light leading-[0.95] mb-6">
              <span className="italic gradient-rose">скромной</span>
              <span className="text-foreground"> моды</span>
            </h1>
          </div>

          {/* Description */}
          <div className={`transition-all duration-1000 delay-[900ms] ${loaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
            <p className="font-body text-sm md:text-base text-muted-foreground leading-relaxed max-w-md mb-10">
              Утончённая элегантность, современный дизайн и уважение к традициям — всё в одном месте.
            </p>
          </div>

          {/* CTA */}
          <div className={`flex flex-wrap items-center gap-4 transition-all duration-1000 delay-[1100ms] ${loaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
            <a
              href="#shop"
              className="group relative inline-flex items-center gap-3 px-8 py-4 bg-foreground text-background font-body text-[11px] font-medium tracking-[0.2em] uppercase overflow-hidden transition-all duration-500 hover:shadow-2xl rounded-full"
            >
              <span className="relative z-10">Смотреть коллекцию</span>
              <ArrowDownRight size={14} className="relative z-10 group-hover:rotate-45 transition-transform duration-500" />
              <div className="absolute inset-0 bg-gradient-to-r from-rose to-terra translate-y-full group-hover:translate-y-0 transition-transform duration-500" />
            </a>
            <button className="group flex items-center gap-3 px-6 py-4 font-body text-[11px] font-medium tracking-[0.2em] uppercase text-foreground hover:text-rose transition-colors duration-300">
              <span className="relative w-10 h-10 rounded-full border border-foreground/30 flex items-center justify-center group-hover:border-rose group-hover:bg-rose/5 transition-all duration-500">
                <Play size={12} className="ml-0.5" />
                <span className="absolute inset-0 rounded-full border border-foreground/10 animate-pulse-ring" />
              </span>
              О бренде
            </button>
          </div>
        </div>

        {/* Bottom scroll indicator */}
        <div className={`absolute bottom-8 right-8 hidden md:flex flex-col items-center gap-3 transition-all duration-1000 delay-[1300ms] ${loaded ? "opacity-100" : "opacity-0"}`}>
          <span className="text-[9px] font-body tracking-[0.3em] uppercase text-muted-foreground" style={{ writingMode: "vertical-rl" }}>
            Листайте вниз
          </span>
          <div className="w-px h-12 bg-gradient-to-b from-rose/50 to-transparent relative overflow-hidden">
            <div className="w-full h-4 bg-rose absolute animate-bounce" style={{ animationDuration: "2s" }} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
