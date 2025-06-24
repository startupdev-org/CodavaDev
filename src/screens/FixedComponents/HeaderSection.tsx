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
  MatrixText,
  DataStream,
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
    { name: "Solutions", path: "/solutions", hasDropdown: true },
  ];

  // Function to check if a navigation item is active
  const isActive = (path: string) => {
    if (path === "/") {
      return location.pathname === "/";
    }
    return location.pathname.startsWith(path);
  };

  // Services dropdown data
  const servicesDropdown = [
    {
      category: "Development Services",
      items: [
        { name: "Web Development", description: "Custom web applications", icon: "🌐" },
        { name: "Mobile App Development", description: "iOS & Android apps", icon: "📱" },
        { name: "SaaS Development", description: "Scalable software solutions", icon: "⚡" },
      ]
    },
    {
      category: "Infrastructure & Security",
      items: [
        { name: "Cloud Solutions", description: "AWS, Azure, GCP migration", icon: "☁️" },
        { name: "Cybersecurity", description: "Advanced threat protection", icon: "🔒" },
        { name: "DevOps & Automation", description: "CI/CD pipeline setup", icon: "🔧" },
      ]
    },
    {
      category: "Emerging Technologies",
      items: [
        { name: "AI & Machine Learning", description: "Intelligent automation", icon: "🤖" },
        { name: "Blockchain Solutions", description: "Decentralized applications", icon: "⛓️" },
        { name: "IoT Integration", description: "Connected device solutions", icon: "📡" },
      ]
    }
  ];

  // Solutions dropdown data
  const solutionsDropdown = [
    {
      category: "Business Solutions",
      items: [
        { name: "Digital Transformation", description: "End-to-end modernization", icon: "🚀" },
        { name: "Process Automation", description: "Workflow optimization", icon: "⚙️" },
        { name: "Data Analytics", description: "Business intelligence", icon: "📊" },
      ]
    },
    {
      category: "Industry Specific",
      items: [
        { name: "Healthcare IT", description: "HIPAA compliant solutions", icon: "🏥" },
        { name: "FinTech Solutions", description: "Financial technology", icon: "💰" },
        { name: "E-commerce Platforms", description: "Online retail solutions", icon: "🛒" },
      ]
    }
  ];

  const renderDropdownMenu = (items: typeof servicesDropdown, triggerName: string, uniqueId: string) => (
    <div className={`relative dropdown-${uniqueId}`}>
      <button 
        className="flex items-center gap-1 font-['Urbanist',Helvetica] font-medium text-white text-base tracking-[0] leading-[24px] whitespace-nowrap hover:text-purple-300 transition-colors duration-200"
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
        </button>
      
      <div 
        className="dropdown-content absolute top-full left-0 mt-2 w-[240px] bg-grey-08 border border-white/10 rounded-lg shadow-lg opacity-0 invisible transition-all duration-200 z-50"
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
        <div className="p-2">
          {items.map((category) => 
            category.items.map((item, itemIndex) => (
              <div 
                    key={itemIndex}
                className="flex items-center gap-3 px-3 py-2 text-white text-sm hover:bg-white/5 rounded transition-colors duration-150 cursor-pointer"
                  >
                <span className="text-base">{item.icon}</span>
                <span className="font-medium">{item.name}</span>
                    </div>
            ))
          )}
        </div>
      </div>
        </div>
  );

  return (
    <header className="fixed top-10 left-[90px] right-[90px] z-50 bg-grey-08/90 backdrop-blur-xl rounded-3xl border border-purple-60/30 shadow-2xl shadow-purple-900/20">
      {/* Main Navigation */}
      <div className="w-full px-6 py-5 relative">
        <div className="flex justify-between items-center w-full">
          {/* Logo - Left */}
          <motion.div 
            className="flex items-center group cursor-pointer"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <FloatingElement intensity={3} duration={2}>
              <div className="w-10 h-10 bg-gradient-to-br from-purple-600 to-purple-700 rounded-lg flex items-center justify-center mr-3 shadow-lg shadow-purple-600/25 group-hover:shadow-purple-600/40 transition-all duration-300 group-hover:scale-110">
                <span className="text-white font-bold text-lg group-hover:animate-pulse">T</span>
              </div>
            </FloatingElement>
            <div className="flex flex-col">
              <span className="font-bold text-white text-xl group-hover:text-purple-100 transition-all duration-300 leading-none">
                TechFlow
              </span>
              <span className="text-purple-400 text-xs font-medium">IT Solutions</span>
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
                            <div className="flex flex-row items-center gap-2 px-5 py-2.5 bg-gradient-to-r from-purple-600/20 to-purple-800/20 rounded-2xl border border-purple-60/30 backdrop-blur-sm">
                              <div className="w-1.5 h-1.5 bg-purple-400 rounded-full animate-pulse" />
                              <div className="font-['Urbanist',Helvetica] font-medium text-white text-base tracking-[0] leading-[24px] whitespace-nowrap">
                      {item.name}
                    </div>
                  </div>
                ) : item.hasDropdown ? (
                          <div className="flex px-3 py-2">
                            {renderDropdownMenu(
                              item.name === "Services" ? servicesDropdown : solutionsDropdown,
                              item.name,
                              item.name.toLowerCase()
                            )}
                  </div>
                ) : (
                            <button 
                              className="flex font-['Urbanist',Helvetica] font-medium text-white text-base tracking-[0] leading-[24px] whitespace-nowrap hover:text-purple-300 transition-colors duration-200 px-3 py-2 rounded-lg hover:bg-purple-600/10"
                              onClick={() => navigate(item.path)}
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
            className="flex"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.6 }}
          >
            <GlowButton className="px-6 py-2.5 bg-gradient-to-r from-purple-600 to-purple-700 hover:from-purple-500 hover:to-purple-600 rounded-lg font-medium text-white text-base [font-family:'Urbanist',Helvetica] shadow-lg shadow-purple-600/25 transition-all duration-300 transform hover:scale-105 flex items-center gap-2">
              <span>Get Quote</span>
              <div className="w-4 h-4 rounded-full bg-purple-400/20 flex items-center justify-center">
                <div className="w-0 h-0 border-l-[3px] border-l-purple-200 border-t-[2px] border-t-transparent border-b-[2px] border-b-transparent ml-0.5" />
              </div>
            </GlowButton>

            {/* Mobile Menu Button */}
            <div className="lg:hidden ml-4">
              <button className="w-9 h-9 bg-gradient-to-r from-purple-600/20 to-purple-800/20 rounded-lg border border-purple-60/30 flex items-center justify-center">
                <div className="space-y-1">
                  <div className="w-4 h-0.5 bg-purple-200"></div>
                  <div className="w-4 h-0.5 bg-purple-200"></div>
                  <div className="w-4 h-0.5 bg-purple-200"></div>
                </div>
              </button>
            </div>
          </motion.div>
        </div>
      </div>
    </header>
  );
};