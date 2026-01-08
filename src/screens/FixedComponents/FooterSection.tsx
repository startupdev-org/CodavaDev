import { useState } from "react";
import { Mail } from "lucide-react";
import { supabase } from '../../lib/supabaseClient';
import logoBg from "/logo-white.png";
import { useTranslation } from "../../contexts/LanguageContext";
import { LanguageSelector } from "../../components/LanguageSelector";


export const FooterSection = () => {
  const { t } = useTranslation();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);
  const [showError, setShowError] = useState(false);
  const [email, setEmail] = useState("");

  return (
    <footer className="relative w-full bg-[#00020F] border-t border-[#194EFF]/20">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-0 right-1/4 w-96 h-96 bg-[#194EFF]/3 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-1/4 w-80 h-80 bg-[#194EFF]/5 rounded-full blur-3xl"></div>
      </div>

      {/* Main Footer Content */}
      <div className="relative max-w-7xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12 items-start">
          {/* Column 1: Logo, Description, Contact, Socials */}
          <div className="flex flex-col gap-6 lg:items-start items-start text-left">
            <div className="flex items-center gap-3 mb-2 group cursor-pointer">
              <img
                src={logoBg}
                alt="CodavaDev logo"
                className="w-auto h-8 lg:w-54 lg:h-8 group-hover:scale-110 transition-transform duration-300"
              />
            </div>
            <p className="text-white/60 text-base leading-relaxed">
              {t('footer.description')}
            </p>
            <div className="flex items-center gap-2 mt-2">
              <Mail className="w-5 h-5 text-[#194EFF] drop-shadow-glow" />
              <a href="mailto:codava.dev@gmail.com" className="text-sm font-semibold text-[#194EFF] hover:underline focus:outline-none transition-all duration-300">
                codava.dev@gmail.com
              </a>
            </div>
            {/* <div className="flex gap-4 mt-4">
              {socialLinks.map((social, idx) => (
                <a
                  key={social.name}
                  href={social.href}
                  aria-label={social.name}
                  className="text-white/70 hover:text-[#194EFF] transition-colors duration-200"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {social.icon}
                </a>
              ))}
            </div> */}
          </div>

          {/* Column 2: Company */}
          <div className="flex flex-col gap-6 lg:items-start items-start text-left">
            <h4 className="font-semibold text-white text-lg mb-2 relative">{t('footer.company')}
              <div className="absolute bottom-0 left-0 w-16 top-7 h-0.5 bg-[#194EFF] rounded-full"></div>
            </h4>
            <div className="flex flex-col gap-2">
              <a href="/about" className="text-white/60 hover:text-[#194EFF] text-sm transition-colors duration-200">{t('navigation.about')}</a>
              <a href="/our-work" className="text-white/60 hover:text-[#194EFF] text-sm transition-colors duration-200">{t('navigation.portfolio')}</a>
              <a href="/contact" className="text-white/60 hover:text-[#194EFF] text-sm transition-colors duration-200">{t('navigation.contact')}</a>
            </div>
          </div>

          {/* Column 3: Services */}
          <div className="flex flex-col gap-6 lg:items-start items-start text-left">
            <h4 className="font-semibold text-white text-lg mb-2 relative">{t('footer.services')}
              <div className="absolute bottom-0 left-0 w-16 top-7 h-0.5 bg-[#194EFF] rounded-full"></div>
            </h4>
            <div className="flex flex-col gap-2">
              <a href="/services/ai-consultant" className="text-white/60 hover:text-[#194EFF] text-sm transition-colors duration-200">AI Consultant</a>
              <a href="/services/digital-engineering" className="text-white/60 hover:text-[#194EFF] text-sm transition-colors duration-200">Digital Engineering</a>
              <a href="/services/design" className="text-white/60 hover:text-[#194EFF] text-sm transition-colors duration-200">Design</a>
              <a href="/services/copywriting" className="text-white/60 hover:text-[#194EFF] text-sm transition-colors duration-200">Copywriting</a>
              <a href="/services/analytics-tracking" className="text-white/60 hover:text-[#194EFF] text-sm transition-colors duration-200">Analytics & Tracking</a>
            </div>
          </div>

          {/* Column 4: Newsletter Signup */}
          <div className="flex flex-col gap-6 lg:items-start items-start text-left">
            <h4 className="font-semibold text-white text-lg mb-2 relative">{t('footer.newsletter')}
              <div className="absolute bottom-0 left-0 w-24 top-7 h-0.5 bg-[#194EFF] rounded-full"></div>
            </h4>
            <p className="text-white/60 text-sm mb-4 max-w-xs lg:max-w-none">{t('footer.newsletter_description')}</p>
            <form
              onSubmit={async (e) => {
                e.preventDefault();
                setIsSubmitting(true);
                setShowSuccess(false);
                setShowError(false);
                try {
                  const { error } = await supabase
                    .from('newsletter_subscribers')
                    .insert([{ email }]);
                  if (error) throw error;
                  setShowSuccess(true);
                  setEmail("");
                } catch (err) {
                  setShowError(true);
                } finally {
                  setIsSubmitting(false);
                }
              }}
              className="w-full space-y-3"
            >
              <div className="relative">
                <input
                  type="email"
                  name="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full bg-white/10 border border-white/20 rounded-lg px-4 py-3.5 text-white placeholder-white/50 focus:border-[#194EFF] focus:bg-white/15 focus:outline-none focus:ring-2 focus:ring-[#194EFF]/20 text-sm transition-all duration-300"
                  placeholder={t('footer.email_placeholder')}
                  required
                  disabled={isSubmitting}
                  aria-label="Email address"
                />
              </div>
              <button
                type="submit"
                disabled={isSubmitting}
                className={`w-full px-6 py-3.5 font-semibold text-sm rounded-lg transition-all duration-300 shadow-lg ${isSubmitting
                  ? 'bg-gray-600 text-gray-300 cursor-not-allowed'
                  : 'bg-[#194EFF] text-white hover:bg-[#194EFF]/90 hover:shadow-[#194EFF]/30 hover:scale-[1.02]'
                  }`}
              >
                {isSubmitting ? (
                  <div className="flex items-center gap-2 justify-center">
                    <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                    <span>{t('footer.subscribing')}</span>
                  </div>
                ) : (
                  <span>{t('footer.subscribe')}</span>
                )}
              </button>
            </form>
            {showSuccess && (
              <div className="mt-2 p-2 bg-green-500/10 border border-green-500/30 rounded-xl text-green-400 text-sm w-full">{t('footer.success_message')}</div>
            )}
            {showError && (
              <div className="mt-2 p-2 bg-red-500/10 border border-red-500/30 rounded-xl text-red-400 text-sm w-full">{t('footer.error_message')}</div>
            )}
          </div>
        </div>

        {/* Bottom Section */}
        <div className="pt-10 border-t border-[#194EFF]/20">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            {/* Copyright - Left */}
            <p className="text-white/80 text-base font-medium text-center sm:text-left">
              {t('footer.copyright').replace('2024', '2026')}
            </p>
            {/* Language Selector - Right */}
            <div className="flex justify-center sm:justify-end">
              <LanguageSelector />
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};