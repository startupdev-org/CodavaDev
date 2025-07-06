import React, { useState } from "react";
import { Button } from "../../../../components/ui/button";
import { Badge } from "../../../../components/ui/badge";
import { 
  FadeIn, 
  StaggerContainer, 
  StaggerItem,
  FloatingElement
} from "../../../../components/ui/animated-elements";

export const PortfolioGridSection: React.FC = () => {
  const [activeFilters, setActiveFilters] = useState<string[]>(["All"]);

  const filters = ["All", "Web Development", "FullStack Development", "Backend Development", "UI/UX Design", "Digital Marketing", "Mobile Apps", "E-commerce"];

  const projects = [
    {
      id: 1,
      title: "TechFlow Dashboard",
      category: "Web Development",
      description: "A comprehensive analytics dashboard for tech companies with real-time data visualization and reporting capabilities.",
      image: "https://images.pexels.com/photos/1181467/pexels-photo-1181467.jpeg",
      technologies: ["React", "Node.js", "MongoDB", "Chart.js"],
      results: "300% increase in user engagement"
    },
    {
      id: 2,
      title: "EcoShop Mobile App",
      category: "Mobile Apps",
      description: "Sustainable shopping app that helps users find eco-friendly products and track their environmental impact.",
      image: "https://images.pexels.com/photos/1181671/pexels-photo-1181671.jpeg",
      technologies: ["React Native", "Firebase", "Stripe", "Maps API"],
      results: "50K+ downloads in first month"
    },
    {
      id: 3,
      title: "Creative Agency Website",
      category: "UI/UX Design",
      description: "Modern, responsive website for a creative agency with stunning animations and interactive elements.",
      image: "https://images.pexels.com/photos/1181676/pexels-photo-1181676.jpeg",
      technologies: ["Next.js", "Framer Motion", "Tailwind CSS", "GSAP"],
      results: "200% increase in lead generation"
    },
    {
      id: 4,
      title: "Global E-commerce Platform",
      category: "E-commerce",
      description: "Multi-language e-commerce platform with advanced inventory management and payment processing.",
      image: "https://images.pexels.com/photos/1181677/pexels-photo-1181677.jpeg",
      technologies: ["Vue.js", "Laravel", "PostgreSQL", "Redis"],
      results: "$2M+ in first year sales"
    },
    {
      id: 5,
      title: "Digital Marketing Campaign",
      category: "Digital Marketing",
      description: "Comprehensive digital marketing campaign for a SaaS startup including SEO, PPC, and social media.",
      image: "https://images.pexels.com/photos/1181678/pexels-photo-1181678.jpeg",
      technologies: ["Google Ads", "Facebook Ads", "SEO", "Analytics"],
      results: "400% ROI in 6 months"
    },
    {
      id: 6,
      title: "Healthcare Management System",
      category: "FullS  tack Development",
      description: "Secure healthcare management system with patient records, appointment scheduling, and billing integration.",
      image: "https://images.pexels.com/photos/1181679/pexels-photo-1181679.jpeg",
      technologies: ["Angular", "ASP.NET", "SQL Server", "HIPAA"],
      results: "Streamlined 80% of admin tasks"
    }
  ];

  const handleFilterToggle = (filter: string) => {
    if (filter === "All") {
      setActiveFilters(["All"]);
      return;
    }

    setActiveFilters(prev => {
      const newFilters = prev.filter(f => f !== "All");
      
      if (prev.includes(filter)) {
        // Remove filter
        const updatedFilters = newFilters.filter(f => f !== filter);
        return updatedFilters.length === 0 ? ["All"] : updatedFilters;
      } else {
        // Add filter
        return [...newFilters, filter];
      }
    });
  };

  const filteredProjects = activeFilters.includes("All") 
    ? projects 
    : projects.filter(project => activeFilters.includes(project.category));

  return (
    <section className="relative py-24">
      <div className="max-w-7xl mx-auto px-8 relative z-10">
        {/* Header */}
        <div className="text-center mb-20">
          <FadeIn delay={0.1} direction="up">
            <div className="inline-flex items-center gap-2 px-5 py-2.5 bg-white/8 border border-[#194EFF]/25 rounded-full mb-8 backdrop-blur-lg shadow-lg shadow-[#194EFF]/10">
              <div className="w-2.5 h-2.5 bg-[#194EFF] rounded-full animate-pulse shadow-sm shadow-[#194EFF]/50"></div>
              <span className="text-[#194EFF] text-sm font-semibold tracking-wide">PORTFOLIO</span>
            </div>
          </FadeIn>

          <FadeIn delay={0.2} direction="up">
            <h2 className="text-5xl md:text-6xl font-bold text-white mb-6 leading-tight">
              Our Featured <span className="bg-gradient-to-r from-[#194EFF] via-[#194EFF]/90 to-[#194EFF]/70 bg-clip-text text-transparent">Projects</span>
            </h2>
          </FadeIn>
          
          <FadeIn delay={0.3} direction="up">
            <p className="text-xl text-white/70 max-w-4xl mx-auto leading-relaxed font-light mb-12">
              Discover our latest work and see how we've helped businesses achieve their digital goals through innovative solutions and cutting-edge technology.
            </p>
          </FadeIn>

          {/* Filter Buttons */}
          <FadeIn delay={0.4} direction="up">
            <div className="flex flex-wrap justify-center gap-3 mb-16">
              {filters.filter(filter => filter !== "All").map((filter, index) => (
                <Button
                  key={index}
                  onClick={() => handleFilterToggle(filter)}
                  className={`px-6 py-3 rounded-2xl font-semibold transition-all duration-300 ${
                    activeFilters.includes(filter)
                      ? 'bg-[#194EFF] text-white shadow-sm shadow-[#194EFF]/10'
                      : 'bg-white/8 text-white/70 border border-white/20 hover:bg-white/15 hover:border-[#194EFF]/40'
                  }`}
                >
                  {filter}
                </Button>
              ))}
            </div>
          </FadeIn>
        </div>

        {/* Projects Grid */}
        <StaggerContainer staggerDelay={0.1}>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((project, index) => (
              <StaggerItem key={project.id}>
                <FloatingElement intensity={2} duration={4}>
                  <div className="bg-white/[0.03] border border-white/10 rounded-3xl overflow-hidden backdrop-blur-xl shadow-lg shadow-black/20 hover:shadow-[#194EFF]/10 transition-all duration-500 group hover:scale-105 transform">
                    {/* Project Image */}
                    <div className="relative h-64 overflow-hidden">
                      <div 
                        className="w-full h-full bg-cover bg-center transition-transform duration-500 group-hover:scale-110"
                        style={{ backgroundImage: `url(${project.image})` }}
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                      
                      {/* Overlay Content */}
                      <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        <Button className="px-6 py-3 bg-[#194EFF] text-white font-semibold rounded-xl hover:bg-[#194EFF]/80 transition-all duration-300">
                          View Details
                        </Button>
                      </div>
                    </div>

                    {/* Project Content */}
                    <div className="p-6">
                      <div className="flex items-center justify-between mb-3">
                        <Badge className="bg-[#194EFF]/15 text-[#194EFF] border-[#194EFF]/20 hover:bg-[#194EFF]/25">
                          {project.category}
                        </Badge>
                      </div>
                      
                      <h3 className="text-xl font-bold text-white mb-3 group-hover:text-[#194EFF] transition-colors duration-300">
                        {project.title}
                      </h3>
                      
                      <p className="text-white/60 text-sm mb-4 leading-relaxed">
                        {project.description}
                      </p>

                      {/* Technologies */}
                      <div className="mb-4">
                        <div className="flex flex-wrap gap-2">
                          {project.technologies.slice(0, 3).map((tech, techIndex) => (
                            <span key={techIndex} className="text-xs bg-white/10 text-white/70 px-2 py-1 rounded-lg">
                              {tech}
                            </span>
                          ))}
                          {project.technologies.length > 3 && (
                            <span className="text-xs bg-white/10 text-white/70 px-2 py-1 rounded-lg">
                              +{project.technologies.length - 3} more
                            </span>
                          )}
                        </div>
                      </div>

                      {/* Results */}
                      <div className="pt-4 border-t border-white/10">
                        <p className="text-[#194EFF] text-sm font-semibold">
                          {project.results}
                        </p>
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