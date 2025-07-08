import React, { useState } from "react";
import { Button } from "../../../../components/ui/button";
import { Badge } from "../../../../components/ui/badge";
import { 
  FadeIn, 
  StaggerContainer, 
  StaggerItem,
  FloatingElement
} from "../../../../components/ui/animated-elements";

interface DesignProcess {
  phase: string;
  details: string;
}

interface Project {
  title: string;
  description: string;
  images: string[];
  challenge?: string;
  solution?: string;
  impact?: string;
  technologies: string[];
  features: string[];
  designProcess?: DesignProcess[];
  designDeliverables?: string[];
  category: string;
  achievements: string[];
}

export const PortfolioGridSection: React.FC = () => {
  const [activeFilters, setActiveFilters] = useState<string[]>(["All"]);
  const [selectedProject, setSelectedProject] = useState<any>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const filters = ["All", "Web Development", "FullStack Development", "Backend Development", "UI/UX Design", "Digital Marketing", "Mobile Apps", "E-commerce"];

  const projects = [
    {
      title: "Epic Trans Logistics",
      description: "A modern logistics and transportation company website featuring real-time tracking, booking management, and comprehensive service information. The design emphasizes trust, reliability, and ease of access to key transportation services.",
      images: [
        "/portfolio/moldcargo/img1.webp",
        "/portfolio/moldcargo/img2.webp",
        "/portfolio/moldcargo/img3.webp",
        "/portfolio/moldcargo/img4.webp"
      ],
      challenge: "Design a professional and trustworthy digital presence for a logistics company that handles international cargo transportation, making complex services accessible and easy to understand for clients.",
      solution: "Created a modern, user-friendly website with clear service presentation, real-time tracking integration, and multilingual support. The design focuses on building trust through transparency and easy access to key information.",
      impact: "Achieved significant improvements in online presence and client acquisition, with enhanced user engagement and streamlined service booking process.",
      technologies: [
        "Figma",
        "Adobe XD",
        "WordPress",
        "Google Maps API",
        "GPS Tracking Integration",
        "Multi-language System"
      ],
      features: [
        "Real-time GPS Tracking",
        "Multi-language Support",
        "Service Booking System",
        "Interactive Route Maps",
        "Client Testimonials",
        "Performance Statistics",
        "Contact Management"
      ],
      designProcess: [
        {
          phase: "Research & Analysis",
          details: "Conducted competitor analysis and user research to identify key features and user expectations in logistics websites."
        },
        {
          phase: "UX Strategy",
          details: "Developed user flows and information architecture focusing on easy access to tracking and booking services."
        },
        {
          phase: "Visual Design",
          details: "Created a professional visual language with emphasis on trust and reliability through clean layouts and clear typography."
        },
        {
          phase: "Implementation",
          details: "Built responsive layouts and integrated real-time tracking features with focus on performance and usability."
        }
      ],
      designDeliverables: [
        "Responsive Layouts",
        "UI Components",
        "Interactive Maps",
        "Tracking Interface",
        "Booking Forms",
        "Statistics Dashboard"
      ],
      category: "UI/UX Design",
      achievements: [
        "100% Service Quality Rating",
        "50+ Cities Coverage",
        "150+ Satisfied Clients",
        "Optimized User Experience"
      ]
    },
    {
      title: "EuroTour Moldova",
      description: "A comprehensive UI/UX design project for a transportation service connecting Moldova with European destinations. The design system prioritizes user experience with intuitive navigation, clear call-to-actions, and seamless booking flow.",
          images: [
      "/portfolio/eurotour/img1.jpg",
      "/portfolio/eurotour/img2.jpg"
    ],
      challenge: "Create an intuitive and accessible booking platform that caters to diverse user groups across multiple languages while maintaining a consistent brand identity and optimal user experience across all devices.",
      solution: "Developed a comprehensive design system in Figma with modular components, consistent typography, and a color scheme that enhances readability. Implemented user-centric features based on extensive user research and testing.",
      impact: "The new design resulted in a 150% increase in online bookings, 80% improvement in user engagement, and significantly reduced booking abandonment rates. The intuitive interface received a 4.9/5 user satisfaction rating.",
      technologies: [
        "Figma",
        "Protopie",
        "Adobe Creative Suite",
        "Maze",
        "Principle",
        "UserTesting",
        "Hotjar"
      ],
      features: [
        "Custom Design System",
        "Interactive Prototypes",
        "User Flow Optimization",
        "Accessibility Guidelines",
        "Responsive Layouts",
        "Motion Design",
        "Visual Identity"
      ],
      designProcess: [
        {
          phase: "Research & Discovery",
          details: "Conducted user interviews, competitive analysis, and created user personas to understand target audience needs."
        },
        {
          phase: "Information Architecture",
          details: "Developed intuitive navigation structure and user flows optimized for the booking process."
        },
        {
          phase: "Wireframing",
          details: "Created low and high-fidelity wireframes with focus on user journey and conversion optimization."
        },
        {
          phase: "Design System",
          details: "Built a comprehensive design system with reusable components, typography, and color schemes."
        },
        {
          phase: "Prototyping",
          details: "Developed interactive prototypes for user testing and stakeholder feedback."
        },
        {
          phase: "Testing & Iteration",
          details: "Conducted usability testing and iterative improvements based on user feedback."
        }
      ],
      designDeliverables: [
        "Component Library",
        "Style Guide",
        "Responsive Layouts",
        "Interactive Prototypes",
        "User Flow Diagrams",
        "Animation Specifications",
        "Design Documentation"
      ],
      category: "UI/UX Design",
      achievements: [
        "Reduced booking process steps by 40%",
        "Increased mobile conversion rate by 95%",
        "Improved accessibility score to 98",
        "4.9/5 user satisfaction rating",
        "Featured on Behance and Dribbble"
      ]
    },
    {
      id: 1,
      title: "PURE.BMWM E-commerce",
      category: "E-commerce Development",
      description: "Modern e-commerce platform for automotive merchandise featuring real-time inventory, secure payments, and a seamless shopping experience.",
      mainImage: "/portfolio/bmwm/img1.png",
      images: [
        "/portfolio/bmwm/img1.png",
        "/portfolio/bmwm/img2.png",
        "/portfolio/bmwm/img3.png",
        "/portfolio/bmwm/img4.png",
        "/portfolio/bmwm/img5.png",
        "/portfolio/bmwm/img6.png",
        "/portfolio/bmwm/img7.png",
        "/portfolio/bmwm/img8.png"
      ],
      technologies: [
        "Next.js",
        "TypeScript",
        "Stripe API",
        "MongoDB",
        "Redis",
        "Tailwind CSS",
        "AWS S3",
        "SendGrid",
        "Vercel"
      ],
      results: "Successfully delivered a high-performance e-commerce platform with advanced inventory management and payment processing",
      challenge: "Building a scalable e-commerce platform with real-time inventory tracking, multiple payment options, and a responsive design that maintains high performance across all devices.",
      solution: "Our team implemented:\n\n• Next.js for server-side rendering and optimal SEO\n• Real-time inventory management with MongoDB and Redis\n• Stripe integration with multiple payment methods\n• Custom cart and checkout flow\n• Automated email notifications with SendGrid\n• AWS S3 for product image optimization and delivery\n• Responsive design with Tailwind CSS\n• Performance optimization with image lazy loading and caching",
      impact: "Technical achievements:\n\n• 98/100 Google PageSpeed score\n• 0.8s average page load time\n• 99.9% uptime on Vercel deployment\n• Optimized images reducing load time by 60%\n• Implemented efficient caching reducing server load\n• Mobile-first responsive design",
      features: [
        "Server-side Rendering",
        "Real-time Inventory",
        "Multi-payment Gateway",
        "Image Optimization",
        "Email Automation",
        "Performance Caching"
      ],
      integrations: [
        {
          name: "E-commerce Core",
          details: ["Cart management system", "Order processing pipeline", "Inventory tracking", "Product variants handling", "Dynamic pricing system"]
        },
        {
          name: "Payment Processing",
          details: ["Stripe integration", "PayPal integration", "Multiple currency support", "Secure payment handling", "Payment verification system"]
        },
        {
          name: "Content Management",
          details: ["Product catalog system", "Image optimization", "Content delivery network", "SEO optimization", "Dynamic content updates"]
        },
        {
          name: "User Experience",
          details: ["Responsive design system", "Performance optimization", "Search functionality", "Filter system", "Wishlist management"]
        }
      ],
      performance: [
        {
          metric: "Page Load Time",
          value: "0.8s average",
          improvement: "60% faster than industry standard"
        },
        {
          metric: "Google PageSpeed",
          value: "98/100",
          improvement: "Top 1% of e-commerce sites"
        },
        {
          metric: "Mobile Response",
          value: "0.9s",
          improvement: "50% faster than previous"
        },
        {
          metric: "Cart Conversion",
          value: "35%",
          improvement: "2x industry average"
        }
      ]
    },
    {
      id: 1,
      title: "RollWithdraw Platform",
      category: "FullStack Development",
      description: "A comprehensive trading platform featuring secure cryptocurrency payments, real-time WebSocket integration, and automated trading systems.",
      mainImage: "/portfolio/websites/rollwithdraw/img1.png",
      images: [
        "/portfolio/websites/rollwithdraw/img1.png",
        "/portfolio/websites/rollwithdraw/img2.png",
        "/portfolio/websites/rollwithdraw/img3.png",
        "/portfolio/websites/rollwithdraw/img4.png",
        "/portfolio/websites/rollwithdraw/img5.png"
      ],
      technologies: [
        "React",
        "Node.js",
        "WebSocket",
        "MongoDB",
        "Redis",
        "JWT Auth",
        "Stripe API",
        "Crypto Payment Gateway",
        "Discord API"
      ],
      results: "Successfully implemented high-performance trading system with real-time data synchronization and secure payment processing",
      challenge: "Developing a secure, high-performance trading platform that could handle thousands of concurrent users while maintaining real-time data synchronization and secure payment processing.",
      solution: "Our team implemented:\n\n• Secure user authentication system with JWT and 2FA\n• Cryptocurrency payment gateway integration (USDC, ETH, USDT)\n• Real-time WebSocket communication for live data updates\n• Redis caching layer for high-performance data access\n• Automated trading system with custom algorithms\n• Discord OAuth and webhook notifications system\n• Load-balanced server architecture for high availability",
      impact: "Technical achievements:\n\n• 50ms average response time for real-time operations\n• 99.9% system uptime\n• Successfully processed $1M+ in crypto transactions\n• Scaled to handle 10,000+ concurrent users\n• Reduced server costs by 40% through optimization\n• Achieved PCI DSS compliance for payment processing",
      features: [
        "JWT Authentication & 2FA",
        "Multi-Currency Crypto Payments",
        "WebSocket Real-time Updates",
        "Redis Performance Caching",
        "Automated Trading Engine",
        "Discord Integration"
      ],
      integrations: [
        {
          name: "User Management",
          details: ["JWT-based authentication", "Two-factor authentication", "Role-based access control", "Session management", "Password encryption"]
        },
        {
          name: "Payment Systems",
          details: ["USDC/ETH/USDT integration", "Stripe payment processing", "Transaction monitoring", "Automated refunds", "Payment verification system"]
        },
        {
          name: "Real-time Features",
          details: ["WebSocket connections", "Live data synchronization", "Real-time notifications", "Automated trade execution", "Market data updates"]
        },
        {
          name: "Security Measures",
          details: ["DDoS protection", "Rate limiting", "IP whitelisting", "SSL/TLS encryption", "Data encryption at rest"]
        }
      ],
      performance: [
        {
          metric: "Response Time",
          value: "50ms average",
          improvement: "75% faster than previous system"
        },
        {
          metric: "Concurrent Users",
          value: "10,000+",
          improvement: "10x increase in capacity"
        },
        {
          metric: "Transaction Success Rate",
          value: "99.99%",
          improvement: "Reduced failures by 95%"
        },
        {
          metric: "System Uptime",
          value: "99.9%",
          improvement: "Improved from 95%"
        }
      ]
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
        const updatedFilters = newFilters.filter(f => f !== filter);
        return updatedFilters.length === 0 ? ["All"] : updatedFilters;
      } else {
        return [...newFilters, filter];
      }
    });
  };

  const filteredProjects = activeFilters.includes("All") 
    ? projects 
    : projects.filter(project => activeFilters.includes(project.category));

  const openModal = (project: any) => {
    setSelectedProject(project);
    setIsModalOpen(true);
    document.body.style.overflow = 'hidden';
  };

  const closeModal = () => {
    setSelectedProject(null);
    setIsModalOpen(false);
    document.body.style.overflow = 'auto';
  };

  return (
    <>
      <section id="portfolio-grid" className="relative py-24">
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
                          style={{ backgroundImage: `url(${project.mainImage || project.images?.[0]})` }}
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                        
                        {/* Overlay Content */}
                        <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                          <Button 
                            onClick={() => openModal(project)}
                            className="px-6 py-3 bg-[#194EFF] text-white font-semibold rounded-xl hover:bg-[#194EFF]/80 transition-all duration-300"
                          >
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

      {/* Modal */}
      {isModalOpen && selectedProject && (
        <div className="fixed inset-0 z-50 flex items-start justify-center px-4 bg-black/80 backdrop-blur-sm pt-32">
          <div className="relative w-full max-w-4xl max-h-[calc(100vh-10rem)] overflow-y-auto bg-[#00041F] rounded-2xl border border-[#194EFF]/20 shadow-2xl">
            {/* Close button */}
            <button
              onClick={closeModal}
              className="sticky top-4 right-4 float-right p-2 text-white/60 hover:text-white transition-colors z-10"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>

            {/* Modal content */}
            <div className="p-8">
              {/* Image gallery */}
              <div className="grid grid-cols-2 md:grid-cols-3 gap-2 mb-8">
                {selectedProject.images.map((image: string, index: number) => {
                  // First image is always full width
                  const isFullWidth = index === 0;
                  
                  return (
                    <div
                      key={index}
                      className={`relative rounded-lg overflow-hidden ${
                        isFullWidth ? 'col-span-full' : 'col-span-1'
                      }`}
                    >
                      <img
                        src={image}
                        alt={`${selectedProject.title} - Image ${index + 1}`}
                        className={`w-full ${
                          isFullWidth
                            ? 'h-auto max-h-[70vh] object-contain'
                            : 'aspect-[3/4] object-cover'
                        }`}
                      />
                    </div>
                  );
                })}
              </div>

              {/* Project details */}
              <div className="space-y-8">
                <div>
                  <h3 className="text-2xl font-bold text-white mb-4">{selectedProject.title}</h3>
                  <p className="text-white/80">{selectedProject.description}</p>
                </div>

                {selectedProject.challenge && (
                  <div className="space-y-6">
                    <div>
                      <h4 className="text-lg font-semibold text-white mb-2">Challenge</h4>
                      <p className="text-white/80">{selectedProject.challenge}</p>
                    </div>
                    <div>
                      <h4 className="text-lg font-semibold text-white mb-2">Solution</h4>
                      <p className="text-white/80">{selectedProject.solution}</p>
                    </div>
                    <div>
                      <h4 className="text-lg font-semibold text-white mb-2">Impact</h4>
                      <p className="text-white/80">{selectedProject.impact}</p>
                    </div>
                  </div>
                )}

                {selectedProject.designProcess && (
                  <div>
                    <h4 className="text-lg font-semibold text-white mb-4">Design Process</h4>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      {selectedProject.designProcess.map((process: DesignProcess, index: number) => (
                        <div key={index} className="bg-white/5 rounded-lg p-4">
                          <h5 className="text-[#194EFF] font-semibold mb-2">{process.phase}</h5>
                          <p className="text-white/70 text-sm">{process.details}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  {selectedProject.features && (
                    <div>
                      <h4 className="text-lg font-semibold text-white mb-4">Core Features</h4>
                      <ul className="space-y-2">
                        {selectedProject.features.map((feature: string, index: number) => (
                          <li key={index} className="flex items-center gap-2 text-white/80">
                            <span className="text-[#194EFF] font-mono">{String(index + 1).padStart(2, '0')}</span>
                            {feature}
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}

                  {selectedProject.technologies && (
                    <div>
                      <h4 className="text-lg font-semibold text-white mb-4">Design Tools</h4>
                      <div className="flex flex-wrap gap-2">
                        {selectedProject.technologies.map((tech: string, index: number) => (
                          <span
                            key={index}
                            className="px-3 py-1 bg-white/5 rounded-full text-sm text-white/80"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  )}
                </div>

                {selectedProject.designDeliverables && (
                  <div>
                    <h4 className="text-lg font-semibold text-white mb-4">Design Deliverables</h4>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                      {selectedProject.designDeliverables.map((deliverable: string, index: number) => (
                        <div
                          key={index}
                          className="bg-white/5 rounded-lg p-3 text-center text-white/80 text-sm"
                        >
                          {deliverable}
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {selectedProject.achievements && (
                  <div>
                    <h4 className="text-lg font-semibold text-white mb-4">Key Achievements</h4>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                      {selectedProject.achievements.map((achievement: string, index: number) => (
                        <div
                          key={index}
                          className="flex items-center gap-2 bg-white/5 rounded-lg p-3"
                        >
                          <div className="w-2 h-2 rounded-full bg-[#194EFF]" />
                          <span className="text-white/80">{achievement}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}; 