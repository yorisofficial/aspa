import React from "react";
import HeaderEventContent from "@/app/Components/Events/HeaderEventContent";
import PlayYoutube from "@/app/Components/home/VideoPreview/PlayYoutube";
import SliderContentProgram, {
  randomString,
} from "@/app/Components/Events/SliderContentProgram";
import WideImages from "@/app/Components/Events/WideImages";
import { AspaProgram } from "@/app/lib/program/academy/AspaAcademy";
import Image from "next/image";
import {
  CheckCircle,
  ClockCounterClockwise,
  XCircle,
} from "@phosphor-icons/react/dist/ssr";
import Link from "next/link";

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
          <div
            id={basicPlusProgram.title.replace(" ", "-").toLowerCase()}
            className="relative flex h-fit w-full flex-col items-center justify-start border-[2px] border-dashed border-black/5 md:flex-row"
          >
            <div className="h-[400px] w-full">
              <Image
                src={basicPlusProgram.image[0].src}
                alt={basicPlusProgram.title}
                width={1000}
                height={1000}
                priority
                className="h-[400px] w-full object-cover object-top"
              />
            </div>
            <div className="h-fit md:w-1/2 md:pr-16">
              <div className="content-body bg-white p-4 md:p-8 md:drop-shadow-lg">
                <h2 className="text-2xl font-light uppercase md:text-4xl">
                  {basicPlusProgram.title}
                </h2>
                <p className="w-full text-sm font-light">
                  {basicPlusProgram.description}
                </p>
                <ul className="mt-4 list-inside">
                  {basicPlusProgram.benefit.map((item, index) => (
                    <li
                      key={index}
                      className="mt-2 flex w-full items-start gap-2 text-sm"
                    >
                      {item.status ? (
                        <CheckCircle
                          size={24}
                          weight="light"
                          className="flex-shrink-0 text-green"
                        />
                      ) : (
                        <XCircle
                          size={24}
                          weight="light"
                          className="flex-shrink-0 text-red"
                        />
                      )}
                      <div className="flex flex-col items-start justify-start gap-2">
                        <h2 className="text-sm font-normal">{item.title}</h2>
                        <span className="flex items-center gap-2">
                          <ClockCounterClockwise size={18} /> {item.duration}
                        </span>
                        <p className="text-sm font-light">{item.description}</p>
                      </div>
                    </li>
                  ))}
                </ul>
                <div className="btn-group mt-4 flex w-full flex-col gap-4 md:flex-row">
                  <Link
                    href={`/programs/${basicPlusProgram.id}/booking?user=${randomString}`}
                    aria-label="..."
                    className="inline-block w-full bg-black px-4 py-2 text-center text-sm font-light uppercase text-white md:w-fit"
                  >
                    Contact us
                  </Link>
                  <Link
                    href={`/programs/${basicPlusProgram.id}`}
                    aria-label="..."
                    className="inline-block w-full border border-black px-4 py-2 text-center text-sm font-light uppercase text-black md:w-fit"
                  >
                    About the program
                  </Link>
                </div>
              </div>
            </div>
          </div>
          <div
            id={eliteProgram.title.replace(" ", "-").toLowerCase()}
            className="relative flex h-fit w-full flex-col items-center justify-start border-[2px] border-dashed border-black/5 md:flex-row"
          >
            <div className="h-fit md:w-1/2 md:pl-16">
              <div className="content-body bg-white p-4 md:p-8 md:drop-shadow-lg">
                <h2 className="text-2xl font-light uppercase md:text-4xl">
                  {eliteProgram.title}
                </h2>
                <p className="w-full text-sm font-light">
                  {eliteProgram.description}
                </p>
                <ul className="mt-4 list-inside">
                  {eliteProgram.benefit.map((item, index) => (
                    <li
                      key={index}
                      className="mt-2 flex w-full items-start gap-2 text-sm"
                    >
                      {item.status ? (
                        <CheckCircle
                          size={24}
                          weight="light"
                          className="flex-shrink-0 text-green"
                        />
                      ) : (
                        <XCircle
                          size={24}
                          weight="light"
                          className="flex-shrink-0 text-red"
                        />
                      )}
                      <div className="flex flex-col items-start justify-start gap-2">
                        <h2 className="text-sm font-normal">{item.title}</h2>
                        <span className="flex items-center gap-2">
                          <ClockCounterClockwise size={18} /> {item.duration}
                        </span>
                        <p className="text-sm font-light">{item.description}</p>
                      </div>
                    </li>
                  ))}
                </ul>
                <div className="btn-group mt-4 flex w-full flex-col gap-4 md:flex-row">
                  <Link
                    href={`/programs/${eliteProgram.id}/booking?user=${randomString}`}
                    aria-label="..."
                    className="inline-block w-full bg-black px-4 py-2 text-center text-sm font-light uppercase text-white md:w-fit"
                  >
                    Contact us
                  </Link>
                  <Link
                    href={`/programs/${eliteProgram.id}`}
                    aria-label="..."
                    className="inline-block w-full border border-black px-4 py-2 text-center text-sm font-light uppercase text-black md:w-fit"
                  >
                    About the program
                  </Link>
                </div>
              </div>
            </div>
            <div className="order-first h-fit w-full md:order-last">
              <Image
                src={eliteProgram.image[0].src}
                alt={eliteProgram.title}
                width={1000}
                height={1000}
                priority
                className="h-[400px] w-full object-cover"
              />
            </div>
          </div>
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
              <div className="bg-black/5 p-4 text-white backdrop-blur-lg md:w-[500px]">
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
