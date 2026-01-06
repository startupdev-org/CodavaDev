import {
  FadeIn,
  StaggerContainer,
  StaggerItem
} from "../../../../components/ui/animated-elements";

export const BotAutomationFeaturesSection = () => {
  const features = [
    {
      title: "Automate Repetitive Tasks",
      description: "Save hours of manual work by automating routine processes. Focus your team on high-value activities that drive business growth.",
      icon: "Zap"
    },
    {
      title: "Scale Effortlessly",
      description: "AI-powered teams that adapt to your needs. Scale operations without increasing headcount or overhead costs.",
      icon: "TrendingUp"
    },
    {
      title: "Reduce Human Error",
      description: "Eliminate mistakes with intelligent automation. Ensure consistent, accurate results across all your business processes.",
      icon: "Shield"
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
        <div className="text-center mb-16">
          <FadeIn delay={0.1} direction="up">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Why Choose
              <span className="block bg-gradient-to-r from-[#194EFF] to-[#4169E1] bg-clip-text text-transparent mt-1">
                AI Automation?
              </span>
            </h2>
          </FadeIn>

          <FadeIn delay={0.2} direction="up">
            <p className="text-lg text-white/70 leading-relaxed max-w-2xl mx-auto">
              Transform your business operations with intelligent automation that saves time and scales with your growth.
            </p>
          </FadeIn>
        </div>

        {/* Features Grid */}
        <StaggerContainer staggerDelay={0.1}>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {features.map((feature, index) => (
              <StaggerItem key={index}>
                <div className="group p-8 bg-gradient-to-br from-white/[0.08] to-white/[0.03] border border-white/10 rounded-3xl shadow-xl backdrop-blur-xl hover:border-[#194EFF]/30 transition-all duration-300 transform hover:scale-105 flex flex-col h-full">
                  {/* Icon */}
                  <div className="w-12 h-12 bg-[#194EFF]/20 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-[#194EFF]/30 transition-colors duration-300">
                    {index === 0 ? (
                      <svg className="w-6 h-6 text-[#194EFF]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                      </svg>
                    ) : index === 1 ? (
                      <svg className="w-6 h-6 text-[#194EFF]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                      </svg>
                    ) : (
                      <svg className="w-6 h-6 text-[#194EFF]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                      </svg>
                    )}
                  </div>

                  {/* Title */}
                  <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-[#194EFF] transition-colors duration-300">
                    {feature.title}
                  </h3>

                  {/* Description */}
                  <p className="text-white/70 leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              </StaggerItem>
            ))}
          </div>
        </StaggerContainer>

        {/* Technology Stack */}
        {/* <div className="text-center">
          <FadeIn delay={0.1} direction="up">
            <h3 className="text-3xl font-bold text-white mb-4">
              Powered by Advanced AI Technology
            </h3>
          </FadeIn>

          <FadeIn delay={0.2} direction="up">
            <p className="text-white/60 mb-12 max-w-2xl mx-auto">
              We leverage the latest AI and automation technologies to ensure your bots are intelligent, reliable, and scalable.
            </p>
          </FadeIn> */}

        {/* <StaggerContainer staggerDelay={0.05}>
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
          </StaggerContainer> */}
        {/* </div> */}

      </div>
    </section>
  );
}; 