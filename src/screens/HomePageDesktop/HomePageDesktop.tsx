import { ClientTestimonialsSection } from "./sections/ClientTestimonialsSection";
import { FAQSection } from "./sections/FAQSection";
import { FeaturedPropertiesSection } from "./sections/FeaturedPropertiesSection";
import { HeaderSection } from "./sections/HeaderSection";
import { HeroSection } from "./sections/HeroSection";
import { FooterSection } from "./sections/FooterSection";

export const HomePageDesktop = (): JSX.Element => {
  return (
    <div className="bg-gradient-to-b from-grey-08 via-grey-10 to-grey-08 flex flex-col w-full min-h-screen overflow-hidden">
      <HeaderSection />
      <main className="flex-1">
      <HeroSection />
        <div className="relative">
          {/* Section Divider with Tech Design */}
          <div className="w-full h-px bg-gradient-to-r from-transparent via-purple-600/50 to-transparent my-20" />
          <div className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 w-4 h-4 bg-purple-600 rounded-full shadow-lg shadow-purple-600/50 animate-pulse" />
        </div>
        
        <section className="max-w-[1600px] mx-auto px-8 py-20">
        <FeaturedPropertiesSection />
        </section>

        <div className="relative my-32">
          {/* Tech Pattern Divider */}
          <div className="w-full h-px bg-gradient-to-r from-transparent via-purple-600/30 to-transparent" />
          <div className="absolute left-1/4 top-1/2 transform -translate-x-1/2 -translate-y-1/2 w-2 h-2 bg-purple-400 rounded-full animate-pulse" />
          <div className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 w-3 h-3 bg-purple-600 rounded-full animate-pulse delay-300" />
          <div className="absolute left-3/4 top-1/2 transform -translate-x-1/2 -translate-y-1/2 w-2 h-2 bg-purple-400 rounded-full animate-pulse delay-700" />
        </div>

        <section className="max-w-6xl mx-auto px-8 py-20">
        <ClientTestimonialsSection />
        </section>

        <div className="relative my-32">
          {/* Digital Circuit Divider */}
          <div className="w-full h-px bg-gradient-to-r from-transparent via-purple-600/40 to-transparent" />
          <div className="absolute left-1/3 top-1/2 transform -translate-x-1/2 -translate-y-1/2">
            <div className="w-6 h-6 border border-purple-600/50 rounded rotate-45 animate-spin-slow">
              <div className="w-1 h-1 bg-purple-600 rounded-full absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2" />
            </div>
          </div>
          <div className="absolute left-2/3 top-1/2 transform -translate-x-1/2 -translate-y-1/2">
            <div className="w-4 h-4 border border-purple-400/50 rounded-full animate-pulse">
              <div className="w-1 h-1 bg-purple-400 rounded-full absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2" />
            </div>
          </div>
        </div>

        <section className="max-w-6xl mx-auto px-8 py-20">
        </section>
      </main>
      
      <FAQSection />
      <FooterSection />
    </div>
  );
};
