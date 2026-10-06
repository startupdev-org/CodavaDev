import { FaWhatsapp, FaTimes } from "react-icons/fa";
import { useState, useEffect, type ReactNode } from "react";
import { useLocation } from "react-router-dom";
import { stripLocale } from "../lib/localePath";
import { useTranslation } from "../contexts/LanguageContext";
import TelegramPlaneIcon from "./TelegramPlaneIcon";

const WHATSAPP_NUMBER = "40700000000";
const TELEGRAM_USERNAME = "codavadev";

const ContactButton = ({
  onClick,
  label,
  hoverLabel,
  colorClasses,
  icon,
}: {
  onClick: () => void;
  label: string;
  hoverLabel: string;
  colorClasses: string;
  icon: ReactNode;
}) => (
  <div className="group relative">
    <button
      onClick={onClick}
      className={`relative flex h-[60px] w-[60px] items-center justify-center rounded-full text-white shadow-2xl transition-all duration-300 hover:-translate-y-1 hover:scale-105 ${colorClasses}`}
      aria-label={label}
      title={label}
    >
      <div className="absolute inset-0 rounded-full bg-white/10 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
      <span className="relative z-10">{icon}</span>
    </button>
    <div className="pointer-events-none absolute top-1/2 right-full mr-3 -translate-y-1/2 whitespace-nowrap rounded-lg bg-gray-900 px-3 py-2 text-sm font-medium text-white opacity-0 transition-opacity duration-300 group-hover:opacity-100">
      {hoverLabel}
      <div className="absolute top-1/2 left-full h-0 w-0 -translate-y-1/2 border-t-4 border-b-4 border-l-4 border-t-transparent border-b-transparent border-l-gray-900" />
    </div>
  </div>
);

const TelegramButton = () => {
  const { t } = useTranslation();
  const [showNotification, setShowNotification] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const isHomepage = stripLocale(useLocation().pathname) === "/";

  useEffect(() => {
    const show = () => {
      setShowNotification(true);
      setTimeout(() => setIsVisible(true), 50);
    };

    const initialTimer = isHomepage ? setTimeout(show, 5000) : null;
    const intervalTimer = setInterval(show, 180000);

    return () => {
      if (initialTimer) clearTimeout(initialTimer);
      clearInterval(intervalTimer);
    };
  }, [isHomepage]);

  const openTelegram = () => window.open(`https://t.me/${TELEGRAM_USERNAME}`, "_blank");
  const openWhatsApp = () => window.open(`https://wa.me/${WHATSAPP_NUMBER}`, "_blank");

  const closeNotification = () => {
    setIsVisible(false);
    setTimeout(() => setShowNotification(false), 300);
  };

  return (
    <>
      {showNotification && (
        <div
          className={`fixed bottom-44 right-6 z-50 w-[min(100vw-3rem,20rem)] transition-all duration-400 ease-out md:right-8 ${
            isVisible ? "translate-y-0 opacity-100" : "translate-y-3 opacity-0"
          }`}
        >
          <div className="relative overflow-hidden rounded-2xl border border-white/15 bg-[#0B1438]/92 shadow-[0_10px_40px_rgba(0,0,0,0.55)] backdrop-blur-2xl">
            <div className="pointer-events-none absolute -top-12 -right-10 h-28 w-28 rounded-full bg-[#194EFF]/20 blur-2xl" />
            <div className="relative p-4">
              <div className="flex items-start gap-3">
                <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-white p-1">
                  <img src="/logo-circle-black.png" alt="" className="h-5 w-5 object-contain" />
                </div>
                <div className="min-w-0 flex-1 pt-0.5">
                  <h4 className="mb-1 text-sm leading-snug font-semibold text-white">
                    {t("telegram.notification_title")}
                  </h4>
                  <p className="mb-3 text-xs leading-relaxed text-white/55">
                    {t("telegram.notification_description")}
                  </p>
                  <button
                    onClick={openTelegram}
                    className="group/btn relative inline-flex items-center gap-1.5 overflow-hidden rounded-full bg-gradient-to-r from-[#194EFF] to-[#3B6FFF] px-3.5 py-1.5 text-xs font-semibold text-white transition-transform duration-300 hover:scale-[1.03]"
                  >
                    <span className="relative z-10">{t("telegram.claim_discount")}</span>
                    <svg
                      className="relative z-10 h-3 w-3 transition-transform duration-300 group-hover/btn:translate-x-0.5"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                    </svg>
                  </button>
                </div>
                <button
                  onClick={closeNotification}
                  className="shrink-0 rounded-lg p-1 text-white/35 transition-colors duration-200 hover:bg-white/5 hover:text-white/70"
                  aria-label="Close"
                >
                  <FaTimes className="h-3.5 w-3.5" />
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      <div className="fixed right-6 bottom-8 z-50 flex flex-col gap-3 md:right-8">
        <ContactButton
          onClick={openWhatsApp}
          label="Contact us on WhatsApp"
          hoverLabel={t("whatsapp.chat_with_us")}
          colorClasses="bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 border border-green-400/20"
          icon={<FaWhatsapp className="h-9 w-9" />}
        />
        <ContactButton
          onClick={openTelegram}
          label="Contact us on Telegram"
          hoverLabel={t("telegram.chat_with_us")}
          colorClasses="bg-gradient-to-r from-[#194EFF] to-[#3B6FFF] hover:from-[#3B6FFF] hover:to-[#194EFF] border border-[#194EFF]/30"
          icon={<TelegramPlaneIcon size={25} color="#ffffff" className="-translate-x-[1px]" />}
        />
      </div>
    </>
  );
};

export default TelegramButton;
