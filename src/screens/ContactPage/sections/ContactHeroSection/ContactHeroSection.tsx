import {
  FadeIn,
  StaggerContainer,
  StaggerItem,
  FloatingElement,
  GlowButton,
} from "../../../../components/ui/animated-elements";
import { useTranslation } from "../../../../contexts/LanguageContext";

export const ContactHeroSection = () => {
  const { t } = useTranslation();
  return (
    <section className="relative w-full min-h-screen pt-0 bg-gradient-to-br from-[#00020F] via-[#00041F] to-[#194EFF]/20 overflow-hidden flex items-center h-[120rem] lg:h-screen below400:h-[120rem]">
      {/* Background Elements */}
      <div className="absolute inset-0">
        {/* Main gradient overlays */}
        <div className="absolute top-20 right-0 w-[500px] h-[500px] bg-[#194EFF]/10 rounded-full blur-3xl animate-pulse"></div>
        {/* Subtle grid pattern */}
        <div className="absolute inset-0 opacity-[0.02]">
          <div
            className="w-full h-full"
            style={{
              backgroundImage: `radial-gradient(circle at 1px 1px, white 1px, transparent 0)`,
              backgroundSize: "50px 50px",
            }}
          ></div>
        </div>
      </div>

      <div className="relative max-w-7xl mx-auto px-6 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left Content */}
          <div className="space-y-4">
            <FadeIn delay={0.1} direction="up">
              <div className="inline-flex items-center gap-2 px-5 py-2.5 bg-white/8 border border-[#194EFF]/25 rounded-full mb-0 backdrop-blur-lg shadow-lg shadow-[#194EFF]/10">
                <div className="w-2.5 h-2.5 bg-[#194EFF] rounded-full animate-pulse shadow-sm shadow-[#194EFF]/50"></div>
                <span className="text-[#194EFF] text-sm font-semibold tracking-wide">
                  {t('contact_page.hero.badge')}
                </span>
              </div>
            </FadeIn>

            <FadeIn delay={0.2} direction="up">
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-extrabold text-white mb-6 leading-tight tracking-tight">
                <span className="block">
                  {t('contact_page.hero.title_line1')}
                </span>
                <span className="block relative my-2">
                  <span className="relative z-10 bg-gradient-to-r from-[#194EFF] via-[#194EFF]/90 to-[#194EFF]/70 bg-clip-text text-transparent">
                    {t('contact_page.hero.title_highlight')}
                  </span>
                  <span
                    aria-hidden
                    className="absolute left-0 right-0 bottom-1 h-3 sm:h-4 md:h-5 bg-[#194EFF]/20 rounded-xl blur-lg z-0"
                  />
                </span>
                <span className="block">
                  {t('contact_page.hero.title_line2')}
                </span>
              </h1>
            </FadeIn>

            <FadeIn delay={0.3} direction="up">
              <p className="text-xl text-white/70 leading-relaxed font-light max-w-2xl">
                {t('contact_page.hero.description')}
              </p>
            </FadeIn>

            <FadeIn delay={0.4} direction="up">
              <div className="flex flex-col sm:flex-row gap-4 pt-4">
                <GlowButton
                  className="px-8 py-4 bg-gradient-to-r from-[#194EFF] to-[#194EFF]/90 text-white font-semibold text-lg rounded-2xl hover:from-[#194EFF]/90 hover:to-[#194EFF]/80 transition-all duration-300 shadow-xl shadow-[#194EFF]/25 hover:shadow-[#194EFF]/40 hover:scale-105 transform"
                  onClick={() => {
                    const formSection =
                      document.getElementById("contact-form");
                    if (formSection) {
                      formSection.scrollIntoView({ behavior: "smooth" });
                    }
                  }}
                >
                  {t('contact_page.hero.button')}
                </GlowButton>
              </div>
            </FadeIn>
          </div>

          {/* Right Content - Contact Stats */}
          <div className="space-y-8">
            <StaggerContainer staggerDelay={0.1}>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {/* 1st Stat */}
                <StaggerItem>
                  <div className="bg-white/[0.03] border border-white/10 rounded-3xl p-8 backdrop-blur-xl shadow-lg shadow-black/20 hover:shadow-[#194EFF]/10 transition-all duration-500 group">
                    <div className="w-16 h-16 bg-gradient-to-br from-[#194EFF]/15 to-[#194EFF]/5 border border-[#194EFF]/20 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 group-hover:border-[#194EFF]/40 transition-all duration-300">
                      <svg
                        className="w-8 h-8 text-[#194EFF]"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                        />
                      </svg>
                    </div>
                    <h3 className="text-2xl font-bold text-white mb-2">
                      {t('contact_page.hero.stats.support_24_7.title')}
                    </h3>
                    <p className="text-white/60 text-sm">
                      {t('contact_page.hero.stats.support_24_7.description')}
                    </p>
                  </div>
                </StaggerItem>
                {/* 2nd Stat */}
                <StaggerItem>
                  <div className="bg-white/[0.03] border border-white/10 rounded-3xl p-8 backdrop-blur-xl shadow-lg shadow-black/20 hover:shadow-[#194EFF]/10 transition-all duration-500 group">
                    <div className="w-16 h-16 bg-gradient-to-br from-[#194EFF]/15 to-[#194EFF]/5 border border-[#194EFF]/20 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 group-hover:border-[#194EFF]/40 transition-all duration-300">
                      <svg
                        className="w-8 h-8 text-[#194EFF]"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                        />
                      </svg>
                    </div>
                    <h3 className="text-2xl font-bold text-white mb-2">
                      {t('contact_page.hero.stats.quick_response.title')}
                    </h3>
                    <p className="text-white/60 text-sm">
                      {t('contact_page.hero.stats.quick_response.description')}
                    </p>
                  </div>
                </StaggerItem>
                {/* 3rd Stat */}
                <StaggerItem>
                  <div className="bg-white/[0.03] border border-white/10 rounded-3xl p-8 backdrop-blur-xl shadow-lg shadow-black/20 hover:shadow-[#194EFF]/10 transition-all duration-500 group">
                    <div className="w-16 h-16 bg-gradient-to-br from-[#194EFF]/15 to-[#194EFF]/5 border border-[#194EFF]/20 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 group-hover:border-[#194EFF]/40 transition-all duration-300">
                      <svg
                        className="w-8 h-8 text-[#194EFF]"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                        />
                      </svg>
                    </div>
                    <h3 className="text-2xl font-bold text-white mb-2">
                      {t('contact_page.hero.stats.secure_private.title')}
                    </h3>
                    <p className="text-white/60 text-sm">
                      {t('contact_page.hero.stats.secure_private.description')}
                    </p>
                  </div>
                </StaggerItem>
                {/* 4th Stat */}
                <StaggerItem>
                  <FloatingElement intensity={3} duration={4}>
                    <div className="bg-white/[0.03] border border-white/10 rounded-3xl p-8 backdrop-blur-xl shadow-lg shadow-black/20 hover:shadow-[#194EFF]/10 transition-all duration-500 group">
                      <div className="w-16 h-16 bg-gradient-to-br from-[#194EFF]/15 to-[#194EFF]/5 border border-[#194EFF]/20 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 group-hover:border-[#194EFF]/40 transition-all duration-300">
                        <svg
                          className="w-8 h-8 text-[#194EFF]"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
                          />
                        </svg>
                      </div>
                      <h3 className="text-2xl font-bold text-white mb-2">
                        {t('contact_page.hero.stats.expert_team.title')}
                      </h3>
                      <p className="text-white/60 text-sm">
                        {t('contact_page.hero.stats.expert_team.description')}
                      </p>
                    </div>
                  </FloatingElement>
                </StaggerItem>
              </div>
            </StaggerContainer>
          </div>
        </div>
      </div>
    </section>
  );
};