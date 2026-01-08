import { cn } from "@/lib/utils";
import { Marquee } from "@/components/magicui/marquee";
import { useTranslation } from "../../../../contexts/LanguageContext";

export function ReviewsMarqueeSection() {
  const { t } = useTranslation();
  const reviews = t('reviews.testimonials', { returnObjects: true });

const firstRow = reviews.slice(0, reviews.length / 2);
const secondRow = reviews.slice(reviews.length / 2);

const ReviewCard = ({
  img,
  name,
  username,
  body,
  className
}: {
  img: string;
  name: string;
  username: string;
  body: string;
  className?: string;
}) => {
  return (
    <figure
      className={cn(
        "relative h-full w-96 cursor-pointer overflow-hidden rounded-2xl border p-8 transition-all duration-300 hover:scale-105",
        // Blue theme styling to match the site
        "border-[#194EFF]/20 bg-white/[0.02] hover:bg-white/[0.05] backdrop-blur-sm",
        "shadow-lg hover:shadow-xl hover:shadow-[#194EFF]/10",
        className
      )}
    >
      <div className="flex flex-row items-center gap-3 mb-4">
        <img
          className="rounded-full ring-2 ring-[#194EFF]/30"
          width="40"
          height="40"
          alt={`${name}'s avatar`}
          src={img}
        />
        <div className="flex flex-col">
          <figcaption className="text-base font-semibold text-white">
            {name}
          </figcaption>
          <p className="text-sm font-medium text-white/60">{username}</p>
        </div>
        {/* Rating stars */}
        {/* Rating stars — hidden on mobile */}
        <div className="ml-auto hidden sm:flex gap-1">
          {[...Array(5)].map((_, i) => (
            <svg key={i} className="w-4 h-4 text-[#194EFF]" fill="currentColor" viewBox="0 0 20 20">
              <path d="M9.049 2.927c..." />
            </svg>
          ))}
        </div>

      </div>
      <blockquote className="text-base text-white/80 leading-relaxed">{body}</blockquote>

      {/* Subtle glow effect */}
      <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-[#194EFF]/5 to-transparent pointer-events-none opacity-0 transition-opacity duration-300 group-hover:opacity-100"></div>
    </figure>
  );
};
  return (
    <section className="relative py-20">
      {/* Background decoration */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-0 w-96 h-96 bg-[#194EFF]/5 rounded-full blur-3xl transform -translate-y-1/2"></div>
        <div className="absolute top-1/2 right-0 w-96 h-96 bg-[#194EFF]/5 rounded-full blur-3xl transform -translate-y-1/2"></div>
      </div>

      <div className="relative max-w-[1600px] mx-auto px-0">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-[#194EFF]/10 border border-[#194EFF]/20 rounded-full mb-6">
            <div className="w-2 h-2 bg-[#194EFF] rounded-full animate-pulse"></div>
            <span className="text-[#194EFF] text-sm font-semibold tracking-wider uppercase">{t('reviews.badge')}</span>
          </div>
          <h2 className="text-3xl sm:text-3xl md:text-5xl font-bold text-white mb-6 leading-tight">
            {t('reviews.title_line1')} <span className="text-transparent bg-gradient-to-r from-[#194EFF] to-blue-400 bg-clip-text">{t('reviews.title_line2')}</span>
          </h2>
          <p className="text-base lg:text-lg text-white/70 max-w-4xl mx-auto leading-relaxed font-light">
            {t('reviews.subtitle')}
          </p>
        </div>

        {/* Marquee Reviews */}
        <div className="relative flex w-full flex-col items-center justify-center overflow-hidden">
          <Marquee pauseOnHover className="[--duration:30s] mb-4 sm:mb-4">
            {firstRow.map((review) => (
              <ReviewCard
                key={review.username}
                {...review}
                className="mx-2 sm:mx-6 w-[260px] sm:w-[440px]"
              />
            ))}
          </Marquee>
          <Marquee reverse pauseOnHover className="[--duration:30s]">
            {secondRow.map((review) => (
              <ReviewCard
                key={review.username}
                {...review}
                className="mx-2 sm:mx-6 w-[260px] sm:w-[440px]"
              />
            ))}
          </Marquee>

          {/* Fade edges */}
          <div className="pointer-events-none absolute inset-y-0 left-0 w-1/6 bg-gradient-to-r from-[#00041F] to-transparent"></div>
          <div className="pointer-events-none absolute inset-y-0 right-0 w-1/6 bg-gradient-to-l from-[#00041F] to-transparent"></div>
        </div>
      </div>
    </section>
  );
} 