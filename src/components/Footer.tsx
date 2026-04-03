import { Instagram } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-20">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
          <div className="md:col-span-1 space-y-4">
            <h3 className="font-display text-2xl font-bold tracking-[0.15em]">ZARIFA COLLECTION</h3>
            <p className="font-body text-sm text-primary-foreground/70 leading-relaxed">
              Элегантная исламская мода и персональный стиль для современных мусульманок.
            </p>
            <div className="flex gap-4">
              <a href="https://www.instagram.com/senorita.chili_?igsh=MTE4cTQxdHRydjRwNw==" target="_blank" rel="noopener noreferrer" className="text-primary-foreground/70 hover:text-gold transition-all duration-300 hover:-translate-y-1" aria-label="Instagram">
                <Instagram size={18} />
              </a>
              <a href="https://t.me/senorita_chilli" target="_blank" rel="noopener noreferrer" className="text-primary-foreground/70 hover:text-gold transition-all duration-300 hover:-translate-y-1" aria-label="Telegram">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm5.562 8.161l-1.97 9.281c-.146.658-.537.818-1.084.508l-3-2.211-1.447 1.394c-.16.16-.295.295-.605.295l.213-3.053 5.56-5.023c.242-.213-.054-.333-.373-.121l-6.871 4.326-2.962-.924c-.643-.204-.657-.643.136-.953l11.57-4.461c.537-.194 1.006.131.833.942z"/>
                </svg>
              </a>
            </div>
          </div>

          {[
            { title: "Магазин", items: ["Хиджабы", "Абайи", "Аксессуары", "Новинки"] },
            { title: "Услуги", items: ["Стайл-гайд", "Онлайн-курс", "Разбор гардероба", "Подбор хиджаба"] },
            { title: "Поддержка", items: ["Доставка", "Возврат", "Контакты", "FAQ"] },
          ].map((col) => (
            <div key={col.title} className="space-y-4">
              <h4 className="font-body text-xs font-semibold tracking-[0.2em] uppercase">{col.title}</h4>
              <ul className="space-y-2">
                {col.items.map((item) => (
                  <li key={item}>
                    <a href="#" className="font-body text-sm text-primary-foreground/70 hover:text-gold transition-all duration-300 inline-block hover:translate-x-1">
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-16 pt-8 border-t border-primary-foreground/10">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="font-body text-xs text-primary-foreground/50">
              © 2026 ZARIFA COLLECTION. Все права защищены.
            </p>
            <div className="flex gap-6">
              {["Политика конфиденциальности", "Условия использования"].map((item) => (
                <a key={item} href="#" className="font-body text-xs text-primary-foreground/50 hover:text-gold transition-colors duration-300">
                  {item}
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Big brand name - static */}
      <div className="overflow-hidden pb-4">
        <h2 className="font-display text-[15vw] font-black leading-none text-primary-foreground/[0.03] text-center tracking-[0.1em] select-none">
          ZARIFA
        </h2>
      </div>
    </footer>
  );
};

export default Footer;
