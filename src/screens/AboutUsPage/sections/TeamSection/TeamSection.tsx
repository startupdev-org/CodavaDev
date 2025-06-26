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
    <section id="team-leadership" className="flex flex-col w-full max-w-[1596px] items-center gap-10 mx-auto relative overflow-hidden py-20 sm:py-28 md:py-32 lg:py-40">
      {/* Section Header */}
      <FadeIn delay={0.2} direction="up" >
        <div className="flex flex-col items-center gap-4 relative w-full max-w-[800px] mx-auto text-center px-4">
          <div className="flex items-center gap-3 justify-center">
            <MatrixText text="Our Team" />
          </div>
          
          <h2 className="font-semibold text-transparent bg-gradient-to-r from-purple-400 via-white to-purple-400 bg-clip-text text-3xl sm:text-4xl md:text-5xl tracking-[0] leading-tight md:leading-[72px] animate-gradient-shift bg-[length:200%_auto]">
            <MatrixText text="Meet Our Leadership" />
          </h2>
          
          <p className="text-center font-medium text-grey-60 tracking-[0] text-base sm:text-lg md:text-xl leading-[28px] md:leading-[32px] [font-family:'Urbanist',Helvetica] max-w-[600px] mx-auto">
            Our experienced leadership team brings together diverse expertise to drive innovation and deliver exceptional results for our clients.
          </p>
        </div>
      </FadeIn>

      {/* Team Grid */}
      <div className="flex flex-col items-center justify-center gap-6 relative w-full px-4 mb-10">
        <StaggerContainer staggerDelay={0.1}>
          {/* 
            Fix: 
            - Use grid instead of flex for the team cards on large screens.
            - Center the grid and set a max width to prevent cards from overlapping or being too close.
            - Remove negative margin on large screens.
          */}
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
                  <Card className="w-full max-w-[350px] sm:max-w-[320px] md:max-w-[360px] lg:max-w-[400px] bg-gradient-to-br from-grey-08 to-grey-10 rounded-xl border border-solid border-purple-60/30 hover:border-purple-60/60 transition-all duration-500 shadow-lg shadow-purple-600/10 hover:shadow-purple-600/25 backdrop-blur-sm group relative overflow-hidden flex flex-col items-center">
                    <CardContent className="flex flex-col items-center gap-6 p-6 sm:p-7 md:p-8 relative z-10 w-full">
                      {/* Profile Image */}
                      <div className="flex flex-col items-center gap-4 w-full">
                        <FloatingElement intensity={5} duration={3}>
                          <Avatar className="w-16 h-16 sm:w-20 sm:h-20 rounded-full overflow-hidden border-2 border-purple-60/30 group-hover:border-purple-60/50 transition-colors duration-300 shadow-lg shadow-purple-600/20">
                            <img
                              className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                              alt={`${member.name} profile`}
                              src={member.image}
                            />
                          </Avatar>
                        </FloatingElement>
                        
                        <div className="flex flex-col items-center gap-1 w-full">
                          <h3 className="font-semibold text-white text-lg sm:text-xl [font-family:'Urbanist',Helvetica] group-hover:text-purple-200 transition-colors duration-300 text-center w-full">
                            <MatrixText text={member.name} />
                          </h3>
                          <p className="font-medium text-purple-60 text-sm sm:text-base [font-family:'Urbanist',Helvetica] text-center w-full">
                            {member.role}
                          </p>
                        </div>
                      </div>

                      {/* Description */}
                      <p className="font-medium text-grey-60 text-sm sm:text-base leading-[22px] sm:leading-[24px] [font-family:'Urbanist',Helvetica] group-hover:text-grey-40 transition-colors duration-300 text-center w-full">
                        {member.description}
                      </p>

                      {/* Expertise Tags */}
                      <div className="flex flex-wrap items-center justify-center gap-2 w-full">
                        {member.expertise.map((skill, skillIndex) => (
                          <div
                            key={skillIndex}
                            className="inline-flex items-center px-2 py-1 sm:px-3 bg-purple-60/20 rounded-full border border-purple-60/30 group-hover:border-purple-60/50 transition-all duration-300"
                          >
                            <span className="font-medium text-purple-200 text-xs sm:text-sm [font-family:'Urbanist',Helvetica] group-hover:text-purple-100 transition-colors duration-300">
                              {skill}
                            </span>
                          </div>
                        ))}
                      </div>

                      {/* Social Links */}
                      <div className="flex items-center justify-center gap-3 w-full pt-2">
                        <GlowButton className="p-2 h-auto rounded-lg bg-gradient-to-r from-grey-10 to-grey-08 border border-solid border-purple-60/30 hover:border-purple-60/50 hover:shadow-lg hover:shadow-purple-600/25 transition-all duration-300 backdrop-blur-sm">
                          <svg className="w-5 h-5 text-purple-200 hover:text-white transition-colors duration-300" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                          </svg>
                        </GlowButton>
                        
                        <GlowButton className="p-2 h-auto rounded-lg bg-gradient-to-r from-grey-10 to-grey-08 border border-solid border-purple-60/30 hover:border-purple-60/50 hover:shadow-lg hover:shadow-purple-600/25 transition-all duration-300 backdrop-blur-sm">
                          <svg className="w-5 h-5 text-purple-200 hover:text-white transition-colors duration-300" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/>
                          </svg>
                        </GlowButton>
                      </div>
                    </CardContent>
                    
                    {/* Background Effects */}
                    <div className="absolute inset-0 bg-gradient-to-br from-purple-900/10 via-transparent to-purple-600/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                    <div className="absolute inset-0 bg-digital-grid bg-[size:30px_30px] opacity-0 group-hover:opacity-10 transition-opacity duration-500" />
                  </Card>
                </ParallaxElement>
              </StaggerItem>
            ))}
          </div>
        </StaggerContainer>

        {/* Call to Action */}
        {/* <FadeIn delay={1.0} direction="up">
          <div className="flex flex-col items-center gap-6 w-full pt-40">
            <div className="text-center">
              <h3 className="font-semibold text-white text-2xl [font-family:'Urbanist',Helvetica] mb-2">
                Join Our Growing Team
              </h3>
              <p className="font-medium text-grey-60 text-lg [font-family:'Urbanist',Helvetica]">
                We're always looking for talented individuals who share our passion for innovation
              </p>
            </div>
            
            <div className="flex items-center gap-4">
              <GlowButton className="px-8 py-4 h-auto bg-gradient-to-r from-purple-60 to-purple-70 rounded-[10px] border border-solid border-purple-60 hover:border-purple-75 hover:shadow-lg hover:shadow-purple-600/25 transition-all duration-300">
                <span className="[font-family:'Urbanist',Helvetica] font-medium text-white text-lg tracking-[0] leading-[27px]">
                  View Open Positions
                </span>
              </GlowButton>
              
              <GlowButton className="px-8 py-4 h-auto bg-gradient-to-r from-grey-10 to-grey-08 rounded-[10px] border border-solid border-purple-60/50 hover:border-purple-60 hover:shadow-lg hover:shadow-purple-600/25 transition-all duration-300 backdrop-blur-sm">
                <span className="[font-family:'Urbanist',Helvetica] font-medium text-purple-200 hover:text-white text-lg tracking-[0] leading-[27px] transition-colors duration-300">
                  Contact Us
                </span>
              </GlowButton>
            </div>
          </div>
        </FadeIn> */}
      </div>
    </section>
  );
}; 