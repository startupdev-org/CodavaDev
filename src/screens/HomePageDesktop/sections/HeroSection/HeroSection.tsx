import React from "react";
import { Button } from "../../../../components/ui/button";
import { Card, CardContent } from "../../../../components/ui/card";
import { Badge } from "../../../../components/ui/badge";
import { Globe } from "../../../../components/ui/globe";
import { 
  FadeIn, 
  StaggerContainer, 
  StaggerItem, 
  GlowButton
} from "../../../../components/ui/animated-elements";

export const HeroSection = (): JSX.Element => {
  // Stats data for digital agency
  const stats = [
    {
      value: "250+",
      label: "Projects Delivered",
    },
    {
      value: "98%",
      label: "Client Satisfaction",
    },
    {
      value: "5x",
      label: "ROI Increase",
    },
    {
      value: "24/7",
      label: "Support Available",
    },
  ];

  // Service cards with relevant icons for digital agency
  const services = [
    {
      name: "Web Development",
      description: "Custom websites & applications",
      icon: (
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
        </svg>
      ),
    },
    {
      name: "Design",
      description: "UI/UX & brand identity",
      icon: (
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zM21 5a2 2 0 00-2-2h-4a2 2 0 00-2 2v12a4 4 0 004 4h4a2 2 0 002-2V5z" />
        </svg>
      ),
    },
    {
      name: "Digital Advertising",
      description: "Google & Facebook Ads",
      icon: (
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5.882V19.24a1.76 1.76 0 01-3.417.592l-2.147-6.15M18 13a3 3 0 100-6M5.436 13.683A4.001 4.001 0 017 6h1.832c4.1 0 7.625-1.234 9.168-3v14c-1.543-1.766-5.067-3-9.168-3H7a3.988 3.988 0 01-1.564-.317z" />
        </svg>
      ),
    },
    {
      name: "SEO",
      description: "Search engine optimization",
      icon: (
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
        </svg>
      ),
    },
    {
      name: "Copywriting",
      description: "Content that converts",
      icon: (
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z" />
        </svg>
      ),
    },
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

      <div className="relative max-w-[1600px] mx-auto px-6 w-full">
        {/* Main Hero Content */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-20 items-center">
          {/* Left Content - Takes up 5 columns */}
          <div className="lg:col-span-5 space-y-8 z-10">
            <FadeIn delay={0.1} direction="up">
              <Badge className="inline-flex items-center gap-2 px-5 py-2.5 bg-white/[0.03] text-white border border-[#194EFF]/30 rounded-full backdrop-blur-sm hover:bg-white/[0.05] transition-all duration-300 shadow-lg group">
                <div className="w-2 h-2 bg-[#194EFF] rounded-full animate-pulse group-hover:animate-ping"></div>
                <span className="text-sm font-medium group-hover:text-[#194EFF] transition-colors duration-300">DIGITAL AGENCY</span>
              </Badge>
            </FadeIn>

            <FadeIn delay={0.2} direction="up">
              <div className="space-y-6">
                <h1 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold leading-[1.1] text-white">
                  <span className="inline-block hover:scale-105 transition-transform duration-300">Transform</span>{" "}
                  <span className="inline-block hover:scale-105 transition-transform duration-300">Your</span>
                  <br />
                  <span className="text-transparent bg-gradient-to-r from-[#194EFF] via-blue-400 to-[#194EFF] bg-clip-text animate-pulse inline-block hover:scale-105 transition-all duration-300">
                    Digital Presence
                  </span>
                </h1>
              </div>
            </FadeIn>

            <FadeIn delay={0.3} direction="up">
              <p className="text-lg md:text-xl text-white/80 leading-relaxed max-w-2xl font-light hover:text-white/90 transition-colors duration-300">
                From stunning websites to powerful marketing campaigns, we craft digital experiences that reach audiences worldwide and help your brand make a global impact.
              </p>
            </FadeIn>

            <FadeIn delay={0.4} direction="up">
              <div className="flex flex-col sm:flex-row gap-4 pt-4">
                <GlowButton className="group px-8 py-4 bg-[#194EFF] hover:bg-[#194EFF]/90 rounded-xl font-semibold text-lg transition-all duration-300 flex items-center justify-center gap-2 shadow-2xl hover:shadow-[#194EFF]/30 hover:scale-105 transform relative overflow-hidden text-white">
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
                  <span className="relative z-10">View Portfolio</span>
                  <svg className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1 relative z-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                  </svg>
                </GlowButton>

                <GlowButton className="group px-8 py-4 bg-white/[0.03] border border-[#194EFF]/30 hover:border-[#194EFF]/50 hover:bg-white/[0.05] rounded-xl font-semibold text-white text-lg transition-all duration-300 backdrop-blur-sm hover:scale-105 transform shadow-lg relative overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-[#194EFF]/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
                  <span className="relative z-10">Get Free Quote</span>
                </GlowButton>
              </div>
            </FadeIn>

            {/* Enhanced Trust Indicators */}
            <FadeIn delay={0.5} direction="up">
              <div className="flex flex-col sm:flex-row sm:items-center gap-4 pt-8">
                <div className="flex items-center gap-3">
                  <div className="flex -space-x-2">
                    <div className="w-9 h-9 bg-gradient-to-br from-[#194EFF]/30 to-[#194EFF]/20 rounded-full border-2 border-[#194EFF]/40 flex items-center justify-center text-white text-xs font-bold backdrop-blur-sm shadow-lg hover:scale-110 transition-transform duration-300 cursor-pointer">G</div>
                    <div className="w-9 h-9 bg-gradient-to-br from-[#194EFF]/30 to-[#194EFF]/20 rounded-full border-2 border-[#194EFF]/40 flex items-center justify-center text-white text-xs font-bold backdrop-blur-sm shadow-lg hover:scale-110 transition-transform duration-300 cursor-pointer">L</div>
                    <div className="w-9 h-9 bg-gradient-to-br from-[#194EFF]/30 to-[#194EFF]/20 rounded-full border-2 border-[#194EFF]/40 flex items-center justify-center text-white text-xs font-bold backdrop-blur-sm shadow-lg hover:scale-110 transition-transform duration-300 cursor-pointer">+</div>
                  </div>
                  <span className="text-white/80 text-sm font-medium hover:text-white transition-colors duration-300">Trusted by global brands</span>
                </div>
                <div className="hidden sm:block h-4 w-px bg-gradient-to-b from-[#194EFF]/50 to-transparent"></div>
                <div className="flex items-center gap-2">
                  <div className="flex gap-1">
                    {[...Array(5)].map((_, i) => (
                      <svg key={i} className="w-4 h-4 text-yellow-400 drop-shadow-sm hover:scale-125 hover:text-yellow-300 transition-all duration-300 cursor-pointer" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    ))}
                  </div>
                  <span className="text-white/80 text-sm ml-1 font-medium hover:text-white transition-colors duration-300">4.9/5 rating</span>
                </div>
              </div>
            </FadeIn>
          </div>

          {/* Right Side - Interactive Globe - Takes up 7 columns */}
          <div className="lg:col-span-7 relative flex items-center justify-center min-h-[500px]">
            <FadeIn delay={0.6} direction="left">
              <div className="relative w-full max-w-2xl mx-auto">
                {/* Interactive Globe */}
                <div className="relative w-full h-[500px] flex items-center justify-center">
                  <Globe className="w-full h-full" />
                </div>

                {/* Floating Service Cards around Globe */}
                <StaggerContainer staggerDelay={0.1}>
                  {services.map((service, index) => {
                    const angle = (index * 72) - 90; // 72 degrees apart for 5 services
                    const radius = 200;
                    const x = Math.cos(angle * Math.PI / 180) * radius;
                    const y = Math.sin(angle * Math.PI / 180) * radius;
                    
                    return (
                      <StaggerItem key={index}>
                        <Card 
                          className="absolute w-20 h-20 bg-white/[0.03] border border-[#194EFF]/20 rounded-xl shadow-xl backdrop-blur-xl hover:scale-110 hover:border-[#194EFF]/40 hover:shadow-[#194EFF]/20 transition-all duration-500 group cursor-pointer z-10"
                          style={{
                            left: `calc(50% + ${x}px)`,
                            top: `calc(50% + ${y}px)`,
                            transform: 'translate(-50%, -50%)',
                            animationDelay: `${index * 0.2}s`
                          }}
                        >
                          <CardContent className="p-0 h-full flex items-center justify-center relative overflow-hidden">
                            <div className="absolute inset-0 bg-gradient-to-br from-[#194EFF]/0 via-[#194EFF]/5 to-[#194EFF]/10 opacity-0 group-hover:opacity-100 transition-all duration-500 rounded-xl"></div>
                            
                            <div className="text-white text-2xl group-hover:text-[#194EFF] transition-all duration-500 z-10 group-hover:scale-110 transform">
                              {service.icon}
                            </div>
                            
                            {/* Enhanced tooltip */}
                            <div className="absolute bottom-full mb-3 left-1/2 transform -translate-x-1/2 bg-gradient-to-r from-[#00041F]/95 to-[#194EFF]/95 border border-[#194EFF]/40 rounded-lg px-3 py-2 opacity-0 group-hover:opacity-100 transition-all duration-500 pointer-events-none whitespace-nowrap z-20 shadow-2xl">
                              <div className="text-white text-xs font-semibold text-center">{service.name}</div>
                              <div className="text-[#194EFF] text-[10px] text-center font-medium">{service.description}</div>
                              <div className="absolute top-full left-1/2 transform -translate-x-1/2 w-0 h-0 border-l-2 border-r-2 border-t-2 border-transparent border-t-[#194EFF]/60"></div>
                            </div>
                            
                            {/* Floating particles on hover */}
                            <div className="absolute -top-1 -right-1 w-1 h-1 bg-[#194EFF] rounded-full opacity-0 group-hover:opacity-100 group-hover:animate-ping"></div>
                          </CardContent>
                        </Card>
                      </StaggerItem>
                    );
                  })}
                </StaggerContainer>

                {/* Orbiting Ring around Globe */}
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[450px] h-[450px] border border-[#194EFF]/10 rounded-full animate-spin" style={{animationDuration: '60s'}}></div>
              </div>
            </FadeIn>
          </div>
        </div>

        {/* Enhanced Stats Section */}
        <div className="mt-16">
          <FadeIn delay={0.7} direction="up">
            <div className="bg-white/[0.03] border border-[#194EFF]/20 rounded-3xl p-8 lg:p-10 backdrop-blur-xl shadow-2xl hover:shadow-[#194EFF]/10 transition-all duration-500 group relative overflow-hidden">
              {/* Stats background animation */}
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-[#194EFF]/5 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-2000 rounded-3xl"></div>
              
              <StaggerContainer staggerDelay={0.1}>
                <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12 relative z-10">
                  {stats.map((stat, index) => (
                    <StaggerItem key={index}>
                      <div className="text-center group hover:scale-105 transition-transform duration-300 cursor-pointer">
                        <div className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-2 bg-gradient-to-r from-white to-[#194EFF] bg-clip-text text-transparent group-hover:from-[#194EFF] group-hover:to-white transition-all duration-300">
                          {stat.value}
                        </div>
                        <div className="text-white/60 text-sm md:text-base font-medium group-hover:text-white/80 transition-colors duration-300">
                          {stat.label}
                        </div>
                        {/* Subtle underline effect */}
                        <div className="w-0 h-0.5 bg-gradient-to-r from-[#194EFF] to-white mx-auto mt-3 group-hover:w-full transition-all duration-500"></div>
                      </div>
                    </StaggerItem>
                  ))}
                </div>
              </StaggerContainer>
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
};