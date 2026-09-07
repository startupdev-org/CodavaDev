import React from "react";
import {
  FadeIn,
  StaggerContainer,
  StaggerItem
} from "../../../../components/ui/animated-elements";
import { useTranslation } from "../../../../contexts/LanguageContext";

export const DigitalAdvertisingFeaturesSection = () => {
  const { t } = useTranslation();

  const featureIcons = [
    (
      <svg className="w-8 h-8 text-[#194EFF]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L3.732 16.5c-.77.833.192 2.5 1.732 2.5z" />
      </svg>
    ),
    (
      <svg className="w-8 h-8 text-[#194EFF]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
      </svg>
    ),
    (
      <svg className="w-8 h-8 text-[#194EFF]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
      </svg>
    ),
    (
      <svg className="w-8 h-8 text-[#194EFF]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
      </svg>
    ),
    (
      <svg className="w-8 h-8 text-[#194EFF]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4m0 0L7 13m0 0l-1.1 5H19M7 13l1.1 5M7 13v8a2 2 0 002 2h8a2 2 0 002-2v-3" />
      </svg>
    ),
    (
      <svg className="w-8 h-8 text-[#194EFF]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    )
  ];

  const platformIcons = [
    (
      <svg className="w-6 h-6 text-[#194EFF]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
      </svg>
    ),
    (
      <svg className="w-6 h-6 text-[#194EFF]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
      </svg>
    ),
    (
      <svg className="w-6 h-6 text-[#194EFF]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
      </svg>
    ),
    (
      <svg className="w-6 h-6 text-[#194EFF]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9v-9m0 9c-1.657 0-3-4.03-3-9s1.343-9 3-9m0 18c1.657 0 3-4.03 3-9s-1.343-9-3-9m-9 9a9 9 0 019-9" />
      </svg>
    )
  ];

  const features = (t('digital_advertising.features.items', { returnObjects: true }) as Array<{
    title: string;
    description: string;
  }>).map((feature, index) => ({ ...feature, icon: featureIcons[index] }));

  const platforms = (t('digital_advertising.features.platforms', { returnObjects: true }) as Array<{
    name: string;
    description: string;
    specialties: string[];
  }>).map((platform, index) => ({ ...platform, icon: platformIcons[index] }));

  return (
    <section className="relative py-24 bg-gradient-to-b from-[#00041F] via-[#00020F] to-[#00041F]">
      <div className="max-w-7xl mx-auto px-6">

        {/* Section Header */}
        <div className="text-center mb-20">
          <FadeIn delay={0.1} direction="up">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-[#194EFF]/10 border border-[#194EFF]/20 rounded-full backdrop-blur-sm mb-6">
              <div className="w-2 h-2 bg-[#194EFF] rounded-full animate-pulse"></div>
              <span className="text-[#194EFF] text-sm font-medium">{t('digital_advertising.features.badge')}</span>
            </div>
          </FadeIn>

          <FadeIn delay={0.2} direction="up">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
              {t('digital_advertising.features.title')}
              <span className="block bg-gradient-to-r from-[#194EFF] to-[#4169E1] bg-clip-text text-transparent leading-[1.2] pb-2 -mb-2">
                {t('digital_advertising.features.title_highlight')}
              </span>
            </h2>
          </FadeIn>

          <FadeIn delay={0.3} direction="up">
            <p className="text-xl text-white/60 leading-relaxed max-w-3xl mx-auto">
              {t('digital_advertising.features.description')}
            </p>
          </FadeIn>
        </div>

        {/* Features Grid */}
        <StaggerContainer staggerDelay={0.1}>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
            {features.map((feature, index) => (
              <StaggerItem key={index}>
                <div className="group p-8 bg-white/5 border border-white/10 rounded-2xl backdrop-blur-sm hover:bg-white/10 hover:border-[#194EFF]/30 transition-all duration-300 transform hover:scale-105">
                  <div className="mb-4">{feature.icon}</div>
                  <h3 className="text-xl font-semibold text-white mb-3 group-hover:text-[#194EFF] transition-colors duration-300">
                    {feature.title}
                  </h3>
                  <p className="text-white/60 leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              </StaggerItem>
            ))}
          </div>
        </StaggerContainer>

        {/* Platforms Section */}
        <div className="text-center mb-16">
          <FadeIn delay={0.1} direction="up">
            <h3 className="text-3xl md:text-4xl font-bold text-white mb-4">
              {t('digital_advertising.features.platforms_title')}
            </h3>
          </FadeIn>
          <FadeIn delay={0.2} direction="up">
            <p className="text-lg text-white/60 max-w-2xl mx-auto">
              {t('digital_advertising.features.platforms_description')}
            </p>
          </FadeIn>
        </div>

        <StaggerContainer staggerDelay={0.15}>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {platforms.map((platform, index) => (
              <StaggerItem key={index}>
                <div className="group p-8 bg-gradient-to-br from-white/5 to-white/[0.02] border border-white/10 rounded-2xl backdrop-blur-sm hover:border-[#194EFF]/30 transition-all duration-300">
                  <div className="flex items-center gap-4 mb-6">
                    <div>{platform.icon}</div>
                    <div>
                      <h4 className="text-xl font-semibold text-white group-hover:text-[#194EFF] transition-colors duration-300">
                        {platform.name}
                      </h4>
                      <p className="text-white/60 text-sm">{platform.description}</p>
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-3">
                    {platform.specialties.map((specialty, specialtyIndex) => (
                      <div key={specialtyIndex} className="px-3 py-2 bg-white/5 border border-white/10 rounded-lg text-white/80 text-sm font-medium text-center hover:bg-white/10 transition-all duration-300">
                        {specialty}
                      </div>
                    ))}
                  </div>
                </div>
              </StaggerItem>
            ))}
          </div>
        </StaggerContainer>

      </div>
    </section>
  );
}; 