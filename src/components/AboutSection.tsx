import { useScrollReveal } from "@/hooks/useScrollReveal";

const stats = [
  { value: "500+", label: "Клиентов" },
  { value: "50+", label: "Образов" },
  { value: "4.9", label: "Рейтинг" },
];

const AboutSection = () => {
  const ref = useScrollReveal<HTMLElement>();

  return (
    <section ref={ref} id="about" className="py-20 md:py-32 bg-primary text-primary-foreground relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 right-0 w-96 h-96 rounded-full bg-gold/5 blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-64 h-64 rounded-full bg-gold/5 blur-3xl pointer-events-none" />

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
