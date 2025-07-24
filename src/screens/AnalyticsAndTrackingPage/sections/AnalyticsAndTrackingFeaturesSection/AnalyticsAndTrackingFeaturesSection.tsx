import React from "react";
import { FadeIn, StaggerContainer, StaggerItem } from "../../../../components/ui/animated-elements";
import { ChartBarIcon, CursorArrowRaysIcon, FireIcon, PresentationChartLineIcon } from "@heroicons/react/24/outline";

const features = [
  {
    icon: <ChartBarIcon className="w-7 h-7 text-blue-500" />,
    title: "Google Analytics Setup",
    description: "Comprehensive setup and configuration for accurate website tracking and reporting.",
  },
  {
    icon: <CursorArrowRaysIcon className="w-7 h-7 text-green-500" />,
    title: "Conversion Tracking",
    description: "Monitor key actions and measure what matters most to your business.",
  },
  {
    icon: <FireIcon className="w-7 h-7 text-pink-500" />,
    title: "Heatmaps & Session Recordings",
    description: "Visualize user behavior and identify opportunities for UX improvements.",
  },
  {
    icon: <PresentationChartLineIcon className="w-7 h-7 text-purple-500" />,
    title: "Performance Dashboards",
    description: "Custom dashboards to track KPIs and make data-driven decisions.",
  },
];

export const AnalyticsAndTrackingFeaturesSection = () => {
  return (
    <section className="relative py-24 bg-gradient-to-b from-[#00041F] via-[#00020F] to-[#00041F] px-2">
      <div className="max-w-5xl mx-auto px-2 md:px-4">
        <h2 className="text-4xl md:text-5xl font-bold text-white mb-12 text-center">
          Analytics & Tracking Features
        </h2>
        <StaggerContainer staggerDelay={0.1}>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-20">
            {features.map((feature, idx) => (
              <StaggerItem key={idx}>
                <div className="group p-8 bg-white/5 border border-white/10 rounded-2xl backdrop-blur-sm hover:bg-white/10 hover:border-[#194EFF]/30 transition-all duration-300 transform hover:scale-105">
                  <div className="flex items-center gap-3 mb-4 text-4xl">
                    {feature.icon}
                    <h3 className="text-xl font-semibold text-white group-hover:text-[#194EFF] transition-colors duration-300 mb-0">
                      {feature.title}
                    </h3>
                  </div>
                  <p className="text-white/60 leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              </StaggerItem>
            ))}
          </div>
        </StaggerContainer>
      </div>
    </section>
  );
};