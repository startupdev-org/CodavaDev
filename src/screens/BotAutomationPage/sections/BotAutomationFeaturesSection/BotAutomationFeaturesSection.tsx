import React from "react";
import {
  FadeIn,
  StaggerContainer,
  StaggerItem
} from "../../../../components/ui/animated-elements";

export const BotAutomationFeaturesSection = () => {
  const features = [
    {
      icon: "🤖",
      title: "AI-Powered Chatbots",
      description: "Intelligent conversational agents that understand natural language and provide instant customer support 24/7."
    },
    {
      icon: "⚡",
      title: "Process Automation",
      description: "Automate repetitive tasks and workflows to increase efficiency and reduce manual errors across your organization."
    },
    {
      icon: "🔗",
      title: "Seamless Integration",
      description: "Easy integration with your existing CRM, helpdesk, and business systems for unified workflow management."
    },
    {
      icon: "📊",
      title: "Advanced Analytics",
      description: "Comprehensive reporting and analytics to track bot performance, user interactions, and business impact."
    },
    {
      icon: "🛡️",
      title: "Secure & Compliant",
      description: "Enterprise-grade security with data encryption, GDPR compliance, and secure API connections."
    },
    {
      icon: "🔄",
      title: "Continuous Learning",
      description: "Machine learning capabilities that improve bot responses and automation efficiency over time."
    }
  ];

  const techStack = [
    { name: "OpenAI GPT", description: "Natural Language Processing" },
    { name: "Dialogflow", description: "Conversation Management" },
    { name: "Python", description: "Backend Development" },
    { name: "Node.js", description: "API Integration" },
    { name: "MongoDB", description: "Data Storage" },
    { name: "AWS Lambda", description: "Serverless Functions" },
    { name: "Webhook APIs", description: "System Integration" },
    { name: "Analytics", description: "Performance Tracking" }
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
                Bot Automation
              </span>
            </h2>
          </FadeIn>

          <FadeIn delay={0.3} direction="up">
            <p className="text-xl text-white/60 leading-relaxed max-w-3xl mx-auto">
              We combine cutting-edge AI technology with practical business solutions to create automation that truly works for your organization.
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
              Powered by Advanced AI Technology
            </h3>
          </FadeIn>

          <FadeIn delay={0.2} direction="up">
            <p className="text-white/60 mb-12 max-w-2xl mx-auto">
              We leverage the latest AI and automation technologies to ensure your bots are intelligent, reliable, and scalable.
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