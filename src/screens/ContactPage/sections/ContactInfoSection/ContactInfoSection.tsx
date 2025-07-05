import React from "react";
import { 
  FadeIn, 
  StaggerContainer, 
  StaggerItem,
  FloatingElement
} from "../../../../components/ui/animated-elements";

export const ContactInfoSection: React.FC = () => {
  const contactInfo = [
    {
      title: "Email Us",
      description: "Get in touch via email",
      value: "hello@StartupDev.com",
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
        </svg>
      ),
      link: "mailto:hello@StartupDev.com"
    },
    {
      title: "Call Us",
      description: "Speak with our team",
      value: "+373 610 800 18",
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
        </svg>
      ),
      link: "tel:+37361080018"
    },
    {
      title: "Visit Us",
      description: "Our location",
      value: "Chisinau, Moldova",
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
        </svg>
      ),
      link: "https://maps.app.goo.gl/svT9xvKz168q2bqGA"
    }
  ];

  return (
    <section className="relative py-24">
      <div className="max-w-6xl mx-auto px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Contact Information */}
          <div className="space-y-12">
            <FadeIn delay={0.1} direction="up">
              <div>
                <h3 className="text-4xl font-bold text-white mb-6">
                  Get In <span className="bg-gradient-to-r from-[#194EFF] via-[#194EFF]/90 to-[#194EFF]/70 bg-clip-text text-transparent">Touch</span>
                </h3>
                <p className="text-white/70 text-lg leading-relaxed">
                  Ready to start your next project? We're here to help you bring your vision to life. 
                  Reach out to us through any of the channels below.
                </p>
              </div>
            </FadeIn>

            <StaggerContainer staggerDelay={0.1}>
              <div className="space-y-6">
                {contactInfo.map((info, index) => (
                  <StaggerItem key={index}>
                    <FloatingElement intensity={2} duration={4}>
                      <a
                        href={info.link}
                        className="block bg-white/[0.03] border border-white/10 rounded-2xl p-6 backdrop-blur-xl shadow-lg shadow-black/20 hover:shadow-[#194EFF]/10 transition-all duration-500 group hover:scale-105 transform"
                      >
                        <div className="flex items-start gap-4">
                          <div className="w-12 h-12 bg-gradient-to-br from-[#194EFF]/15 to-[#194EFF]/5 border border-[#194EFF]/20 rounded-xl flex items-center justify-center group-hover:scale-110 group-hover:border-[#194EFF]/40 transition-all duration-300">
                            <div className="text-[#194EFF]">
                              {info.icon}
                            </div>
                          </div>
                          <div className="flex-1">
                            <h4 className="text-white font-semibold text-lg mb-1 group-hover:text-[#194EFF] transition-colors duration-300">
                              {info.title}
                            </h4>
                            <p className="text-white/60 text-sm mb-2">{info.description}</p>
                            <p className="text-white/80 font-medium">{info.value}</p>
                          </div>
                        </div>
                      </a>
                    </FloatingElement>
                  </StaggerItem>
                ))}
              </div>
            </StaggerContainer>
          </div>

          {/* Office Hours & Additional Info */}
          <div className="space-y-12 mt-64">
            <FadeIn delay={0.3} direction="up">
              <div className="bg-white/[0.03] border border-white/10 rounded-3xl p-8 backdrop-blur-xl shadow-xl shadow-black/20 hover:shadow-[#194EFF]/10 transition-all duration-500">
                <h4 className="text-2xl font-bold text-white mb-6">Why Choose Us?</h4>
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-[#194EFF] rounded-full mt-2 flex-shrink-0"></div>
                    <p className="text-white/70">24/7 support and maintenance</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-[#194EFF] rounded-full mt-2 flex-shrink-0"></div>
                    <p className="text-white/70">Quick response time (within 2 hours)</p>
                  </div>
                  {/* <div className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-[#194EFF] rounded-full mt-2 flex-shrink-0"></div>
                    <p className="text-white/70">Expert team with 10+ years experience</p>
                  </div> */}
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-[#194EFF] rounded-full mt-2 flex-shrink-0"></div>
                    <p className="text-white/70">Secure and confidential communication</p>
                  </div>
                </div>
              </div>
            </FadeIn>

            {/* <FadeIn delay={0.4} direction="up">
              <div className="bg-gradient-to-br from-[#194EFF]/10 to-[#194EFF]/5 border border-[#194EFF]/20 rounded-3xl p-8 backdrop-blur-xl shadow-xl shadow-[#194EFF]/10 transition-all duration-500">
                <h4 className="text-2xl font-bold text-white mb-4">Emergency Support</h4>
                <p className="text-white/70 mb-4">
                  For urgent technical issues or critical support, contact our emergency hotline:
                </p>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-[#194EFF]/20 border border-[#194EFF]/30 rounded-xl flex items-center justify-center">
                    <svg className="w-5 h-5 text-[#194EFF]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L3.732 16.5c-.77.833.192 2.5 1.732 2.5z" />
                    </svg>
                  </div>
                  <span className="text-white font-semibold">+1 (555) 999-8888</span>
                </div>
              </div>
            </FadeIn> */}
          </div>
        </div>
      </div>
    </section>
  );
}; 