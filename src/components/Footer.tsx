import { Instagram } from "lucide-react";
import { useAnimatedReveal } from "@/hooks/useAnimatedReveal";

const Footer = () => {
  const content = useAnimatedReveal({ type: "fade-up", delay: 0, duration: 1000 });

  const cols = [
    { title: "Магазин", items: ["Хиджабы", "Абайи", "Аксессуары", "Новинки"] },
    { title: "Услуги", items: ["Стайл-гайд", "Онлайн-курс", "Разбор гардероба", "Подбор хиджаба"] },
    { title: "Инфо", items: ["О нас", "Доставка", "Возврат", "Контакты"] },
  ];

  return (
    <footer id="contact" className="border-t border-border/50 relative">
      <div ref={content.ref} style={content.style} className="max-w-[1400px] mx-auto px-6 md:px-12 py-20 md:py-28">
        <div className="grid grid-cols-1 md:grid-cols-5 gap-12 md:gap-8">
          {/* Brand */}
          <div className="md:col-span-2 space-y-6">
            <h3 className="font-display text-3xl font-light tracking-[0.3em]">NŪRA</h3>
            <p className="font-body text-sm text-muted-foreground leading-relaxed max-w-xs">
              Современная исламская мода. Элегантность без компромиссов.
            </p>
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 border border-border flex items-center justify-center text-muted-foreground hover:text-foreground hover:border-foreground transition-all duration-500" aria-label="Instagram">
                <Instagram size={16} />
              </a>
              <a href="#" className="w-10 h-10 border border-border flex items-center justify-center text-muted-foreground hover:text-foreground hover:border-foreground transition-all duration-500" aria-label="Telegram">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm5.562 8.161l-1.97 9.281c-.146.658-.537.818-1.084.508l-3-2.211-1.447 1.394c-.16.16-.295.295-.605.295l.213-3.053 5.56-5.023c.242-.213-.054-.333-.373-.121l-6.871 4.326-2.962-.924c-.643-.204-.657-.643.136-.953l11.57-4.461c.537-.194 1.006.131.833.942z"/>
                </svg>
              </a>
            </div>
          </div>

          {/* Link columns */}
          {cols.map((col) => (
            <div key={col.title} className="space-y-4">
              <h4 className="font-body text-[10px] font-medium tracking-[0.3em] uppercase text-foreground">{col.title}</h4>
              <ul className="space-y-3">
                {col.items.map((item) => (
                  <li key={item}>
                    <a href="#" className="font-body text-sm text-muted-foreground hover:text-foreground transition-colors duration-500">
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-border/30">
        <div className="max-w-[1400px] mx-auto px-6 md:px-12 py-6 flex flex-col md:flex-row justify-between items-center gap-4">
          <span className="font-body text-[11px] text-muted-foreground/50">
            © 2026 NŪRA. Все права защищены.
          </span>
          <div className="flex gap-8">
            <a href="#" className="font-body text-[11px] text-muted-foreground/50 hover:text-foreground transition-colors duration-500">Политика конфиденциальности</a>
            <a href="#" className="font-body text-[11px] text-muted-foreground/50 hover:text-foreground transition-colors duration-500">Условия</a>
          </div>
        </div>
      </div>

      {/* Giant brand watermark */}
      <div className="overflow-hidden pointer-events-none select-none">
        <h2 className="font-display text-[18vw] font-light leading-none text-foreground/[0.02] text-center tracking-[0.2em] pb-4">
          NŪRA
        </h2>
      </div>
    </footer>
  );
};

export default Footer;
