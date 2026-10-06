import { FAQSection } from "./sections/FAQSection";
import { FeaturedPropertiesSection } from "./sections/FeaturedPropertiesSection";
import { ReviewsMarqueeSection } from "./sections/ReviewsMarqueeSection";
import { HeaderSection, FooterSection } from "../FixedComponents";
import { HeroSection } from "./sections/HeroSection";

export const HomePageDesktop = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-[#00041F] via-[#00020F] to-[#00041F] relative overflow-hidden">
      <div className="fixed inset-0 pointer-events-none">
        <div className="absolute inset-0 bg-gradient-to-br from-[#00041F] via-[#00020F] to-[#00041F] opacity-95"></div>

        <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-[#194EFF]/8 rounded-full blur-3xl animate-pulse" style={{ animationDuration: '4s', animationDelay: '0s' }}></div>
        <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-[#194EFF]/6 rounded-full blur-3xl animate-pulse" style={{ animationDuration: '6s', animationDelay: '2s' }}></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] bg-[#194EFF]/4 rounded-full blur-3xl animate-pulse" style={{ animationDuration: '8s', animationDelay: '1s' }}></div>
      </div>

      <HeaderSection />

      <main className="relative z-10">
        <div className="relative">
          <HeroSection />
          <ReviewsMarqueeSection />
        </div>
        <FeaturedPropertiesSection />
        <section className="max-w-7xl mx-auto px-8">
          <FAQSection />
        </section>
      </main>

      <FooterSection />
    </div>
  );
};
