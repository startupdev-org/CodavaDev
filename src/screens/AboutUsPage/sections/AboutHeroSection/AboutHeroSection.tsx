import React, { useEffect, useState } from "react";
import { Button } from "../../../../components/ui/button";
import { Card, CardContent } from "../../../../components/ui/card";
import { Badge } from "../../../../components/ui/badge";
import { Globe } from "../../../../components/ui/globe";
import {
  FadeIn,
  StaggerContainer,
  StaggerItem,
  TypewriterText,
  FloatingElement,
  GlowButton,
  ParallaxElement,
  MatrixText,
} from "../../../../components/ui/animated-elements";

const typingTexts = [
  "Through Technology",
  "With Innovation",
  "For The Future",
  "Beyond Limits",
];

function scrollToTeamLeadership() {
  const el = document.getElementById("team-leadership");
  if (el) {
    const yOffset = -80;
    const y = el.getBoundingClientRect().top + window.pageYOffset + yOffset;
    window.scrollTo({
      top: y,
      behavior: "smooth"
    });
  }
}

const PatternGraphic = ({ className }: { className?: string }) => (
  <div
    className={`w-[320px] h-[180px] md:w-[450px] md:h-[250px] flex items-center justify-center ${className}`}
  >
    <div className="w-full h-full flex gap-2 md:gap-3 -skew-x-12 transform-gpu group">
      {[...Array(5)].map((_, i) => (
        <div
          key={i}
          className="w-1/5 h-full rounded-3xl bg-cover bg-center transition-all duration-500 group-hover:scale-105"
          style={{
            backgroundImage: `url(https://images.pexels.com/photos/1252890/pexels-photo-1252890.jpeg)`,
          }}
        />
      ))}
    </div>
  </div>
);

export const AboutHeroSection = (): JSX.Element => {
  const [displayedText, setDisplayedText] = useState("");
  const [textIndex, setTextIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentText = typingTexts[textIndex];
    let typingSpeed = isDeleting ? 70 : 90;

    if (!isDeleting && charIndex === currentText.length) {
      typingSpeed = 1800;
    } else if (isDeleting && charIndex === 0) {
      typingSpeed = 500;
    }

    const timeout = setTimeout(() => {
      if (!isDeleting && charIndex < currentText.length) {
        setDisplayedText(currentText.substring(0, charIndex + 1));
        setCharIndex(charIndex + 1);
      } else if (isDeleting && charIndex > 0) {
        setDisplayedText(currentText.substring(0, charIndex - 1));
        setCharIndex(charIndex - 1);
      } else if (!isDeleting && charIndex === currentText.length) {
        setIsDeleting(true);
      } else if (isDeleting && charIndex === 0) {
        setIsDeleting(false);
        setTextIndex((textIndex + 1) % typingTexts.length);
      }
    }, typingSpeed);

    return () => clearTimeout(timeout);
  }, [charIndex, isDeleting, textIndex]);

  // Company stats data
  const companyStats = [
    {
      value: "10+",
      label: "Projects Delivered",
    },
    {
      value: "100%",
      label: "Client Satisfaction",
    },
    {
      value: "24/7",
      label: "Support Available",
    },
  ];

  // Core values data
  const coreValues = [
    {
      title: "Innovation & Creativity",
      description: "We are driven by a passion for fresh ideas and groundbreaking solutions. Our team constantly explores new technologies and approaches to ensure we deliver unique, cutting-edge results.",
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
        </svg>
      ),
    },
    {
      title: "Customer-Centric Focus",
      description: "We prioritize our clients in every aspect of our work. By truly understanding their needs, we create tailored solutions that not only meet but exceed their expectations.",
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
        </svg>
      ),
    },
    {
      title: "Integrity & Transparency",
      description: "We value honesty and open communication in all our interactions. By adhering to ethical practices and providing clear, transparent processes, we build trust with our clients.",
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
        </svg>
      ),
    },
    {
      title: "Excellence in Execution",
      description: "We strive for perfection in every project, delivering high-quality solutions that meet deadlines and stay within budget. Our focus is on ensuring optimal results.",
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
        </svg>
      ),
    },
    {
      title: "Collaboration & Teamwork",
      description: "We believe that great ideas come from working together. By fostering a collaborative environment, both internally and with our clients, we encourage creativity.",
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197m13.5-9a2.5 2.5 0 11-5 0 2.5 2.5 0 015 0z" />
        </svg>
      ),
    },
    {
      title: "Agility & Adaptability",
      description: "We embrace change and remain flexible in an ever-evolving industry. Our ability to quickly respond to new challenges ensures our solutions stay relevant.",
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
      ),
    },
  ];

  return (
    <section className="relative w-full min-h-screen pt-28 bg-gradient-to-br from-[#00020F] via-[#00041F] to-[#194EFF]/20 overflow-hidden flex items-center">
      {/* Enhanced Background Elements */}
      <div className="absolute inset-0">
        {/* Main gradient overlays */}
        <div className="absolute top-20 right-0 w-[500px] h-[500px] bg-[#194EFF]/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-[#194EFF]/15 rounded-full blur-3xl animate-pulse" style={{animationDelay: '2s'}}></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-r from-[#194EFF]/5 via-transparent to-[#194EFF]/8 rounded-full blur-3xl animate-pulse" style={{animationDelay: '1s'}}></div>
        
        {/* Dynamic floating particles */}
        <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-[#194EFF]/60 rounded-full animate-bounce" style={{animationDelay: '0s', animationDuration: '3s'}}></div>
        <div className="absolute top-3/4 left-1/3 w-1 h-1 bg-white/40 rounded-full animate-bounce" style={{animationDelay: '1s', animationDuration: '4s'}}></div>
        <div className="absolute top-1/3 right-1/4 w-1.5 h-1.5 bg-[#194EFF]/50 rounded-full animate-bounce" style={{animationDelay: '2s', animationDuration: '5s'}}></div>
        <div className="absolute top-2/3 left-1/5 w-1 h-1 bg-[#194EFF]/50 rounded-full animate-ping" style={{animationDelay: '0.5s'}}></div>
        <div className="absolute top-1/5 right-1/3 w-1.5 h-1.5 bg-white/30 rounded-full animate-ping" style={{animationDelay: '1.5s'}}></div>
        <div className="absolute bottom-1/4 right-1/5 w-1 h-1 bg-[#194EFF]/40 rounded-full animate-ping" style={{animationDelay: '2.5s'}}></div>
        
        {/* Subtle grid pattern */}
        <div className="absolute inset-0 opacity-[0.02]">
          <div className="w-full h-full" style={{
            backgroundImage: `radial-gradient(circle at 1px 1px, white 1px, transparent 0)`,
            backgroundSize: '50px 50px'
          }}></div>
        </div>
      </div>

      <div className="relative max-w-[1600px] mx-auto px-6 w-full">
        {/* Main Hero Content */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-20 items-center">
          {/* Left Content - Takes up 5 columns */}
          <div className="lg:col-span-5 space-y-8 z-10">
            <FadeIn delay={0.2} direction="up">
              <div className="space-y-8 mt-16">
                <h1 className="text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold leading-[1.2] text-white ">
                  <span className="inline-block hover:scale-105 transition-transform duration-300">Transforming</span>{" "}
                  <span className="inline-block hover:scale-105 transition-transform duration-300">Businesses</span>
                  <br />
                  <span className="text-transparent bg-gradient-to-r from-[#194EFF] via-blue-400 to-[#194EFF] bg-clip-text animate-pulse inline-block hover:scale-105 transition-all duration-300">
                    {displayedText}
                  </span>
                </h1>
              </div>
            </FadeIn>

            <FadeIn delay={0.3} direction="up">
              <p className="text-lg md:text-xl text-white/80 leading-relaxed max-w-2xl font-light hover:text-white/90 transition-colors duration-300">
                We are a forward-thinking IT solutions company dedicated to empowering businesses with innovative technology solutions and drive digital transformation and create lasting value for our clients.
              </p>
            </FadeIn>

            <FadeIn delay={0.4} direction="up">
              <div className="flex flex-col sm:flex-row gap-4 pt-4">
                <GlowButton className="group px-8 py-4 bg-[#194EFF] hover:bg-[#194EFF]/90 rounded-xl font-semibold text-lg transition-all duration-300 flex items-center justify-center gap-2 shadow-2xl hover:shadow-[#194EFF]/30 hover:scale-105 transform relative overflow-hidden text-white">
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
                  <span className="relative z-10">Our Story</span>
                  <svg className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1 relative z-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                  </svg>
                </GlowButton>

                <GlowButton 
                  className="group px-8 py-4 bg-white/[0.03] border border-[#194EFF]/30 hover:border-[#194EFF]/50 hover:bg-white/[0.05] rounded-xl font-semibold text-white text-lg transition-all duration-300 backdrop-blur-sm hover:scale-105 transform shadow-lg relative overflow-hidden"
                  onClick={scrollToTeamLeadership}
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-[#194EFF]/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
                  <span className="relative z-10">Meet Our Team</span>
                </GlowButton>
              </div>
            </FadeIn>
          </div>

          {/* Right Side - Interactive Globe - Takes up 7 columns */}
          <div className="lg:col-span-7 relative flex items-center justify-center min-h-[500px]">
            <FadeIn delay={0.6} direction="left">
              <div className="relative w-full max-w-2xl mx-auto">
                {/* Interactive Globe */}
                <div className="relative w-full h-[500px] flex items-center justify-center">
                  <Globe className="w-full h-full" />
                </div>

                {/* Orbiting Ring around Globe */}
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[450px] h-[450px] border border-[#194EFF]/10 rounded-full animate-spin" style={{animationDuration: '60s'}}></div>
              </div>
            </FadeIn>
          </div>
        </div>

        {/* Enhanced Stats Section */}
        <div className="mt-16">
          <FadeIn delay={0.7} direction="up">
            <div className="bg-white/[0.03] border border-[#194EFF]/20 rounded-3xl p-8 lg:p-10 backdrop-blur-xl shadow-2xl hover:shadow-[#194EFF]/10 transition-all duration-500 group relative overflow-hidden">
              {/* Stats background animation */}
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-[#194EFF]/5 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-2000 rounded-3xl"></div>
              
              <StaggerContainer staggerDelay={0.1}>
                <div className="grid grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-12 relative z-10">
                  {companyStats.map((stat, index) => (
                    <StaggerItem key={index}>
                      <div className="text-center group hover:scale-105 transition-transform duration-300 cursor-pointer">
                        <div className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-2 bg-gradient-to-r from-white to-[#194EFF] bg-clip-text text-transparent group-hover:from-[#194EFF] group-hover:to-white transition-all duration-300">
                          {stat.value}
                        </div>
                        <div className="text-white/60 text-sm md:text-base font-medium group-hover:text-white/80 transition-colors duration-300">
                          {stat.label}
                        </div>
                        {/* Subtle underline effect */}
                        <div className="w-0 h-0.5 bg-gradient-to-r from-[#194EFF] to-white mx-auto mt-3 group-hover:w-full transition-all duration-500"></div>
                      </div>
                    </StaggerItem>
                  ))}
                </div>
              </StaggerContainer>
            </div>
          </FadeIn>
        </div>

        {/* Mission & Vision Sections */}
        <div className="mt-20 space-y-20">
          {/* Our Mission */}
          <FadeIn direction="right" delay={0.2}>
            <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
              <div className="lg:w-1/2 space-y-6">
                <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white">
                  Our <span className="text-transparent bg-gradient-to-r from-[#194EFF] to-blue-400 bg-clip-text">Mission</span>
                </h2>
                <p className="text-lg md:text-xl text-white/80 leading-relaxed">
                  To empower businesses with innovative, high-quality software solutions that drive growth and efficiency. We are committed to leveraging cutting-edge technology, creative problem-solving, and industry best practices to deliver scalable and future-ready digital solutions.
                </p>
              </div>
              <div className="lg:w-1/2">
                <Card className="bg-white/[0.03] border border-[#194EFF]/20 rounded-2xl p-8 backdrop-blur-xl shadow-2xl hover:shadow-[#194EFF]/10 transition-all duration-500 group relative overflow-hidden">
                  <CardContent className="p-0">
                    <div className="text-center space-y-4">
                      <div className="w-16 h-16 bg-gradient-to-br from-[#194EFF]/20 to-[#194EFF]/10 rounded-2xl flex items-center justify-center mx-auto group-hover:scale-110 transition-transform duration-300">
                        <svg className="w-8 h-8 text-[#194EFF]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                        </svg>
                      </div>
                      <h3 className="text-2xl font-bold text-white">Empowering Growth</h3>
                      <p className="text-white/70">Through innovative technology solutions that transform businesses and drive success.</p>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </FadeIn>

          {/* Our Vision */}
          <FadeIn direction="left" delay={0.2}>
            <div className="flex flex-col lg:flex-row-reverse items-center gap-12 lg:gap-20">
              <div className="lg:w-1/2 space-y-6">
                <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white">
                  Our <span className="text-transparent bg-gradient-to-r from-[#194EFF] to-blue-400 bg-clip-text">Vision</span>
                </h2>
                <p className="text-lg md:text-xl text-white/80 leading-relaxed">
                  Our vision is to be a global leader in software development, driving digital transformation and innovation across industries. We strive to create cutting-edge solutions that empower businesses, enhance user experiences, and set new standards in technology.
                </p>
              </div>
              <div className="lg:w-1/2">
                <Card className="bg-white/[0.03] border border-[#194EFF]/20 rounded-2xl p-8 backdrop-blur-xl shadow-2xl hover:shadow-[#194EFF]/10 transition-all duration-500 group relative overflow-hidden">
                  <CardContent className="p-0">
                    <div className="text-center space-y-4">
                      <div className="w-16 h-16 bg-gradient-to-br from-[#194EFF]/20 to-[#194EFF]/10 rounded-2xl flex items-center justify-center mx-auto group-hover:scale-110 transition-transform duration-300">
                        <svg className="w-8 h-8 text-[#194EFF]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                        </svg>
                      </div>
                      <h3 className="text-2xl font-bold text-white">Global Innovation</h3>
                      <p className="text-white/70">Leading the future of technology with cutting-edge solutions and transformative ideas.</p>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </FadeIn>
        </div>

        {/* Core Values */}
        <div className="mt-20 mb-20">
          <FadeIn delay={0.9} direction="up">
            <div className="text-center space-y-8 mb-12">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white">
                Our <span className="text-transparent bg-gradient-to-r from-[#194EFF] to-blue-400 bg-clip-text">Values</span>
              </h2>
              <p className="text-lg md:text-xl text-white/80 max-w-3xl mx-auto">
                The principles that guide our work and define our culture of excellence and innovation.
              </p>
            </div>

            <StaggerContainer staggerDelay={0.1}>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
                {coreValues.map((value, index) => (
                  <StaggerItem key={index}>
                    <Card className="bg-white/[0.03] border border-[#194EFF]/20 rounded-2xl p-6 lg:p-8 backdrop-blur-xl shadow-2xl hover:shadow-[#194EFF]/10 transition-all duration-500 group relative overflow-hidden h-full">
                      <CardContent className="p-0 space-y-4">
                        <div className="w-12 h-12 bg-gradient-to-br from-[#194EFF]/20 to-[#194EFF]/10 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                          <div className="text-[#194EFF] group-hover:text-white transition-colors duration-300">
                            {value.icon}
                          </div>
                        </div>
                        <h3 className="text-xl font-bold text-white group-hover:text-[#194EFF] transition-colors duration-300">
                          {value.title}
                        </h3>
                        <p className="text-white/70 leading-relaxed">
                          {value.description}
                        </p>
                      </CardContent>
                    </Card>
                  </StaggerItem>
                ))}
              </div>
            </StaggerContainer>
          </FadeIn>
        </div>
      </div>
    </section>
  );
};