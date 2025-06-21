import React from "react";
import { Button } from "../../../../components/ui/button";
import { Card, CardContent } from "../../../../components/ui/card";
import { motion } from "framer-motion";
import { 
  FadeIn, 
  StaggerContainer, 
  StaggerItem, 
  TypewriterText, 
  FloatingElement, 
  GlowButton,
  DigitalRain,
  CircuitAnimation,
  ParallaxElement,
  SimpleText,
  MatrixText,
  DataStream
} from "../../../../components/ui/animated-elements";

export const HeroSection = (): JSX.Element => {
  // Stats data
  const stats = [
    {
      value: "500+",
      label: "Projects Delivered",
    },
    {
      value: "50+",
      label: "Enterprise Clients",
    },
    {
      value: "10+",
      label: "Years of Excellence",
    },
  ];

  return (
    <section className="flex flex-col w-full items-start relative min-h-screen overflow-hidden pt-20">
      {/* Digital Rain Background */}
      <DigitalRain />
      
      {/* Circuit Animation Background */}
      <CircuitAnimation />
      
      {/* Data Stream Animation */}
      <DataStream />
      
      {/* Main Hero Content */}
      <div className="flex items-center justify-between w-full max-w-[1600px] mx-auto px-8 py-32 relative z-10">
        <div className="flex flex-col items-start justify-center gap-12 relative flex-1 max-w-3xl">
          {/* Hero Badge */}
          <FadeIn delay={0.1} direction="up">
            <div className="inline-flex items-center gap-3 px-6 py-3 bg-gradient-to-r from-purple-600/20 to-purple-800/20 rounded-full border border-purple-60/30 backdrop-blur-sm">
              <div className="w-2 h-2 bg-purple-400 rounded-full animate-pulse" />
              <span className="text-purple-200 text-sm font-medium">🚀 Leading IT Solutions Provider</span>
            </div>
          </FadeIn>

          <div className="flex flex-col items-start gap-8 relative self-stretch w-full">
            <FadeIn delay={0.2} direction="up">
              <h1 className="font-semibold text-white text-6xl leading-[72px] relative self-stretch mt-[-1px] [font-family:'Urbanist',Helvetica] tracking-[0] bg-gradient-to-r from-purple-400 via-white to-purple-400 bg-clip-text text-transparent animate-gradient-shift bg-[length:200%_auto]">
                <TypewriterText 
                  text="Accelerate Your Digital Future with TechFlow" 
                  speed={0.03}
                />
              </h1>
            </FadeIn>

            <FadeIn delay={0.8} direction="up">
              <p className="font-medium text-grey-60 tracking-[0] relative self-stretch [font-family:'Urbanist',Helvetica] text-lg leading-[27px]">
                <MatrixText text="Your journey to digital transformation starts here." />
                <br />
                Explore our comprehensive IT solutions designed to propel your business into the future with cutting-edge technology and innovation.
              </p>
            </FadeIn>
          </div>

          {/* CTA Buttons */}
          <FadeIn delay={1.4} direction="up">
            <div className="flex items-center gap-6 relative self-stretch w-full">
              <GlowButton className="px-8 py-4 h-auto bg-gradient-to-r from-purple-600 to-purple-700 hover:from-purple-500 hover:to-purple-600 rounded-xl font-medium text-white text-lg [font-family:'Urbanist',Helvetica] shadow-lg shadow-purple-600/25 transition-all duration-300 transform hover:scale-105">
                Get Started Now
              </GlowButton>

              <GlowButton className="px-8 py-4 h-auto rounded-xl border border-solid border-purple-60/50 font-medium text-purple-200 hover:text-white text-lg [font-family:'Urbanist',Helvetica] bg-transparent hover:bg-purple-60/10 transition-all duration-300 backdrop-blur-sm">
                <div className="flex items-center gap-2">
                  <span>Watch Demo</span>
                  <div className="w-6 h-6 rounded-full bg-purple-600/20 flex items-center justify-center">
                    <div className="w-0 h-0 border-l-[6px] border-l-purple-400 border-t-[4px] border-t-transparent border-b-[4px] border-b-transparent ml-1" />
                  </div>
                </div>
              </GlowButton>
            </div>
          </FadeIn>

          {/* Stats Section */}
          <FadeIn delay={1.6} direction="up">
            <StaggerContainer staggerDelay={0.2}>
              <div className="flex items-start gap-5 relative self-stretch w-full">
                {stats.map((stat, index) => (
                  <StaggerItem key={index}>
                    <Card className="flex-1 bg-gradient-to-br from-grey-10 to-grey-08 rounded-xl border border-solid border-purple-60/30 hover:border-purple-60/50 transition-all duration-300 shadow-lg shadow-purple-600/10 hover:shadow-purple-600/20 backdrop-blur-sm group">
                      <CardContent className="flex flex-col items-start gap-0.5 px-6 py-4">
                        <h2 className="font-bold text-transparent bg-gradient-to-r from-purple-400 to-white bg-clip-text text-[40px] leading-[60px] relative self-stretch mt-[-1px] [font-family:'Urbanist',Helvetica] tracking-[0] group-hover:from-purple-300 group-hover:to-purple-100 transition-all duration-300">
                          <MatrixText text={stat.value} />
                        </h2>
                        <p className="font-medium text-grey-60 group-hover:text-grey-40 tracking-[0] relative self-stretch [font-family:'Urbanist',Helvetica] text-lg leading-[27px] transition-colors duration-300">
                          {stat.label}
                        </p>
                      </CardContent>
                    </Card>
                  </StaggerItem>
                ))}
              </div>
            </StaggerContainer>
          </FadeIn>
        </div>

        {/* Right Side - 3D Visual */}
        <ParallaxElement speed={0.3}>
          <FadeIn delay={1.0} direction="left">
            <div className="flex-1 max-w-4xl relative">
              <FloatingElement intensity={15} duration={4}>
                <div className="relative w-[800px] h-[800px] mx-auto">
                  {/* Central Hub */}
                  <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-40 h-40 bg-gradient-to-br from-purple-600 to-purple-800 rounded-full shadow-2xl shadow-purple-600/30 flex items-center justify-center border-4 border-purple-400/30 backdrop-blur-sm">
                    <div className="text-white text-3xl font-bold animate-pulse">IT</div>
                    <div className="absolute inset-0 rounded-full bg-gradient-to-br from-purple-400/20 to-transparent " />
                  </div>

                  {/* Orbiting Elements */}
                  {[
                    { icon: "☁️", label: "Cloud", angle: 0 },
                    { icon: "🔒", label: "Security", angle: 72 },
                    { icon: "🤖", label: "AI/ML", angle: 144 },
                    { icon: "📊", label: "Analytics", angle: 216 },
                    { icon: "⚡", label: "Automation", angle: 288 },
                  ].map((item, index) => {
                    const radius = 280;
                    const x = Math.cos((item.angle * Math.PI) / 180) * radius;
                    const y = Math.sin((item.angle * Math.PI) / 180) * radius;
                    
                    return (
                      <motion.div
                        key={index}
                        className="absolute w-28 h-28 bg-gradient-to-br from-grey-08 to-purple-900/20 rounded-2xl shadow-lg shadow-purple-600/20 border border-purple-60/30 backdrop-blur-sm flex flex-col items-center justify-center transition-all duration-300 hover:scale-110 hover:shadow-purple-600/40"
                        style={{
                          left: `calc(50% + ${x}px)`,
                          top: `calc(50% + ${y}px)`,
                          transform: 'translate(-50%, -50%)',
                        }}
                        transition={{
                          rotate: {
                            duration: 20 + index * 2,
                            repeat: Infinity,
                            ease: "linear",
                          },
                        }}
                      >
                        <div className="text-3xl mb-1">{item.icon}</div>
                        <div className="text-purple-200 text-sm font-medium">{item.label}</div>
                      </motion.div>
                    );
                  })}

                  {/* Connection Lines */}
                  <svg className="absolute inset-0 w-full h-full pointer-events-none" style={{ zIndex: -1 }}>
                    {[
                      { angle: 0, label: "Cloud" },
                      { angle: 72, label: "Security" },
                      { angle: 144, label: "AI/ML" },
                      { angle: 216, label: "Analytics" },
                      { angle: 288, label: "Automation" }
                    ].map((item, index) => {
                      const startRadius = 80; // Start from edge of central hub
                      const endRadius = 220; // End before orbiting elements
                      const centerX = 400; // Half of new container width (800px)
                      const centerY = 400; // Half of new container height (800px)
                      const startX = centerX + Math.cos((item.angle * Math.PI) / 180) * startRadius;
                      const startY = centerY + Math.sin((item.angle * Math.PI) / 180) * startRadius;
                      const endX = centerX + Math.cos((item.angle * Math.PI) / 180) * endRadius;
                      const endY = centerY + Math.sin((item.angle * Math.PI) / 180) * endRadius;
                      
                      return (
                        <motion.line
                          key={index}
                          x1={startX}
                          y1={startY}
                          x2={endX}
                          y2={endY}
                          stroke="#a855f7"
                          strokeWidth="1.5"
                          strokeDasharray="4,4"
                          strokeOpacity="0.6"
                          initial={{ strokeDashoffset: 0 }}
                          animate={{ strokeDashoffset: -16 }}
                          transition={{
                            duration: 3,
                            repeat: Infinity,
                            ease: "linear",
                            delay: index * 0.3,
                          }}
                        />
                      );
                    })}
                  </svg>
                </div>
              </FloatingElement>
            </div>
          </FadeIn>
        </ParallaxElement>
      </div>
    </section>
  );
};