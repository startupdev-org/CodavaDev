import React from "react";
import { 
  FadeIn, 
  StaggerContainer, 
  StaggerItem
} from "../../../../components/ui/animated-elements";

export const SEOFeaturesSection = (): JSX.Element => {
  const features = [
    {
      icon: "🔍",
      title: "Keyword Research",
      description: "In-depth keyword analysis to identify high-value search terms that your target audience uses to find businesses like yours."
    },
    {
      icon: "⚙️",
      title: "Technical SEO",
      description: "Optimize site speed, mobile responsiveness, crawlability, and technical elements for better search engine performance."
    },
    {
      icon: "📝",
      title: "Content Optimization",
      description: "Create and optimize content that ranks well and provides value to your audience, driving engagement and conversions."
    },
    {
      icon: "📈",
      title: "Ranking Improvement",
      description: "Proven strategies to improve your search rankings and increase visibility for your most important keywords."
    },
    {
      icon: "🔗",
      title: "Link Building",
      description: "Build high-quality, authoritative backlinks that boost your domain authority and search engine credibility."
    },
    {
      icon: "📊",
      title: "Analytics & Reporting",
      description: "Comprehensive tracking and reporting to monitor progress, measure ROI, and identify optimization opportunities."
    }
  ];

  const seoProcess = [
    {
      step: "01",
      title: "SEO Audit",
      description: "Comprehensive analysis of your current SEO performance and opportunities",
      icon: "🔍"
    },
    {
      step: "02", 
      title: "Strategy Development",
      description: "Custom SEO strategy based on your business goals and competitive landscape",
      icon: "📋"
    },
    {
      step: "03",
      title: "Implementation",
      description: "Execute on-page, technical, and content optimizations across your website",
      icon: "⚙️"
    },
    {
      step: "04",
      title: "Monitoring & Growth",
      description: "Track rankings, traffic, and conversions while continuously optimizing",
      icon: "📈"
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
              <span className="text-[#194EFF] text-sm font-medium">SEO Excellence</span>
            </div>
          </FadeIn>
          
          <FadeIn delay={0.2} direction="up">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
              SEO That Delivers
              <span className="block bg-gradient-to-r from-[#194EFF] to-[#4169E1] bg-clip-text text-transparent">
                Measurable Growth
              </span>
            </h2>
          </FadeIn>
          
          <FadeIn delay={0.3} direction="up">
            <p className="text-xl text-white/60 leading-relaxed max-w-3xl mx-auto">
              Our comprehensive SEO approach combines technical expertise, content strategy, and proven optimization techniques to drive sustainable organic growth.
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

        {/* SEO Process Section */}
        <div className="text-center mb-16">
          <FadeIn delay={0.1} direction="up">
            <h3 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Our SEO Process
            </h3>
          </FadeIn>
          <FadeIn delay={0.2} direction="up">
            <p className="text-lg text-white/60 max-w-2xl mx-auto">
              A proven methodology that delivers consistent results through strategic planning and expert execution.
            </p>
          </FadeIn>
        </div>

        <StaggerContainer staggerDelay={0.2}>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {seoProcess.map((process, index) => (
              <StaggerItem key={index}>
                <div className="group relative">
                  <div className="p-8 bg-gradient-to-br from-white/5 to-white/[0.02] border border-white/10 rounded-2xl backdrop-blur-sm hover:border-[#194EFF]/30 transition-all duration-300 text-center">
                    <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 w-8 h-8 bg-gradient-to-r from-[#194EFF] to-[#4169E1] rounded-full flex items-center justify-center text-white font-bold text-sm">
                      {process.step}
                    </div>
                    
                    <div className="text-3xl mb-4 mt-4">{process.icon}</div>
                    <h4 className="text-lg font-semibold text-white mb-3 group-hover:text-[#194EFF] transition-colors duration-300">
                      {process.title}
                    </h4>
                    <p className="text-white/60 text-sm leading-relaxed">
                      {process.description}
                    </p>
                  </div>
                  
                  {/* Connecting Line */}
                  {index < seoProcess.length - 1 && (
                    <div className="hidden lg:block absolute top-1/2 -right-4 w-8 h-0.5 bg-gradient-to-r from-[#194EFF]/50 to-transparent"></div>
                  )}
                </div>
              </StaggerItem>
            ))}
          </div>
        </StaggerContainer>

      </div>
    </section>
  );
}; 