import { useState, useRef } from "react";
import { useTranslation } from "../../../../contexts/LanguageContext";

export const AnalyticsAndTrackingFAQSection = () => {
  const { t } = useTranslation();
  
  const faqData = [
    {
      block: t('analytics_tracking_page.faq.blocks.general.title'),
      faqs: [
        {
          q: t('analytics_tracking_page.faq.blocks.general.items.what_is.q'),
          a: t('analytics_tracking_page.faq.blocks.general.items.what_is.a')
        },
        {
          q: t('analytics_tracking_page.faq.blocks.general.items.why_google_analytics.q'),
          a: t('analytics_tracking_page.faq.blocks.general.items.why_google_analytics.a')
        },
        {
          q: t('analytics_tracking_page.faq.blocks.general.items.what_is_conversion.q'),
          a: t('analytics_tracking_page.faq.blocks.general.items.what_is_conversion.a')
        },
        {
          q: t('analytics_tracking_page.faq.blocks.general.items.how_heatmaps.q'),
          a: t('analytics_tracking_page.faq.blocks.general.items.how_heatmaps.a')
        },
        {
          q: t('analytics_tracking_page.faq.blocks.general.items.what_dashboards.q'),
          a: t('analytics_tracking_page.faq.blocks.general.items.what_dashboards.a')
        },
        {
          q: t('analytics_tracking_page.faq.blocks.general.items.can_setup.q'),
          a: t('analytics_tracking_page.faq.blocks.general.items.can_setup.a')
        }
      ]
    },
    {
      block: t('analytics_tracking_page.faq.blocks.technical.title'),
      faqs: [
        {
          q: t('analytics_tracking_page.faq.blocks.technical.items.data_secure.q'),
          a: t('analytics_tracking_page.faq.blocks.technical.items.data_secure.a')
        },
        {
          q: t('analytics_tracking_page.faq.blocks.technical.items.access_data.q'),
          a: t('analytics_tracking_page.faq.blocks.technical.items.access_data.a')
        },
        {
          q: t('analytics_tracking_page.faq.blocks.technical.items.integrate_tools.q'),
          a: t('analytics_tracking_page.faq.blocks.technical.items.integrate_tools.a')
        }
      ]
    }
  ];
  const [open, setOpen] = useState<{[key: string]: number | null}>({});
  const faqSectionRef = useRef<HTMLDivElement>(null);
  const questionRefs = useRef<(HTMLDivElement | null)[][]>([]);

  const toggle = (blockIdx: number, faqIdx: number) => {
    setOpen((prev) => ({
      ...prev,
      [blockIdx]: prev[blockIdx] === faqIdx ? null : faqIdx
    }));
  };

  return (
    <section ref={faqSectionRef} className="relative py-16 bg-gradient-to-b from-[#00041F] via-[#00020F] to-[#00041F]">
      <div className="max-w-6xl mx-auto px-0 lg:px-8 relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-5 py-2.5 bg-white/8 border border-[#194EFF]/25 rounded-full mb-8 backdrop-blur-lg shadow-lg shadow-[#194EFF]/10">
            <div className="w-2.5 h-2.5 bg-[#194EFF] rounded-full animate-pulse shadow-sm shadow-[#194EFF]/50"></div>
            <span className="text-[#194EFF] text-sm font-semibold tracking-wide">{t('faq.badge')}</span>
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-5xl font-bold text-white leading-tight">
            {t('analytics_tracking_page.faq.title')}
          </h2>
        </div>

        <div className="space-y-12">
          {faqData.map((block, blockIdx) => (
            <div key={block.block} className="s-faq__block">
              <h3 className="s-faq__block-title text-2xl font-semibold text-[#194EFF] mb-6 px-6 lg:px-0">{block.block}</h3>
              <div className="faq-list space-y-4">
                {block.faqs.map((faq, faqIdx) => {
                  const isOpen = open[blockIdx] === faqIdx;
                  return (
                    <div
                      key={faq.q}
                      ref={el => {
                        if (!questionRefs.current[blockIdx]) questionRefs.current[blockIdx] = [];
                        questionRefs.current[blockIdx][faqIdx] = el;
                      }}
                      className="w-full bg-white/[0.03] border border-white/10 rounded-3xl overflow-hidden hover:border-[#194EFF]/30 hover:bg-white/[0.06] transition-all duration-500 backdrop-blur-xl shadow-lg shadow-black/20 hover:shadow-[#194EFF]/10 group"
                    >
                      <button
                        className="w-full px-6 py-4 text-left grid grid-cols-[1fr,auto] items-center hover:bg-white/[0.02] transition-all duration-300"
                        onClick={() => toggle(blockIdx, faqIdx)}
                      >
                        <span className="text-base font-semibold text-white pr-4">
                          {faq.q}
                        </span>
                        <div className={`w-8 h-8 flex items-center justify-center rounded-xl bg-gradient-to-br from-[#194EFF]/15 to-[#194EFF]/5 border border-[#194EFF]/20 transition-all duration-500 group-hover:border-[#194EFF]/40 group-hover:scale-110 ${isOpen ? 'bg-gradient-to-br from-[#194EFF]/25 to-[#194EFF]/10' : ''}`}>
                          <svg
                            className={`w-4 h-4 text-[#194EFF] transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`}
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M19 9l-7 7-7-7" />
                          </svg>
                        </div>
                      </button>
                      <div
                        className={`overflow-hidden transition-all duration-500 ease-in-out ${isOpen ? 'max-h-[2000px] opacity-100' : 'max-h-0 opacity-0'}`}
                      >
                        <div className="px-6 pb-4 border-t border-white/10 bg-gradient-to-r from-[#194EFF]/[0.02] via-transparent to-[#194EFF]/[0.02]">
                          <div className="text-white/70 leading-relaxed pt-4 text-base font-light">
                            {faq.a}
                          </div>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}; 