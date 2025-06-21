import React from "react";
import { Avatar } from "../../../../components/ui/avatar";
import { Card, CardContent } from "../../../../components/ui/card";
import { 
  FadeIn, 
  StaggerContainer, 
  StaggerItem, 
  GlowButton,
  FloatingElement,
  ParallaxElement
} from "../../../../components/ui/animated-elements";

export const ClientTestimonialsSection = (): JSX.Element => {
  // Testimonial data for mapping
  const testimonials = [
    {
      title: "Outstanding IT Partnership!",
      content:
        "TechFlow transformed our entire infrastructure. Their cloud migration was seamless, and their ongoing support has been exceptional. Our productivity increased by 40%!",
      author: "Sarah Johnson",
      position: "CTO",
      company: "InnovateCorp",
      profileImg: "https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=150",
      rating: 5,
    },
    {
      title: "Reliable & Innovative",
      content:
        "The cybersecurity solutions provided by TechFlow gave us peace of mind. Their proactive approach prevented multiple potential threats. Highly recommended for enterprise security.",
      author: "Michael Chen",
      position: "IT Director",
      company: "SecureFinance",
      profileImg: "https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=150",
      rating: 5,
    },
    {
      title: "Game-Changing AI Solutions",
      content:
        "The AI integration platform developed by TechFlow revolutionized our operations. Automated processes saved us 60% in operational costs while improving accuracy significantly.",
      author: "Emily Rodriguez",
      position: "CEO",
      company: "DataDriven Solutions",
      profileImg: "https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=150",
      rating: 5,
    },
  ];

      return (
      <section className="flex flex-col w-full items-center gap-16 relative overflow-hidden">
        {/* Header Section */}
        <div className="flex flex-col items-center gap-8 max-w-4xl text-center relative z-10 mx-auto">
        <FadeIn delay={0.2} direction="up">
          <div className="inline-flex items-center gap-3 px-6 py-3 bg-gradient-to-r from-purple-600/20 to-purple-800/20 rounded-full border border-purple-60/30 backdrop-blur-sm">
            <div className="w-2 h-2 bg-purple-400 rounded-full animate-pulse" />
            <span className="text-purple-200 text-sm font-medium">💬 Client Success Stories</span>
          </div>
        </FadeIn>

        <FadeIn delay={0.3} direction="up">
          <h2 className="[font-family:'Urbanist',Helvetica] font-bold text-transparent bg-gradient-to-r from-purple-400 via-white to-purple-400 bg-clip-text text-6xl tracking-[0] leading-[72px] animate-gradient-shift bg-[length:200%_auto]">
            What Our Clients Say
          </h2>
        </FadeIn>
        
        <FadeIn delay={0.5} direction="up">
          <p className="max-w-3xl [font-family:'Urbanist',Helvetica] font-medium text-grey-40 text-xl tracking-[0] leading-[30px]">
            Read success stories from businesses that have transformed their operations with our IT solutions. Discover why leading companies trust TechFlow for their digital transformation needs.
          </p>
        </FadeIn>

        <FadeIn delay={0.7} direction="up">
          <GlowButton className="px-8 py-4 h-auto bg-gradient-to-r from-purple-600 to-purple-700 hover:from-purple-500 hover:to-purple-600 rounded-xl font-medium text-white text-lg [font-family:'Urbanist',Helvetica] shadow-lg shadow-purple-600/25 transition-all duration-300 transform hover:scale-105">
            View All Case Studies
          </GlowButton>
        </FadeIn>
      </div>

      {/* Testimonials Grid */}
      <div className="w-full">
        <StaggerContainer staggerDelay={0.2}>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <StaggerItem key={index}>
                <ParallaxElement speed={0.05 * (index + 1)}>
                  <Card className="h-full bg-gradient-to-br from-grey-08 to-grey-10 border border-purple-60/20 hover:border-purple-60/40 rounded-2xl transition-all duration-500 hover:shadow-xl hover:shadow-purple-600/10 group overflow-hidden">
                    <CardContent className="p-8 flex flex-col h-full">
                      {/* Star Rating */}
                      <div className="flex items-center gap-1 mb-6">
                        {[...Array(testimonial.rating)].map((_, i) => (
                          <FloatingElement key={i} intensity={2} duration={2 + i * 0.2}>
                            <div className="w-5 h-5 text-yellow-400">
                              <svg fill="currentColor" viewBox="0 0 20 20">
                                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                              </svg>
                            </div>
                          </FloatingElement>
                        ))}
                      </div>

                      {/* Quote Icon */}
                      <div className="mb-4">
                        <div className="w-10 h-10 bg-gradient-to-br from-purple-600/20 to-purple-800/20 rounded-lg flex items-center justify-center">
                          <span className="text-purple-400 text-2xl">"</span>
                        </div>
                      </div>

                      {/* Testimonial Content */}
                      <div className="flex-1 space-y-4">
                        <h3 className="font-bold text-white text-xl leading-tight group-hover:text-purple-100 transition-colors duration-300">
                          {testimonial.title}
                        </h3>
                        
                        <p className="text-grey-60 text-base leading-relaxed group-hover:text-grey-50 transition-colors duration-300">
                          "{testimonial.content}"
                        </p>
                      </div>

                      {/* Author Info */}
                      <div className="flex items-center gap-4 mt-8 pt-6 border-t border-purple-60/20">
                        <FloatingElement intensity={3} duration={3}>
                          <Avatar className="w-12 h-12 rounded-full overflow-hidden border-2 border-purple-60/30 group-hover:border-purple-60/50 transition-colors duration-300">
                            <img
                              className="w-full h-full object-cover"
                              alt={`${testimonial.author} profile`}
                              src={testimonial.profileImg}
                            />
                          </Avatar>
                        </FloatingElement>

                        <div className="flex-1">
                          <div className="font-semibold text-white text-base group-hover:text-purple-100 transition-colors duration-300">
                            {testimonial.author}
                          </div>
                          <div className="text-grey-60 text-sm group-hover:text-purple-300 transition-colors duration-300">
                            {testimonial.position}, {testimonial.company}
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </ParallaxElement>
              </StaggerItem>
            ))}
          </div>
        </StaggerContainer>
      </div>

      {/* Pagination */}
      <FadeIn delay={1.0} direction="up">
        <div className="flex items-center justify-between w-full pt-8 border-t border-purple-60/20">
          <div className="flex items-center gap-2">
            <span className="font-bold text-transparent bg-gradient-to-r from-purple-400 to-white bg-clip-text text-xl">
              01
            </span>
            <span className="text-grey-60 text-lg">of 15</span>
          </div>

          <div className="flex items-center gap-3">
            <GlowButton className="w-12 h-12 rounded-full border border-purple-60/30 hover:border-purple-60/50 bg-grey-10 hover:bg-purple-600/10 transition-all duration-300 flex items-center justify-center group">
              <svg className="w-5 h-5 text-grey-60 group-hover:text-purple-300 transition-colors duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </GlowButton>

            <GlowButton className="w-12 h-12 rounded-full bg-gradient-to-r from-purple-600 to-purple-700 hover:from-purple-500 hover:to-purple-600 transition-all duration-300 flex items-center justify-center shadow-lg shadow-purple-600/25">
              <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </GlowButton>
          </div>
        </div>
      </FadeIn>
    </section>
  );
};