const items = [
  "ХИДЖАБЫ",
  "✦",
  "СТИЛЬ",
  "✦",
  "ЭЛЕГАНТНОСТЬ",
  "✦",
  "ГАРМОНИЯ",
  "✦",
  "КУРСЫ",
  "✦",
  "МОДА",
  "✦",
  "КРАСОТА",
  "✦",
];

const MarqueeSection = () => {
  return (
    <div className="py-6 bg-primary overflow-hidden relative">
      {/* Gradient edges for infinite feel */}
      <div className="absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-primary to-transparent z-10 pointer-events-none" />
      <div className="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-primary to-transparent z-10 pointer-events-none" />
      
      <div className="flex whitespace-nowrap marquee">
        {[...items, ...items].map((item, i) => (
          <span
            key={i}
            className={`font-display text-sm md:text-base font-medium tracking-[0.3em] uppercase mx-4 md:mx-6 ${
              item === "✦" ? "text-gold" : "text-primary-foreground/80"
            }`}
          >
            {item}
          </span>
        ))}
      </div>
    </div>
  );
};

export default MarqueeSection;
