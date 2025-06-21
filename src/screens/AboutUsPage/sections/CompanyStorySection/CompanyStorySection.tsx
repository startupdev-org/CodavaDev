import React from "react";
import { 
  FadeIn, 
  FloatingElement, 
  GlowButton,
  MatrixText
} from "../../../../components/ui/animated-elements";

export const CompanyStorySection = (): JSX.Element => {
  return (
    <section className="w-full h-[748px] flex justify-center items-center relative px-5 sm:px-10 md:px-16 lg:px-20 xl:px-[140px]">
      {/* Background Image */}
      <img 
        alt="TechFlow Office" 
        loading="lazy" 
        width="1540" 
        height="1000" 
        decoding="async" 
        className="absolute top-0 left-0 w-full h-full object-cover -z-30" 
        src="https://images.pexels.com/photos/3183150/pexels-photo-3183150.jpeg?auto=compress&cs=tinysrgb&w=1920"
      />
      
      {/* Backdrop Blur Overlay */}
      <div className="absolute top-0 left-0 w-full h-full -z-20 backdrop-blur-[50px]"></div>
      
      {/* Main Content Container */}
      <FadeIn delay={0.2} direction="up">
        <div className="container h-[500px] rounded-3xl shadow-[0px_0px_60px_0px_rgba(0,0,0,0.2)] overflow-hidden relative flex justify-center items-center flex-col gap-3 px-5 sm:px-20 md:px-[100px] lg:px-[120px] xl:px-[142px]">
          {/* Background Image for Container */}
          <img 
            alt="TechFlow Office" 
            loading="lazy" 
            width="1540" 
            height="1000" 
            decoding="async" 
            className="absolute top-0 left-0 w-full h-full object-cover -z-10 animate-pulse" 
            src="https://images.pexels.com/photos/3183150/pexels-photo-3183150.jpeg?auto=compress&cs=tinysrgb&w=1920"
          />
          
          {/* Main Title */}
          <FadeIn delay={0.4} direction="up">
            <h2 className="text-white text-center text-[7vw] sm:text-[50px] md:text-[60px] lg:text-[70px] xl:text-[80px] leading-[98px] font-semibold relative z-10">
              <MatrixText text="ABOUT US" />
            </h2>
          </FadeIn>
          
          {/* Subtitle */}
          <FadeIn delay={0.6} direction="up">
            <h2 className="text-white text-center text-[7vw] sm:text-[50px] md:text-[60px] lg:text-[70px] xl:text-[80px] leading-[98px] font-semibold relative z-10">
              <span className="text-transparent bg-gradient-to-r from-purple-400 via-white to-purple-400 bg-clip-text animate-gradient-shift bg-[length:200%_auto]">
                <MatrixText text="TECHFLOW" />
              </span>
            </h2>
          </FadeIn>
          
          {/* Description */}
          <FadeIn delay={0.8} direction="up">
            <p className="font-normal text-lg leading-6 text-white text-center max-w-[800px] relative z-10">
              We've been revolutionizing businesses with cutting-edge technology solutions for over eight years. Our journey is fueled by innovation, adaptability, and a commitment to staying ahead of industry trends. With a passion for digital transformation, we help clients strengthen their online presence and pave the way for long-term success.
            </p>
          </FadeIn>
          
          {/* Call to Action Button */}
          <FadeIn delay={1.0} direction="left">
            <div className="w-auto h-auto p-3 flex gap-2 items-center rounded-ss-[20px] backdrop-blur-[20px] absolute bottom-0 right-0 relative z-10">
              <GlowButton className="w-[130px] h-10 lg:w-[170px] lg:h-[47px] xl:w-[189px] xl:h-[57px] rounded-full flex justify-center items-center bg-purple-60 hover:bg-purple-70 text-white font-bold text-sm xl:text-[16px] leading-5 transition-all duration-300 shadow-lg hover:shadow-purple-600/25">
                Schedule a meeting
              </GlowButton>
              
              {/* Large Arrow Icon */}
              <span className="size-[57px] rounded-full bg-purple-60 hidden xl:flex justify-center items-center shadow-lg hover:shadow-purple-600/25 transition-all duration-300">
                <svg width="15" height="15" viewBox="0 0 26 26" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M26 9.29832e-06V19.4641H23.8453V3.66299L1.50829 26L0 24.4199L22.2652 2.15471H6.46409L6.46409 9.29832e-06H26Z" fill="white"></path>
                </svg>
              </span>
              
              {/* Small Arrow Icon */}
              <span className="size-10 rounded-full bg-purple-60 flex xl:hidden justify-center items-center shadow-lg hover:shadow-purple-600/25 transition-all duration-300">
                <svg width="15" height="15" viewBox="0 0 26 26" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M26 9.29832e-06V19.4641H23.8453V3.66299L1.50829 26L0 24.4199L22.2652 2.15471H6.46409L6.46409 9.29832e-06H26Z" fill="white"></path>
                </svg>
              </span>
            </div>
          </FadeIn>
        </div>
      </FadeIn>
      
      {/* Bottom Gradient Overlay */}
      <div className="absolute h-[60px] w-full bottom-0 bg-gradient-to-t from-black to-transparent pointer-events-none"></div>
      
      {/* Floating Elements */}
      <FloatingElement intensity={8} duration={4}>
        <div className="absolute top-20 left-20 w-[68px] h-[30px] opacity-50">
          <div className="bg-[url(/group-4.png)] absolute w-[30px] h-[30px] top-0 left-0 bg-[100%_100%] filter hue-rotate-[280deg] brightness-125" />
          <div className="bg-[url(/group-5.png)] absolute w-[18px] h-[18px] top-1.5 left-9 bg-[100%_100%] filter hue-rotate-[280deg] brightness-125" />
          <div className="bg-[url(/group-6.png)] absolute w-2 h-2 top-[11px] left-[60px] bg-[100%_100%] filter hue-rotate-[280deg] brightness-125" />
        </div>
      </FloatingElement>
      
      <FloatingElement intensity={6} duration={5}>
        <div className="absolute top-40 right-20 w-[68px] h-[30px] opacity-50">
          <div className="bg-[url(/group-4.png)] absolute w-[30px] h-[30px] top-0 left-0 bg-[100%_100%] filter hue-rotate-[280deg] brightness-125" />
          <div className="bg-[url(/group-5.png)] absolute w-[18px] h-[18px] top-1.5 left-9 bg-[100%_100%] filter hue-rotate-[280deg] brightness-125" />
          <div className="bg-[url(/group-6.png)] absolute w-2 h-2 top-[11px] left-[60px] bg-[100%_100%] filter hue-rotate-[280deg] brightness-125" />
        </div>
      </FloatingElement>
    </section>
  );
}; 