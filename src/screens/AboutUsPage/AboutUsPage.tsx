import React from "react";
import { HeaderSection } from "./sections/HeaderSection/HeaderSection";
import { AboutHeroSection } from "./sections/AboutHeroSection";
import { CompanyStorySection } from "./sections/CompanyStorySection";
import { TeamSection } from "./sections/TeamSection";
import { AboutCallToActionSection } from "./sections/AboutCallToActionSection";

export const AboutUsPage = (): JSX.Element => {
  return (
    <div className="bg-grey-08 flex flex-col w-full">
      <HeaderSection />
      <div className="px-[8%]">
        <AboutHeroSection />
        <TeamSection />
        <AboutCallToActionSection />
      </div>
      <CompanyStorySection />
    </div>
  );
};
