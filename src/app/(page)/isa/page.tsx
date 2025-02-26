import React from "react";
import Image from "next/image";
import SliderContentISA from "./components/SliderContentISA";
import Link from "next/link";
import { ArrowCircleRight } from "@phosphor-icons/react/dist/ssr";
import { DataCourse } from "@/app/lib/DataCourse";
import { Metadata } from "next";
import HeaderEventContent from "@/app/Components/Events/HeaderEventContent";
import { ItemEventOdd } from "./components/ItemEventOdd";
import SosmedHighlight from "@/app/Components/SosmedHighlight";
import { DataSocial } from "@/app/Components/SocialComponents";
import WideImages from "@/app/Components/Events/WideImages";

export const metadata: Metadata = {
  title: "International Surfing Association | ISA surf",
  description:
    "ASPA is proud to collaborate with the ISA (International Surfing Association) to off er certified courses recognized worldwide as the gold standard for professional development in the surfing industry. These courses are designed for aspiring and established professionals, focusing on coaching, judging, and competition management.",
  openGraph: {
    title: "ASPA | ISA surf",
    images: [
      {
        url: "/assets/surf-player.png",
        width: 800,
        height: 600,
        alt: "Og images",
      },
    ],
    type: "website",
    locale: "id_ID",
    siteName: "Asian Surf Performance Academy",
  },
  twitter: {
    title: "ISA surf",
    description:
      "ASPA is proud to collaborate with the ISA (International Surfing Association) to off er certified courses recognized worldwide as the gold standard for professional development in the surfing industry. These courses are designed for aspiring and established professionals, focusing on coaching, judging, and competition management.",
    images: [
      {
        url: "/assets/surf-player.png",
        width: 800,
        height: 600,
        alt: "Og images",
      },
    ],
  },
};

const ISAPage = () => {
  const isaLevelOne = DataCourse[0];
  const isaLevelTwo = DataCourse[1];
  const isaJudging = DataCourse[2];
  const isaWaterSafety = DataCourse[3];
  return (
    <div className="container-content h-fit min-h-screen w-full overflow-x-hidden">
      <HeaderEventContent
        logo="/brand/ASPA-white.svg"
        logo2="/brand/ISA.png"
        title="ASPA Surfing Development Courses"
        images="/assets/surf-player.png"
        theme="bg-gradient-to-r from-brand to-brand/0 xl:bg-brand"
        color="bg-gradient-to-r from-brand to-brand/0"
      />
      <div className="content-moto mt-8 flex w-full flex-col items-start justify-between px-4 md:flex-row md:items-center md:px-16">
        <h2 className="w-full max-w-[500px] text-3xl font-light uppercase xl:w-1/2">
          Nurture and Develop the Next Generation of Surfing Professionals
        </h2>
        <p className="max-w-[500px] text-justify text-base font-light xl:w-1/2">
          ASPA is proud to collaborate with the ISA (International Surfing
          Association) to off er certified courses recognized worldwide as the
          gold standard for professional development in the surfing industry.
          These courses are designed for aspiring and established professionals,
          focusing on coaching, judging, and competition management.
        </p>
      </div>
      <WideImages
        images="/assets/program/isa-teams/preview-isa.webp"
        className="mt-8"
      />
      <SliderContentISA data={DataCourse} />
      <WideImages
        images="https://isasurf.org/wp-content/uploads/2024/05/DSC07568-scaled.jpg"
        className="mt-8"
      />
      <div className="mt-8 min-h-screen w-full">
        <div className="content-moto relative flex h-fit w-full items-center justify-between px-4 md:px-16">
          <h2 className="w-full max-w-[500px] text-3xl font-light uppercase xl:w-1/2">
            International Surfing Association
          </h2>
          <span className="text-start text-5xl font-light uppercase xl:w-1/2 xl:text-9xl">
            COURSEs
          </span>
          <span className="absolute bottom-0 right-0 text-start text-5xl font-black uppercase opacity-5 xl:-bottom-8 xl:text-5xl">
            COURSEs
          </span>
        </div>
        <ItemEventOdd
          title={isaLevelOne.name}
          description={isaLevelOne.description}
          link={isaLevelOne.link}
          image={isaLevelOne.image}
          alt={isaLevelOne.name}
          oddBy={true}
        />
        <ItemEventOdd
          title={isaLevelTwo.name}
          description={isaLevelTwo.description}
          link={isaLevelTwo.link}
          image={isaLevelTwo.image}
          alt={isaLevelTwo.name}
          oddBy={false}
        />
        <ItemEventOdd
          title={isaJudging.name}
          description={isaJudging.description}
          link={isaJudging.link}
          image={isaJudging.image}
          alt={isaJudging.name}
          oddBy={true}
        />
        <ItemEventOdd
          title={isaWaterSafety.name}
          description={isaWaterSafety.description}
          link={isaWaterSafety.link}
          image={isaWaterSafety.image}
          alt={isaWaterSafety.name}
          oddBy={false}
        />
        <SosmedHighlight data={DataSocial} />
      </div>
    </div>
  );
};

export default ISAPage;
