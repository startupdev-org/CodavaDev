import React from "react";
import { HeaderSection, FooterSection } from "../FixedComponents";
import { AboutHeroSection } from "./sections/AboutHeroSection";
import { CompanyStorySection } from "./sections/CompanyStorySection";
import { TeamSection } from "./sections/TeamSection";
import { AboutCallToActionSection } from "./sections/AboutCallToActionSection";

export const AboutUsPage = (): JSX.Element => {
  return (
    <div className="bg-grey-08 flex flex-col w-full pb-24">
      <HeaderSection />
      <div className="pt-32 px-[8%]">
        <AboutHeroSection />
        <TeamSection />
        <AboutCallToActionSection />
      </div>
      {/* <CompanyStorySection /> */}
      <FooterSection />
    </div>
  );
};
