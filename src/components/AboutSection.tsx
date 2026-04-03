import { useScrollReveal } from "@/hooks/useScrollReveal";
import { useMouseParallax } from "@/hooks/useMouseParallax";

const AboutSection = () => {
  const ref = useScrollReveal<HTMLElement>();
  const p = useMouseParallax(0.3);

  return (
    <section ref={ref} id="about" className="py-20 md:py-32 bg-primary text-primary-foreground relative overflow-hidden">
      {/* Animated gradient orbs */}
      <div
        className="absolute top-0 right-0 w-96 h-96 rounded-full pointer-events-none"
        style={{
          background: "radial-gradient(circle, hsl(var(--gold) / 0.08) 0%, transparent 70%)",
          transform: `translate(${p.x * 0.5}px, ${p.y * 0.5}px)`,
          transition: "transform 1.2s cubic-bezier(0.16, 1, 0.3, 1)",
          filter: "blur(40px)",
        }}
      />
      <div
        className="absolute bottom-0 left-0 w-64 h-64 rounded-full pointer-events-none"
        style={{
          background: "radial-gradient(circle, hsl(var(--gold) / 0.06) 0%, transparent 70%)",
          transform: `translate(${-p.x * 0.8}px, ${-p.y * 0.8}px)`,
          transition: "transform 1s cubic-bezier(0.16, 1, 0.3, 1)",
          filter: "blur(40px)",
        }}
      />

      {/* Geometric decorations */}
      <div
        className="absolute top-20 left-20 w-12 h-12 border border-gold/10 pointer-events-none"
        style={{
          transform: `rotate(45deg) translate(${-p.x * 0.4}px, ${-p.y * 0.4}px)`,
          transition: "transform 0.8s cubic-bezier(0.16, 1, 0.3, 1)",
        }}
      />
      <div
        className="absolute bottom-20 right-20 w-8 h-8 rounded-full border border-gold/10 pointer-events-none"
        style={{
          transform: `translate(${p.x * 0.6}px, ${p.y * 0.6}px)`,
          transition: "transform 0.9s cubic-bezier(0.16, 1, 0.3, 1)",
        }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-3xl mx-auto text-center space-y-8">
          <p className="reveal text-xs font-body font-medium tracking-[0.3em] uppercase text-gold">
            О нас
          </p>
          <h2 className="reveal reveal-delay-1 font-display text-3xl sm:text-4xl md:text-5xl font-bold leading-tight">
            Мы верим, что скромность —{" "}
            <span className="italic gradient-text">это сила</span>
          </h2>
          <p className="reveal reveal-delay-2 font-body text-primary-foreground/70 text-base md:text-lg leading-relaxed">
            NŪRA — это пространство для мусульманских женщин, которые хотят выглядеть 
            стильно и элегантно, не жертвуя своими ценностями. Мы создаём гайды, 
            проводим курсы и подбираем идеальные образы, чтобы каждая из вас чувствовала 
            себя уверенно и красиво.
          </p>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
