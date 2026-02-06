import { useRef, useState, useEffect } from "react";
import { Navigation } from "@/components/layout/Navigation";
import { Footer } from "@/components/layout/Footer";
import { ScrollIndicator } from "@/components/layout/ScrollIndicator";
import { HeroSection } from "@/components/home/HeroSection";
import { FeaturedProjectsSection } from "@/components/home/FeaturedProjectsSection";
import { ConsultantSection } from "@/components/home/ConsultantSection";
import { ConceptsSection } from "@/components/home/ConceptsSection";
import { ArchitectureSpirit } from "@/components/layout/ArchitectureSpirit";

const sections = ["معرفی", "برترین‌ها", "فعالیت شرکت", "کانسپت‌ها"];

const Index = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [activeSection, setActiveSection] = useState(0);
  const [isScrolled, setIsScrolled] = useState(false); // وضعیت جدید برای انیمیشن نویگیشن

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const handleScroll = () => {
      const scrollTop = container.scrollTop;
      const sectionHeight = window.innerHeight;
      const newActiveSection = Math.round(scrollTop / sectionHeight);

      // تشخیص اسکرول برای تبدیل نویگیشن (حساسیت ۵۰ پیکسل)
      setIsScrolled(scrollTop > 50);

      if (newActiveSection !== activeSection) {
        setActiveSection(Math.min(newActiveSection, sections.length - 1));
      }
    };

    container.addEventListener("scroll", handleScroll, { passive: true });
    return () => container.removeEventListener("scroll", handleScroll);
  }, [activeSection]);

  const scrollToSection = (index: number) => {
    containerRef.current?.scrollTo({
      top: index * window.innerHeight,
      behavior: "smooth",
    });
  };

  return (
    <div className="scroll-snap-container w-full h-screen overflow-y-auto relative">
      {/* پاس دادن وضعیت اسکرول به نویگیشن برای اجرای انیمیشن */}
      <Navigation customScrolled={isScrolled} />

      {/* Modern Architecture Background Layer */}
      <ArchitectureSpirit activeSection={activeSection} />

      <ScrollIndicator
        sections={sections}
        activeSection={activeSection}
        onSectionClick={scrollToSection}
      />

      <div
        ref={containerRef}
        className="scroll-snap-container h-full overflow-y-auto"
      >
        <HeroSection onScrollDown={() => scrollToSection(1)} />
        <FeaturedProjectsSection />
        <ConsultantSection />
        <ConceptsSection />

        <div className="scroll-snap-section flex flex-col justify-end">
          <Footer />
        </div>
      </div>
    </div>
  );
};

export default Index;
