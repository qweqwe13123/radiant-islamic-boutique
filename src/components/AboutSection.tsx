import { useAnimatedReveal } from "@/hooks/useAnimatedReveal";
import { useMouseParallax } from "@/hooks/useMouseParallax";
import { useCountUp } from "@/hooks/useCountUp";

const AboutSection = () => {
  const p = useMouseParallax(0.3);
  const header = useAnimatedReveal({ type: "flip-up", delay: 100, duration: 1000 });
  const text = useAnimatedReveal({ type: "blur-in", delay: 300, duration: 900 });
  const stats = useAnimatedReveal({ type: "fade-up", delay: 500, duration: 800 });

  const clients = useCountUp(500, 2000);
  const looks = useCountUp(50, 1500);
  const rating = useCountUp(49, 1800);

  return (
    <section id="about" className="py-24 md:py-36 bg-primary text-primary-foreground relative overflow-hidden">
      {/* Animated gradient orbs */}
      <div
        className="absolute top-0 right-0 w-[500px] h-[500px] rounded-full pointer-events-none"
        style={{
          background: "radial-gradient(circle, hsl(var(--gold) / 0.08) 0%, transparent 70%)",
          transform: `translate(${p.x}px, ${p.y}px)`,
          transition: "transform 1.5s cubic-bezier(0.16, 1, 0.3, 1)",
          filter: "blur(60px)",
          animation: "morph 12s ease-in-out infinite",
        }}
      />
      <div
        className="absolute bottom-0 left-0 w-[400px] h-[400px] rounded-full pointer-events-none"
        style={{
          background: "radial-gradient(circle, hsl(var(--gold) / 0.06) 0%, transparent 70%)",
          transform: `translate(${-p.x * 0.8}px, ${-p.y * 0.8}px)`,
          transition: "transform 1.2s cubic-bezier(0.16, 1, 0.3, 1)",
          filter: "blur(50px)",
          animation: "morph 18s ease-in-out infinite reverse",
        }}
      />

      {/* Floating geometric shapes */}
      <div
        className="absolute top-20 left-20 w-16 h-16 border border-gold/10 pointer-events-none"
        style={{
          transform: `rotate(45deg) translate(${-p.x * 0.4}px, ${-p.y * 0.4}px)`,
          transition: "transform 0.8s cubic-bezier(0.16, 1, 0.3, 1)",
          animation: "float 7s ease-in-out infinite",
        }}
      />
      <div
        className="absolute bottom-32 right-16 w-10 h-10 rounded-full border border-gold/10 pointer-events-none"
        style={{
          transform: `translate(${p.x * 0.6}px, ${p.y * 0.6}px)`,
          transition: "transform 0.9s cubic-bezier(0.16, 1, 0.3, 1)",
          animation: "float 5s ease-in-out infinite reverse",
        }}
      />
      <div
        className="absolute top-1/2 right-1/4 w-3 h-3 rounded-full bg-gold/20 pointer-events-none"
        style={{
          transform: `translate(${p.x * 1.2}px, ${p.y * 1.2}px)`,
          transition: "transform 0.6s cubic-bezier(0.16, 1, 0.3, 1)",
          animation: "float 4s ease-in-out infinite",
        }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-3xl mx-auto text-center space-y-8">
          <div ref={header.ref} style={header.style}>
            <p className="text-xs font-body font-medium tracking-[0.3em] uppercase text-gold mb-4">
              О нас
            </p>
            <h2 className="font-display text-4xl sm:text-5xl md:text-6xl font-bold leading-tight">
              Мы верим, что скромность —{" "}
              <span className="italic gradient-text">это сила</span>
            </h2>
          </div>

          <div ref={text.ref} style={text.style}>
            <p className="font-body text-primary-foreground/70 text-base md:text-lg leading-relaxed">
              NŪRA — это пространство для мусульманских женщин, которые хотят выглядеть
              стильно и элегантно, не жертвуя своими ценностями. Мы создаём гайды,
              проводим курсы и подбираем идеальные образы, чтобы каждая из вас чувствовала
              себя уверенно и красиво.
            </p>
          </div>

          {/* Animated stats */}
          <div ref={stats.ref} style={stats.style} className="pt-8">
            <div className="grid grid-cols-3 gap-8">
              <div className="text-center" ref={clients.ref as any}>
                <p className="font-display text-4xl md:text-5xl font-bold text-gold tabular-nums">
                  {clients.count}+
                </p>
                <p className="font-body text-xs tracking-widest uppercase text-primary-foreground/50 mt-2">Клиентов</p>
              </div>
              <div className="text-center" ref={looks.ref as any}>
                <p className="font-display text-4xl md:text-5xl font-bold text-gold tabular-nums">
                  {looks.count}+
                </p>
                <p className="font-body text-xs tracking-widest uppercase text-primary-foreground/50 mt-2">Образов</p>
              </div>
              <div className="text-center" ref={rating.ref as any}>
                <p className="font-display text-4xl md:text-5xl font-bold text-gold tabular-nums">
                  {(rating.count / 10).toFixed(1)}
                </p>
                <p className="font-body text-xs tracking-widest uppercase text-primary-foreground/50 mt-2">Рейтинг</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
