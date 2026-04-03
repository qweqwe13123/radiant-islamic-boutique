const words = ["Хиджабы", "Абайи", "Аксессуары", "Стиль", "Элегантность", "Скромность", "Гардероб", "Красота"];

const MarqueeSection = () => {
  return (
    <section className="py-6 md:py-10 border-y border-border/50 overflow-hidden relative">
      <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-background to-transparent z-10" />
      <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-background to-transparent z-10" />
      <div className="flex animate-marquee whitespace-nowrap">
        {[...words, ...words, ...words, ...words].map((w, i) => (
          <span key={i} className="flex items-center gap-6 mx-6">
            <span className="font-display text-3xl md:text-4xl font-light text-foreground/10 italic">{w}</span>
            <span className="w-1.5 h-1.5 rounded-full bg-rose/30" />
          </span>
        ))}
      </div>
    </section>
  );
};

export default MarqueeSection;
