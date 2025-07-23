import React from "react";
import { Badge } from "../../../../components/ui/badge";
import { Button } from "../../../../components/ui/button";
import { Card, CardContent } from "../../../../components/ui/card";
import { Link } from "react-router-dom";
import {
  FadeIn,
  StaggerContainer,
  StaggerItem,
  GlowButton
} from "../../../../components/ui/animated-elements";
import { MdOutlinePalette } from "react-icons/md";
import { LuPen } from "react-icons/lu";

export const FeaturedPropertiesSection: React.FC = () => {
  const services = [
    {
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
        </svg>
      ),
      title: "Full Stack Development",
      description:
        "Build end-to-end digital products with modern tools that are fast, secure, and scalable.",
      features: [
        "Frontend & Backend",
        "Database Design",
        "API Connections",
        "Deployment & Maintenance",
      ],
      popular: true,
      route: "/services/full-stack-development",
    },
    {
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
        </svg>
      ),
      title: "Bot Automation",
      description:
        "Create smart bots and automation to improve customer service and streamline business tasks.",
      features: [
        "Chatbots with AI",
        "Task Automation",
        "24/7 Support",
      ],
      popular: false,
      route: "/services/bot-automation",
    },
    {
      icon: (
        <MdOutlinePalette className="w-8 h-8" />
      ),
      title: "Design",
      description:
        "Deliver clear and engaging visuals that connect your brand with your customers.",
      features: [
        "Branding & Logos",
        "Website Design",
        "User Experience (UX)",
        "Marketing Materials",
      ],
      popular: false,
      route: "/services/design",
    },
    {
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
        </svg>
      ),
      title: "SEO",
      description:
        "Improve your website's ranking on search engines to attract more visitors and potential customers.",
      features: [
        "Keyword Research",
        "On-Page SEO",
        "Technical SEO",
        "Monthly Reports",
      ],
      popular: false,
      route: "/services/seo",
    },
    {
      icon: (
        <LuPen className="w-8 h-8" />
      ),
      title: "Copywriting",
      description:
        "Compelling copy that connects with your audience and drives action. From website content to email campaigns, we craft words that convert visitors into customers.",
      features: [
        "Website Copy",
        "Email Campaigns",
        "Sales Pages",
        "Blog Content",
      ],
      popular: false,
      route: "/services/copywriting",
    },
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
            <h2 className="text-4xl lg:text-5xl md:text-5xl font-bold text-white mb-6 leading-tight">
              Professional
              <span className="block bg-gradient-to-r h-[50px] lg:h-[70px] text-transparent bg-gradient-to-r from-[#194EFF] to-blue-400 bg-clip-text">
                Digital Solutions
              </span>
            </h2>
          </FadeIn>

          <FadeIn delay={0.3} direction="up">
            <p className="text-base lg:text-lg text-white/70 max-w-4xl mx-auto leading-relaxed font-light">
              From web development to smart automation, we deliver solutions that boost growth and elevate your brand.
            </p>
          </FadeIn>
        </div>

        {/* Services Grid */}
        <StaggerContainer staggerDelay={0.1}>
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8 mb-20">
            {services.map((service, index) => (
              <StaggerItem key={index}>
                <div className={`relative bg-white/[0.03] border border-white/10 rounded-3xl p-8 transition-all duration-500 hover:border-[#194EFF]/30 hover:bg-white/[0.06] backdrop-blur-xl shadow-lg shadow-black/20 hover:shadow-[#194EFF]/10 group h-full flex flex-col ${service.popular ? 'ring-1 ring-[#194EFF]/20' : ''
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
                      <Link to={service.route} className={`w-full py-4 px-6 rounded-2xl font-semibold text-base transition-all duration-300 shadow-lg relative overflow-hidden group/btn block ${service.popular
                        ? 'bg-gradient-to-r from-[#194EFF] to-[#194EFF]/90 text-white hover:from-[#194EFF]/90 hover:to-[#194EFF]/80 shadow-[#194EFF]/25 hover:shadow-[#194EFF]/40'
                        : 'bg-white/8 text-white hover:bg-white/15 border border-white/20 hover:border-[#194EFF]/40 backdrop-blur-sm'
                        }`}>
                        <span className="relative z-10">Learn More</span>
                        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover/btn:translate-x-full transition-transform duration-1000"></div>
                      </Link>
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