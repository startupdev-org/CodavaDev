import { Link } from "react-router-dom";
import { Mail } from "lucide-react";
import logoBg from "/logo-white.png";
import { useTranslation } from "../../contexts/LanguageContext";
import { LanguageSelector } from "../../components/LanguageSelector";


export const FooterSection = () => {
  const { t } = useTranslation();

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
              <Link to="/about" className="text-white/60 hover:text-[#194EFF] text-sm transition-colors duration-200">{t('navigation.about')}</Link>
              <Link to="/our-work" className="text-white/60 hover:text-[#194EFF] text-sm transition-colors duration-200">{t('navigation.portfolio')}</Link>
              <Link to="/contact" className="text-white/60 hover:text-[#194EFF] text-sm transition-colors duration-200">{t('navigation.contact')}</Link>
            </div>
          </div>

          {/* Column 3: Services */}
          <div className="flex flex-col gap-6 lg:items-start items-start text-left">
            <h4 className="font-semibold text-white text-lg mb-2 relative">{t('footer.services')}
              <div className="absolute bottom-0 left-0 w-16 top-7 h-0.5 bg-[#194EFF] rounded-full"></div>
            </h4>
            <div className="flex flex-col gap-2">
              <Link to="/services/bot-automation" className="text-white/60 hover:text-[#194EFF] text-sm transition-colors duration-200">{t('navigation.bot_automation')}</Link>
              <Link to="/services/web-development" className="text-white/60 hover:text-[#194EFF] text-sm transition-colors duration-200">{t('navigation.web_development')}</Link>
              <Link to="/services/design" className="text-white/60 hover:text-[#194EFF] text-sm transition-colors duration-200">{t('navigation.design')}</Link>
              <Link to="/services/copywriting" className="text-white/60 hover:text-[#194EFF] text-sm transition-colors duration-200">{t('navigation.copywriting')}</Link>
              <Link to="/services/analytics-tracking" className="text-white/60 hover:text-[#194EFF] text-sm transition-colors duration-200">{t('navigation.analytics_tracking')}</Link>
            </div>
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