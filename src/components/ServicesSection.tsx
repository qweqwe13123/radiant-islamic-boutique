import { useRef, useState, useEffect } from "react";
import { ArrowUpRight, Palette, BookOpen, Scissors, Sparkles } from "lucide-react";
import serviceGuide from "@/assets/service-guide.jpg";
import serviceCourse from "@/assets/service-course.jpg";
import serviceWardrobe from "@/assets/service-wardrobe.jpg";
import serviceHijab from "@/assets/service-hijab.jpg";

const services = [
  { num: "01", title: "Стайл-гайд", desc: "Персональные рекомендации по созданию элегантного гардероба.", img: serviceGuide, icon: BookOpen },
  { num: "02", title: "Онлайн-курс", desc: "Видеоуроки по сочетанию модных трендов с исламскими ценностями.", img: serviceCourse, icon: Palette },
  { num: "03", title: "Разбор гардероба", desc: "Полный аудит и составление капсульной коллекции.", img: serviceWardrobe, icon: Scissors },
  { num: "04", title: "Подбор хиджаба", desc: "Индивидуальный подбор по форме лица и цветотипу.", img: serviceHijab, icon: Sparkles },
];

const ServiceCard = ({ service, index }: { service: typeof services[0]; index: number }) => {
  const cardRef = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);
  const [hovered, setHovered] = useState(false);
  const [mouse, setMouse] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const obs = new IntersectionObserver(([e]) => e.isIntersecting && setVisible(true), { threshold: 0.2 });
    if (cardRef.current) obs.observe(cardRef.current);
    return () => obs.disconnect();
  }, []);

  const handleMouse = (e: React.MouseEvent) => {
    if (!cardRef.current) return;
    const r = cardRef.current.getBoundingClientRect();
    setMouse({ x: ((e.clientX - r.left) / r.width - 0.5) * 12, y: ((e.clientY - r.top) / r.height - 0.5) * 12 });
  };

  const Icon = service.icon;

  return (
    <div
      ref={cardRef}
      onMouseMove={handleMouse}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => { setHovered(false); setMouse({ x: 0, y: 0 }); }}
      className={`group relative transition-all duration-700 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-16"}`}
      style={{ transitionDelay: `${index * 150}ms`, perspective: "1000px" }}
    >
      <div
        className="relative overflow-hidden rounded-2xl bg-card border border-border/50 transition-all duration-500 hover:shadow-2xl hover:shadow-rose/5 hover:border-rose/20"
        style={{
          transform: hovered ? `rotateY(${mouse.x * 0.5}deg) rotateX(${-mouse.y * 0.5}deg) translateZ(10px)` : "none",
          transition: "transform 0.5s cubic-bezier(0.16, 1, 0.3, 1), box-shadow 0.5s, border-color 0.5s",
        }}
      >
        <div className="relative h-64 overflow-hidden">
          <img src={service.img} alt={service.title} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
          <div className="absolute inset-0 bg-gradient-to-t from-card via-transparent to-transparent" />
          <div className="absolute top-4 left-4 w-10 h-10 rounded-full glass-panel flex items-center justify-center">
            <span className="font-display text-sm font-light text-foreground">{service.num}</span>
          </div>
          <div className="absolute top-4 right-4 w-10 h-10 rounded-full bg-rose/10 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500">
            <Icon size={16} className="text-rose" />
          </div>
        </div>
        <div className="p-6">
          <h3 className="font-display text-xl font-medium text-foreground mb-2 group-hover:text-rose transition-colors duration-300">{service.title}</h3>
          <p className="font-body text-xs text-muted-foreground leading-relaxed mb-4">{service.desc}</p>
          <div className="flex items-center gap-2 text-rose opacity-0 group-hover:opacity-100 translate-y-2 group-hover:translate-y-0 transition-all duration-500">
            <span className="text-[10px] font-body font-semibold tracking-[0.2em] uppercase">Подробнее</span>
            <ArrowUpRight size={12} />
          </div>
        </div>
      </div>
    </div>
  );
};

const ServicesSection = () => {
  const headerRef = useRef<HTMLDivElement>(null);
  const [headerVisible, setHeaderVisible] = useState(false);

  useEffect(() => {
    const obs = new IntersectionObserver(([e]) => e.isIntersecting && setHeaderVisible(true), { threshold: 0.3 });
    if (headerRef.current) obs.observe(headerRef.current);
    return () => obs.disconnect();
  }, []);

  return (
    <section id="services" className="py-24 md:py-32 relative overflow-hidden">
      <div className="absolute top-0 right-0 w-96 h-96 rounded-full bg-rose/[0.03] blur-[120px] pointer-events-none" />
      <div className="max-w-7xl mx-auto px-5 sm:px-8">
        <div ref={headerRef} className={`text-center mb-16 md:mb-20 transition-all duration-1000 ${headerVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}>
          <div className="flex items-center justify-center gap-3 mb-4">
            <div className="w-12 h-px bg-rose/50" />
            <span className="text-[10px] font-body font-semibold tracking-[0.4em] uppercase text-rose">Наши услуги</span>
            <div className="w-12 h-px bg-rose/50" />
          </div>
          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-light text-foreground mb-4">
            Ваш путь к <span className="italic gradient-rose">совершенному</span> стилю
          </h2>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((s, i) => (<ServiceCard key={s.num} service={s} index={i} />))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
