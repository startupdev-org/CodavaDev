import React from "react";
import {
  FadeIn,
  GlowButton
} from "../../../../components/ui/animated-elements";

export const CopywritingCTASection = () => {
  return (
    <section className="relative py-24 bg-gradient-to-b from-[#00041F] to-[#00020F]">
      <div className="absolute inset-0">
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#194EFF]/10 rounded-full blur-3xl animate-pulse" style={{ animationDuration: '4s' }}></div>
      </div>

      <div className="relative max-w-4xl mx-auto px-6 text-center">

        <FadeIn delay={0.1} direction="up">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-[#194EFF]/10 border border-[#194EFF]/20 rounded-full backdrop-blur-sm mb-8">
            <div className="w-2 h-2 bg-[#194EFF] rounded-full animate-pulse"></div>
            <span className="text-[#194EFF] text-sm font-medium">Ready to Write?</span>
          </div>
        </FadeIn>

        <FadeIn delay={0.2} direction="up">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
            Let's Create Content
            <span className="block bg-gradient-to-r from-[#194EFF] to-[#4169E1] bg-clip-text text-transparent">
              That Converts
            </span>
          </h2>
        </FadeIn>

        <FadeIn delay={0.3} direction="up">
          <p className="text-xl text-white/70 leading-relaxed mb-12 max-w-2xl mx-auto">
            Ready to transform your marketing with words that work? Let's craft compelling copy that turns your audience into customers.
          </p>
        </FadeIn>

        <FadeIn delay={0.4} direction="up">
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-12">
            <GlowButton className="group px-10 py-4 bg-[#194EFF] hover:bg-[#194EFF]/90 rounded-xl font-semibold text-lg transition-all duration-300 flex items-center gap-3 shadow-2xl hover:shadow-[#194EFF]/30 hover:scale-105 transform relative overflow-hidden text-white">
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
              <span className="relative z-10">Start Copy Project</span>
              <svg className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1 relative z-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </GlowButton>

            <GlowButton className="group px-10 py-4 bg-white/[0.03] border border-[#194EFF]/30 hover:border-[#194EFF]/50 hover:bg-white/[0.05] rounded-xl font-semibold text-white text-lg transition-all duration-300 backdrop-blur-sm hover:scale-105 transform shadow-lg relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-[#194EFF]/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
              <span className="relative z-10 flex items-center gap-3">
                Content Samples
                <svg className="w-5 h-5 transition-transform duration-300 group-hover:rotate-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
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
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">Fast Delivery</h3>
              <p className="text-white/60 text-sm">Quality copy delivered within 5-7 days</p>
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

            <div className="flex flex-col items-center">
              <div className="w-16 h-16 bg-gradient-to-r from-[#194EFF]/20 to-[#194EFF]/10 border border-[#194EFF]/30 rounded-2xl flex items-center justify-center mb-4">
                <svg className="w-8 h-8 text-[#194EFF]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192L5.636 18.364M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">Expert Writers</h3>
              <p className="text-white/60 text-sm">Experienced copywriters who understand conversion</p>
            </div>
          </div>
        </FadeIn>

      </div>
    </section>
  );
}; 