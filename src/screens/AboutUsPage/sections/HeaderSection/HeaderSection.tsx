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

export const HeaderSection = (): JSX.Element => {
  const navigate = useNavigate();
  // Navigation menu items data
  const navItems = [
    { name: "Home", active: false, hasDropdown: false },
    { name: "About", active: true, hasDropdown: false },
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
          {items.map((category) => (
            <div key={category.category} className="space-y-3">
              <DropdownMenuLabel className="text-purple-60 font-semibold text-sm uppercase tracking-wider">
                {category.category}
              </DropdownMenuLabel>
              <DropdownMenuGroup>
                {category.items.map((item) => (
                  <DropdownMenuItem 
                    key={item.name}
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
              {/* Use indexOf to determine if this is not the last category */}
              {items.indexOf(category) < items.length - 1 && (
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
    <header className="flex flex-col w-full items-start bg-transparent border-b border-neutral-800">
      {/* Announcement bar */}
      <div className="flex items-center justify-center gap-2.5 px-40 py-[18px] relative w-full bg-grey-10 overflow-hidden border-b border-neutral-800">
        <div className="absolute w-full h-[1282px] top-[-610px] left-0">
          <div className="relative w-full h-[1279px] top-px left-px">
            <div className="h-[1279px]">
              <div className="relative w-full h-[1279px]">
                <img
                  className="absolute w-full h-[63px] top-[609px] left-0"
                  alt="Group"
                  src="/group.png"
                />
              </div>
            </div>
          </div>
        </div>

        <div className="relative w-fit mt-[-1.00px] font-['Urbanist',Helvetica] font-medium text-white text-lg text-center tracking-[0] leading-[27px] whitespace-nowrap">
          🚀 Transform Your Business with Cutting-Edge IT Solutions
        </div>

        <div className="relative w-fit mt-[-1.00px] font-['Urbanist',Helvetica] font-medium text-white text-lg text-center tracking-[0] leading-[27px] underline whitespace-nowrap">
          Learn More
        </div>

        <div className="inline-flex items-center justify-center gap-2.5 p-1 absolute top-[15px] right-16 bg-[#ffffff1a] rounded-[75px]">
          <img className="relative w-6 h-6" alt="Icon" src="/icon.svg" />
        </div>
      </div>

      {/* Main navigation */}
      <div className="flex items-center justify-between px-[162px] py-5 relative w-full bg-grey-10">
        {/* Logo */}
        <div className="relative w-40 h-12 flex items-center">
          <div className="w-12 h-12 bg-purple-60 rounded-lg flex items-center justify-center mr-3 shadow-lg">
            <span className="text-white font-bold text-xl">T</span>
          </div>
          <span className="font-bold text-white text-xl">TechFlow</span>
        </div>

        {/* Navigation menu */}
        <NavigationMenu className="mx-auto">
          <NavigationMenuList className="flex items-center gap-[30px]">
            {navItems.map((item) => {
              let menuContent;
              if (item.active) {
                menuContent = (
                  <div className="inline-flex items-start gap-2.5 px-6 py-3.5 bg-grey-08 rounded-[10px] border border-solid border-neutral-800 shadow-lg">
                    <div className="font-['Urbanist',Helvetica] font-medium text-white text-lg tracking-[0] leading-[27px] whitespace-nowrap">
                      {item.name}
                    </div>
                  </div>
                );
              } else if (item.hasDropdown) {
                menuContent = (
                  <div className="px-6 py-3.5">
                    {item.name === "Services" && renderDropdownMenu(servicesDropdown, item.name)}
                    {item.name === "Solutions" && renderDropdownMenu(solutionsDropdown, item.name)}
                  </div>
                );
              } else {
                menuContent = (
                  <button 
                    onClick={() => item.name === "Home" && navigate("/")}
                    className="px-6 py-3.5 font-['Urbanist',Helvetica] font-medium text-white text-lg tracking-[0] leading-[27px] whitespace-nowrap hover:text-purple-60 transition-colors duration-200 cursor-pointer bg-transparent border-none"
                  >
                    {item.name}
                  </button>
                );
              }

              return (
                <NavigationMenuItem key={item.name}>
                  {menuContent}
                </NavigationMenuItem>
              );
            })}
          </NavigationMenuList>
        </NavigationMenu>

        {/* Contact button */}
        <Button
          variant="outline"
          className="px-6 py-4 bg-grey-08 rounded-[10px] border border-solid border-neutral-800 h-auto hover:bg-purple-60 hover:border-purple-60 transition-all duration-200 transform hover:scale-105 shadow-lg"
        >
          <span className="font-['Urbanist',Helvetica] font-medium text-white text-lg tracking-[0] leading-[27px] whitespace-nowrap">
            Get Quote
          </span>
        </Button>
      </div>
    </header>
  );
};