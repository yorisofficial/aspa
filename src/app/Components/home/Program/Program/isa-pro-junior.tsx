import React from "react";
import OurService from "@/app/Components/home/Service/OurService";
import SliderProgram from "@/app/Components/home/Program/SliderProgram";

import SliderSurferISA from "@/app/Components/SliderSurferISA";
import { SurfAthlete } from "@/app/lib/program/isa-junior/SurfData";
import ISADownloadDocument from "@/app/Components/ISADownloadDocument";

export const SliderImg = [
  {
    src: "/assets/program/isa-junior/preview-images/image-preview-1.webp",
    alt: "image-asset-program",
  },
  {
    src: "/assets/program/isa-junior/preview-images/image-preview-2.webp",
    alt: "image-asset-program",
  },
  {
    src: "/assets/program/isa-junior/preview-images/image-preview-3.webp",
    alt: "image-asset-program",
  },
  {
    src: "/assets/program/isa-junior/preview-images/image-preview-4.webp",
    alt: "image-asset-program",
  },
];
const ISAJunior = () => {
  return (
    <>
      <div className="content-section border-buttom grid grid-cols-1 gap-8 py-8 xl:grid-cols-2">
        <SliderProgram data={SliderImg} />
        <div className="details flex h-full w-full flex-col gap-8 xl:order-first">
          <div className="content-body space-y-4">
            <div className="header">
              <span className="text-base uppercase">Our Previous Program</span>
              <h1 className="text-3xl font-black text-brand">
                INDONESIA NATIONAL JUNIOR TEAM ISA EL SALVADOR
              </h1>
            </div>
            <p className="w-full text-sm font-light md:w-3/4 md:text-base xl:w-full">
              The International Surfing Association (ISA) governs global surfing
              and annually hosts the World Junior Surfing Championship, where
              young athletes compete for the world title. This year, El Salvador
              will host the 2024 championship. For the ISA World Junior Surfing
              Championship in El Salvador, ASPA organized the first training
              program to prepare the Indonesian Junior Surfers for the
              competition. During this ASPA training, the National Team Surfers
              participated in various training sessions. They had surf sessions
              that were filmed and later analyzed by an expert surf coach.
              Judging criteria and competition strategy sessions were also part
              of the ASPA training, and to prepare both physically and mentally,
              they underwent physical training as well.
            </p>
            <div className="w-full">
              <h1 className="text-xl font-bold">Download report documents</h1>
              <div className="mt-4">
                <ISADownloadDocument />
              </div>
            </div>
          </div>
        </div>
      </div>
      <OurService title="Our Services" />
      <div className="star-section border-buttom flex min-h-[60vh] w-full flex-col gap-6 py-8 md:gap-8">
        <div className="header-section space-y-3">
          <h1 className="text-2xl font-bold uppercase text-brand">
            Surf athlete
          </h1>
        </div>
        <div className="list-rising-star flex flex-col gap-6 md:gap-8">
          <SliderSurferISA timer={4000} data={SurfAthlete} />
        </div>
      </div>
    </>
  );
};

export default ISAJunior;
