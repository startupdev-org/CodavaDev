import React from "react";
import { Badge } from "../../../../components/ui/badge";
import { Button } from "../../../../components/ui/button";
import { Card, CardContent } from "../../../../components/ui/card";
import {
  FadeIn, 
  StaggerContainer, 
  StaggerItem, 
  GlowButton
} from "../../../../components/ui/animated-elements";

export const FeaturedPropertiesSection: React.FC = () => {
  const services = [
    {
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
        </svg>
      ),
      title: "Web Development",
      description: "Custom websites and web applications built with modern technologies for optimal performance and user experience.",
      features: ["Responsive Design", "E-commerce Integration", "CMS Development", "Performance Optimization"],
      popular: true
    },
    {
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
        </svg>
      ),
      title: "Bot Automation",
      description: "Intelligent chatbots and automation solutions that streamline customer service and business processes.",
      features: ["AI Chatbots", "Process Automation", "24/7 Support", "CRM Integration"],
      popular: false
    },
    {
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zM21 5a2 2 0 00-2-2h-4a2 2 0 00-2 2v12a4 4 0 004 4h4a2 2 0 002-2V5z" />
        </svg>
      ),
      title: "Design",
      description: "Creative visual solutions including branding, UI/UX design, and graphic design that captivate your audience.",
      features: ["Brand Identity", "UI/UX Design", "Logo Design", "Print Materials"],
      popular: false
    },
    {
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5.882V19.24a1.76 1.76 0 01-3.417.592l-2.147-6.15M18 13a3 3 0 100-6M5.436 13.683A4.001 4.001 0 017 6h1.832c4.1 0 7.625-1.234 9.168-3v14c-1.543-1.766-5.067-3-9.168-3H7a3.988 3.988 0 01-1.564-.317z" />
        </svg>
      ),
      title: "Digital Advertising",
      description: "Strategic digital marketing campaigns across multiple platforms to maximize your reach and ROI.",
      features: ["Google Ads", "Facebook Advertising", "Campaign Strategy", "Performance Analytics"],
      popular: false
    },
    {
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
        </svg>
      ),
      title: "SEO",
      description: "Search engine optimization strategies to improve your online visibility and drive organic traffic to your website.",
      features: ["Keyword Research", "On-Page SEO", "Technical SEO", "Monthly Reporting"],
      popular: false
    },
    {
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z" />
        </svg>
      ),
      title: "Copywriting",
      description: "Compelling content that converts visitors into customers through strategic messaging and storytelling.",
      features: ["Website Copy", "Blog Content", "Email Campaigns", "Sales Pages"],
      popular: false
    }
  ];

  return (
    <section className="relative py-24">
      <div className="max-w-6xl mx-auto px-8 relative z-10">
        {/* Header */}
        <div className="text-center mb-20">
          <FadeIn delay={0.1} direction="up">
            <div className="inline-flex items-center gap-2 px-5 py-2.5 bg-white/8 border border-[#194EFF]/25 rounded-full mb-8 backdrop-blur-lg shadow-lg shadow-[#194EFF]/10">
              <div className="w-2.5 h-2.5 bg-[#194EFF] rounded-full animate-pulse shadow-sm shadow-[#194EFF]/50"></div>
              <span className="text-[#194EFF] text-sm font-semibold tracking-wide">CREATIVE SERVICES</span>
          </div>
        </FadeIn>

          <FadeIn delay={0.2} direction="up">
            <h2 className="text-5xl md:text-6xl font-bold text-white mb-6 leading-tight">
              Professional
              <span className="block bg-gradient-to-r from-[#194EFF] via-[#194EFF]/90 to-[#194EFF]/70 bg-clip-text text-transparent">
                Digital Solutions
              </span>
          </h2>
        </FadeIn>
        
          <FadeIn delay={0.3} direction="up">
            <p className="text-xl text-white/70 max-w-4xl mx-auto leading-relaxed font-light">
              From stunning web development to intelligent automation, we deliver comprehensive 
              solutions that drive growth and elevate your brand presence.
          </p>
        </FadeIn>
      </div>

      {/* Services Grid */}
        <StaggerContainer staggerDelay={0.1}>
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8 mb-20">
            {services.map((service, index) => (
              <StaggerItem key={index}>
                <div className={`relative bg-white/[0.03] border border-white/10 rounded-3xl p-8 transition-all duration-500 hover:border-[#194EFF]/30 hover:bg-white/[0.06] backdrop-blur-xl shadow-lg shadow-black/20 hover:shadow-[#194EFF]/10 group h-full flex flex-col ${
                  service.popular ? 'ring-1 ring-[#194EFF]/20' : ''
                }`}>
                  
                  {/* Popular Badge */}
                  {service.popular && (
                    <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 z-10">
                      <div className="bg-gradient-to-r from-[#194EFF] to-[#194EFF]/90 text-white px-4 py-1.5 rounded-full text-xs font-semibold shadow-lg shadow-[#194EFF]/25 border border-[#194EFF]/30">
                        Most Popular
                      </div>
                    </div>
                  )}

                  {/* Background Gradient */}
                  <div className="absolute inset-0 bg-gradient-to-br from-[#194EFF]/[0.02] via-transparent to-[#194EFF]/[0.05] opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-3xl"></div>

                  {/* Content */}
                  <div className="relative z-10 flex flex-col h-full">
                    {/* Service Icon */}
                    <div className="w-16 h-16 bg-gradient-to-br from-[#194EFF]/15 to-[#194EFF]/5 border border-[#194EFF]/20 rounded-2xl flex items-center justify-center text-[#194EFF] mb-6 group-hover:scale-110 group-hover:border-[#194EFF]/40 transition-all duration-500 shadow-lg shadow-[#194EFF]/10">
                      {service.icon}
                    </div>

                    {/* Title */}
                    <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-white transition-colors duration-300">
                      {service.title}
                  </h3>

                    {/* Description */}
                    <p className="text-white/60 leading-relaxed mb-6 text-base flex-1">
                      {service.description}
                    </p>

                    {/* Features */}
                    <ul className="space-y-3 mb-8">
                      {service.features.map((feature, idx) => (
                        <li key={idx} className="flex items-center gap-3 text-white/70">
                          <div className="w-2 h-2 bg-[#194EFF] rounded-full flex-shrink-0 shadow-sm shadow-[#194EFF]/50"></div>
                          <span className="text-sm font-medium">{feature}</span>
                        </li>
                      ))}
                    </ul>

                    {/* CTA */}
                    <div className="mt-auto">
                      <button className={`w-full py-4 px-6 rounded-2xl font-semibold text-base transition-all duration-300 shadow-lg relative overflow-hidden group/btn ${
                        service.popular
                          ? 'bg-gradient-to-r from-[#194EFF] to-[#194EFF]/90 text-white hover:from-[#194EFF]/90 hover:to-[#194EFF]/80 shadow-[#194EFF]/25 hover:shadow-[#194EFF]/40'
                          : 'bg-white/8 text-white hover:bg-white/15 border border-white/20 hover:border-[#194EFF]/40 backdrop-blur-sm'
                      }`}>
                        <span className="relative z-10">Learn More</span>
                        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover/btn:translate-x-full transition-transform duration-1000"></div>
                      </button>
                    </div>
                  </div>
                </div>
              </StaggerItem>
          ))}
        </div>
        </StaggerContainer>

    

      </div>
    </section>
  );
};