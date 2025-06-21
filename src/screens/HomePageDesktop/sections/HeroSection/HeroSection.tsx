import React from "react";
import { Button } from "../../../../components/ui/button";
import { Card, CardContent } from "../../../../components/ui/card";
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
  GlitchText,
  MatrixText,
  DataStream
} from "../../../../components/ui/animated-elements";

export const HeroSection = (): JSX.Element => {
  // Feature cards data
  const featureCards = [
    {
      icon: "/icon-19.svg",
      title: "Cloud Infrastructure",
    },
    {
      icon: "/icon-16.svg",
      title: "Digital Transformation",
    },
    {
      icon: "/icon-15.svg",
      title: "Cybersecurity Solutions",
    },
    {
      icon: "/icon-17.svg",
      title: "AI & Machine Learning",
    },
  ];

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

  // Circular text elements
  const circularTextElements = [
    {
      text: "🚀",
      rotate: "rotate-[172.02deg]",
      top: "top-[126px]",
      left: "left-[72px]",
    },
    {
      text: "I",
      rotate: "rotate-[-171.37deg]",
      top: "top-[125px]",
      left: "left-[57px]",
    },
    {
      text: "T",
      rotate: "rotate-[-160.43deg]",
      top: "top-[122px]",
      left: "left-12",
    },
    {
      text: "",
      rotate: "rotate-[-151.52deg]",
      top: "top-28",
      left: "left-[38px]",
    },
    {
      text: "S",
      rotate: "rotate-[-140.17deg]",
      top: "top-[100px]",
      left: "left-7",
    },
    {
      text: "o",
      rotate: "rotate-[-127.61deg]",
      top: "top-[83px]",
      left: "left-[18px]",
    },
    {
      text: "l",
      rotate: "rotate-[-115.06deg]",
      top: "top-[70px]",
      left: "left-2.5",
    },
    {
      text: "u",
      rotate: "rotate-[-102.50deg]",
      top: "top-[58px]",
      left: "left-1.5",
    },
    {
      text: "t",
      rotate: "rotate-[-91.15deg]",
      top: "top-[45px]",
      left: "left-1.5",
    },
    { text: "i", rotate: "rotate-[-82.24deg]", top: "top-9", left: "left-2" },
    {
      text: "o",
      rotate: "rotate-[-71.30deg]",
      top: "top-6",
      left: "left-[7px]",
    },
    {
      text: "n",
      rotate: "rotate-[-57.93deg]",
      top: "top-[11px]",
      left: "left-3.5",
    },
    {
      text: "s",
      rotate: "rotate-[-45.37deg]",
      top: "top-0",
      left: "left-[23px]",
    },
    {
      text: "",
      rotate: "rotate-[-34.44deg]",
      top: "top-0",
      left: "left-[33px]",
    },
    {
      text: "",
      rotate: "rotate-[-25.52deg]",
      top: "top-0",
      left: "left-[43px]",
    },
    {
      text: "T",
      rotate: "rotate-[-14.18deg]",
      top: "top-0.5",
      left: "left-[51px]",
    },
    {
      text: "h",
      rotate: "rotate-[-2.03deg]",
      top: "top-0",
      left: "left-[67px]",
    },
    {
      text: "a",
      rotate: "rotate-[9.32deg]",
      top: "top-px",
      left: "left-[77px]",
    },
    {
      text: "t",
      rotate: "rotate-[22.28deg]",
      top: "top-[5px]",
      left: "left-[91px]",
    },
    { text: "", rotate: "rotate-[37.27deg]", top: "top-0.5", left: "left-1" },
    {
      text: "",
      rotate: "rotate-[49.83deg]",
      top: "-top-0.5",
      left: "left-1.5",
    },
    {
      text: "W",
      rotate: "rotate-[59.96deg]",
      top: "-top-px",
      left: "left-1.5",
    },
    { text: "o", rotate: "rotate-[70.90deg]", top: "top-2.5", left: "left-3" },
    {
      text: "r",
      rotate: "rotate-[82.24deg]",
      top: "top-[22px]",
      left: "left-[13px]",
    },
    {
      text: "k",
      rotate: "rotate-[95.20deg]",
      top: "top-[37px]",
      left: "left-[13px]",
    },
    {
      text: "s",
      rotate: "rotate-[108.17deg]",
      top: "top-[50px]",
      left: "left-[11px]",
    },
    {
      text: "",
      rotate: "rotate-[119.51deg]",
      top: "top-[62px]",
      left: "left-[7px]",
    },
    {
      text: "",
      rotate: "rotate-[129.23deg]",
      top: "top-[79px]",
      left: "left-1.5",
    },
    {
      text: "",
      rotate: "rotate-[140.17deg]",
      top: "top-[101px]",
      left: "left-2",
    },
    {
      text: "",
      rotate: "rotate-[150.30deg]",
      top: "top-[117px]",
      left: "left-[101px]",
    },
  ];

  return (
    <section className="flex flex-col w-full items-start relative mt-[162px] overflow-hidden">
      {/* Digital Rain Background */}
      <DigitalRain />
      
      {/* Circuit Animation Background */}
      <CircuitAnimation />
      
      {/* Data Stream Animation */}
      <DataStream />
      
      <div className="flex items-center gap-20 relative self-stretch w-full">
        <div className="flex flex-col items-start justify-center gap-[60px] pl-[162px] pr-0 py-0 relative flex-1 self-stretch z-[1]">
          <div className="flex flex-col items-end gap-6 relative self-stretch w-full">
            <FadeIn delay={0.2} direction="up">
              <GlitchText>
                <h1 className="font-semibold text-white text-6xl leading-[72px] relative self-stretch mt-[-1px] [font-family:'Urbanist',Helvetica] tracking-[0] bg-gradient-to-r from-purple-400 via-white to-purple-400 bg-clip-text text-transparent animate-gradient-shift bg-[length:200%_auto]">
                  <TypewriterText 
                    text="Accelerate Your Digital Future with TechFlow" 
                    speed={0.03}
                  />
                </h1>
              </GlitchText>
            </FadeIn>

            <FadeIn delay={0.8} direction="up">
              <p className="font-medium text-grey-60 tracking-[0] relative self-stretch [font-family:'Urbanist',Helvetica] text-lg leading-[27px]">
                <MatrixText text="Your journey to digital transformation starts here." />
                <br />
                Explore our comprehensive IT solutions designed to propel your business into the future with cutting-edge technology and innovation.
              </p>
            </FadeIn>

            <FloatingElement intensity={15} duration={4}>
              <FadeIn delay={1.2} direction="right">
                <div className="flex w-[175px] h-[175px] items-start gap-[15.91px] p-[47.73px] absolute top-0 left-[742px] bg-grey-08 rounded-[159.09px] overflow-hidden border-[1.59px] border-solid border-purple-60/50 shadow-lg shadow-purple-600/20 backdrop-blur-sm">
                  <div className="relative w-[79.55px] h-[79.55px] bg-gradient-to-br from-purple-600/20 to-grey-10 rounded-[89.09px] border-[1.59px] border-solid border-purple-60/30 animate-pulse-slow" />

                  <div className="absolute w-[34px] h-[34px] top-[70px] left-[70px] animate-spin-slow">
                    <img
                      className="w-full h-full filter brightness-125 hue-rotate-[280deg]"
                      alt="Icon"
                      src="/icon-2.svg"
                    />
                  </div>

                  <div className="absolute w-[204px] h-36 top-4 left-4 animate-spin-slow">
                    {circularTextElements.map((item, index) => (
                      <div
                        key={index}
                        className={`absolute ${item.top} ${item.left} ${item.rotate} [font-family:'Urbanist',Helvetica] font-semibold text-purple-300 text-[15px] tracking-[0] leading-[normal] whitespace-nowrap hover:text-purple-100 transition-colors duration-300`}
                      >
                        {item.text}
                      </div>
                    ))}
                  </div>
                </div>
              </FadeIn>
            </FloatingElement>
          </div>

          <FadeIn delay={1.4} direction="up">
            <div className="flex items-center gap-5 relative self-stretch w-full">
              <GlowButton className="px-6 py-[18px] h-auto rounded-[10px] border border-solid border-purple-60/50 font-medium text-white text-lg [font-family:'Urbanist',Helvetica] bg-transparent hover:bg-purple-60/10 transition-all duration-300 backdrop-blur-sm">
                Learn More
              </GlowButton>

              <GlowButton className="px-6 py-[18px] h-auto bg-gradient-to-r from-purple-600 to-purple-700 hover:from-purple-500 hover:to-purple-600 rounded-[10px] font-medium text-white text-lg [font-family:'Urbanist',Helvetica] shadow-lg shadow-purple-600/25 transition-all duration-300">
                Explore Solutions
              </GlowButton>
            </div>
          </FadeIn>

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
        </div>

        <ParallaxElement speed={0.3}>
          <FadeIn delay={1.0} direction="left">
            <div className="flex h-[814px] items-start gap-2.5 relative flex-1 z-0 bg-gradient-to-br from-grey-10 to-grey-08 overflow-hidden rounded-l-3xl border-l border-t border-b border-purple-60/20 shadow-2xl shadow-purple-600/10">
              <div className="absolute w-[1924px] h-[1286px] top-[-237px] left-[-502px]">
                <div className="relative w-[1922px] h-[1283px] top-px left-px">
                  <div className="h-[1283px]">
                    <div className="relative w-[1922px] h-[1283px]">
                      <img
                        className="absolute w-[920px] h-[814px] top-[236px] left-[501px] opacity-80"
                        alt="Group"
                        src="/group-10.png"
                      />
                    </div>
                  </div>
                </div>
              </div>

              <img
                className="relative flex-1 self-stretch object-cover hover:scale-105 transition-transform duration-700 filter brightness-110 contrast-110"
                alt="Technology infrastructure"
                src="https://images.pexels.com/photos/325229/pexels-photo-325229.jpeg?auto=compress&cs=tinysrgb&w=800"
              />
              
              {/* Digital overlay effects */}
              <div className="absolute inset-0 bg-gradient-to-t from-purple-900/20 via-transparent to-purple-600/10 pointer-events-none" />
              <div className="absolute inset-0 bg-digital-grid bg-[size:30px_30px] opacity-10 pointer-events-none" />
            </div>
          </FadeIn>
        </ParallaxElement>
      </div>

      <FadeIn delay={1.8} direction="up">
        <div className="flex items-center gap-5 p-5 relative self-stretch w-full mb-[-1px] ml-[-1px] mr-[-1px] bg-gradient-to-r from-grey-08 via-purple-900/5 to-grey-08 border border-solid border-purple-60/30 shadow-[0px_0px_0px_10px_#191919,0px_0px_30px_rgba(124,58,237,0.1)] backdrop-blur-sm">
          <StaggerContainer staggerDelay={0.15}>
            {featureCards.map((feature, index) => (
              <StaggerItem key={index}>
                <Card className="flex-1 bg-gradient-to-br from-grey-10 to-grey-08 rounded-xl border border-solid border-purple-60/30 hover:border-purple-60/60 transition-all duration-500 shadow-lg shadow-purple-600/10 hover:shadow-purple-600/25 group hover:scale-105 backdrop-blur-sm">
                  <CardContent className="flex flex-col items-center gap-5 px-5 py-10 relative overflow-hidden">
                    <FloatingElement intensity={5} duration={3 + index * 0.5}>
                      <div className="inline-flex items-center gap-2.5 p-2.5 relative rounded-[100px] border-[none]">
                        <div className="inline-flex items-center gap-2.5 p-3.5 relative rounded-[100px] border-[none] bg-gradient-to-br from-purple-600/20 to-purple-800/10 group-hover:from-purple-500/30 group-hover:to-purple-700/20 transition-all duration-300">
                          <img
                            className="relative w-[34px] h-[34px] filter brightness-125 hue-rotate-[280deg] group-hover:brightness-150 transition-all duration-300"
                            alt="Icon"
                            src={feature.icon}
                          />
                        </div>
                      </div>
                    </FloatingElement>

                    <h3 className="relative self-stretch [font-family:'Urbanist',Helvetica] font-semibold text-transparent bg-gradient-to-r from-white to-purple-200 bg-clip-text group-hover:from-purple-100 group-hover:to-white text-xl text-center tracking-[0] leading-[30px] transition-all duration-300">
                      <MatrixText text={feature.title} />
                    </h3>

                    <div className="absolute w-[34px] h-[34px] top-5 right-5 animate-pulse opacity-30 group-hover:opacity-60 transition-opacity duration-300">
                      <img
                        className="w-full h-full filter hue-rotate-[280deg]"
                        alt="Icon"
                        src="/icon-2.svg"
                      />
                    </div>
                    
                    {/* Digital particles effect */}
                    <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                      <DataStream />
                    </div>
                  </CardContent>
                </Card>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </FadeIn>
    </section>
  );
};