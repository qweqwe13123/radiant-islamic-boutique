import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import MarqueeSection from "@/components/MarqueeSection";
import ServicesSection from "@/components/ServicesSection";
import ShopSection from "@/components/ShopSection";
import LookbookSection from "@/components/LookbookSection";
import AboutSection from "@/components/AboutSection";
import Footer from "@/components/Footer";
import MagneticCursor from "@/components/MagneticCursor";
import ScrollLine from "@/components/ScrollLine";

const Index = () => {
  return (
    <div className="min-h-screen bg-background relative">
      <MagneticCursor />
      <ScrollLine />
      <Navbar />
      <HeroSection />
      <MarqueeSection />
      <ShopSection />
      <LookbookSection />
      <ServicesSection />
      <AboutSection />
      <Footer />
    </div>
  );
};

export default Index;
