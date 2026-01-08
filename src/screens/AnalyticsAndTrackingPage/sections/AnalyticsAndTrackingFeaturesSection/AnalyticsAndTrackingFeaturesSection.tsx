import { FadeIn, StaggerContainer, StaggerItem } from "../../../../components/ui/animated-elements";
import { useTranslation } from "../../../../contexts/LanguageContext";

export const AnalyticsAndTrackingFeaturesSection = () => {
  const { t } = useTranslation();
  
  const features = [
    {
      icon: (
        <svg className="w-8 h-8 text-[#194EFF]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
        </svg>
      ),
      title: t('analytics_tracking_page.features.items.google_analytics.title'),
      description: t('analytics_tracking_page.features.items.google_analytics.description'),
    },
    {
      icon: (
        <svg className="w-8 h-8 text-[#194EFF]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
        </svg>
      ),
      title: t('analytics_tracking_page.features.items.conversion_tracking.title'),
      description: t('analytics_tracking_page.features.items.conversion_tracking.description'),
    },
    {
      icon: (
        <svg className="w-8 h-8 text-[#194EFF]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 18.657A8 8 0 016.343 7.343S7 9 9 10c0-2 .5-5 2.986-7C14 5 16.09 5.777 17.656 7.343A7.975 7.975 0 0120 13a7.975 7.975 0 01-2.343 5.657z" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.879 16.121A3 3 0 1012.015 11L11 14H9c0 .768.293 1.536.879 2.121z" />
        </svg>
      ),
      title: t('analytics_tracking_page.features.items.heatmaps.title'),
      description: t('analytics_tracking_page.features.items.heatmaps.description'),
    },
    {
      icon: (
        <svg className="w-8 h-8 text-[#194EFF]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 17v-2m3 2v-4m3 4v-6m2 10H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
        </svg>
      ),
      title: t('analytics_tracking_page.features.items.performance_dashboards.title'),
      description: t('analytics_tracking_page.features.items.performance_dashboards.description'),
    },
  ];
  return (
    <section className="relative py-24 bg-gradient-to-b from-[#00041F] via-[#00020F] to-[#00041F] px-2">
      <div className="max-w-5xl mx-auto px-2 md:px-4">
        <h2 className="text-4xl md:text-5xl font-bold text-white mb-12 text-center">
          {t('analytics_tracking_page.features.title')}
        </h2>
        <StaggerContainer staggerDelay={0.1}>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-20">
            {features.map((feature, idx) => (
              <StaggerItem key={idx}>
                <div className="group p-8 bg-white/5 border border-white/10 rounded-2xl backdrop-blur-sm hover:bg-white/10 hover:border-[#194EFF]/30 transition-all duration-300 transform hover:scale-105">
                  <div className="mb-4">
                    {feature.icon}
                  </div>
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
      </div>
    </section>
  );
};