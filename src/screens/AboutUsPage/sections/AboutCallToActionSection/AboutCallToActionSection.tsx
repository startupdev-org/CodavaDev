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
    <section className="flex flex-col w-full max-w-[1596px] items-start gap-20 mx-auto relative overflow-hidden py-20">
      {/* Section Header */}
      <FadeIn delay={0.2} direction="up">
        <div className="flex flex-col items-center gap-6 relative self-stretch w-full text-center">
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 bg-purple-60 rounded-lg flex items-center justify-center shadow-lg">
              <span className="text-white font-bold text-xl">🚀</span>
            </div>
            <span className="text-purple-60 font-semibold text-lg">Get Started</span>
          </div>
          
          <h2 className="font-semibold text-transparent bg-gradient-to-r from-purple-400 via-white to-purple-400 bg-clip-text text-5xl tracking-[0] leading-[72px] animate-gradient-shift bg-[length:200%_auto]">
            <MatrixText text="Ready to Transform Your Business?" />
          </h2>
          
          <p className="font-medium text-grey-60 tracking-[0] text-xl leading-[32px] [font-family:'Urbanist',Helvetica] max-w-[600px]">
            Let's discuss how our innovative technology solutions can drive your business forward and create lasting value.
          </p>
        </div>
      </FadeIn>

      {/* Main CTA Card */}
      <FadeIn delay={0.4} direction="up">
        <Card className="w-full bg-gradient-to-br from-grey-08 to-grey-10 rounded-2xl border border-solid border-purple-60/30 hover:border-purple-60/60 transition-all duration-500 shadow-lg shadow-purple-600/10 hover:shadow-purple-600/25 backdrop-blur-sm relative overflow-hidden">
          <CardContent className="flex flex-col lg:flex-row items-center gap-12 p-12 relative z-10">
            {/* Left Content */}
            <div className="flex flex-col items-start gap-8 flex-1">
              <div className="flex flex-col items-start gap-4">
                <h3 className="font-semibold text-white text-3xl leading-10 [font-family:'Urbanist',Helvetica] tracking-[0]">
                  <MatrixText text="Start Your Digital Transformation" />
                </h3>
                
                <p className="font-medium text-grey-60 text-lg leading-[27px] [font-family:'Urbanist',Helvetica]">
                  Join hundreds of businesses that have already transformed their operations with our cutting-edge technology solutions. Our team of experts is ready to help you achieve your digital goals.
                </p>
              </div>

              <div className="flex flex-col sm:flex-row items-start gap-4">
                <GlowButton className="px-8 py-4 h-auto bg-gradient-to-r from-purple-60 to-purple-70 rounded-[10px] border border-solid border-purple-60 hover:border-purple-75 hover:shadow-lg hover:shadow-purple-600/25 transition-all duration-300">
                  <span className="[font-family:'Urbanist',Helvetica] font-medium text-white text-lg tracking-[0] leading-[27px]">
                    Schedule a Consultation
                  </span>
                </GlowButton>
                
                <GlowButton className="px-8 py-4 h-auto bg-gradient-to-r from-grey-10 to-grey-08 rounded-[10px] border border-solid border-purple-60/50 hover:border-purple-60 hover:shadow-lg hover:shadow-purple-600/25 transition-all duration-300 backdrop-blur-sm">
                  <span className="[font-family:'Urbanist',Helvetica] font-medium text-purple-200 hover:text-white text-lg tracking-[0] leading-[27px] transition-colors duration-300">
                    View Our Portfolio
                  </span>
                </GlowButton>
              </div>
            </div>

            {/* Right Content - Contact Methods */}
            <div className="flex flex-col items-start gap-6 flex-1">
              <h4 className="font-semibold text-white text-xl [font-family:'Urbanist',Helvetica]">
                Get in Touch
              </h4>
              
              <StaggerContainer staggerDelay={0.1}>
                <div className="flex flex-col gap-4 w-full">
                  {contactMethods.map((method, index) => (
                    <StaggerItem key={index}>
                      <a 
                        href={method.link}
                        className="flex items-center gap-4 p-4 rounded-xl bg-gradient-to-r from-grey-10 to-grey-08 border border-solid border-purple-60/30 hover:border-purple-60/50 transition-all duration-300 group"
                      >
                        <div className="text-2xl group-hover:scale-110 transition-transform duration-300">
                          {method.icon}
                        </div>
                        
                        <div className="flex flex-col items-start gap-1 flex-1">
                          <h5 className="font-semibold text-white text-base [font-family:'Urbanist',Helvetica] group-hover:text-purple-200 transition-colors duration-300">
                            {method.title}
                          </h5>
                          <p className="font-medium text-grey-60 text-sm [font-family:'Urbanist',Helvetica] group-hover:text-grey-40 transition-colors duration-300">
                            {method.description}
                          </p>
                        </div>
                        
                        <div className="font-medium text-purple-60 text-sm [font-family:'Urbanist',Helvetica] group-hover:text-purple-200 transition-colors duration-300">
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
        <div className="flex flex-col lg:flex-row items-center justify-between gap-8 w-full pt-8 border-t border-purple-60/30">
          <div className="flex flex-col items-start gap-2">
            <h4 className="font-semibold text-white text-xl [font-family:'Urbanist',Helvetica]">
              Why Choose TechFlow?
            </h4>
            <p className="font-medium text-grey-60 text-base [font-family:'Urbanist',Helvetica]">
              Proven track record • 24/7 support • Custom solutions • Industry expertise
            </p>
          </div>
          
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
              <span className="font-medium text-grey-60 text-sm [font-family:'Urbanist',Helvetica]">
                Available 24/7
              </span>
            </div>
            
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 bg-blue-500 rounded-full animate-pulse"></div>
              <span className="font-medium text-grey-60 text-sm [font-family:'Urbanist',Helvetica]">
                Free Consultation
              </span>
            </div>
          </div>
        </div>
      </FadeIn>

      {/* Floating Elements */}
      <FloatingElement intensity={8} duration={4}>
        <div className="absolute top-20 left-20 w-[68px] h-[30px] opacity-50">
          <div className="bg-[url(/group-4.png)] absolute w-[30px] h-[30px] top-0 left-0 bg-[100%_100%] filter hue-rotate-[280deg] brightness-125" />
          <div className="bg-[url(/group-5.png)] absolute w-[18px] h-[18px] top-1.5 left-9 bg-[100%_100%] filter hue-rotate-[280deg] brightness-125" />
          <div className="bg-[url(/group-6.png)] absolute w-2 h-2 top-[11px] left-[60px] bg-[100%_100%] filter hue-rotate-[280deg] brightness-125" />
        </div>
      </FloatingElement>
      
      <FloatingElement intensity={6} duration={5}>
        <div className="absolute bottom-20 right-20 w-[68px] h-[30px] opacity-50">
          <div className="bg-[url(/group-4.png)] absolute w-[30px] h-[30px] top-0 left-0 bg-[100%_100%] filter hue-rotate-[280deg] brightness-125" />
          <div className="bg-[url(/group-5.png)] absolute w-[18px] h-[18px] top-1.5 left-9 bg-[100%_100%] filter hue-rotate-[280deg] brightness-125" />
          <div className="bg-[url(/group-6.png)] absolute w-2 h-2 top-[11px] left-[60px] bg-[100%_100%] filter hue-rotate-[280deg] brightness-125" />
        </div>
      </FloatingElement>
    </section>
  );
}; 