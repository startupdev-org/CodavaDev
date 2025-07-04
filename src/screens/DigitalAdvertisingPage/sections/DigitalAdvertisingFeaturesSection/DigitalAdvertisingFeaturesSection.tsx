import React from "react";
import { 
  FadeIn, 
  StaggerContainer, 
  StaggerItem
} from "../../../../components/ui/animated-elements";

export const DigitalAdvertisingFeaturesSection = (): JSX.Element => {
  const features = [
    {
      icon: "🎯",
      title: "Precision Targeting",
      description: "Reach your exact audience with advanced demographic, behavioral, and interest-based targeting across all platforms."
    },
    {
      icon: "📊",
      title: "Performance Analytics",
      description: "Real-time campaign monitoring with detailed reporting on ROAS, conversions, and customer acquisition costs."
    },
    {
      icon: "🔄",
      title: "Continuous Optimization",
      description: "A/B testing, bid optimization, and creative iteration to maximize your campaign performance over time."
    },
    {
      icon: "📱",
      title: "Cross-Platform Campaigns",
      description: "Unified advertising strategy across Google, Facebook, Instagram, LinkedIn, and YouTube for maximum reach."
    },
    {
      icon: "🛒",
      title: "Conversion Tracking",
      description: "Advanced pixel implementation and conversion tracking to measure every interaction and optimize for results."
    },
    {
      icon: "💰",
      title: "Budget Optimization",
      description: "Smart budget allocation and bid management to ensure every dollar is working efficiently for your campaigns."
    }
  ];

  const platforms = [
    {
      name: "Google Ads",
      description: "Search, Display, Shopping, YouTube campaigns",
      icon: "🔍",
      specialties: ["Search Campaigns", "Shopping Ads", "Display Network", "YouTube Advertising"]
    },
    {
      name: "Facebook & Instagram",
      description: "Social media advertising and retargeting",
      icon: "📱",
      specialties: ["Feed Ads", "Stories", "Reels", "Messenger Ads"]
    },
    {
      name: "LinkedIn Ads",
      description: "B2B professional network advertising",
      icon: "💼",
      specialties: ["Sponsored Content", "Lead Gen Forms", "Message Ads", "Dynamic Ads"]
    },
    {
      name: "Microsoft Ads",
      description: "Bing search network advertising",
      icon: "🌐",
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
                  <div className="text-4xl mb-4">{feature.icon}</div>
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
                    <div className="text-3xl">{platform.icon}</div>
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