import React from "react";
import { Card, CardContent } from "../../../../components/ui/card";
import { 
  FadeIn, 
  StaggerContainer, 
  StaggerItem, 
  FloatingElement, 
  GlowButton,
  MatrixText
} from "../../../../components/ui/animated-elements";

export const AboutCallToActionSection = (): JSX.Element => {
  // Contact methods data
  const contactMethods = [
    {
      icon: "📧",
      title: "Email Us",
      description: "Get in touch via email for detailed inquiries",
      action: "hello@techflow.com",
      link: "mailto:hello@techflow.com"
    },
    {
      icon: "📞",
      title: "Call Us",
      description: "Speak directly with our team",
      action: "+1 (555) 123-4567",
      link: "tel:+15551234567"
    },
    {
      icon: "💬",
      title: "Live Chat",
      description: "Chat with us in real-time",
      action: "Start Chat",
      link: "#"
    }
  ];

  return (
    <section className="flex flex-col w-full max-w-[1596px] items-center gap-10 sm:gap-16 lg:gap-20 mx-auto relative overflow-hidden py-10 sm:py-16 lg:py-20 px-2 sm:px-6">
      {/* Section Header  */}
      <FadeIn delay={0.2} direction="up">
        <div className="flex flex-col items-center gap-4 sm:gap-6 relative self-stretch w-full text-center">
          <h2 className="font-semibold text-transparent bg-gradient-to-r from-purple-400 via-white to-purple-400 bg-clip-text text-3xl sm:text-4xl md:text-5xl tracking-[0] leading-[1.1] sm:leading-[60px] md:leading-[72px] animate-gradient-shift bg-[length:200%_auto]">
            <MatrixText text="Ready to Transform Your Business?" />
          </h2>
          <p className="font-medium text-grey-60 tracking-[0] text-base sm:text-lg md:text-xl leading-[26px] sm:leading-[32px] [font-family:'Urbanist',Helvetica] max-w-full sm:max-w-[600px] px-2 sm:px-0">
            Let's discuss how our innovative technology solutions can drive your business forward and create lasting value.
          </p>
        </div>
      </FadeIn>

      {/* Main CTA Card */}
      <FadeIn delay={0.4} direction="up">
        <Card className="w-full bg-gradient-to-br from-grey-08 to-grey-10 rounded-2xl border border-solid border-purple-60/30 hover:border-purple-60/60 transition-all duration-500 shadow-lg shadow-purple-600/10 hover:shadow-purple-600/25 backdrop-blur-sm relative overflow-hidden">
          <CardContent className="flex flex-col lg:flex-row items-center lg:items-stretch gap-8 sm:gap-10 lg:gap-12 p-4 sm:p-8 lg:p-12 relative z-10">
            {/* Left Content */}
            <div className="flex flex-col items-start gap-6 sm:gap-8 flex-1 w-full">
              <div className="flex flex-col items-start gap-2 sm:gap-4">
                <h3 className="font-semibold text-white text-2xl sm:text-3xl leading-8 sm:leading-10 [font-family:'Urbanist',Helvetica] tracking-[0]">
                  <MatrixText text="Start Your Digital Transformation" />
                </h3>
                <p className="font-medium text-grey-60 text-base sm:text-lg leading-[22px] sm:leading-[27px] [font-family:'Urbanist',Helvetica]">
                  Join hundreds of businesses that have already transformed their operations with our cutting-edge technology solutions. Our team of experts is ready to help you achieve your digital goals.
                </p>
              </div>

              <div className="flex flex-col xs:flex-row items-start gap-3 sm:gap-4 w-full">
                <GlowButton className="min-w-0 w-auto px-4 sm:px-6 py-2 sm:py-3 h-auto bg-gradient-to-r from-purple-60 to-purple-70 rounded-[10px] border border-solid border-purple-60 hover:border-purple-75 hover:shadow-lg hover:shadow-purple-600/25 transition-all duration-300">
                  <span className="[font-family:'Urbanist',Helvetica] font-medium text-white text-sm sm:text-base tracking-[0] leading-[22px] sm:leading-[27px]">
                    Schedule a Consultation
                  </span>
                </GlowButton>
                {/* <GlowButton className="px-8 py-4 h-auto bg-gradient-to-r from-grey-10 to-grey-08 rounded-[10px] border border-solid border-purple-60/50 hover:border-purple-60 hover:shadow-lg hover:shadow-purple-600/25 transition-all duration-300 backdrop-blur-sm">
                  <span className="[font-family:'Urbanist',Helvetica] font-medium text-purple-200 hover:text-white text-lg tracking-[0] leading-[27px] transition-colors duration-300">
                    View Our Portfolio
                  </span>
                </GlowButton> */}
              </div>
            </div>

            {/* Right Content - Contact Methods */}
            <div className="flex flex-col items-start gap-4 sm:gap-6 flex-1 w-full">
              <h4 className="font-semibold text-white text-lg sm:text-xl [font-family:'Urbanist',Helvetica]">
                Get in Touch
              </h4>
              <StaggerContainer staggerDelay={0.1}>
                <div className="flex flex-col gap-3 sm:gap-4 w-full">
                  {contactMethods.map((method, index) => (
                    <StaggerItem key={index}>
                      <a 
                        href={method.link}
                        className="flex flex-col xs:flex-row items-start xs:items-center gap-2 xs:gap-4 p-3 sm:p-4 rounded-xl bg-gradient-to-r from-grey-10 to-grey-08 border border-solid border-purple-60/30 hover:border-purple-60/50 transition-all duration-300 group w-full"
                      >
                        <div className="text-xl sm:text-2xl group-hover:scale-110 transition-transform duration-300">
                          {method.icon}
                        </div>
                        <div className="flex flex-col items-start gap-0.5 flex-1">
                          <h5 className="font-semibold text-white text-sm sm:text-base [font-family:'Urbanist',Helvetica] group-hover:text-purple-200 transition-colors duration-300">
                            {method.title}
                          </h5>
                          <p className="font-medium text-grey-60 text-xs sm:text-sm [font-family:'Urbanist',Helvetica] group-hover:text-grey-40 transition-colors duration-300">
                            {method.description}
                          </p>
                        </div>
                        <div className="font-medium text-purple-60 text-xs sm:text-sm [font-family:'Urbanist',Helvetica] group-hover:text-purple-200 transition-colors duration-300 xs:ml-auto">
                          {method.action}
                        </div>
                      </a>
                    </StaggerItem>
                  ))}
                </div>
              </StaggerContainer>
            </div>
          </CardContent>
          {/* Background Effects */}
          <div className="absolute inset-0 bg-gradient-to-br from-purple-900/10 via-transparent to-purple-600/5 opacity-0 hover:opacity-100 transition-opacity duration-500" />
          <div className="absolute inset-0 bg-digital-grid bg-[size:30px_30px] opacity-0 hover:opacity-10 transition-opacity duration-500" />
        </Card>
      </FadeIn>

      {/* Additional Info */}
      <FadeIn delay={0.6} direction="up">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-6 sm:gap-8 w-full pt-6 sm:pt-8 border-t border-purple-60/30">
          <div className="flex flex-col items-start gap-2"></div>
        </div>
      </FadeIn>

      {/* Floating Elements */}
      <FloatingElement intensity={8} duration={4}>
        <div className="absolute top-6 sm:top-12 left-6 sm:left-20 w-[48px] sm:w-[68px] h-[22px] sm:h-[30px] opacity-50">
          <div className="bg-[url(/group-4.png)] absolute w-[20px] sm:w-[30px] h-[20px] sm:h-[30px] top-0 left-0 bg-[100%_100%] filter hue-rotate-[280deg] brightness-125" />
          <div className="bg-[url(/group-5.png)] absolute w-[12px] sm:w-[18px] h-[12px] sm:h-[18px] top-1.5 left-7 sm:left-9 bg-[100%_100%] filter hue-rotate-[280deg] brightness-125" />
          <div className="bg-[url(/group-6.png)] absolute w-1.5 sm:w-2 h-1.5 sm:h-2 top-[9px] sm:top-[11px] left-[38px] sm:left-[60px] bg-[100%_100%] filter hue-rotate-[280deg] brightness-125" />
        </div>
      </FloatingElement>
      <FloatingElement intensity={6} duration={5}>
        <div className="absolute bottom-6 sm:bottom-20 right-6 sm:right-20 w-[48px] sm:w-[68px] h-[22px] sm:h-[30px] opacity-50">
          <div className="bg-[url(/group-4.png)] absolute w-[20px] sm:w-[30px] h-[20px] sm:h-[30px] top-0 left-0 bg-[100%_100%] filter hue-rotate-[280deg] brightness-125" />
          <div className="bg-[url(/group-5.png)] absolute w-[12px] sm:w-[18px] h-[12px] sm:h-[18px] top-1.5 left-7 sm:left-9 bg-[100%_100%] filter hue-rotate-[280deg] brightness-125" />
          <div className="bg-[url(/group-6.png)] absolute w-1.5 sm:w-2 h-1.5 sm:h-2 top-[9px] sm:top-[11px] left-[38px] sm:left-[60px] bg-[100%_100%] filter hue-rotate-[280deg] brightness-125" />
        </div>
      </FloatingElement>
    </section>
  );
};