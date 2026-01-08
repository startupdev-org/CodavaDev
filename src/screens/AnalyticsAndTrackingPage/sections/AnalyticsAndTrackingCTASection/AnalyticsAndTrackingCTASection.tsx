import { FadeIn, GlowButton } from "../../../../components/ui/animated-elements";
import { useTranslation } from "../../../../contexts/LanguageContext";

export const AnalyticsAndTrackingCTASection = () => {
  const { t } = useTranslation();
  return (
    <section className="relative py-24 bg-gradient-to-b from-[#00041F] to-[#00020F]">
      <div className="absolute inset-0">
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#194EFF]/10 rounded-full blur-3xl animate-pulse" style={{ animationDuration: '4s' }}></div>
      </div>
      <div className="relative max-w-4xl mx-auto px-6 text-center">
        <FadeIn delay={0.1} direction="up">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-[#194EFF]/10 border border-[#194EFF]/20 rounded-full backdrop-blur-sm mb-8">
            <div className="w-2 h-2 bg-[#194EFF] rounded-full animate-pulse"></div>
            <span className="text-[#194EFF] text-sm font-medium">{t('analytics_tracking_page.cta.badge')}</span>
          </div>
        </FadeIn>
        <FadeIn delay={0.2} direction="up">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight">
            {t('analytics_tracking_page.cta.title')}
            <span className="block bg-gradient-to-r from-[#194EFF] to-[#4169E1] bg-clip-text text-transparent h-20">
              {t('analytics_tracking_page.cta.title_highlight')}
            </span>
          </h2>
        </FadeIn>
        <FadeIn delay={0.3} direction="up">
          <p className="text-xl text-white/70 leading-relaxed mb-12 max-w-2xl mx-auto">
            {t('analytics_tracking_page.cta.description')}
          </p>
        </FadeIn>
        <FadeIn delay={0.4} direction="up">
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-12">
            <GlowButton
              onClick={() => window.location.href = '/contact'}
              className="group px-10 py-4 bg-[#194EFF] hover:bg-[#194EFF]/90 rounded-xl font-semibold text-lg transition-all duration-300 flex items-center gap-3 shadow-2xl hover:shadow-[#194EFF]/30 hover:scale-105 transform relative overflow-hidden text-white"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
              <span className="relative z-10">{t('analytics_tracking_page.cta.button')}</span>
              <svg className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1 relative z-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </GlowButton>
          </div>
        </FadeIn>
        <FadeIn delay={0.5} direction="up">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div className="flex flex-col items-center">
              <div className="w-16 h-16 bg-gradient-to-r from-[#194EFF]/20 to-[#194EFF]/10 border border-[#194EFF]/30 rounded-2xl flex items-center justify-center mb-4">
                <svg className="w-8 h-8 text-[#194EFF]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">{t('analytics_tracking_page.cta.benefits.fast_setup.title')}</h3>
              <p className="text-white/60 text-sm">{t('analytics_tracking_page.cta.benefits.fast_setup.description')}</p>
            </div>
            <div className="flex flex-col items-center">
              <div className="w-16 h-16 bg-gradient-to-r from-[#194EFF]/20 to-[#194EFF]/10 border border-[#194EFF]/30 rounded-2xl flex items-center justify-center mb-4">
                <svg className="w-8 h-8 text-[#194EFF]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">{t('analytics_tracking_page.cta.benefits.actionable_insights.title')}</h3>
              <p className="text-white/60 text-sm">{t('analytics_tracking_page.cta.benefits.actionable_insights.description')}</p>
            </div>
            <div className="flex flex-col items-center">
              <div className="w-16 h-16 bg-gradient-to-r from-[#194EFF]/20 to-[#194EFF]/10 border border-[#194EFF]/30 rounded-2xl flex items-center justify-center mb-4">
                <svg className="w-8 h-8 text-[#194EFF]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192L5.636 18.364M12 2.5a9.5 9.5 0 110 19 9.5 9.5 0 010-19z" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">{t('analytics_tracking_page.cta.benefits.ongoing_support.title')}</h3>
              <p className="text-white/60 text-sm">{t('analytics_tracking_page.cta.benefits.ongoing_support.description')}</p>
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}; 