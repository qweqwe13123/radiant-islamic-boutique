import heroModel from "@/assets/hero-model.jpg";
import { ArrowRight } from "lucide-react";

const HeroSection = () => {
  return (
    <section className="pt-20 md:pt-24 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center min-h-[80vh]">
          {/* Left - Text */}
          <div className="order-2 lg:order-1 space-y-6 md:space-y-8 pb-8 lg:pb-0">
            <div className="space-y-3">
              <p className="text-xs font-body font-medium tracking-[0.3em] uppercase text-gold">
                Скромная мода • Элегантность
              </p>
              <h1 className="font-display text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-[1.1] text-foreground">
                Красота в
                <br />
                <span className="italic text-gold">скромности</span>
              </h1>
            </div>
            <p className="font-body text-muted-foreground text-base md:text-lg leading-relaxed max-w-md">
              Откройте для себя мир элегантной исламской моды. Гайды, курсы, 
              персональный подбор и эксклюзивная коллекция одежды.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="#services"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-primary text-primary-foreground font-body text-xs font-medium tracking-[0.15em] uppercase hover:bg-primary/90 transition-colors"
              >
                Наши услуги
                <ArrowRight size={14} />
              </a>
              <a
                href="#shop"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 border border-foreground text-foreground font-body text-xs font-medium tracking-[0.15em] uppercase hover:bg-foreground hover:text-background transition-colors"
              >
                Магазин
              </a>
            </div>
          </div>

          {/* Right - Image */}
          <div className="order-1 lg:order-2 flex justify-center lg:justify-end">
            <div className="relative w-full max-w-md lg:max-w-lg">
              <img
                src={heroModel}
                alt="Элегантная модель в хиджабе"
                width={800}
                height={1100}
                className="w-full h-auto object-cover"
              />
              <div className="absolute bottom-4 left-4 bg-background/90 backdrop-blur-sm px-4 py-2">
                <p className="font-display text-sm font-semibold text-foreground">Новая коллекция</p>
                <p className="font-body text-xs text-muted-foreground">Весна 2026</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
