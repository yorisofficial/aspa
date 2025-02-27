import React from "react";
import HeaderEventContent from "@/app/Components/Events/HeaderEventContent";
import SliderContentProgram from "@/app/Components/Events/SliderContentProgram";
import WideImages from "@/app/Components/Events/WideImages";
import Image from "next/image";
import Link from "next/link";
import { NewAcademy } from "@/app/lib/program/academy/NewAcademy";
import ItemProgramSection from "./components/ItemProgramSection";
import PlayVideos from "@/app/Components/PlayVideos";

export default function page() {
  const SurfProgram = NewAcademy[0];
  const TrainingProgram = NewAcademy[1];
  const CustomeProgram = NewAcademy[2].listing_program[0];
  const randomString = `users-${Math.random().toString(36).substring(2, 14)}`;

  return (
    <div className="container-content h-fit min-h-screen w-full overflow-x-hidden">
      <div className="h-fit w-full">
        <HeaderEventContent
          logo="/brand/ASPA-white.svg"
          title="asian surf performance academy"
          images="/Dump/NorthNias24-0510.jpg"
          theme="bg-gradient-to-r from-brand to-brand/0 xl:bg-brand"
          color="bg-gradient-to-r from-brand to-brand/0"
        />
        <div className="opening-gate py-8 pl-4 md:pl-16">
          <h1 className="big-simple-text w-full text-2xl font-light uppercase md:w-[400px] md:text-4xl">
            Unleash Your Potential with Our Programs!
          </h1>
        </div>
      </div>
      <PlayVideos />
      <SliderContentProgram />
      <WideImages images={"/assets/main/run-kids-surfer.png"} />
      <div className="content-programs">
        <div className="content-moto relative flex flex-col px-4 py-8 md:flex-row md:items-center md:justify-between md:px-16">
          <h2 className="w-full max-w-[500px] text-3xl font-light uppercase xl:w-1/2">
            asian surf performance academy
          </h2>
          <span className="text-start text-5xl font-light uppercase xl:w-1/2 xl:text-9xl">
            programs
          </span>
          <span className="absolute bottom-0 right-0 text-start text-5xl font-black uppercase opacity-5 xl:-bottom-8 xl:text-5xl">
            programs
          </span>
        </div>
        <div className="content-body">
          <ItemProgramSection
            id={SurfProgram.title.toLowerCase().replaceAll(" ", "-")}
            oddBy={false}
            index={0}
          />
          <ItemProgramSection
            id={TrainingProgram.title.toLowerCase().replaceAll(" ", "-")}
            oddBy={true}
            index={1}
          />
          <div
            id={CustomeProgram.title.toLowerCase().replaceAll(" ", "-")}
            className="my-8 w-full md:h-[400px]"
          >
            <div className="relative flex w-full flex-col md:flex-row">
              <div className="h-[250px] w-full bg-brand md:h-[400px] md:w-[25%]"></div>
              <div className="relative h-full md:w-3/4">
                <div className="absolute left-0 top-0 h-full w-full bg-gradient-to-b from-brand to-brand/0 md:top-0 md:bg-gradient-to-r"></div>
                <Image
                  src={"/assets/projects/project_thumbnail_2.jpg"}
                  alt="social media background images"
                  width={2400}
                  height={1400}
                  priority
                  quality={100}
                  className="h-[400px] w-full object-cover object-top md:object-center"
                />
              </div>
              <div className="absolute left-0 top-0 z-20 flex h-full w-full flex-col items-center justify-center text-white">
                <h1 className="text-2xl font-bold uppercase text-white">
                  {CustomeProgram.title}
                </h1>
                <p className="w-full text-center font-light md:w-1/2">
                  {CustomeProgram.description}
                </p>
                <div className="mt-6 flex w-full items-center justify-center">
                  <Link
                    href={`/checkout/${CustomeProgram.id}/${randomString}`}
                    aria-label="Book now the program"
                    className="inline-block bg-black px-4 py-2 uppercase text-white duration-500 hover:bg-white hover:text-black"
                  >
                    Book now
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
