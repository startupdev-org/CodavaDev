import React, { useState, useEffect, useRef } from "react";
import { useTranslation } from "../../../../contexts/LanguageContext";

export const WebDevelopmentFAQSection: React.FC = () => {
  const { t } = useTranslation();

const faqData = [
  {
    block: t('web_development.faq.general_questions'),
    faqs: [
      {
        q: t('web_development.faq_content.general.launch_offer'),
        a: (
          <span dangerouslySetInnerHTML={{ __html: t('web_development.faq_content.general.launch_answer') }} />
        ),
      },
      {
        q: t('web_development.faq_content.general.platform'),
        a: t('web_development.faq_content.general.platform_answer'),
      },
      {
        q: t('web_development.faq_content.general.hosting'),
        a: (
          <span dangerouslySetInnerHTML={{ __html: t('web_development.faq_content.general.hosting_answer') }} />
        ),
      },
      {
        q: t('web_development.faq_content.general.domain'),
        a: t('web_development.faq_content.general.domain_answer'),
      },
      {
        q: t('web_development.faq_content.general.timeline'),
        a: (
          <span dangerouslySetInnerHTML={{ __html: t('web_development.faq_content.general.timeline_answer') }} />
        ),
      },
      {
        q: t('web_development.faq_content.general.after_delivery'),
        a: t('web_development.faq_content.general.after_delivery_answer'),
      },
      {
        q: t('web_development.faq_content.general.custom_solutions'),
        a: t('web_development.faq_content.general.custom_solutions_answer'),
      },
    ],
  },
  {
    block: t('web_development.faq.feature_explanations'),
    faqs: [
      {
        q: t('web_development.faq_content.features.seo'),
        a: t('web_development.faq_content.features.seo_answer'),
      },
      {
        q: t('web_development.faq_content.features.cms'),
        a: (
          <span dangerouslySetInnerHTML={{ __html: t('web_development.faq_content.features.cms_answer') }} />
        ),
      },
      {
        q: t('web_development.faq_content.features.ecommerce'),
        a: t('web_development.faq_content.features.ecommerce_answer'),
      },
      {
        q: t('web_development.faq_content.features.analytics'),
        a: t('web_development.faq_content.features.analytics_answer'),
      },
      {
        q: t('web_development.faq_content.features.search_console'),
        a: t('web_development.faq_content.features.search_console_answer'),
      },
      {
        q: t('web_development.faq_content.features.chatbot'),
        a: t('web_development.faq_content.features.chatbot_answer'),
      },
      {
        q: t('web_development.faq_content.features.inventory'),
        a: t('web_development.faq_content.features.inventory_answer'),
      },
      {
        q: t('web_development.faq_content.features.booking'),
        a: t('web_development.faq_content.features.booking_answer'),
      },
      {
        q: t('web_development.faq_content.features.support'),
        a: t('web_development.faq_content.features.support_answer'),
      },
      {
        q: t('web_development.faq_content.features.maintenance'),
        a: t('web_development.faq_content.features.maintenance_answer'),
      },
      {
        q: t('web_development.faq_content.features.ssl'),
        a: t('web_development.faq_content.features.ssl_answer'),
      },
    ],
  },
  {
    block: t('web_development.faq.package_faqs.starter'),
    faqs: [
      {
        q: t('web_development.faq_content.packages.starter_best_for'),
        a: (
          <span dangerouslySetInnerHTML={{ __html: t('web_development.faq_content.packages.starter_best_for_answer') }} />
        ),
      },
      {
        q: t('web_development.faq_content.packages.starter_content_update'),
        a: t('web_development.faq_content.packages.starter_content_update_answer'),
      },
      {
        q: t('web_development.faq_content.packages.starter_seo'),
        a: (
          <span dangerouslySetInnerHTML={{ __html: t('web_development.faq_content.packages.starter_seo_answer') }} />
        ),
      },
    ],
  },
  {
    block: t('web_development.faq.package_faqs.business'),
    faqs: [
      {
        q: t('web_development.faq_content.packages.business_best_for'),
        a: (
          <span dangerouslySetInnerHTML={{ __html: t('web_development.faq_content.packages.business_best_for_answer') }} />
        ),
      },
      {
        q: t('web_development.faq_content.packages.business_admin_panel'),
        a: (
          <span dangerouslySetInnerHTML={{ __html: t('web_development.faq_content.packages.business_admin_panel_answer') }} />
        ),
      },
      {
        q: t('web_development.faq_content.packages.business_blog'),
        a: (
          <span dangerouslySetInnerHTML={{ __html: t('web_development.faq_content.packages.business_blog_answer') }} />
        ),
      },
      {
        q: t('web_development.faq_content.packages.business_seo'),
        a: (
          <span dangerouslySetInnerHTML={{ __html: t('web_development.faq_content.packages.business_seo_answer') }} />
        ),
      },
      {
        q: t('web_development.faq_content.packages.business_analytics'),
        a: (
          <span dangerouslySetInnerHTML={{ __html: t('web_development.faq_content.packages.business_analytics_answer') }} />
        ),
      },
    ],
  },
  {
    block: t('web_development.faq.package_faqs.professional'),
    faqs: [
      {
        q: t('web_development.faq_content.packages.professional_best_for'),
        a: (
          <span dangerouslySetInnerHTML={{ __html: t('web_development.faq_content.packages.professional_best_for_answer') }} />
        ),
      },
      {
        q: t('web_development.faq_content.packages.professional_ecommerce'),
        a: (
          <span dangerouslySetInnerHTML={{ __html: t('web_development.faq_content.packages.professional_ecommerce_answer') }} />
        ),
      },
      {
        q: t('web_development.faq_content.packages.professional_chatbot'),
        a: (
          <span dangerouslySetInnerHTML={{ __html: t('web_development.faq_content.packages.professional_chatbot_answer') }} />
        ),
      },
      {
        q: t('web_development.faq_content.packages.professional_email'),
        a: (
          <span dangerouslySetInnerHTML={{ __html: t('web_development.faq_content.packages.professional_email_answer') }} />
        ),
      },
      {
        q: t('web_development.faq_content.packages.professional_booking'),
        a: (
          <span dangerouslySetInnerHTML={{ __html: t('web_development.faq_content.packages.professional_booking_answer') }} />
        ),
      },
      {
        q: t('web_development.faq_content.packages.professional_seo'),
        a: (
          <span dangerouslySetInnerHTML={{ __html: t('web_development.faq_content.packages.professional_seo_answer') }} />
        ),
      },
      {
        q: t('web_development.faq_content.packages.professional_support'),
        a: (
          <span dangerouslySetInnerHTML={{ __html: t('web_development.faq_content.packages.professional_support_answer') }} />
        ),
      },
    ],
  },
  {
    block: t('web_development.faq.additional_costs'),
    faqs: [
      {
        q: t('web_development.faq_content.additional_costs.ongoing_costs'),
        a: (
          <span dangerouslySetInnerHTML={{ __html: t('web_development.faq_content.additional_costs.ongoing_costs_answer') }} />
        ),
      },
      {
        q: t('web_development.faq_content.additional_costs.ownership'),
        a: (
          <span dangerouslySetInnerHTML={{ __html: t('web_development.faq_content.additional_costs.ownership_answer') }} />
        ),
      },
    ],
  },
  {
    block: t('web_development.faq.payment_process'),
    faqs: [
      {
        q: t('web_development.faq_content.payment.methods'),
        a: (
          <span dangerouslySetInnerHTML={{ __html: t('web_development.faq_content.payment.methods_answer') }} />
        ),
      },
      {
        q: t('web_development.faq_content.payment.when_pay'),
        a: (
          <span dangerouslySetInnerHTML={{ __html: t('web_development.faq_content.payment.when_pay_answer') }} />
        ),
      },
      {
        q: t('web_development.faq_content.payment.satisfaction'),
        a: t('web_development.faq_content.payment.satisfaction_answer'),
      },
      {
        q: t('web_development.faq_content.payment.training'),
        a: (
          <span dangerouslySetInnerHTML={{ __html: t('web_development.faq_content.payment.training_answer') }} />
        ),
      },
    ],
  },
  {
    block: t('web_development.faq.technical_questions'),
    faqs: [
      {
        q: t('web_development.faq_content.technical.mobile'),
        a: (
          <span dangerouslySetInnerHTML={{ __html: t('web_development.faq_content.technical.mobile_answer') }} />
        ),
      },
      {
        q: t('web_development.faq_content.technical.speed'),
        a: (
          <span dangerouslySetInnerHTML={{ __html: t('web_development.faq_content.technical.speed_answer') }} />
        ),
      },
      {
        q: t('web_development.faq_content.technical.security'),
        a: (
          <span dangerouslySetInnerHTML={{ __html: t('web_development.faq_content.technical.security_answer') }} />
        ),
      },
      {
        q: t('web_development.faq_content.technical.transfer'),
        a: t('web_development.faq_content.technical.transfer_answer'),
      },
    ],
  },
  {
    block: t('web_development.faq.maintenance_faq'),
    faqs: [
      {
        q: t('web_development.faq_content.maintenance.need_maintenance'),
        a: t('web_development.faq_content.maintenance.need_maintenance_answer'),
      },
      {
        q: t('web_development.faq_content.maintenance.without_maintenance'),
        a: (
          <span dangerouslySetInnerHTML={{ __html: t('web_development.faq_content.maintenance.without_maintenance_answer') }} />
        ),
      },
      {
        q: t('web_development.faq_content.maintenance.pause_service'),
        a: t('web_development.faq_content.maintenance.pause_service_answer'),
      },
      {
        q: t('web_development.faq_content.maintenance.basic_maintenance'),
        a: (
          <span dangerouslySetInnerHTML={{ __html: t('web_development.faq_content.maintenance.basic_maintenance_answer') }} />
        ),
      },
      {
        q: t('web_development.faq_content.maintenance.professional_maintenance'),
        a: (
          <span dangerouslySetInnerHTML={{ __html: t('web_development.faq_content.maintenance.professional_maintenance_answer') }} />
        ),
      },
      {
        q: t('web_development.faq_content.maintenance.premium_maintenance'),
        a: (
          <span dangerouslySetInnerHTML={{ __html: t('web_development.faq_content.maintenance.premium_maintenance_answer') }} />
        ),
      },
      {
        q: t('web_development.faq_content.maintenance.extra_updates'),
        a: t('web_development.faq_content.maintenance.extra_updates_answer'),
      },
      {
        q: t('web_development.faq_content.maintenance.emergency_support'),
        a: t('web_development.faq_content.maintenance.emergency_support_answer'),
      },
      {
        q: t('web_development.faq_content.maintenance.add_features'),
        a: t('web_development.faq_content.maintenance.add_features_answer'),
      },
      {
        q: t('web_development.faq_content.maintenance.payment_method'),
        a: t('web_development.faq_content.maintenance.payment_method_answer'),
      },
      {
        q: t('web_development.faq_content.maintenance.change_packages'),
        a: t('web_development.faq_content.maintenance.change_packages_answer'),
      },
      {
        q: t('web_development.faq_content.maintenance.response_time'),
        a: (
          <span dangerouslySetInnerHTML={{ __html: t('web_development.faq_content.maintenance.response_time_answer') }} />
        ),
      },
      {
        q: t('web_development.faq_content.maintenance.maintenance_reports'),
        a: (
          <span dangerouslySetInnerHTML={{ __html: t('web_development.faq_content.maintenance.maintenance_reports_answer') }} />
        ),
      },
      {
        q: t('web_development.faq_content.maintenance.change_speed'),
        a: t('web_development.faq_content.maintenance.change_speed_answer'),
      },
    ],
  },
];

  const [open, setOpen] = useState<{[key: string]: number | null}>({});
  const faqSectionRef = useRef<HTMLDivElement>(null);
  const questionRefs = useRef<(HTMLDivElement | null)[][]>([]);

  // Map feature FAQ keys to actual question text (using translation keys)
  const featureFaqKeyToQuestion: Record<string, string> = {
    ssl: t('web_development.faq_content.features.ssl'),
    seo: t('web_development.faq_content.features.seo'),
    cms: t('web_development.faq_content.features.cms'),
    ecommerce: t('web_development.faq_content.features.ecommerce'),
    analytics: t('web_development.faq_content.features.analytics'),
    searchconsole: t('web_development.faq_content.features.search_console'),
    chatbot: t('web_development.faq_content.features.chatbot'),
    inventory: t('web_development.faq_content.features.inventory'),
    booking: t('web_development.faq_content.features.booking'),
    support: t('web_development.faq_content.features.support'),
    maintenance: t('web_development.faq_content.features.maintenance'),
  };

  // Map question text to block and index
  const questionToBlockIdx: Record<string, { blockIdx: number; faqIdx: number }> = {};
  faqData.forEach((block, blockIdx) => {
    block.faqs.forEach((faq, faqIdx) => {
      questionToBlockIdx[faq.q] = { blockIdx, faqIdx };
    });
  });

  useEffect(() => {
    const handler = (e: any) => {
      const { faqKey } = e.detail;
      const question = featureFaqKeyToQuestion[faqKey];
      const match = question ? questionToBlockIdx[question] : undefined;
      if (match) {
        const el = questionRefs.current[match.blockIdx]?.[match.faqIdx];
        if (el) {
          el.scrollIntoView({ behavior: "smooth", block: "center" });
          setTimeout(() => {
            setOpen((prev) => ({ ...prev, [match.blockIdx]: match.faqIdx }));
          }, 700);
        } else if (faqSectionRef.current) {
          faqSectionRef.current.scrollIntoView({ behavior: "smooth", block: "start" });
          setTimeout(() => {
            setOpen((prev) => ({ ...prev, [match.blockIdx]: match.faqIdx }));
          }, 500);
        }
      }
    };
    window.addEventListener("open-faq", handler);
    return () => window.removeEventListener("open-faq", handler);
  }, []);

  const toggle = (blockIdx: number, faqIdx: number) => {
    setOpen((prev) => ({
      ...prev,
      [blockIdx]: prev[blockIdx] === faqIdx ? null : faqIdx
    }));
  };

  return (
    <section ref={faqSectionRef} className="relative py-20 bg-gradient-to-b from-[#00041F] via-[#00020F] to-[#00041F]">
      <div className="max-w-5xl mx-auto px-4">
        <h2 className="text-4xl md:text-5xl font-bold text-white mb-12 text-center">{t('web_development.faq.title')}</h2>
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
