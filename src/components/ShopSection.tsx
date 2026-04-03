import { useAnimatedReveal } from "@/hooks/useAnimatedReveal";
import { ArrowUpRight } from "lucide-react";
import { useRef, useState } from "react";

const products = [
  { name: "Silk Abaya Noir", price: "12 900 ₽", image: "https://images.unsplash.com/photo-1590735213920-68192a487bc2?w=600&q=80", tag: "Новинка" },
  { name: "Premium Hijab Set", price: "4 500 ₽", image: "https://images.unsplash.com/photo-1609505848912-b7c3b8b4beda?w=600&q=80", tag: "Бестселлер" },
  { name: "Modest Evening Dress", price: "18 700 ₽", image: "https://images.unsplash.com/photo-1583391733956-3750e0ff4e8b?w=600&q=80", tag: "Лимитед" },
  { name: "Cashmere Wrap", price: "8 200 ₽", image: "https://images.unsplash.com/photo-1585487000160-6ebcfceb0d44?w=600&q=80", tag: "Премиум" },
];

const ProductCard = ({ product, index }: { product: typeof products[0]; index: number }) => {
  const reveal = useAnimatedReveal({ type: "fade-up", delay: index * 150, duration: 1000 });
  const [hovered, setHovered] = useState(false);
  const cardRef = useRef<HTMLDivElement>(null);
  const [tilt, setTilt] = useState({ x: 0, y: 0 });

  const handleMove = (e: React.MouseEvent) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    setTilt({
      x: ((e.clientX - rect.left) / rect.width - 0.5) * 12,
      y: ((e.clientY - rect.top) / rect.height - 0.5) * -12,
    });
  };

  return (
    <div
      ref={(el) => { (cardRef as any).current = el; (reveal.ref as any)(el); }}
      style={{
        ...reveal.style,
        transform: `${reveal.style.transform || ""} perspective(800px) rotateX(${tilt.y}deg) rotateY(${tilt.x}deg)`,
        transition: "transform 0.4s cubic-bezier(0.22,1,0.36,1), opacity 0.8s ease",
      }}
      onMouseMove={handleMove}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => { setHovered(false); setTilt({ x: 0, y: 0 }); }}
      className="group cursor-pointer relative"
    >
      <div className="relative overflow-hidden aspect-[3/4] bg-card">
        <img
          src={product.image}
          alt={product.name}
          className={`w-full h-full object-cover transition-all duration-[1200ms] ease-[cubic-bezier(0.22,1,0.36,1)] ${hovered ? "scale-110" : "scale-100"}`}
        />
        <div className={`absolute inset-0 bg-background/60 flex items-center justify-center transition-opacity duration-700 ${hovered ? "opacity-100" : "opacity-0"}`}>
          <span className="font-body text-[11px] tracking-[0.3em] uppercase text-foreground border border-foreground/30 px-6 py-3 hover:bg-foreground hover:text-background transition-all duration-500">
            Подробнее
          </span>
        </div>
        <div className="absolute top-4 left-4">
          <span className="font-body text-[9px] tracking-[0.3em] uppercase bg-brand text-brand-foreground px-3 py-1.5">{product.tag}</span>
        </div>
        <div className={`absolute top-4 right-4 transition-all duration-500 ${hovered ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-2"}`}>
          <ArrowUpRight size={18} className="text-foreground" />
        </div>
      </div>
      <div className="mt-4 flex items-start justify-between">
        <h3 className="font-display text-lg font-light text-foreground">{product.name}</h3>
        <span className="font-body text-sm text-muted-foreground">{product.price}</span>
      </div>
    </div>
  );
};

const ShopSection = () => {
  const header = useAnimatedReveal({ type: "fade-up", delay: 0, duration: 1000 });

  return (
    <section id="collections" className="py-24 md:py-36 relative">
      <div className="max-w-[1400px] mx-auto px-6 md:px-12">
        <div ref={header.ref} style={header.style} className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-16">
          <div>
            <span className="font-body text-[10px] tracking-[0.5em] uppercase text-brand mb-4 block">Коллекция</span>
            <h2 className="font-display text-4xl md:text-6xl font-light tracking-[0.02em] text-foreground">Избранное</h2>
          </div>
          <a href="#" className="font-body text-[11px] tracking-[0.3em] uppercase text-muted-foreground hover:text-foreground transition-colors duration-500 line-expand self-start md:self-auto">
            Все товары
          </a>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {products.map((p, i) => <ProductCard key={p.name} product={p} index={i} />)}
        </div>
      </div>
    </section>
  );
};

export default ShopSection;
