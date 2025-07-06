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
      action: "support@codava.dev",
      link: "mailto:support@codava.dev"
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
    <section className="relative w-full py-20 sm:py-28 md:py-32 lg:py-40 overflow-hidden">
      <div className="max-w-[1600px] mx-auto px-6 w-full">
        {/* Section Header  */}
        <FadeIn delay={0.2} direction="up">
          <div className="flex flex-col items-center gap-6 sm:gap-8 relative w-full text-center mb-16">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white">
              Ready to Transform  <span className="text-transparent bg-gradient-to-r from-[#194EFF] to-blue-400 bg-clip-text">  Your Business</span>
            </h2>
            <p className="font-medium text-white/80 tracking-[0] text-base sm:text-lg md:text-xl leading-[26px] sm:leading-[32px] max-w-full sm:max-w-[600px] px-2 sm:px-0">
              Let's discuss how our innovative technology solutions can drive your business forward and create lasting value.
            </p>
          </div>
        </FadeIn>

        {/* Main CTA Card */}
        <FadeIn delay={0.4} direction="up">
          <Card className="w-full max-w-5xl mx-auto bg-white/[0.03] border border-[#194EFF]/20 rounded-3xl backdrop-blur-xl shadow-2xl hover:shadow-[#194EFF]/10 transition-all duration-500 group relative overflow-hidden">
            <CardContent className="flex flex-col lg:flex-row items-center lg:items-stretch gap-8 sm:gap-10 lg:gap-12 p-4 sm:p-8 lg:p-12 relative z-10 w-full">
              {/* Left Content */}
              <div className="flex flex-col items-start gap-6 sm:gap-8 flex-1 w-full">
                <div className="flex flex-col items-start gap-2 sm:gap-4">
                  <h3 className="font-semibold text-white text-2xl sm:text-3xl leading-8 sm:leading-10 tracking-[0]">
                    <MatrixText text="Start Your Digital Transformation" />
                  </h3>
                  <p className="font-medium text-white/70 text-base sm:text-lg leading-[22px] sm:leading-[27px]">
                    Join hundreds of businesses that have already transformed their operations with our cutting-edge technology solutions. Our team of experts is ready to help you achieve your digital goals.
                  </p>
                </div>

                <div className="flex flex-col xs:flex-row items-start gap-3 sm:gap-4 w-full">
                  <GlowButton className="group w-full xs:w-auto min-w-[160px] max-w-[220px] px-4 sm:px-6 py-2 sm:py-3 h-auto bg-[#194EFF] hover:bg-[#194EFF]/90 rounded-xl border border-[#194EFF] hover:border-[#194EFF]/75 hover:shadow-lg hover:shadow-[#194EFF]/25 transition-all duration-300 text-center relative overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
                    <span className="relative z-10 font-medium text-white text-sm sm:text-base tracking-[0] leading-[22px] sm:leading-[27px]">
                      Schedule a Consultation
                    </span>
                  </GlowButton>
                </div>
              </div>

              {/* Right Content - Contact Methods */}
              <div className="flex flex-col items-start gap-4 sm:gap-6 flex-1 w-full">
                <StaggerContainer staggerDelay={0.1}>
                  <div className="flex flex-col gap-3 sm:gap-4 w-full">
                    {contactMethods.map((method, index) => (
                      <StaggerItem key={index}>
                        <a 
                          href={method.link}
                          className="flex flex-col xs:flex-row items-start xs:items-center gap-2 xs:gap-4 p-3 sm:p-4 rounded-xl bg-white/[0.03] border border-[#194EFF]/20 hover:border-[#194EFF]/40 transition-all duration-300 group w-full backdrop-blur-sm hover:shadow-[#194EFF]/10"
                        >
                          <div className="text-xl sm:text-2xl group-hover:scale-110 transition-transform duration-300">
                            {method.icon}
                          </div>
                          <div className="flex flex-col items-start gap-0.5 flex-1">
                            <h5 className="font-semibold text-white text-sm sm:text-base group-hover:text-[#194EFF] transition-colors duration-300">
                              {method.title}
                            </h5>
                            <p className="font-medium text-white/60 text-xs sm:text-sm group-hover:text-white/80 transition-colors duration-300">
                              {method.description}
                            </p>
                          </div>
                          <div className="font-medium text-[#194EFF] text-xs sm:text-sm group-hover:text-white transition-colors duration-300 xs:ml-auto">
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
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-[#194EFF]/5 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-2000 rounded-3xl"></div>
          </Card>
        </FadeIn>
      </div>
    </section>
  );
};