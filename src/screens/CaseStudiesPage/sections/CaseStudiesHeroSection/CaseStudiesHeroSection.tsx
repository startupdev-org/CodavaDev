import React from "react";
import { Button } from "../../../../components/ui/button";
import { 
  FadeIn, 
  StaggerContainer, 
  StaggerItem, 
  FloatingElement,
  GlowButton
} from "../../../../components/ui/animated-elements";

export const CaseStudiesHeroSection: React.FC = () => {
  const metrics = [
    { number: "300%", label: "Average ROI" },
    { number: "50+", label: "Success Stories" },
    { number: "95%", label: "Client Retention" },
    { number: "24/7", label: "Support" }
  ];

  return (
    <section className="relative w-full min-h-screen pt-28 bg-gradient-to-br from-[#00020F] via-[#00041F] to-[#194EFF]/20 overflow-hidden flex items-center">
      <div className="relative max-w-7xl mx-auto px-6 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left Content */}
          <div className="space-y-8">
            <FadeIn delay={0.1} direction="up">
              <div className="inline-flex items-center gap-2 px-5 py-2.5 bg-white/8 border border-[#194EFF]/25 rounded-full mb-8 backdrop-blur-lg shadow-lg shadow-[#194EFF]/10">
                <div className="w-2.5 h-2.5 bg-[#194EFF] rounded-full animate-pulse shadow-sm shadow-[#194EFF]/50"></div>
                <span className="text-[#194EFF] text-sm font-semibold tracking-wide">SUCCESS STORIES</span>
              </div>
            </FadeIn>

            <FadeIn delay={0.2} direction="up">
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
                Real Results,
                <span className="block bg-gradient-to-r from-[#194EFF] via-[#194EFF]/90 to-[#194EFF]/70 bg-clip-text text-transparent">
                  Real Stories
                </span>
                Real Impact
              </h1>
            </FadeIn>

            <FadeIn delay={0.3} direction="up">
              <p className="text-xl text-white/70 leading-relaxed font-light max-w-2xl">
                Discover how we've transformed businesses through innovative technology solutions. Our case studies showcase the measurable impact and real results we've delivered for our clients.
              </p>
            </FadeIn>

            <FadeIn delay={0.4} direction="up">
              <div className="flex flex-col sm:flex-row gap-4 pt-4">
                <GlowButton className="px-8 py-4 bg-gradient-to-r from-[#194EFF] to-[#194EFF]/90 text-white font-semibold text-lg rounded-2xl hover:from-[#194EFF]/90 hover:to-[#194EFF]/80 transition-all duration-300 shadow-xl shadow-[#194EFF]/25 hover:shadow-[#194EFF]/40 hover:scale-105 transform">
                  View Case Studies
                </GlowButton>
                <Button className="px-8 py-4 bg-white/8 text-white font-semibold text-lg rounded-2xl border border-white/20 hover:bg-white/15 hover:border-[#194EFF]/40 transition-all duration-300 backdrop-blur-sm hover:scale-105 transform">
                  Download Report
                </Button>
              </div>
            </FadeIn>
          </div>

          {/* Right Content - Metrics Grid */}
          <div className="space-y-8">
            <StaggerContainer staggerDelay={0.1}>
              <div className="grid grid-cols-2 gap-6">
                {metrics.map((metric, index) => (
                  <StaggerItem key={index}>
                    <FloatingElement intensity={3} duration={4}>
                      <div className="bg-white/[0.03] border border-white/10 rounded-3xl p-8 backdrop-blur-xl shadow-lg shadow-black/20 hover:shadow-[#194EFF]/10 transition-all duration-500 group text-center">
                        <div className="text-4xl font-bold text-[#194EFF] mb-2 group-hover:scale-110 transition-transform duration-300">
                          {metric.number}
                        </div>
                        <p className="text-white/60 text-sm font-medium">{metric.label}</p>
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