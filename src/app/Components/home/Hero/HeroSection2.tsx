import React from "react";
import ContainerContent from "../../Container";
import SliderPackage from "../../SliderPackage";
import { ContentData } from "@/app/lib/Content";

const HeroSection2 = () => {
  const contentText = ContentData[0];
  return (
    <ContainerContent url="hero">
      <div className="hero-section-phase2 h-fit w-full space-y-6 px-4 py-8 text-center md:px-5 xl:px-0">
        <div className="header-content mt-8 flex h-fit flex-col items-center justify-center gap-6">
          <div className="flex h-fit w-full flex-col items-center justify-center gap-6">
            <h1 className="text-center text-2xl font-black text-brand xl:text-4xl">
              ASIAN SURF <br /> PERFORMANCE ACADEMY
            </h1>
            <p className="text-sm font-light xl:w-3/4 xl:text-base">
              {contentText.description}
            </p>
          </div>
        </div>
      </div>
    </ContainerContent>
  );
};

export default HeroSection2;
