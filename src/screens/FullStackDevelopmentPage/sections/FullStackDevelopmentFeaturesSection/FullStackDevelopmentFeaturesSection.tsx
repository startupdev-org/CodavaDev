import React from "react";
import {
  FadeIn,
  StaggerContainer,
  StaggerItem
} from "../../../../components/ui/animated-elements";

export const FullStackDevelopmentFeaturesSection = () => {
  const features = [
    {
      icon: "🎨",
      title: "Frontend Development",
      description: "Modern, responsive interfaces built with React, Vue.js, and Angular to deliver great user experiences on any device."
    },
    {
      icon: "⚙️",
      title: "Backend Development",
      description: "Robust server-side solutions using Node.js, Python, and Java, including RESTful APIs and microservices."
    },
    {
      icon: "🗄️",
      title: "Database Design",
      description: "Efficient database architecture with SQL and NoSQL to ensure data accuracy and high performance."
    },
    {
      icon: "🔗",
      title: "API Integration",
      description: "Smooth integration with third-party services, payment gateways, and external APIs for added functionality."
    },
    {
      icon: "🚀",
      title: "DevOps & Deployment",
      description: "Automated deployment pipelines, containerization with Docker, and cloud management for scalable and reliable applications."
    },
    {
      icon: "🛡️",
      title: "Security & Performance",
      description: "Strong security practices, performance tuning, and thorough testing for stable and secure software."
    }
  ];


  const techStack = [
    { name: "React", description: "Frontend Framework" },
    { name: "Node.js", description: "Backend Runtime" },
    { name: "TypeScript", description: "Type-Safe Development" },
    { name: "MongoDB", description: "NoSQL Database" },
    { name: "PostgreSQL", description: "SQL Database" },
    { name: "AWS", description: "Cloud Infrastructure" },
    { name: "Docker", description: "Containerization" },
    { name: "SpringBoot", description: "Java Backend Framework" },
  ];

  return (
    <section className="relative py-20 mb-12 bg-gradient-to-b from-[#00041F] via-[#00020F] to-[#00041F]">
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
              Why Choose Our <span className="block bg-gradient-to-r from-[#194EFF] to-[#4169E1] bg-clip-text text-transparent">
                Full Stack Development
              </span>
            </h2>
          </FadeIn>

          <FadeIn delay={0.3} direction="up">
            <p className="text-xl text-white/60 leading-relaxed max-w-3xl mx-auto">
              We deliver complete full stack solutions that seamlessly integrate frontend, backend, and database layers for optimal performance and user experience.
            </p>
          </FadeIn>
        </div>

        {/* Features Grid */}
        <StaggerContainer staggerDelay={0.1}>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
            {features.map((feature) => (
              <StaggerItem key={feature.title}>
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
              Powered by Modern Technology Stack
            </h3>
          </FadeIn>

          <FadeIn delay={0.2} direction="up">
            <p className="text-white/60 mb-12 max-w-2xl mx-auto">
              Leveraging the latest technologies across the full stack to deliver scalable, maintainable, and high-performance applications.
            </p>
          </FadeIn>

          <StaggerContainer staggerDelay={0.05}>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {techStack.map((tech) => (
                <StaggerItem key={tech.name}>
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