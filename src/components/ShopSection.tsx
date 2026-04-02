import { ArrowUpRight } from "lucide-react";
import product1 from "@/assets/product-1.jpg";
import product2 from "@/assets/product-2.jpg";
import product3 from "@/assets/product-3.jpg";
import { useScrollReveal } from "@/hooks/useScrollReveal";

const products = [
  {
    name: "Шёлковый хиджаб «Нежность»",
    price: "3 490 ₽",
    image: product1,
    category: "Хиджабы",
  },
  {
    name: "Атласный хиджаб «Ночь»",
    price: "2 990 ₽",
    image: product2,
    category: "Хиджабы",
  },
  {
    name: "Набор украшений «Золото»",
    price: "5 490 ₽",
    image: product3,
    category: "Аксессуары",
  },
];

const ShopSection = () => {
  const ref = useScrollReveal<HTMLElement>();

  return (
    <section ref={ref} id="shop" className="py-20 md:py-32 bg-cream relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-20 right-0 w-64 h-64 rounded-full bg-gold/5 blur-3xl pointer-events-none" />
      <div className="absolute bottom-20 left-0 w-48 h-48 rounded-full bg-gold/5 blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="reveal flex items-end justify-between mb-12 md:mb-16">
          <div>
            <p className="text-xs font-body font-medium tracking-[0.3em] uppercase text-gold mb-3">
              Магазин
            </p>
            <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold text-foreground">
              Новые <span className="italic gradient-text">поступления</span>
            </h2>
          </div>
          <a
            href="#"
            className="hidden sm:inline-flex items-center gap-2 font-body text-xs font-medium tracking-[0.15em] uppercase text-foreground line-draw"
          >
            Смотреть все
            <ArrowUpRight size={14} />
          </a>
        </div>

        {/* Products grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {products.map((product, index) => (
            <div key={index} className={`reveal reveal-delay-${index + 1} group cursor-pointer magnetic-hover`}>
              <div className="relative overflow-hidden bg-background mb-4">
                <img
                  src={product.image}
                  alt={product.name}
                  loading="lazy"
                  width={600}
                  height={800}
                  className="w-full h-[400px] md:h-[480px] object-cover group-hover:scale-105 transition-transform duration-700 ease-[cubic-bezier(0.16,1,0.3,1)]"
                />
                {/* Overlay on hover */}
                <div className="absolute inset-0 bg-gradient-to-t from-primary/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <div className="absolute bottom-0 left-0 right-0 p-5 translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)]">
                  <button className="w-full py-3.5 bg-primary-foreground text-primary font-body text-xs font-medium tracking-[0.15em] uppercase hover:bg-gold hover:text-gold-foreground transition-colors duration-300">
                    В корзину
                  </button>
                </div>
                {/* Quick view */}
                <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-all duration-300 translate-y-2 group-hover:translate-y-0">
                  <div className="w-10 h-10 glass flex items-center justify-center cursor-pointer hover:bg-gold hover:text-gold-foreground transition-colors">
                    <ArrowUpRight size={16} />
                  </div>
                </div>
              </div>
              <div className="space-y-1.5">
                <p className="font-body text-[10px] font-medium tracking-[0.2em] uppercase text-muted-foreground">
                  {product.category}
                </p>
                <h3 className="font-body text-sm font-medium text-foreground group-hover:text-gold transition-colors duration-300">
                  {product.name}
                </h3>
                <p className="font-display text-base font-semibold text-foreground">
                  {product.price}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Mobile see all */}
        <div className="sm:hidden mt-8 text-center">
          <a
            href="#"
            className="inline-flex items-center gap-2 font-body text-xs font-medium tracking-[0.15em] uppercase text-foreground line-draw"
          >
            Смотреть все
            <ArrowUpRight size={14} />
          </a>
        </div>
      </div>
    </section>
  );
};

export default ShopSection;
