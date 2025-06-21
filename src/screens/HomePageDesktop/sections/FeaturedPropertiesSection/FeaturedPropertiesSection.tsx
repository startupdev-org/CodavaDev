import React from "react";
import { Badge } from "../../../../components/ui/badge";
import { Button } from "../../../../components/ui/button";
import { Card, CardContent } from "../../../../components/ui/card";
import {
  Pagination,
  PaginationContent,
  PaginationItem,
} from "../../../../components/ui/pagination";

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
    <section className="flex flex-col w-full max-w-[1596px] items-start gap-20 mx-auto">
      <div className="flex items-end justify-between w-full">
        <div className="flex flex-col items-start gap-3.5 relative flex-1">
          <h2 className="relative self-stretch mt-[-1.00px] font-['Urbanist',Helvetica] font-semibold text-white text-5xl tracking-[0] leading-[72px]">
            Featured IT Solutions
          </h2>

          <p className="font-medium text-grey-60 tracking-[0] relative self-stretch font-['Urbanist',Helvetica] text-lg leading-[27px]">
            Explore our comprehensive suite of IT services and solutions. Each offering is designed to accelerate your digital transformation and drive business growth. Click "View Details" for more information.
          </p>

          <div className="absolute w-[68px] h-[30px] -top-10 -left-5">
            <div className="w-[30px] h-[30px] top-0 left-0 bg-[url(/group-1.png)] absolute bg-[100%_100%]" />
            <div className="w-[18px] h-[18px] top-1.5 left-9 bg-[url(/group-2.png)] absolute bg-[100%_100%]" />
            <div className="w-2 h-2 top-[11px] left-[60px] bg-[url(/group-3.png)] absolute bg-[100%_100%]" />
          </div>
        </div>

        <Button
          variant="outline"
          className="px-6 py-[18px] h-auto bg-grey-10 rounded-[10px] border border-solid border-neutral-800 text-white"
        >
          View All Services
        </Button>
      </div>

      <div className="flex flex-col items-start gap-[50px] w-full">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[30px] w-full">
          {services.map((service) => (
            <Card
              key={service.id}
              className="flex flex-col items-start gap-[30px] p-10 bg-grey-08 rounded-xl overflow-hidden border border-solid border-neutral-800"
            >
              <img
                className="w-full h-[318px] object-cover rounded-lg"
                alt={service.title}
                src={service.image}
              />

              <CardContent className="flex flex-col items-start gap-[30px] p-0 w-full">
                <div className="flex flex-col items-start gap-1.5 w-full">
                  <h3 className="font-['Urbanist',Helvetica] font-semibold text-white text-2xl leading-9 mt-[-1.00px]">
                    {service.title}
                  </h3>

                  <p className="font-medium text-grey-60 tracking-[0] font-['Urbanist',Helvetica] text-lg leading-[27px]">
                    <span className="text-[#999999]">
                      {service.description}{" "}
                    </span>
                    <span className="text-white underline cursor-pointer">
                      Read More
                    </span>
                  </p>
                </div>

                <div className="flex flex-wrap items-start gap-2.5 w-full">
                  <Badge className="flex items-center gap-1 px-3.5 py-2 bg-grey-10 rounded-[28px] border border-solid border-neutral-800 font-medium text-white text-lg">
                    <div className="relative w-6 h-6">
                      <img
                        className="absolute w-[22px] h-[17px] top-1 left-px"
                        alt="Duration icon"
                        src="/background-2.svg"
                      />
                    </div>
                    {service.duration} Months
                  </Badge>

                  <Badge className="flex items-center gap-1 px-3.5 py-2 bg-grey-10 rounded-[28px] border border-solid border-neutral-800 font-medium text-white text-lg">
                    <div className="relative w-6 h-6">
                      <img
                        className="absolute w-[21px] h-[21px] top-0.5 left-px"
                        alt="Complexity icon"
                        src="/background-2-1.svg"
                      />
                    </div>
                    {service.complexity}
                  </Badge>

                  <Badge className="flex items-center gap-1 px-3.5 py-2 bg-grey-10 rounded-[28px] border border-solid border-neutral-800 font-medium text-white text-lg">
                    <div className="relative w-6 h-6">
                      <img
                        className="absolute w-[17px] h-[19px] top-0.5 left-1"
                        alt="Service type icon"
                        src="/subtract.svg"
                      />
                    </div>
                    {service.type}
                  </Badge>
                </div>

                <div className="flex items-end gap-[50px] w-full">
                  <div className="flex flex-col items-start gap-0.5">
                    <span className="font-medium text-grey-60 text-lg leading-[27px] mt-[-1.00px] font-['Urbanist',Helvetica]">
                      Starting From
                    </span>
                    <span className="font-['Urbanist',Helvetica] font-semibold text-white text-2xl tracking-[0] leading-9">
                      {service.price}
                    </span>
                  </div>

                  <Button className="flex-1 items-center justify-center px-6 py-[18px] bg-purple-60 rounded-[10px] font-medium text-white text-lg">
                    View Service Details
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

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