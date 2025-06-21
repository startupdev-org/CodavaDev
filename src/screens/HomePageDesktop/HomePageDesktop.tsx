import React from "react";
import { CallToActionSection } from "./sections/CallToActionSection";
import { ClientTestimonialsSection } from "./sections/ClientTestimonialsSection";
import { FAQSection } from "./sections/FAQSection";
import { FeaturedPropertiesSection } from "./sections/FeaturedPropertiesSection";
import { HeaderSection } from "./sections/HeaderSection";
import { HeroSection } from "./sections/HeroSection";

export const HomePageDesktop = (): JSX.Element => {
  return (
    <div className="bg-grey-08 flex flex-col w-full">
      <HeaderSection />
      <HeroSection />
      <div className="px-[8%]">
        <FeaturedPropertiesSection />
        <ClientTestimonialsSection />
        <CallToActionSection />
      </div>
      <FAQSection />
    </div>
  );
};
