import { Instagram, Send, Mail, MapPin, Phone, ArrowUpRight } from "lucide-react";

const Footer = () => {
  return (
    <footer id="contact" className="relative pt-20 pb-8 bg-foreground text-background overflow-hidden">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-rose/40 to-transparent" />
      <div className="absolute top-0 right-0 w-96 h-96 rounded-full bg-rose/5 blur-[150px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-5 sm:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          <div className="lg:col-span-2">
            <h3 className="font-display text-3xl md:text-4xl font-light mb-4">Nūra</h3>
            <p className="font-body text-sm text-background/50 leading-relaxed max-w-sm mb-6">
              Пространство, где мода встречается с духовностью. Элегантность, скромность и современный стиль в каждой детали.
            </p>
            <div className="flex items-center gap-3">
              {[{ icon: Instagram, label: "Instagram" }, { icon: Send, label: "Telegram" }, { icon: Mail, label: "Email" }].map(({ icon: Icon, label }) => (
                <a key={label} href="#" className="w-10 h-10 rounded-full border border-background/15 flex items-center justify-center hover:bg-rose hover:border-rose transition-all duration-300" aria-label={label}>
                  <Icon size={15} />
                </a>
              ))}
            </div>
          </div>
          <div>
            <h4 className="font-body text-[10px] font-semibold tracking-[0.3em] uppercase mb-6 text-background/40">Навигация</h4>
            <div className="space-y-3">
              {["Коллекции", "Услуги", "О бренде", "Блог", "FAQ"].map((l) => (
                <a key={l} href="#" className="flex items-center gap-2 font-body text-sm text-background/60 hover:text-rose transition-colors duration-300 group">
                  {l}<ArrowUpRight size={10} className="opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </a>
              ))}
            </div>
          </div>
          <div>
            <h4 className="font-body text-[10px] font-semibold tracking-[0.3em] uppercase mb-6 text-background/40">Контакты</h4>
            <div className="space-y-4">
              <div className="flex items-start gap-3"><MapPin size={14} className="text-rose mt-1 flex-shrink-0" /><p className="font-body text-sm text-background/60">Москва, Россия</p></div>
              <div className="flex items-start gap-3"><Phone size={14} className="text-rose mt-1 flex-shrink-0" /><p className="font-body text-sm text-background/60">+7 (999) 123-45-67</p></div>
              <div className="flex items-start gap-3"><Mail size={14} className="text-rose mt-1 flex-shrink-0" /><p className="font-body text-sm text-background/60">hello@nura.fashion</p></div>
            </div>
          </div>
        </div>
        <div className="border-t border-background/10 pt-12 mb-12">
          <div className="max-w-md mx-auto text-center">
            <h4 className="font-display text-xl font-light mb-2">Будьте в курсе</h4>
            <p className="font-body text-xs text-background/40 mb-6">Получайте первыми новости о коллекциях и акциях</p>
            <div className="flex gap-2">
              <input type="email" placeholder="Ваш email" className="flex-1 px-5 py-3 rounded-full bg-background/5 border border-background/10 font-body text-sm text-background placeholder:text-background/30 focus:outline-none focus:border-rose/50 transition-colors" />
              <button className="px-6 py-3 rounded-full bg-rose text-white font-body text-xs font-semibold tracking-[0.15em] uppercase hover:bg-rose/80 transition-colors duration-300">Подписаться</button>
            </div>
          </div>
        </div>
        <div className="border-t border-background/10 pt-6 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="font-body text-[10px] text-background/30 tracking-wider">© 2026 NŪRA. Все права защищены.</p>
          <div className="flex items-center gap-6">
            {["Политика конфиденциальности", "Условия использования"].map((l) => (
              <a key={l} href="#" className="font-body text-[10px] text-background/30 hover:text-background/60 transition-colors">{l}</a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
