import React from "react";
import { Input } from "../../components/ui/input";
import { 
  FadeIn, 
  GlowButton,
  FloatingElement
} from "../../components/ui/animated-elements";

export const FooterSection = (): JSX.Element => {
  // Simplified footer navigation
  const footerNavigation = [
    {
      title: "Company",
      links: ["About Us", "Our Team", "Careers"],
    },
    {
      title: "Services",
      links: ["Cloud Solutions", "Cybersecurity", "AI & ML"],
    },
    {
      title: "Support",
      links: ["Contact", "Documentation", "Help Center"],
    },
  ];

  // Social media icons
  const socialIcons = [
    { src: "/icon-9.svg", alt: "LinkedIn" },
    { src: "/icon-12.svg", alt: "Twitter" },
    { src: "/icon-5.svg", alt: "GitHub" },
  ];

  return (
    <footer className="relative w-full bg-grey-08 border-t border-purple-60/20">
      {/* Main Footer Content */}
      <div className="max-w-6xl mx-auto px-8 py-16">
        {/* Top Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Logo and Description */}
          <div className="lg:col-span-1">
            <FadeIn delay={0.1} direction="up">
              <FloatingElement intensity={2} duration={4}>
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-10 h-10 bg-gradient-to-br from-purple-600 to-purple-700 rounded-lg flex items-center justify-center">
                    <span className="text-white font-bold text-lg">T</span>
                  </div>
                  <span className="font-bold text-white text-xl">TechFlow</span>
                </div>
              </FloatingElement>
              <p className="text-grey-60 text-base leading-relaxed mb-6">
                Digital transformation solutions for modern businesses.
              </p>
              <div className="text-grey-60 text-sm">
                hello@techflow.com
              </div>
            </FadeIn>
          </div>

          {/* Navigation Links */}
          {footerNavigation.map((category, index) => (
            <div key={index} className="space-y-4">
              <FadeIn delay={0.2 + index * 0.1} direction="up">
                <h4 className="font-semibold text-white text-lg">
                  {category.title}
                </h4>
                <div className="space-y-3">
                  {category.links.map((link, linkIndex) => (
                    <a
                      key={linkIndex}
                      href="#"
                      className="block text-grey-60 hover:text-purple-300 text-base transition-colors duration-200"
                    >
                      {link}
                    </a>
                  ))}
                </div>
              </FadeIn>
            </div>
          ))}
        </div>

        {/* Newsletter Section */}
        <div className="mb-12">
          <FadeIn delay={0.5} direction="up">
            <div className="max-w-md">
              <h3 className="font-semibold text-white text-lg mb-3">
                Stay Updated
              </h3>
              <div className="flex gap-3">
                <Input
                  className="flex-1 bg-grey-10 border border-purple-60/30 text-white placeholder:text-grey-60 focus:border-purple-60/50"
                  placeholder="Enter your email"
                />
                <GlowButton className="px-6 py-2 bg-purple-600 hover:bg-purple-700 text-white font-medium rounded-lg transition-colors duration-200">
                  Subscribe
                </GlowButton>
              </div>
            </div>
          </FadeIn>
        </div>

        {/* Bottom Section */}
        <div className="flex flex-col md:flex-row items-center justify-between pt-8 border-t border-purple-60/20 gap-6">
          <FadeIn delay={0.6} direction="up">
            <p className="text-grey-60 text-sm">
              © 2024 TechFlow. All rights reserved.
            </p>
          </FadeIn>

          <FadeIn delay={0.7} direction="up">
            <div className="flex items-center gap-4">
              {socialIcons.map((icon, index) => (
                <a
                  key={index}
                  href="#"
                  className="w-9 h-9 bg-grey-10 hover:bg-purple-600/20 rounded-lg flex items-center justify-center transition-colors duration-200 group"
                >
                  <img 
                    className="w-4 h-4 filter brightness-75 group-hover:brightness-100 transition-all duration-200" 
                    alt={icon.alt} 
                    src={icon.src} 
                  />
                </a>
              ))}
            </div>
          </FadeIn>
        </div>
      </div>
    </footer>
  );
}; 