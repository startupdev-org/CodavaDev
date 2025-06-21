import React from "react";
import { Button } from "../../../../components/ui/button";
import { Card, CardContent } from "../../../../components/ui/card";

export const CallToActionSection = (): JSX.Element => {
  // FAQ data for mapping
  const faqItems = [
    {
      question: "How do I get started with TechFlow's IT services?",
      description:
        "Learn about our consultation process and how we assess your current infrastructure to recommend the best solutions.",
    },
    {
      question:
        "What makes TechFlow different from other IT service providers?",
      description:
        "Discover our unique approach to digital transformation and why leading enterprises choose us as their technology partner.",
    },
    {
      question: "How can I contact a TechFlow solutions architect?",
      description:
        "Find out the different ways you can connect with our expert team for personalized IT consulting and support.",
    },
  ];

  return (
    <section className="flex flex-col w-full items-start gap-20 py-16">
      <div className="flex items-end justify-between w-full">
        <div className="flex flex-col items-start gap-3.5 relative max-w-3xl">
          <div className="relative self-stretch [font-family:'Urbanist',Helvetica] font-semibold text-white text-5xl tracking-[0] leading-[72px]">
            Frequently Asked Questions
          </div>

          <div className="font-medium text-grey-60 tracking-[0] relative self-stretch [font-family:'Urbanist',Helvetica] text-lg leading-[27px]">
            Find answers to common questions about TechFlow's IT services, digital transformation solutions, and our implementation process. We're here to provide clarity and guide you through your technology journey.
          </div>

          <div className="absolute w-[68px] h-[30px] -top-10 -left-5">
            <div className="bg-[url(/group-7.png)] absolute w-[30px] h-[30px] top-0 left-0 bg-[100%_100%]" />
            <div className="bg-[url(/group-8.png)] absolute w-[18px] h-[18px] top-1.5 left-9 bg-[100%_100%]" />
            <div className="bg-[url(/group-9.png)] absolute w-2 h-2 top-[11px] left-[60px] bg-[100%_100%]" />
          </div>
        </div>

        <Button
          variant="outline"
          className="px-6 py-[18px] h-auto bg-grey-10 rounded-[10px] border border-solid border-neutral-800"
        >
          <span className="[font-family:'Urbanist',Helvetica] font-medium text-white text-lg tracking-[0] leading-[27px]">
            View All FAQ&apos;s
          </span>
        </Button>
      </div>

      <div className="flex flex-col items-start gap-[50px] w-full">
        <div className="grid grid-cols-3 gap-[30px] w-full">
          {faqItems.map((item, index) => (
            <Card
              key={index}
              className="flex flex-col items-start gap-[30px] p-[50px] bg-grey-08 rounded-xl border border-solid border-neutral-800"
            >
              <CardContent className="p-0 flex flex-col gap-[30px] w-full">
                <h3 className="font-semibold text-white text-2xl leading-9 [font-family:'Urbanist',Helvetica] tracking-[0]">
                  {item.question}
                </h3>

                <p className="font-medium text-grey-60 tracking-[-0.11px] [font-family:'Urbanist',Helvetica] text-lg leading-[27px]">
                  {item.description}
                </p>

                <Button
                  variant="outline"
                  className="px-6 py-[18px] h-auto bg-grey-10 rounded-[10px] border border-solid border-neutral-800"
                >
                  <span className="[font-family:'Urbanist',Helvetica] font-medium text-white text-lg tracking-[-0.11px] leading-[23.6px]">
                    Read More
                  </span>
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="flex items-center justify-between pt-5 pb-0 w-full border-t border-neutral-800">
          <div className="[font-family:'Urbanist',Helvetica] font-medium text-xl tracking-[0] leading-[30px]">
            <span className="text-white">01</span>
            <span className="text-[#999999]"> of 12</span>
          </div>

          <div className="flex items-center gap-2.5">
            <Button
              variant="outline"
              size="icon"
              className="p-3.5 rounded-[69px] border border-solid border-neutral-800"
            >
              <img
                className="w-[30px] h-[30px]"
                alt="Previous"
                src="/icon-1.svg"
              />
            </Button>

            <Button
              variant="outline"
              size="icon"
              className="p-3.5 bg-grey-10 rounded-[69px] border border-solid border-neutral-800"
            >
              <img className="w-[30px] h-[30px]" alt="Next" src="/icon-3.svg" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};