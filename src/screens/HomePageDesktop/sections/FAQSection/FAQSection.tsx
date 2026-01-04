import React, { useState } from "react";
import { Card, CardContent } from "../../../../components/ui/card";
import { Button } from "../../../../components/ui/button";
import { Badge } from "../../../../components/ui/badge";
import {
  FadeIn,
  StaggerContainer,
  StaggerItem,
  GlowButton
} from "../../../../components/ui/animated-elements";

export const FAQSection: React.FC = () => {
  const [openFAQ, setOpenFAQ] = useState<number | null>(0);

  const faqs = [
    {
      question: "What types of IT services do you offer?",
      answer: "We provide end-to-end IT solutions, including web and full stack development, UI/UX design, automation, SEO, copywriting, and 24/7 IT support—tailored to grow with your business."
    },
    {
      question: "How long does a typical project take?",
      answer: "Project timelines depend on scope. Small projects take 1-2 weeks, while larger digital transformations can take up to 3 months. We provide detailed timelines during your consultation."
    },
    {
      question: "Do you offer ongoing support after launch?",
      answer: "Yes! We provide 24/7 support and maintenance—including monitoring, updates, troubleshooting, and continuous optimization. This service is free for the first 14 days after your project is completed."
    },
    {
      question: "Can you help with content and copywriting?",
      answer: "Absolutely. Our expert copywriters create compelling website copy, emails, sales pages, and blog content to engage your audience and drive conversions."
    },
    {
      question: "How do you approach UI/UX design?",
      answer: "We use a user-centered approach, crafting intuitive and visually engaging interfaces that enhance user experience and reflect your brand identity."
    },
    {
      question: "Can you automate business processes or customer support?",
      answer: "Yes. We build smart automation and bot solutions to streamline tasks, improve customer service, and boost efficiency."
    },
    {
      question: "Will you work with our existing technology stack?",
      answer: "Absolutely. We integrate seamlessly with existing systems, using a thorough assessment to ensure compatibility and smooth operation."
    },
    {
      question: "What makes Codava different from other IT service providers?",
      answer: "We combine cutting-edge technology with personalized service, focusing on your business goals first. Our custom solutions deliver measurable results, supported by 24/7 assistance."
    }
  ];


  return (
    <section className="relative py-16">
      <div className="max-w-6xl mx-auto px-0 lg:px-8 relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <FadeIn delay={0.1} direction="up">
            <div className="inline-flex items-center gap-2 px-5 py-2.5 bg-white/8 border border-[#194EFF]/25 rounded-full mb-8 backdrop-blur-lg shadow-lg shadow-[#194EFF]/10">
              <div className="w-2.5 h-2.5 bg-[#194EFF] rounded-full animate-pulse shadow-sm shadow-[#194EFF]/50"></div>
              <span className="text-[#194EFF] text-sm font-semibold tracking-wide">SUPPORT CENTER</span>
            </div>
          </FadeIn>

          <FadeIn delay={0.2} direction="up">
            <h2 className="text-4xl md:text-5xl lg:text-5xl font-bold text-white leading-tight">
              Frequently Asked
              <span className="block bg-gradient-to-r text-transparent bg-gradient-to-r from-[#194EFF] to-blue-400 bg-clip-text h-20">
                Questions
              </span>
            </h2>
          </FadeIn>

          <FadeIn delay={0.3} direction="up">
            <p className="text-base lg:text-lg text-white/70 max-w-4xl mx-auto leading-relaxed font-light">
              Find answers to common questions about our IT services and digital solutions. Our experts help you make informed decisions.
            </p>
          </FadeIn>
        </div>

        {/* FAQ Accordion */}
        <StaggerContainer staggerDelay={0.1}>
          <div className="space-y-4 mb-16">
            {faqs.map((faq, index) => (
              <StaggerItem key={index}>
                <div className="w-full bg-white/[0.03] border border-white/10 rounded-3xl overflow-hidden hover:border-[#194EFF]/30 hover:bg-white/[0.06] transition-all duration-500 backdrop-blur-xl shadow-lg shadow-black/20 hover:shadow-[#194EFF]/10 group">
                  <button
                    className="w-full px-6 py-4 text-left grid grid-cols-[1fr,auto] items-center hover:bg-white/[0.02] transition-all duration-300 group/btn"
                    onClick={() => setOpenFAQ(openFAQ === index ? null : index)}
                  >
                    <span className="text-lg font-semibold text-white pr-8 group-hover:text-white transition-colors duration-300">
                      {faq.question}
                    </span>
                    <div className={`w-10 h-10 flex items-center justify-center rounded-2xl bg-gradient-to-br from-[#194EFF]/15 to-[#194EFF]/5 border border-[#194EFF]/20 transition-all duration-500 group-hover:border-[#194EFF]/40 group-hover:scale-110 ${openFAQ === index ? 'bg-gradient-to-br from-[#194EFF]/25 to-[#194EFF]/10' : ''
                      }`}>
                      <svg
                        className={`w-5 h-5 text-[#194EFF] transition-transform duration-300 ${openFAQ === index ? 'rotate-180' : ''
                          }`}
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M19 9l-7 7-7-7" />
                      </svg>
                    </div>
                  </button>

                  <div
                    className={`overflow-hidden transition-all duration-500 ease-in-out ${openFAQ === index ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                      }`}
                  >
                    <div className="px-6 pb-4 border-t border-white/10 bg-gradient-to-r from-[#194EFF]/[0.02] via-transparent to-[#194EFF]/[0.02]">
                      <p className="text-white/70 leading-relaxed pt-4 text-base font-light">
                        {faq.answer}
                      </p>
                    </div>
                  </div>
                </div>
              </StaggerItem>
            ))}
          </div>
        </StaggerContainer>

        {/* CTA Section */}
        <FadeIn delay={0.5} direction="up">
          <div className="text-center bg-white/[0.03] border border-white/10 rounded-2xl p-4 py-10 backdrop-blur-xl shadow-xl shadow-black/20 hover:shadow-[#194EFF]/10 transition-all duration-500 relative overflow-hidden group">
            {/* Background Gradient */}
            <div className="absolute inset-0 bg-gradient-to-br from-[#194EFF]/[0.03] via-transparent to-[#194EFF]/[0.05] opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-3xl"></div>

            <div className="relative z-10">
              <h3 className="text-4xl font-bold text-white mb-3">
                Start Your
                <span className="block text-transparent bg-gradient-to-r from-[#194EFF] to-blue-400 bg-clip-text">
                  Digital Transformation Today
                </span>
              </h3>

              <p className="text-white/70 text-base mb-4 max-w-2xl mx-auto font-light leading-relaxed">
                Ready to modernize your IT infrastructure? Our experts are standing by to help you get started
                with a comprehensive solution tailored to your business needs.
              </p>

              <div className="flex flex-col sm:flex-row gap-3 justify-center mb-10">
                <button
                  onClick={() => window.open('https://calendly.com/codava-dev/30min', '_blank')}
                  className="px-8 py-3 bg-gradient-to-r from-[#194EFF] to-[#194EFF]/90 text-white font-semibold text-base rounded-xl hover:from-[#194EFF]/90 hover:to-[#194EFF]/80 transition-all duration-300 shadow-xl shadow-[#194EFF]/25 hover:shadow-[#194EFF]/40 hover:scale-105 transform relative overflow-hidden group/btn"
                >
                  <span className="relative z-10">Get Free Consultation</span>
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover/btn:translate-x-full transition-transform duration-1000"></div>
                </button>
                {/* <button className="px-10 py-5 bg-white/8 text-white font-semibold text-lg rounded-2xl border border-white/20 hover:bg-white/15 hover:border-[#194EFF]/40 transition-all duration-300 backdrop-blur-sm hover:scale-105 transform shadow-lg relative overflow-hidden group/btn">
                  <span className="relative z-10">Download Our Guide</span>
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover/btn:translate-x-full transition-transform duration-1000"></div>
                </button> */}
              </div>

              {/* Contact Support */}
              <div className="border-t border-white/10 pt-4">
                <h4 className="text-white font-semibold text-xl mb-3">Still have questions?</h4>
                <p className="text-white/60 text-base mb-4 font-medium">
                  Our support team is available 24/7 to help you find the right solution for your business.
                </p>
                <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
                  <div className="flex items-center gap-3 text-[#194EFF] hover:text-[#194EFF]/80 transition-colors duration-300 cursor-pointer group/contact">
                    {/* <div className="w-10 h-10 bg-gradient-to-br from-[#194EFF]/15 to-[#194EFF]/5 border border-[#194EFF]/20 rounded-2xl flex items-center justify-center group-hover/contact:scale-110 group-hover/contact:border-[#194EFF]/40 transition-all duration-300">
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                      </svg>
                    </div> */}
                    {/* <span className="font-semibold">+1 (555) 123-4567</span> */}
                  </div>
                  <div className="flex items-center gap-3 text-[#194EFF] hover:text-[#194EFF]/80 transition-colors duration-300 cursor-pointer group/contact">
                    <div className="w-10 h-10 bg-gradient-to-br from-[#194EFF]/15 to-[#194EFF]/5 border border-[#194EFF]/20 rounded-2xl flex items-center justify-center group-hover/contact:scale-110 group-hover/contact:border-[#194EFF]/40 transition-all duration-300">
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                      </svg>
                    </div>
                    <span className="font-semibold">codava.dev@gmail.com</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  );
};