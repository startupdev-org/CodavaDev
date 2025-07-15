import React from "react";
import { Card, CardContent } from "../../../../components/ui/card";
import { 
  FadeIn, 
  StaggerContainer, 
  StaggerItem, 
  GlowButton,
} from "../../../../components/ui/animated-elements";

export const AboutCallToActionSection = () => {

  // Contact methods data
  const contactMethods = [
    {
      icon: "📧",
      title: "Email Us",
      description: "Get in touch via email for detailed inquiries",
      action: "support@codava.dev",
      link: "mailto:support@codava.dev"
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
              <div className="flex flex-col lg:flex-row items-center gap-8 sm:gap-10 lg:gap-12 w-full">
                {/* Left Content */}
                <div className="flex flex-col items-start gap-6 sm:gap-8 flex-1 w-full">
                  <div className="flex flex-col items-start gap-2 sm:gap-4">
                    <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white">
                      Start Your Digital   <span className="text-transparent bg-gradient-to-r from-[#194EFF] to-blue-400 bg-clip-text">  Transformation</span>
                    </h2>
                    <p className="font-medium text-white/70 text-base sm:text-lg leading-[22px] sm:leading-[27px]">
                      Join hundreds of businesses that have already transformed their operations with our cutting-edge technology solutions. Our team of experts is ready to help you achieve your digital goals.
                    </p>
                  </div>
                </div>

                {/* Contact Methods - Display as an array for future improvements */}
                <div className="flex flex-col items-start gap-4 sm:gap-6 flex-1 w-full max-w-md mx-auto">
                  {contactMethods.map((method) => (
                    <a
                      key={method.title}
                      href={method.link}
                      className="flex flex-col xs:flex-row items-start xs:items-center gap-2 xs:gap-4 p-4 sm:p-6 rounded-2xl bg-white/[0.04] border border-[#194EFF]/30 hover:border-[#194EFF]/60 transition-all duration-300 group w-full backdrop-blur-sm hover:shadow-[#194EFF]/10"
                    >
                      <div className="flex flex-row items-center gap-3 w-full">
                        <div className="text-2xl sm:text-3xl group-hover:scale-110 transition-transform duration-300">
                          {method.icon}
                        </div>
                        <h5 className="font-bold text-lg sm:text-xl text-white group-hover:text-[#194EFF] transition-colors duration-300 tracking-tight drop-shadow-sm">
                          <span className="bg-gradient-to-r from-[#194EFF] to-blue-400 bg-clip-text text-transparent">
                            {method.title}
                          </span>
                        </h5>
                      </div>
                      <p className="font-medium text-white/60 text-sm sm:text-base group-hover:text-white/80 transition-colors duration-300 mt-1">
                        {method.description}
                      </p>
                      <div className="font-medium text-[#194EFF] text-sm sm:text-base group-hover:text-white transition-colors duration-300 xs:ml-auto">
                        {method.action}
                      </div>
                    </a>
                  ))}
                  <div className="flex flex-col xs:flex-row items-center xs:items-start gap-2 sm:gap-3 w-full">
                    <GlowButton 
                      className="group w-full xs:w-auto min-w-[140px] max-w-[180px] px-4 sm:px-5 py-2.5 sm:py-3 h-auto bg-gradient-to-r from-[#1539b3] via-[#1e3a8a] to-[#2563eb] hover:from-[#1e3a8a] hover:to-[#2563eb] rounded-xl border-0 shadow-lg hover:shadow-xl hover:scale-[1.02] transition-all duration-300 text-center relative overflow-hidden focus:outline-none focus:ring-2 focus:ring-[#1539b3]/60 mx-auto"
                      onClick={() => window.open("https://calendly.com/codava-dev/30min", "_blank")}
                    >
                      <span className="relative z-10 font-semibold text-white/90 text-sm sm:text-base tracking-wide leading-[22px] sm:leading-[26px] flex items-center gap-2">
                        Schedule a Consultation
                      </span>
                    </GlowButton>
                  </div>
                </div>
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