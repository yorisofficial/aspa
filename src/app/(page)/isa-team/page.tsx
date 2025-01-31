import React from "react";
import ISAHeader from "./components/ISAHeader";
import Image from "next/image";
import SliderContentISA from "./components/SliderContentISA";

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
          src={"/assets/program/isa-teams/preview-isa.png"}
          alt="image-asset-program"
          width={2400}
          priority={false}
          height={100}
          quality={100}
          className="h-full w-full object-cover"
        />
      </div>
      <SliderContentISA />
      <div className="mt-8 h-[400px] w-full">
        <Image
          src={
            "https://isasurf.org/wp-content/uploads/2024/05/DSC07568-scaled.jpg"
          }
          alt="image-asset-program"
          width={2400}
          priority={false}
          height={100}
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
          className="isa-surf-coach bored mt-6 min-h-screen w-full"
        ></div>
        <div
          id="isa-surf-coach-2"
          className="isa-surf-coach min-h-screen w-full bg-green"
        ></div>
        <div
          id="isa-surf-judging"
          className="isa-surf-judging min-h-screen w-full bg-dodgerblue"
        ></div>
        <div
          id="isa-surf-water-safety"
          className="isa-surf-water-safety min-h-screen w-full bg-black"
        ></div>
      </div>
    </div>
  );
};

export default ISAPage;
