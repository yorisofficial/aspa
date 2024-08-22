import React from "react";
import ContainerContent from "../../Container";
import SliderPackage from "../../SliderPackage";

const HeroSection2 = () => {
  return (
    <ContainerContent url="hero">
      <div className="hero-section-phase2 h-fit w-full space-y-6 px-4 py-8 text-center md:px-5 xl:px-0">
        <div className="header-content mt-8 flex h-fit flex-col items-center justify-center gap-6">
          <div className="flex h-fit w-full flex-col items-center justify-center gap-6">
            <h1 className="text-center text-2xl font-black text-brand xl:text-4xl">
              ASIAN SURF <br /> PERFORMANCE ACADEMY
            </h1>
            <p className="text-sm font-light xl:w-3/4 xl:text-base">
              The Asian Surf Performance Academy (ASPA) is a high-performance
              surf academy for all levels, from beginners to professionals. We
              train national and foreign teams for competitions, supported by
              experienced coaches with a proven track record. ASPA offers
              private and group sessions covering coaching, analysis, physical
              training, judging criteria, profile building, and mental
              preparation. Whether you&apos;re starting out or aiming to go pro,
              ASPA provides the tools and support to reach your full potential.
            </p>
          </div>
        </div>
        <div className="header">
          <h1 className="text-center text-base font-black text-brand xl:text-4xl">
            Programs
          </h1>
        </div>
        <SliderPackage />
      </div>
    </ContainerContent>
  );
};

export default HeroSection2;
