import heroModel from "@/assets/hero-model.jpg";
import { ArrowRight, Sparkles } from "lucide-react";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import { useMouseParallax } from "@/hooks/useMouseParallax";
import { useTypewriter } from "@/hooks/useTypewriter";
import FloatingShapes from "@/components/FloatingShapes";
import { useAnimatedReveal } from "@/hooks/useAnimatedReveal";

const HeroSection = () => {
  const ref = useScrollReveal<HTMLElement>();
  const p = useMouseParallax(0.6);
  const { displayed: typedText, isDone } = useTypewriter("Откройте для себя мир элегантной исламской моды.", 40, 1200);

  const badge = useAnimatedReveal({ type: "blur-in", delay: 200 });
  const title1 = useAnimatedReveal({ type: "fade-up", delay: 400, duration: 1000 });
  const title2 = useAnimatedReveal({ type: "slide-rotate", delay: 700, duration: 1200 });
  const desc = useAnimatedReveal({ type: "fade-up", delay: 1000 });
  const btns = useAnimatedReveal({ type: "fade-up", delay: 1300 });

  return (
    <section ref={ref} className="relative pt-20 md:pt-0 bg-background min-h-screen flex items-center overflow-hidden">
      {/* Animated mesh gradient background */}
      <div className="absolute inset-0 overflow-hidden">
        <div
          className="absolute w-[800px] h-[800px] rounded-full"
          style={{
            background: "radial-gradient(circle, hsl(var(--gold) / 0.06) 0%, transparent 70%)",
            top: "10%",
            left: "20%",
            transform: `translate(${p.x * 2}px, ${p.y * 2}px)`,
            transition: "transform 1.5s cubic-bezier(0.16, 1, 0.3, 1)",
            filter: "blur(80px)",
            animation: "morph 15s ease-in-out infinite",
          }}
        />
        <div
          className="absolute w-[600px] h-[600px] rounded-full"
          style={{
            background: "radial-gradient(circle, hsl(var(--gold) / 0.04) 0%, transparent 70%)",
            bottom: "10%",
            right: "10%",
            transform: `translate(${-p.x * 1.5}px, ${-p.y * 1.5}px)`,
            transition: "transform 1.8s cubic-bezier(0.16, 1, 0.3, 1)",
            filter: "blur(60px)",
            animation: "morph 20s ease-in-out infinite reverse",
          }}
        />
      </div>

      {/* Dot grid */}
      <div className="absolute inset-0 opacity-[0.03]" style={{
        backgroundImage: `radial-gradient(hsl(var(--gold)) 1px, transparent 1px)`,
        backgroundSize: '40px 40px',
      }} />

      <FloatingShapes />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center">
          {/* Left - Text */}
          <div className="order-2 lg:order-1 space-y-6 md:space-y-8 pb-8 lg:pb-0">
            <div className="space-y-4">
              <div ref={badge.ref} style={badge.style}>
                <p className="inline-flex items-center gap-2 text-xs font-body font-medium tracking-[0.3em] uppercase text-gold">
                  <Sparkles size={12} className="animate-pulse-glow" />
                  Скромная мода • Элегантность
                  <Sparkles size={12} className="animate-pulse-glow" />
                </p>
              </div>

              <div ref={title1.ref} style={title1.style}>
                <h1 className="font-display text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-[1.05] text-foreground">
                  Красота в
                </h1>
              </div>
              <div ref={title2.ref} style={title2.style}>
                <h1 className="font-display text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-[1.05]">
                  <span className="italic gradient-text text-shimmer">скромности</span>
                </h1>
              </div>
            </div>

            <div ref={desc.ref} style={desc.style}>
              <p className="font-body text-muted-foreground text-base md:text-lg leading-relaxed max-w-md">
                {typedText}
                {!isDone && <span className="inline-block w-0.5 h-5 bg-gold ml-0.5 animate-blink" />}
              </p>
            </div>

            <div ref={btns.ref} style={btns.style} className="flex flex-col sm:flex-row gap-4">
              <a
                href="#services"
                className="group inline-flex items-center justify-center gap-2 px-8 py-4 bg-primary text-primary-foreground font-body text-xs font-medium tracking-[0.15em] uppercase transition-all duration-500 hover:shadow-[0_15px_50px_hsl(var(--gold)/0.4)] hover:-translate-y-1 hover:bg-gold hover:text-gold-foreground relative overflow-hidden"
              >
                <span className="relative z-10">Наши услуги</span>
                <ArrowRight size={14} className="relative z-10 group-hover:translate-x-1 transition-transform duration-300" />
                <div className="absolute inset-0 bg-gradient-to-r from-gold via-gold-light to-gold opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              </a>
              <a
                href="#shop"
                className="group inline-flex items-center justify-center gap-2 px-8 py-4 border border-foreground text-foreground font-body text-xs font-medium tracking-[0.15em] uppercase hover:bg-foreground hover:text-background transition-all duration-500 hover:-translate-y-1 hover:shadow-lg"
              >
                Магазин
              </a>
            </div>
          </div>

          {/* Right - 3D Image */}
          <div className="order-1 lg:order-2 flex justify-center lg:justify-end" style={{ perspective: "1200px" }}>
            <div
              className="relative w-full max-w-md lg:max-w-lg"
              style={{
                transform: `rotateX(${p.rotateX * 0.4}deg) rotateY(${p.rotateY * 0.4}deg)`,
                transition: "transform 0.8s cubic-bezier(0.16, 1, 0.3, 1)",
                transformStyle: "preserve-3d",
                animation: "float-3d 6s ease-in-out infinite",
              }}
            >
              {/* Glow behind */}
              <div className="absolute inset-0 bg-gold/10 blur-3xl -z-10 scale-125 animate-pulse-slow" />

              {/* 3D frame layers */}
              <div className="absolute -top-6 -right-6 w-full h-full border border-gold/20 pointer-events-none" style={{ transform: "translateZ(-40px)" }} />
              <div className="absolute -top-3 -right-3 w-full h-full border border-gold/10 pointer-events-none" style={{ transform: "translateZ(-20px)" }} />
              <div className="absolute -bottom-4 -left-4 w-24 h-24 border-b border-l border-gold/30 pointer-events-none" style={{ transform: "translateZ(-30px)" }} />

              <img
                src={heroModel}
                alt="Элегантная модель в хиджабе"
                width={800}
                height={1100}
                className="w-full h-auto object-cover relative z-10 hero-image-reveal"
                style={{ transform: "translateZ(30px)" }}
              />

              {/* Shine sweep on image */}
              <div
                className="absolute inset-0 z-20 pointer-events-none"
                style={{
                  background: "linear-gradient(105deg, transparent 40%, hsla(38, 60%, 70%, 0.15) 50%, transparent 60%)",
                  animation: "shine-sweep 4s ease-in-out infinite",
                  transform: "translateZ(35px)",
                }}
              />

              <div
                className="absolute bottom-8 left-0 z-30 glass px-5 py-3 shadow-xl"
                style={{
                  transform: "translateZ(60px)",
                  animation: "float 4s ease-in-out infinite",
                }}
              >
                <p className="font-display text-sm font-semibold text-foreground">Новая коллекция</p>
                <p className="font-body text-xs text-muted-foreground">Весна 2026</p>
              </div>

              {/* Floating badge */}
              <div
                className="absolute top-8 right-4 z-30 glass px-3 py-2 shadow-lg"
                style={{
                  transform: "translateZ(50px)",
                  animation: "float 5s ease-in-out infinite reverse",
                }}
              >
                <p className="font-body text-[10px] font-semibold text-gold tracking-widest uppercase">Premium</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
