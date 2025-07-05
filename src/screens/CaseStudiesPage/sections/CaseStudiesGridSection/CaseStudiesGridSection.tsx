import React from "react";
import { Button } from "../../../../components/ui/button";
import { Badge } from "../../../../components/ui/badge";
import { 
  FadeIn, 
  StaggerContainer, 
  StaggerItem,
  FloatingElement
} from "../../../../components/ui/animated-elements";

export const CaseStudiesGridSection: React.FC = () => {
  const caseStudies = [
    {
      id: 1,
      title: "TechFlow Analytics Platform",
      industry: "SaaS",
      challenge: "Complex data visualization and real-time reporting",
      solution: "Built a comprehensive analytics dashboard with AI-powered insights",
      results: "300% increase in user engagement, 50% reduction in decision time",
      image: "https://images.pexels.com/photos/1181467/pexels-photo-1181467.jpeg"
    },
    {
      id: 2,
      title: "EcoShop Mobile Revolution",
      industry: "E-commerce",
      challenge: "Creating a sustainable shopping experience",
      solution: "Developed an eco-friendly mobile app with carbon footprint tracking",
      results: "50K+ downloads, 200% increase in sustainable product sales",
      image: "https://images.pexels.com/photos/1181671/pexels-photo-1181671.jpeg"
    },
    {
      id: 3,
      title: "Healthcare Management System",
      industry: "Healthcare",
      challenge: "Streamlining patient care and administrative tasks",
      solution: "HIPAA-compliant system with integrated patient management",
      results: "80% reduction in admin time, 95% patient satisfaction",
      image: "https://images.pexels.com/photos/1181679/pexels-photo-1181679.jpeg"
    }
  ];

  return (
    <section className="relative py-24">
      <div className="max-w-7xl mx-auto px-8 relative z-10">
        <div className="text-center mb-20">
          <FadeIn delay={0.1} direction="up">
            <h2 className="text-5xl md:text-6xl font-bold text-white mb-6 leading-tight">
              Featured
              <span className="block bg-gradient-to-r from-[#194EFF] via-[#194EFF]/90 to-[#194EFF]/70 bg-clip-text text-transparent">
                Case Studies
              </span>
            </h2>
          </FadeIn>
          
          <FadeIn delay={0.2} direction="up">
            <p className="text-xl text-white/70 max-w-4xl mx-auto leading-relaxed font-light">
              Explore detailed case studies showcasing our approach to solving complex business challenges and delivering measurable results.
            </p>
          </FadeIn>
        </div>

        <StaggerContainer staggerDelay={0.1}>
          <div className="space-y-12">
            {caseStudies.map((study, index) => (
              <StaggerItem key={study.id}>
                <FloatingElement intensity={2} duration={4}>
                  <div className="bg-white/[0.03] border border-white/10 rounded-3xl overflow-hidden backdrop-blur-xl shadow-lg shadow-black/20 hover:shadow-[#194EFF]/10 transition-all duration-500 group">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-0">
                      {/* Image */}
                      <div className="relative h-80 lg:h-full overflow-hidden">
                        <div 
                          className="w-full h-full bg-cover bg-center transition-transform duration-500 group-hover:scale-110"
                          style={{ backgroundImage: `url(${study.image})` }}
                        />
                      </div>

                      {/* Content */}
                      <div className="p-8 lg:p-12 flex flex-col justify-center">
                        <div className="mb-4">
                          <Badge className="bg-[#194EFF]/15 text-[#194EFF] border-[#194EFF]/20 hover:bg-[#194EFF]/25">
                            {study.industry}
                          </Badge>
                        </div>
                        
                        <h3 className="text-3xl font-bold text-white mb-6 group-hover:text-[#194EFF] transition-colors duration-300">
                          {study.title}
                        </h3>
                        
                        <div className="space-y-6">
                          <div>
                            <h4 className="text-white font-semibold mb-2">Challenge</h4>
                            <p className="text-white/60 text-sm">{study.challenge}</p>
                          </div>
                          
                          <div>
                            <h4 className="text-white font-semibold mb-2">Solution</h4>
                            <p className="text-white/60 text-sm">{study.solution}</p>
                          </div>
                          
                          <div>
                            <h4 className="text-white font-semibold mb-2">Results</h4>
                            <p className="text-[#194EFF] text-sm font-semibold">{study.results}</p>
                          </div>
                        </div>

                        <Button className="mt-8 px-6 py-3 bg-[#194EFF] text-white font-semibold rounded-xl hover:bg-[#194EFF]/80 transition-all duration-300 w-fit">
                          Read Full Case Study
                        </Button>
                      </div>
                    </div>
                  </div>
                </FloatingElement>
              </StaggerItem>
            ))}
          </div>
        </StaggerContainer>
      </div>
    </section>
  );
}; 