import React from "react";
import { Avatar } from "../../../../components/ui/avatar";
import { Button } from "../../../../components/ui/button";
import { Card, CardContent } from "../../../../components/ui/card";

export const ClientTestimonialsSection = (): JSX.Element => {
  // Testimonial data for mapping
  const testimonials = [
    {
      title: "Outstanding IT Partnership!",
      content:
        "TechFlow transformed our entire infrastructure. Their cloud migration was seamless, and their ongoing support has been exceptional. Our productivity increased by 40%!",
      author: "Sarah Johnson",
      location: "CTO, InnovateCorp",
      profileImg: "https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=150",
    },
    {
      title: "Reliable & Innovative",
      content:
        "The cybersecurity solutions provided by TechFlow gave us peace of mind. Their proactive approach prevented multiple potential threats. Highly recommended for enterprise security.",
      author: "Michael Chen",
      location: "IT Director, SecureFinance",
      profileImg: "https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=150",
    },
    {
      title: "Game-Changing AI Solutions",
      content:
        "The AI integration platform developed by TechFlow revolutionized our operations. Automated processes saved us 60% in operational costs while improving accuracy significantly.",
      author: "Emily Rodriguez",
      location: "CEO, DataDriven Solutions",
      profileImg: "https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=150",
    },
  ];

  return (
    <section className="flex flex-col w-full max-w-[1596px] items-start gap-20 mx-auto">
      <div className="flex items-end gap-[200px] relative self-stretch w-full">
        <div className="flex flex-col items-start gap-3.5 relative flex-1">
          <div className="relative self-stretch [font-family:'Urbanist',Helvetica] font-semibold text-white text-5xl tracking-[0] leading-[72px]">
            What Our Clients Say
          </div>

          <div className="font-medium text-grey-60 tracking-[0] relative self-stretch [font-family:'Urbanist',Helvetica] text-lg leading-[27px]">
            Read success stories from businesses that have transformed their operations with our IT solutions. Discover why leading companies trust TechFlow for their digital transformation needs.
          </div>

          <div className="relative w-[68px] h-[30px] -top-10 -left-5">
            <div className="bg-[url(/group-4.png)] absolute w-[30px] h-[30px] top-0 left-0 bg-[100%_100%]" />
            <div className="bg-[url(/group-5.png)] absolute w-[18px] h-[18px] top-1.5 left-9 bg-[100%_100%]" />
            <div className="bg-[url(/group-6.png)] absolute w-2 h-2 top-[11px] left-[60px] bg-[100%_100%]" />
          </div>
        </div>

        <Button
          variant="outline"
          className="px-6 py-[18px] h-auto bg-grey-10 rounded-[10px] border border-solid border-neutral-800"
        >
          <span className="[font-family:'Urbanist',Helvetica] font-medium text-white text-lg tracking-[0] leading-[27px]">
            View All Case Studies
          </span>
        </Button>
      </div>

      <div className="flex flex-col items-start gap-[50px] relative self-stretch w-full">
        <div className="flex items-start gap-[30px] relative self-stretch w-full">
          {testimonials.map((testimonial, index) => (
            <Card
              key={index}
              className="flex-1 bg-grey-08 rounded-xl border border-solid border-neutral-800"
            >
              <CardContent className="flex flex-col items-start gap-10 p-[50px]">
                <div className="inline-flex items-start gap-2.5">
                  {[...Array(5)].map((_, i) => (
                    <div
                      key={i}
                      className="inline-flex items-start gap-2.5 p-2.5 bg-grey-10 rounded-[100px] border border-solid border-neutral-800"
                    >
                      <img
                        className="w-[21.31px] h-[20.36px]"
                        alt="Star rating"
                        src="/shape.svg"
                      />
                    </div>
                  ))}
                </div>

                <div className="flex flex-col items-start gap-3.5 self-stretch w-full">
                  <h3 className="font-semibold text-white text-2xl leading-9 self-stretch [font-family:'Urbanist',Helvetica] tracking-[0]">
                    {testimonial.title}
                  </h3>

                  <p className="font-medium text-white tracking-[0] self-stretch [font-family:'Urbanist',Helvetica] text-lg leading-[27px]">
                    {testimonial.content}
                  </p>
                </div>

                <div className="flex items-center gap-3 self-stretch w-full">
                  <Avatar className="w-[60px] h-[60px] rounded-full overflow-hidden">
                    <img
                      className="w-full h-full object-cover"
                      alt={`${testimonial.author} profile`}
                      src={testimonial.profileImg}
                    />
                  </Avatar>

                  <div className="flex flex-col items-start gap-0.5 flex-1">
                    <div className="self-stretch [font-family:'Urbanist',Helvetica] font-medium text-white text-xl tracking-[0] leading-[30px]">
                      {testimonial.author}
                    </div>

                    <div className="self-stretch [font-family:'Urbanist',Helvetica] font-medium text-grey-60 text-lg tracking-[0] leading-[27px]">
                      {testimonial.location}
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="flex items-start justify-between pt-5 pb-0 px-0 relative self-stretch w-full border-t border-neutral-800">
          <div className="[font-family:'Urbanist',Helvetica] font-medium text-xl tracking-[0] leading-[30px] whitespace-nowrap">
            <span className="text-white">01</span>
            <span className="text-[#999999]"> of 15</span>
          </div>

          <div className="inline-flex items-start gap-2.5">
            <Button
              variant="outline"
              className="p-3.5 h-auto rounded-[69px] border border-solid border-neutral-800"
            >
              <img
                className="w-[30px] h-[30px]"
                alt="Previous"
                src="/icon-1.svg"
              />
            </Button>

            <Button
              variant="outline"
              className="p-3.5 h-auto bg-grey-10 rounded-[69px] border border-solid border-neutral-800"
            >
              <img className="w-[30px] h-[30px]" alt="Next" src="/icon-3.svg" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};