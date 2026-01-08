import { useMemo } from "react";
import { 
  FadeIn, 
  GlowButton
} from "../../components/ui/animated-elements";
import { useTranslation } from "../../contexts/LanguageContext";

export const CTASection = () => {
  const { t } = useTranslation();

  const selectedStats = useMemo(() => {
    const stats = [
      { value: "10+", label: t('cta_section.stats.projects_completed') },
      { value: "24/7", label: t('cta_section.stats.support_available') },
      { value: "100%", label: t('cta_section.stats.client_satisfaction') },
      { value: "50K+", label: t('cta_section.stats.lines_of_code') },
      { value: "20+", label: t('cta_section.stats.tech_stack_tools') },
    ];
    // Shuffle the stats array and pick the first 3
    const shuffled = [...stats].sort(() => Math.random() - 0.5);
    return shuffled.slice(0, 3);
  }, [t]);

  return (
    <section className="relative py-20 md:py-28">
      <div className="max-w-full mx-auto px-6 md:px-12 lg:px-16 relative z-10">
        <FadeIn delay={0.1} direction="up">
          <div className="text-center bg-white/[0.03] border border-white/10 rounded-3xl p-8 md:p-12 lg:p-16 backdrop-blur-xl shadow-xl shadow-black/20 hover:shadow-[#194EFF]/10 transition-all duration-500 relative overflow-hidden group">
            {/* Background Gradient */}
            <div className="absolute inset-0 bg-gradient-to-br from-[#194EFF]/[0.03] via-transparent to-[#194EFF]/[0.05] opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-3xl"></div>
            
            <div className="relative z-10">
              <h3 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 md:mb-8">
                {t('cta_section.title')} <span className="block bg-gradient-to-r from-[#194EFF] via-[#194EFF]/90 to-[#194EFF]/70 bg-clip-text text-transparent"> {t('cta_section.title_highlight')} </span>
              </h3>
              
              <p className="text-white/70 text-lg md:text-xl lg:text-2xl mt-6 md:mt-8 mb-8 md:mb-12 max-w-3xl mx-auto font-light leading-relaxed">
                {t('cta_section.subtitle')}
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 md:gap-6 justify-center mb-12 md:mb-16">
                <GlowButton 
                  onClick={() => window.open("https://calendly.com/codava-dev/30min", "_blank")}
                  className="px-8 md:px-10 py-4 md:py-5 bg-gradient-to-r from-[#194EFF] to-[#194EFF]/90 text-white font-semibold text-base md:text-lg rounded-2xl hover:from-[#194EFF]/90 hover:to-[#194EFF]/80 transition-all duration-300 shadow-xl shadow-[#194EFF]/25 hover:shadow-[#194EFF]/40 hover:scale-105 transform relative overflow-hidden group/btn"
                >
                  <span className="relative z-10">{t('cta_section.primary_button')}</span>
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover/btn:translate-x-full transition-transform duration-1000"></div>
                </GlowButton>
              </div>

              {/* Contact Stats */}
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 lg:gap-12 pt-10 md:pt-12 border-t border-white/10">
                    {selectedStats.map((stat) => (
                      <div className="text-center" key={stat.label}>
                        <div className="text-3xl md:text-4xl font-bold text-[#194EFF] mb-2 md:mb-3">{stat.value}</div>
                        <div className="text-white/60 text-sm md:text-base">{stat.label}</div>
                      </div>
                    ))}
                  </div>
              
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}; 