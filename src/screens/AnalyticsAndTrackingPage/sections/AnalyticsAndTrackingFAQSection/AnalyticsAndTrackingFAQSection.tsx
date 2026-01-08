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
    <section ref={faqSectionRef} className="relative py-20 bg-gradient-to-b from-[#00041F] via-[#00020F] to-[#00041F]">
      <div className="max-w-5xl mx-auto px-4">
        <h2 className="text-4xl md:text-5xl font-bold text-white mb-12 text-center">{t('analytics_tracking_page.faq.title')}</h2>
        <div className="space-y-12">
          {faqData.map((block, blockIdx) => (
            <div key={block.block} className="s-faq__block">
              <h3 className="s-faq__block-title text-2xl font-semibold text-[#194EFF] mb-6">{block.block}</h3>
              <div className="faq-list space-y-4">
                {block.faqs.map((faq, faqIdx) => (
                  <div
                    key={faq.q}
                    ref={el => {
                      if (!questionRefs.current[blockIdx]) questionRefs.current[blockIdx] = [];
                      questionRefs.current[blockIdx][faqIdx] = el;
                    }}
                    className="faq-item bg-white/[0.03] border border-white/10 rounded-2xl overflow-hidden hover:border-[#194EFF]/30 hover:bg-white/[0.06] transition-all duration-500 backdrop-blur-xl shadow-lg"
                  >
                    <button
                      className="faq-question w-full px-6 py-4 text-left flex justify-between items-center text-lg font-medium text-white group hover:text-[#194EFF] transition-colors duration-300"
                      onClick={() => toggle(blockIdx, faqIdx)}
                    >
                      <span>{faq.q}</span>
                      <svg className={`w-5 h-5 ml-4 transition-transform duration-300 ${open[blockIdx] === faqIdx ? 'rotate-180 text-[#194EFF]' : 'text-white/60'}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M19 9l-7 7-7-7" />
                      </svg>
                    </button>
                    <div
                      className={`faq-answer transition-all duration-500 ease-in-out
                        ${open[blockIdx] === faqIdx
                          ? 'max-h-none sm:max-h-[700px] opacity-100 px-6 pb-4 border-t border-[#194EFF]/20'
                          : 'max-h-0 opacity-0 overflow-hidden p-0 border-0'
                        } bg-gradient-to-r from-[#194EFF]/[0.02] via-transparent to-[#194EFF]/[0.02]`}
                    >
                      <div className="pt-4 text-white/80 leading-relaxed text-base">
                        {faq.a}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}; 