import React from "react";
import { Avatar } from "../../../../components/ui/avatar";
import { Button } from "../../../../components/ui/button";
import { Card, CardContent } from "../../../../components/ui/card";
import { 
  FadeIn, 
  StaggerContainer, 
  StaggerItem, 
  GlowButton,
  FloatingElement,
  MatrixText,
  ParallaxElement
} from "../../../../components/ui/animated-elements";

export const ClientTestimonialsSection = (): JSX.Element => {
  // Testimonial data for mapping
  const testimonials = [
    {
      title: "Outstanding IT Partnership!",
      content:
        "TechFlow transformed our entire infrastructure. Their cloud migration was seamless, and their ongoing support has been exceptional. Our productivity increased by 40%!",
      author: "Sarah Johnson",
      location: "CTO, InnovateCorp",
      profileImg: "https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=150",
    },
    {
      title: "Reliable & Innovative",
      content:
        "The cybersecurity solutions provided by TechFlow gave us peace of mind. Their proactive approach prevented multiple potential threats. Highly recommended for enterprise security.",
      author: "Michael Chen",
      location: "IT Director, SecureFinance",
      profileImg: "https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=150",
    },
    {
      title: "Game-Changing AI Solutions",
      content:
        "The AI integration platform developed by TechFlow revolutionized our operations. Automated processes saved us 60% in operational costs while improving accuracy significantly.",
      author: "Emily Rodriguez",
      location: "CEO, DataDriven Solutions",
      profileImg: "https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=150",
    },
  ];

  return (
    <section className="flex flex-col w-full max-w-[1596px] items-start gap-20 mx-auto relative overflow-hidden">
      <FadeIn delay={0.2} direction="up">
        <div className="flex items-end gap-[200px] relative self-stretch w-full">
          <div className="flex flex-col items-start gap-3.5 relative flex-1">
            <div className="relative self-stretch [font-family:'Urbanist',Helvetica] font-semibold text-transparent bg-gradient-to-r from-purple-400 via-white to-purple-400 bg-clip-text text-5xl tracking-[0] leading-[72px] animate-gradient-shift bg-[length:200%_auto]">
              <MatrixText text="What Our Clients Say" />
            </div>

            <FadeIn delay={0.6} direction="up">
              <div className="font-medium text-grey-60 tracking-[0] relative self-stretch [font-family:'Urbanist',Helvetica] text-lg leading-[27px]">
                Read success stories from businesses that have transformed their operations with our IT solutions. Discover why leading companies trust TechFlow for their digital transformation needs.
              </div>
            </FadeIn>

            <FloatingElement intensity={8} duration={4}>
              <div className="relative w-[68px] h-[30px] -top-10 -left-5">
                <div className="bg-[url(/group-4.png)] absolute w-[30px] h-[30px] top-0 left-0 bg-[100%_100%] filter hue-rotate-[280deg] brightness-125" />
                <div className="bg-[url(/group-5.png)] absolute w-[18px] h-[18px] top-1.5 left-9 bg-[100%_100%] filter hue-rotate-[280deg] brightness-125" />
                <div className="bg-[url(/group-6.png)] absolute w-2 h-2 top-[11px] left-[60px] bg-[100%_100%] filter hue-rotate-[280deg] brightness-125" />
              </div>
            </FloatingElement>
          </div>

          <FadeIn delay={0.8} direction="left">
            <GlowButton className="px-6 py-[18px] h-auto bg-gradient-to-r from-grey-10 to-grey-08 rounded-[10px] border border-solid border-purple-60/50 hover:border-purple-60 hover:shadow-lg hover:shadow-purple-600/25 transition-all duration-300 backdrop-blur-sm">
              <span className="[font-family:'Urbanist',Helvetica] font-medium text-purple-200 hover:text-white text-lg tracking-[0] leading-[27px] transition-colors duration-300">
                View All Case Studies
              </span>
            </GlowButton>
          </FadeIn>
        </div>
      </FadeIn>

      <div className="flex flex-col items-start gap-[50px] relative self-stretch w-full">
        <StaggerContainer staggerDelay={0.2}>
          <div className="flex items-start gap-[30px] relative self-stretch w-full">
            {testimonials.map((testimonial, index) => (
              <StaggerItem key={index}>
                <ParallaxElement speed={0.1 * (index + 1)}>
                  <Card className="flex-1 bg-gradient-to-br from-grey-08 to-grey-10 rounded-xl border border-solid border-purple-60/30 hover:border-purple-60/60 transition-all duration-500 shadow-lg shadow-purple-600/10 hover:shadow-purple-600/25 group hover:scale-105 backdrop-blur-sm relative overflow-hidden">
                    <CardContent className="flex flex-col items-start gap-10 p-[50px] relative z-10">
                      <div className="inline-flex items-start gap-2.5">
                        {[...Array(5)].map((_, i) => (
                          <FloatingElement key={i} intensity={3} duration={2 + i * 0.2}>
                            <div className="inline-flex items-start gap-2.5 p-2.5 bg-gradient-to-br from-purple-600/20 to-grey-10 rounded-[100px] border border-solid border-purple-60/30 group-hover:border-purple-60/50 transition-all duration-300">
                              <img
                                className="w-[21.31px] h-[20.36px] filter hue-rotate-[280deg] brightness-125"
                                alt="Star rating"
                                src="/shape.svg"
                              />
                            </div>
                          </FloatingElement>
                        ))}
                      </div>

                      <div className="flex flex-col items-start gap-3.5 self-stretch w-full">
                        <h3 className="font-semibold text-transparent bg-gradient-to-r from-white to-purple-200 bg-clip-text group-hover:from-purple-100 group-hover:to-white text-2xl leading-9 self-stretch [font-family:'Urbanist',Helvetica] tracking-[0] transition-all duration-300">
                          <MatrixText text={testimonial.title} />
                        </h3>

                        <p className="font-medium text-grey-60 group-hover:text-grey-40 tracking-[0] self-stretch [font-family:'Urbanist',Helvetica] text-lg leading-[27px] transition-colors duration-300">
                          "{testimonial.content}"
                        </p>
                      </div>

                      <div className="flex items-center gap-3 self-stretch w-full">
                        <FloatingElement intensity={5} duration={3}>
                          <Avatar className="w-[60px] h-[60px] rounded-full overflow-hidden border-2 border-purple-60/30 group-hover:border-purple-60/50 transition-colors duration-300 shadow-lg shadow-purple-600/20">
                            <img
                              className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                              alt={`${testimonial.author} profile`}
                              src={testimonial.profileImg}
                            />
                          </Avatar>
                        </FloatingElement>

                        <div className="flex flex-col items-start gap-0.5 flex-1">
                          <div className="self-stretch [font-family:'Urbanist',Helvetica] font-medium text-transparent bg-gradient-to-r from-white to-purple-200 bg-clip-text group-hover:from-purple-100 group-hover:to-white text-xl tracking-[0] leading-[30px] transition-all duration-300">
                            <MatrixText text={testimonial.author} />
                          </div>

                          <div className="self-stretch [font-family:'Urbanist',Helvetica] font-medium text-grey-60 group-hover:text-purple-300 text-lg tracking-[0] leading-[27px] transition-colors duration-300">
                            {testimonial.location}
                          </div>
                        </div>
                      </div>
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
          <div className="flex items-start justify-between pt-5 pb-0 px-0 relative self-stretch w-full border-t border-purple-60/30">
            <div className="[font-family:'Urbanist',Helvetica] font-medium text-xl tracking-[0] leading-[30px] whitespace-nowrap">
              <span className="text-transparent bg-gradient-to-r from-purple-400 to-white bg-clip-text">
                <MatrixText text="01" />
              </span>
              <span className="text-[#999999]"> of 15</span>
            </div>

            <div className="inline-flex items-start gap-2.5">
              <GlowButton className="p-3.5 h-auto rounded-[69px] border border-solid border-purple-60/50 hover:border-purple-60 bg-gradient-to-r from-grey-10 to-grey-08 hover:shadow-lg hover:shadow-purple-600/25 transition-all duration-300 backdrop-blur-sm">
                <img
                  className="w-[30px] h-[30px] filter hue-rotate-[280deg] brightness-125"
                  alt="Previous"
                  src="/icon-1.svg"
                />
              </GlowButton>

              <GlowButton className="p-3.5 h-auto bg-gradient-to-r from-purple-600/20 to-purple-800/20 rounded-[69px] border border-solid border-purple-60/50 hover:border-purple-60 hover:shadow-lg hover:shadow-purple-600/25 transition-all duration-300 backdrop-blur-sm">
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