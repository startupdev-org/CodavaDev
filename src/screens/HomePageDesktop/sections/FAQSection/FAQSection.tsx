import React from "react";
import { Button } from "../../../../components/ui/button";
import { Card, CardContent } from "../../../../components/ui/card";
import { Input } from "../../../../components/ui/input";

export const FAQSection = (): JSX.Element => {
  // Footer navigation data
  const footerNavigation = [
    {
      title: "Home",
      links: [
        "Hero Section",
        "Features",
        "Solutions",
        "Testimonials",
        "FAQ's",
      ],
    },
    {
      title: "About Us",
      links: [
        "Our Story",
        "Our Team",
        "How We Work",
        "Our Expertise",
        "Our Clients",
      ],
    },
    {
      title: "Services",
      links: ["Cloud Solutions", "Cybersecurity", "AI & ML", "Digital Transformation"],
    },
    {
      title: "Solutions",
      links: [
        "Infrastructure Modernization",
        "Data Analytics",
        "Process Automation",
        "System Integration",
        "IT Consulting",
      ],
    },
    {
      title: "Contact Us",
      links: ["Get Quote", "Our Offices"],
    },
  ];

  // Social media icons
  const socialIcons = [
    { src: "/icon-9.svg", alt: "LinkedIn" },
    { src: "/icon-12.svg", alt: "Twitter" },
    { src: "/icon-5.svg", alt: "GitHub" },
    { src: "/icon-14.svg", alt: "YouTube" },
  ];

  return (
    <div className="flex flex-col w-full items-end relative">
      {/* CTA Section */}
      <div className="flex items-center gap-[250px] px-[162px] py-[100px] relative w-full border-t border-b border-neutral-800">
        <img
          className="absolute w-[633px] h-[331px] top-9 right-0"
          alt="Abstract design"
          src="/abstract-design.svg"
        />

        <img
          className="absolute w-[546px] h-[308px] top-[59px] left-0"
          alt="Abstract design"
          src="/abstract-design-1.svg"
        />

        <div className="flex flex-col items-start gap-3.5 relative flex-1">
          <h2 className="relative self-stretch mt-[-1.00px] font-['Urbanist',Helvetica] font-semibold text-white text-5xl tracking-[0] leading-[72px]">
            Start Your Digital Transformation Today
          </h2>

          <p className="font-medium text-grey-60 tracking-[0] relative self-stretch font-['Urbanist',Helvetica] text-lg leading-[27px]">
            Your next breakthrough is just a click away. Whether you're looking to modernize your infrastructure, implement AI solutions, or enhance cybersecurity, TechFlow is here to guide you every step of the way. Take the first step towards digital excellence and explore our comprehensive IT solutions.
          </p>
        </div>

        <Button className="px-6 py-[18px] h-auto bg-purple-60 rounded-[10px] font-['Urbanist',Helvetica] font-medium text-white text-lg leading-[27px]">
          Explore Solutions
        </Button>
      </div>

      {/* Footer Section */}
      <footer className="flex flex-col items-start w-full bg-transparent">
        <div className="flex items-start gap-20 px-[162px] py-[100px] w-full">
          {/* Logo and Newsletter Subscription */}
          <div className="flex flex-col w-[538px] items-start gap-[30px]">
            <div className="relative w-40 h-12 flex items-center">
              <div className="w-12 h-12 bg-purple-60 rounded-lg flex items-center justify-center mr-3">
                <span className="text-white font-bold text-xl">T</span>
              </div>
              <span className="font-bold text-white text-xl">TechFlow</span>
            </div>

            <Card className="w-[423px] bg-grey-08 rounded-xl border border-solid border-neutral-800">
              <CardContent className="flex items-center gap-2.5 p-0">
                <div className="flex items-center gap-2.5 px-6 py-[18px] w-full">
                  <img className="w-6 h-6" alt="Icon" src="/icon-7.svg" />
                  <Input
                    className="flex-1 bg-transparent border-0 shadow-none font-['Urbanist',Helvetica] font-medium text-grey-60 text-lg tracking-[-0.11px] leading-6 focus-visible:ring-0 focus-visible:ring-offset-0 p-0"
                    placeholder="Enter Your Email"
                  />
                  <div className="relative w-[30px] h-[30px] flex items-center justify-center">
                    <div className="relative w-[25px] h-[25px] bg-[url(/send.png)] bg-[100%_100%]" />
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Navigation Links */}
          <div className="flex items-start justify-between flex-1">
            {footerNavigation.map((category, index) => (
              <div
                key={index}
                className="inline-flex flex-col items-start gap-[30px]"
              >
                <h3 className="relative w-fit mt-[-1.00px] font-['Urbanist',Helvetica] font-medium text-grey-60 text-xl tracking-[-0.12px] leading-6 whitespace-nowrap">
                  {category.title}
                </h3>

                <div className="inline-flex flex-col items-start gap-5">
                  {category.links.map((link, linkIndex) => (
                    <a
                      key={linkIndex}
                      href="#"
                      className={`relative w-fit ${linkIndex === 0 ? "mt-[-1.00px]" : ""} font-['Urbanist',Helvetica] font-medium text-white text-lg tracking-[-0.11px] leading-6 whitespace-nowrap`}
                    >
                      {link}
                    </a>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="flex items-center justify-between px-[162px] py-4 w-full bg-grey-10">
          <div className="inline-flex items-start gap-[38px] py-2.5">
            <p className="relative w-fit mt-[-1.00px] font-['Urbanist',Helvetica] font-medium text-absolutewhite text-lg tracking-[-0.11px] leading-6 whitespace-nowrap">
              @2024 TechFlow. All Rights Reserved.
            </p>

            <a
              href="#"
              className="relative w-fit mt-[-1.00px] font-['Urbanist',Helvetica] font-medium text-absolutewhite text-lg tracking-[-0.11px] leading-6 whitespace-nowrap"
            >
              Terms & Conditions
            </a>
          </div>

          <div className="inline-flex items-center justify-end gap-2.5 py-2.5">
            {socialIcons.map((icon, index) => (
              <a
                key={index}
                href="#"
                className="inline-flex items-center justify-center p-3.5 bg-grey-08 rounded-[58px] overflow-hidden"
              >
                <img className="w-6 h-6" alt={icon.alt} src={icon.src} />
              </a>
            ))}
          </div>
        </div>
      </footer>
    </div>
  );
};