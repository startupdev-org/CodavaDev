import React from "react";
import {
  FadeIn,
  StaggerContainer,
  StaggerItem
} from "../../../../components/ui/animated-elements";

export const WebDevelopmentFeaturesSection = () => {
  const features = [
    {
      icon: "🚀",
      title: "Performance Optimized",
      description: "Lightning-fast loading speeds with modern optimization techniques and CDN integration for global reach."
    },
    {
      icon: "📱",
      title: "Responsive Design",
      description: "Perfect user experience across all devices - desktop, tablet, and mobile with pixel-perfect precision."
    },
    {
      icon: "🔒",
      title: "Security First",
      description: "Enterprise-level security with SSL encryption, secure authentication, and regular security audits."
    },
    {
      icon: "⚡",
      title: "Modern Technology",
      description: "Built with cutting-edge frameworks like React, Next.js, and Node.js for scalable, maintainable code."
    },
    {
      icon: "🔧",
      title: "Custom Solutions",
      description: "Tailored development approach that fits your unique business requirements and growth objectives."
    },
    {
      icon: "📊",
      title: "Analytics Ready",
      description: "Integrated tracking and analytics setup to monitor performance and user behavior from day one."
    }
  ];

  const techStack = [
    { name: "React", description: "Modern UI Library" },
    { name: "Next.js", description: "Full-Stack Framework" },
    { name: "TypeScript", description: "Type-Safe Development" },
    { name: "Node.js", description: "Server-Side Runtime" },
    { name: "MongoDB", description: "NoSQL Database" },
    { name: "AWS", description: "Cloud Infrastructure" },
    { name: "PostgreSQL", description: "Relational Database" },
    { name: "Docker", description: "Containerization" }
  ];

  return (
    <section className="relative py-24 bg-gradient-to-b from-[#00041F] via-[#00020F] to-[#00041F]">
      <div className="max-w-7xl mx-auto px-6">

        {/* Section Header */}
        <div className="text-center mb-20">
          <FadeIn delay={0.1} direction="up">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-[#194EFF]/10 border border-[#194EFF]/20 rounded-full backdrop-blur-sm mb-6">
              <div className="w-2 h-2 bg-[#194EFF] rounded-full animate-pulse"></div>
              <span className="text-[#194EFF] text-sm font-medium">Our Approach</span>
            </div>
          </FadeIn>

          <FadeIn delay={0.2} direction="up">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
              Why Choose Our
              <span className="block bg-gradient-to-r from-[#194EFF] to-[#4169E1] bg-clip-text text-transparent">
                Web Development
              </span>
            </h2>
          </FadeIn>

          <FadeIn delay={0.3} direction="up">
            <p className="text-xl text-white/60 leading-relaxed max-w-3xl mx-auto">
              We combine technical expertise with creative innovation to deliver web solutions that not only look amazing but perform exceptionally well.
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

        {/* Technology Stack */}
        <div className="text-center">
          <FadeIn delay={0.1} direction="up">
            <h3 className="text-3xl font-bold text-white mb-4">
              Powered by Modern Technology
            </h3>
          </FadeIn>

          <FadeIn delay={0.2} direction="up">
            <p className="text-white/60 mb-12 max-w-2xl mx-auto">
              We leverage the latest technologies and frameworks to ensure your web application is fast, scalable, and future-proof.
            </p>
          </FadeIn>

          <StaggerContainer staggerDelay={0.05}>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {techStack.map((tech, index) => (
                <StaggerItem key={index}>
                  <div className="group p-6 bg-white/5 border border-white/10 rounded-xl backdrop-blur-sm hover:bg-white/10 hover:border-[#194EFF]/30 transition-all duration-300 text-center">
                    <div className="font-semibold text-white group-hover:text-[#194EFF] transition-colors duration-300 mb-1">
                      {tech.name}
                    </div>
                    <div className="text-xs text-white/50">
                      {tech.description}
                    </div>
                  </div>
                </StaggerItem>
              ))}
            </div>
          </StaggerContainer>
        </div>

      </div>
    </section>
  );
}; 