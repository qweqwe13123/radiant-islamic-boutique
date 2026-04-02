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
    <div className="py-6 bg-primary overflow-hidden">
      <div className="flex whitespace-nowrap marquee">
        {[...items, ...items].map((item, i) => (
          <span
            key={i}
            className="font-display text-sm md:text-base font-medium tracking-[0.3em] uppercase text-primary-foreground/80 mx-4 md:mx-6"
          >
            {item}
          </span>
        ))}
      </div>
    </div>
  );
};

export default MarqueeSection;
