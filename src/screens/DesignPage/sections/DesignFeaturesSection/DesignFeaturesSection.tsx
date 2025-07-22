import React from "react";
import {
  FadeIn,
  StaggerContainer,
  StaggerItem
} from "../../../../components/ui/animated-elements";

export const DesignFeaturesSection = () => {
  const features = [
    {
      icon: "🎨",
      title: "UI/UX Design",
      description: "Intuitive interfaces that users love, backed by research and best practices for optimal user experience."
    },
    {
      icon: "🏢",
      title: "Brand Identity",
      description: "Complete brand systems including logos, color palettes, typography, and guidelines that make you memorable."
    },
    {
      icon: "📱",
      title: "Responsive Design",
      description: "Designs that work flawlessly across all devices and screen sizes with pixel-perfect precision."
    },
    {
      icon: "🔍",
      title: "User Research",
      description: "Data-driven design decisions based on user behavior analysis and comprehensive market research."
    },
    {
      icon: "⚡",
      title: "Rapid Prototyping",
      description: "Interactive prototypes that bring your ideas to life before development begins."
    },
    {
      icon: "🎯",
      title: "Conversion Focused",
      description: "Design strategies specifically crafted to increase user engagement and conversion rates."
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
              <span className="text-[#194EFF] text-sm font-medium">Design Excellence</span>
            </div>
          </FadeIn>

          <FadeIn delay={0.2} direction="up">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
              Creating Designs That
              <span className="block bg-gradient-to-r from-[#194EFF] to-[#4169E1] bg-clip-text text-transparent">
                Drive Results
              </span>
            </h2>
          </FadeIn>

          <FadeIn delay={0.3} direction="up">
            <p className="text-xl text-white/60 leading-relaxed max-w-3xl mx-auto">
              Our design process combines creativity with strategy to deliver visual solutions that not only look stunning but achieve your business goals.
            </p>
          </FadeIn>
        </div>

        {/* Features Grid */}
        <StaggerContainer staggerDelay={0.1}>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
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

      </div>
    </section>
  );
}; 