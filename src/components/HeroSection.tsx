import { useEffect, useState } from "react";
import { useAnimatedReveal } from "@/hooks/useAnimatedReveal";
import { ArrowDown } from "lucide-react";

const heroImages = [
  "https://images.unsplash.com/photo-1590735213920-68192a487bc2?w=1200&q=80",
  "https://images.unsplash.com/photo-1609505848912-b7c3b8b4beda?w=1200&q=80",
  "https://images.unsplash.com/photo-1583391733956-3750e0ff4e8b?w=1200&q=80",
];

const HeroSection = () => {
  const [current, setCurrent] = useState(0);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((p) => (p + 1) % heroImages.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const onMove = (e: MouseEvent) => {
      setMousePos({
        x: (e.clientX / window.innerWidth - 0.5) * 20,
        y: (e.clientY / window.innerHeight - 0.5) * 20,
      });
    };
    window.addEventListener("mousemove", onMove);
    return () => window.removeEventListener("mousemove", onMove);
  }, []);

  const title = useAnimatedReveal({ type: "fade-up", delay: 300, duration: 1200 });
  const sub = useAnimatedReveal({ type: "fade-up", delay: 600, duration: 1000 });
  const cta = useAnimatedReveal({ type: "fade-up", delay: 900, duration: 1000 });

  return (
    <section className="relative h-screen overflow-hidden">
      {/* Background images with crossfade */}
      {heroImages.map((img, i) => (
        <div
          key={i}
          className="absolute inset-0 transition-all duration-[2000ms] ease-[cubic-bezier(0.22,1,0.36,1)]"
          style={{
            opacity: i === current ? 1 : 0,
            transform: i === current
              ? `scale(1.05) translate(${mousePos.x * 0.3}px, ${mousePos.y * 0.3}px)`
              : "scale(1.15)",
          }}
        >
          <img src={img} alt="" className="w-full h-full object-cover" />
        </div>
      ))}

      {/* Dark overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-background/70 via-background/40 to-background z-10" />

      {/* Geometric lines */}
      <div className="absolute inset-0 z-10 pointer-events-none">
        <div className="absolute top-0 left-[20%] w-[1px] h-full bg-foreground/[0.04]" />
        <div className="absolute top-0 left-[50%] w-[1px] h-full bg-foreground/[0.04]" />
        <div className="absolute top-0 left-[80%] w-[1px] h-full bg-foreground/[0.04]" />
      </div>

      {/* Content */}
      <div className="relative z-20 h-full flex flex-col items-center justify-center text-center px-6">
        <div ref={sub.ref} style={sub.style} className="mb-8">
          <span className="font-body text-[10px] tracking-[0.5em] uppercase text-brand">
            Весна — Лето 2026
          </span>
        </div>

        <div ref={title.ref} style={title.style}>
          <h1 className="font-display text-[clamp(3rem,10vw,9rem)] font-light leading-[0.9] tracking-[0.05em] text-foreground">
            <span className="block">Новая</span>
            <span className="block italic font-light text-brand">элегантность</span>
          </h1>
        </div>

        <div ref={cta.ref} style={cta.style} className="mt-10 flex flex-col items-center gap-8">
          <p className="font-body text-sm md:text-base text-muted-foreground max-w-md leading-relaxed">
            Современная исламская мода для тех, кто ценит изысканность и&nbsp;утончённый стиль
          </p>
          <a
            href="#collections"
            className="group inline-flex items-center gap-3 font-body text-[11px] tracking-[0.3em] uppercase text-foreground border border-foreground/20 px-8 py-4 hover:bg-foreground hover:text-background transition-all duration-700"
          >
            Смотреть коллекцию
            <ArrowDown size={14} className="group-hover:translate-y-1 transition-transform duration-500" />
          </a>
        </div>
      </div>

      {/* Slide indicators */}
      <div className="absolute bottom-12 left-1/2 -translate-x-1/2 z-20 flex gap-3">
        {heroImages.map((_, i) => (
          <button
            key={i}
            onClick={() => setCurrent(i)}
            className={`h-[2px] transition-all duration-700 ${i === current ? "w-10 bg-brand" : "w-5 bg-foreground/20"}`}
          />
        ))}
      </div>

      {/* Side text */}
      <div className="absolute right-6 md:right-12 top-1/2 -translate-y-1/2 z-20 hidden md:block">
        <span className="font-body text-[10px] tracking-[0.4em] uppercase text-foreground/30 [writing-mode:vertical-rl]">
          NŪRA — Islamic Fashion House
        </span>
      </div>
    </section>
  );
};

export default HeroSection;
