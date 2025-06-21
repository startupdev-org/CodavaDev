import React from "react";
import { Badge } from "../../../../components/ui/badge";
import { Button } from "../../../../components/ui/button";
import { Card, CardContent } from "../../../../components/ui/card";
import {
  Pagination,
  PaginationContent,
  PaginationItem,
} from "../../../../components/ui/pagination";
import { 
  FadeIn, 
  StaggerContainer, 
  StaggerItem, 
  GlowButton,
  FloatingElement,
  ParallaxElement,
  MatrixText,
  GlitchText
} from "../../../../components/ui/animated-elements";

export const FeaturedPropertiesSection = (): JSX.Element => {
  // Service data for mapping
  const services = [
    {
      id: 1,
      image: "https://images.pexels.com/photos/1181675/pexels-photo-1181675.jpeg?auto=compress&cs=tinysrgb&w=800",
      title: "Cloud Migration Services",
      description:
        "Seamlessly migrate your infrastructure to the cloud with our expert team ensuring zero downtime and maximum efficiency...",
      duration: "2-4",
      complexity: "Enterprise",
      type: "Cloud",
      price: "$25,000",
    },
    {
      id: 2,
      image: "https://images.pexels.com/photos/60504/security-protection-anti-virus-software-60504.jpeg?auto=compress&cs=tinysrgb&w=800",
      title: "Cybersecurity Assessment",
      description:
        "Comprehensive security audit and implementation of advanced cybersecurity measures to protect your digital assets...",
      duration: "1-2",
      complexity: "Advanced",
      type: "Security",
      price: "$15,000",
    },
    {
      id: 3,
      image: "https://images.pexels.com/photos/8386440/pexels-photo-8386440.jpeg?auto=compress&cs=tinysrgb&w=800",
      title: "AI Integration Platform",
      description:
        "Custom AI and machine learning solutions tailored to automate processes and drive intelligent decision-making...",
      duration: "3-6",
      complexity: "Enterprise",
      type: "AI/ML",
      price: "$45,000",
    },
  ];

  return (
    <section className="flex flex-col w-full max-w-[1596px] items-start gap-20 mx-auto relative overflow-hidden">
      <FadeIn delay={0.2} direction="up">
        <div className="flex items-end justify-between w-full">
          <div className="flex flex-col items-start gap-3.5 relative flex-1">
            <GlitchText>
              <h2 className="relative self-stretch mt-[-1.00px] font-['Urbanist',Helvetica] font-semibold text-transparent bg-gradient-to-r from-purple-400 via-white to-purple-400 bg-clip-text text-5xl tracking-[0] leading-[72px] animate-gradient-shift bg-[length:200%_auto]">
                <MatrixText text="Featured IT Solutions" />
              </h2>
            </GlitchText>

            <FadeIn delay={0.6} direction="up">
              <p className="font-medium text-grey-60 tracking-[0] relative self-stretch font-['Urbanist',Helvetica] text-lg leading-[27px]">
                Explore our comprehensive suite of IT services and solutions. Each offering is designed to accelerate your digital transformation and drive business growth. Click "View Details" for more information.
              </p>
            </FadeIn>

            <FloatingElement intensity={8} duration={4}>
              <div className="absolute w-[68px] h-[30px] -top-10 -left-5">
                <div className="w-[30px] h-[30px] top-0 left-0 bg-[url(/group-1.png)] absolute bg-[100%_100%] filter hue-rotate-[280deg] brightness-125" />
                <div className="w-[18px] h-[18px] top-1.5 left-9 bg-[url(/group-2.png)] absolute bg-[100%_100%] filter hue-rotate-[280deg] brightness-125" />
                <div className="w-2 h-2 top-[11px] left-[60px] bg-[url(/group-3.png)] absolute bg-[100%_100%] filter hue-rotate-[280deg] brightness-125" />
              </div>
            </FloatingElement>
          </div>

          <FadeIn delay={0.8} direction="left">
            <GlowButton className="px-6 py-[18px] h-auto bg-gradient-to-r from-grey-10 to-grey-08 rounded-[10px] border border-solid border-purple-60/50 text-white hover:border-purple-60 hover:shadow-lg hover:shadow-purple-600/25 transition-all duration-300 backdrop-blur-sm">
              View All Services
            </GlowButton>
          </FadeIn>
        </div>
      </FadeIn>

      <div className="flex flex-col items-start gap-[50px] w-full">
        <StaggerContainer staggerDelay={0.2}>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[30px] w-full">
            {services.map((service, index) => (
              <StaggerItem key={service.id}>
                <Card className="flex flex-col items-start gap-[30px] p-10 bg-gradient-to-br from-grey-08 to-grey-10 rounded-xl overflow-hidden border border-solid border-purple-60/30 hover:border-purple-60/60 transition-all duration-500 shadow-lg shadow-purple-600/10 hover:shadow-purple-600/25 group hover:scale-105 backdrop-blur-sm relative">
                  <ParallaxElement speed={0.1 * (index + 1)}>
                    <div className="relative overflow-hidden rounded-lg">
                      <img
                        className="w-full h-[318px] object-cover rounded-lg group-hover:scale-110 transition-transform duration-700 filter brightness-90 group-hover:brightness-110"
                        alt={service.title}
                        src={service.image}
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-purple-900/40 via-transparent to-purple-600/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                      <div className="absolute inset-0 bg-digital-grid bg-[size:20px_20px] opacity-0 group-hover:opacity-20 transition-opacity duration-500" />
                    </div>
                  </ParallaxElement>

                  <CardContent className="flex flex-col items-start gap-[30px] p-0 w-full">
                    <div className="flex flex-col items-start gap-1.5 w-full">
                      <GlitchText>
                        <h3 className="font-['Urbanist',Helvetica] font-semibold text-transparent bg-gradient-to-r from-white to-purple-200 bg-clip-text group-hover:from-purple-100 group-hover:to-white text-2xl leading-9 mt-[-1.00px] transition-all duration-300">
                          <MatrixText text={service.title} />
                        </h3>
                      </GlitchText>

                      <p className="font-medium text-grey-60 group-hover:text-grey-40 tracking-[0] font-['Urbanist',Helvetica] text-lg leading-[27px] transition-colors duration-300">
                        <span className="text-[#999999] group-hover:text-[#bbbbbb] transition-colors duration-300">
                          {service.description}{" "}
                        </span>
                        <span className="text-purple-400 group-hover:text-purple-300 underline cursor-pointer hover:text-purple-200 transition-colors duration-200">
                          Read More
                        </span>
                      </p>
                    </div>

                    <div className="flex flex-wrap items-start gap-2.5 w-full">
                      <Badge className="flex items-center gap-1 px-3.5 py-2 bg-gradient-to-r from-grey-10 to-grey-08 rounded-[28px] border border-solid border-purple-60/30 group-hover:border-purple-60/50 font-medium text-purple-200 text-lg transition-all duration-300">
                        <div className="relative w-6 h-6">
                          <img
                            className="absolute w-[22px] h-[17px] top-1 left-px filter hue-rotate-[280deg] brightness-125"
                            alt="Duration icon"
                            src="/background-2.svg"
                          />
                        </div>
                        {service.duration} Months
                      </Badge>

                      <Badge className="flex items-center gap-1 px-3.5 py-2 bg-gradient-to-r from-grey-10 to-grey-08 rounded-[28px] border border-solid border-purple-60/30 group-hover:border-purple-60/50 font-medium text-purple-200 text-lg transition-all duration-300">
                        <div className="relative w-6 h-6">
                          <img
                            className="absolute w-[21px] h-[21px] top-0.5 left-px filter hue-rotate-[280deg] brightness-125"
                            alt="Complexity icon"
                            src="/background-2-1.svg"
                          />
                        </div>
                        {service.complexity}
                      </Badge>

                      <Badge className="flex items-center gap-1 px-3.5 py-2 bg-gradient-to-r from-grey-10 to-grey-08 rounded-[28px] border border-solid border-purple-60/30 group-hover:border-purple-60/50 font-medium text-purple-200 text-lg transition-all duration-300">
                        <div className="relative w-6 h-6">
                          <img
                            className="absolute w-[17px] h-[19px] top-0.5 left-1 filter hue-rotate-[280deg] brightness-125"
                            alt="Service type icon"
                            src="/subtract.svg"
                          />
                        </div>
                        {service.type}
                      </Badge>
                    </div>

                    <div className="flex items-end gap-[50px] w-full">
                      <div className="flex flex-col items-start gap-0.5">
                        <span className="font-medium text-grey-60 group-hover:text-grey-40 text-lg leading-[27px] mt-[-1.00px] font-['Urbanist',Helvetica] transition-colors duration-300">
                          Starting From
                        </span>
                        <span className="font-['Urbanist',Helvetica] font-semibold text-transparent bg-gradient-to-r from-purple-400 to-white bg-clip-text group-hover:from-purple-300 group-hover:to-purple-100 text-2xl tracking-[0] leading-9 transition-all duration-300">
                          <MatrixText text={service.price} />
                        </span>
                      </div>

                      <GlowButton className="flex-1 items-center justify-center px-6 py-[18px] bg-gradient-to-r from-purple-600 to-purple-700 hover:from-purple-500 hover:to-purple-600 rounded-[10px] font-medium text-white text-lg shadow-lg shadow-purple-600/25 transition-all duration-300">
                        View Service Details
                      </GlowButton>
                    </div>
                  </CardContent>
                </Card>
              </StaggerItem>
            ))}
          </div>
        </StaggerContainer>

        <Pagination className="flex items-start justify-between pt-5 pb-0 px-0 w-full border-t border-neutral-800">
          <PaginationContent className="flex justify-between w-full">
            <span className="font-['Urbanist',Helvetica] font-medium text-xl tracking-[0] leading-[30px] whitespace-nowrap">
              <span className="text-white">01</span>
              <span className="text-[#999999]"> of 20</span>
            </span>

            <div className="flex items-start gap-2.5">
              <PaginationItem>
                <Button
                  variant="outline"
                  size="icon"
                  className="p-3.5 rounded-[69px] border border-solid border-neutral-800"
                >
                  <img
                    className="w-[30px] h-[30px]"
                    alt="Previous page"
                    src="/icon-1.svg"
                  />
                </Button>
              </PaginationItem>
              <PaginationItem>
                <Button
                  variant="outline"
                  size="icon"
                  className="p-3.5 bg-grey-10 rounded-[69px] border border-solid border-neutral-800"
                >
                  <img
                    className="w-[30px] h-[30px]"
                    alt="Next page"
                    src="/icon-3.svg"
                  />
                </Button>
              </PaginationItem>
            </div>
          </PaginationContent>
        </Pagination>
      </div>
    </section>
  );
};