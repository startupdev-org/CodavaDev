import React, { useState } from "react";
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
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  const faqs = [
    {
      question: "How do I get started with TechFlow's IT services?",
      answer: "Getting started is simple! Contact us for a free consultation where we'll assess your current infrastructure, understand your business goals, and recommend tailored solutions. Our team will guide you through every step of the implementation process.",
    },
    {
      question: "What makes TechFlow different from other IT service providers?",
      answer: "We combine cutting-edge technology with personalized service. Our unique approach focuses on understanding your business first, then crafting solutions that drive real results. We offer 24/7 support, proactive monitoring, and a dedicated team that becomes an extension of your business.",
    },
    {
      question: "How can I contact a TechFlow solutions architect?",
      answer: "You can reach our solutions architects through multiple channels: schedule a call through our website, email us directly at hello@techflow.com, or call our dedicated line. We typically respond within 2 hours during business hours and offer emergency support 24/7.",
    },
    {
      question: "What is your typical project timeline?",
      answer: "Project timelines vary based on scope and complexity. Simple implementations can be completed in 2-4 weeks, while comprehensive digital transformations may take 3-6 months. We always provide detailed timelines during our initial consultation.",
    },
    {
      question: "Do you provide ongoing support after implementation?",
      answer: "Absolutely! We offer comprehensive support packages including 24/7 monitoring, regular maintenance, security updates, and dedicated support teams. Our goal is to be your long-term technology partner, not just a one-time service provider.",
    },
  ];

  return (
    <div className="flex flex-col w-full items-center relative overflow-hidden">
      {/* CTA Section */}
      <div className="flex items-center gap-16 px-8 py-20 relative w-full max-w-6xl mx-auto border-t border-b border-purple-60/20 bg-gradient-to-r from-grey-08/50 via-purple-900/5 to-grey-08/50 overflow-hidden rounded-2xl">
        {/* Background Effects */}
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-bl from-purple-600/20 to-transparent rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-gradient-to-tr from-purple-400/20 to-transparent rounded-full blur-3xl"></div>
        </div>

        <FadeIn delay={0.2} direction="right">
          <div className="flex flex-col items-start gap-6 relative flex-1 z-10 max-w-2xl">
            <div className="space-y-2">
              <div className="flex items-center gap-3 mb-2">
                <div className="w-1 h-8 bg-gradient-to-b from-purple-600 to-purple-400 rounded-full"></div>
                <span className="text-purple-400 font-medium text-sm uppercase tracking-wider">Get Started</span>
              </div>
              <h2 className="font-bold text-transparent bg-gradient-to-r from-white via-purple-100 to-white bg-clip-text text-4xl lg:text-5xl leading-tight">
                <TypewriterText text="Start Your Digital Transformation Today" speed={0.04} />
              </h2>
            </div>
            
            <p className="text-grey-60 text-lg leading-relaxed">
              Your next breakthrough is just a click away. Whether you're looking to modernize your infrastructure, 
              implement AI solutions, or enhance cybersecurity, TechFlow is here to guide you every step of the way.
            </p>
          </div>
        </FadeIn>

        <FloatingElement intensity={8} duration={4}>
          <FadeIn delay={0.6} direction="left">
            <GlowButton className="px-8 py-4 bg-gradient-to-r from-purple-600 to-purple-700 hover:from-purple-500 hover:to-purple-600 rounded-xl font-semibold text-white text-lg shadow-lg shadow-purple-600/25 transition-all duration-300 hover:scale-105 z-10 relative">
              Explore Solutions
            </GlowButton>
          </FadeIn>
        </FloatingElement>
      </div>

      {/* FAQ Section */}
      <div className="w-full max-w-6xl mx-auto px-8 py-20">
        {/* FAQ Header */}
        <div className="flex flex-col items-center gap-8 max-w-4xl text-center relative z-10 mx-auto">
          <FadeIn delay={0.2} direction="up">
            <div className="inline-flex items-center gap-3 px-6 py-3 bg-gradient-to-r from-purple-600/20 to-purple-800/20 rounded-full border border-purple-60/30 backdrop-blur-sm">
              <div className="w-2 h-2 bg-purple-400 rounded-full animate-pulse" />
              <span className="text-purple-200 text-sm font-medium">❓ Support</span>
            </div>
          </FadeIn>

          <FadeIn delay={0.3} direction="up">
            <h2 className="[font-family:'Urbanist',Helvetica] font-bold text-transparent bg-gradient-to-r from-purple-400 via-white to-purple-400 bg-clip-text text-6xl tracking-[0] leading-[72px] animate-gradient-shift bg-[length:200%_auto]">
              Frequently Asked Questions
            </h2>
          </FadeIn>
          
          <FadeIn delay={0.5} direction="up">
            <p className="max-w-3xl [font-family:'Urbanist',Helvetica] font-medium text-grey-40 text-xl tracking-[0] leading-[30px]">
              Find answers to common questions about TechFlow's IT services, digital transformation solutions, and our implementation process. We're here to provide clarity and guide you through your technology journey.
            </p>
          </FadeIn>

          <FadeIn delay={0.7} direction="up">
            <GlowButton className="px-8 py-4 h-auto bg-gradient-to-r from-purple-600 to-purple-700 hover:from-purple-500 hover:to-purple-600 rounded-xl font-medium text-white text-lg [font-family:'Urbanist',Helvetica] shadow-lg shadow-purple-600/25 transition-all duration-300 transform hover:scale-105">
              View All FAQ's
            </GlowButton>
          </FadeIn>
        </div>

        {/* FAQ List */}
        <StaggerContainer staggerDelay={0.1}>
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <StaggerItem key={index}>
                <ParallaxElement speed={0.02 * (index + 1)}>
                  <Card className="bg-gradient-to-br from-grey-08 to-grey-10 border border-purple-60/20 hover:border-purple-60/40 rounded-2xl transition-all duration-300 overflow-hidden group">
                    <CardContent className="p-0">
                      <button
                        className="w-full p-8 text-left focus:outline-none"
                        onClick={() => setOpenFaq(openFaq === index ? null : index)}
                      >
                        <div className="flex items-center justify-between">
                          <h3 className="font-semibold text-white text-lg group-hover:text-purple-100 transition-colors duration-300 pr-4">
                            {faq.question}
                          </h3>
                          <div className={`w-8 h-8 rounded-full bg-gradient-to-br from-purple-600/20 to-purple-800/20 flex items-center justify-center transition-transform duration-300 ${openFaq === index ? 'rotate-45' : ''}`}>
                            <svg className="w-4 h-4 text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                            </svg>
                          </div>
                        </div>
                      </button>
                      
                      <div className={`transition-all duration-300 overflow-hidden ${openFaq === index ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}`}>
                        <div className="px-8 pb-8">
                          <div className="w-full h-px bg-gradient-to-r from-transparent via-purple-600/30 to-transparent mb-6"></div>
                          <p className="text-grey-60 text-base leading-relaxed">
                            {faq.answer}
                          </p>
                          <div className="mt-4">
                            <button className="text-purple-400 hover:text-purple-300 font-medium text-sm transition-colors duration-200 group relative">
                              Read More
                              <div className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-purple-600 to-purple-400 group-hover:w-full transition-all duration-300"></div>
                            </button>
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </ParallaxElement>
              </StaggerItem>
            ))}
          </div>
        </StaggerContainer>
      </div>
    </div>
  );
};