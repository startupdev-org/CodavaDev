import React from "react";
import {
  FadeIn,
  StaggerContainer,
  StaggerItem,
  GlowButton
} from "../../../../components/ui/animated-elements";

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
          <FadeIn delay={0.1} direction="up">
            <div className="inline-flex items-center gap-2 px-5 py-2.5 bg-white/5 border border-white/10 rounded-full backdrop-blur-sm mb-12">
              <div className="w-2 h-2 bg-[#194EFF] rounded-full pulse-soft"></div>
              <span className="text-white/80 text-sm font-medium">📊 Analytics & Tracking • Insights • Performance</span>
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
          <FadeIn delay={0.3} direction="up">
            <p className="text-xl text-white/70 leading-relaxed max-w-3xl mx-auto mb-12">
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
          <FadeIn delay={0.5} direction="up">
            <div className="flex flex-col sm:flex-row gap-5 justify-center items-center mb-12">
              <button
                onClick={() => window.location.href = '/contact'}
                className="group px-9 py-3.5 bg-[#194EFF] text-white font-semibold text-base rounded-lg hover:bg-[#1E40AF] transition-all duration-300 shadow-lg shadow-[#194EFF]/25 hover:shadow-[#194EFF]/40 transform hover:scale-105"
              >
                <span className="flex items-center gap-2.5">
                  Start Your Project
                  <svg className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                  </svg>
                </span>
              </button>
            </div>
          </FadeIn>
          <FadeIn delay={0.6} direction="up">
            <div className="flex flex-col sm:flex-row items-center justify-center gap-6 text-sm text-white/50">
              <div className="flex items-center gap-2.5">
                <div className="w-2.5 h-2.5 bg-green-500 rounded-full pulse-soft"></div>
                <span>Available for new projects</span>
              </div>
              <div className="hidden sm:block w-1 h-1 bg-white/30 rounded-full"></div>
              <span>Data-driven Growth</span>
              <div className="hidden sm:block w-1 h-1 bg-white/30 rounded-full"></div>
              <span>Actionable Insights</span>
            </div>
          </FadeIn>
        </div>
      </section>
    </>
  );
}; 