import React, { useState, useEffect } from "react";
import { Button } from "../../../../components/ui/button";
import { Badge } from "../../../../components/ui/badge";
import {
  FadeIn,
  StaggerContainer,
  StaggerItem,
  FloatingElement,
  GlowButton
} from "../../../../components/ui/animated-elements";
import { useNavigate } from "react-router-dom";
import { useTranslation } from "../../../../contexts/LanguageContext";

interface DesignProcess {
  phase: string;
  details: string;
}

export const PortfolioGridSection: React.FC = () => {
  const { t } = useTranslation();
  const navigate = useNavigate();
  // Use constant keys internally, translate only for display
  const [activeFilters, setActiveFilters] = useState<string[]>(['ALL']);
  const [selectedProject, setSelectedProject] = useState<any>(null);
  const [viewMode, setViewMode] = useState<'grid' | 'detail'>('grid');

  // Auto-scroll to top when opening project details
  useEffect(() => {
    if (viewMode === 'detail') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  }, [viewMode]);

  // Filter keys (internal) and their translations (for display)
  const filterKeys = ['ALL', 'FULLSTACK', 'UIUX', 'MARKETING', 'ECOMMERCE'];
  const filterLabels: Record<string, string> = {
    'ALL': t('portfolio.grid.filters.all'),
    'FULLSTACK': t('portfolio.grid.filters.fullstack'),
    'UIUX': t('portfolio.grid.filters.uiux'),
    'MARKETING': t('portfolio.grid.filters.marketing'),
    'ECOMMERCE': t('portfolio.grid.filters.ecommerce')
  };

  // Map English category names to filter keys
  const categoryToFilterKey: Record<string, string> = {
    'FullStack Development': 'FULLSTACK',
    'UI/UX Design': 'UIUX',
    'Digital Marketing': 'MARKETING',
    'E-commerce Development': 'ECOMMERCE'
  };

  const projects = [
    {
      id: 1,
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
      ],
      results: "Significantly improved online presence, client acquisition, and user engagement for logistics services."
    },
    {
      id: 2,
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
      ],
      results: "150% increase in online bookings, 80% improvement in engagement, and 4.9/5 user satisfaction."
    },
    {
      id: 3,
      title: "PURE.BMWM E-Commerce",
      category: "E-commerce Development",
      description: "Modern e-commerce platform for automotive merchandise featuring real-time inventory, secure payments, and a seamless shopping experience.",
      mainImage: "/portfolio/bmwm/img1.jpg",
      images: [
        "/portfolio/bmwm/img1.jpg",
        "/portfolio/bmwm/img2.jpg",
        "/portfolio/bmwm/img3.jpg",
        "/portfolio/bmwm/img4.jpg",
        "/portfolio/bmwm/img5.jpg",
        "/portfolio/bmwm/img6.jpg",
        "/portfolio/bmwm/img7.jpg",
        "/portfolio/bmwm/img8.jpg"
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
      results: "Launched a high-performance e-commerce platform with advanced inventory and payment systems.",
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
      id: 4,
      title: "RollWithdraw Platform",
      category: "FullStack Development",
      description: "A comprehensive trading platform featuring secure cryptocurrency payments, real-time WebSocket integration, and automated trading systems.",
      mainImage: "/portfolio/websites/rollwithdraw/img1.jpg",
      images: [
        "/portfolio/websites/rollwithdraw/img1.jpg",
        "/portfolio/websites/rollwithdraw/img2.jpg",
        "/portfolio/websites/rollwithdraw/img3.jpg",
        "/portfolio/websites/rollwithdraw/img4.jpg",
        "/portfolio/websites/rollwithdraw/img5.jpg"
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
      results: "Delivered a secure, scalable trading platform with real-time crypto payments and automation.",
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
    },
    {
      id: 5,
      title: "Senda Courier",
      description: "A modern, user-friendly web design for SendACourier, focusing on intuitive UI/UX for seamless courier service booking and tracking.",
      images: [
        "/portfolio/sendacourier/img1.webp"
      ],
      challenge: "Design a simple and effective interface for users to quickly book and track courier services online.",
      solution: "Developed a clean, responsive UI with clear call-to-actions and a streamlined booking process, ensuring accessibility and ease of use.",
      impact: "Improved user engagement and reduced booking time, resulting in higher customer satisfaction and increased service adoption.",
      technologies: [
        "Figma",
        "Adobe XD"
      ],
      features: [
        "Responsive Web Design",
        "Intuitive Booking Flow",
        "Real-time Tracking UI"
      ],
      designProcess: [
        {
          phase: "Research & Planning",
          details: "Analyzed user needs and competitor platforms to define key features and user flows."
        },
        {
          phase: "Wireframing & Prototyping",
          details: "Created wireframes and interactive prototypes to validate the booking and tracking experience."
        },
        {
          phase: "Visual Design",
          details: "Designed a modern, brand-aligned interface with a focus on clarity and usability."
        }
      ],
      designDeliverables: [
        "UI Kit",
        "Responsive Layouts",
        "Booking Form Design"
      ],
      category: "UI/UX Design",
      achievements: [
        "Faster booking process",
        "Positive user feedback",
        "Increased online bookings"
      ],
      results: "Enabled fast, user-friendly courier bookings and improved customer satisfaction."
    }
  ];

  const handleFilterToggle = (filterKey: string) => {
    if (activeFilters.length === 0) {
      setActiveFilters(['ALL']);
      return;
    }

    setActiveFilters(prev => {
      const newFilters = prev.filter(f => f !== 'ALL');

      if (prev.includes(filterKey)) {
        const updatedFilters = newFilters.filter(f => f !== filterKey);
        return updatedFilters.length === 0 ? ['ALL'] : updatedFilters;
      } else {
        return [...newFilters, filterKey];
      }
    });
  };

  const filteredProjects = activeFilters.includes('ALL')
    ? projects
    : projects.filter(project => {
        const filterKey = categoryToFilterKey[project.category];
        return filterKey && activeFilters.includes(filterKey);
      });

  // Map project titles to translation keys
  const projectTitleToKey: Record<string, string> = {
    "Epic Trans Logistics": "epic_trans_logistics",
    "EuroTour Moldova": "eurotour_moldova",
    "PURE.BMWM E-Commerce": "pure_bmwm_ecommerce",
    "RollWithdraw Platform": "rollwithdraw_platform",
    "Senda Courier": "senda_courier"
  };

  // Helper function to get translated project data
  const getTranslatedProject = (project: any) => {
    const translationKey = projectTitleToKey[project.title];
    if (!translationKey) return project;
    
    const baseKey = `portfolio.grid.projects.${translationKey}`;
    
    // Try to get translations, fallback to original if not found
    const getTranslation = (key: string, fallback: any) => {
      try {
        const translated = t(key);
        return translated !== key ? translated : fallback;
      } catch {
        return fallback;
      }
    };

    return {
      ...project,
      description: getTranslation(`${baseKey}.description`, project.description),
      challenge: project.challenge ? getTranslation(`${baseKey}.challenge`, project.challenge) : project.challenge,
      solution: project.solution ? getTranslation(`${baseKey}.solution`, project.solution) : project.solution,
      impact: project.impact ? getTranslation(`${baseKey}.impact`, project.impact) : project.impact,
      results: project.results ? getTranslation(`${baseKey}.results`, project.results) : project.results,
      features: project.features?.map((feature: string, index: number) => 
        getTranslation(`${baseKey}.features.${index}`, feature)
      ) || project.features,
      designProcess: project.designProcess?.map((process: any, index: number) => ({
        phase: getTranslation(`${baseKey}.design_process.${index}.phase`, process.phase),
        details: getTranslation(`${baseKey}.design_process.${index}.details`, process.details)
      })) || project.designProcess,
      achievements: project.achievements?.map((achievement: string, index: number) => 
        getTranslation(`${baseKey}.achievements.${index}`, achievement)
      ) || project.achievements
    };
  };

  const openProjectDetail = (project: any) => {
    setSelectedProject(getTranslatedProject(project));
    setViewMode('detail');
  };

  const closeProjectDetail = () => {
    setSelectedProject(null);
    setViewMode('grid');
  };

  return (
    <>
      {/* Grid View */}
      {viewMode === 'grid' && (
        <section id="portfolio-grid" className="relative pt-40 md:pt-56 pb-24">
        <div className="max-w-7xl mx-auto px-8 relative z-10">
          {/* Header */}
          <div className="text-center mb-20">
            <FadeIn delay={0.1} direction="up">
              <div className="inline-flex items-center gap-2 px-5 py-2.5 bg-white/8 border border-[#194EFF]/25 rounded-full mb-8 backdrop-blur-lg shadow-lg shadow-[#194EFF]/10">
                <div className="w-2.5 h-2.5 bg-[#194EFF] rounded-full animate-pulse shadow-sm shadow-[#194EFF]/50"></div>
                <span className="text-[#194EFF] text-sm font-semibold tracking-wide">{t('portfolio.grid.badge')}</span>
              </div>
            </FadeIn>

            <FadeIn delay={0.2} direction="up">
              <h2 className="text-3xl md:text-6xl font-bold text-white mb-6 leading-tight">
                {t('portfolio.grid.title')} <span className="bg-gradient-to-r from-[#194EFF] via-[#194EFF]/90 to-[#194EFF]/70 bg-clip-text text-transparent">{t('portfolio.grid.title_highlight')}</span>
              </h2>
            </FadeIn>

            <FadeIn delay={0.3} direction="up">
              <p className="text-base md:text-xl text-white/70 max-w-4xl mx-auto leading-relaxed font-light mb-12">
                {t('portfolio.grid.description')}
              </p>
            </FadeIn>

            {/* Filter Buttons */}
            <FadeIn delay={0.4} direction="up">
              <div className="flex flex-wrap justify-center gap-3 mb-16">
                {filterKeys.filter(key => key !== 'ALL').map((filterKey) => (
                  <Button
                    key={filterKey}
                    onClick={() => handleFilterToggle(filterKey)}
                    className={`px-6 py-3 rounded-2xl font-semibold transition-all duration-300 ${activeFilters.includes(filterKey)
                      ? 'bg-[#194EFF] text-white shadow-sm shadow-[#194EFF]/10'
                      : 'bg-white/8 text-white/70 border border-white/20 hover:bg-white/15 hover:border-[#194EFF]/40'
                      }`}
                  >
                    {filterLabels[filterKey]}
                  </Button>
                ))}
              </div>
            </FadeIn>
          </div>

          {/* Projects Grid */}
          <StaggerContainer staggerDelay={0.1}>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredProjects.length === 0 ? (
                <div className="col-span-full flex flex-col items-center justify-center py-24">
                  <svg
                    className="w-16 h-16 mb-6 text-[#194EFF]/60"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth={1.5}
                    viewBox="0 0 48 48"
                  >
                    <circle cx="24" cy="24" r="20" stroke="currentColor" strokeWidth="3" fill="none" />
                    <path d="M16 24h16M24 16v16" stroke="currentColor" strokeWidth="3" strokeLinecap="round" />
                  </svg>
                  <h4 className="text-lg md:text-2xl font-semibold text-white mb-2">{t('portfolio.grid.empty_state.title')}</h4>
                  <p className="text-white/60 text-lg text-center max-w-md">
                    {t('portfolio.grid.empty_state.description')}
                  </p>
                  <FadeIn delay={0.2} direction="up">
                    <div className="flex flex-col sm:flex-row gap-4 pt-4">
                      <GlowButton
                        onClick={() => navigate('/contact')}
                        className="px-8 py-4 bg-gradient-to-r from-[#194EFF] to-[#194EFF]/90 text-white font-semibold text-lg rounded-2xl hover:from-[#194EFF]/90 hover:to-[#194EFF]/80 transition-all duration-300 shadow-xl shadow-[#194EFF]/25 hover:shadow-[#194EFF]/40 hover:scale-105 transform"
                      >
                        {t('portfolio.grid.empty_state.button')}
                      </GlowButton>
                    </div>
                  </FadeIn>
                </div>
              ) : (
                filteredProjects.map((project) => (
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
                              onClick={() => openProjectDetail(project)}
                              className="px-6 py-3 bg-[#194EFF] text-white font-semibold rounded-xl hover:bg-[#194EFF]/80 transition-all duration-300"
                            >
                              {t('portfolio.grid.view_details')}
                            </Button>
                          </div>
                        </div>

                        {/* Project Content */}
                        <div className="p-5">
                          <div className="flex items-center justify-between mb-3">
                            <Badge className="bg-[#194EFF]/15 text-[#194EFF] border-[#194EFF]/20 hover:bg-[#194EFF]/25">
                              {filterLabels[categoryToFilterKey[project.category]] || project.category}
                            </Badge>
                          </div>

                          <h3 className="text-lg md:text-xl font-bold text-white mb-2 group-hover:text-[#194EFF] transition-colors duration-300">
                            {project.title}
                          </h3>

                          <p className="text-white/60 text-sm mb-3 leading-relaxed">
                            {(() => {
                              const translatedProject = getTranslatedProject(project);
                              const desc = translatedProject.description || project.description;
                              return desc.length > 120 ? `${desc.substring(0, 120)}...` : desc;
                            })()}
                          </p>

                          {/* Technologies */}
                          <div className="mb-3">
                            <div className="flex flex-wrap gap-2">
                              {project.technologies.slice(0, 2).map((tech) => (
                                <span key={tech} className="text-xs bg-white/10 text-white/70 px-2 py-1 rounded-lg">
                                  {tech}
                                </span>
                              ))}
                              {project.technologies.length > 2 && (
                                <span className="text-xs bg-white/10 text-white/70 px-2 py-1 rounded-lg">
                                  +{project.technologies.length - 2}
                                </span>
                              )}
                            </div>
                          </div>

                        </div>
                      </div>
                    </FloatingElement>
                  </StaggerItem>
                ))
              )}
            </div>
          </StaggerContainer>
        </div>
      </section>
      )}

      {/* Project Detail View */}
      {viewMode === 'detail' && selectedProject && (
        <section id="project-detail" className="relative pt-32 pb-24">
          <div className="max-w-7xl mx-auto px-8 relative z-10">
            {/* Breadcrumb Navigation */}
            <div className="mb-8 lg:mt-10">
              <nav className="flex items-center space-x-2 text-sm text-white/60">
                <button
                  onClick={closeProjectDetail}
                  className="hover:text-[#194EFF] transition-colors duration-300 flex items-center gap-2"
                >
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                  </svg>
                  {t('portfolio.grid.detail.breadcrumb')}
                </button>
                <span className="text-white/40">/</span>
                <span className="text-[#194EFF] font-medium">{selectedProject.title}</span>
              </nav>
            </div>

            {/* Project Header */}
            <div className="mb-12">
              <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6 mb-8">
                <div>
                  <h1 className="text-4xl md:text-5xl font-bold text-white mb-4 leading-tight">
                    {selectedProject.title}
                  </h1>
                  <div className="flex items-center gap-4">
                    <Badge className="bg-[#194EFF]/15 text-[#194EFF] border-[#194EFF]/20 hover:bg-[#194EFF]/25">
                      {filterLabels[categoryToFilterKey[selectedProject.category]] || selectedProject.category}
                    </Badge>
                  </div>
                </div>
              </div>
              <p className="text-xl text-white/80 leading-relaxed max-w-4xl">
                {(() => {
                  const translatedProject = getTranslatedProject(selectedProject);
                  return translatedProject.description || selectedProject.description;
                })()}
              </p>
            </div>

            {/* Image Gallery */}
            <div className="mb-16">
              <h2 className="text-2xl font-bold text-white mb-8">{t('portfolio.grid.detail.gallery')}</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {selectedProject.images.map((image: string, index: number) => (
                  <div
                    key={image}
                    className="relative rounded-xl overflow-hidden group"
                  >
                    <img
                      src={image}
                      alt={`${selectedProject.title} - Image ${index + 1}`}
                      className="w-auto h-full object-cover transition-transform duration-300 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300" />
                  </div>
                ))}
              </div>
            </div>

            {/* Project Details */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              {/* Left Column */}
              <div className="space-y-8">
                {/* Challenge, Solution, Impact */}
                {(() => {
                  const translatedProject = getTranslatedProject(selectedProject);
                  return translatedProject.challenge && (
                <div className="space-y-8">
                  <div className="bg-white/[0.02] border border-white/10 rounded-2xl p-8">
                    <h3 className="text-xl font-bold text-white mb-4 flex items-center gap-3">
                      <div className="w-8 h-8 bg-[#194EFF]/20 rounded-lg flex items-center justify-center">
                        <svg className="w-4 h-4 text-[#194EFF]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                        </svg>
                      </div>
                          {t('portfolio.grid.detail.challenge')}
                    </h3>
                        <p className="text-white/80 leading-relaxed">{translatedProject.challenge}</p>
                  </div>

                  <div className="bg-white/[0.02] border border-white/10 rounded-2xl p-8">
                    <h3 className="text-xl font-bold text-white mb-4 flex items-center gap-3">
                      <div className="w-8 h-8 bg-[#194EFF]/20 rounded-lg flex items-center justify-center">
                        <svg className="w-4 h-4 text-[#194EFF]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                        </svg>
                      </div>
                          {t('portfolio.grid.detail.solution')}
                    </h3>
                        <p className="text-white/80 leading-relaxed">{translatedProject.solution}</p>
                  </div>

                  <div className="bg-white/[0.02] border border-white/10 rounded-2xl p-8">
                    <h3 className="text-xl font-bold text-white mb-4 flex items-center gap-3">
                      <div className="w-8 h-8 bg-[#194EFF]/20 rounded-lg flex items-center justify-center">
                        <svg className="w-4 h-4 text-[#194EFF]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                      </div>
                          {t('portfolio.grid.detail.impact')}
                    </h3>
                        <p className="text-white/80 leading-relaxed">{translatedProject.impact}</p>
                  </div>
                  </div>
                  );
                })()}

                {/* Design Process & Features */}
                <div className="space-y-8">
                  {(() => {
                    const translatedProject = getTranslatedProject(selectedProject);
                    return (
                      <>
                        {translatedProject.designProcess && (
                    <div className="bg-white/[0.02] border border-white/10 rounded-2xl p-8">
                      <h3 className="text-xl font-bold text-white mb-6 flex items-center gap-3">
                        <div className="w-8 h-8 bg-[#194EFF]/20 rounded-lg flex items-center justify-center">
                          <svg className="w-4 h-4 text-[#194EFF]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
                          </svg>
                        </div>
                              {t('portfolio.grid.detail.design_process')}
                      </h3>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                              {translatedProject.designProcess.map((process: DesignProcess, index: number) => (
                          <div key={process.phase} className="bg-white/[0.05] border border-white/5 rounded-xl p-6">
                            <div className="flex items-center gap-3 mb-3">
                              <div className="w-6 h-6 bg-[#194EFF] rounded-full flex items-center justify-center text-xs font-bold text-white">
                                {index + 1}
                              </div>
                              <h4 className="text-[#194EFF] font-semibold">{process.phase}</h4>
                            </div>
                            <p className="text-white/70 text-sm leading-relaxed">{process.details}</p>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}

                        {translatedProject.features && (
                    <div className="bg-white/[0.02] border border-white/10 rounded-2xl p-8">
                      <h3 className="text-xl font-bold text-white mb-6 flex items-center gap-3">
                        <div className="w-8 h-8 bg-[#194EFF]/20 rounded-lg flex items-center justify-center">
                          <svg className="w-4 h-4 text-[#194EFF]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                          </svg>
                        </div>
                              {t('portfolio.grid.detail.core_features')}
                      </h3>
                      <div className="grid grid-cols-1 gap-3">
                              {translatedProject.features.map((feature: string, index: number) => (
                          <div key={feature} className="flex items-center gap-3 bg-white/[0.05] border border-white/5 rounded-lg p-4">
                            <span className="text-[#194EFF] font-mono text-sm font-bold bg-[#194EFF]/10 px-2 py-1 rounded">
                              {String(index + 1).padStart(2, '0')}
                            </span>
                            <span className="text-white/80">{feature}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}
                      </>
                    );
                  })()}
                </div>
              </div>

              {/* Right Column */}
              <div className="space-y-8">
                {/* Technologies & Results */}
                  {selectedProject.technologies && (
                  <div className="bg-white/[0.02] border border-white/10 rounded-2xl p-8">
                    <h3 className="text-xl font-bold text-white mb-6 flex items-center gap-3">
                      <div className="w-8 h-8 bg-[#194EFF]/20 rounded-lg flex items-center justify-center">
                        <svg className="w-4 h-4 text-[#194EFF]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                        </svg>
                      </div>
                      {t('portfolio.grid.detail.technologies_tools')}
                    </h3>
                    <div className="flex flex-wrap gap-3">
                      {selectedProject.technologies.map((tech: string) => (
                        <span
                          key={tech}
                          className="px-4 py-2 bg-[#194EFF]/10 border border-[#194EFF]/20 rounded-full text-sm text-[#194EFF] font-medium hover:bg-[#194EFF]/20 transition-colors duration-300"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                )}

                {/* Results */}
                {(() => {
                  const translatedProject = getTranslatedProject(selectedProject);
                  return (
                    <>
                <div className="bg-white/[0.02] border border-white/10 rounded-2xl p-8">
                  <h3 className="text-xl font-bold text-white mb-4 flex items-center gap-3">
                    <div className="w-8 h-8 bg-[#194EFF]/20 rounded-lg flex items-center justify-center">
                      <svg className="w-4 h-4 text-[#194EFF]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 8v8m-4-5v5m-4-2v2m-2 4h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                      </svg>
                    </div>
                          {t('portfolio.grid.detail.results_impact')}
                  </h3>
                  <p className="text-white/80 leading-relaxed text-lg">
                          {translatedProject.results || selectedProject.results}
                  </p>
                </div>

                      {translatedProject.achievements && (
                  <div className="bg-white/[0.02] border border-white/10 rounded-2xl p-8">
                    <h3 className="text-xl font-bold text-white mb-6 flex items-center gap-3">
                      <div className="w-8 h-8 bg-[#194EFF]/20 rounded-lg flex items-center justify-center">
                        <svg className="w-4 h-4 text-[#194EFF]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
                        </svg>
                      </div>
                            {t('portfolio.grid.detail.key_achievements')}
                    </h3>
                    <div className="grid grid-cols-1 gap-4">
                            {translatedProject.achievements.map((achievement: string, index: number) => (
                        <div
                                key={index}
                          className="flex items-start gap-4 bg-white/[0.05] border border-white/5 rounded-xl p-4"
                        >
                          <div className="w-6 h-6 bg-[#194EFF] rounded-full flex items-center justify-center text-xs font-bold text-white flex-shrink-0 mt-0.5">
                            ✓
                          </div>
                          <span className="text-white/80 leading-relaxed">{achievement}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
                    </>
                  );
                })()}
              </div>
            </div>
          </div>
        </section>
      )}
    </>
  );
}; 