import React from "react";
import { Input } from "../../components/ui/input";
import { 
  FadeIn, 
  GlowButton,
  FloatingElement
} from "../../components/ui/animated-elements";

export const FooterSection = (): JSX.Element => {
  // Footer navigation
  const footerNavigation = [
    {
      title: "Company",
      links: [
        { name: "About Us", href: "/aboutus" },
        { name: "Our Team", href: "/team" },
        { name: "Careers", href: "/careers" }
      ],
    },
    {
      title: "Services",
      links: [
        { name: "Web Development", href: "/services/web-development" },
        { name: "Design", href: "/services/design" },
        { name: "Digital Advertising", href: "/services/advertising" },
        { name: "SEO", href: "/services/seo" },
        { name: "Copywriting", href: "/services/copywriting" }
      ],
    },
    {
      title: "Support",
      links: [
        { name: "Contact", href: "/contact" },
        { name: "Portfolio", href: "/portfolio" },
        { name: "Case Studies", href: "/case-studies" },
        { name: "Get Quote", href: "/quote" }
      ],
    },
  ];

  // Social media links
  const socialLinks = [
    { 
      name: "LinkedIn", 
      href: "#",
      icon: (
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
          <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
        </svg>
      )
    },
    { 
      name: "Twitter", 
      href: "#",
      icon: (
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
          <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/>
        </svg>
      )
    },
    { 
      name: "Instagram", 
      href: "#",
      icon: (
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12.017 0C5.396 0 .029 5.367.029 11.987c0 6.62 5.367 11.987 11.988 11.987s11.987-5.367 11.987-11.987C24.014 5.367 18.648.001 12.017.001zM8.449 16.988c-1.297 0-2.348-1.051-2.348-2.348s1.051-2.348 2.348-2.348 2.348 1.051 2.348 2.348-1.051 2.348-2.348 2.348zm7.718 0c-1.297 0-2.348-1.051-2.348-2.348s1.051-2.348 2.348-2.348 2.348 1.051 2.348 2.348-1.051 2.348-2.348 2.348z"/>
        </svg>
      )
    },
    { 
      name: "Dribbble", 
      href: "#",
      icon: (
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 0C5.374 0 0 5.374 0 12s5.374 12 12 12 12-5.374 12-12S18.626 0 12 0zm7.568 5.302c1.4 1.5 2.252 3.5 2.313 5.717-.653-.12-7.312-1.171-11.064-.487-.174-.4-.348-.817-.544-1.245 3.438-1.413 6.489-3.729 6.753-3.985h.542zm-1.043-1.07C17.982 4.788 15.02 6.48 11.715 7.688c-1.628-2.977-3.4-5.437-3.66-5.874 1.214-.456 2.51-.814 3.878-.814 2.735 0 5.23 1.1 7.24 2.93zM6.825 2.65c.272.456 2.069 2.916 3.692 5.95-4.638 1.24-8.707 1.214-9.142 1.214-.6-3.24 2.142-6.075 5.45-7.164zm-4.912 8.308c.488 0 5.56.043 10.658-1.456.174.348.326.717.456 1.087-1.37.37-2.65.87-3.936 1.413-3.936 1.587-6.98 4.24-7.613 4.24-.435 0-.87-.043-1.283-.087.435-2.436 1.718-4.632 1.718-5.197zm2.827 8.35c.544-.435 3.045-2.697 6.502-4.24 1.24-.544 2.48-.978 3.72-1.37.935 2.414 1.326 4.436 1.413 5.002C14.29 19.59 11.756 20 9.14 20c-1.283 0-2.523-.174-3.4-.522zm8.88-.87c-.087-.435-.435-2.24-1.283-4.588 3.458-.544 6.48.348 6.872.457-.457 2.1-1.848 3.915-3.697 5.067z"/>
        </svg>
      )
    }
  ];

  return (
    <footer className="relative w-full bg-[#00020F] border-t border-[#194EFF]/20">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-0 right-1/4 w-96 h-96 bg-[#194EFF]/3 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-1/4 w-80 h-80 bg-[#194EFF]/5 rounded-full blur-3xl"></div>
      </div>

      {/* Main Footer Content */}
      <div className="relative max-w-7xl mx-auto px-6 py-16">
        {/* Top Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Logo and Description */}
          <div className="lg:col-span-1">
            <FadeIn delay={0.1} direction="up">
              <FloatingElement intensity={2} duration={4}>
                <div className="flex items-center gap-3 mb-6 group cursor-pointer">
                  <div className="w-12 h-12 bg-gradient-to-br from-[#194EFF] to-[#194EFF]/80 rounded-xl flex items-center justify-center shadow-lg shadow-[#194EFF]/25 group-hover:shadow-[#194EFF]/40 transition-all duration-300">
                    <span className="text-white font-bold text-xl">T</span>
                  </div>
                  <div className="flex flex-col">
                    <span className="font-bold text-white text-xl group-hover:text-[#194EFF] transition-colors duration-300">TechFlow</span>
                    <span className="text-[#194EFF] text-xs font-medium">Digital Agency</span>
                  </div>
                </div>
              </FloatingElement>
              
              <p className="text-white/60 text-base leading-relaxed mb-6">
                Creating exceptional digital experiences through innovative web development, design, and marketing solutions that help brands thrive online.
              </p>
              
              <div className="space-y-3">
                <div className="flex items-center gap-3 text-white/80 hover:text-[#194EFF] transition-colors duration-300 cursor-pointer">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                  <span className="text-sm">hello@techflow.com</span>
                </div>
                
                <div className="flex items-center gap-3 text-white/80 hover:text-[#194EFF] transition-colors duration-300 cursor-pointer">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                  <span className="text-sm">+1 (555) 123-4567</span>
                </div>
              </div>
            </FadeIn>
          </div>

          {/* Navigation Links */}
          {footerNavigation.map((category, index) => (
            <div key={index} className="space-y-4">
              <FadeIn delay={0.2 + index * 0.1} direction="up">
                <h4 className="font-semibold text-white text-lg mb-4 relative">
                  {category.title}
                  <div className="absolute bottom-0 left-0 w-8 h-0.5 bg-[#194EFF] rounded-full"></div>
                </h4>
                <div className="space-y-3">
                  {category.links.map((link, linkIndex) => (
                    <a
                      key={linkIndex}
                      href={link.href}
                      className="block text-white/60 hover:text-[#194EFF] text-sm transition-colors duration-300 hover:translate-x-1 transform"
                    >
                      {link.name}
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
            <div className="bg-[#194EFF]/5 border border-[#194EFF]/20 rounded-2xl p-8 backdrop-blur-xl">
              <div className="max-w-2xl mx-auto text-center">
                <h3 className="font-bold text-white text-2xl mb-3">
                  Stay Inspired & Informed
              </h3>
                <p className="text-white/60 text-base mb-6">
                  Get the latest design trends, development insights, and digital marketing tips delivered straight to your inbox.
                </p>
                <div className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
                <Input
                    className="flex-1 bg-[#00041F]/50 border border-[#194EFF]/30 text-white placeholder:text-white/40 focus:border-[#194EFF]/60 rounded-lg backdrop-blur-sm"
                    placeholder="Enter your email address"
                />
                  <GlowButton className="px-6 py-3 bg-[#194EFF] hover:bg-[#194EFF]/80 text-white font-semibold rounded-lg transition-all duration-300 whitespace-nowrap">
                    Subscribe Now
                </GlowButton>
                </div>
              </div>
            </div>
          </FadeIn>
        </div>

        {/* Bottom Section */}
        <div className="flex flex-col lg:flex-row items-center justify-between pt-8 border-t border-[#194EFF]/20 gap-6">
          <FadeIn delay={0.6} direction="up">
            <div className="text-center lg:text-left">
              <p className="text-white/60 text-sm mb-2">
                © 2024 TechFlow Digital Agency. All rights reserved.
            </p>
              <div className="flex flex-wrap items-center gap-4 text-white/40 text-xs">
                <a href="/privacy" className="hover:text-[#194EFF] transition-colors duration-300">Privacy Policy</a>
                <span>•</span>
                <a href="/terms" className="hover:text-[#194EFF] transition-colors duration-300">Terms of Service</a>
                <span>•</span>
                <a href="/cookies" className="hover:text-[#194EFF] transition-colors duration-300">Cookie Policy</a>
              </div>
            </div>
          </FadeIn>

          <FadeIn delay={0.7} direction="up">
            <div className="flex items-center gap-1">
              <span className="text-white/40 text-sm mr-3">Follow us:</span>
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  aria-label={social.name}
                  className="w-10 h-10 bg-[#194EFF]/10 hover:bg-[#194EFF]/20 border border-[#194EFF]/20 hover:border-[#194EFF]/40 rounded-lg flex items-center justify-center transition-all duration-300 group text-white/60 hover:text-[#194EFF] hover:scale-110"
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </FadeIn>
        </div>
      </div>
    </footer>
  );
}; 