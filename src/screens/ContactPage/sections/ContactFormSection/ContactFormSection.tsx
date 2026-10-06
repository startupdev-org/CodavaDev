import { useState, type FormEvent, type ChangeEvent } from "react";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";
import { FaInstagram, FaTelegramPlane, FaLinkedinIn, FaMapMarkerAlt } from "react-icons/fa";
import { useTranslation } from "../../../../contexts/LanguageContext";

const SOCIAL_LINKS = [
  { label: "Instagram", href: "https://www.instagram.com/codava.dev/", icon: FaInstagram },
  { label: "Telegram", href: "https://t.me/codavadev", icon: FaTelegramPlane },
  { label: "LinkedIn", href: "https://www.linkedin.com/company/codavadev/", icon: FaLinkedinIn },
] as const;

const inputClass =
  "contact-field w-full appearance-none rounded-xl border border-white/10 bg-[#00041F]/40 px-4 py-3 text-sm text-white placeholder-white/40 outline-none transition-colors duration-200 focus:border-[#194EFF]/50 disabled:opacity-60";

const selectClass = `${inputClass} contact-select cursor-pointer pr-10 bg-[length:12px_12px] bg-[right_1rem_center] bg-no-repeat`;

const ease = [0.22, 1, 0.36, 1] as const;

export const ContactFormSection = () => {
  const { t } = useTranslation();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
    howHeard: "",
  });
  const [isLoading, setIsLoading] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [error, setError] = useState("");

  const handleInputChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const clearForm = () => {
    setFormData({ name: "", email: "", subject: "", message: "", howHeard: "" });
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setError("");
    setIsSuccess(false);

    try {
      const result = await emailjs.send(
        "service_glh9iss",
        "template_vttl4v7",
        {
          full_name: formData.name,
          email: formData.email,
          subject: formData.subject,
          source: formData.howHeard,
          message: formData.message,
        },
        "dj1hZBH9DC_l229_T"
      );

      if (result.status === 200) {
        setIsSuccess(true);
        clearForm();
        setTimeout(() => setIsSuccess(false), 5000);
      }
    } catch {
      setError(t("contact_page.form.messages.error.default"));
    } finally {
      setIsLoading(false);
    }
  };

  const services = [
    {
      category: t("contact_page.form.service_categories.development_design"),
      items: [
        { name: "Web Development", translationKey: "web_development" },
        { name: "Design", translationKey: "design" },
        { name: "Bot Automation", translationKey: "bot_automation" },
      ],
    },
    {
      category: t("contact_page.form.service_categories.marketing_content"),
      items: [
        { name: "SEO", translationKey: "seo" },
        { name: "Copywriting", translationKey: "copywriting" },
      ],
    },
    {
      category: t("contact_page.form.service_categories.analytics_tracking"),
      items: [{ name: "Analytics & Tracking", translationKey: "analytics_tracking" }],
    },
  ];

  const overlay = "absolute inset-0";

  return (
    <section className="relative flex h-full w-full items-center justify-center overflow-y-auto overflow-x-hidden">
      <div className="absolute inset-0">
        <video
          className="absolute inset-0 h-full w-full object-cover object-center"
          style={{ filter: "hue-rotate(20deg) saturate(1.05) brightness(0.73)" }}
          src="/herobg.mp4"
          autoPlay
          muted
          loop
          playsInline
          preload="auto"
          aria-hidden
        />
        <div className={`${overlay} bg-[#00041F]/12`} />
        <div
          className={overlay}
          style={{
            background:
              "radial-gradient(ellipse 90% 75% at 50% 42%, rgba(0,4,31,0.97) 0%, rgba(0,4,31,0.45) 38%, rgba(0,4,31,0.12) 62%, transparent 78%)",
          }}
        />
        <div
          className={overlay}
          style={{
            background:
              "radial-gradient(ellipse 80% 60% at 50% 40%, rgba(25,78,255,0.20) 0%, rgba(25,78,255,0.08) 55%, transparent 80%)",
          }}
        />
      </div>

      <div className="relative z-10 w-full max-w-3xl mx-auto px-6 pt-[250px] pb-[calc(2rem+50px)] text-center md:px-8 md:pb-8">
        <motion.p
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease }}
          className="mb-5 inline-flex items-center justify-center gap-1.5 text-xs md:text-sm tracking-[0.2em] uppercase text-[#6BA3FF]/90"
        >
          <FaMapMarkerAlt className="h-3 w-3 md:h-3.5 md:w-3.5 shrink-0" aria-hidden />
          {t("footer.location")}
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.06, ease }}
          className="mx-auto max-w-3xl text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight leading-[1.1] text-white mb-4 drop-shadow-[0_2px_28px_rgba(0,0,0,0.75)]"
        >
          {t("contact_page.hero.title_line1")}
          <span className="mt-1 block text-[#C8DBFF]">
            {t("contact_page.hero.title_highlight")}
          </span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.12, ease }}
          className="mx-auto max-w-xl text-base md:text-lg text-white/90 leading-relaxed mb-7 drop-shadow-[0_2px_16px_rgba(0,0,0,0.55)]"
        >
          {t("contact_page.hero.description")}
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.18, ease }}
          className="mx-auto max-w-2xl rounded-3xl border border-white/10 bg-gradient-to-b from-white/[0.06] to-transparent p-5 text-left backdrop-blur-xl md:p-6"
        >
          {isSuccess && (
            <div className="mb-3 rounded-xl border border-emerald-400/25 bg-emerald-400/10 px-3 py-2 text-sm text-emerald-200">
              {t("contact_page.form.messages.success.title")}
            </div>
          )}
          {error && (
            <div className="mb-3 rounded-xl border border-red-400/25 bg-red-400/10 px-3 py-2 text-sm text-red-200">
              {error}
            </div>
          )}

          <form onSubmit={handleSubmit} className="space-y-3">
            <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleInputChange}
                className={inputClass}
                placeholder={t("contact_page.form.placeholders.full_name")}
                required
                disabled={isLoading}
                aria-label={t("contact_page.form.labels.full_name")}
              />
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                className={inputClass}
                placeholder={t("contact_page.form.placeholders.email")}
                required
                disabled={isLoading}
                aria-label={t("contact_page.form.labels.email")}
              />
            </div>

            <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
              <select
                name="subject"
                value={formData.subject}
                onChange={handleInputChange}
                className={selectClass}
                required
                disabled={isLoading}
                aria-label={t("contact_page.form.labels.subject")}
              >
                <option value="" className="bg-[#0B1438]">
                  {t("contact_page.form.select_options.select_service")}
                </option>
                {services.map((category) => (
                  <optgroup key={category.category} label={category.category} className="bg-[#0B1438]">
                    {category.items.map((service) => (
                      <option key={service.translationKey} value={service.name} className="bg-[#0B1438]">
                        {t(`contact_page.form.services.${service.translationKey}`)}
                      </option>
                    ))}
                  </optgroup>
                ))}
              </select>
              <select
                name="howHeard"
                value={formData.howHeard}
                onChange={handleInputChange}
                className={selectClass}
                required
                disabled={isLoading}
                aria-label={t("contact_page.form.labels.how_heard")}
              >
                <option value="" className="bg-[#0B1438]">
                  {t("contact_page.form.labels.how_heard")}
                </option>
                <option value="Google" className="bg-[#0B1438]">{t("contact_page.form.select_options.how_heard.google")}</option>
                <option value="Friend or Colleague" className="bg-[#0B1438]">{t("contact_page.form.select_options.how_heard.friend_colleague")}</option>
                <option value="Instagram" className="bg-[#0B1438]">{t("contact_page.form.select_options.how_heard.instagram")}</option>
                <option value="Facebook" className="bg-[#0B1438]">{t("contact_page.form.select_options.how_heard.facebook")}</option>
                <option value="LinkedIn" className="bg-[#0B1438]">{t("contact_page.form.select_options.how_heard.linkedin")}</option>
                <option value="Advertisement" className="bg-[#0B1438]">{t("contact_page.form.select_options.how_heard.advertisement")}</option>
                <option value="Event or Conference" className="bg-[#0B1438]">{t("contact_page.form.select_options.how_heard.event_conference")}</option>
                <option value="Other" className="bg-[#0B1438]">{t("contact_page.form.select_options.how_heard.other")}</option>
              </select>
            </div>

            <textarea
              name="message"
              value={formData.message}
              onChange={handleInputChange}
              className={`${inputClass} min-h-[88px] resize-none`}
              placeholder={t("contact_page.form.placeholders.message")}
              required
              disabled={isLoading}
              aria-label={t("contact_page.form.labels.message")}
            />

            <button
              type="submit"
              disabled={isLoading}
              className={`group/btn relative inline-flex w-full items-center justify-center gap-2 overflow-hidden rounded-full px-7 py-3.5 text-sm md:text-base font-semibold transition-all duration-300 ${
                isLoading
                  ? "cursor-not-allowed bg-white/10 text-white/50"
                  : "bg-gradient-to-r from-[#194EFF] to-[#194EFF]/90 text-white hover:scale-[1.02] hover:from-[#194EFF]/90 hover:to-[#194EFF]/80"
              }`}
            >
              {isLoading ? (
                <>
                  <span className="h-4 w-4 animate-spin rounded-full border-2 border-white/30 border-t-white" />
                  <span>{t("contact_page.form.button.sending")}</span>
                </>
              ) : (
                <>
                  <span className="relative z-10">{t("contact_page.form.button.send")}</span>
                  <svg className="relative z-10 h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                  </svg>
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover/btn:translate-x-full transition-transform duration-1000" />
                </>
              )}
            </button>
          </form>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.28 }}
          className="mt-6 flex flex-col items-center gap-4"
        >
          <div className="flex items-center justify-center gap-3">
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
          <a
            href="mailto:codava.dev@gmail.com"
            className="text-sm text-white/60 transition-colors hover:text-white"
          >
            codava.dev@gmail.com
          </a>
        </motion.div>
      </div>
    </section>
  );
};
