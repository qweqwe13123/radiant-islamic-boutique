import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import MarqueeSection from "@/components/MarqueeSection";
import ServicesSection from "@/components/ServicesSection";
import ShopSection from "@/components/ShopSection";
import AboutSection from "@/components/AboutSection";
import Footer from "@/components/Footer";
import ParticleField from "@/components/ParticleField";
import CursorGlow from "@/components/CursorGlow";
import ScrollProgress from "@/components/ScrollProgress";

const Index = () => {
  return (
    <div className="min-h-screen bg-background relative">
      <ParticleField />
      <CursorGlow />
      <ScrollProgress />
      <Navbar />
      <HeroSection />
      <MarqueeSection />
      <ServicesSection />
      <ShopSection />
      <AboutSection />
      <Footer />
    </div>
  );
};

export default Index;
