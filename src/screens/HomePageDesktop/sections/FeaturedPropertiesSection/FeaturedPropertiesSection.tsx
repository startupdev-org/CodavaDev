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
      icon: "💻",
      title: "Web Development",
      description: "Custom websites and web applications built with modern technologies for optimal performance and user experience.",
      features: ["Responsive Design", "E-commerce Integration", "CMS Development", "Performance Optimization"],
      price: "$2,499",
      period: "/project",
      popular: true
    },
    {
      icon: "🎨",
      title: "Design",
      description: "Creative visual solutions including branding, UI/UX design, and graphic design that captivate your audience.",
      features: ["Brand Identity", "UI/UX Design", "Logo Design", "Print Materials"],
      price: "$1,299",
      period: "/project",
      popular: false
    },
    {
      icon: "📢",
      title: "Digital Advertising",
      description: "Strategic digital marketing campaigns across multiple platforms to maximize your reach and ROI.",
      features: ["Google Ads", "Facebook Advertising", "Campaign Strategy", "Performance Analytics"],
      price: "$999",
      period: "/month",
      popular: false
    },
    {
      icon: "🔍",
      title: "SEO",
      description: "Search engine optimization strategies to improve your online visibility and drive organic traffic to your website.",
      features: ["Keyword Research", "On-Page SEO", "Technical SEO", "Monthly Reporting"],
      price: "$799",
      period: "/month",
      popular: false
    },
    {
      icon: "✍️",
      title: "Copywriting",
      description: "Compelling content that converts visitors into customers through strategic messaging and storytelling.",
      features: ["Website Copy", "Blog Content", "Email Campaigns", "Sales Pages"],
      price: "$599",
      period: "/project",
      popular: false
    }
  ];

  return (
    <section className="relative py-24">
      <div className="max-w-[1600px] mx-auto px-8 relative z-10">
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
              From stunning web development to strategic digital marketing, we deliver comprehensive 
              solutions that drive growth and elevate your brand presence.
          </p>
        </FadeIn>
      </div>

      {/* Services Grid */}
        <StaggerContainer staggerDelay={0.1}>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-10 xl:gap-12 mb-20">
            {services.map((service, index) => (
              <StaggerItem key={index}>
                <div
                  className={`group relative p-10 xl:p-12 bg-white/[0.03] backdrop-blur-xl border transition-all duration-500 hover:transform hover:scale-[1.02] h-full flex flex-col ${
                    service.popular 
                      ? 'border-[#194EFF]/40 shadow-xl shadow-[#194EFF]/15 bg-gradient-to-br from-[#194EFF]/[0.08] to-transparent' 
                      : 'border-white/10 hover:border-[#194EFF]/30 hover:bg-white/[0.06]'
                  } rounded-3xl relative overflow-hidden`}
                >
                  {/* Popular Badge */}
                  {service.popular && (
                    <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 z-10">
                      <div className="bg-gradient-to-r from-[#194EFF] to-[#194EFF]/90 text-white px-5 py-2 rounded-full text-sm font-semibold shadow-lg shadow-[#194EFF]/25 border border-[#194EFF]/30">
                        Most Popular
                      </div>
                    </div>
                  )}

                  {/* Background Gradient */}
                  <div className="absolute inset-0 bg-gradient-to-br from-transparent via-[#194EFF]/[0.02] to-[#194EFF]/[0.05] opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-3xl"></div>

                  {/* Service Icon */}
                  <div className="w-24 h-24 xl:w-28 xl:h-28 bg-gradient-to-br from-[#194EFF]/15 to-[#194EFF]/5 border border-[#194EFF]/20 rounded-2xl flex items-center justify-center text-4xl xl:text-5xl mb-10 group-hover:scale-110 group-hover:border-[#194EFF]/40 transition-all duration-500 shadow-lg shadow-[#194EFF]/10 relative z-10">
                    {service.icon}
                </div>

                  {/* Content */}
                  <div className="flex-1 relative z-10">
                    <h3 className="text-2xl xl:text-3xl font-bold text-white mb-6 group-hover:text-white transition-colors duration-300">{service.title}</h3>
                    <p className="text-white/60 leading-relaxed mb-10 text-base xl:text-lg">{service.description}</p>

                    {                    /* Features */}
                    <ul className="space-y-4 mb-10">
                      {service.features.map((feature, idx) => (
                        <li key={idx} className="flex items-center gap-4 text-white/70">
                          <div className="w-2.5 h-2.5 bg-[#194EFF] rounded-full flex-shrink-0 shadow-sm shadow-[#194EFF]/50"></div>
                          <span className="text-sm xl:text-base font-medium">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Pricing */}
                  <div className="relative z-10 mt-auto">
                    <div className="flex items-baseline gap-3 mb-8">
                      <span className="text-4xl xl:text-5xl font-bold text-white">{service.price}</span>
                      <span className="text-white/50 text-base xl:text-lg font-medium">{service.period}</span>
                </div>

                    {                    /* CTA Button */}
                    <button className={`w-full py-5 xl:py-6 px-6 rounded-2xl font-semibold text-base xl:text-lg transition-all duration-300 shadow-lg relative overflow-hidden group/btn ${
                      service.popular
                        ? 'bg-gradient-to-r from-[#194EFF] to-[#194EFF]/90 text-white hover:from-[#194EFF]/90 hover:to-[#194EFF]/80 shadow-[#194EFF]/25 hover:shadow-[#194EFF]/40'
                        : 'bg-white/8 text-white hover:bg-white/15 border border-white/20 hover:border-[#194EFF]/40 backdrop-blur-sm'
                    }`}>
                      <span className="relative z-10">Get Started</span>
                      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover/btn:translate-x-full transition-transform duration-1000"></div>
                    </button>
                  </div>
                </div>
              </StaggerItem>
          ))}
        </div>
        </StaggerContainer>

        {/* Bottom CTA */}
        <FadeIn delay={0.8} direction="up">
          <div className="text-center">
            <div className="inline-flex flex-col sm:flex-row gap-4">
              <button className="px-10 py-5 bg-gradient-to-r from-[#194EFF] to-[#194EFF]/90 text-white font-semibold text-lg rounded-2xl hover:from-[#194EFF]/90 hover:to-[#194EFF]/80 transition-all duration-300 shadow-xl shadow-[#194EFF]/25 hover:shadow-[#194EFF]/40 hover:scale-105 transform relative overflow-hidden group">
                <span className="relative z-10">Schedule Consultation</span>
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
              </button>
              <button className="px-10 py-5 bg-white/8 text-white font-semibold text-lg rounded-2xl border border-white/20 hover:bg-white/15 hover:border-[#194EFF]/40 transition-all duration-300 backdrop-blur-sm hover:scale-105 transform shadow-lg relative overflow-hidden group">
                <span className="relative z-10">View Portfolio</span>
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
              </button>
      </div>

            <p className="text-white/50 text-base mt-8 font-medium">
              Need a custom package? <span className="text-[#194EFF] hover:text-[#194EFF]/80 cursor-pointer font-semibold border-b border-[#194EFF]/30 hover:border-[#194EFF]/60 transition-all duration-300">Contact our team</span>
            </p>
        </div>
      </FadeIn>
      </div>
    </section>
  );
};