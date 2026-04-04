import { useEffect, useState } from "react";
import heroModel from "@/assets/hero-model.jpg";
import { ArrowDownRight, Play } from "lucide-react";

const HeroSection = () => {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    setLoaded(true);
  }, []);

  return (
    <section className="relative min-h-screen flex items-end pb-16 md:pb-24 overflow-hidden">
      {/* Full-screen static image */}
      <div className="absolute inset-0">
        <img
          src={heroModel}
          alt="Элегантная исламская мода"
          className="w-full h-full object-cover"
        />
        {/* Gradient overlays */}
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/40 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-r from-background/70 via-transparent to-transparent" />
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
              </span>
              О бренде
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
