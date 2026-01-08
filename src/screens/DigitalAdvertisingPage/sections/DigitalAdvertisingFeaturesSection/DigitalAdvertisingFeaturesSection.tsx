import React from "react";
import {
  FadeIn,
  StaggerContainer,
  StaggerItem
} from "../../../../components/ui/animated-elements";

export const DigitalAdvertisingFeaturesSection = () => {
  const features = [
    {
      icon: (
        <svg className="w-8 h-8 text-[#194EFF]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L3.732 16.5c-.77.833.192 2.5 1.732 2.5z" />
        </svg>
      ),
      title: "Precision Targeting",
      description: "Reach your exact audience with advanced demographic, behavioral, and interest-based targeting across all platforms."
    },
    {
      icon: (
        <svg className="w-8 h-8 text-[#194EFF]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
        </svg>
      ),
      title: "Performance Analytics",
      description: "Real-time campaign monitoring with detailed reporting on ROAS, conversions, and customer acquisition costs."
    },
    {
      icon: (
        <svg className="w-8 h-8 text-[#194EFF]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
        </svg>
      ),
      title: "Continuous Optimization",
      description: "A/B testing, bid optimization, and creative iteration to maximize your campaign performance over time."
    },
    {
      icon: (
        <svg className="w-8 h-8 text-[#194EFF]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
        </svg>
      ),
      title: "Cross-Platform Campaigns",
      description: "Unified advertising strategy across Google, Facebook, Instagram, LinkedIn, and YouTube for maximum reach."
    },
    {
      icon: (
        <svg className="w-8 h-8 text-[#194EFF]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4m0 0L7 13m0 0l-1.1 5H19M7 13l1.1 5M7 13v8a2 2 0 002 2h8a2 2 0 002-2v-3" />
        </svg>
      ),
      title: "Conversion Tracking",
      description: "Advanced pixel implementation and conversion tracking to measure every interaction and optimize for results."
    },
    {
      icon: (
        <svg className="w-8 h-8 text-[#194EFF]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
      title: "Budget Optimization",
      description: "Smart budget allocation and bid management to ensure every dollar is working efficiently for your campaigns."
    }
  ];

  const platforms = [
    {
      name: "Google Ads",
      description: "Search, Display, Shopping, YouTube campaigns",
      icon: (
        <svg className="w-6 h-6 text-[#194EFF]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
        </svg>
      ),
      specialties: ["Search Campaigns", "Shopping Ads", "Display Network", "YouTube Advertising"]
    },
    {
      name: "Facebook & Instagram",
      description: "Social media advertising and retargeting",
      icon: (
        <svg className="w-6 h-6 text-[#194EFF]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
        </svg>
      ),
      specialties: ["Feed Ads", "Stories", "Reels", "Messenger Ads"]
    },
    {
      name: "LinkedIn Ads",
      description: "B2B professional network advertising",
      icon: (
        <svg className="w-6 h-6 text-[#194EFF]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
        </svg>
      ),
      specialties: ["Sponsored Content", "Lead Gen Forms", "Message Ads", "Dynamic Ads"]
    },
    {
      name: "Microsoft Ads",
      description: "Bing search network advertising",
      icon: (
        <svg className="w-6 h-6 text-[#194EFF]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9v-9m0 9c-1.657 0-3-4.03-3-9s1.343-9 3-9m0 18c1.657 0 3-4.03 3-9s-1.343-9-3-9m-9 9a9 9 0 019-9" />
        </svg>
      ),
      specialties: ["Search Ads", "Shopping Campaigns", "Audience Network", "Import from Google"]
    }
  ];

  return (
    <section className="relative py-24 bg-gradient-to-b from-[#00041F] via-[#00020F] to-[#00041F]">
      <div className="max-w-7xl mx-auto px-6">

        {/* Section Header */}
        <div className="text-center mb-20">
          <FadeIn delay={0.1} direction="up">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-[#194EFF]/10 border border-[#194EFF]/20 rounded-full backdrop-blur-sm mb-6">
              <div className="w-2 h-2 bg-[#194EFF] rounded-full animate-pulse"></div>
              <span className="text-[#194EFF] text-sm font-medium">Advertising Excellence</span>
            </div>
          </FadeIn>

          <FadeIn delay={0.2} direction="up">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
              Campaigns That
              <span className="block bg-gradient-to-r from-[#194EFF] to-[#4169E1] bg-clip-text text-transparent">
                Convert & Scale
              </span>
            </h2>
          </FadeIn>

          <FadeIn delay={0.3} direction="up">
            <p className="text-xl text-white/60 leading-relaxed max-w-3xl mx-auto">
              Our data-driven approach to digital advertising combines strategic targeting, compelling creatives, and continuous optimization to deliver exceptional ROI.
            </p>
          </FadeIn>
        </div>

        {/* Features Grid */}
        <StaggerContainer staggerDelay={0.1}>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
            {features.map((feature, index) => (
              <StaggerItem key={index}>
                <div className="group p-8 bg-white/5 border border-white/10 rounded-2xl backdrop-blur-sm hover:bg-white/10 hover:border-[#194EFF]/30 transition-all duration-300 transform hover:scale-105">
                  <div className="mb-4">{feature.icon}</div>
                  <h3 className="text-xl font-semibold text-white mb-3 group-hover:text-[#194EFF] transition-colors duration-300">
                    {feature.title}
                  </h3>
                  <p className="text-white/60 leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              </StaggerItem>
            ))}
          </div>
        </StaggerContainer>

        {/* Platforms Section */}
        <div className="text-center mb-16">
          <FadeIn delay={0.1} direction="up">
            <h3 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Multi-Platform Expertise
            </h3>
          </FadeIn>
          <FadeIn delay={0.2} direction="up">
            <p className="text-lg text-white/60 max-w-2xl mx-auto">
              We manage campaigns across all major advertising platforms to maximize your reach and results.
            </p>
          </FadeIn>
        </div>

        <StaggerContainer staggerDelay={0.15}>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {platforms.map((platform, index) => (
              <StaggerItem key={index}>
                <div className="group p-8 bg-gradient-to-br from-white/5 to-white/[0.02] border border-white/10 rounded-2xl backdrop-blur-sm hover:border-[#194EFF]/30 transition-all duration-300">
                  <div className="flex items-center gap-4 mb-6">
                    <div>{platform.icon}</div>
                    <div>
                      <h4 className="text-xl font-semibold text-white group-hover:text-[#194EFF] transition-colors duration-300">
                        {platform.name}
                      </h4>
                      <p className="text-white/60 text-sm">{platform.description}</p>
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-3">
                    {platform.specialties.map((specialty, specialtyIndex) => (
                      <div key={specialtyIndex} className="px-3 py-2 bg-white/5 border border-white/10 rounded-lg text-white/80 text-sm font-medium text-center hover:bg-white/10 transition-all duration-300">
                        {specialty}
                      </div>
                    ))}
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