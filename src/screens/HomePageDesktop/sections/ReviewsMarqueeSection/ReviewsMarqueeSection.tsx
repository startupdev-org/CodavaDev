import { cn } from "@/lib/utils";
import { Marquee } from "@/components/magicui/marquee";

const reviews = [
  {
    name: "Emma Rodriguez",
    username: "TechVision Solutions",
    body: "Codava rebuilt our platform with modern tech stack. Load times dropped 70% and user engagement doubled!",
    img: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=150&h=150&fit=crop&crop=face&auto=format&q=80"
  },
  {
    name: "Bors Andrei",
    username: "Epic Trans Logistics",
    body: "I recommend Codava! They helped our logistics business with a logo, business cards, and a client-attracting website.",
    img: "/avatars/user-02.jpg"
  },
  {
    name: "Castravet Ilie",
    username: "Euro Tour Moldova",
    body: "The modern, high-quality website they built for our transport company is fast, ranks high, attracts clients, and elevates visibility.",
    img: "/avatars/user-01.jpg"
  },
  {
    name: "Alex Chen",
    username: "FinTech Innovations",
    body: "AI chatbot handles 90% of support queries instantly. Best tech investment we've made this year!",
    img: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=150&h=150&fit=crop&crop=face&auto=format&q=80"
  },
  {
    name: "Natalia Cimihov",
    username: "DaVinci Education",
    body: "Codava built a clear, mobile-friendly site for our educational project, perfectly showcasing all stages.",
    img: "/avatars/user-04.jpg"
  },
  {
    name: "Stefan Istrati",
    username: "Senda Courier",
    body: "I worked with Codava on redesign, logo, and cards; the site's innovative and results were fast, professional.",
    img: "/avatars/user-03.jpg"
  },
  {
    name: "Maya Patel",
    username: "GrowthMarketing Pro",
    body: "SEO campaign tripled organic traffic in 3 months. ROI exceeded expectations by 200%!",
    img: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&h=150&fit=crop&crop=face&auto=format&q=80"
  },
  {
    name: "David Thompson",
    username: "HealthTech Solutions",
    body: "App redesign increased daily active users by 85%. Patient feedback has been overwhelmingly positive.",
    img: "https://images.unsplash.com/photo-1519345182560-3f2917c472ef?w=150&h=150&fit=crop&crop=face&auto=format&q=80"
  }
];

const firstRow = reviews.slice(0, reviews.length / 2);
const secondRow = reviews.slice(reviews.length / 2);

const ReviewCard = ({
  img,
  name,
  username,
  body,
}: {
  img: string;
  name: string;
  username: string;
  body: string;
}) => {
  return (
    <figure
      className={cn(
        "relative h-full w-96 cursor-pointer overflow-hidden rounded-2xl border p-8 transition-all duration-300 hover:scale-105",
        // Blue theme styling to match the site
        "border-[#194EFF]/20 bg-white/[0.02] hover:bg-white/[0.05] backdrop-blur-sm",
        "shadow-lg hover:shadow-xl hover:shadow-[#194EFF]/10"
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
        <div className="ml-auto flex gap-1">
          {[...Array(5)].map((_, i) => (
            <svg key={i} className="w-4 h-4 text-[#194EFF]" fill="currentColor" viewBox="0 0 20 20">
              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
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

export function ReviewsMarqueeSection() {
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
            <span className="text-[#194EFF] text-sm font-semibold tracking-wider uppercase">Client Reviews</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 leading-tight">
            What Our <span className="text-transparent bg-gradient-to-r from-[#194EFF] to-blue-400 bg-clip-text">Clients Say</span>
          </h2>
          <p className="text-base lg:text-lg text-white/70 max-w-4xl mx-auto leading-relaxed font-light">
            Trusted by hundreds of businesses worldwide for exceptional digital solutions
          </p>
        </div>

        {/* Marquee Reviews */}
        <div className="relative flex w-full flex-col items-center justify-center overflow-hidden">
          <Marquee pauseOnHover className="[--duration:30s] mb-4">
            {firstRow.map((review) => (
              <ReviewCard key={review.username} {...review} />
            ))}
          </Marquee>
          <Marquee reverse pauseOnHover className="[--duration:30s]">
            {secondRow.map((review) => (
              <ReviewCard key={review.username} {...review} />
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