import React from "react";
import { HeaderSection, FooterSection } from "../FixedComponents";
import { SEOHeroSection } from "./sections/SEOHeroSection";
import { SEOFeaturesSection } from "./sections/SEOFeaturesSection";
import { SEOCTASection } from "./sections/SEOCTASection";

export const SEOPage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-[#00041F] via-[#00020F] to-[#00041F] relative overflow-hidden">
      {/* Enhanced Background Elements */}
      <div className="fixed inset-0 pointer-events-none">
        <div className="absolute inset-0 bg-gradient-to-br from-[#00041F] via-[#00020F] to-[#00041F] opacity-95"></div>
        <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-[#194EFF]/8 rounded-full blur-3xl animate-pulse" style={{ animationDuration: '4s', animationDelay: '0s' }}></div>
        <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-[#194EFF]/6 rounded-full blur-3xl animate-pulse" style={{ animationDuration: '6s', animationDelay: '2s' }}></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] bg-[#194EFF]/4 rounded-full blur-3xl animate-pulse" style={{ animationDuration: '8s', animationDelay: '1s' }}></div>

        <div className="absolute inset-0 opacity-[0.015]">
          <div className="w-full h-full" style={{
            backgroundImage: `radial-gradient(circle at 1px 1px, #194EFF 1px, transparent 0)`,
            backgroundSize: '80px 80px'
          }}></div>
        </div>

        <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-[#194EFF]/30 rounded-full animate-ping" style={{ animationDuration: '3s', animationDelay: '0s' }}></div>
        <div className="absolute top-3/4 right-1/4 w-1.5 h-1.5 bg-[#194EFF]/40 rounded-full animate-ping" style={{ animationDuration: '4s', animationDelay: '1s' }}></div>
        <div className="absolute top-1/3 right-1/3 w-1 h-1 bg-white/20 rounded-full animate-ping" style={{ animationDuration: '5s', animationDelay: '2s' }}></div>
      </div>

      <HeaderSection />

      <main className="relative z-10">
        <SEOHeroSection />
        <SEOFeaturesSection />
        <SEOCTASection />
      </main>

      <FooterSection />
    </div>
  );
}; 