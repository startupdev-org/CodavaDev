import React from "react";
import {
  FadeIn,
  StaggerContainer,
  StaggerItem
} from "../../../../components/ui/animated-elements";
import { PencilIcon, EnvelopeIcon, DocumentTextIcon, ChatBubbleOvalLeftIcon, ChartBarIcon, LightBulbIcon } from '@heroicons/react/24/outline';


export const CopywritingFeaturesSection = () => {
  const features = [
    {
      icon: <PencilIcon className="w-6 h-6 text-blue-600" />,
      title: "Conversion Copywriting",
      description: "Persuasive, action-driven copy that turns visitors into loyal customers through strategic messaging and compelling calls to action."
    },
    {
      icon: <EnvelopeIcon className="w-6 h-6 text-green-600" />,
      title: "Email Marketing",
      description: "Effective email sequences and newsletters designed to nurture leads, boost engagement, and increase conversions."
    },
    {
      icon: <DocumentTextIcon className="w-6 h-6 text-indigo-600" />,
      title: "Website Content",
      description: "Clear and impactful copy that communicates your brand's value, builds trust, and encourages user action."
    },
    {
      icon: <ChatBubbleOvalLeftIcon className="w-6 h-6 text-pink-600" />,
      title: "Social Media Copy",
      description: "Scroll-stopping content crafted to increase engagement, build brand identity, and drive interaction on key platforms."
    },
    {
      icon: <ChartBarIcon className="w-6 h-6 text-yellow-600" />,
      title: "Sales Pages",
      description: "High-converting landing and sales pages that highlight your offer's benefits and guide visitors toward action."
    },
    {
      icon: <LightBulbIcon className="w-6 h-6 text-purple-600" />,
      title: "Content Strategy",
      description: "Tailored content planning aligned with your business goals and audience interests to maximize reach and impact."
    }
  ];

  return (
    <section className="relative py-24 bg-gradient-to-b from-[#00041F] via-[#00020F] to-[#00041F]">
      <div className="max-w-7xl mx-auto px-6">

        <div className="text-center mb-20">
          <FadeIn delay={0.1} direction="up">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-[#194EFF]/10 border border-[#194EFF]/20 rounded-full backdrop-blur-sm mb-6">
              <div className="w-2 h-2 bg-[#194EFF] rounded-full animate-pulse"></div>
              <span className="text-[#194EFF] text-sm font-medium">Content Excellence</span>
            </div>
          </FadeIn>

          <FadeIn delay={0.2} direction="up">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
              Words That Work <span className="block bg-gradient-to-r from-[#194EFF] to-[#4169E1] bg-clip-text text-transparent">
                Content That Converts
              </span>
            </h2>
          </FadeIn>

          <FadeIn delay={0.3} direction="up">
            <p className="text-xl text-white/60 leading-relaxed max-w-3xl mx-auto">
              Every word is crafted with purpose. We create content that not only engages your audience but drives them to take action and become loyal customers.
            </p>
          </FadeIn>
        </div>

        <StaggerContainer staggerDelay={0.1}>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature) => (
              <StaggerItem key={feature.title}>
                <div className="group p-8 bg-white/5 border border-white/10 rounded-2xl backdrop-blur-sm hover:bg-white/10 hover:border-[#194EFF]/30 transition-all duration-300 transform hover:scale-105">
                  <div className="flex items-center gap-3 mb-4 text-4xl">{feature.icon}<h3 className="text-xl font-semibold text-white group-hover:text-[#194EFF] transition-colors duration-300 mb-0">{feature.title}</h3></div>
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