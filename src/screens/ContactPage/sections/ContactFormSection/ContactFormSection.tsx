import { useState } from "react";
import { 
  FadeIn, 
  StaggerContainer, 
  StaggerItem,
  GlowButton
} from "../../../../components/ui/animated-elements";
import emailjs from '@emailjs/browser';
import { useTranslation } from "../../../../contexts/LanguageContext";

export const ContactFormSection = () => {
  const { t } = useTranslation();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
    howHeard: ""
  });
  const [isLoading, setIsLoading] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [error, setError] = useState("");

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const clearForm = () => {
    setFormData({
      name: "",
      email: "",
      subject: "",
      message: "",
      howHeard: ""
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setError("");
    setIsSuccess(false);

    try {
      const result = await emailjs.send(
        'service_glh9iss',
        'template_vttl4v7',
        {
          full_name: formData.name,
          email: formData.email,
          subject: formData.subject,
          source: formData.howHeard,
          message: formData.message,
        },
        'dj1hZBH9DC_l229_T'
      );

      if (result.status === 200) {
        setIsSuccess(true);
        clearForm();
        // Reset success state after 5 seconds
        setTimeout(() => {
          setIsSuccess(false);
        }, 5000);
      }
    } catch (error) {
      console.error('EmailJS Error:', error);
      setError(t('contact_page.form.messages.error.default'));
    } finally {
      setIsLoading(false);
    }
  };

  const services = [
    {
      category: t('contact_page.form.service_categories.development_design'),
      items: [
        { name: "Web Development", translationKey: "web_development" },
        { name: "Design", translationKey: "design" },
        { name: "Bot Automation", translationKey: "bot_automation" }
      ]
    },
    {
      category: t('contact_page.form.service_categories.marketing_content'),
      items: [
        { name: "SEO", translationKey: "seo" },
        { name: "Copywriting", translationKey: "copywriting" }
      ]
    },
    {
      category: t('contact_page.form.service_categories.analytics_tracking'),
      items: [
        { name: "Analytics & Tracking", translationKey: "analytics_tracking" }
      ]
    }
  ];

  return (
    <section className="relative py-24">
      <div className="max-w-7xl mx-auto px-8 relative z-10">
        {/* Header */}
        <div className="text-center mb-20">
          <FadeIn delay={0.1} direction="up">
            <div className="inline-flex items-center gap-2 px-5 py-2.5 bg-white/8 border border-[#194EFF]/25 rounded-full mb-8 backdrop-blur-lg shadow-lg shadow-[#194EFF]/10">
              <div className="w-2.5 h-2.5 bg-[#194EFF] rounded-full animate-pulse shadow-sm shadow-[#194EFF]/50"></div>
              <span className="text-[#194EFF] text-sm font-semibold tracking-wide">{t('contact_page.form.badge')}</span>
            </div>
          </FadeIn>

          <FadeIn delay={0.2} direction="up">
            <h2 className="text-5xl md:text-6xl font-bold text-white mb-6 leading-tight" id="contact-form">
              {t('contact_page.form.title')} <span className="bg-gradient-to-r from-[#194EFF] via-[#194EFF]/90 to-[#194EFF]/70 bg-clip-text text-transparent">{t('contact_page.form.title_highlight')}</span>
            </h2>
          </FadeIn>
          
          <FadeIn delay={0.3} direction="up">
            <p className="text-xl text-white/70 max-w-4xl mx-auto leading-relaxed font-light"
            >
              {t('contact_page.form.description')}
            </p>
          </FadeIn>
        </div>

        {/* Contact Form Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left Side - Promotional Content */}
          <FadeIn delay={0.4} direction="up">
            <div className="space-y-8">
              <div>
                <h3 className="text-2xl md:text-3xl font-bold text-white mb-6 leading-tight">
                  {t('contact_page.form.left_side.title')}
                </h3>
                <p className="text-lg text-white/70 leading-relaxed mb-8">
                  {t('contact_page.form.left_side.description')}
                </p>
                <GlowButton
                  disableGlow={true}
                  className="px-8 py-4 bg-gradient-to-r from-[#194EFF] to-[#194EFF]/90 text-white font-semibold text-base rounded-2xl hover:from-[#194EFF]/90 hover:to-[#194EFF]/80 transition-all duration-300 shadow-xl shadow-[#194EFF]/25 hover:shadow-[#194EFF]/40 hover:scale-105 transform relative overflow-hidden group/btn flex items-center gap-2"
                  onClick={() => window.open('https://calendly.com/codava-support/consultation', '_blank')}
                >
                  <span className="relative z-10">{t('contact_page.form.left_side.button')}</span>
                  <svg className="w-4 h-4 relative z-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                  </svg>
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover/btn:translate-x-full transition-transform duration-1000"></div>
                </GlowButton>
              </div>

              {/* Stats */}
              <div className="grid grid-cols-1 gap-4">
                <div className="flex items-center gap-3 p-4 bg-white/5 border border-white/10 rounded-lg backdrop-blur-sm">
                  <div className="w-12 h-12 bg-[#194EFF]/20 rounded-lg flex items-center justify-center flex-shrink-0">
                    <svg className="w-6 h-6 text-[#194EFF]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-white">{t('contact_page.form.left_side.stats.projects_completed.value')}</div>
                    <div className="text-white/60 text-sm">{t('contact_page.form.left_side.stats.projects_completed.label')}</div>
                  </div>
                </div>

                <div className="flex items-center gap-3 p-4 bg-white/5 border border-white/10 rounded-lg backdrop-blur-sm">
                  <div className="w-12 h-12 bg-[#194EFF]/20 rounded-lg flex items-center justify-center flex-shrink-0">
                    <svg className="w-6 h-6 text-[#194EFF]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                    </svg>
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-white">{t('contact_page.form.left_side.stats.lines_of_code.value')}</div>
                    <div className="text-white/60 text-sm">{t('contact_page.form.left_side.stats.lines_of_code.label')}</div>
                  </div>
                </div>

                <div className="flex items-center gap-3 p-4 bg-white/5 border border-white/10 rounded-lg backdrop-blur-sm">
                  <div className="w-12 h-12 bg-[#194EFF]/20 rounded-lg flex items-center justify-center flex-shrink-0">
                    <svg className="w-6 h-6 text-[#194EFF]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
                    </svg>
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-white">{t('contact_page.form.left_side.stats.tech_stack_tools.value')}</div>
                    <div className="text-white/60 text-sm">{t('contact_page.form.left_side.stats.tech_stack_tools.label')}</div>
                  </div>
                </div>
              </div>
            </div>
          </FadeIn>

          {/* Right Side - Contact Form */}
          <div className="space-y-6">
            {/* Success Message */}
            {isSuccess && (
              <FadeIn delay={0} direction="up">
                <div className="p-6 bg-green-500/10 border border-green-500/30 rounded-2xl backdrop-blur-xl">
                  <div className="flex items-center gap-3">
                    <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center">
                      <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="text-green-400 font-semibold text-lg">{t('contact_page.form.messages.success.title')}</h3>
                      <p className="text-green-300 text-sm">{t('contact_page.form.messages.success.description')}</p>
                    </div>
                  </div>
                </div>
              </FadeIn>
            )}

            {/* Error Message */}
            {error && (
              <FadeIn delay={0} direction="up">
                <div className="p-6 bg-red-500/10 border border-red-500/30 rounded-2xl backdrop-blur-xl">
                  <div className="flex items-center gap-3">
                    <div className="w-6 h-6 bg-red-500 rounded-full flex items-center justify-center">
                      <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="text-red-400 font-semibold text-lg">{t('contact_page.form.messages.error.title')}</h3>
                      <p className="text-red-300 text-sm">{error}</p>
                    </div>
                  </div>
                </div>
              </FadeIn>
            )}

            {/* Contact Form */}
            <FadeIn delay={0.5} direction="up">
              <div 
                className="bg-white/[0.03] border border-white/10 rounded-2xl p-6 md:p-10 backdrop-blur-xl shadow-xl shadow-black/20 hover:shadow-[#194EFF]/10 transition-all duration-500"
              >
            <form onSubmit={handleSubmit} className="space-y-14">
              <StaggerContainer staggerDelay={0.1}>
                {/* Personal Information */}
                <div className="grid grid-cols-1 gap-6">
                  {/* Full Name and Email in 2 columns on desktop */}
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                    <div>
                      <label className="text-white font-semibold text-base mb-2 block">{t('contact_page.form.labels.full_name')}</label>
                      <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white placeholder-white/40 focus:border-[#194EFF]/50 focus:outline-none transition-colors"
                        placeholder={t('contact_page.form.placeholders.full_name')}
                        required
                        disabled={isLoading}
                      />
                    </div>
                    <div>
                      <label className="text-white font-semibold text-base mb-2 block">{t('contact_page.form.labels.email')}</label>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white placeholder-white/40 focus:border-[#194EFF]/50 focus:outline-none transition-colors"
                        placeholder={t('contact_page.form.placeholders.email')}
                        required
                        disabled={isLoading}
                      />
                    </div>
                  </div>
                  <div>
                    <label className="text-white font-semibold text-base mb-2 block">{t('contact_page.form.labels.subject')}</label>
                    <select
                      name="subject"
                      value={formData.subject}
                      onChange={handleInputChange}
                      className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white focus:border-[#194EFF]/50 focus:outline-none transition-colors"
                      required
                      disabled={isLoading}
                    >
                      <option value="" className="bg-[#00041F] text-white">{t('contact_page.form.select_options.select_service')}</option>
                      {services.map((category, categoryIndex) => (
                        <optgroup key={categoryIndex} label={category.category} className="bg-[#00041F] text-white">
                          {category.items.map((service, serviceIndex) => (
                            <option 
                              key={serviceIndex} 
                              value={service.name}
                              className="bg-[#00041F] text-white py-2"
                            >
                              {t(`contact_page.form.services.${service.translationKey}`)}
                            </option>
                          ))}
                        </optgroup>
                      ))}
                    </select>
                  </div>
                  <div>
                    <label className="text-white font-semibold text-base mb-2 block">{t('contact_page.form.labels.how_heard')}</label>
                    <select
                      name="howHeard"
                      value={formData.howHeard}
                      onChange={handleInputChange}
                      className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white focus:border-[#194EFF]/50 focus:outline-none transition-colors"
                      required
                      disabled={isLoading}
                    >
                      <option value="" className="bg-[#00041F] text-white">{t('contact_page.form.select_options.select_option')}</option>
                      <option value="Google">{t('contact_page.form.select_options.how_heard.google')}</option>
                      <option value="Friend or Colleague">{t('contact_page.form.select_options.how_heard.friend_colleague')}</option>
                      <option value="Instagram">{t('contact_page.form.select_options.how_heard.instagram')}</option>
                      <option value="Facebook">{t('contact_page.form.select_options.how_heard.facebook')}</option>
                      <option value="LinkedIn">{t('contact_page.form.select_options.how_heard.linkedin')}</option>
                      <option value="Advertisement">{t('contact_page.form.select_options.how_heard.advertisement')}</option>
                      <option value="Event or Conference">{t('contact_page.form.select_options.how_heard.event_conference')}</option>
                      <option value="Other">{t('contact_page.form.select_options.how_heard.other')}</option>
                    </select>
                  </div>
                  <div>
                    <label className="text-white font-semibold text-base mb-2 block">{t('contact_page.form.labels.message')}</label>
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white placeholder-white/40 min-h-[120px] focus:border-[#194EFF]/50 focus:outline-none transition-colors resize-vertical"
                      placeholder={t('contact_page.form.placeholders.message')}
                      required
                      disabled={isLoading}
                    ></textarea>
                  </div>
                </div>

                {/* Submit Button */}
                <StaggerItem>
                  <div className="pt-6">
                    <button
                      type="submit"
                      disabled={isLoading}
                      className={`w-full px-8 py-4 font-semibold text-base rounded-2xl transition-all duration-300 shadow-xl hover:scale-105 transform relative overflow-hidden group/btn flex items-center justify-center gap-2 ${
                        isLoading 
                          ? 'bg-gray-600 text-gray-300 cursor-not-allowed' 
                          : 'bg-gradient-to-r from-[#194EFF] to-[#194EFF]/90 text-white hover:from-[#194EFF]/90 hover:to-[#194EFF]/80 hover:shadow-[#194EFF]/40'
                      }`}
                    >
                      {isLoading ? (
                        <>
                          <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin relative z-10"></div>
                          <span className="relative z-10">{t('contact_page.form.button.sending')}</span>
                        </>
                      ) : (
                        <>
                          <span className="relative z-10">{t('contact_page.form.button.send')}</span>
                          <svg className="w-4 h-4 relative z-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                          </svg>
                          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover/btn:translate-x-full transition-transform duration-1000"></div>
                        </>
                      )}
                    </button>
                  </div>
                </StaggerItem>
              </StaggerContainer>
            </form>
              </div>
            </FadeIn>
          </div>
        </div>
      </div>
    </section>
  );
};
