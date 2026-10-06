import React, { useState, useEffect } from "react";
import { useLocaleNavigate } from "../../../../lib/localePath";
import { useTranslation } from "../../../../contexts/LanguageContext";

export const PortfolioGridSection: React.FC = () => {
  const { t } = useTranslation();
  const navigate = useLocaleNavigate();
  const [activeFilters, setActiveFilters] = useState<string[]>(['ALL']);
  const [selectedProject, setSelectedProject] = useState<any>(null);
  const [viewMode, setViewMode] = useState<'grid' | 'detail'>('grid');

  useEffect(() => {
    if (viewMode === 'detail') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  }, [viewMode]);

  const filterKeys = ['ALL', 'FULLSTACK', 'UIUX', 'MARKETING', 'ECOMMERCE'];
  const filterLabels: Record<string, string> = {
    'ALL': t('portfolio.grid.filters.all'),
    'FULLSTACK': t('portfolio.grid.filters.fullstack'),
    'UIUX': t('portfolio.grid.filters.uiux'),
    'MARKETING': t('portfolio.grid.filters.marketing'),
    'ECOMMERCE': t('portfolio.grid.filters.ecommerce')
  };

  const categoryToFilterKey: Record<string, string> = {
    'FullStack Development': 'FULLSTACK',
    'UI/UX Design': 'UIUX',
    'Digital Marketing': 'MARKETING',
    'E-commerce Development': 'ECOMMERCE'
  };

  const projects = [
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

  const projectTitleToKey: Record<string, string> = {
    "Epic Trans Logistics": "epic_trans_logistics",
    "EuroTour Moldova": "eurotour_moldova",
    "PURE.BMWM E-Commerce": "pure_bmwm_ecommerce",
    "RollWithdraw Platform": "rollwithdraw_platform",
    "Senda Courier": "senda_courier"
  };

  const getTranslatedProject = (project: any) => {
    const translationKey = projectTitleToKey[project.title];
    if (!translationKey) return project;

    const baseKey = `portfolio.grid.projects.${translationKey}`;
    const getTranslation = (key: string, fallback: any) => {
      const translated = t(key);
      return translated !== key ? translated : fallback;
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
      {viewMode === 'grid' && (
        <section id="portfolio-grid" className="relative pt-32 md:pt-40">
          <div className="relative z-10 mx-auto max-w-6xl px-6 pb-24 md:px-8">
            <div className="mb-10 flex flex-wrap justify-center gap-2">
              {filterKeys.map((filterKey) => {
                const isActive = activeFilters.includes(filterKey);
                return (
                  <button
                    key={filterKey}
                    type="button"
                    onClick={() => {
                      if (filterKey === "ALL") setActiveFilters(["ALL"]);
                      else handleFilterToggle(filterKey);
                    }}
                    className={`rounded-full px-4 py-2 text-sm font-semibold transition-all duration-300 ${
                      isActive
                        ? "bg-gradient-to-r from-[#194EFF] to-[#194EFF]/90 text-white"
                        : "border border-[#194EFF]/35 bg-[#194EFF]/10 text-white hover:border-[#194EFF]/60 hover:bg-[#194EFF]/18"
                    }`}
                  >
                    {filterLabels[filterKey]}
                  </button>
                );
              })}
            </div>

            <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
              {filteredProjects.length === 0 ? (
                <div className="col-span-full flex flex-col items-center justify-center py-20 text-center">
                  <h4 className="mb-2 text-xl font-semibold text-white">{t("portfolio.grid.empty_state.title")}</h4>
                  <p className="mb-6 max-w-md text-base text-white/55">
                    {t("portfolio.grid.empty_state.description")}
                  </p>
                  <button
                    onClick={() => navigate("/contact")}
                    className="inline-flex items-center justify-center rounded-full bg-gradient-to-r from-[#194EFF] to-[#194EFF]/90 px-6 py-3 text-sm font-semibold text-white transition-transform duration-300 hover:scale-105"
                  >
                    {t("portfolio.grid.empty_state.button")}
                  </button>
                </div>
              ) : (
                filteredProjects.map((project, index) => {
                  const featured = index === 0;
                  const type =
                    filterLabels[categoryToFilterKey[project.category]] || project.category;
                  return (
                    <button
                      key={project.id}
                      type="button"
                      onClick={() => openProjectDetail(project)}
                      className={`group relative w-full overflow-hidden rounded-[1.75rem] border border-white/10 text-left ${
                        featured ? "aspect-[16/10] md:col-span-2 md:aspect-[16/8]" : "aspect-[16/11]"
                      }`}
                    >
                      <div
                        className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-[1.03]"
                        style={{ backgroundImage: `url(${project.mainImage || project.images?.[0]})` }}
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/15 to-transparent" />

                      <div className="absolute inset-x-0 bottom-0 flex items-end justify-between gap-4 p-5 md:p-6">
                        <div className="min-w-0">
                          <p className="mb-1 text-[11px] font-medium tracking-[0.16em] text-white/70 uppercase">
                            {type}
                          </p>
                          <h3 className={`truncate font-medium text-white ${featured ? "text-2xl md:text-3xl" : "text-lg md:text-xl"}`}>
                            {project.title}
                          </h3>
                        </div>
                        <span className="inline-flex shrink-0 items-center gap-1 rounded-full bg-white px-3.5 py-1.5 text-xs font-medium text-black">
                          {t("portfolio.grid.view_details")}
                          <svg className="h-3.5 w-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                          </svg>
                        </span>
                      </div>
                    </button>
                  );
                })
              )}
            </div>
          </div>
        </section>
      )}

      {viewMode === 'detail' && selectedProject && (
        <section id="project-detail" className="relative pt-32 pb-24 md:pt-40">
          <div className="relative z-10 mx-auto max-w-5xl px-6 md:px-8">
            <button
              onClick={closeProjectDetail}
              className="mb-8 inline-flex items-center gap-2 text-sm text-white/50 transition-colors duration-200 hover:text-white"
            >
              <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
              {t("portfolio.grid.detail.breadcrumb")}
            </button>

            {(() => {
              const translatedProject = getTranslatedProject(selectedProject);
              const type =
                filterLabels[categoryToFilterKey[selectedProject.category]] || selectedProject.category;
              return (
                <>
                  <p className="mb-3 text-[11px] font-medium tracking-[0.16em] text-white/50 uppercase">
                    {type}
                  </p>
                  <h1 className="mb-4 max-w-3xl text-3xl font-medium tracking-tight text-white md:text-5xl">
                    {selectedProject.title}
                  </h1>
                  <p className="mb-10 max-w-2xl text-base leading-relaxed text-white/60">
                    {translatedProject.description || selectedProject.description}
                  </p>

                  <div className="flex flex-col gap-4">
                    {selectedProject.images.map((image: string, index: number) => (
                      <img
                        key={image}
                        src={image}
                        alt={`${selectedProject.title} - ${index + 1}`}
                        className="w-full rounded-[1.75rem] object-cover"
                      />
                    ))}
                  </div>
                </>
              );
            })()}
          </div>
        </section>
      )}
    </>
  );
};
