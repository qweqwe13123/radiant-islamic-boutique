import { ArrowUpRight } from "lucide-react";
import product1 from "@/assets/product-1.jpg";
import product2 from "@/assets/product-2.jpg";
import product3 from "@/assets/product-3.jpg";
import { useAnimatedReveal } from "@/hooks/useAnimatedReveal";
import { useTilt } from "@/hooks/useTilt";

const products = [
  { name: "Шёлковый хиджаб «Нежность»", price: "3 490 ₽", image: product1, category: "Хиджабы" },
  { name: "Атласный хиджаб «Ночь»", price: "2 990 ₽", image: product2, category: "Хиджабы" },
  { name: "Набор украшений «Золото»", price: "5 490 ₽", image: product3, category: "Аксессуары" },
];

const animTypes = ["fade-up", "zoom-in", "fade-up"] as const;

const ProductCard = ({ product, index }: { product: typeof products[0]; index: number }) => {
  const { ref: tiltRef, handleMouseMove, handleMouseLeave } = useTilt<HTMLDivElement>(12);
  const reveal = useAnimatedReveal({ type: animTypes[index] as any, delay: index * 150, duration: 800 });

  return (
    <div ref={reveal.ref} style={reveal.style} className="group cursor-pointer">
      <div
        ref={tiltRef}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        className="relative overflow-hidden bg-background mb-4"
        style={{ transition: "transform 0.5s cubic-bezier(0.16, 1, 0.3, 1)" }}
      >
        <img
          src={product.image}
          alt={product.name}
          loading="lazy"
          width={600}
          height={800}
          className="w-full h-[400px] md:h-[500px] object-cover group-hover:scale-110 transition-transform duration-1000 ease-[cubic-bezier(0.16,1,0.3,1)]"
        />
        {/* Animated shine sweep */}
        <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-out pointer-events-none" />
        {/* Gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-primary/70 via-primary/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
        
        {/* Add to cart */}
        <div className="absolute bottom-0 left-0 right-0 p-5 translate-y-6 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)]">
          <button className="w-full py-3.5 bg-primary-foreground text-primary font-body text-xs font-medium tracking-[0.15em] uppercase hover:bg-gold hover:text-gold-foreground transition-all duration-300 hover:shadow-[0_5px_20px_hsl(var(--gold)/0.3)]">
            В корзину
          </button>
        </div>
        {/* Quick view */}
        <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-all duration-500 -translate-y-2 group-hover:translate-y-0 rotate-12 group-hover:rotate-0">
          <div className="w-10 h-10 glass flex items-center justify-center cursor-pointer hover:bg-gold hover:text-gold-foreground transition-all duration-300">
            <ArrowUpRight size={16} />
          </div>
        </div>
        {/* Category badge */}
        <div className="absolute top-4 left-4 opacity-0 group-hover:opacity-100 transition-all duration-500 translate-x-[-10px] group-hover:translate-x-0">
          <div className="glass px-3 py-1.5">
            <span className="text-[10px] font-body font-semibold tracking-widest uppercase text-foreground">
              {product.category}
            </span>
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
        <p className="font-display text-lg font-semibold text-foreground">
          {product.price}
        </p>
      </div>
    </div>
  );
};

const ShopSection = () => {
  const header = useAnimatedReveal({ type: "blur-in", duration: 900 });

  return (
    <section id="shop" className="py-24 md:py-36 bg-cream relative overflow-hidden">
      {/* Decorative animated orbs */}
      <div className="absolute top-20 right-0 w-80 h-80 rounded-full bg-gold/5 blur-3xl pointer-events-none animate-pulse-slow" />
      <div className="absolute bottom-20 left-0 w-64 h-64 rounded-full bg-gold/5 blur-3xl pointer-events-none animate-pulse-slow" style={{ animationDelay: "2s" }} />

      {/* Animated grid lines */}
      <div className="absolute inset-0 opacity-[0.02]" style={{
        backgroundImage: `linear-gradient(hsl(var(--gold)) 1px, transparent 1px), linear-gradient(90deg, hsl(var(--gold)) 1px, transparent 1px)`,
        backgroundSize: '80px 80px',
      }} />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div ref={header.ref} style={header.style} className="flex items-end justify-between mb-16 md:mb-20">
          <div>
            <p className="text-xs font-body font-medium tracking-[0.3em] uppercase text-gold mb-3">
              Магазин
            </p>
            <h2 className="font-display text-4xl sm:text-5xl md:text-6xl font-bold text-foreground">
              Новые <span className="italic gradient-text">поступления</span>
            </h2>
          </div>
          <a
            href="#"
            className="hidden sm:inline-flex items-center gap-2 font-body text-xs font-medium tracking-[0.15em] uppercase text-foreground line-draw hover:-translate-y-0.5 transition-transform"
          >
            Смотреть все
            <ArrowUpRight size={14} />
          </a>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10">
          {products.map((product, index) => (
            <ProductCard key={index} product={product} index={index} />
          ))}
        </div>

        <div className="sm:hidden mt-8 text-center">
          <a href="#" className="inline-flex items-center gap-2 font-body text-xs font-medium tracking-[0.15em] uppercase text-foreground line-draw">
            Смотреть все
            <ArrowUpRight size={14} />
          </a>
        </div>
      </div>
    </section>
  );
};

export default ShopSection;
