import { useAnimatedReveal } from "@/hooks/useAnimatedReveal";
import { useEffect, useRef, useState, useCallback } from "react";

const images = [
  "https://images.unsplash.com/photo-1590735213920-68192a487bc2?w=500&q=80",
  "https://images.unsplash.com/photo-1609505848912-b7c3b8b4beda?w=500&q=80",
  "https://images.unsplash.com/photo-1583391733956-3750e0ff4e8b?w=500&q=80",
  "https://images.unsplash.com/photo-1585487000160-6ebcfceb0d44?w=500&q=80",
  "https://images.unsplash.com/photo-1590735213920-68192a487bc2?w=500&q=80",
  "https://images.unsplash.com/photo-1609505848912-b7c3b8b4beda?w=500&q=80",
];

const LookbookSection = () => {
  const header = useAnimatedReveal({ type: "fade-up", delay: 0, duration: 1000 });
  const containerRef = useRef<HTMLDivElement>(null);

  return (
    <section className="py-24 md:py-36 overflow-hidden">
      <div className="max-w-[1400px] mx-auto px-6 md:px-12">
        <div ref={header.ref} style={header.style} className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-16">
          <div>
            <span className="font-body text-[10px] tracking-[0.5em] uppercase text-brand mb-4 block">
              Лукбук
            </span>
            <h2 className="font-display text-4xl md:text-6xl font-light tracking-[0.02em] text-foreground">
              Вдохновение
            </h2>
          </div>
          <a href="#" className="font-body text-[11px] tracking-[0.3em] uppercase text-muted-foreground hover:text-foreground transition-colors duration-500 line-expand self-start md:self-auto">
            Весь лукбук
          </a>
        </div>
      </div>

      {/* Horizontal scroll gallery */}
      <div ref={containerRef} className="flex gap-4 md:gap-6 overflow-x-auto px-6 md:px-12 pb-4 snap-x snap-mandatory scrollbar-hide"
        style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
      >
        {images.map((img, i) => {
          const reveal = useAnimatedReveal({ type: "fade-up", delay: i * 100, duration: 1000 });
          return (
            <div
              key={i}
              ref={reveal.ref}
              style={reveal.style}
              className="flex-shrink-0 w-[280px] md:w-[350px] snap-center group cursor-pointer"
            >
              <div className="aspect-[3/4] overflow-hidden relative">
                <img
                  src={img}
                  alt={`Lookbook ${i + 1}`}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-[1200ms] ease-[cubic-bezier(0.22,1,0.36,1)]"
                />
                <div className="absolute inset-0 bg-background/0 group-hover:bg-background/20 transition-colors duration-700" />
              </div>
              <span className="block mt-3 font-body text-[10px] tracking-[0.3em] uppercase text-muted-foreground">
                Look {String(i + 1).padStart(2, "0")}
              </span>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default LookbookSection;
