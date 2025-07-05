import React from "react";
import { Button } from "../../../../components/ui/button";
import { 
  FadeIn, 
  StaggerContainer, 
  StaggerItem, 
  FloatingElement,
  GlowButton
} from "../../../../components/ui/animated-elements";

export const PortfolioHeroSection: React.FC = () => {
  const stats = [
    { number: "500+", label: "Projects Completed" },
    { number: "50+", label: "Happy Clients" },
    { number: "5+", label: "Years Experience" },
    { number: "100%", label: "Client Satisfaction" }
  ];

  return (
    <section className="relative w-full min-h-screen pt-28 bg-gradient-to-br from-[#00020F] via-[#00041F] to-[#194EFF]/20 overflow-hidden flex items-center">
      {/* Enhanced Background Elements */}
      <div className="absolute inset-0">
        {/* Main gradient overlays */}
        <div className="absolute top-20 right-0 w-[500px] h-[500px] bg-[#194EFF]/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-[#194EFF]/15 rounded-full blur-3xl animate-pulse" style={{animationDelay: '2s'}}></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-r from-[#194EFF]/5 via-transparent to-[#194EFF]/8 rounded-full blur-3xl animate-pulse" style={{animationDelay: '1s'}}></div>
        
        {/* Dynamic floating particles */}
        <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-[#194EFF]/60 rounded-full animate-bounce" style={{animationDelay: '0s', animationDuration: '3s'}}></div>
        <div className="absolute top-3/4 left-1/3 w-1 h-1 bg-white/40 rounded-full animate-bounce" style={{animationDelay: '1s', animationDuration: '4s'}}></div>
        <div className="absolute top-1/3 right-1/4 w-1.5 h-1.5 bg-[#194EFF]/50 rounded-full animate-bounce" style={{animationDelay: '2s', animationDuration: '5s'}}></div>
        <div className="absolute top-2/3 left-1/5 w-1 h-1 bg-[#194EFF]/50 rounded-full animate-ping" style={{animationDelay: '0.5s'}}></div>
        <div className="absolute top-1/5 right-1/3 w-1.5 h-1.5 bg-white/30 rounded-full animate-ping" style={{animationDelay: '1.5s'}}></div>
        <div className="absolute bottom-1/4 right-1/5 w-1 h-1 bg-[#194EFF]/40 rounded-full animate-ping" style={{animationDelay: '2.5s'}}></div>
        
        {/* Subtle grid pattern */}
        <div className="absolute inset-0 opacity-[0.02]">
          <div className="w-full h-full" style={{
            backgroundImage: `radial-gradient(circle at 1px 1px, white 1px, transparent 0)`,
            backgroundSize: '50px 50px'
          }}></div>
        </div>
      </div>

      <div className="relative max-w-7xl mx-auto px-6 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left Content */}
          <div className="space-y-8">
            <FadeIn delay={0.1} direction="up">
              <div className="inline-flex items-center gap-2 px-5 py-2.5 bg-white/8 border border-[#194EFF]/25 rounded-full mb-8 backdrop-blur-lg shadow-lg shadow-[#194EFF]/10">
                <div className="w-2.5 h-2.5 bg-[#194EFF] rounded-full animate-pulse shadow-sm shadow-[#194EFF]/50"></div>
                <span className="text-[#194EFF] text-sm font-semibold tracking-wide">OUR WORK</span>
              </div>
            </FadeIn>

            <FadeIn delay={0.2} direction="up">
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
                Showcasing
                <span className="block bg-gradient-to-r from-[#194EFF] via-[#194EFF]/90 to-[#194EFF]/70 bg-clip-text text-transparent">
                  Our Best Work
                </span>
                & Success Stories
              </h1>
            </FadeIn>

            <FadeIn delay={0.3} direction="up">
              <p className="text-xl text-white/70 leading-relaxed font-light max-w-2xl">
                Explore our portfolio of innovative digital solutions that have transformed businesses and delivered exceptional results. From web applications to digital marketing campaigns, discover how we bring ideas to life.
              </p>
            </FadeIn>

            <FadeIn delay={0.4} direction="up">
              <div className="flex flex-col sm:flex-row gap-4 pt-4">
                <GlowButton className="px-8 py-4 bg-gradient-to-r from-[#194EFF] to-[#194EFF]/90 text-white font-semibold text-lg rounded-2xl hover:from-[#194EFF]/90 hover:to-[#194EFF]/80 transition-all duration-300 shadow-xl shadow-[#194EFF]/25 hover:shadow-[#194EFF]/40 hover:scale-105 transform">
                  View All Projects
                </GlowButton>
                <Button className="px-8 py-4 bg-white/8 text-white font-semibold text-lg rounded-2xl border border-white/20 hover:bg-white/15 hover:border-[#194EFF]/40 transition-all duration-300 backdrop-blur-sm hover:scale-105 transform">
                  Get Your Quote
                </Button>
              </div>
            </FadeIn>
          </div>

          {/* Right Content - Stats Grid */}
          <div className="space-y-8">
            <StaggerContainer staggerDelay={0.1}>
              <div className="grid grid-cols-2 gap-6">
                {stats.map((stat, index) => (
                  <StaggerItem key={index}>
                    <FloatingElement intensity={3} duration={4}>
                      <div className="bg-white/[0.03] border border-white/10 rounded-3xl p-8 backdrop-blur-xl shadow-lg shadow-black/20 hover:shadow-[#194EFF]/10 transition-all duration-500 group text-center">
                        <div className="text-4xl font-bold text-[#194EFF] mb-2 group-hover:scale-110 transition-transform duration-300">
                          {stat.number}
                        </div>
                        <p className="text-white/60 text-sm font-medium">{stat.label}</p>
                      </div>
                    </FloatingElement>
                  </StaggerItem>
                ))}
              </div>
            </StaggerContainer>
          </div>
        </div>
      </div>
    </section>
  );
}; 