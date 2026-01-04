import React from "react";
import { Card, CardContent } from "../../../../components/ui/card";
import {
  FadeIn,
  StaggerContainer,
  StaggerItem,
  GlowButton,
} from "../../../../components/ui/animated-elements";
import { Mail } from "lucide-react";
import { useNavigate } from "react-router-dom";

export const AboutCallToActionSection = () => {

  const navigate = useNavigate();

  // Contact methods data
  const contactMethods = [
    {
      icon: <Mail className="w-5 h-5 text-primary" />,
      title: "Email",
      description: "Contact our team for proposals, support, or general inquiries.",
      action: "codava.dev@gmail.com",
      link: "mailto:codava.dev@gmail.com"
    }
  ];

  return (
    <section className="relative w-full py-20 sm:py-28 md:py-32 lg:py-40 overflow-hidden">
      <div className="max-w-[1600px] mx-auto px-6 w-full">
        {/* Main CTA Card */}
        <FadeIn delay={0.4} direction="up">
          <Card className="w-full max-w-5xl mx-auto bg-white/[0.03] border border-[#194EFF]/20 rounded-3xl backdrop-blur-xl shadow-2xl hover:shadow-[#194EFF]/10 transition-all duration-500 group relative overflow-hidden">
            <CardContent className="flex flex-col items-center justify-center gap-8 sm:gap-10 lg:gap-12 p-4 sm:p-8 lg:p-12 relative z-10 w-full ">
              {/* Centered Content */}
              <div className="flex flex-col items-center justify-center gap-8 sm:gap-10 lg:gap-12 w-full">
                <div className="flex flex-col items-center gap-6 sm:gap-8 w-full">
                  <div className="flex flex-col items-center gap-2 sm:gap-4">
                    <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white text-center">
                      Ready to Start Your Digital <span className="text-transparent bg-gradient-to-r from-[#194EFF] to-blue-400 bg-clip-text">Transformation?</span>
                    </h2>
                    <p className="font-medium text-white/70 text-base sm:text-lg leading-[22px] sm:leading-[27px] text-center">
                      Join businesses that have streamlined operations, boosted customer engagement, and accelerated growth with our cutting-edge technology solutions - trusted by startups and enterprises alike.
                    </p>
                  </div>
                </div>
                <div className="flex flex-col items-center gap-4 sm:gap-6 w-full max-w-md mx-auto">
                  <button
                    className="group px-9 py-3.5 bg-[#194EFF] text-white font-semibold text-base rounded-lg hover:bg-[#1E40AF] transition-all duration-300 shadow-lg shadow-[#194EFF]/25 hover:shadow-[#194EFF]/40 transform hover:scale-105"
                    onClick={() => navigate('/contact')}
                  >
                    <span className="flex items-center gap-2.5">
                      Let's discuss
                      <svg className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                      </svg>
                    </span>
                  </button>
                </div>
              </div>
            </CardContent>
            {/* Background Effects */}
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-[#194EFF]/5 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-2000 rounded-3xl"></div>
          </Card>
        </FadeIn>
      </div>
    </section>
  );
};