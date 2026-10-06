import { cn } from "@/lib/utils";
import { Marquee } from "@/components/magicui/marquee";
import { useTranslation } from "../../../../contexts/LanguageContext";

type Review = {
  img: string;
  name: string;
  username: string;
  body: string;
};

export function ReviewsMarqueeSection() {
  const { t } = useTranslation();
  const reviews = t('reviews.testimonials', { returnObjects: true }) as Review[];

  const firstRow = reviews.slice(0, Math.ceil(reviews.length / 2));
  const secondRow = reviews.slice(Math.ceil(reviews.length / 2));

  const ReviewCard = ({
    img,
    name,
    username,
    body,
    className,
  }: Review & { className?: string }) => (
    <figure
      className={cn(
        "group relative h-full overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-br from-white/[0.06] to-white/[0.02] p-6 md:p-7 transition-all duration-500 hover:border-[#194EFF]/40 hover:shadow-[0_0_30px_rgba(25,78,255,0.12)]",
        className
      )}
    >
      <div className="pointer-events-none absolute -right-6 -top-6 h-24 w-24 rounded-full bg-[#194EFF]/15 blur-2xl opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
      <div className="relative flex flex-row items-center gap-3 mb-4">
        <img
          className="rounded-full ring-2 ring-[#194EFF]/25"
          width="40"
          height="40"
          alt={`${name}'s avatar`}
          src={img}
        />
        <div className="flex flex-col min-w-0">
          <figcaption className="text-sm font-semibold text-white truncate">
            {name}
          </figcaption>
          <p className="text-xs font-medium text-white/50 truncate">{username}</p>
        </div>
        <div className="ml-auto hidden sm:flex gap-0.5">
          {[...Array(5)].map((_, i) => (
            <svg key={i} className="w-3.5 h-3.5 text-[#194EFF]" fill="currentColor" viewBox="0 0 20 20">
              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
            </svg>
          ))}
        </div>
      </div>
      <blockquote className="relative text-[15px] text-white/75 leading-relaxed">{body}</blockquote>
    </figure>
  );

  return (
    <section className="relative z-10 pt-4 pb-24 md:pt-6 md:pb-28">
      <div className="absolute left-0 top-1/2 -translate-y-1/2 w-72 h-72 bg-[#194EFF]/10 blur-[100px] pointer-events-none" />
      <div className="absolute right-0 top-1/2 -translate-y-1/2 w-72 h-72 bg-[#194EFF]/10 blur-[100px] pointer-events-none" />

      <div className="relative w-full">
        <div className="text-center mb-12 px-8">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-5 leading-tight tracking-tight drop-shadow-[0_2px_20px_rgba(0,0,0,0.45)]">
            {t('reviews.title_line1')}{" "}
            <span className="bg-gradient-to-r from-[#8EB6FF] via-[#C8DBFF] to-[#194EFF] bg-clip-text text-transparent">
              {t('reviews.title_line2')}
            </span>
          </h2>
          <p className="text-base md:text-lg text-white/70 max-w-2xl mx-auto leading-relaxed">
            {t('reviews.subtitle')}
          </p>
        </div>

        <div className="relative flex w-full flex-col items-center justify-center overflow-hidden">
          <Marquee pauseOnHover className="[--duration:30s] mb-4">
            {firstRow.map((review) => (
              <ReviewCard
                key={review.username}
                {...review}
                className="mx-1.5 sm:mx-2 w-[300px] sm:w-[400px]"
              />
            ))}
          </Marquee>
          <Marquee reverse pauseOnHover className="[--duration:30s]">
            {secondRow.map((review) => (
              <ReviewCard
                key={review.username}
                {...review}
                className="mx-1.5 sm:mx-2 w-[300px] sm:w-[400px]"
              />
            ))}
          </Marquee>

          <div className="pointer-events-none absolute inset-y-0 left-0 w-1/6 bg-gradient-to-r from-[#00020F] via-[#00020F]/75 to-transparent" />
          <div className="pointer-events-none absolute inset-y-0 right-0 w-1/6 bg-gradient-to-l from-[#00020F] via-[#00020F]/75 to-transparent" />
        </div>
      </div>
    </section>
  );
}
