import { useAnimatedReveal } from "@/hooks/useAnimatedReveal";
import { ArrowRight } from "lucide-react";
import { useState } from "react";

const services = [
  { num: "01", title: "Стайл-гайд", subtitle: "Персональный подход", desc: "Индивидуальная карта стиля с учётом ваших предпочтений, типа фигуры и образа жизни.", image: "https://images.unsplash.com/photo-1583391733956-3750e0ff4e8b?w=800&q=80", price: "от 5 000 ₽" },
  { num: "02", title: "Онлайн-курс", subtitle: "Modest Fashion Academy", desc: "Полный курс по стилю в modest fashion: от базового гардероба до создания сложных образов.", image: "https://images.unsplash.com/photo-1609505848912-b7c3b8b4beda?w=800&q=80", price: "от 12 000 ₽" },
  { num: "03", title: "Разбор гардероба", subtitle: "Капсульная система", desc: "Аудит текущего гардероба и создание функциональной капсулы из существующих вещей.", image: "https://images.unsplash.com/photo-1590735213920-68192a487bc2?w=800&q=80", price: "от 8 000 ₽" },
  { num: "04", title: "Подбор хиджаба", subtitle: "По форме лица", desc: "Профессиональный подбор формы, ткани и способа повязки хиджаба под вашу форму лица.", image: "https://images.unsplash.com/photo-1585487000160-6ebcfceb0d44?w=800&q=80", price: "от 3 000 ₽" },
];

const ServiceCard = ({ service, index }: { service: typeof services[0]; index: number }) => {
  const reveal = useAnimatedReveal({ type: "fade-up", delay: index * 100, duration: 1000 });
  const [hovered, setHovered] = useState(false);

  return (
    <div ref={reveal.ref} style={reveal.style} onMouseEnter={() => setHovered(true)} onMouseLeave={() => setHovered(false)} className="group border-b border-border/50 py-8 md:py-12 cursor-pointer">
      <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-center">
        <div className="md:col-span-1">
          <span className="font-body text-[11px] text-muted-foreground tracking-wider">{service.num}</span>
        </div>
        <div className="md:col-span-3">
          <span className="font-body text-[10px] tracking-[0.3em] uppercase text-brand block mb-1">{service.subtitle}</span>
          <h3 className="font-display text-2xl md:text-3xl font-light text-foreground group-hover:text-brand transition-colors duration-500">{service.title}</h3>
        </div>
        <div className="md:col-span-3 hidden md:block">
          <div className={`h-20 overflow-hidden transition-all duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] ${hovered ? "w-full opacity-100" : "w-0 opacity-0"}`}>
            <img src={service.image} alt={service.title} className="w-full h-full object-cover" />
          </div>
        </div>
        <div className="md:col-span-3">
          <p className="font-body text-sm text-muted-foreground leading-relaxed">{service.desc}</p>
        </div>
        <div className="md:col-span-2 flex items-center justify-between md:justify-end gap-4">
          <span className="font-body text-sm text-foreground">{service.price}</span>
          <div className={`w-10 h-10 border border-border flex items-center justify-center transition-all duration-500 ${hovered ? "bg-brand border-brand" : ""}`}>
            <ArrowRight size={14} className={`transition-all duration-500 ${hovered ? "text-brand-foreground translate-x-0.5" : "text-foreground"}`} />
          </div>
        </div>
      </div>
    </div>
  );
};

const ServicesSection = () => {
  const header = useAnimatedReveal({ type: "fade-up", delay: 0, duration: 1000 });

  return (
    <section id="services" className="py-24 md:py-36 relative">
      <div className="absolute top-0 left-1/2 w-[1px] h-20 bg-gradient-to-b from-transparent to-border/50 -translate-x-1/2" />
      <div className="max-w-[1400px] mx-auto px-6 md:px-12">
        <div ref={header.ref} style={header.style} className="mb-16">
          <span className="font-body text-[10px] tracking-[0.5em] uppercase text-brand mb-4 block">Услуги</span>
          <h2 className="font-display text-4xl md:text-6xl font-light tracking-[0.02em] text-foreground">
            Персональный<br /><span className="italic">стиль</span>
          </h2>
        </div>
        <div>
          {services.map((s, i) => <ServiceCard key={s.num} service={s} index={i} />)}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
