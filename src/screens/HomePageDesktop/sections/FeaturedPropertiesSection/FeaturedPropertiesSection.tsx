import type { ReactNode } from "react";
import { Link, useLocation } from "react-router-dom";
import { localeFromPath, withLocale } from "../../../../lib/localePath";
import {
  FadeIn,
  StaggerContainer,
  StaggerItem,
} from "../../../../components/ui/animated-elements";
import { MdOutlinePalette } from "react-icons/md";
import { LuPen } from "react-icons/lu";
import { ChartBarIcon } from "@heroicons/react/24/outline";
import { useTranslation } from "../../../../contexts/LanguageContext";

export const FeaturedPropertiesSection = () => {
  const { t } = useTranslation();
  const { pathname } = useLocation();
  const contactPath = withLocale("/contact", localeFromPath(pathname));

  const serviceKeys = [
    "web_development",
    "ai_automation",
    "design",
    "seo",
    "copywriting",
    "analytics",
  ] as const;

  const serviceIcons: Record<(typeof serviceKeys)[number], ReactNode> = {
    ai_automation: (
      <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
      </svg>
    ),
    web_development: (
      <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
      </svg>
    ),
    design: <MdOutlinePalette className="h-6 w-6" />,
    seo: (
      <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
      </svg>
    ),
    copywriting: <LuPen className="h-6 w-6" />,
    analytics: <ChartBarIcon className="h-6 w-6" />,
  };

  const services = serviceKeys.map((key) => ({
    key,
    icon: serviceIcons[key],
    title: t(`services.${key}.title`),
    description: t(`services.${key}.description`),
    features: t(`services.${key}.features`, { returnObjects: true }) as string[],
    popular: key === "web_development",
  }));

  return (
    <section id="services" className="relative scroll-mt-28 py-28">
      <div className="pointer-events-none absolute top-1/3 right-0 h-72 w-72 bg-[#194EFF]/10 blur-[100px]" />

      <div className="relative z-10 mx-auto max-w-6xl px-8">
        <div className="mb-16 text-center">
          <FadeIn delay={0.1} direction="up">
            <h2 className="mb-5 text-3xl leading-tight font-bold tracking-tight text-white md:text-4xl lg:text-5xl">
              {t("services.title_line1")}{" "}
              <span className="bg-gradient-to-r from-[#8EB6FF] via-[#C8DBFF] to-[#194EFF] bg-clip-text text-transparent">
                {t("services.title_line2")}
              </span>
            </h2>
          </FadeIn>
          <FadeIn delay={0.18} direction="up">
            <p className="mx-auto max-w-2xl text-base leading-relaxed text-white/70 md:text-lg">
              {t("services.subtitle")}
            </p>
          </FadeIn>
        </div>

        <StaggerContainer staggerDelay={0.08}>
          <div className="grid grid-cols-1 gap-5 md:grid-cols-2 xl:grid-cols-3">
            {services.map((service) => (
              <StaggerItem key={service.key}>
                <div
                  className={`group relative flex h-full flex-col overflow-hidden rounded-3xl border p-7 transition-all duration-500 hover:-translate-y-1.5 ${
                    service.popular
                      ? "border-[#194EFF]/40 bg-gradient-to-b from-[#194EFF]/15 via-white/[0.04] to-transparent shadow-[0_0_50px_rgba(25,78,255,0.12)]"
                      : "border-white/10 bg-gradient-to-b from-white/[0.05] to-transparent hover:border-[#194EFF]/35 hover:shadow-[0_0_40px_rgba(25,78,255,0.1)]"
                  }`}
                >
                  <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(25,78,255,0.12),transparent_55%)] opacity-0 transition-opacity duration-500 group-hover:opacity-100" />

                  {service.popular && (
                    <span className="absolute top-5 right-5 rounded-full border border-[#194EFF]/30 bg-[#194EFF]/15 px-2.5 py-1 text-[10px] font-semibold tracking-wider text-[#A8C5FF] uppercase">
                      {t("services.most_popular")}
                    </span>
                  )}

                  <div className="relative mb-5 flex h-12 w-12 items-center justify-center rounded-2xl border border-[#194EFF]/25 bg-[#194EFF]/10 text-[#8EB6FF] transition-all duration-500 group-hover:scale-110 group-hover:border-[#194EFF]/50 group-hover:bg-[#194EFF]/20">
                    {service.icon}
                  </div>

                  <h3 className="relative mb-3 text-xl font-semibold text-white">
                    {service.title}
                  </h3>

                  <p className="relative mb-6 flex-1 text-[15px] leading-relaxed text-white/60">
                    {service.description}
                  </p>

                  <ul className="relative mb-7 space-y-2.5">
                    {service.features.map((feature) => (
                      <li key={feature} className="flex items-center gap-2.5 text-sm text-white/70">
                        <span className="flex h-4 w-4 shrink-0 items-center justify-center rounded-full bg-[#194EFF]/15 text-[#6BA3FF]">
                          <svg className="h-2.5 w-2.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                          </svg>
                        </span>
                        {feature}
                      </li>
                    ))}
                  </ul>

                  <Link
                    to={contactPath}
                    className={`group/btn relative mt-auto inline-flex w-full items-center justify-center overflow-hidden rounded-full px-6 py-3 text-sm font-semibold transition-all duration-300 ${
                      service.popular
                        ? "bg-gradient-to-r from-[#194EFF] to-[#3B6FFF] text-white hover:scale-[1.02]"
                        : "border border-white/15 bg-white/[0.03] text-white hover:border-[#194EFF]/45 hover:bg-[#194EFF]/12"
                    }`}
                  >
                    <span className="relative z-10 flex items-center gap-2">
                      {t("services.learn_more")}
                      <svg
                        className="h-3.5 w-3.5 transition-transform duration-300 group-hover/btn:translate-x-0.5"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                      </svg>
                    </span>
                    {service.popular && (
                      <div className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/20 to-transparent transition-transform duration-1000 group-hover/btn:translate-x-full" />
                    )}
                  </Link>
                </div>
              </StaggerItem>
            ))}
          </div>
        </StaggerContainer>
      </div>
    </section>
  );
};
