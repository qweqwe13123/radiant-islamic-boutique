import heroModel from "@/assets/hero-model.jpg";
import { ArrowRight } from "lucide-react";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import { useMouseParallax } from "@/hooks/useMouseParallax";
import FloatingShapes from "@/components/FloatingShapes";

const HeroSection = () => {
  const ref = useScrollReveal<HTMLElement>();
  const p = useMouseParallax(0.6);

  return (
    <section ref={ref} className="relative pt-20 md:pt-0 bg-background min-h-screen flex items-center overflow-hidden">
      {/* Subtle background pattern */}
      <div className="absolute inset-0 opacity-[0.03]" style={{
        backgroundImage: `radial-gradient(hsl(var(--gold)) 1px, transparent 1px)`,
        backgroundSize: '40px 40px',
      }} />

      {/* Floating 3D shapes */}
      <FloatingShapes />

      {/* Animated gradient orb */}
      <div
        className="absolute top-1/4 left-1/3 w-[500px] h-[500px] rounded-full pointer-events-none"
        style={{
          background: "radial-gradient(circle, hsl(var(--gold) / 0.08) 0%, transparent 70%)",
          transform: `translate(${p.x * 1.5}px, ${p.y * 1.5}px)`,
          transition: "transform 1s cubic-bezier(0.16, 1, 0.3, 1)",
          filter: "blur(60px)",
        }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center">
          {/* Left - Text */}
          <div className="order-2 lg:order-1 space-y-6 md:space-y-8 pb-8 lg:pb-0">
            <div className="space-y-4">
              <p className="reveal text-xs font-body font-medium tracking-[0.3em] uppercase text-gold">
                Скромная мода • Элегантность
              </p>
              <h1 className="reveal reveal-delay-1 font-display text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-[1.05] text-foreground">
                Красота в
                <br />
                <span className="italic gradient-text text-shimmer">скромности</span>
              </h1>
            </div>
            <p className="reveal reveal-delay-2 font-body text-muted-foreground text-base md:text-lg leading-relaxed max-w-md">
              Откройте для себя мир элегантной исламской моды. Гайды, курсы,
              персональный подбор и эксклюзивная коллекция одежды.
            </p>
            <div className="reveal reveal-delay-3 flex flex-col sm:flex-row gap-4">
              <a
                href="#services"
                className="group inline-flex items-center justify-center gap-2 px-8 py-4 bg-primary text-primary-foreground font-body text-xs font-medium tracking-[0.15em] uppercase hover:bg-gold hover:text-gold-foreground transition-all duration-500 hover:shadow-[0_10px_40px_hsl(var(--gold)/0.3)] hover:-translate-y-0.5"
              >
                Наши услуги
                <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform duration-300" />
              </a>
              <a
                href="#shop"
                className="group inline-flex items-center justify-center gap-2 px-8 py-4 border border-foreground text-foreground font-body text-xs font-medium tracking-[0.15em] uppercase hover:bg-foreground hover:text-background transition-all duration-500 hover:-translate-y-0.5"
              >
                Магазин
              </a>
            </div>
          </div>

          {/* Right - Image with 3D parallax */}
          <div className="order-1 lg:order-2 flex justify-center lg:justify-end" style={{ perspective: "1000px" }}>
            <div
              className="relative w-full max-w-md lg:max-w-lg reveal reveal-delay-1"
              style={{
                transform: `rotateX(${p.rotateX * 0.3}deg) rotateY(${p.rotateY * 0.3}deg)`,
                transition: "transform 0.6s cubic-bezier(0.16, 1, 0.3, 1)",
                transformStyle: "preserve-3d",
              }}
            >
              {/* Decorative frame with 3D offset */}
              <div
                className="absolute -top-4 -right-4 w-full h-full border border-gold/30 pointer-events-none"
                style={{
                  transform: "translateZ(-20px)",
                }}
              />
              <div className="absolute -bottom-4 -left-4 w-24 h-24 border-b border-l border-gold/30 pointer-events-none" style={{ transform: "translateZ(-30px)" }} />
              
              {/* Glow behind image */}
              <div className="absolute inset-0 bg-gold/10 blur-3xl -z-10 scale-110" />

              <img
                src={heroModel}
                alt="Элегантная модель в хиджабе"
                width={800}
                height={1100}
                className="w-full h-auto object-cover relative z-10"
                style={{ transform: "translateZ(20px)" }}
              />
              <div
                className="absolute bottom-8 left-0 z-20 glass px-5 py-3 shadow-lg"
                style={{ transform: "translateZ(40px)" }}
              >
                <p className="font-display text-sm font-semibold text-foreground">Новая коллекция</p>
                <p className="font-body text-xs text-muted-foreground">Весна 2026</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
