import React from "react";
import { Button } from "../../../../components/ui/button";
import { Card, CardContent } from "../../../../components/ui/card";
import { 
  FadeIn, 
  StaggerContainer, 
  StaggerItem, 
  GlowButton,
  FloatingElement,
  MatrixText,
  ParallaxElement,
  CircuitAnimation,
  DataStream
} from "../../../../components/ui/animated-elements";

export const CallToActionSection = (): JSX.Element => {
  // FAQ data for mapping
  const faqItems = [
    {
      question: "How do I get started with TechFlow's IT services?",
      description:
        "Learn about our consultation process and how we assess your current infrastructure to recommend the best solutions.",
    },
    {
      question:
        "What makes TechFlow different from other IT service providers?",
      description:
        "Discover our unique approach to digital transformation and why leading enterprises choose us as their technology partner.",
    },
    {
      question: "How can I contact a TechFlow solutions architect?",
      description:
        "Find out the different ways you can connect with our expert team for personalized IT consulting and support.",
    },
  ];

  return (
    <section className="flex flex-col w-full items-start gap-20 py-16 relative overflow-hidden">
      {/* Background Effects */}
      <CircuitAnimation />
      <DataStream />
      
      <FadeIn delay={0.2} direction="up">
        <div className="flex items-end justify-between w-full">
          <div className="flex flex-col items-start gap-3.5 relative max-w-3xl">
            <div className="relative self-stretch [font-family:'Urbanist',Helvetica] font-semibold text-transparent bg-gradient-to-r from-purple-400 via-white to-purple-400 bg-clip-text text-5xl tracking-[0] leading-[72px] animate-gradient-shift bg-[length:200%_auto]">
              <MatrixText text="Frequently Asked Questions" />
            </div>

            <FadeIn delay={0.6} direction="up">
              <div className="font-medium text-grey-60 tracking-[0] relative self-stretch [font-family:'Urbanist',Helvetica] text-lg leading-[27px]">
                Find answers to common questions about TechFlow's IT services, digital transformation solutions, and our implementation process. We're here to provide clarity and guide you through your technology journey.
              </div>
            </FadeIn>

            <FloatingElement intensity={8} duration={4}>
              <div className="absolute w-[68px] h-[30px] -top-10 -left-5">
                <div className="bg-[url(/group-7.png)] absolute w-[30px] h-[30px] top-0 left-0 bg-[100%_100%] filter hue-rotate-[280deg] brightness-125" />
                <div className="bg-[url(/group-8.png)] absolute w-[18px] h-[18px] top-1.5 left-9 bg-[100%_100%] filter hue-rotate-[280deg] brightness-125" />
                <div className="bg-[url(/group-9.png)] absolute w-2 h-2 top-[11px] left-[60px] bg-[100%_100%] filter hue-rotate-[280deg] brightness-125" />
              </div>
            </FloatingElement>
          </div>

          <FadeIn delay={0.8} direction="left">
            <GlowButton className="px-6 py-[18px] h-auto bg-gradient-to-r from-grey-10 to-grey-08 rounded-[10px] border border-solid border-purple-60/50 hover:border-purple-60 hover:shadow-lg hover:shadow-purple-600/25 transition-all duration-300 backdrop-blur-sm">
              <span className="[font-family:'Urbanist',Helvetica] font-medium text-purple-200 hover:text-white text-lg tracking-[0] leading-[27px] transition-colors duration-300">
                View All FAQ&apos;s
              </span>
            </GlowButton>
          </FadeIn>
        </div>
      </FadeIn>

      <div className="flex flex-col items-start gap-[50px] w-full">
        <StaggerContainer staggerDelay={0.2}>
          <div className="grid grid-cols-3 gap-[30px] w-full">
            {faqItems.map((item, index) => (
              <StaggerItem key={index}>
                <ParallaxElement speed={0.1 * (index + 1)}>
                  <Card className="flex flex-col items-start gap-[30px] p-[50px] bg-gradient-to-br from-grey-08 to-grey-10 rounded-xl border border-solid border-purple-60/30 hover:border-purple-60/60 transition-all duration-500 shadow-lg shadow-purple-600/10 hover:shadow-purple-600/25 group hover:scale-105 backdrop-blur-sm relative overflow-hidden">
                    <CardContent className="p-0 flex flex-col gap-[30px] w-full relative z-10">
                      <h3 className="font-semibold text-transparent bg-gradient-to-r from-white to-purple-200 bg-clip-text group-hover:from-purple-100 group-hover:to-white text-2xl leading-9 [font-family:'Urbanist',Helvetica] tracking-[0] transition-all duration-300">
                        <MatrixText text={item.question} />
                      </h3>

                      <p className="font-medium text-grey-60 group-hover:text-grey-40 tracking-[-0.11px] [font-family:'Urbanist',Helvetica] text-lg leading-[27px] transition-colors duration-300">
                        {item.description}
                      </p>

                      <GlowButton className="px-6 py-[18px] h-auto bg-gradient-to-r from-purple-600/20 to-purple-800/20 rounded-[10px] border border-solid border-purple-60/50 hover:border-purple-60 hover:shadow-lg hover:shadow-purple-600/25 transition-all duration-300 backdrop-blur-sm">
                        <span className="[font-family:'Urbanist',Helvetica] font-medium text-purple-200 hover:text-white text-lg tracking-[-0.11px] leading-[23.6px] transition-colors duration-300">
                          Read More
                        </span>
                      </GlowButton>
                    </CardContent>
                    
                    {/* Background Effects */}
                    <div className="absolute inset-0 bg-gradient-to-br from-purple-900/10 via-transparent to-purple-600/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                    <div className="absolute inset-0 bg-digital-grid bg-[size:30px_30px] opacity-0 group-hover:opacity-10 transition-opacity duration-500" />
                  </Card>
                </ParallaxElement>
              </StaggerItem>
            ))}
          </div>
        </StaggerContainer>

        <FadeIn delay={1.2} direction="up">
          <div className="flex items-center justify-between pt-5 pb-0 w-full border-t border-purple-60/30">
            <div className="[font-family:'Urbanist',Helvetica] font-medium text-xl tracking-[0] leading-[30px]">
              <span className="text-transparent bg-gradient-to-r from-purple-400 to-white bg-clip-text">
                <MatrixText text="01" />
              </span>
              <span className="text-[#999999]"> of 12</span>
            </div>

            <div className="flex items-center gap-2.5">
              <GlowButton className="p-3.5 rounded-[69px] border border-solid border-purple-60/50 hover:border-purple-60 bg-gradient-to-r from-grey-10 to-grey-08 hover:shadow-lg hover:shadow-purple-600/25 transition-all duration-300 backdrop-blur-sm">
                <img
                  className="w-[30px] h-[30px] filter hue-rotate-[280deg] brightness-125"
                  alt="Previous"
                  src="/icon-1.svg"
                />
              </GlowButton>

              <GlowButton className="p-3.5 bg-gradient-to-r from-purple-600/20 to-purple-800/20 rounded-[69px] border border-solid border-purple-60/50 hover:border-purple-60 hover:shadow-lg hover:shadow-purple-600/25 transition-all duration-300 backdrop-blur-sm">
                <img 
                  className="w-[30px] h-[30px] filter hue-rotate-[280deg] brightness-125" 
                  alt="Next" 
                  src="/icon-3.svg" 
                />
              </GlowButton>
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  );
};