import React from "react";
import { Button } from "../../../../components/ui/button";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuList,
} from "../../../../components/ui/navigation-menu";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
  DropdownMenuGroup,
} from "../../../../components/ui/dropdown-menu";
import { ChevronDown } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { 
  FadeIn, 
  GlowButton,
  MatrixText,
  DataStream,
  FloatingElement
} from "../../../../components/ui/animated-elements";

export const HeaderSection = (): JSX.Element => {
  const navigate = useNavigate();

  // Navigation menu items data
  const navItems = [
    { name: "Home", active: true, hasDropdown: false },
    { name: "About Us", active: false, hasDropdown: false },
    { name: "Services", active: false, hasDropdown: true },
    { name: "Solutions", active: false, hasDropdown: true },
  ];

  // Services dropdown data
  const servicesDropdown = [
    {
      category: "Development Services",
      items: [
        { name: "Web Development", description: "Custom web applications" },
        { name: "Mobile App Development", description: "iOS & Android apps" },
        { name: "SaaS Development", description: "Scalable software solutions" },
      ]
    },
    {
      category: "Infrastructure & Security",
      items: [
        { name: "Cloud Solutions", description: "AWS, Azure, GCP migration" },
        { name: "Cybersecurity", description: "Advanced threat protection" },
        { name: "DevOps & Automation", description: "CI/CD pipeline setup" },
      ]
    },
    {
      category: "Emerging Technologies",
      items: [
        { name: "AI & Machine Learning", description: "Intelligent automation" },
        { name: "Blockchain Solutions", description: "Decentralized applications" },
        { name: "IoT Integration", description: "Connected device solutions" },
      ]
    }
  ];

  // Solutions dropdown data
  const solutionsDropdown = [
    {
      category: "Business Solutions",
      items: [
        { name: "Digital Transformation", description: "End-to-end modernization" },
        { name: "Process Automation", description: "Workflow optimization" },
        { name: "Data Analytics", description: "Business intelligence" },
      ]
    },
    {
      category: "Industry Specific",
      items: [
        { name: "Healthcare IT", description: "HIPAA compliant solutions" },
        { name: "FinTech Solutions", description: "Financial technology" },
        { name: "E-commerce Platforms", description: "Online retail solutions" },
      ]
    }
  ];

  const renderDropdownMenu = (items: typeof servicesDropdown, triggerName: string) => (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <button className="flex items-center gap-1 font-['Urbanist',Helvetica] font-medium text-white text-lg tracking-[0] leading-[27px] whitespace-nowrap hover:text-purple-60 transition-colors duration-200 group">
          {triggerName}
          <ChevronDown className="w-4 h-4 transition-transform duration-200 group-data-[state=open]:rotate-180" />
        </button>
      </DropdownMenuTrigger>
      <DropdownMenuContent 
        className="w-[600px] bg-grey-08 border border-neutral-800 rounded-xl p-6 shadow-2xl backdrop-blur-sm"
        sideOffset={8}
      >
        <div className="grid grid-cols-2 gap-6">
          {items.map((category, categoryIndex) => (
            <div key={categoryIndex} className="space-y-3">
              <DropdownMenuLabel className="text-purple-60 font-semibold text-sm uppercase tracking-wider">
                {category.category}
              </DropdownMenuLabel>
              <DropdownMenuGroup>
                {category.items.map((item, itemIndex) => (
                  <DropdownMenuItem 
                    key={itemIndex}
                    className="flex flex-col items-start p-3 rounded-lg hover:bg-grey-10 transition-all duration-200 cursor-pointer group border border-transparent hover:border-purple-60/20"
                  >
                    <div className="font-medium text-white text-base group-hover:text-purple-60 transition-colors duration-200">
                      {item.name}
                    </div>
                    <div className="text-grey-60 text-sm mt-1">
                      {item.description}
                    </div>
                  </DropdownMenuItem>
                ))}
              </DropdownMenuGroup>
              {categoryIndex < items.length - 1 && (
                <DropdownMenuSeparator className="bg-neutral-800" />
              )}
            </div>
          ))}
        </div>
        <DropdownMenuSeparator className="bg-neutral-800 my-4" />
        <div className="flex justify-center">
          <Button className="bg-purple-60 hover:bg-purple-75 text-white px-6 py-2 rounded-lg transition-all duration-200 transform hover:scale-105">
            View All {triggerName}
          </Button>
        </div>
      </DropdownMenuContent>
    </DropdownMenu>
  );

  return (
    <header className="flex flex-col w-full items-start bg-transparent border-b border-purple-60/20 backdrop-blur-sm">
      {/* Announcement bar */}
      <div className="flex items-center justify-center gap-2.5 px-40 py-[18px] relative w-full bg-gradient-to-r from-grey-10 via-purple-900/10 to-grey-10 overflow-hidden border-b border-purple-60/30">
        {/* Background Effects */}
        <DataStream />
        <div className="absolute w-full h-[1282px] top-[-610px] left-0">
          <div className="relative w-full h-[1279px] top-px left-px">
            <div className="h-[1279px]">
              <div className="relative w-full h-[1279px]">
                <img
                  className="absolute w-full h-[63px] top-[609px] left-0 opacity-60"
                  alt="Group"
                  src="/group.png"
                />
              </div>
            </div>
          </div>
        </div>

        <FadeIn delay={0.3} direction="down">
          <div className="relative w-fit mt-[-1.00px] font-['Urbanist',Helvetica] font-medium text-transparent bg-gradient-to-r from-white via-purple-200 to-white bg-clip-text text-lg text-center tracking-[0] leading-[27px] whitespace-nowrap animate-gradient-shift bg-[length:200%_auto]">
            🚀 <MatrixText text="Transform Your Business with Cutting-Edge IT Solutions" />
          </div>
        </FadeIn>

        <FadeIn delay={0.5} direction="down">
          <div className="relative w-fit mt-[-1.00px] font-['Urbanist',Helvetica] font-medium text-purple-300 hover:text-purple-100 text-lg text-center tracking-[0] leading-[27px] underline whitespace-nowrap cursor-pointer transition-colors duration-300">
            Learn More
          </div>
        </FadeIn>

        <FloatingElement intensity={5} duration={3}>
          <div className="inline-flex items-center justify-center gap-2.5 p-1 absolute top-[15px] right-16 bg-gradient-to-r from-purple-600/20 to-purple-800/20 rounded-[75px] border border-purple-60/30 backdrop-blur-sm">
            <img className="relative w-6 h-6 filter hue-rotate-[280deg] brightness-125" alt="Icon" src="/icon.svg" />
          </div>
        </FloatingElement>
      </div>

      {/* Main navigation */}
      <div className="flex items-center justify-between px-[162px] py-5 relative w-full bg-gradient-to-r from-grey-10 via-purple-900/5 to-grey-10 backdrop-blur-sm">
        {/* Logo */}
        <FadeIn delay={0.1} direction="right">
          <div className="relative w-40 h-12 flex items-center group cursor-pointer">
            <FloatingElement intensity={3} duration={2}>
              <div className="w-12 h-12 bg-gradient-to-br from-purple-600 to-purple-700 rounded-lg flex items-center justify-center mr-3 shadow-lg shadow-purple-600/25 group-hover:shadow-purple-600/40 transition-all duration-300 group-hover:scale-110">
                <span className="text-white font-bold text-xl group-hover:animate-pulse">T</span>
              </div>
            </FloatingElement>
            <span className="font-bold text-transparent bg-gradient-to-r from-white to-purple-200 bg-clip-text text-xl group-hover:from-purple-100 group-hover:to-white transition-all duration-300">
              TechFlow
            </span>
          </div>
        </FadeIn>

        {/* Navigation menu */}
        <NavigationMenu className="mx-auto">
          <NavigationMenuList className="flex items-center gap-[30px]">
            {navItems.map((item, index) => (
              <NavigationMenuItem key={index}>
                {item.active ? (
                  <div className="inline-flex items-start gap-2.5 px-6 py-3.5 bg-grey-08 rounded-[10px] border border-solid border-neutral-800 shadow-lg">
                    <div className="font-['Urbanist',Helvetica] font-medium text-white text-lg tracking-[0] leading-[27px] whitespace-nowrap">
                      {item.name}
                    </div>
                  </div>
                ) : item.hasDropdown ? (
                  <div className="px-6 py-3.5">
                    {item.name === "Services" && renderDropdownMenu(servicesDropdown, item.name)}
                    {item.name === "Solutions" && renderDropdownMenu(solutionsDropdown, item.name)}
                  </div>
                ) : (
                  <div 
                    className="px-6 py-3.5 font-['Urbanist',Helvetica] font-medium text-white text-lg tracking-[0] leading-[27px] whitespace-nowrap hover:text-purple-60 transition-colors duration-200 cursor-pointer"
                    onClick={() => {
                      if (item.name === "About Us") navigate("/aboutus");
                    }}
                  >
                    {item.name}
                  </div>
                )}
              </NavigationMenuItem>
            ))}
          </NavigationMenuList>
        </NavigationMenu>
        <FadeIn delay={0.3} direction="down">
          <NavigationMenu className="mx-auto">
            <NavigationMenuList className="flex items-center gap-[30px]">
              {navItems.map((item, index) => (
                <NavigationMenuItem key={index}>
                  <FadeIn delay={0.4 + index * 0.1} direction="down">
                    {item.active ? (
                      <div className="inline-flex items-start gap-2.5 px-6 py-3.5 bg-gradient-to-r from-purple-600/20 to-purple-800/20 rounded-[10px] border border-solid border-purple-60/50 shadow-lg backdrop-blur-sm">
                        <div className="font-['Urbanist',Helvetica] font-medium text-purple-200 text-lg tracking-[0] leading-[27px] whitespace-nowrap">
                          <MatrixText text={item.name} />
                        </div>
                      </div>
                    ) : item.hasDropdown ? (
                      <div className="px-6 py-3.5">
                        {item.name === "Services" && renderDropdownMenu(servicesDropdown, item.name)}
                        {item.name === "Solutions" && renderDropdownMenu(solutionsDropdown, item.name)}
                      </div>
                    ) : (
                      <div className="px-6 py-3.5 font-['Urbanist',Helvetica] font-medium text-white text-lg tracking-[0] leading-[27px] whitespace-nowrap hover:text-purple-300 transition-all duration-300 cursor-pointer relative group">
                        {item.name}
                        <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-0 h-0.5 bg-gradient-to-r from-purple-600 to-purple-400 group-hover:w-full transition-all duration-300"></div>
                      </div>
                    )}
                  </FadeIn>
                </NavigationMenuItem>
              ))}
            </NavigationMenuList>
          </NavigationMenu>
        </FadeIn>

        {/* Contact button */}
        <FadeIn delay={0.7} direction="left">
          <GlowButton className="px-6 py-4 bg-gradient-to-r from-grey-08 to-purple-900/20 rounded-[10px] border border-solid border-purple-60/50 h-auto hover:bg-gradient-to-r hover:from-purple-600/20 hover:to-purple-700/20 hover:border-purple-60 transition-all duration-300 transform hover:scale-105 shadow-lg shadow-purple-600/10 backdrop-blur-sm">
            <span className="font-['Urbanist',Helvetica] font-medium text-purple-200 hover:text-white text-lg tracking-[0] leading-[27px] whitespace-nowrap transition-colors duration-300">
              Get Quote
            </span>
          </GlowButton>
        </FadeIn>
      </div>
    </header>
  );
};