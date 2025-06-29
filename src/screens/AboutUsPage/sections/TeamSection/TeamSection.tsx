import React from "react";
import { Avatar } from "../../../../components/ui/avatar";
import { Card, CardContent } from "../../../../components/ui/card";
import { 
  FadeIn, 
  StaggerContainer, 
  StaggerItem, 
  FloatingElement, 
  GlowButton,
  ParallaxElement,
  MatrixText
} from "../../../../components/ui/animated-elements";

export const TeamSection = (): JSX.Element => {
  // Team members data
  const teamMembers = [
    {
      name: "Marius Carchilan",
      role: "CEO",
      description: "Visionary leader with 15+ years in technology and business transformation",
      image: "https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=300",
      linkedin: "#",
      twitter: "#",
      siteUrl: "#",
      expertise: ["Strategic Leadership", "Digital Transformation", "Business Growth"]
    },
    {
      name: "Bors Bogdan",
      role: "CEO",
      description: "Visionary leader with 15+ years in technology and business transformation",
      image: "https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=300",
      linkedin: "#",
      twitter: "#",
      siteUrl: "https://dowody.dev/",
      expertise: ["Strategic Leadership", "Digital Transformation", "Business Growth"]
    }
  ];

  return (
    <section id="team-leadership" className="relative w-full py-20 sm:py-28 md:py-32 lg:py-40 overflow-hidden">
      <div className="max-w-[1600px] mx-auto px-6 w-full">
        {/* Section Header */}
        <FadeIn delay={0.2} direction="up" >
          <div className="flex flex-col items-center gap-6 relative w-full max-w-[800px] mx-auto text-center mb-16">
            <h2 className="font-semibold text-transparent bg-gradient-to-r from-[#194EFF] via-white to-[#194EFF] bg-clip-text text-3xl sm:text-4xl md:text-5xl tracking-[0] leading-tight md:leading-[72px] animate-gradient-shift bg-[length:200%_auto]">
              <MatrixText text="Meet Our Leadership" />
            </h2>
            <p className="text-center font-medium text-white/80 tracking-[0] text-base sm:text-lg md:text-xl leading-[28px] md:leading-[32px] max-w-[600px] mx-auto">
              Our experienced leadership team brings together diverse expertise to drive innovation and deliver exceptional results for our clients.
            </p>
          </div>
        </FadeIn>

        {/* Team Grid */}
        <div className="flex flex-col items-center justify-center gap-6 relative w-full mb-10">
          <StaggerContainer staggerDelay={0.1}>
            <div
              className="
                w-full
                grid
                grid-cols-1
                sm:grid-cols-2
                gap-8
                justify-center
                items-start
                max-w-3xl
                mx-auto
                sm:mt-0
              "
            >
              {teamMembers.map((member, index) => (
                <StaggerItem key={index}>
                  <ParallaxElement speed={0.05 * (index + 1)}>
                    <Card className="w-full max-w-[350px] sm:max-w-[320px] md:max-w-[360px] lg:max-w-[400px] bg-white/[0.03] border border-[#194EFF]/20 rounded-2xl backdrop-blur-xl shadow-2xl hover:shadow-[#194EFF]/10 transition-all duration-500 group relative overflow-hidden flex flex-col items-center">
                      <CardContent className="flex flex-col items-center gap-6 p-6 sm:p-7 md:p-8 relative z-10 w-full">
                        {/* Profile Image */}
                        <div className="flex flex-col items-center gap-4 w-full">
                          <FloatingElement intensity={5} duration={3}>
                            <Avatar className="w-16 h-16 sm:w-20 sm:h-20 rounded-full overflow-hidden border-2 border-[#194EFF]/30 group-hover:border-[#194EFF]/50 transition-colors duration-300 shadow-lg shadow-[#194EFF]/20">
                              <img
                                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                                alt={`${member.name} profile`}
                                src={member.image}
                              />
                            </Avatar>
                          </FloatingElement>
                          
                          <div className="flex flex-col items-center gap-1 w-full">
                            <h3 className="font-semibold text-white text-lg sm:text-xl group-hover:text-[#194EFF] transition-colors duration-300 text-center w-full">
                              <MatrixText text={member.name} />
                            </h3>
                            <p className="font-medium text-[#194EFF] text-sm sm:text-base text-center w-full">
                              {member.role}
                            </p>
                          </div>
                        </div>

                        {/* Description */}
                        <p className="font-medium text-white/70 text-sm sm:text-base leading-[22px] sm:leading-[24px] group-hover:text-white/90 transition-colors duration-300 text-center w-full">
                          {member.description}
                        </p>

                        {/* Expertise Tags */}
                        <div className="flex flex-wrap items-center justify-center gap-2 w-full">
                          {member.expertise.map((skill, skillIndex) => (
                            <div
                              key={skillIndex}
                              className="inline-flex items-center px-2 py-1 sm:px-3 bg-[#194EFF]/20 rounded-full border border-[#194EFF]/30 group-hover:border-[#194EFF]/50 transition-all duration-300"
                            >
                              <span className="font-medium text-[#194EFF] text-xs sm:text-sm group-hover:text-white transition-colors duration-300">
                                {skill}
                              </span>
                            </div>
                          ))}
                        </div>

                        {/* Social Links */}
                        <div className="flex items-center justify-center gap-3 w-full pt-2">
                          <GlowButton className="p-2 h-auto rounded-lg bg-white/[0.03] border border-[#194EFF]/30 hover:border-[#194EFF]/50 hover:shadow-lg hover:shadow-[#194EFF]/25 transition-all duration-300 backdrop-blur-sm">
                            <svg className="w-5 h-5 text-[#194EFF] hover:text-white transition-colors duration-300" fill="currentColor" viewBox="0 0 24 24">
                              <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                            </svg>
                          </GlowButton>
                          
                          <GlowButton className="p-2 h-auto rounded-lg bg-white/[0.03] border border-[#194EFF]/30 hover:border-[#194EFF]/50 hover:shadow-lg hover:shadow-[#194EFF]/25 transition-all duration-300 backdrop-blur-sm">
                            <svg className="w-5 h-5 text-[#194EFF] hover:text-white transition-colors duration-300" fill="currentColor" viewBox="0 0 24 24">
                              <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/>
                            </svg>
                          </GlowButton>
                        </div>
                      </CardContent>
                      
                      {/* Background Effects */}
                      <div className="absolute inset-0 bg-gradient-to-br from-[#194EFF]/10 via-transparent to-[#194EFF]/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                    </Card>
                  </ParallaxElement>
                </StaggerItem>
              ))}
            </div>
          </StaggerContainer>
        </div>
      </div>
    </section>
  );
}; 