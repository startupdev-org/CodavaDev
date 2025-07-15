import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { Button } from "../../components/ui/button";
import { HeaderSection } from "../FixedComponents/HeaderSection";
import { FooterSection } from "../FixedComponents/FooterSection";
import { FadeIn } from "../../components/ui/animated-elements";

export const NotFoundPage = (): JSX.Element => {
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
          {/* 404 Content */}
          <section className="relative w-full h-screen bg-gradient-to-br from-[#00020F] via-[#000818] to-[#001122] overflow-hidden flex items-center justify-center">
            {/* Live Background Elements */}
            <div className="absolute inset-0">
              {/* Main animated gradient - similar to Arise */}
              <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-to-r from-[#194EFF]/15 via-[#194EFF]/8 to-transparent rounded-full blur-3xl gradient-shift"></div>
              
              {/* Secondary animated gradient */}
              <div className="absolute top-1/3 right-1/4 w-[500px] h-[500px] bg-gradient-to-r from-[#4169E1]/10 to-transparent rounded-full blur-3xl gradient-shift" style={{animationDelay: '5s'}}></div>
              
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
            
            {/* 404 Content */}
            <div className="relative max-w-6xl mx-auto px-6 text-center below400:pt-[170px] pt-[100px] pb-16">
              
              {/* Error Badge */}
              <FadeIn delay={0.1} direction="up">
                <div className="inline-flex items-center gap-2 px-5 py-2.5 bg-white/5 border border-white/10 rounded-full mb-8 backdrop-blur-lg shadow-lg">
                  <div className="w-2 h-2 bg-[#194EFF] rounded-full animate-pulse shadow-sm shadow-[#194EFF]/50"></div>
                  <span className="text-white/80 text-sm font-semibold tracking-wide">
                    Page Not Found
                  </span>
                </div>
              </FadeIn>

              {/* 404 Number */}
              <FadeIn delay={0.2} direction="up">
                <div className="text-8xl md:text-6xl lg:text-[10rem] font-black text-transparent bg-gradient-to-r from-[#194EFF] via-[#4169E1] to-[#194EFF] bg-clip-text mb-6 leading-none">
                  404
                </div>
              </FadeIn>

              {/* Main Heading */}
              <FadeIn delay={0.3} direction="up">
                <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold leading-[1.1] text-white tracking-tight mb-7">
                  Oops! Page
                  <span className="block text-transparent bg-gradient-to-r from-[#194EFF] to-[#4169E1] bg-clip-text mt-1 lg:h-[60px]">
                    Not Found
                  </span>
                </h1>
              </FadeIn>

              {/* Description */}
              <FadeIn delay={0.4} direction="up">
                <p className="text-base lg:text-lg text-white/70 leading-relaxed max-w-3xl mx-auto mb-12">
                  The page you're looking for doesn't exist. It might have been moved, deleted, or you entered the wrong URL.
                </p>
              </FadeIn>

              {/* CTA Buttons */}
              <FadeIn delay={0.5} direction="up">
                <div className="flex flex-col sm:flex-row gap-5 justify-center items-center mb-12">
                  <button 
                    className="group px-9 py-3.5 bg-[#194EFF] text-white font-semibold text-base rounded-lg hover:bg-[#1E40AF] transition-all duration-300 shadow-lg shadow-[#194EFF]/25 hover:shadow-[#194EFF]/40 transform hover:scale-105"
                    onClick={() => navigate('/')}
                  >
                    <span className="flex items-center gap-2.5">
                      Go Home
                      <svg className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                      </svg>
                    </span>
                  </button>
                  
                  <button 
                    className="group px-9 py-3.5 bg-white/10 text-white font-semibold text-base rounded-lg border border-white/20 hover:bg-white/20 transition-all duration-300 backdrop-blur-sm"
                    onClick={() => navigate('/contact')}
                  >
                    <span className="flex items-center gap-2.5">
                      Contact Support
                      <svg className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                      </svg>
                    </span>
                  </button>
                </div>
              </FadeIn>
            </div>
          </section>
        </main>
        
        <FooterSection />
      </div>
    </>
  );
}; 