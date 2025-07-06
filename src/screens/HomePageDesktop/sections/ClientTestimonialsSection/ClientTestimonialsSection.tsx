import React from "react";
import { 
  FadeIn, 
  StaggerContainer, 
  StaggerItem, 
  GlowButton
} from "../../../../components/ui/animated-elements";

export const ClientTestimonialsSection: React.FC = () => {
  const testimonials = [
    {
      quote: "Codava transformed our entire IT infrastructure in just 3 months. Their expertise in cloud migration and security implementation exceeded our expectations.",
      author: "Sarah Johnson",
      position: "CTO",
      company: "DataCorp Solutions",
      avatar: "SJ",
      rating: 5
    },
    {
      quote: "The AI solutions provided by Codava have revolutionized our data analysis capabilities. We've seen a 300% improvement in processing efficiency.",
      author: "Michael Chen",
      position: "Head of Operations",
      company: "InnovateTech",
      avatar: "MC",
      rating: 5
    },
    {
      quote: "Outstanding cybersecurity implementation. Codava's team identified and resolved vulnerabilities we didn't even know existed. Truly professional service.",
      author: "Emma Rodriguez",
      position: "IT Director",
      company: "SecureBase Inc",
      avatar: "ER",
      rating: 5
    }
  ];

      return (
    <section className="relative py-24">
      <div className="max-w-6xl mx-auto px-8 relative z-10">
        {/* Header */}
        <div className="text-center mb-20">
          <FadeIn delay={0.1} direction="up">
            <div className="inline-flex items-center gap-2 px-5 py-2.5 bg-white/8 border border-[#194EFF]/25 rounded-full mb-8 backdrop-blur-lg shadow-lg shadow-[#194EFF]/10">
              <div className="w-2.5 h-2.5 bg-[#194EFF] rounded-full animate-pulse shadow-sm shadow-[#194EFF]/50"></div>
              <span className="text-[#194EFF] text-sm font-semibold tracking-wide">CLIENT SUCCESS</span>
          </div>
        </FadeIn>

          <FadeIn delay={0.2} direction="up">
            <h2 className="text-5xl md:text-6xl font-bold text-white mb-6 leading-tight">
              What Our
              <span className="block bg-gradient-to-r from-[#194EFF] via-[#194EFF]/90 to-[#194EFF]/70 bg-clip-text text-transparent">
                Clients Say
              </span>
          </h2>
        </FadeIn>
        
          <FadeIn delay={0.3} direction="up">
            <p className="text-xl text-white/70 max-w-4xl mx-auto leading-relaxed font-light">
              Discover how we've helped businesses transform their technology infrastructure 
              and achieve remarkable results through innovative solutions.
          </p>
        </FadeIn>
      </div>

      {/* Testimonials Grid */}
        <StaggerContainer staggerDelay={0.1}>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
            {testimonials.map((testimonial, index) => (
              <StaggerItem key={index}>
                <div className="group relative p-8 bg-white/[0.03] backdrop-blur-xl border border-white/10 rounded-3xl hover:border-[#194EFF]/30 hover:bg-white/[0.06] transition-all duration-500 hover:transform hover:scale-[1.02] h-full flex flex-col shadow-lg shadow-black/20 hover:shadow-[#194EFF]/10">
                  {/* Background Gradient */}
                  <div className="absolute inset-0 bg-gradient-to-br from-transparent via-[#194EFF]/[0.02] to-[#194EFF]/[0.05] opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-3xl"></div>

                  {/* Quote Icon */}
                  <div className="relative z-10 mb-6">
                    <div className="w-12 h-12 bg-gradient-to-br from-[#194EFF]/15 to-[#194EFF]/5 border border-[#194EFF]/20 rounded-2xl flex items-center justify-center group-hover:scale-110 group-hover:border-[#194EFF]/40 transition-all duration-500 shadow-lg shadow-[#194EFF]/10">
                      <svg className="w-6 h-6 text-[#194EFF]" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h4v10h-10z"/>
                      </svg>
                    </div>
                  </div>

                  {/* Rating Stars */}
                  <div className="flex items-center gap-1 mb-6 relative z-10">
                        {[...Array(testimonial.rating)].map((_, i) => (
                      <svg
                        key={i}
                        className="w-5 h-5 text-[#194EFF] drop-shadow-sm"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                              </svg>
                        ))}
                      </div>

                  {/* Quote */}
                  <blockquote className="text-white/80 leading-relaxed mb-8 text-lg font-light flex-1 relative z-10">
                    "{testimonial.quote}"
                  </blockquote>

                      {/* Author Info */}
                  <div className="flex items-center gap-4 relative z-10">
                    <div className="w-14 h-14 bg-gradient-to-br from-[#194EFF] to-[#194EFF]/80 rounded-2xl flex items-center justify-center text-white font-bold text-lg shadow-lg shadow-[#194EFF]/25 group-hover:shadow-[#194EFF]/40 transition-all duration-500">
                      {testimonial.avatar}
                          </div>
                    <div>
                      <div className="font-bold text-white text-lg mb-1">{testimonial.author}</div>
                      <div className="text-[#194EFF] text-sm font-semibold">{testimonial.position}</div>
                      <div className="text-white/50 text-sm font-medium">{testimonial.company}</div>
                          </div>
                        </div>
                      </div>
              </StaggerItem>
            ))}
          </div>
        </StaggerContainer>

        {/* Stats Section */}
        <FadeIn delay={0.5} direction="up">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-20">
            <div className="text-center group cursor-pointer">
              <div className="text-4xl md:text-5xl font-bold text-white mb-3 bg-gradient-to-r from-white via-[#194EFF]/30 to-white bg-clip-text group-hover:from-[#194EFF] group-hover:to-white transition-all duration-500">500+</div>
              <div className="text-white/60 font-medium group-hover:text-white/80 transition-colors duration-300">Projects Completed</div>
              <div className="w-0 h-0.5 bg-gradient-to-r from-[#194EFF] to-white mx-auto mt-2 group-hover:w-full transition-all duration-500"></div>
            </div>
            <div className="text-center group cursor-pointer">
              <div className="text-4xl md:text-5xl font-bold text-white mb-3 bg-gradient-to-r from-white via-[#194EFF]/30 to-white bg-clip-text group-hover:from-[#194EFF] group-hover:to-white transition-all duration-500">98%</div>
              <div className="text-white/60 font-medium group-hover:text-white/80 transition-colors duration-300">Client Satisfaction</div>
              <div className="w-0 h-0.5 bg-gradient-to-r from-[#194EFF] to-white mx-auto mt-2 group-hover:w-full transition-all duration-500"></div>
            </div>
            <div className="text-center group cursor-pointer">
              <div className="text-4xl md:text-5xl font-bold text-white mb-3 bg-gradient-to-r from-white via-[#194EFF]/30 to-white bg-clip-text group-hover:from-[#194EFF] group-hover:to-white transition-all duration-500">24/7</div>
              <div className="text-white/60 font-medium group-hover:text-white/80 transition-colors duration-300">Support Available</div>
              <div className="w-0 h-0.5 bg-gradient-to-r from-[#194EFF] to-white mx-auto mt-2 group-hover:w-full transition-all duration-500"></div>
            </div>
            <div className="text-center group cursor-pointer">
              <div className="text-4xl md:text-5xl font-bold text-white mb-3 bg-gradient-to-r from-white via-[#194EFF]/30 to-white bg-clip-text group-hover:from-[#194EFF] group-hover:to-white transition-all duration-500">10+</div>
              <div className="text-white/60 font-medium group-hover:text-white/80 transition-colors duration-300">Years Experience</div>
              <div className="w-0 h-0.5 bg-gradient-to-r from-[#194EFF] to-white mx-auto mt-2 group-hover:w-full transition-all duration-500"></div>
      </div>
          </div>
        </FadeIn>

        {/* CTA Section */}
        <FadeIn delay={0.6} direction="up">
          <div className="text-center bg-white/[0.03] border border-white/10 rounded-3xl p-10 backdrop-blur-xl shadow-xl shadow-black/20 hover:shadow-[#194EFF]/10 transition-all duration-500 relative overflow-hidden group">
            {/* Background Gradient */}
            <div className="absolute inset-0 bg-gradient-to-br from-[#194EFF]/[0.03] via-transparent to-[#194EFF]/[0.05] opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-3xl"></div>
            
            <div className="relative z-10">
              <h3 className="text-4xl font-bold text-white mb-4">
                Ready to Join Our
                <span className="block bg-gradient-to-r from-[#194EFF] via-[#194EFF]/90 to-[#194EFF]/70 bg-clip-text text-transparent">
                  Success Stories?
                </span>
              </h3>
              
              <p className="text-white/70 text-lg mb-10 max-w-3xl mx-auto font-light leading-relaxed">
                Let's discuss how we can transform your business with cutting-edge technology solutions 
                and deliver the same exceptional results our clients experience.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="px-10 py-5 bg-gradient-to-r from-[#194EFF] to-[#194EFF]/90 text-white font-semibold text-lg rounded-2xl hover:from-[#194EFF]/90 hover:to-[#194EFF]/80 transition-all duration-300 shadow-xl shadow-[#194EFF]/25 hover:shadow-[#194EFF]/40 hover:scale-105 transform relative overflow-hidden group/btn">
                  <span className="relative z-10">Start Your Project</span>
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover/btn:translate-x-full transition-transform duration-1000"></div>
                </button>
                <button className="px-10 py-5 bg-white/8 text-white font-semibold text-lg rounded-2xl border border-white/20 hover:bg-white/15 hover:border-[#194EFF]/40 transition-all duration-300 backdrop-blur-sm hover:scale-105 transform shadow-lg relative overflow-hidden group/btn">
                  <span className="relative z-10">View Case Studies</span>
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover/btn:translate-x-full transition-transform duration-1000"></div>
                </button>
              </div>
            </div>
          </div>
        </FadeIn>
        </div>
    </section>
  );
};