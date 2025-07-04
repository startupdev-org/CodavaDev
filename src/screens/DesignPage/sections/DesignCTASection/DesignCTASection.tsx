import React from "react";
import { 
  FadeIn, 
  GlowButton
} from "../../../../components/ui/animated-elements";

export const DesignCTASection = (): JSX.Element => {
  return (
    <section className="relative py-24 bg-gradient-to-b from-[#00041F] to-[#00020F]">
      {/* Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#194EFF]/10 rounded-full blur-3xl animate-pulse" style={{animationDuration: '4s'}}></div>
      </div>

      <div className="relative max-w-4xl mx-auto px-6 text-center">
        
        <FadeIn delay={0.1} direction="up">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-[#194EFF]/10 border border-[#194EFF]/20 rounded-full backdrop-blur-sm mb-8">
            <div className="w-2 h-2 bg-[#194EFF] rounded-full animate-pulse"></div>
            <span className="text-[#194EFF] text-sm font-medium">Ready to Design?</span>
          </div>
        </FadeIn>

        <FadeIn delay={0.2} direction="up">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
            Let's Create Something
            <span className="block bg-gradient-to-r from-[#194EFF] to-[#4169E1] bg-clip-text text-transparent">
              Amazing Together
            </span>
          </h2>
        </FadeIn>

        <FadeIn delay={0.3} direction="up">
          <p className="text-xl text-white/70 leading-relaxed mb-12 max-w-2xl mx-auto">
            From initial concept to final execution, we'll work closely with you to bring your vision to life with stunning, effective design.
          </p>
        </FadeIn>

        <FadeIn delay={0.4} direction="up">
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-12">
            <GlowButton className="group px-10 py-4 bg-[#194EFF] hover:bg-[#194EFF]/90 rounded-xl font-semibold text-lg transition-all duration-300 flex items-center gap-3 shadow-2xl hover:shadow-[#194EFF]/30 hover:scale-105 transform relative overflow-hidden text-white">
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
              <span className="relative z-10">Start Design Project</span>
              <svg className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1 relative z-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </GlowButton>

            <GlowButton className="group px-10 py-4 bg-white/[0.03] border border-[#194EFF]/30 hover:border-[#194EFF]/50 hover:bg-white/[0.05] rounded-xl font-semibold text-white text-lg transition-all duration-300 backdrop-blur-sm hover:scale-105 transform shadow-lg relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-[#194EFF]/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
              <span className="relative z-10 flex items-center gap-3">
                View Design Portfolio
                <svg className="w-5 h-5 transition-transform duration-300 group-hover:rotate-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                </svg>
              </span>
            </GlowButton>
          </div>
        </FadeIn>

        <FadeIn delay={0.5} direction="up">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div className="flex flex-col items-center">
              <div className="w-16 h-16 bg-gradient-to-r from-[#194EFF]/20 to-[#194EFF]/10 border border-[#194EFF]/30 rounded-2xl flex items-center justify-center mb-4">
                <svg className="w-8 h-8 text-[#194EFF]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">Passionate Team</h3>
              <p className="text-white/60 text-sm">Award-winning designers who love what they do</p>
            </div>

            <div className="flex flex-col items-center">
              <div className="w-16 h-16 bg-gradient-to-r from-[#194EFF]/20 to-[#194EFF]/10 border border-[#194EFF]/30 rounded-2xl flex items-center justify-center mb-4">
                <svg className="w-8 h-8 text-[#194EFF]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">Fast Turnaround</h3>
              <p className="text-white/60 text-sm">Most design projects completed in 2-4 weeks</p>
            </div>

            <div className="flex flex-col items-center">
              <div className="w-16 h-16 bg-gradient-to-r from-[#194EFF]/20 to-[#194EFF]/10 border border-[#194EFF]/30 rounded-2xl flex items-center justify-center mb-4">
                <svg className="w-8 h-8 text-[#194EFF]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">Unlimited Revisions</h3>
              <p className="text-white/60 text-sm">We work until you're 100% satisfied</p>
            </div>
          </div>
        </FadeIn>

      </div>
    </section>
  );
}; 