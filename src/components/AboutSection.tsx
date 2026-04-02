const AboutSection = () => {
  return (
    <section id="about" className="py-20 md:py-32 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center space-y-6">
          <p className="text-xs font-body font-medium tracking-[0.3em] uppercase text-gold">
            О нас
          </p>
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold text-foreground leading-tight">
            Мы верим, что скромность —{" "}
            <span className="italic text-gold">это сила</span>
          </h2>
          <p className="font-body text-muted-foreground text-base md:text-lg leading-relaxed">
            NŪRA — это пространство для мусульманских женщин, которые хотят выглядеть 
            стильно и элегантно, не жертвуя своими ценностями. Мы создаём гайды, 
            проводим курсы и подбираем идеальные образы, чтобы каждая из вас чувствовала 
            себя уверенно и красиво.
          </p>
          <div className="grid grid-cols-3 gap-8 pt-8 border-t border-border">
            <div>
              <p className="font-display text-2xl md:text-3xl font-bold text-foreground">500+</p>
              <p className="font-body text-xs text-muted-foreground mt-1 tracking-wide uppercase">Клиентов</p>
            </div>
            <div>
              <p className="font-display text-2xl md:text-3xl font-bold text-foreground">50+</p>
              <p className="font-body text-xs text-muted-foreground mt-1 tracking-wide uppercase">Образов</p>
            </div>
            <div>
              <p className="font-display text-2xl md:text-3xl font-bold text-foreground">4.9</p>
              <p className="font-body text-xs text-muted-foreground mt-1 tracking-wide uppercase">Рейтинг</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
