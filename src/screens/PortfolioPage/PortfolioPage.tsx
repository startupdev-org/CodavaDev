import { HeaderSection, FooterSection } from "../FixedComponents";
import { PortfolioGridSection } from "./sections/PortfolioGridSection/PortfolioGridSection";

export const PortfolioPage = () => {
  return (
    <div className="relative min-h-screen overflow-hidden bg-[#00020F]">
      <div className="pointer-events-none fixed inset-0">
        <video
          className="h-full w-full object-cover object-center"
          style={{ filter: "hue-rotate(20deg) saturate(1.05) brightness(0.73)" }}
          src="/herobg.mp4"
          autoPlay
          muted
          loop
          playsInline
          preload="auto"
          aria-hidden
        />
        <div className="absolute inset-0 bg-[#00041F]/18" />
        <div
          className="absolute inset-0"
          style={{
            background:
              "radial-gradient(ellipse 90% 75% at 50% 42%, rgba(0,4,31,0.72) 0%, rgba(0,4,31,0.28) 42%, rgba(0,4,31,0.08) 68%, transparent 82%)",
          }}
        />
        <div
          className="absolute inset-0"
          style={{
            background:
              "radial-gradient(ellipse 80% 60% at 50% 40%, rgba(25,78,255,0.16) 0%, rgba(25,78,255,0.05) 55%, transparent 80%)",
          }}
        />
        <div
          className="absolute inset-x-0 bottom-0 h-[30%]"
          style={{
            background: "linear-gradient(to bottom, transparent 0%, #00020F 100%)",
          }}
        />
      </div>

      <HeaderSection />
      <main className="relative z-10">
        <PortfolioGridSection />
      </main>
      <FooterSection />
    </div>
  );
};
