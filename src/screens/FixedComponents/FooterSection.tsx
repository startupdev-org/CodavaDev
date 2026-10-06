import { Link, useLocation } from "react-router-dom";
import { localeFromPath, useLocaleNavigate, withLocale } from "../../lib/localePath";
import type { MouseEvent } from "react";
import { FaInstagram, FaTelegramPlane, FaLinkedinIn, FaMapMarkerAlt } from "react-icons/fa";
import logoBg from "/logo-white.png";
import { useTranslation } from "../../contexts/LanguageContext";
import { LanguageSelector } from "../../components/LanguageSelector";
import { goToHash } from "../../lib/smoothScroll";

const SOCIAL_LINKS = [
  {
    label: "Instagram",
    handle: "@codava.dev",
    href: "https://www.instagram.com/codava.dev/",
    icon: FaInstagram,
  },
  {
    label: "Telegram",
    handle: "@codavadev",
    href: "https://t.me/codavadev",
    icon: FaTelegramPlane,
  },
  {
    label: "LinkedIn",
    handle: "CodavaDev",
    href: "https://www.linkedin.com/company/codavadev/",
    icon: FaLinkedinIn,
  },
] as const;

const SERVICE_KEYS = [
  "services.web_development.title",
  "services.design.title",
  "services.ai_automation.title",
  "services.seo.title",
  "services.copywriting.title",
  "services.analytics.title",
] as const;

export const FooterSection = () => {
  const { t } = useTranslation();
  const location = useLocation();
  const navigate = useLocaleNavigate();
  const localize = (path: string) => withLocale(path, localeFromPath(location.pathname));

  const companyLinks = [
    { label: t("navigation.home"), href: "/" },
    { label: t("navigation.services"), href: "/#services" },
    { label: t("navigation.portfolio"), href: "/our-work" },
    { label: t("navigation.contact"), href: "/contact" },
  ];

  const onServicesClick = (e: MouseEvent) => {
    e.preventDefault();
    goToHash("services", location.pathname, navigate);
  };

  return (
    <footer className="relative w-full border-t border-white/10">
      <div className="pointer-events-none absolute inset-x-0 top-0 h-40 bg-gradient-to-b from-[#194EFF]/10 to-transparent" />

      <div className="relative mx-auto w-[72%] px-6 pt-16 pb-10 md:w-[64%] md:px-8">
        <div className="mb-14 grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-[1.5fr_1fr_1fr_1fr] lg:gap-8">
          <div className="flex max-w-md flex-col gap-5 sm:col-span-2 lg:col-span-1">
            <Link to={localize("/")} className="group inline-flex w-fit">
              <img
                src={logoBg}
                alt="CodavaDev logo"
                className="h-8 w-auto transition-transform duration-300 group-hover:scale-105"
              />
            </Link>
            <p className="text-[15px] leading-relaxed text-white/55">
              {t("footer.description")}
            </p>
            <a
              href="mailto:codava.dev@gmail.com"
              className="inline-flex w-fit items-center gap-2.5 text-sm font-medium text-[#8EB6FF] transition-colors duration-200 hover:text-white"
            >
              <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
              codava.dev@gmail.com
            </a>
            <div className="flex items-center gap-3 pt-1">
              {SOCIAL_LINKS.map(({ href, label, icon: Icon }) => (
                <a
                  key={href}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="flex h-10 w-10 items-center justify-center rounded-full border border-white/15 text-white/70 transition-all duration-200 hover:border-[#194EFF]/45 hover:bg-[#194EFF]/15 hover:text-white"
                >
                  <Icon className="h-4 w-4" />
                </a>
              ))}
            </div>
          </div>

          <div>
            <h4 className="mb-4 text-sm font-semibold tracking-wide uppercase text-white/40">
              {t("footer.company")}
            </h4>
            <nav className="flex flex-col gap-3">
              {companyLinks.map((link) => (
                <a
                  key={link.href}
                  href={localize(link.href)}
                  onClick={link.href === "/#services" ? onServicesClick : undefined}
                  className="w-fit text-[15px] text-white/65 transition-colors duration-200 hover:text-white"
                >
                  {link.label}
                </a>
              ))}
            </nav>
          </div>

          <div>
            <h4 className="mb-4 text-sm font-semibold tracking-wide uppercase text-white/40">
              {t("footer.services")}
            </h4>
            <div className="flex flex-col gap-3">
              {SERVICE_KEYS.map((key) => (
                <a
                  key={key}
                  href={localize("/#services")}
                  onClick={onServicesClick}
                  className="w-fit text-[15px] text-white/65 transition-colors duration-200 hover:text-white"
                >
                  {t(key)}
                </a>
              ))}
            </div>
          </div>

          <div>
            <h4 className="mb-4 text-sm font-semibold tracking-wide uppercase text-white/40">
              {t("footer.social")}
            </h4>
            <div className="flex flex-col gap-4">
              {SOCIAL_LINKS.map(({ href, label, handle, icon: Icon }) => (
                <a
                  key={href}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex w-fit items-center gap-3"
                >
                  <span className="flex h-9 w-9 items-center justify-center rounded-full border border-white/15 text-[#8EB6FF] transition-colors duration-200 group-hover:border-[#194EFF]/45 group-hover:bg-[#194EFF]/15">
                    <Icon className="h-4 w-4" />
                  </span>
                  <span className="flex flex-col">
                    <span className="text-sm font-medium text-white/80 transition-colors duration-200 group-hover:text-white">
                      {label}
                    </span>
                    <span className="text-xs text-white/40">{handle}</span>
                  </span>
                </a>
              ))}
              <p className="flex items-center gap-1.5 pt-1 text-sm leading-relaxed text-white/45">
                <FaMapMarkerAlt className="h-3.5 w-3.5 shrink-0 text-[#8EB6FF]" aria-hidden />
                {t("footer.location")}
              </p>
            </div>
          </div>
        </div>

        <div className="flex flex-col items-center justify-between gap-4 border-t border-white/10 pt-8 sm:flex-row">
          <p className="text-center text-sm text-white/40 sm:text-left">
            {t("footer.copyright")}
          </p>
          <LanguageSelector />
        </div>
      </div>
    </footer>
  );
};
