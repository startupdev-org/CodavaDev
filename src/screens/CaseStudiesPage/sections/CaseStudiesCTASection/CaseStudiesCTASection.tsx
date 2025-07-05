import React from "react";
import { Button } from "../../../../components/ui/button";
import { 
  FadeIn, 
  GlowButton
} from "../../../../components/ui/animated-elements";

export const CaseStudiesCTASection: React.FC = () => {
  return (
    <section className="relative py-24">
      <div className="max-w-6xl mx-auto px-8 relative z-10">
        <FadeIn delay={0.1} direction="up">
          <div className="text-center bg-white/[0.03] border border-white/10 rounded-3xl p-12 backdrop-blur-xl shadow-xl shadow-black/20 hover:shadow-[#194EFF]/10 transition-all duration-500">
            <h3 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Ready to Create
              <span className="block bg-gradient-to-r from-[#194EFF] via-[#194EFF]/90 to-[#194EFF]/70 bg-clip-text text-transparent">
                Your Success Story?
              </span>
            </h3>
            
            <p className="text-white/70 text-xl mb-10 max-w-3xl mx-auto font-light leading-relaxed">
              Let's work together to transform your business challenges into opportunities for growth and innovation.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-10">
              <GlowButton className="px-10 py-5 bg-gradient-to-r from-[#194EFF] to-[#194EFF]/90 text-white font-semibold text-lg rounded-2xl hover:from-[#194EFF]/90 hover:to-[#194EFF]/80 transition-all duration-300 shadow-xl shadow-[#194EFF]/25 hover:shadow-[#194EFF]/40 hover:scale-105 transform">
                Start Your Project
              </GlowButton>
              <Button className="px-10 py-5 bg-white/8 text-white font-semibold text-lg rounded-2xl border border-white/20 hover:bg-white/15 hover:border-[#194EFF]/40 transition-all duration-300 backdrop-blur-sm hover:scale-105 transform">
                Schedule Consultation
              </Button>
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}; 