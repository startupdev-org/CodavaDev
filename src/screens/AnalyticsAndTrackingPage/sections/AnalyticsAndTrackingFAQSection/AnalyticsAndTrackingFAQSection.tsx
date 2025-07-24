import React, { useState, useRef } from "react";

const faqData = [
  {
    block: "General Questions",
    faqs: [
      {
        q: "What is Analytics & Tracking?",
        a: "Analytics & Tracking refers to the collection and analysis of data about how users interact with your website or app. It helps you understand user behavior, measure performance, and make data-driven decisions."
      },
      {
        q: "Why do I need Google Analytics?",
        a: "Google Analytics provides detailed insights into your website traffic, user demographics, and behavior. It helps you identify what works, what doesn't, and where to focus your marketing efforts."
      },
      {
        q: "What is Conversion Tracking?",
        a: "Conversion Tracking allows you to measure specific actions users take on your site, such as purchases, sign-ups, or downloads. This helps you optimize your site for better results."
      },
      {
        q: "How do Heatmaps & Session Recordings help?",
        a: "Heatmaps and session recordings visually show where users click, scroll, and spend time on your site. This helps you identify usability issues and improve user experience."
      },
      {
        q: "What are Performance Dashboards?",
        a: "Performance Dashboards are custom visual reports that display your key metrics in real time, making it easy to monitor progress and make informed decisions."
      },
      {
        q: "Can you set up everything for me?",
        a: "Yes! We handle the full setup and configuration of analytics, tracking, and dashboards so you can focus on your business."
      }
    ]
  },
  {
    block: "Technical & Privacy",
    faqs: [
      {
        q: "Is my data secure?",
        a: "Yes, we follow best practices for data privacy and security. All tracking is GDPR-compliant and respects user consent."
      },
      {
        q: "Can I access my data anytime?",
        a: "Absolutely! You'll have 24/7 access to your dashboards and analytics reports."
      },
      {
        q: "Can you integrate with my existing tools?",
        a: "Yes, we can connect analytics and dashboards with your CRM, marketing, or other business tools."
      }
    ]
  }
];

export const AnalyticsAndTrackingFAQSection = () => {
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
        <h2 className="text-4xl md:text-5xl font-bold text-white mb-12 text-center">Frequently Asked Questions</h2>
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