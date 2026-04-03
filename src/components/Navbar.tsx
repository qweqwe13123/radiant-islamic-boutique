import { useState, useEffect, useRef } from "react";
import { useAnimatedReveal } from "@/hooks/useAnimatedReveal";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const links = [
    { label: "Коллекции", href: "#collections" },
    { label: "Услуги", href: "#services" },
    { label: "Философия", href: "#about" },
    { label: "Контакт", href: "#contact" },
  ];

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-700 ${
          scrolled ? "glass-dark" : "bg-transparent"
        }`}
      >
        <div className="max-w-[1400px] mx-auto px-6 md:px-12">
          <div className="flex items-center justify-between h-20">
            {/* Logo */}
            <a href="#" className="font-display text-2xl md:text-3xl font-light tracking-[0.3em] text-foreground">
              NŪRA
            </a>

            {/* Desktop nav */}
            <div className="hidden md:flex items-center gap-10">
              {links.map((l) => (
                <a
                  key={l.label}
                  href={l.href}
                  className="font-body text-[11px] font-medium tracking-[0.25em] uppercase text-muted-foreground hover:text-foreground transition-colors duration-500 line-expand"
                >
                  {l.label}
                </a>
              ))}
            </div>

            {/* Mobile toggle */}
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="md:hidden flex flex-col gap-1.5 w-7 group"
              aria-label="Menu"
            >
              <span className={`block h-[1px] bg-foreground transition-all duration-500 ${menuOpen ? "rotate-45 translate-y-[7px]" : ""}`} />
              <span className={`block h-[1px] bg-foreground transition-all duration-500 ${menuOpen ? "opacity-0 scale-x-0" : ""}`} />
              <span className={`block h-[1px] bg-foreground transition-all duration-500 ${menuOpen ? "-rotate-45 -translate-y-[7px]" : ""}`} />
            </button>
          </div>
        </div>
      </nav>

      {/* Fullscreen mobile menu */}
      <div
        className={`fixed inset-0 z-40 bg-background transition-all duration-700 flex flex-col items-center justify-center gap-8 ${
          menuOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
      >
        {links.map((l, i) => (
          <a
            key={l.label}
            href={l.href}
            onClick={() => setMenuOpen(false)}
            className="font-display text-4xl font-light tracking-[0.2em] text-foreground hover:text-brand transition-colors duration-500"
            style={{ transitionDelay: menuOpen ? `${i * 80}ms` : "0ms" }}
          >
            {l.label}
          </a>
        ))}
      </div>
    </>
  );
};

export default Navbar;
