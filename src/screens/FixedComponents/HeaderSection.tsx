import { useState } from "react";
import { Button } from "../../components/ui/button";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuList,
} from "../../components/ui/navigation-menu";
import { ChevronDown, Code, Bot, Palette, Search, FileText, BarChart3, Globe, Briefcase, ShoppingCart, Heart, Lightbulb } from "lucide-react";
import { useNavigate, useLocation } from "react-router-dom";
import { motion } from "framer-motion";
import {
  GlowButton,
  StaggerContainer,
  StaggerItem
} from "../../components/ui/animated-elements";
import logoBg from '/logo-white.png';
import { useTranslation } from "../../contexts/LanguageContext";

export const HeaderSection = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { t } = useTranslation();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeDrawer, setActiveDrawer] = useState<string | null>(null);

  // Dynamic navigation menu items based on current location
  const navItems = [
    { name: t('navigation.home'), path: "/", hasDropdown: false },
    { name: t('navigation.about'), path: "/about", hasDropdown: false },
    { name: t('navigation.services'), path: "/services", hasDropdown: true },
    { name: t('navigation.portfolio'), path: "/our-work", hasDropdown: false },
  ];

  // Function to get icon component based on icon name
  const getIconComponent = (iconName: string) => {
    switch (iconName) {
      case "Code": return <Code className="w-4 h-4" />;
      case "Bot": return <Bot className="w-4 h-4" />;
      case "Palette": return <Palette className="w-4 h-4" />;
      case "Search": return <Search className="w-4 h-4" />;
      case "FileText": return <FileText className="w-4 h-4" />;
      case "BarChart3": return <BarChart3 className="w-4 h-4" />;
      case "Globe": return <Globe className="w-4 h-4" />;
      case "Briefcase": return <Briefcase className="w-4 h-4" />;
      case "ShoppingCart": return <ShoppingCart className="w-4 h-4" />;
      case "Heart": return <Heart className="w-4 h-4" />;
      case "Lightbulb": return <Lightbulb className="w-4 h-4" />;
      default: return null;
    }
  };

  // Function to check if a navigation item is active
  const isActive = (path: string) => {
    if (path === "/") {
      return location.pathname === "/";
    }
    // Don't show Services as active - always show dropdown
    if (path === "/services") {
      return false;
    }
    return location.pathname.startsWith(path);
  };

  // Services dropdown data
  const servicesDropdown = [
    {
      category: t('navigation.services'),
      items: [
        { name: t('navigation.web_development'), description: t('header.custom_websites_desc'), icon: "Code", path: "/services/web-development" },
        { name: t('navigation.design'), description: t('header.design_desc'), icon: "Palette", path: "/services/design" },
        { name: t('navigation.bot_automation'), description: t('header.automation_desc'), icon: "Bot", path: "/services/bot-automation" },
      ]
    },
    {
      category: t('header.marketing_content'),
      items: [
        { name: t('navigation.seo'), description: t('header.seo_desc'), icon: "Search", path: "/services/seo" },
        { name: t('navigation.copywriting'), description: t('header.copywriting_desc'), icon: "FileText", path: "/services/copywriting" },
      ]
    },
    {
      category: t('navigation.analytics_tracking'),
      items: [
        {
          name: t('navigation.analytics_tracking'),
          description: "Track user behavior. Improve results.",
          icon: "BarChart3",
          path: "/services/analytics-tracking",
          features: [
            "Google Analytics Setup",
            "Conversion Tracking",
            "Heatmaps & Session Recordings",
            "Performance Dashboards"
          ],
          cta: "Learn More"
        }
      ]
    }
  ];

  // Portfolio dropdown data
  const portfolioDropdown = [
    {
      category: t('header.our_work'),
      items: [
        { name: t('header.web_projects'), description: t('header.web_projects_desc'), icon: "Globe", path: "/our-work" },
        { name: t('header.brand_design'), description: t('header.brand_design_desc'), icon: "Palette", path: "/our-work/brand" },
        { name: t('header.case_studies'), description: t('header.case_studies_desc'), icon: "BarChart3", path: "/case-studies" },
      ]
    },
    {
      category: t('header.industries'),
      items: [
        { name: t('header.ecommerce'), description: t('header.ecommerce_desc'), icon: "ShoppingCart", path: "/our-work/ecommerce" },
        { name: t('header.healthcare'), description: t('header.healthcare_desc'), icon: "Heart", path: "/our-work/healthcare" },
        { name: t('header.technology'), description: t('header.technology_desc'), icon: "Lightbulb", path: "/our-work/technology" },
      ]
    }
  ];

  const renderDropdownMenu = (items: Array<{ category: string; items: Array<{ name: string; description: string; icon: string; path?: string }> }>, triggerName: string, uniqueId: string) => (
    <div className={`relative dropdown-${uniqueId}`}>
      <button
        className="flex items-center gap-1 font-['Urbanist',Helvetica] font-medium text-white text-base tracking-[0] leading-[24px] whitespace-nowrap hover:text-[#194EFF] transition-colors duration-200"
        onMouseEnter={() => {
          const dropdown = document.querySelector(`.dropdown-${uniqueId} .dropdown-content`);
          if (dropdown) {
            dropdown.classList.remove('opacity-0', 'invisible');
            dropdown.classList.add('opacity-100', 'visible');
          }
        }}
        onMouseLeave={() => {
          setTimeout(() => {
            const dropdown = document.querySelector(`.dropdown-${uniqueId} .dropdown-content`);
            const isHovered = dropdown?.matches(':hover');
            if (!isHovered && dropdown) {
              dropdown.classList.add('opacity-0', 'invisible');
              dropdown.classList.remove('opacity-100', 'visible');
            }
          }, 100);
        }}
      >
        {triggerName}
        <ChevronDown className="w-4 h-4 text-white/60" />
      </button>

      <div
        className="dropdown-content absolute top-full left-0 mt-2 w-[280px] bg-[#00041F]/95 border border-[#194EFF]/20 rounded-lg shadow-lg opacity-0 invisible transition-all duration-200 z-50 backdrop-blur-xl"
        onMouseEnter={() => {
          const dropdown = document.querySelector(`.dropdown-${uniqueId} .dropdown-content`);
          if (dropdown) {
            dropdown.classList.remove('opacity-0', 'invisible');
            dropdown.classList.add('opacity-100', 'visible');
          }
        }}
        onMouseLeave={() => {
          const dropdown = document.querySelector(`.dropdown-${uniqueId} .dropdown-content`);
          if (dropdown) {
            dropdown.classList.add('opacity-0', 'invisible');
            dropdown.classList.remove('opacity-100', 'visible');
          }
        }}
      >
        <div className="p-3">
          {items.map((category, categoryIndex) => (
            <div key={categoryIndex}>
              {categoryIndex > 0 && <div className="w-full h-px bg-[#194EFF]/20 my-2"></div>}
              <div className="text-[#194EFF] text-xs font-semibold uppercase tracking-wider mb-2 px-3">
                {category.category}
              </div>
              {category.items.map((item, itemIndex) => (
                <div
                  key={itemIndex}
                  className="flex items-center gap-3 px-3 py-2 text-white text-sm hover:bg-[#194EFF]/10 rounded transition-colors duration-150 cursor-pointer group"
                  onClick={() => item.path && navigate(item.path)}
                >
                  <span className="text-base">{getIconComponent(item.icon)}</span>
                  <div className="flex-1">
                    <div className="font-medium group-hover:text-[#194EFF] transition-colors">{item.name}</div>
                    <div className="text-white/60 text-xs">{item.description}</div>
                  </div>
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>
    </div>
  );

  const closeDrawer = () => {
    setActiveDrawer(null);
  };

  const renderDrawerContent = (drawerName: string) => {
    switch (drawerName) {
      case 'Services':
        return (
          <>
            <div className="flex items-center gap-3 px-4 py-3 border-b border-white/10">
              <button
                onClick={closeDrawer}
                className="p-1 text-white/60 hover:text-white"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </svg>
              </button>
              <span className="text-white font-semibold">{t('navigation.services')}</span>
            </div>
            <div className="relative">
              <div className="overflow-y-auto max-h-[45vh] scrollbar-thin scrollbar-thumb-[#194EFF]/40 scrollbar-track-transparent">
                {servicesDropdown.map((category, catIndex) => (
                  <div key={catIndex} className="mb-4">
                    <div className="text-[#194EFF] text-xs font-semibold uppercase tracking-wider px-4 py-2">
                      {category.category}
                    </div>
                    {category.items.map((item, itemIndex) => (
                      <button
                        key={itemIndex}
                        onClick={() => {
                          if (item.path) {
                            navigate(item.path);
                            setIsMobileMenuOpen(false);
                          }
                        }}
                        className="w-full text-left flex items-center gap-3 px-4 py-3 text-white/70 hover:text-white border-b border-white/5"
                      >
                        <span className="text-xl">{getIconComponent(item.icon)}</span>
                        <div>
                          <div className="font-medium text-white">{item.name}</div>
                          <div className="text-white/50 text-sm">{item.description}</div>
                        </div>
                      </button>
                    ))}
                  </div>
                ))}
              </div>
              {/* Gradient fade for scroll hint */}
              <div className="pointer-events-none absolute bottom-0 left-0 right-0 h-8 bg-gradient-to-t from-[#00041F] to-transparent" />
            </div>
          </>
        );

      case 'Our Work':
        return (
          <>
            <div className="flex items-center gap-3 px-4 py-3 border-b border-white/10">
              <button
                onClick={closeDrawer}
                className="p-1 text-white/60 hover:text-white"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </svg>
              </button>
              <span className="text-white font-semibold">{t('navigation.portfolio')}</span>
            </div>
            <div className="relative">
              <div className="overflow-y-auto max-h-[45vh] scrollbar-thin scrollbar-thumb-[#194EFF]/40 scrollbar-track-transparent">
                {portfolioDropdown.map((category, catIndex) => (
                  <div key={catIndex} className="mb-4">
                    <div className="text-[#194EFF] text-xs font-semibold uppercase tracking-wider px-4 py-2">
                      {category.category}
                    </div>
                    {category.items.map((item, itemIndex) => (
                      <button
                        key={itemIndex}
                        onClick={() => {
                          if (item.path) {
                            navigate(item.path);
                            setIsMobileMenuOpen(false);
                          }
                        }}
                        className="w-full text-left flex items-center gap-3 px-4 py-3 text-white/70 hover:text-white border-b border-white/5"
                      >
                        <span className="text-xl">{getIconComponent(item.icon)}</span>
                        <div>
                          <div className="font-medium text-white">{item.name}</div>
                          <div className="text-white/50 text-sm">{item.description}</div>
                        </div>
                      </button>
                    ))}
                  </div>
                ))}
              </div>
              {/* Gradient fade for scroll hint */}
              <div className="pointer-events-none absolute bottom-0 left-0 right-0 h-8 bg-gradient-to-t from-[#00041F] to-transparent" />
            </div>
          </>
        );

      default:
        return null;
    }
  };

  return (
    <header className="fixed top-4 left-4 right-4 rounded-2xl md:top-6 md:left-20 md:right-20 md:rounded-2xl py-1 z-50 bg-[#00041F]/90 backdrop-blur-xl border border-[#194EFF]/20 shadow-2xl shadow-[#194EFF]/10">
      {/* Main Navigation */}
      <div className="w-full px-4 md:px-6 py-4 relative rounded-3xl">
        <div className="flex justify-between items-center w-full rounded-2xl">
          {/* Logo - Left */}
          <motion.div
            className="flex items-center group cursor-pointer"
            onClick={() => navigate('/')}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <img
              className="w-auto h-8 lg:w-50 lg:h-10 group-hover:scale-110 transition-transform duration-300"
              src={logoBg}
              alt="Logo"
            />
          </motion.div>

          {/* Navigation Menu - Center */}
          <motion.div
            className="hidden lg:flex"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <NavigationMenu>
              <NavigationMenuList className="flex flex-row items-center gap-6">
                <StaggerContainer staggerDelay={0.1}>
                  <div className="flex flex-row items-center gap-6">
                    {navItems.map((item, index) => (
                      <StaggerItem key={index}>
                        <NavigationMenuItem className="flex">
                          {isActive(item.path) ? (
                            <div className="flex flex-row items-center gap-2 px-5 py-2.5 bg-gradient-to-r from-[#194EFF]/20 to-[#194EFF]/10 rounded-2xl border border-[#194EFF]/30 backdrop-blur-sm">
                              <div className="w-1.5 h-1.5 bg-[#194EFF] rounded-full animate-pulse" />
                              <div className="font-['Urbanist',Helvetica] font-medium text-white text-base tracking-[0] leading-[24px] whitespace-nowrap">
                                {item.name}
                              </div>
                            </div>
                          ) : item.hasDropdown ? (
                            renderDropdownMenu(
                              servicesDropdown,
                              item.name,
                              item.name.toLowerCase()
                            )
                          ) : (
                            <button
                              onClick={() => navigate(item.path)}
                              className="font-['Urbanist',Helvetica] font-medium text-white text-base tracking-[0] leading-[24px] whitespace-nowrap hover:text-[#194EFF] transition-colors duration-200 px-2 py-1"
                            >
                              {item.name}
                            </button>
                          )}
                        </NavigationMenuItem>
                      </StaggerItem>
                    ))}
                  </div>
                </StaggerContainer>
              </NavigationMenuList>
            </NavigationMenu>
          </motion.div>


          {/* CTA Button - Right */}
          <motion.div
            className="hidden lg:flex"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.6 }}
          >
            <GlowButton
              disableGlow={true}
              className="px-8 py-4 bg-gradient-to-r from-[#194EFF] to-[#194EFF]/90 text-white font-semibold text-base rounded-2xl hover:from-[#194EFF]/90 hover:to-[#194EFF]/80 transition-all duration-300 shadow-xl shadow-[#194EFF]/25 hover:shadow-[#194EFF]/40 hover:scale-105 transform relative overflow-hidden group/btn flex items-center gap-2"
              onClick={() => navigate('/contact')}
            >
              <span className="relative z-10">{t('navigation.contact')}</span>
              <svg className="w-4 h-4 relative z-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover/btn:translate-x-full transition-transform duration-1000"></div>
            </GlowButton>
          </motion.div>

          {/* Mobile Menu Button */}
          <motion.div
            className="lg:hidden"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.6 }}
          >
            <Button
              className="p-2 bg-[#194EFF]/10 hover:bg-[#194EFF]/20 border border-[#194EFF]/20 rounded-lg"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {!isMobileMenuOpen ? (
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              ) : (
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              )}
            </Button>
          </motion.div>
        </div>

        {/* Overlay for mobile menu */}
        {isMobileMenuOpen && (
          <motion.div
            className="fixed left-0 right-0 z-40 bg-black/60"
            style={{ top: 'calc(var(--navbar-height, 80px) + 1rem)' }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            onClick={() => {
              setIsMobileMenuOpen(false);
              setActiveDrawer(null);
            }}
          />
        )}
        {/* Main Mobile Menu */}
        <motion.div
          className={`lg:hidden fixed left-0 right-0 z-50 transition-all duration-300 ${isMobileMenuOpen ? 'opacity-100 visible' : 'opacity-0 invisible'
            }`}
          style={{ top: 'calc(var(--navbar-height, 80px) + 1rem)' }}
          initial={{ y: '-100%' }}
          animate={{ y: isMobileMenuOpen ? 0 : '0%' }}
          transition={{ type: "tween", duration: 0.3 }}
        >
          <div className="flex flex-col bg-[#00041F] rounded-2xl border border-[#194EFF]/20 shadow-2xl shadow-[#194EFF]/10 overflow-hidden relative">
            {/* Main Navigation Items */}
            <div className="space-y-0">
              {navItems.map((item, index) => (
                <button
                  key={index}
                  onClick={() => {
                    if (item.hasDropdown) {
                      if (activeDrawer === item.name) {
                        setActiveDrawer(null); // Close if already open
                      } else {
                        setActiveDrawer(item.name); // Open if not open
                      }
                    } else {
                      navigate(item.path);
                      setIsMobileMenuOpen(false);
                    }
                  }}
                  className={`w-full text-left py-4 px-4 text-base font-medium transition-all duration-300 flex items-center justify-between bg-[#00041F] hover:bg-[#194EFF] relative z-10 ${isActive(item.path)
                      ? 'text-[#194EFF] font-semibold bg-[#00041F] border-l-4 border-[#194EFF]'
                      : 'text-white hover:text-white'
                    }`}
                >
                  <span>{item.name}</span>
                  {item.hasDropdown && (
                    <svg className="w-4 h-4 text-white/60" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  )}
                </button>
              ))}
            </div>

            {/* Mobile CTA Button */}
            <div className="mt-auto p-4 bg-[#00041F]">
              <GlowButton
                disableGlow={true}
                onClick={() => navigate('/contact')}
                className="w-full px-8 py-4 bg-gradient-to-r from-[#194EFF] to-[#194EFF]/90 text-white font-semibold text-base rounded-2xl hover:from-[#194EFF]/90 hover:to-[#194EFF]/80 transition-all duration-300 shadow-xl shadow-[#194EFF]/25 hover:shadow-[#194EFF]/40 hover:scale-105 transform relative overflow-hidden group/btn flex items-center justify-center gap-2"
              >
                <span className="relative z-10">{t('navigation.contact')}</span>
                <svg className="w-4 h-4 relative z-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover/btn:translate-x-full transition-transform duration-1000"></div>
              </GlowButton>
            </div>
          </div>

          {/* Drawers */}
          {/* Overlay for drawers */}
          {activeDrawer && (
            <motion.div
              className="fixed left-0 right-0 z-40 bg-black/60"
              style={{ top: 'calc(var(--navbar-height, 80px) + 1rem)' }}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              onClick={() => {
                setIsMobileMenuOpen(false);
                setActiveDrawer(null);
              }}
            />
          )}
          <motion.div
            className={`fixed left-0 right-0 z-60 ${activeDrawer ? 'visible' : 'invisible'
              }`}
            style={{ top: 'calc(var(--navbar-height, 220px) + 1rem)' }}
            initial={{ y: '-100%' }}
            animate={{ y: activeDrawer ? 0 : '0%' }}
            transition={{ type: "tween", duration: 0.3 }}
          >
            {activeDrawer && (
              <div className="h-full bg-[#00041F] rounded-2xl border border-[#194EFF]/20 shadow-2xl shadow-[#194EFF]/10 overflow-hidden">
                {renderDrawerContent(activeDrawer)}
              </div>
            )}
          </motion.div>
        </motion.div>
      </div>
    </header>
  );
};