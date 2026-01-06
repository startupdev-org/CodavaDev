import React from "react";
import { FadeIn } from "../../../../components/ui/animated-elements";
import { BiMouse } from "react-icons/bi";

export const AnalyticsAndTrackingHeroSection = () => {
  return (
    <>
      <style dangerouslySetInnerHTML={{
        __html: `
          @keyframes float {
            0%, 100% { transform: translateY(0px) translateX(0px); }
            25% { transform: translateY(-15px) translateX(8px); }
            50% { transform: translateY(-8px) translateX(-8px); }
            75% { transform: translateY(-12px) translateX(4px); }
          }
          @keyframes gradientShift {
            0%, 100% { transform: translateX(0) translateY(0) scale(1); }
            33% { transform: translateX(20px) translateY(-10px) scale(1.05); }
            66% { transform: translateX(-15px) translateY(15px) scale(0.95); }
          }
          @keyframes pulse-soft {
            0%, 100% { opacity: 0.3; }
            50% { opacity: 0.8; }
          }
          .float-animation {
            animation: float 6s ease-in-out infinite;
          }
          .gradient-shift {
            animation: gradientShift 15s ease-in-out infinite;
          }
          .pulse-soft {
            animation: pulse-soft 3s ease-in-out infinite;
          }
        `
      }} />
      <section className="relative w-full h-screen bg-gradient-to-br from-[#00020F] via-[#000818] to-[#001122] overflow-hidden flex items-center justify-center">
        <div className="absolute inset-0">
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-to-r from-[#194EFF]/15 via-[#194EFF]/8 to-transparent rounded-full blur-3xl gradient-shift"></div>
          <div className="absolute top-1/3 right-1/4 w-[500px] h-[500px] bg-gradient-to-r from-[#4169E1]/10 to-transparent rounded-full blur-3xl gradient-shift" style={{ animationDelay: '5s' }}></div>
          {Array.from({ length: 15 }, (_, i) => (
            <div
              key={i}
              className="absolute w-1 h-1 bg-[#194EFF]/40 rounded-full pulse-soft"
              style={{
                left: `${20 + Math.random() * 60}%`,
                top: `${20 + Math.random() * 60}%`,
                animationDelay: `${Math.random() * 3}s`,
                animationDuration: `${2 + Math.random() * 2}s`
              }}
            />
          ))}
          {Array.from({ length: 8 }, (_, i) => (
            <div
              key={`float-${i}`}
              className="absolute w-2 h-2 bg-gradient-to-r from-[#194EFF]/20 to-[#4169E1]/20 rounded-full float-animation"
              style={{
                left: `${10 + Math.random() * 80}%`,
                top: `${15 + Math.random() * 70}%`,
                animationDelay: `${Math.random() * 6}s`,
                animationDuration: `${4 + Math.random() * 4}s`
              }}
            />
          ))}
          <div className="absolute inset-0 opacity-[0.008]">
            <div className="w-full h-full gradient-shift" style={{
              backgroundImage: `radial-gradient(circle at 1px 1px, rgba(25, 78, 255, 0.2) 1px, transparent 0)`,
              backgroundSize: '120px 120px',
              animationDelay: '10s'
            }}></div>
          </div>
        </div>
        <div className="absolute top-0 left-0 right-0 h-20"></div>
        <div className="relative max-w-6xl mx-auto px-6 text-center pt-12 pb-16">
        {/* Service Badge */}
        <FadeIn delay={0.1} direction="up">
          <div className="inline-flex items-center gap-2 px-5 py-2.5 bg-white/5 border border-white/10 rounded-full backdrop-blur-sm mb-12">
            <div className="w-2 h-2 bg-[#194EFF] rounded-full pulse-soft"></div>
            <span className="text-white/80 text-sm font-medium">Analytics & Tracking</span>
          </div>
        </FadeIn>
          <FadeIn delay={0.2} direction="up">
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold leading-[1.1] text-white tracking-tight mb-7">
              Analytics & Tracking
              <span className="block bg-gradient-to-r from-[#194EFF] to-[#4169E1] bg-clip-text text-transparent mt-1">
                Smarter Decisions, Better Results
              </span>
            </h1>
          </FadeIn>
        {/* Enhanced Description */}
        <FadeIn delay={0.3} direction="up">
          <p className="text-lg text-white/70 leading-relaxed max-w-3xl mx-auto mb-12">
            Gain valuable insights into user behavior to make smarter business decisions and boost performance.
          </p>
        </FadeIn>
          <FadeIn delay={0.4} direction="up">
            <div className="flex flex-wrap justify-center gap-4 mb-12">
              {["Google Analytics", "Conversion Tracking", "Heatmaps", "Dashboards"].map((tech, index) => (
                <div key={index} className="px-4 py-2 bg-white/5 border border-white/10 rounded-lg backdrop-blur-sm text-white/80 text-sm font-medium hover:bg-white/10 transition-all duration-300">
                  {tech}
                </div>
              ))}
            </div>
          </FadeIn>
        {/* Scroll Indicator */}
        <FadeIn delay={0.5} direction="up">
          <div className="flex justify-center pt-8">
            <div className="animate-bounce">
              <BiMouse className="w-8 h-8 text-white/50 hover:text-white/70 transition-colors duration-300" />
            </div>
          </div>
        </FadeIn>
        </div>
      </section>
    </>
  );
}; 