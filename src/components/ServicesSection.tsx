import { ArrowUpRight } from "lucide-react";
import serviceGuide from "@/assets/service-guide.jpg";
import serviceCourse from "@/assets/service-course.jpg";
import serviceWardrobe from "@/assets/service-wardrobe.jpg";
import serviceHijab from "@/assets/service-hijab.jpg";

const services = [
  {
    title: "Стайл-гайд",
    subtitle: "Руководство по стилю",
    description: "Полное пошаговое руководство по созданию стильного и скромного гардероба. Все секреты сочетания цветов, тканей и силуэтов.",
    image: serviceGuide,
    price: "2 990 ₽",
    tag: "PDF ГАЙД",
  },
  {
    title: "Онлайн-курс",
    subtitle: "Искусство скромной моды",
    description: "Углублённый курс по построению гардероба, подбору образов на все случаи жизни и выражению себя через одежду.",
    image: serviceCourse,
    price: "12 990 ₽",
    tag: "ВИДЕО КУРС",
  },
  {
    title: "Разбор гардероба",
    subtitle: "Персональная консультация",
    description: "Индивидуальный разбор вашего гардероба с рекомендациями по обновлению. Определим ваш стиль и создадим капсулу.",
    image: serviceWardrobe,
    price: "7 990 ₽",
    tag: "КОНСУЛЬТАЦИЯ",
  },
  {
    title: "Подбор хиджаба",
    subtitle: "По форме лица",
    description: "Профессиональный подбор идеального хиджаба с учётом формы вашего лица, цветотипа и личных предпочтений.",
    image: serviceHijab,
    price: "4 990 ₽",
    tag: "ПОДБОР",
  },
];

const ServicesSection = () => {
  return (
    <section id="services" className="py-20 md:py-32 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div className="flex items-end justify-between mb-12 md:mb-16">
          <div>
            <p className="text-xs font-body font-medium tracking-[0.3em] uppercase text-gold mb-3">
              Что мы предлагаем
            </p>
            <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold text-foreground">
              Наши услуги
            </h2>
          </div>
        </div>

        {/* Services grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="group cursor-pointer border border-border hover:border-gold transition-all duration-300"
            >
              <div className="relative overflow-hidden">
                <img
                  src={service.image}
                  alt={service.title}
                  loading="lazy"
                  width={800}
                  height={600}
                  className="w-full h-56 md:h-64 object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute top-4 left-4">
                  <span className="px-3 py-1 bg-background/90 backdrop-blur-sm text-[10px] font-body font-semibold tracking-[0.2em] uppercase text-foreground">
                    {service.tag}
                  </span>
                </div>
              </div>
              <div className="p-6 md:p-8">
                <div className="flex items-start justify-between mb-3">
                  <div>
                    <h3 className="font-display text-xl md:text-2xl font-bold text-foreground">
                      {service.title}
                    </h3>
                    <p className="font-body text-sm text-gold mt-1">{service.subtitle}</p>
                  </div>
                  <div className="p-2 border border-border group-hover:border-gold group-hover:bg-gold group-hover:text-gold-foreground transition-all duration-300">
                    <ArrowUpRight size={16} />
                  </div>
                </div>
                <p className="font-body text-sm text-muted-foreground leading-relaxed mb-4">
                  {service.description}
                </p>
                <div className="flex items-center justify-between pt-4 border-t border-border">
                  <span className="font-display text-lg font-bold text-foreground">{service.price}</span>
                  <span className="font-body text-xs font-medium tracking-[0.15em] uppercase text-gold">
                    Подробнее
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
