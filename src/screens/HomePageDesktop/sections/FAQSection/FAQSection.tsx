import React, { useState } from "react";
import {
  FadeIn,
  StaggerContainer,
  StaggerItem
} from "../../../../components/ui/animated-elements";
import { useTranslation } from "../../../../contexts/LanguageContext";

export const FAQSection: React.FC = () => {
  const [openFAQ, setOpenFAQ] = useState<number | null>(0);
  const { t } = useTranslation();

  const faqs = t('faq.questions', { returnObjects: true }) as Array<{question: string, answer: string}>;

  return (
    <section id="faq" className="relative py-24 scroll-mt-28">
      <div className="absolute right-0 top-1/3 w-72 h-72 bg-[#194EFF]/10 blur-[100px] pointer-events-none" />

      <div className="max-w-6xl mx-auto px-5 md:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-[0.9fr_1.1fr] gap-10 lg:gap-16 mb-16">
          <FadeIn delay={0.1} direction="up">
            <div className="lg:sticky lg:top-32 lg:self-start">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-5 leading-tight tracking-tight">
                {t('faq.title_line1')}{" "}
                <span className="bg-gradient-to-r from-[#8EB6FF] via-[#C8DBFF] to-[#194EFF] bg-clip-text text-transparent">
                  {t('faq.title_line2')}
                </span>
              </h2>
              <p className="text-base md:text-lg text-white/65 leading-relaxed max-w-md">
                {t('faq.subtitle')}
              </p>
            </div>
          </FadeIn>

          <StaggerContainer staggerDelay={0.04}>
            <div className="border-t border-white/10">
              {faqs.map((faq, index) => {
                const isOpen = openFAQ === index;
                return (
                  <StaggerItem key={index}>
                    <div className="border-b border-white/10">
                      <button
                        className="group w-full py-5 md:py-6 text-left flex items-start gap-4"
                        onClick={() => setOpenFAQ(isOpen ? null : index)}
                      >
                        <span className="mt-0.5 text-xs font-semibold tracking-wider text-[#6BA3FF]/80 tabular-nums shrink-0">
                          {String(index + 1).padStart(2, "0")}
                        </span>
                        <span className={`flex-1 text-[15px] md:text-lg font-medium leading-snug transition-colors duration-300 ${
                          isOpen ? "text-white" : "text-white/80 group-hover:text-white"
                        }`}>
                          {faq.question}
                        </span>
                        <span
                          className={`mt-0.5 relative flex h-6 w-6 shrink-0 items-center justify-center rounded-full transition-all duration-300 ${
                            isOpen
                              ? "bg-[#194EFF] text-white"
                              : "bg-white/5 text-[#8EB6FF] group-hover:bg-[#194EFF]/20"
                          }`}
                        >
                          <span className="absolute h-[1.5px] w-2.5 bg-current rounded-full" />
                          <span
                            className={`absolute w-[1.5px] h-2.5 bg-current rounded-full transition-transform duration-300 ${
                              isOpen ? "scale-y-0" : "scale-y-100"
                            }`}
                          />
                        </span>
                      </button>

                      <div
                        className={`grid transition-all duration-300 ease-out ${
                          isOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
                        }`}
                      >
                        <div className="overflow-hidden">
                          <p className="pb-6 pl-9 md:pl-10 pr-10 text-[15px] text-white/60 leading-relaxed">
                            {faq.answer}
                          </p>
                        </div>
                      </div>
                    </div>
                  </StaggerItem>
                );
              })}
            </div>
          </StaggerContainer>
        </div>

        <FadeIn delay={0.2} direction="up">
          <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-br from-[#194EFF]/14 via-white/[0.03] to-transparent px-6 py-12 md:px-12 md:py-14">
            <div className="pointer-events-none absolute -top-24 right-0 h-48 w-48 rounded-full bg-[#194EFF]/25 blur-[80px]" />
            <div className="relative z-10 flex flex-col md:flex-row md:items-center md:justify-between gap-8">
              <div className="max-w-xl text-center md:text-left">
                <h3 className="text-2xl md:text-3xl font-bold text-white mb-3 tracking-tight">
                  {t('cta.title')}{" "}
                  <span className="bg-gradient-to-r from-[#8EB6FF] via-[#C8DBFF] to-[#194EFF] bg-clip-text text-transparent">
                    {t('cta.title_highlight')}
                  </span>
                </h3>
                <p className="text-white/65 text-base leading-relaxed mb-3">
                  {t('cta.subtitle')}
                </p>
                <a
                  href={`mailto:${t('cta.contact_email')}`}
                  className="inline-flex items-center gap-2 text-[#8EB6FF] hover:text-white transition-colors duration-200 text-sm font-medium"
                >
                  {t('cta.contact_email')}
                  <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                  </svg>
                </a>
              </div>

              <button
                onClick={() => window.open('https://calendly.com/codava-dev/30min', '_blank')}
                className="group/btn relative overflow-hidden inline-flex items-center justify-center gap-2 px-8 py-3.5 bg-gradient-to-r from-[#194EFF] to-[#3B6FFF] text-white font-semibold text-sm rounded-full transition-all duration-300 hover:scale-105 shrink-0 self-center"
              >
                <span className="relative z-10">{t('cta.primary_button')}</span>
                <svg className="relative z-10 w-4 h-4 transition-transform duration-300 group-hover/btn:translate-x-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover/btn:translate-x-full transition-transform duration-1000" />
              </button>
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  );
};
