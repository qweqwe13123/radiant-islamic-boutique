import { useState, useEffect } from "react";
import { Menu, X, Search, ShoppingBag } from "lucide-react";

const navLinks = [
  { label: "Коллекции", href: "#shop" },
  { label: "Услуги", href: "#services" },
  { label: "О нас", href: "#about" },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? "glass shadow-[0_4px_30px_hsl(var(--foreground)/0.05)]"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Mobile menu button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 text-foreground hover:text-gold transition-colors"
            aria-label="Menu"
          >
            {isOpen ? <X size={20} /> : <Menu size={20} />}
          </button>

          {/* Left nav */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="text-xs font-body font-medium tracking-[0.2em] uppercase text-foreground line-draw"
              >
                {link.label}
              </a>
            ))}
          </div>

          {/* Logo */}
          <a
            href="#"
            className="font-display text-xl md:text-2xl font-bold tracking-[0.15em] uppercase text-foreground hover:text-gold transition-colors duration-300"
          >
            NŪRA
          </a>

          {/* Right nav */}
          <div className="flex items-center gap-4 md:gap-6">
            <button
              className="p-2 text-foreground hover:text-gold transition-colors duration-300"
              aria-label="Search"
            >
              <Search size={18} />
            </button>
            <button
              className="p-2 text-foreground hover:text-gold transition-colors duration-300 relative group"
              aria-label="Cart"
            >
              <ShoppingBag size={18} className="group-hover:scale-110 transition-transform duration-300" />
              <span className="absolute -top-0.5 -right-0.5 w-4 h-4 bg-gold text-gold-foreground text-[10px] font-body font-bold rounded-full flex items-center justify-center">
                0
              </span>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] ${
          isOpen ? "max-h-60 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="glass border-t border-border/50 px-4 py-6 space-y-4">
          {navLinks.map((link, i) => (
            <a
              key={link.label}
              href={link.href}
              onClick={() => setIsOpen(false)}
              className="block text-sm font-body font-medium tracking-[0.15em] uppercase text-foreground hover:text-gold transition-all duration-300"
              style={{ transitionDelay: `${i * 50}ms` }}
            >
              {link.label}
            </a>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
