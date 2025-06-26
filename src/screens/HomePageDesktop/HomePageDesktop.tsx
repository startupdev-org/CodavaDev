
import { FAQSection } from "./sections/FAQSection";
import { FeaturedPropertiesSection } from "./sections/FeaturedPropertiesSection";
import { ReviewsMarqueeSection } from "./sections/ReviewsMarqueeSection";
import { HeaderSection, FooterSection } from "../FixedComponents";
import { HeroSection } from "./sections/HeroSection";

export const HomePageDesktop = (): JSX.Element => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-[#00041F] via-[#00020F] to-[#00041F] relative overflow-hidden">
      {/* Enhanced Background Elements */}
      <div className="fixed inset-0 pointer-events-none">
        {/* Main gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#00041F] via-[#00020F] to-[#00041F] opacity-95"></div>
        
        {/* Animated blue glows */}
        <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-[#194EFF]/8 rounded-full blur-3xl animate-pulse" style={{animationDuration: '4s', animationDelay: '0s'}}></div>
        <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-[#194EFF]/6 rounded-full blur-3xl animate-pulse" style={{animationDuration: '6s', animationDelay: '2s'}}></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] bg-[#194EFF]/4 rounded-full blur-3xl animate-pulse" style={{animationDuration: '8s', animationDelay: '1s'}}></div>
        
        {/* Subtle grid pattern */}
        <div className="absolute inset-0 opacity-[0.015]">
          <div className="w-full h-full" style={{
            backgroundImage: `radial-gradient(circle at 1px 1px, #194EFF 1px, transparent 0)`,
            backgroundSize: '80px 80px'
          }}></div>
        </div>
        
        {/* Floating particles */}
        <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-[#194EFF]/30 rounded-full animate-ping" style={{animationDuration: '3s', animationDelay: '0s'}}></div>
        <div className="absolute top-3/4 right-1/4 w-1.5 h-1.5 bg-[#194EFF]/40 rounded-full animate-ping" style={{animationDuration: '4s', animationDelay: '1s'}}></div>
        <div className="absolute top-1/3 right-1/3 w-1 h-1 bg-white/20 rounded-full animate-ping" style={{animationDuration: '5s', animationDelay: '2s'}}></div>
      </div>

      <HeaderSection />
      
      <main className="relative z-10">
      <HeroSection />
      
      <ReviewsMarqueeSection />
        

        
        <FeaturedPropertiesSection />

        {/* Professional Section Divider 2 */}
        <div className="relative py-16">
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-full max-w-6xl px-8">
              <div className="relative">
                <div className="absolute inset-0 flex items-center">
                  <div className="w-full h-px bg-gradient-to-r from-transparent via-[#194EFF]/20 to-transparent"></div>
                </div>
                <div className="relative flex justify-center">
                  <div className="bg-[#00041F] px-8 py-4">
                    <div className="flex items-center gap-4">
                      <div className="w-8 h-8 bg-gradient-to-br from-[#194EFF]/20 to-[#194EFF]/10 border border-[#194EFF]/30 rounded-2xl flex items-center justify-center">
                        <svg className="w-4 h-4 text-[#194EFF]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                      </div>
                      <div className="text-[#194EFF] text-sm font-semibold tracking-wider uppercase">Support & FAQ</div>
                      <div className="w-8 h-8 bg-gradient-to-br from-[#194EFF]/20 to-[#194EFF]/10 border border-[#194EFF]/30 rounded-2xl flex items-center justify-center">
                        <svg className="w-4 h-4 text-[#194EFF]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <section className="max-w-7xl mx-auto px-8">
          <FAQSection />
        </section>
      </main>
      
      <FooterSection />
    </div>
  );
};
