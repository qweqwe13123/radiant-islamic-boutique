const MarqueeSection = () => {
  const words = ["ХИДЖАБ", "АБАЯ", "СТИЛЬ", "ЭЛЕГАНТНОСТЬ", "МОДА", "NŪRA", "СКРОМНОСТЬ", "РОСКОШЬ"];
  const repeated = [...words, ...words, ...words];

  return (
    <section className="py-6 border-y border-border/50 overflow-hidden relative">
      <div className="flex animate-marquee whitespace-nowrap">
        {repeated.map((w, i) => (
          <span key={i} className="font-display text-lg md:text-2xl font-light tracking-[0.2em] text-foreground/15 mx-6 md:mx-10 select-none">
            {w}
            <span className="inline-block mx-6 md:mx-10 text-brand/30">✦</span>
          </span>
        ))}
      </div>
    </section>
  );
};

export default MarqueeSection;
