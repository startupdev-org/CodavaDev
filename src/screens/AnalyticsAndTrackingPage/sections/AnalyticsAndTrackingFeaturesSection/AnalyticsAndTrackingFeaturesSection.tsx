import React from "react";
import { FadeIn, StaggerContainer, StaggerItem } from "../../../../components/ui/animated-elements";

const features = [
  {
    title: "Google Analytics Setup",
    description: "Comprehensive setup and configuration for accurate website tracking and reporting."
  },
  {
    title: "Conversion Tracking",
    description: "Monitor key actions and measure what matters most to your business."
  },
  {
    title: "Heatmaps & Session Recordings",
    description: "Visualize user behavior and identify opportunities for UX improvements."
  },
  {
    title: "Performance Dashboards",
    description: "Custom dashboards to track KPIs and make data-driven decisions."
  }
];

export const AnalyticsAndTrackingFeaturesSection = () => {
  return (
    <section className="relative py-24 bg-gradient-to-b from-[#00041F] via-[#00020F] to-[#00041F] px-2">
      <div className="max-w-5xl mx-auto px-2 md:px-4">
        <h2 className="text-4xl md:text-5xl font-bold text-white mb-12 text-center">Analytics & Tracking Features</h2>
        <StaggerContainer staggerDelay={0.1}>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-20">
            {features.map((feature, idx) => (
              <StaggerItem key={idx}>
                <div className="bg-white/[0.03] border border-white/10 rounded-3xl p-8 shadow-lg backdrop-blur-xl hover:border-[#194EFF]/30 hover:bg-white/[0.06] transition-all duration-500 flex flex-col h-full">
                  <div className="w-12 h-12 bg-gradient-to-br from-[#194EFF]/15 to-[#194EFF]/5 border border-[#194EFF]/20 rounded-2xl flex items-center justify-center text-[#194EFF] mb-6">
                    <svg className="w-7 h-7" fill="none" stroke="currentColor" strokeWidth={2.2} viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M3 17v2a2 2 0 002 2h14a2 2 0 002-2v-2M16 11V7a4 4 0 10-8 0v4M12 17v-6" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-bold text-white mb-3">{feature.title}</h3>
                  <p className="text-white/70 mb-4 flex-1">{feature.description}</p>
                </div>
              </StaggerItem>
            ))}
          </div>
        </StaggerContainer>
      </div>
    </section>
  );
}; 