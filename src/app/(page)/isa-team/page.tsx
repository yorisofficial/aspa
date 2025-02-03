import React from "react";
import ISAHeader from "./components/ISAHeader";
import Image from "next/image";
import SliderContentISA from "./components/SliderContentISA";
import Link from "next/link";
import { ArrowCircleRight } from "@phosphor-icons/react/dist/ssr";
import { DataCourse } from "@/app/lib/DataCourse";

export const metadata = {
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
    cardType: "summary_large_image",
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
  return (
    <div className="container-content h-fit min-h-screen w-full overflow-x-hidden">
      <ISAHeader />
      <div className="content-moto mx-auto mt-8 flex h-fit max-w-6xl flex-col justify-between gap-4 px-4 md:px-10 xl:flex-row xl:gap-5 xl:px-0">
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
      <div className="mt-8 h-[400px] w-full">
        <Image
          src={"/assets/program/isa-teams/preview-isa.jpg"}
          alt="image-asset-program"
          width={2400}
          priority={false}
          height={800}
          quality={100}
          className="h-full w-full object-cover"
        />
      </div>
      <SliderContentISA data={DataCourse} />
      <div className="mt-8 h-[400px] w-full">
        <Image
          src={
            "https://isasurf.org/wp-content/uploads/2024/05/DSC07568-scaled.jpg"
          }
          alt="image-asset-program"
          width={2400}
          priority={false}
          height={800}
          quality={100}
          className="h-full w-full object-cover"
        />
      </div>
      <div className="mt-8 min-h-screen w-full">
        <div className="content-moto relative mx-auto mt-8 flex h-fit max-w-6xl flex-col items-start justify-between gap-4 px-4 md:px-10 xl:flex-row xl:items-center xl:gap-5 xl:px-0">
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
        <div
          id="isa-surf-coach-1"
          className="isa-surf-coach relative mt-16 h-fit w-full md:px-0"
        >
          <Image
            src={"/assets/program/isa-teams/isa-lv-1.jpg"}
            alt="image-asset-program"
            width={2400}
            priority={false}
            height={800}
            quality={100}
            className="h-[250px] w-full object-cover md:h-[400px] md:w-3/4"
          />
          <div className="absolute-content p-4 drop-shadow-lg md:absolute md:right-[5%] md:top-1/2 md:z-10 md:w-[500px] md:-translate-y-1/2 md:bg-white md:p-6">
            <h2 className="text-3xl font-light uppercase">
              ISA Surf Level 1 Instructor Certification
            </h2>
            <p className="mt-2 text-start text-base font-light">
              The Level 1 course is the foundation for those teaching beginner
              and early intermediate surfers. This internationally recognized
              program equips instructors with essential skills, safety
              knowledge, and teaching techniques to deliver high-quality,
              engaging surf lessons.
            </p>
            <Link
              target="_blank"
              href="/"
              className="group mt-4 flex w-full items-center justify-center gap-2 rounded-lg bg-primary px-4 py-2 uppercase text-white"
            >
              more information{" "}
              <ArrowCircleRight
                size={20}
                weight="light"
                className="duration-300 group-hover:translate-x-2"
              />
            </Link>
          </div>
        </div>
        <div
          id="isa-surf-coach-2"
          className="isa-surf-coach relative mt-8 w-full md:flex md:items-center md:justify-end"
        >
          <Image
            src={"/assets/program/isa-teams/isa-lv-2.jpg"}
            alt="image-asset-program"
            width={2400}
            height={800}
            priority={false}
            quality={100}
            className="h-[250px] w-full object-cover md:h-[400px] md:w-3/4"
          />
          <div className="absolute-content p-4 drop-shadow-lg md:absolute md:left-[5%] md:top-1/2 md:z-10 md:w-[500px] md:-translate-y-1/2 md:bg-white md:p-6">
            <h2 className="text-3xl font-light uppercase">
              ISA Surf Level 2 Instructor Certification
            </h2>
            <p className="mt-2 text-start text-base font-light">
              For experienced instructors, the Level 2 course focuses on
              training intermediate to advanced surfers. It prepares coaches to
              enhance athletes skills, optimize performance, and prepare them
              for competitions.
            </p>
            <Link
              target="_blank"
              href="/"
              className="group mt-4 flex w-full items-center justify-center gap-2 rounded-lg bg-primary px-4 py-2 uppercase text-white"
            >
              more information{" "}
              <ArrowCircleRight
                size={20}
                weight="light"
                className="duration-300 group-hover:translate-x-2"
              />
            </Link>
          </div>
        </div>
        <div
          id="isa-surf-judging"
          className="isa-surf-judging relative mt-8 h-fit w-full"
        >
          <Image
            src={"/assets/program/isa-teams/ISA-judging.jpg"}
            alt="image-asset-program"
            width={2400}
            height={800}
            priority={false}
            quality={100}
            className="h-[250px] w-full object-cover md:h-[400px] md:w-3/4"
          />
          <div className="absolute-content p-4 drop-shadow-lg md:absolute md:right-[5%] md:top-1/2 md:z-10 md:w-[500px] md:-translate-y-1/2 md:bg-white md:p-6">
            <h2 className="text-3xl font-light uppercase">
              ISA Judging Certification
            </h2>
            <p className="mt-2 text-start text-base font-light">
              For those interested in surf competition offi ciating, the ISA
              Judging Course provides comprehensive training on scoring
              criteria, heat analysis, and judging protocols. Delivered by
              experienced ISA presenters, the course includes practice sessions
              for comparing waves and assigning scores.
            </p>
            <Link
              target="_blank"
              href="/"
              className="group mt-4 flex w-full items-center justify-center gap-2 rounded-lg bg-primary px-4 py-2 uppercase text-white"
            >
              more information{" "}
              <ArrowCircleRight
                size={20}
                weight="light"
                className="duration-300 group-hover:translate-x-2"
              />
            </Link>
          </div>
        </div>
        <div
          id="isa-surf-water-safety"
          className="isa-surf-coach relative mt-8 w-full md:flex md:items-center md:justify-end"
        >
          <Image
            src={"/assets/program/isa-teams/isa-water-safety.jpg"}
            alt="image-asset-program"
            width={2400}
            height={800}
            priority={false}
            quality={100}
            className="h-[250px] w-full object-cover md:h-[400px] md:w-3/4"
          />
          <div className="absolute-content p-4 drop-shadow-lg md:absolute md:left-[5%] md:top-1/2 md:z-10 md:w-[500px] md:-translate-y-1/2 md:bg-white md:p-6">
            <h2 className="text-3xl font-light uppercase">
              ISA/ILS Water Safety Certification
            </h2>
            <p className="mt-2 text-start text-base font-light">
              A vital component of surf coaching, this course ensures
              instructors are equipped with globally recognized water safety
              skills.
            </p>
            <Link
              target="_blank"
              href="/"
              className="group mt-4 flex w-full items-center justify-center gap-2 rounded-lg bg-primary px-4 py-2 uppercase text-white"
            >
              more information{" "}
              <ArrowCircleRight
                size={20}
                weight="light"
                className="duration-300 group-hover:translate-x-2"
              />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ISAPage;
