import { useRef, useState, useEffect } from "react";
import { CheckCircle2 } from "lucide-react";

const values = [
  "Уважение к традициям и современному стилю",
  "Индивидуальный подход к каждой клиентке",
  "Только натуральные и премиальные ткани",
  "Поддержка на каждом этапе вашего стиля",
];

const AboutSection = () => {
  const ref = useRef<HTMLElement>(null);
  const [visible, setVisible] = useState(false);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const obs = new IntersectionObserver(
      ([e]) => e.isIntersecting && setVisible(true),
      { threshold: 0.2 }
    );
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, []);

  const handleMouse = (e: React.MouseEvent) => {
    setMousePos({
      x: (e.clientX / window.innerWidth - 0.5) * 2,
      y: (e.clientY / window.innerHeight - 0.5) * 2,
    });
  };

  return (
    <section id="about" ref={ref} onMouseMove={handleMouse} className="py-24 md:py-32 relative overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <div
          className="absolute top-20 right-20 w-72 h-72 rounded-full animate-morph"
          style={{
            background: "radial-gradient(circle, hsl(var(--terra) / 0.06), transparent 70%)",
            transform: `translate(${mousePos.x * 15}px, ${mousePos.y * 10}px)`,
            transition: "transform 1.5s ease-out",
          }}
        />
        <div
          className="absolute bottom-20 left-20 w-48 h-48 rounded-full animate-breathe"
          style={{
            background: "radial-gradient(circle, hsl(var(--sage) / 0.08), transparent 70%)",
            transform: `translate(${-mousePos.x * 10}px, ${-mousePos.y * 8}px)`,
            transition: "transform 1.8s ease-out",
          }}
        />
      </div>

      <div className="max-w-7xl mx-auto px-5 sm:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className={`transition-all duration-1000 ${visible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-16"}`}>
            <div className="relative">
              <div className="font-display text-[120px] md:text-[180px] font-light leading-none text-foreground/[0.03] absolute -top-16 -left-8 select-none pointer-events-none">N</div>
              <div className="relative grid grid-cols-2 gap-4">
                <div className="space-y-4">
                  <div className="rounded-2xl bg-rose/5 border border-rose/10 p-8 text-center">
                    <p className="font-display text-4xl font-light text-rose mb-1">4.9</p>
                    <p className="font-body text-[10px] tracking-[0.2em] uppercase text-muted-foreground">Рейтинг</p>
                  </div>
                  <div className="rounded-2xl bg-terra/5 border border-terra/10 p-8 text-center">
                    <p className="font-display text-4xl font-light text-terra mb-1">500+</p>
                    <p className="font-body text-[10px] tracking-[0.2em] uppercase text-muted-foreground">Клиенток</p>
                  </div>
                </div>
                <div className="space-y-4 pt-8">
                  <div className="rounded-2xl bg-sage/5 border border-sage/10 p-8 text-center">
                    <p className="font-display text-4xl font-light text-sage mb-1">50+</p>
                    <p className="font-body text-[10px] tracking-[0.2em] uppercase text-muted-foreground">Образов</p>
                  </div>
                  <div className="rounded-2xl bg-sand/10 border border-sand/20 p-8 text-center">
                    <p className="font-display text-4xl font-light text-foreground mb-1">3</p>
                    <p className="font-body text-[10px] tracking-[0.2em] uppercase text-muted-foreground">Года опыта</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className={`transition-all duration-1000 delay-300 ${visible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-16"}`}>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-8 h-px bg-rose/50" />
              <span className="text-[10px] font-body font-semibold tracking-[0.4em] uppercase text-rose">О нас</span>
            </div>
            <h2 className="font-display text-4xl md:text-5xl font-light text-foreground mb-6 leading-tight">
              Мы создаём <span className="italic gradient-rose">красоту</span> в каждой детали
            </h2>
            <p className="font-body text-sm text-muted-foreground leading-relaxed mb-8">
              NŪRA — это больше, чем магазин. Это пространство, где мода встречается с духовностью.
              Мы помогаем каждой женщине найти свой уникальный стиль, сохраняя верность традициям
              и принимая лучшее от современного мира моды.
            </p>
            <div className="space-y-4 mb-10">
              {values.map((v, i) => (
                <div key={i} className={`flex items-start gap-3 transition-all duration-700 ${visible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-8"}`} style={{ transitionDelay: `${600 + i * 150}ms` }}>
                  <CheckCircle2 size={16} className="text-rose mt-0.5 flex-shrink-0" />
                  <p className="font-body text-sm text-foreground">{v}</p>
                </div>
              ))}
            </div>
            <a href="#contact" className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-foreground text-background font-body text-[11px] font-semibold tracking-[0.2em] uppercase hover:bg-rose transition-colors duration-500">
              Связаться с нами
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
