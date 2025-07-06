import React from "react";
import { 
  FadeIn, 
  FloatingElement, 
  GlowButton,
  MatrixText
} from "../../../../components/ui/animated-elements";

export const CompanyStorySection = (): JSX.Element => {
  return (
    <section
      className="
        w-full
        min-h-[420px] 
        h-auto
        flex
        justify-center
        items-center
        relative
        px-3
        sm:px-6
        md:px-10
        lg:px-20
        xl:px-[140px]
        -mt-20
        sm:-mt-28
        md:-mt-32
        py-10
        sm:py-16
        md:py-20
        lg:py-24
        xl:py-28
        "
    >
      {/* Background Image */}
      <img 
        alt="Codava Office" 
        loading="lazy" 
        width="1540" 
        height="1000" 
        decoding="async" 
        className="absolute top-0 left-0 w-full h-full object-cover -z-30"
        style={{ objectPosition: "center" }}
        src="https://images.pexels.com/photos/3183150/pexels-photo-3183150.jpeg?auto=compress&cs=tinysrgb&w=1920"
      />
      
      {/* Backdrop Blur Overlay */}
      <div className="absolute top-0 left-0 w-full h-full -z-20 backdrop-blur-[30px] sm:backdrop-blur-[40px] md:backdrop-blur-[50px]"></div>
      
      {/* Main Content Container */}
      <FadeIn delay={0.2} direction="up">
        <div
          className="
            w-full
            max-w-[1200px]
            rounded-2xl
            sm:rounded-3xl
            shadow-[0px_0px_40px_0px_rgba(0,0,0,0.18)]
            overflow-hidden
            relative
            flex
            flex-col
            justify-center
            items-center
            gap-4
            px-3
            sm:px-8
            md:px-16
            lg:px-[80px]
            xl:px-[120px]
            py-8
            sm:py-12
            md:py-16
            lg:py-20
            xl:py-24
            "
        >
          <FadeIn delay={0.6} direction="up">
            <h2
              className="
                text-white
                text-center
                text-[9vw]
                xs:text-[8vw]
                sm:text-[7vw]
                md:text-[50px]
                lg:text-[60px]
                xl:text-[70px]
                2xl:text-[80px]
                leading-tight
                font-semibold
                relative
                z-10
                mt-8
                sm:mt-12
                md:mt-16
                mb-4
                sm:mb-8
              "
            >
              <span className="text-transparent bg-gradient-to-r from-purple-400 via-white to-purple-400 bg-clip-text animate-gradient-shift bg-[length:200%_auto]">
                <MatrixText text="Startup Devs" />
              </span>
            </h2>
          </FadeIn>
          
          <FadeIn delay={0.8} direction="up">
            <p
              className="
                font-normal
                text-base
                sm:text-lg
                md:text-xl
                leading-relaxed
                text-white
                text-center
                max-w-[95vw]
                sm:max-w-[600px]
                md:max-w-[700px]
                lg:max-w-[800px]
                relative
                z-10
              "
            >
              Our journey is powered by innovation, adaptability, and a commitment to staying ahead of industry trends. With a passion for digital transformation, we help clients strengthen their online presence and pave the way for long-term success.
            </p>
          </FadeIn>
          
          <FadeIn delay={1.0} direction="left">
            <div
              className="
                w-full
                flex
                flex-row
                justify-center
                items-center
                gap-2
                mt-6
                sm:mt-8
                relative
                z-10
                static
                sm:static
                md:absolute
                md:bottom-0
                md:right-0
                md:w-auto
                md:p-3
                md:rounded-ss-[20px]
                md:backdrop-blur-[20px]
              "
            >
              <GlowButton
                className="
                  w-full
                  max-w-[220px]
                  h-10
                  sm:h-12
                  md:w-[150px]
                  md:h-[44px]
                  lg:w-[170px]
                  lg:h-[47px]
                  xl:w-[189px]
                  xl:h-[57px]
                  rounded-full
                  flex
                  justify-center
                  items-center
                  bg-purple-60
                  hover:bg-purple-70
                  text-white
                  font-bold
                  text-sm
                  sm:text-base
                  xl:text-[16px]
                  leading-5
                  transition-all
                  duration-300
                  shadow-lg
                  hover:shadow-purple-600/25
                "
              >
                Schedule a meeting
              </GlowButton>
              
              <span className="size-10 sm:size-[40px] md:size-[57px] rounded-full bg-purple-60 flex justify-center items-center shadow-lg hover:shadow-purple-600/25 transition-all duration-300">
                <svg width="15" height="15" viewBox="0 0 26 26" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M26 9.29832e-06V19.4641H23.8453V3.66299L1.50829 26L0 24.4199L22.2652 2.15471H6.46409L6.46409 9.29832e-06H26Z" fill="white"></path>
                </svg>
              </span>
            </div>
          </FadeIn>
        </div>
      </FadeIn>
      
      {/* Bottom Gradient Overlay */}
      <div className="absolute h-[40px] sm:h-[60px] w-full bottom-0 bg-gradient-to-t from-black to-transparent pointer-events-none"></div>
      
      {/* Floating Elements */}
      <FloatingElement intensity={8} duration={4}>
        <div className="absolute top-6 left-4 sm:top-12 sm:left-12 md:top-20 md:left-20 w-[48px] sm:w-[58px] md:w-[68px] h-[20px] sm:h-[25px] md:h-[30px] opacity-50">
          <div className="bg-[url(/group-4.png)] absolute w-[20px] sm:w-[24px] md:w-[30px] h-[20px] sm:h-[24px] md:h-[30px] top-0 left-0 bg-[100%_100%] filter hue-rotate-[280deg] brightness-125" />
          <div className="bg-[url(/group-5.png)] absolute w-[12px] sm:w-[15px] md:w-[18px] h-[12px] sm:h-[15px] md:h-[18px] top-1.5 left-7 sm:left-8 md:left-9 bg-[100%_100%] filter hue-rotate-[280deg] brightness-125" />
          <div className="bg-[url(/group-6.png)] absolute w-2 h-2 top-[11px] left-[40px] sm:left-[48px] md:left-[60px] bg-[100%_100%] filter hue-rotate-[280deg] brightness-125" />
        </div>
      </FloatingElement>
      
      <FloatingElement intensity={6} duration={5}>
        <div className="absolute top-16 right-4 sm:top-24 sm:right-12 md:top-40 md:right-20 w-[48px] sm:w-[58px] md:w-[68px] h-[20px] sm:h-[25px] md:h-[30px] opacity-50">
          <div className="bg-[url(/group-4.png)] absolute w-[20px] sm:w-[24px] md:w-[30px] h-[20px] sm:h-[24px] md:h-[30px] top-0 left-0 bg-[100%_100%] filter hue-rotate-[280deg] brightness-125" />
          <div className="bg-[url(/group-5.png)] absolute w-[12px] sm:w-[15px] md:w-[18px] h-[12px] sm:h-[15px] md:h-[18px] top-1.5 left-7 sm:left-8 md:left-9 bg-[100%_100%] filter hue-rotate-[280deg] brightness-125" />
          <div className="bg-[url(/group-6.png)] absolute w-2 h-2 top-[11px] left-[40px] sm:left-[48px] md:left-[60px] bg-[100%_100%] filter hue-rotate-[280deg] brightness-125" />
        </div>
      </FloatingElement>
    </section>
  );
}; 