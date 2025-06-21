import React from "react";
import { Badge } from "../../../../components/ui/badge";
import { Button } from "../../../../components/ui/button";
import { Card, CardContent } from "../../../../components/ui/card";
import {
  Pagination,
  PaginationContent,
  PaginationItem,
} from "../../../../components/ui/pagination";
import { 
  FadeIn, 
  StaggerContainer, 
  StaggerItem, 
  GlowButton,
  FloatingElement,
  ParallaxElement,
  MatrixText,
  TypewriterText,
  CircuitAnimation,
  DataStream
} from "../../../../components/ui/animated-elements";

export const FeaturedPropertiesSection = (): JSX.Element => {
  // Service data for mapping
  const services = [
    {
      id: 1,
      icon: "☁️",
      title: "Cloud Infrastructure",
      description: "Scalable cloud solutions that grow with your business. From migration to optimization, we ensure seamless cloud adoption with 99.9% uptime guarantee.",
      features: ["24/7 Monitoring", "Auto-scaling", "Disaster Recovery"],
      duration: "2-4",
      complexity: "Enterprise",
      type: "Cloud Services",
      price: "$25,000",
      gradient: "from-blue-600/20 to-cyan-600/20",
      hoverGradient: "group-hover:from-blue-500/30 group-hover:to-cyan-500/30"
    },
    {
      id: 2,
      icon: "🔒",
      title: "Cybersecurity Solutions",
      description: "Advanced security measures to protect your digital assets. Comprehensive threat detection, prevention, and incident response capabilities.",
      features: ["Threat Detection", "Zero Trust", "Compliance"],
      duration: "1-2",
      complexity: "Advanced",
      type: "Security",
      price: "$15,000",
      gradient: "from-red-600/20 to-orange-600/20",
      hoverGradient: "group-hover:from-red-500/30 group-hover:to-orange-500/30"
    },
    {
      id: 3,
      icon: "🤖",
      title: "AI & Machine Learning",
      description: "Intelligent automation and predictive analytics powered by cutting-edge AI. Transform your data into actionable business insights.",
      features: ["Predictive Analytics", "Process Automation", "Custom Models"],
      duration: "3-6",
      complexity: "Enterprise",
      type: "AI/ML",
      price: "$45,000",
      gradient: "from-purple-600/20 to-pink-600/20",
      hoverGradient: "group-hover:from-purple-500/30 group-hover:to-pink-500/30"
    },
    {
      id: 4,
      icon: "📊",
      title: "Data Analytics Platform",
      description: "Turn your data into competitive advantage with real-time analytics, business intelligence, and comprehensive reporting dashboards.",
      features: ["Real-time Analytics", "Custom Dashboards", "Data Visualization"],
      duration: "2-3",
      complexity: "Professional",
      type: "Analytics",
      price: "$20,000",
      gradient: "from-green-600/20 to-teal-600/20",
      hoverGradient: "group-hover:from-green-500/30 group-hover:to-teal-500/30"
    },
    {
      id: 5,
      icon: "⚡",
      title: "Digital Transformation",
      description: "Complete digital overhaul to modernize your business processes. From legacy system migration to workflow optimization.",
      features: ["Process Optimization", "System Integration", "Change Management"],
      duration: "4-8",
      complexity: "Enterprise",
      type: "Transformation",
      price: "$60,000",
      gradient: "from-yellow-600/20 to-orange-600/20",
      hoverGradient: "group-hover:from-yellow-500/30 group-hover:to-orange-500/30"
    },
    {
      id: 6,
      icon: "🌐",
      title: "IoT Solutions",
      description: "Connect and optimize your devices with intelligent IoT ecosystems. Real-time monitoring, predictive maintenance, and smart automation.",
      features: ["Device Management", "Edge Computing", "Predictive Maintenance"],
      duration: "3-5",
      complexity: "Advanced",
      type: "IoT",
      price: "$35,000",
      gradient: "from-indigo-600/20 to-purple-600/20",
      hoverGradient: "group-hover:from-indigo-500/30 group-hover:to-purple-500/30"
    },
  ];

  return (
    <section className="flex flex-col w-full items-center gap-20 relative overflow-hidden py-20">
      {/* Background Effects */}
      <div className="absolute inset-0 opacity-30">
        <CircuitAnimation />
      </div>
      <div className="absolute inset-0 opacity-20">
        <DataStream />
      </div>

      {/* Section Header */}
      <div className="flex flex-col items-center gap-8 max-w-4xl text-center relative z-10">
        <FadeIn delay={0.2} direction="up">
          <div className="inline-flex items-center gap-3 px-6 py-3 bg-gradient-to-r from-purple-600/20 to-purple-800/20 rounded-full border border-purple-60/30 backdrop-blur-sm">
            <div className="w-2 h-2 bg-purple-400 rounded-full animate-pulse" />
            <span className="text-purple-200 text-sm font-medium">💼 Our IT Solutions</span>
          </div>
        </FadeIn>

        <FadeIn delay={0.3} direction="up">
          <h2 className="[font-family:'Urbanist',Helvetica] font-bold text-transparent bg-gradient-to-r from-purple-400 via-white to-purple-400 bg-clip-text text-6xl tracking-[0] leading-[72px] animate-gradient-shift bg-[length:200%_auto]">
            <TypewriterText text="Featured IT Solutions" speed={0.05} />
          </h2>
        </FadeIn>
        
        <FadeIn delay={0.5} direction="up">
          <p className="max-w-3xl [font-family:'Urbanist',Helvetica] font-medium text-grey-40 text-xl tracking-[0] leading-[30px]">
            Transform your business with our comprehensive suite of cutting-edge technology solutions. From cloud infrastructure to AI-powered analytics, we deliver innovation that drives growth.
          </p>
        </FadeIn>

        <FadeIn delay={0.7} direction="up">
          <GlowButton className="px-8 py-4 h-auto bg-gradient-to-r from-purple-600 to-purple-700 hover:from-purple-500 hover:to-purple-600 rounded-xl font-medium text-white text-lg [font-family:'Urbanist',Helvetica] shadow-lg shadow-purple-600/25 transition-all duration-300 transform hover:scale-105">
            Explore All Solutions
          </GlowButton>
        </FadeIn>
      </div>

      {/* Services Grid */}
      <div className="w-full max-w-[1800px] px-8 relative z-10">
        <StaggerContainer staggerDelay={0.15}>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 w-full">
            {services.map((service, index) => (
              <StaggerItem key={service.id}>
                <Card className={`group relative overflow-hidden bg-gradient-to-br from-grey-08 to-grey-10 rounded-2xl border border-purple-60/30 hover:border-purple-60/60 transition-all duration-500 shadow-lg shadow-purple-600/10 hover:shadow-purple-600/25 hover:scale-105 backdrop-blur-sm ${service.gradient} ${service.hoverGradient}`}>
                  {/* Card Header with Icon */}
                  <div className="relative p-8 pb-6">
                    <FloatingElement intensity={5} duration={3 + index * 0.3}>
                      <div className="flex items-center justify-between mb-6">
                        <div className="text-5xl mb-4 group-hover:scale-110 transition-transform duration-300">
                          {service.icon}
                        </div>
                        <div className="flex items-center gap-2 px-3 py-1 bg-purple-600/20 rounded-full border border-purple-60/30">
                          <div className="w-1.5 h-1.5 bg-purple-400 rounded-full animate-pulse" />
                          <span className="text-purple-200 text-xs font-medium">{service.type}</span>
                        </div>
                      </div>
                    </FloatingElement>

                    <h3 className="[font-family:'Urbanist',Helvetica] font-bold text-transparent bg-gradient-to-r from-white to-purple-200 bg-clip-text group-hover:from-purple-100 group-hover:to-white text-2xl leading-8 mb-4 transition-all duration-300">
                      <MatrixText text={service.title} />
                  </h3>

                    <p className="text-grey-60 group-hover:text-grey-40 [font-family:'Urbanist',Helvetica] text-base leading-6 mb-6 transition-colors duration-300">
                      {service.description}
                    </p>

                    {/* Features List */}
                    <div className="space-y-2 mb-6">
                      {service.features.map((feature, featureIndex) => (
                        <div key={featureIndex} className="flex items-center gap-3">
                          <div className="w-1.5 h-1.5 bg-purple-400 rounded-full animate-pulse" />
                          <span className="text-purple-200 text-sm font-medium">{feature}</span>
                </div>
                      ))}
                    </div>
                  </div>

                  {/* Card Footer */}
                  <CardContent className="p-8 pt-0">
                    <div className="flex flex-wrap items-center gap-2 mb-6">
                      <Badge className="flex items-center gap-2 px-3 py-1 bg-grey-10/50 rounded-full border border-purple-60/30 text-purple-200 text-sm">
                        ⏱️ {service.duration} Months
                  </Badge>
                      <Badge className="flex items-center gap-2 px-3 py-1 bg-grey-10/50 rounded-full border border-purple-60/30 text-purple-200 text-sm">
                        ⭐ {service.complexity}
                  </Badge>
                </div>

                    <div className="flex items-center justify-between">
                      <div className="flex flex-col">
                        <span className="text-grey-60 text-sm font-medium mb-1">Starting From</span>
                        <span className="[font-family:'Urbanist',Helvetica] font-bold text-transparent bg-gradient-to-r from-purple-400 to-white bg-clip-text text-xl">
                          <MatrixText text={service.price} />
                    </span>
                  </div>

                      <GlowButton className="px-6 py-3 bg-gradient-to-r from-purple-600 to-purple-700 hover:from-purple-500 hover:to-purple-600 rounded-xl font-medium text-white text-sm shadow-lg shadow-purple-600/25 transition-all duration-300 transform hover:scale-105">
                        Learn More
                      </GlowButton>
                </div>
              </CardContent>

                  {/* Hover Effects */}
                  <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none">
                    <div className="absolute inset-0 bg-gradient-to-t from-purple-900/20 via-transparent to-purple-600/10" />
                    <div className="absolute inset-0 bg-digital-grid bg-[size:30px_30px] opacity-20" />
                  </div>
            </Card>
              </StaggerItem>
          ))}
        </div>
        </StaggerContainer>
      </div>

      {/* Call to Action */}
      <FadeIn delay={1.2} direction="up">
        <div className="flex flex-col items-center gap-6 text-center max-w-2xl relative z-10">
          <h3 className="[font-family:'Urbanist',Helvetica] font-semibold text-transparent bg-gradient-to-r from-purple-400 to-white bg-clip-text text-2xl">
            Need a Custom Solution?
          </h3>
          <p className="text-grey-60 [font-family:'Urbanist',Helvetica] text-lg leading-6">
            Our experts are ready to design a tailored IT solution that perfectly fits your business needs and goals.
          </p>
          <GlowButton className="px-8 py-4 bg-transparent border border-purple-60/50 hover:bg-purple-60/10 rounded-xl font-medium text-purple-200 hover:text-white text-lg transition-all duration-300 backdrop-blur-sm">
            Schedule Consultation
          </GlowButton>
        </div>
      </FadeIn>
    </section>
  );
};