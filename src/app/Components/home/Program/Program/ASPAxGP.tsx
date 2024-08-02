import React from "react";
import OurService from "@/app/Components/home/Service/OurService";
import SliderProgram from "@/app/Components/home/Program/SliderProgram";
import { GromPatrol } from "@/app/lib/events/grompatrol";
import SliderStar from "@/app/Components/SliderStar";
import { DataStar, DataStar2 } from "@/app/lib/DataStar";
import Link from "next/link";

//shadcn ui
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { CaretDown } from "@phosphor-icons/react/dist/ssr";

export const SliderImg = [
  {
    src: "/assets/program/grompatrol/img-1.webp",
    alt: "image-asset-program",
  },
  {
    src: "/assets/program/grompatrol/img-2.webp",
    alt: "image-asset-program",
  },
  {
    src: "/assets/program/grompatrol/img-3.webp",
    alt: "image-asset-program",
  },
  {
    src: "/assets/program/grompatrol/img-4.webp",
    alt: "image-asset-program",
  },
];
const ASPAxGP = () => {
  return (
    <>
      <div className="content-section border-buttom grid grid-cols-1 gap-8 py-8 xl:grid-cols-2">
        <SliderProgram data={SliderImg} />
        <div className="details flex h-full w-full flex-col gap-8 xl:order-first">
          <div className="content-body space-y-4">
            <div className="header">
              <span className="text-base uppercase">Program</span>
              <h1 className="text-3xl font-black text-brand">
                {GromPatrol.title}
              </h1>
            </div>
            <p className="w-full text-sm font-light md:w-3/4 md:text-base xl:w-full">
              {GromPatrol.desc}
            </p>
            <div className="w-full">
              <h1 className="text-xl font-bold">Download report documents</h1>
              <div className="mt-4">
                <DropdownMenu>
                  <DropdownMenuTrigger className="flex items-center gap-3 rounded border border-black px-4 py-2">
                    Select batch <CaretDown size={24} />
                  </DropdownMenuTrigger>
                  <DropdownMenuContent className="origin-center translate-x-4 transition-all xl:translate-x-0">
                    <DropdownMenuLabel>Download file bellow</DropdownMenuLabel>
                    <DropdownMenuSeparator />
                    <DropdownMenuItem>
                      <Link
                        target="_blank"
                        href="/public/documents/ASPA RISING STAR REPORT GP #2.pdf"
                        download="ASPA RISING STAR REPORT GP #2.pdf"
                        className="underline underline-offset-4 transition-all duration-300 ease-in-out hover:text-brand"
                      >
                        REPORT ASPA RISING STAR STOP #2
                      </Link>
                    </DropdownMenuItem>
                    <DropdownMenuItem>
                      <Link
                        target="_blank"
                        href="/documents/ASPA RISING STAR REPORT GP #3.pdf"
                        download="ASPA RISING STAR REPORT GP #3.pdf"
                        className="underline underline-offset-4 transition-all duration-300 ease-in-out hover:text-brand"
                      >
                        REPORT ASPA RISING STAR STOP #3
                      </Link>
                    </DropdownMenuItem>
                  </DropdownMenuContent>
                </DropdownMenu>
              </div>
            </div>
          </div>
        </div>
      </div>
      <OurService title="Our Services" />
      <div className="star-section border-buttom flex min-h-[60vh] w-full flex-col gap-6 py-8 md:gap-8">
        <div className="header-section space-y-3">
          <h1 className="text-2xl font-bold uppercase text-brand">
            rising star program
          </h1>
          <p className="w-full xl:w-1/2">
            We are excited to introduce the Rising Star program, part of the
            ASPA initiative, where we have selected 8 talented young surfers for
            intensive training. This comprehensive program focuses on three key
            areas: physical training to build strength and endurance, surf
            coaching to enhance technical skills, and surf strategy to improve
            competitive tactics. Through this holistic approach, we aim to
            develop the next generation of surfing champions.
          </p>
        </div>
        <div className="list-rising-star flex flex-col gap-6 md:gap-8">
          <SliderStar title="aspa rising star program #1" data={DataStar} />
          <SliderStar title="aspa rising star program #2" data={DataStar2} />
        </div>
      </div>
    </>
  );
};

export default ASPAxGP;
