import React from "react";
import HeaderEventContent from "@/app/Components/Events/HeaderEventContent";
import PlayYoutube from "@/app/Components/home/VideoPreview/PlayYoutube";
import SliderContentProgram, {
  randomString,
} from "@/app/Components/Events/SliderContentProgram";
import WideImages from "@/app/Components/Events/WideImages";
import { AspaProgram } from "@/app/lib/program/academy/AspaAcademy";
import Image from "next/image";
import Link from "next/link";
import { ItemProgramPreviews } from "./components/ItemProgramPreviews";

export default function page() {
  const basicPlusProgram = AspaProgram[0];
  const eliteProgram = AspaProgram[1];
  const customeProgram = AspaProgram[2];

  return (
    <div className="container-content h-fit min-h-screen w-full overflow-x-hidden">
      <div className="h-fit w-full">
        <HeaderEventContent
          logo="/brand/ASPA-white.svg"
          title="asian surf performance academy"
          images="/assets/main/programs-background.png"
          theme="bg-gradient-to-r from-brand to-brand/0 xl:bg-brand"
          color="bg-gradient-to-r from-brand to-brand/0"
        />
        <div className="opening-gate py-8 pl-4 md:pl-16">
          <h1 className="big-simple-text w-full text-2xl font-light uppercase md:w-[400px] md:text-4xl">
            Unleash Your Potential with Our Programs!
          </h1>
        </div>
      </div>
      <PlayYoutube />
      <SliderContentProgram />
      <WideImages images={"/assets/main/run-kids-surfer.png"} />
      <div className="content-programs">
        <div className="content-moto relative flex items-center justify-between px-4 py-8 md:px-16">
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
        <div className="content-body mt-8">
          <ItemProgramPreviews
            idProgram={basicPlusProgram.id}
            title={basicPlusProgram.title}
            description={basicPlusProgram.description}
            images={basicPlusProgram.image[0].src}
            fromProgram={basicPlusProgram.benefit}
            oddBy={false}
          />
          <ItemProgramPreviews
            idProgram={eliteProgram.id}
            title={eliteProgram.title}
            description={eliteProgram.description}
            images={eliteProgram.image[0].src}
            fromProgram={eliteProgram.benefit}
            oddBy={true}
          />
          <div className="custome-program relative my-8 h-fit w-full">
            <div className="w-full">
              <Image
                src={"/assets/main/custome-program.png"}
                alt={customeProgram.title}
                width={1000}
                height={1000}
                priority
                className="h-[500px] w-full object-cover"
              />
            </div>
            <div className="information-card absolute left-1/2 top-1/2 w-full -translate-x-1/2 -translate-y-1/2 px-4 md:w-fit">
              <div className="bg-black p-4 text-white md:w-[500px]">
                <h2 className="text-3xl font-light uppercase">
                  {customeProgram.title}
                </h2>
                <p className="text-sm font-light">
                  {customeProgram.description}
                </p>
                <div className="btn-group mt-4 flex w-full flex-col gap-4 md:flex-row">
                  <Link
                    href={`/programs/${customeProgram.id}/booking?user=${randomString}`}
                    aria-label="..."
                    className="inline-block w-full bg-white px-4 py-2 text-center text-sm font-light uppercase text-black md:w-fit"
                  >
                    Contact us
                  </Link>
                  <Link
                    href={`/programs/${customeProgram.id}`}
                    aria-label="..."
                    className="inline-block w-full border border-white px-4 py-2 text-center text-sm font-light uppercase text-white md:w-fit"
                  >
                    About the program
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
