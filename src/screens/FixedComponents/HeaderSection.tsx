import { useState } from "react";
import { useLocation } from "react-router-dom";
import { useLocaleNavigate } from "../../lib/localePath";
import { motion } from "framer-motion";
import { GlowButton } from "../../components/ui/animated-elements";
import logoBg from "/logo-white.png";
import { useTranslation } from "../../contexts/LanguageContext";
import { LanguageSelector } from "../../components/LanguageSelector";
import { goToHash } from "../../lib/smoothScroll";

export const HeaderSection = () => {
  const navigate = useLocaleNavigate();
  const location = useLocation();
  const { t } = useTranslation();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navItems = [
    { name: t("navigation.home"), path: "/" },
    { name: t("navigation.services"), path: "/#services" },
    { name: t("navigation.portfolio"), path: "/our-work" },
    { name: t("navigation.faq"), path: "/#faq" },
  ];

  const handleNavClick = (path: string) => {
    setIsMobileMenuOpen(false);

    if (path.startsWith("/#")) {
      goToHash(path.slice(2), location.pathname, navigate);
      return;
    }

    navigate(path);
  };

  const contactButton = (fullWidth = false) => (
    <GlowButton
      disableGlow
      onClick={() => {
        setIsMobileMenuOpen(false);
        navigate("/contact");
      }}
      className={`${
        fullWidth ? "w-full px-6 py-3" : "-my-2 px-6 py-2.5"
      } bg-gradient-to-r from-[#194EFF] to-[#194EFF]/90 text-white font-semibold text-sm rounded-full hover:from-[#194EFF]/90 hover:to-[#194EFF]/80 transition-all duration-300 hover:scale-105 transform relative overflow-hidden group/btn flex items-center ${
        fullWidth ? "justify-center" : ""
      } gap-2`}
    >
      <span className="relative z-10">{t("navigation.contact")}</span>
      <svg className="w-4 h-4 relative z-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
      </svg>
      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover/btn:translate-x-full transition-transform duration-1000" />
    </GlowButton>
  );

  return (
    <>
      {isMobileMenuOpen && (
        <div
          className="fixed inset-0 z-40 bg-black/60 lg:hidden"
          onClick={() => setIsMobileMenuOpen(false)}
        />
      )}

      <header
        className={`fixed top-4 left-1/2 z-50 w-[90%] -translate-x-1/2 md:top-6 md:w-[64%] py-1 bg-[#0B1438]/92 backdrop-blur-2xl border border-white/15 shadow-[0_10px_40px_rgba(0,0,0,0.55)] ${
          isMobileMenuOpen ? "rounded-3xl" : "rounded-full"
        }`}
      >
        <div className="relative w-full px-4 md:px-5 py-3.5">
          <div className="flex w-full items-center justify-between">
            <motion.button
              type="button"
              className="flex items-center group"
              onClick={() => navigate("/")}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <img
                className="h-7 w-auto transition-transform duration-300 group-hover:scale-105 lg:h-8"
                src={logoBg}
                alt="Logo"
              />
            </motion.button>

            <motion.nav
              className="hidden items-center gap-6 lg:flex"
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              {navItems.map((item) => (
                <button
                  key={item.path}
                  type="button"
                  onClick={() => handleNavClick(item.path)}
                  className="whitespace-nowrap px-2 py-1 font-['Urbanist',Helvetica] text-base font-medium leading-6 text-white transition-colors duration-200 hover:text-[#6BA3FF]"
                >
                  {item.name}
                </button>
              ))}
            </motion.nav>

            <motion.div
              className="hidden items-center gap-4 lg:flex"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.6 }}
            >
              <LanguageSelector variant="nav" className="-translate-x-[5px]" />
              {contactButton()}
            </motion.div>

            <motion.div
              className="flex items-center gap-2 lg:hidden"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.6 }}
            >
              <LanguageSelector variant="nav" />
              <button
                type="button"
                className="flex items-center justify-center p-1 text-white"
                onClick={() => setIsMobileMenuOpen((open) => !open)}
                aria-label={isMobileMenuOpen ? "Close menu" : "Open menu"}
              >
                <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  {isMobileMenuOpen ? (
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  ) : (
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                  )}
                </svg>
              </button>
            </motion.div>
          </div>

          {isMobileMenuOpen && (
            <div className="mt-3 border-t border-[#194EFF]/15 pt-3 pb-1 lg:hidden">
              <div className="flex flex-col">
                {navItems.map((item) => (
                  <button
                    key={item.path}
                    type="button"
                    onClick={() => handleNavClick(item.path)}
                    className="w-full px-2 py-3.5 text-left text-base font-medium text-white transition-colors duration-200 hover:text-[#6BA3FF]"
                  >
                    {item.name}
                  </button>
                ))}
              </div>
              <div className="pt-2 pb-2">{contactButton(true)}</div>
            </div>
          )}
        </div>
      </header>
    </>
  );
};
