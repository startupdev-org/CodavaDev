import React from "react";
import { Button } from "../../components/ui/button";
import { 
  FadeIn, 
  GlowButton
} from "../../components/ui/animated-elements";

export const CTASection = (): JSX.Element => {
  return (
    <section className="relative py-24">
      <div className="max-w-6xl mx-auto px-8 relative z-10">
        <FadeIn delay={0.1} direction="up">
          <div className="text-center bg-white/[0.03] border border-white/10 rounded-3xl p-12 backdrop-blur-xl shadow-xl shadow-black/20 hover:shadow-[#194EFF]/10 transition-all duration-500 relative overflow-hidden group">
            {/* Background Gradient */}
            <div className="absolute inset-0 bg-gradient-to-br from-[#194EFF]/[0.03] via-transparent to-[#194EFF]/[0.05] opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-3xl"></div>
            
            <div className="relative z-10">
              <h3 className="text-4xl md:text-4xl font-bold text-white mb-7">
                Ready to Start Your
                <span className="block bg-gradient-to-r from-[#194EFF] via-[#194EFF]/90 to-[#194EFF]/70 bg-clip-text text-transparent">
                  Next Project?
                </span>
              </h3>
              
              <p className="text-white/70 text-xl mt-10 mb-10 max-w-3xl mx-auto font-light leading-relaxed">
                Let's discuss how we can help you achieve your business goals with cutting-edge technology solutions. 
                Our team is ready to bring your vision to life.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center mb-10">
                <GlowButton 
                  onClick={() => window.open('https://calendly.com/codava-support/consultation', '_blank')}
                  className="px-10 py-5 bg-gradient-to-r from-[#194EFF] to-[#194EFF]/90 text-white font-semibold text-lg rounded-2xl hover:from-[#194EFF]/90 hover:to-[#194EFF]/80 transition-all duration-300 shadow-xl shadow-[#194EFF]/25 hover:shadow-[#194EFF]/40 hover:scale-105 transform relative overflow-hidden group/btn"
                >
                  <span className="relative z-10">Get Free Consultation</span>
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover/btn:translate-x-full transition-transform duration-1000"></div>
                </GlowButton>
                {/* <Button className="px-10 py-10 bg-white/8 text-white font-bold text-lg rounded-xl border border-white/20 hover:bg-white/15 hover:border-[#194EFF]/40 transition-all duration-300 backdrop-blur-sm hover:scale-105 transform shadow-lg relative overflow-hidden group/btn">
                  <span className="relative z-10">Schedule a Call</span>
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover/btn:translate-x-full transition-transform duration-1000"></div>
                </Button> */}
              </div>

              {/* Contact Stats */}
              {(() => {
                const stats = [
                  { value: "10+", label: "Projects Completed" },
                  { value: "24/7", label: "Support Available" },
                  { value: "100%", label: "Client Satisfaction" },
                  { value: "50K+", label: "Lines of Code Written" },
                  { value: "20+", label: "Tech Stack Tools" },
                ];
                // Shuffle the stats array and pick the first 3
                const shuffled = [...stats].sort(() => Math.random() - 0.5);
                const selectedStats = shuffled.slice(0, 3);
                return (
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-8 pt-8 border-t border-white/10">
                    {selectedStats.map((stat) => (
                      <div className="text-center" key={stat.label}>
                        <div className="text-3xl font-bold text-[#194EFF] mb-2">{stat.value}</div>
                        <div className="text-white/60 text-sm">{stat.label}</div>
                      </div>
                    ))}
                  </div>
                );
              })()}
              
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}; 