import React from "react";
import { Button } from "../../../../components/ui/button";
import { 
  FadeIn, 
  StaggerContainer, 
  StaggerItem, 
  FloatingElement,
  GlowButton
} from "../../../../components/ui/animated-elements";

export const ContactHeroSection: React.FC = () => {
  return (
    <section className="relative w-full min-h-screen pt-0 bg-gradient-to-br from-[#00020F] via-[#00041F] to-[#194EFF]/20 overflow-hidden flex items-center h-[120rem] lg:h-screen below400:h-[120rem]">
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
          <div className="space-y-4">
            <FadeIn delay={0.1} direction="up">
              <div className="inline-flex items-center gap-2 px-5 py-2.5 bg-white/8 border border-[#194EFF]/25 rounded-full mb-0 backdrop-blur-lg shadow-lg shadow-[#194EFF]/10">
                <div className="w-2.5 h-2.5 bg-[#194EFF] rounded-full animate-pulse shadow-sm shadow-[#194EFF]/50"></div>
                <span className="text-[#194EFF] text-sm font-semibold tracking-wide">GET IN TOUCH</span>
              </div>
            </FadeIn>

            <FadeIn delay={0.2} direction="up">
              <h1 className="text-5xl md:text-6xl lg:text-6xl font-bold text-white mb-6 leading-tight">
                Let's Build
                <span className="block bg-gradient-to-r from-[#194EFF] via-[#194EFF]/90 to-[#194EFF]/70 bg-clip-text text-transparent">
                  Something Amazing
                </span>
                Together
              </h1>
            </FadeIn>

            <FadeIn delay={0.3} direction="up">
              <p className="text-xl text-white/70 leading-relaxed font-light max-w-2xl">
                Ready to transform your business with cutting-edge technology? Our team of experts is here to help you bring your vision to life. Let's start the conversation today.
              </p>
            </FadeIn>

            <FadeIn delay={0.4} direction="up">
              <div className="flex flex-col sm:flex-row gap-4 pt-4">
                <GlowButton 
                  onClick={() => window.open('https://calendly.com/codava-support/consultation', '_blank')}
                  className="px-8 py-4 bg-gradient-to-r from-[#194EFF] to-[#194EFF]/90 text-white font-semibold text-lg rounded-2xl hover:from-[#194EFF]/90 hover:to-[#194EFF]/80 transition-all duration-300 shadow-xl shadow-[#194EFF]/25 hover:shadow-[#194EFF]/40 hover:scale-105 transform"
                >
                  Start Your Project
                </GlowButton>
                {/* <Button className="px-8 py-10 bg-white/8 text-white font-semibold text-xl rounded-2xl border border-white/20 hover:bg-white/15 hover:border-[#194EFF]/40 transition-all duration-300 backdrop-blur-sm hover:scale-105 transform">
                  Schedule a Call
                </Button> */}
              </div>
            </FadeIn>
          </div>

          {/* Right Content - Contact Stats */}
          <div className="space-y-8">
            <StaggerContainer staggerDelay={0.1}>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <StaggerItem>
                  <FloatingElement intensity={3} duration={4}>
                    <div className="bg-white/[0.03] border border-white/10 rounded-3xl p-8 backdrop-blur-xl shadow-lg shadow-black/20 hover:shadow-[#194EFF]/10 transition-all duration-500 group">
                      <div className="w-16 h-16 bg-gradient-to-br from-[#194EFF]/15 to-[#194EFF]/5 border border-[#194EFF]/20 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 group-hover:border-[#194EFF]/40 transition-all duration-300">
                        <svg className="w-8 h-8 text-[#194EFF]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                        </svg>
                      </div>
                      <h3 className="text-2xl font-bold text-white mb-2">24/7 Support</h3>
                      <p className="text-white/60 text-sm">Round-the-clock assistance for all your needs</p>
                    </div>
                  </FloatingElement>
                </StaggerItem>

                <StaggerItem>
                  <FloatingElement intensity={3} duration={4}>
                    <div className="bg-white/[0.03] border border-white/10 rounded-3xl p-8 backdrop-blur-xl shadow-lg shadow-black/20 hover:shadow-[#194EFF]/10 transition-all duration-500 group">
                      <div className="w-16 h-16 bg-gradient-to-br from-[#194EFF]/15 to-[#194EFF]/5 border border-[#194EFF]/20 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 group-hover:border-[#194EFF]/40 transition-all duration-300">
                        <svg className="w-8 h-8 text-[#194EFF]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                      </div>
                      <h3 className="text-2xl font-bold text-white mb-2">Quick Response</h3>
                      <p className="text-white/60 text-sm">Get back to you within 2 hours to anwswer your questions</p>
                    </div>
                  </FloatingElement>
                </StaggerItem>

                <StaggerItem>
                  <FloatingElement intensity={3} duration={4}>
                    <div className="bg-white/[0.03] border border-white/10 rounded-3xl p-8 backdrop-blur-xl shadow-lg shadow-black/20 hover:shadow-[#194EFF]/10 transition-all duration-500 group">
                      <div className="w-16 h-16 bg-gradient-to-br from-[#194EFF]/15 to-[#194EFF]/5 border border-[#194EFF]/20 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 group-hover:border-[#194EFF]/40 transition-all duration-300">
                        <svg className="w-8 h-8 text-[#194EFF]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                        </svg>
                      </div>
                      <h3 className="text-2xl font-bold text-white mb-2">Secure & Private</h3>
                      <p className="text-white/60 text-sm">Your data is protected and secure with us </p>
                    </div>
                  </FloatingElement>
                </StaggerItem>

                <StaggerItem>
                  <FloatingElement intensity={3} duration={4}>
                    <div className="bg-white/[0.03] border border-white/10 rounded-3xl p-8 backdrop-blur-xl shadow-lg shadow-black/20 hover:shadow-[#194EFF]/10 transition-all duration-500 group">
                      <div className="w-16 h-16 bg-gradient-to-br from-[#194EFF]/15 to-[#194EFF]/5 border border-[#194EFF]/20 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 group-hover:border-[#194EFF]/40 transition-all duration-300">
                        <svg className="w-8 h-8 text-[#194EFF]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                        </svg>
                      </div>
                      <h3 className="text-2xl font-bold text-white mb-2">Expert Team</h3>
                      <p className="text-white/60 text-sm">Dedicated professionals at your service</p>
                    </div>
                  </FloatingElement>
                </StaggerItem>
              </div>
            </StaggerContainer>
          </div>
        </div>
      </div>
    </section>
  );
}; 