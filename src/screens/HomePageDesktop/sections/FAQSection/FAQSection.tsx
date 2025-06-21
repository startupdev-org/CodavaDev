import React from "react";
import { Button } from "../../../../components/ui/button";
import { Card, CardContent } from "../../../../components/ui/card";
import { Input } from "../../../../components/ui/input";
import { 
  FadeIn, 
  StaggerContainer, 
  StaggerItem, 
  GlowButton,
  FloatingElement,
  MatrixText,
  ParallaxElement,
  CircuitAnimation,
  DataStream,
  DigitalRain,
  TypewriterText
} from "../../../../components/ui/animated-elements";

export const FAQSection = (): JSX.Element => {
  // Footer navigation data
  const footerNavigation = [
    {
      title: "Home",
      links: [
        "Hero Section",
        "Features",
        "Solutions",
        "Testimonials",
        "FAQ's",
      ],
    },
    {
      title: "About Us",
      links: [
        "Our Story",
        "Our Team",
        "How We Work",
        "Our Expertise",
        "Our Clients",
      ],
    },
    {
      title: "Services",
      links: ["Cloud Solutions", "Cybersecurity", "AI & ML", "Digital Transformation"],
    },
    {
      title: "Solutions",
      links: [
        "Infrastructure Modernization",
        "Data Analytics",
        "Process Automation",
        "System Integration",
        "IT Consulting",
      ],
    },
    {
      title: "Contact Us",
      links: ["Get Quote", "Our Offices"],
    },
  ];

  // Social media icons
  const socialIcons = [
    { src: "/icon-9.svg", alt: "LinkedIn" },
    { src: "/icon-12.svg", alt: "Twitter" },
    { src: "/icon-5.svg", alt: "GitHub" },
    { src: "/icon-14.svg", alt: "YouTube" },
  ];

  return (
    <div className="flex flex-col w-full items-end relative overflow-hidden">
      {/* CTA Section */}
      <div className="flex items-center gap-[250px] px-[162px] py-[100px] relative w-full border-t border-b border-purple-60/30 bg-gradient-to-r from-grey-08 via-purple-900/10 to-grey-08 overflow-hidden">
        {/* Background Effects */}
        <DigitalRain />
        <CircuitAnimation />
        <DataStream />
        
        <ParallaxElement speed={0.2}>
          <img
            className="absolute w-[633px] h-[331px] top-9 right-0 opacity-60 filter hue-rotate-[280deg]"
            alt="Abstract design"
            src="/abstract-design.svg"
          />
        </ParallaxElement>

        <ParallaxElement speed={0.3}>
          <img
            className="absolute w-[546px] h-[308px] top-[59px] left-0 opacity-60 filter hue-rotate-[280deg]"
            alt="Abstract design"
            src="/abstract-design-1.svg"
          />
        </ParallaxElement>

        <FadeIn delay={0.2} direction="right">
          <div className="flex flex-col items-start gap-3.5 relative flex-1 z-10">
            <h2 className="relative self-stretch mt-[-1.00px] font-['Urbanist',Helvetica] font-semibold text-transparent bg-gradient-to-r from-purple-400 via-white to-purple-400 bg-clip-text text-5xl tracking-[0] leading-[72px] animate-gradient-shift bg-[length:200%_auto]">
              <TypewriterText text="Start Your Digital Transformation Today" speed={0.04} />
            </h2>

            <FadeIn delay={0.8} direction="up">
              <p className="font-medium text-grey-60 tracking-[0] relative self-stretch font-['Urbanist',Helvetica] text-lg leading-[27px]">
                Your next breakthrough is just a click away. Whether you're looking to modernize your infrastructure, implement AI solutions, or enhance cybersecurity, TechFlow is here to guide you every step of the way. Take the first step towards digital excellence and explore our comprehensive IT solutions.
              </p>
            </FadeIn>
          </div>
        </FadeIn>

        <FloatingElement intensity={10} duration={3}>
          <FadeIn delay={1.2} direction="left">
            <GlowButton className="px-6 py-[18px] h-auto bg-gradient-to-r from-purple-600 to-purple-700 hover:from-purple-500 hover:to-purple-600 rounded-[10px] font-['Urbanist',Helvetica] font-medium text-white text-lg leading-[27px] shadow-lg shadow-purple-600/25 transition-all duration-300 transform hover:scale-110 z-10 relative">
              Explore Solutions
            </GlowButton>
          </FadeIn>
        </FloatingElement>
      </div>

      {/* Footer Section */}
      <footer className="flex flex-col items-start w-full bg-gradient-to-b from-grey-08 to-grey-10 relative overflow-hidden">
        <CircuitAnimation />
        
        <div className="flex items-start gap-20 px-[162px] py-[100px] w-full relative z-10">
          {/* Logo and Newsletter Subscription */}
          <FadeIn delay={0.3} direction="right">
            <div className="flex flex-col w-[538px] items-start gap-[30px]">
              <FloatingElement intensity={5} duration={3}>
                <div className="relative w-40 h-12 flex items-center group cursor-pointer">
                  <div className="w-12 h-12 bg-gradient-to-br from-purple-600 to-purple-700 rounded-lg flex items-center justify-center mr-3 shadow-lg shadow-purple-600/25 group-hover:shadow-purple-600/40 transition-all duration-300 group-hover:scale-110">
                    <span className="text-white font-bold text-xl group-hover:animate-pulse">T</span>
                  </div>
                  <span className="font-bold text-transparent bg-gradient-to-r from-white to-purple-200 bg-clip-text text-xl group-hover:from-purple-100 group-hover:to-white transition-all duration-300">
                    TechFlow
                  </span>
                </div>
              </FloatingElement>

              <Card className="w-[423px] bg-gradient-to-r from-grey-08 to-grey-10 rounded-xl border border-solid border-purple-60/30 hover:border-purple-60/50 transition-all duration-300 shadow-lg shadow-purple-600/10 backdrop-blur-sm group">
                <CardContent className="flex items-center gap-2.5 p-0">
                  <div className="flex items-center gap-2.5 px-6 py-[18px] w-full">
                    <img className="w-6 h-6 filter hue-rotate-[280deg] brightness-125" alt="Icon" src="/icon-7.svg" />
                    <Input
                      className="flex-1 bg-transparent border-0 shadow-none font-['Urbanist',Helvetica] font-medium text-grey-60 group-hover:text-grey-40 text-lg tracking-[-0.11px] leading-6 focus-visible:ring-0 focus-visible:ring-offset-0 p-0 transition-colors duration-300"
                      placeholder="Enter Your Email"
                    />
                    <FloatingElement intensity={3} duration={2}>
                      <div className="relative w-[30px] h-[30px] flex items-center justify-center cursor-pointer hover:scale-110 transition-transform duration-300">
                        <div className="relative w-[25px] h-[25px] bg-[url(/send.png)] bg-[100%_100%] filter hue-rotate-[280deg] brightness-125" />
                      </div>
                    </FloatingElement>
                  </div>
                </CardContent>
              </Card>
            </div>
          </FadeIn>

          {/* Navigation Links */}
          <StaggerContainer staggerDelay={0.1}>
            <div className="flex items-start justify-between flex-1">
              {footerNavigation.map((category, index) => (
                <StaggerItem key={index}>
                  <div className="inline-flex flex-col items-start gap-[30px] group">
                    <h3 className="relative w-fit mt-[-1.00px] font-['Urbanist',Helvetica] font-medium text-transparent bg-gradient-to-r from-purple-400 to-grey-60 bg-clip-text group-hover:from-purple-300 group-hover:to-purple-100 text-xl tracking-[-0.12px] leading-6 whitespace-nowrap transition-all duration-300">
                      <MatrixText text={category.title} />
                    </h3>

                    <div className="inline-flex flex-col items-start gap-5">
                      {category.links.map((link, linkIndex) => (
                        <a
                          key={linkIndex}
                          href="#"
                          className={`relative w-fit ${linkIndex === 0 ? "mt-[-1.00px]" : ""} font-['Urbanist',Helvetica] font-medium text-white hover:text-purple-300 text-lg tracking-[-0.11px] leading-6 whitespace-nowrap transition-all duration-300 cursor-pointer group relative overflow-hidden`}
                        >
                          {link}
                          <div className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-purple-600 to-purple-400 group-hover:w-full transition-all duration-300"></div>
                        </a>
                      ))}
                    </div>
                  </div>
                </StaggerItem>
              ))}
            </div>
          </StaggerContainer>
        </div>

        {/* Footer Bottom */}
        <FadeIn delay={1.2} direction="up">
          <div className="flex items-center justify-between px-[162px] py-4 w-full bg-gradient-to-r from-grey-10 via-purple-900/10 to-grey-10 border-t border-purple-60/20 relative z-10">
            <div className="inline-flex items-start gap-[38px] py-2.5">
              <p className="relative w-fit mt-[-1.00px] font-['Urbanist',Helvetica] font-medium text-grey-60 text-lg tracking-[-0.11px] leading-6 whitespace-nowrap">
                <MatrixText text="@2024 TechFlow. All Rights Reserved." />
              </p>

              <a
                href="#"
                className="relative w-fit mt-[-1.00px] font-['Urbanist',Helvetica] font-medium text-purple-300 hover:text-purple-100 text-lg tracking-[-0.11px] leading-6 whitespace-nowrap transition-colors duration-300 group"
              >
                Terms & Conditions
                <div className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-purple-600 to-purple-400 group-hover:w-full transition-all duration-300"></div>
              </a>
            </div>

            <StaggerContainer staggerDelay={0.1}>
              <div className="inline-flex items-center justify-end gap-2.5 py-2.5">
                {socialIcons.map((icon, index) => (
                  <StaggerItem key={index}>
                    <FloatingElement intensity={3} duration={2 + index * 0.3}>
                      <a
                        href="#"
                        className="inline-flex items-center justify-center p-3.5 bg-gradient-to-br from-grey-08 to-purple-900/20 rounded-[58px] overflow-hidden border border-purple-60/30 hover:border-purple-60/60 transition-all duration-300 hover:scale-110 hover:shadow-lg hover:shadow-purple-600/25 group backdrop-blur-sm"
                      >
                        <img 
                          className="w-6 h-6 filter hue-rotate-[280deg] brightness-125 group-hover:brightness-150 transition-all duration-300" 
                          alt={icon.alt} 
                          src={icon.src} 
                        />
                      </a>
                    </FloatingElement>
                  </StaggerItem>
                ))}
              </div>
            </StaggerContainer>
          </div>
        </FadeIn>
      </footer>
    </div>
  );
};