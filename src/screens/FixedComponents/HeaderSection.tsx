import React from "react";
import { Button } from "../../components/ui/button";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuList,
} from "../../components/ui/navigation-menu";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
  DropdownMenuGroup,
} from "../../components/ui/dropdown-menu";
import { ChevronDown } from "lucide-react";
import { useNavigate, useLocation } from "react-router-dom";
import { motion } from "framer-motion";
import { 
  FadeIn, 
  GlowButton,
  FloatingElement,
  StaggerContainer,
  StaggerItem
} from "../../components/ui/animated-elements";

export const HeaderSection = (): JSX.Element => {
  const navigate = useNavigate();
  const location = useLocation();

  // Dynamic navigation menu items based on current location
  const navItems = [
    { name: "Home", path: "/", hasDropdown: false },
    { name: "About Us", path: "/aboutus", hasDropdown: false },
    { name: "Services", path: "/services", hasDropdown: true },
    { name: "Portfolio", path: "/portfolio", hasDropdown: true },
  ];

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
      category: "Development & Design",
      items: [
        { name: "Web Development", description: "Custom websites & applications", icon: "💻", path: "/services/web-development" },
        { name: "Design", description: "UI/UX & brand identity", icon: "🎨", path: "/services/design" },
      ]
    },
    {
      category: "Marketing & Content",
      items: [
        { name: "Digital Advertising", description: "Google & Facebook Ads", icon: "📢", path: "/services/advertising" },
        { name: "SEO", description: "Search engine optimization", icon: "🔍", path: "/services/seo" },
        { name: "Copywriting", description: "Content that converts", icon: "✍️", path: "/services/copywriting" },
      ]
    }
  ];

  // Portfolio dropdown data
  const portfolioDropdown = [
    {
      category: "Our Work",
      items: [
        { name: "Website Portfolio", description: "Featured web projects", icon: "🌐" },
        { name: "Brand Design", description: "Identity & design work", icon: "🎨" },
        { name: "Case Studies", description: "Detailed project breakdowns", icon: "📊" },
      ]
    },
    {
      category: "Industries",
      items: [
        { name: "E-commerce", description: "Online retail solutions", icon: "🛒" },
        { name: "Healthcare", description: "Medical & wellness brands", icon: "🏥" },
        { name: "Technology", description: "Tech startups & SaaS", icon: "💡" },
      ]
    }
  ];

  const renderDropdownMenu = (items: Array<{category: string; items: Array<{name: string; description: string; icon: string; path?: string}>}>, triggerName: string, uniqueId: string) => (
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
                <span className="text-base">{item.icon}</span>
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

  return (
    <header className="fixed top-6 left-20 right-20 py-1 z-50 bg-[#00041F]/90 backdrop-blur-xl rounded-2xl border border-[#194EFF]/20 shadow-2xl shadow-[#194EFF]/10">
      {/* Main Navigation */}
      <div className="w-full px-6 py-4 relative">
        <div className="flex justify-between items-center w-full">
          {/* Logo - Left */}
          <motion.div 
            className="flex items-center group cursor-pointer"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <FloatingElement intensity={3} duration={2}>
              <div className="w-10 h-10 bg-gradient-to-br from-[#194EFF] to-[#194EFF]/80 rounded-lg flex items-center justify-center mr-3 shadow-lg shadow-[#194EFF]/25 group-hover:shadow-[#194EFF]/40 transition-all duration-300 group-hover:scale-110">
                <span className="text-white font-bold text-lg group-hover:animate-pulse">T</span>
              </div>
            </FloatingElement>
            <div className="flex flex-col">
              <span className="font-bold text-white text-xl group-hover:text-[#194EFF] transition-all duration-300 leading-none">
                StartupDev
              </span>
              <span className="text-[#194EFF] text-xs font-medium">Digital Agency</span>
            </div>
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
                              item.name === "Services" ? servicesDropdown : portfolioDropdown,
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
            <GlowButton className="px-6 py-3 bg-[#194EFF] hover:bg-[#194EFF]/80 rounded-lg font-semibold text-white transition-all duration-300 flex items-center gap-2">
              Get Started
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </GlowButton>
          </motion.div>

            {/* Mobile Menu Button */}
          <motion.div 
            className="lg:hidden"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.6 }}
          >
            <Button className="p-2 bg-[#194EFF]/10 hover:bg-[#194EFF]/20 border border-[#194EFF]/20 rounded-lg">
              <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </Button>
          </motion.div>
        </div>
      </div>
    </header>
  );
};