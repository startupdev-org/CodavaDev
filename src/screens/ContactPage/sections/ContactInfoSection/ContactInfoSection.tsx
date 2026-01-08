import {
  FadeIn,
  StaggerContainer,
  StaggerItem,
  FloatingElement
} from "../../../../components/ui/animated-elements";
import { useTranslation } from "../../../../contexts/LanguageContext";

export const ContactInfoSection = () => {
  const { t } = useTranslation();
  
  const contactInfo = [
    {
      icon: "email",
      label: t('contact_page.info.email.label'),
      value: t('contact_page.info.email.value'),
      description: t('contact_page.info.email.description'),
      link: "mailto:codava.dev@gmail.com"
    }
  ];

  return (
    <section className="relative py-24">
      <div className="max-w-6xl mx-auto px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Contact Information */}
          <div className="space-y-12">
            <FadeIn delay={0.1} direction="up">
              <div>
                <h3 className="text-4xl font-bold text-white mb-6">
                  {t('contact_page.info.title')} <span className="bg-gradient-to-r from-[#194EFF] via-[#194EFF]/90 to-[#194EFF]/70 bg-clip-text text-transparent">{t('contact_page.info.title_highlight')}</span>
                </h3>
                <p className="text-white/70 text-lg leading-relaxed">
                  {t('contact_page.info.description')}
                </p>
              </div>
            </FadeIn>

            <StaggerContainer staggerDelay={0.1}>
              <div className="space-y-6">
                {contactInfo.map((info, index) => (
                  <StaggerItem key={index}>
                    <FloatingElement intensity={2} duration={4}>
                      <a
                        href={info.link}
                        className="block bg-white/[0.03] border border-white/10 rounded-2xl p-6 backdrop-blur-xl shadow-lg shadow-black/20 hover:shadow-[#194EFF]/10 transition-all duration-500 group hover:scale-105 transform"
                      >
                        <div className="flex items-start gap-4">
                          <div className="w-12 h-12 bg-gradient-to-br from-[#194EFF]/15 to-[#194EFF]/5 border border-[#194EFF]/20 rounded-xl flex items-center justify-center group-hover:scale-110 group-hover:border-[#194EFF]/40 transition-all duration-300">
                            <div className="text-[#194EFF]">
                              {info.icon}
                            </div>
                          </div>
                          <div className="flex-1">
                            <h4 className="text-white font-semibold text-lg mb-1 group-hover:text-[#194EFF] transition-colors duration-300">
                              {info.label}
                            </h4>
                            <p className="text-white/60 text-sm mb-2">{info.description}</p>
                            <p className="text-white/80 font-medium">{info.value}</p>
                          </div>
                        </div>
                      </a>
                    </FloatingElement>
                  </StaggerItem>
                ))}
              </div>
            </StaggerContainer>
          </div>

          {/* Office Hours & Additional Info */}
          <div className="space-y-12 mt-64">
            <FadeIn delay={0.3} direction="up">
              <div className="bg-white/[0.03] border border-white/10 rounded-3xl p-8 backdrop-blur-xl shadow-xl shadow-black/20 hover:shadow-[#194EFF]/10 transition-all duration-500">
                <h4 className="text-2xl font-bold text-white mb-6">{t('contact_page.info.why_choose_us.title')}</h4>
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-[#194EFF] rounded-full mt-2 flex-shrink-0"></div>
                    <p className="text-white/70">{t('contact_page.info.why_choose_us.items.support')}</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-[#194EFF] rounded-full mt-2 flex-shrink-0"></div>
                    <p className="text-white/70">{t('contact_page.info.why_choose_us.items.response')}</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-[#194EFF] rounded-full mt-2 flex-shrink-0"></div>
                    <p className="text-white/70">{t('contact_page.info.why_choose_us.items.secure')}</p>
                  </div>
                </div>
              </div>
            </FadeIn>

            {/* <FadeIn delay={0.4} direction="up">
              <div className="bg-gradient-to-br from-[#194EFF]/10 to-[#194EFF]/5 border border-[#194EFF]/20 rounded-3xl p-8 backdrop-blur-xl shadow-xl shadow-[#194EFF]/10 transition-all duration-500">
                <h4 className="text-2xl font-bold text-white mb-4">Emergency Support</h4>
                <p className="text-white/70 mb-4">
                  For urgent technical issues or critical support, contact our emergency hotline:
                </p>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-[#194EFF]/20 border border-[#194EFF]/30 rounded-xl flex items-center justify-center">
                    <svg className="w-5 h-5 text-[#194EFF]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L3.732 16.5c-.77.833.192 2.5 1.732 2.5z" />
                    </svg>
                  </div>
                  <span className="text-white font-semibold">+1 (555) 999-8888</span>
                </div>
              </div>
            </FadeIn> */}
          </div>
        </div>
      </div>
    </section>
  );
}; 