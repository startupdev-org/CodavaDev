import {
  FadeIn,
  GlowButton
} from "../../../../components/ui/animated-elements";
import { useNavigate } from "react-router-dom";

export const HeroSection = () => {
  const navigate = useNavigate();
  return (
    <>
      {/* CSS Animations */}
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
        {/* Live Background Elements */}
        <div className="absolute inset-0">
          {/* Main animated gradient - similar to Arise */}
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-to-r from-[#194EFF]/15 via-[#194EFF]/8 to-transparent rounded-full blur-3xl gradient-shift"></div>

          {/* Secondary animated gradient */}
          <div className="absolute top-1/3 right-1/4 w-[500px] h-[500px] bg-gradient-to-r from-[#4169E1]/10 to-transparent rounded-full blur-3xl gradient-shift" style={{ animationDelay: '5s' }}></div>

          {/* Floating particles */}
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

          {/* Floating elements */}
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

          {/* Subtle moving grid */}
          <div className="absolute inset-0 opacity-[0.008]">
            <div className="w-full h-full gradient-shift" style={{
              backgroundImage: `radial-gradient(circle at 1px 1px, rgba(25, 78, 255, 0.2) 1px, transparent 0)`,
              backgroundSize: '120px 120px',
              animationDelay: '10s'
            }}></div>
          </div>
        </div>

        {/* Navigation space */}
        <div className="absolute top-0 left-0 right-0 h-20"></div>

        {/* Hero Content */}
        <div className="relative max-w-6xl mx-auto px-6 text-center below400:pt-[170px] pt-[100px] pb-16">

          {/* IT Agency Badge */}
          <FadeIn delay={0.1} direction="up">
            <div className="inline-flex items-center gap-2 px-5 py-2.5 bg-white/5 border border-white/10  rounded-full mb-8 backdrop-blur-lg shadow-lg ">
              <div className="w-2 h-2 bg-[#194EFF] rounded-full animate-pulse shadow-sm shadow-[#194EFF]/50"></div>
              {/* Mobile: shorter text */}
              <span className="text-white/80 text-sm font-semibold tracking-wide block md:hidden">
                You dream. We deliver.
              </span>
              {/* Desktop: full text */}
              <span className="text-white/80 text-sm font-semibold tracking-wide hidden md:block">
                You dream. We deliver.
              </span>
            </div>
          </FadeIn>

          {/* Main Heading */}
          <FadeIn delay={0.2} direction="up">
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold leading-[1.1] text-white tracking-tight mb-7">
              Transform Your Business with <span className="block text-transparent bg-gradient-to-r from-[#194EFF] to-blue-400 bg-clip-text mt-1 lg:h-[90px]">
                Digital Excellence
              </span>
            </h1>
          </FadeIn>

          {/* Enhanced Description */}
          <FadeIn delay={0.3} direction="up">
            <p className="text-base lg:text-lg text-white/70 leading-relaxed max-w-3xl mx-auto mb-12">
              From web solutions and design to marketing and analytics, we deliver solutions tailored to your niche today while also preparing you for its future.
            </p>
          </FadeIn>

          {/* CTA Buttons */}
          <FadeIn delay={0.4} direction="up">
            <div className="flex flex-col sm:flex-row gap-5 justify-center items-center mb-12">
              <GlowButton
                disableGlow={true}
                className="px-8 py-4 bg-gradient-to-r from-[#194EFF] to-[#194EFF]/90 text-white font-semibold text-base rounded-2xl hover:from-[#194EFF]/90 hover:to-[#194EFF]/80 transition-all duration-300 shadow-xl shadow-[#194EFF]/25 hover:shadow-[#194EFF]/40 hover:scale-105 transform relative overflow-hidden group/btn flex items-center gap-2"
                onClick={() => navigate('/contact')}
              >
                <span className="relative z-10">Start Your Project</span>
                <svg className="w-4 h-4 relative z-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover/btn:translate-x-full transition-transform duration-1000"></div>
              </GlowButton>

              <GlowButton
                disableGlow={true}
                className="px-8 py-4 bg-white/10 text-white font-semibold text-base rounded-2xl border border-white/20 hover:bg-white/20 transition-all duration-300 backdrop-blur-sm shadow-xl shadow-white/5 hover:shadow-white/10 hover:scale-105 transform relative overflow-hidden group/btn flex items-center gap-2"
                onClick={() => navigate('/our-work')}
              >
                <span className="relative z-10">View Our Work</span>
                <svg className="w-4 h-4 relative z-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                </svg>
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover/btn:translate-x-full transition-transform duration-1000"></div>
              </GlowButton>
            </div>
          </FadeIn>

          {/* Status & Stats */}
          <FadeIn delay={0.5} direction="up">
            <div className="flex flex-col sm:flex-row items-center justify-center gap-6 text-sm text-white/50">
              <div className="flex items-center gap-2.5">
                <div className="w-2.5 h-2.5 bg-green-500 rounded-full pulse-soft"></div>
                <span>Available for new projects</span>
              </div>
              <div className="hidden sm:block w-1 h-1 bg-white/30 rounded-full"></div>
              <span className=" below400:hidden">50+ Projects Delivered</span>
              <div className="hidden sm:block w-1 h-1 bg-white/30 rounded-full"></div>
              <span className="below400:hidden">24/7 Support</span>
            </div>
          </FadeIn>

        </div>
      </section>
    </>
  );
};