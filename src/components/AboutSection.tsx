import { useAnimatedReveal } from "@/hooks/useAnimatedReveal";
import { useEffect, useRef, useState } from "react";

const AboutSection = () => {
  const header = useAnimatedReveal({ type: "fade-up", delay: 0, duration: 1000 });
  const img = useAnimatedReveal({ type: "fade-up", delay: 200, duration: 1200 });
  const text = useAnimatedReveal({ type: "fade-up", delay: 400, duration: 1000 });
  const values = useAnimatedReveal({ type: "fade-up", delay: 600, duration: 1000 });

  const [parallax, setParallax] = useState(0);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const onScroll = () => {
      if (!sectionRef.current) return;
      const rect = sectionRef.current.getBoundingClientRect();
      setParallax((-rect.top / window.innerHeight) * 60);
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const pillars = [
    { num: "01", title: "Скромность", desc: "Элегантность в каждой детали без компромиссов" },
    { num: "02", title: "Качество", desc: "Только натуральные ткани премиального класса" },
    { num: "03", title: "Стиль", desc: "Современный дизайн с уважением к традициям" },
  ];

  return (
    <section ref={sectionRef} id="about" className="py-24 md:py-36 relative overflow-hidden">
      <div className="max-w-[1400px] mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 md:gap-24 items-center">
          <div ref={img.ref} style={img.style} className="relative">
            <div className="aspect-[3/4] overflow-hidden relative">
              <img src="https://images.unsplash.com/photo-1590735213920-68192a487bc2?w=800&q=80" alt="NŪRA Philosophy" className="w-full h-full object-cover" style={{ transform: `translateY(${parallax}px)` }} />
            </div>
            <div className="absolute -bottom-6 -right-6 md:-right-12 bg-brand px-6 py-4">
              <span className="font-display text-3xl font-light text-brand-foreground">2026</span>
              <span className="block font-body text-[9px] tracking-[0.3em] uppercase text-brand-foreground/70">Коллекция</span>
            </div>
          </div>
          <div>
            <div ref={header.ref} style={header.style} className="mb-10">
              <span className="font-body text-[10px] tracking-[0.5em] uppercase text-brand mb-4 block">О бренде</span>
              <h2 className="font-display text-4xl md:text-5xl font-light text-foreground leading-[1.1]">
                Философия<br /><span className="italic">NŪRA</span>
              </h2>
            </div>
            <div ref={text.ref} style={text.style} className="space-y-6 mb-12">
              <p className="font-body text-sm md:text-base text-muted-foreground leading-[1.8]">
                NŪRA — это пространство, где скромность встречается с высокой модой. Мы создаём одежду для современных мусульманок, которые не готовы выбирать между стилем и ценностями.
              </p>
              <p className="font-body text-sm md:text-base text-muted-foreground leading-[1.8]">
                Каждое изделие — результат кропотливой работы наших дизайнеров, вдохновлённых архитектурой исламского искусства и современными тенденциями мировой моды.
              </p>
            </div>
            <div ref={values.ref} style={values.style} className="space-y-6">
              {pillars.map((p) => (
                <div key={p.num} className="flex gap-6 group">
                  <span className="font-body text-[11px] text-brand tracking-wider mt-1">{p.num}</span>
                  <div>
                    <h4 className="font-display text-xl font-light text-foreground mb-1">{p.title}</h4>
                    <p className="font-body text-sm text-muted-foreground">{p.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
