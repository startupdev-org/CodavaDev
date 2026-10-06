import { motion } from "framer-motion";
import { useLocaleNavigate } from "../../../../lib/localePath";
import { FaMapMarkerAlt } from "react-icons/fa";
import { useTranslation } from "../../../../contexts/LanguageContext";

export const HeroSection = () => {
  const navigate = useLocaleNavigate();
  const { t } = useTranslation();
  const overlay = "absolute inset-0";

  return (
    <section className="relative flex min-h-[100svh] w-full items-center justify-center overflow-hidden">
      <div
        className="absolute inset-0"
        style={{
          WebkitMaskImage:
            "linear-gradient(to bottom, #000 0, #000 calc(100% - 180px), transparent 100%)",
          maskImage:
            "linear-gradient(to bottom, #000 0, #000 calc(100% - 180px), transparent 100%)",
        }}
      >
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

      <div className="relative z-10 w-full max-w-6xl mx-auto px-8 md:px-6 pt-32 pb-10 md:pt-36 md:pb-12 text-center">
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
          className="mb-7"
        >
          <p className="inline-flex items-center justify-center gap-1.5 text-xs md:text-sm tracking-[0.2em] uppercase text-[#6BA3FF]/90">
            <FaMapMarkerAlt className="w-3 h-3 md:w-3.5 md:h-3.5 shrink-0" aria-hidden />
            {t("hero.badge")}
          </p>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.06, ease: [0.22, 1, 0.36, 1] }}
          className="mx-auto max-w-4xl text-[2.5rem] sm:text-5xl md:text-6xl lg:text-[4rem] font-bold tracking-tight leading-[1.1] text-white mb-5 drop-shadow-[0_2px_28px_rgba(0,0,0,0.75)]"
        >
          {t("hero.title")}
          <span className="mt-1 block text-[#C8DBFF]">
            {t("hero.title_highlight")}
          </span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.12, ease: [0.22, 1, 0.36, 1] }}
          className="mx-auto max-w-2xl text-base md:text-lg text-white/90 leading-relaxed mb-10 drop-shadow-[0_2px_16px_rgba(0,0,0,0.55)]"
        >
          {t("hero.description")}
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.18, ease: [0.22, 1, 0.36, 1] }}
          className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center items-center"
        >
          <button
            onClick={() => navigate("/contact")}
            className="group/btn relative inline-flex items-center justify-center gap-2 overflow-hidden rounded-full bg-gradient-to-r from-[#194EFF] to-[#194EFF]/90 px-7 py-3.5 text-sm md:text-base font-semibold text-white transition-all duration-300 hover:from-[#194EFF]/90 hover:to-[#194EFF]/80 hover:scale-105"
          >
            <span className="relative z-10">{t("hero.cta_primary")}</span>
            <svg className="relative z-10 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
            </svg>
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover/btn:translate-x-full transition-transform duration-1000" />
          </button>

          <button
            onClick={() => navigate("/our-work")}
            className="inline-flex items-center justify-center gap-2 rounded-full border border-[#194EFF]/35 bg-[#194EFF]/10 px-7 py-3.5 text-sm md:text-base font-semibold text-white transition-all duration-300 hover:border-[#194EFF]/60 hover:bg-[#194EFF]/18"
          >
            {t("hero.cta_secondary")}
          </button>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.28 }}
          className="mt-10 inline-flex items-center justify-center gap-2.5 text-sm text-white/60"
        >
          <svg
            className="h-5 w-5 shrink-0"
            viewBox="0 0 22 22"
            xmlns="http://www.w3.org/2000/svg"
            aria-hidden="true"
          >
            <path
              d="M20.396 11c-.018-.646-.215-1.275-.57-1.816-.354-.54-.852-.972-1.438-1.246.223-.607.27-1.264.14-1.897-.131-.634-.437-1.218-.882-1.687-.47-.445-1.053-.75-1.687-.882-.633-.13-1.29-.083-1.897.14-.273-.587-.704-1.086-1.245-1.44S11.647 1.62 11 1.604c-.646.017-1.273.213-1.813.568s-.969.854-1.24 1.44c-.608-.223-1.267-.272-1.902-.14-.635.13-1.22.436-1.69.882-.445.47-.749 1.055-.878 1.688-.13.633-.08 1.29.144 1.896-.587.274-1.087.705-1.443 1.245-.356.54-.555 1.17-.574 1.817.02.647.218 1.276.574 1.817.356.54.856.972 1.443 1.245-.224.606-.274 1.263-.144 1.896.13.634.433 1.218.877 1.688.47.443 1.054.747 1.687.878.633.132 1.29.084 1.897-.136.274.586.705 1.084 1.246 1.439.54.354 1.17.551 1.816.569.647-.016 1.276-.213 1.817-.567s.972-.854 1.245-1.44c.604.239 1.266.296 1.903.164.636-.132 1.22-.447 1.68-.907.46-.46.776-1.044.908-1.681s.075-1.299-.165-1.903c.586-.274 1.084-.705 1.439-1.246.354-.54.551-1.17.569-1.816z"
              fill="#1D9BF0"
            />
            <path
              d="M9.662 14.85l-3.429-3.428 1.293-1.302 2.072 2.072 4.4-4.794 1.347 1.246z"
              fill="#fff"
            />
          </svg>
          <span>{t("hero.stats")}</span>
        </motion.div>
      </div>
    </section>
  );
};
