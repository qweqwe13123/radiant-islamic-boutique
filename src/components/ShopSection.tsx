import { useRef, useState, useEffect } from "react";
import { ShoppingBag, Heart, Eye } from "lucide-react";
import product1 from "@/assets/product-1.jpg";
import product2 from "@/assets/product-2.jpg";
import product3 from "@/assets/product-3.jpg";

const products = [
  { id: 1, name: "Шёлковый хиджаб Sahara", price: "3 200 ₽", tag: "Новинка", img: product1 },
  { id: 2, name: "Абайя Classic Noir", price: "8 900 ₽", tag: "Бестселлер", img: product2 },
  { id: 3, name: "Комплект Rose Garden", price: "12 500 ₽", tag: "Лимитед", img: product3 },
];

const ProductCard = ({ product, index }: { product: typeof products[0]; index: number }) => {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);
  const [hovered, setHovered] = useState(false);

  useEffect(() => {
    const obs = new IntersectionObserver(([e]) => e.isIntersecting && setVisible(true), { threshold: 0.2 });
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      className={`group transition-all duration-700 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-20"}`}
      style={{ transitionDelay: `${index * 200}ms` }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <div className="relative overflow-hidden rounded-2xl mb-5 bg-card aspect-[3/4]">
        <img src={product.img} alt={product.name} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
        <div className="absolute top-4 left-4">
          <span className="px-3 py-1.5 rounded-full glass-panel text-[9px] font-body font-semibold tracking-[0.2em] uppercase text-foreground">{product.tag}</span>
        </div>
        <div className={`absolute inset-0 bg-foreground/10 backdrop-blur-[2px] flex items-center justify-center gap-3 transition-opacity duration-500 ${hovered ? "opacity-100" : "opacity-0"}`}>
          <button className="w-12 h-12 rounded-full bg-background/90 flex items-center justify-center hover:bg-rose hover:text-white transition-all duration-300 hover:scale-110"><Heart size={16} /></button>
          <button className="w-12 h-12 rounded-full bg-background/90 flex items-center justify-center hover:bg-rose hover:text-white transition-all duration-300 hover:scale-110"><Eye size={16} /></button>
          <button className="w-12 h-12 rounded-full bg-background/90 flex items-center justify-center hover:bg-rose hover:text-white transition-all duration-300 hover:scale-110"><ShoppingBag size={16} /></button>
        </div>
      </div>
      <div className="px-1">
        <h3 className="font-display text-lg font-medium text-foreground group-hover:text-rose transition-colors duration-300 mb-1">{product.name}</h3>
        <p className="font-body text-sm text-muted-foreground">{product.price}</p>
      </div>
    </div>
  );
};

const ShopSection = () => {
  const headerRef = useRef<HTMLDivElement>(null);
  const [headerVisible, setHeaderVisible] = useState(false);

  useEffect(() => {
    const obs = new IntersectionObserver(([e]) => e.isIntersecting && setHeaderVisible(true), { threshold: 0.3 });
    if (headerRef.current) obs.observe(headerRef.current);
    return () => obs.disconnect();
  }, []);

  return (
    <section id="shop" className="py-24 md:py-32 relative">
      <div className="max-w-7xl mx-auto px-5 sm:px-8">
        <div ref={headerRef} className={`flex flex-col md:flex-row md:items-end md:justify-between mb-14 gap-6 transition-all duration-1000 ${headerVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}>
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-8 h-px bg-rose/50" />
              <span className="text-[10px] font-body font-semibold tracking-[0.4em] uppercase text-rose">Магазин</span>
            </div>
            <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-light text-foreground">
              Избранные <span className="italic gradient-earth">коллекции</span>
            </h2>
          </div>
          <a href="#" className="inline-flex items-center gap-2 px-6 py-3 rounded-full border border-foreground/20 text-[10px] font-body font-semibold tracking-[0.2em] uppercase text-foreground hover:bg-foreground hover:text-background transition-all duration-500 self-start md:self-auto">Все товары</a>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10">
          {products.map((p, i) => (<ProductCard key={p.id} product={p} index={i} />))}
        </div>
        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-4">
          {[
            { label: "Бесплатная доставка", sub: "от 5 000 ₽" },
            { label: "Натуральные ткани", sub: "100% качество" },
            { label: "Лёгкий возврат", sub: "14 дней" },
            { label: "Поддержка 24/7", sub: "всегда на связи" },
          ].map((f, i) => (
            <div key={i} className="text-center py-6 px-4 rounded-xl bg-card/50 border border-border/30">
              <p className="font-body text-xs font-semibold text-foreground mb-1">{f.label}</p>
              <p className="font-body text-[10px] text-muted-foreground">{f.sub}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ShopSection;
