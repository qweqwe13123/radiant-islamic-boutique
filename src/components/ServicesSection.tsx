import { ArrowUpRight } from "lucide-react";
import serviceGuide from "@/assets/service-guide.jpg";
import serviceCourse from "@/assets/service-course.jpg";
import serviceWardrobe from "@/assets/service-wardrobe.jpg";
import serviceHijab from "@/assets/service-hijab.jpg";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import { useTilt } from "@/hooks/useTilt";

const services = [
  {
    title: "Стайл-гайд",
    subtitle: "Руководство по стилю",
    description: "Полное пошаговое руководство по созданию стильного и скромного гардероба. Все секреты сочетания цветов, тканей и силуэтов.",
    image: serviceGuide,
    price: "2 990 ₽",
    tag: "PDF ГАЙД",
    num: "01",
  },
  {
    title: "Онлайн-курс",
    subtitle: "Искусство скромной моды",
    description: "Углублённый курс по построению гардероба, подбору образов на все случаи жизни и выражению себя через одежду.",
    image: serviceCourse,
    price: "12 990 ₽",
    tag: "ВИДЕО КУРС",
    num: "02",
  },
  {
    title: "Разбор гардероба",
    subtitle: "Персональная консультация",
    description: "Индивидуальный разбор вашего гардероба с рекомендациями по обновлению. Определим ваш стиль и создадим капсулу.",
    image: serviceWardrobe,
    price: "7 990 ₽",
    tag: "КОНСУЛЬТАЦИЯ",
    num: "03",
  },
  {
    title: "Подбор хиджаба",
    subtitle: "По форме лица",
    description: "Профессиональный подбор идеального хиджаба с учётом формы вашего лица, цветотипа и личных предпочтений.",
    image: serviceHijab,
    price: "4 990 ₽",
    tag: "ПОДБОР",
    num: "04",
  },
];

const ServiceCard = ({ service, index }: { service: typeof services[0]; index: number }) => {
  const { ref, handleMouseMove, handleMouseLeave } = useTilt<HTMLDivElement>(8);

  return (
    <div
      className={`reveal reveal-delay-${(index % 4) + 1} group grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-center cursor-pointer`}
    >
      {/* Image with 3D tilt */}
      <div
        ref={ref}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        className={`relative overflow-hidden ${index % 2 !== 0 ? "md:order-2" : ""}`}
        style={{ transition: "transform 0.5s cubic-bezier(0.16, 1, 0.3, 1)" }}
      >
        <img
          src={service.image}
          alt={service.title}
          loading="lazy"
          width={800}
          height={600}
          className="w-full h-64 md:h-80 object-cover group-hover:scale-105 transition-transform duration-700 ease-[cubic-bezier(0.16,1,0.3,1)]"
        />
        {/* Shine overlay on hover */}
        <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />
        <div className="absolute top-4 left-4 glass px-3 py-1.5">
          <span className="text-[10px] font-body font-semibold tracking-[0.2em] uppercase text-foreground">
            {service.tag}
          </span>
        </div>
        <span className="absolute bottom-4 right-4 font-display text-6xl md:text-7xl font-black text-primary-foreground/10 select-none leading-none">
          {service.num}
        </span>
      </div>

      {/* Content */}
      <div className={`space-y-4 ${index % 2 !== 0 ? "md:order-1 md:text-right" : ""}`}>
        <div>
          <span className="font-body text-[10px] font-semibold tracking-[0.3em] uppercase text-gold">
            {service.subtitle}
          </span>
          <h3 className="font-display text-2xl md:text-3xl font-bold text-foreground mt-2 group-hover:text-gold transition-colors duration-300">
            {service.title}
          </h3>
        </div>
        <p className="font-body text-sm text-muted-foreground leading-relaxed max-w-md">
          {service.description}
        </p>
        <div className={`flex items-center gap-4 pt-4 ${index % 2 !== 0 ? "md:justify-end" : ""}`}>
          <span className="font-display text-xl font-bold text-foreground">{service.price}</span>
          <div className="p-2.5 border border-border group-hover:border-gold group-hover:bg-gold group-hover:text-gold-foreground transition-all duration-500 group-hover:rotate-45 group-hover:shadow-[0_5px_20px_hsl(var(--gold)/0.3)]">
            <ArrowUpRight size={16} />
          </div>
        </div>
      </div>
    </div>
  );
};

const ServicesSection = () => {
  const ref = useScrollReveal<HTMLElement>();

  return (
    <section ref={ref} id="services" className="py-20 md:py-32 bg-background relative">
      {/* Decorative line */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-px h-20 bg-gradient-to-b from-transparent to-gold/30" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div className="reveal flex items-end justify-between mb-16 md:mb-20">
          <div>
            <p className="text-xs font-body font-medium tracking-[0.3em] uppercase text-gold mb-3">
              Что мы предлагаем
            </p>
            <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold text-foreground">
              Наши <span className="italic gradient-text">услуги</span>
            </h2>
          </div>
        </div>

        {/* Services */}
        <div className="space-y-16 md:space-y-24">
          {services.map((service, index) => (
            <ServiceCard key={index} service={service} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
