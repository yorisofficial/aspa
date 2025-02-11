"use client";
import React, { useState } from "react";
import ContainerContent from "../../Container";
import Image from "next/image";
import Link from "next/link";
import { GromPatrol } from "@/app/lib/events/grompatrol";
import SliderProgram from "../Program/SliderProgram";

export const GromPatrolImage = [
  {
    src: "/assets/academy/aspa-academy-1.webp",
    alt: "image-asset-program",
  },
  {
    src: "/assets/academy/aspa-academy-2.webp",
    alt: "image-asset-program",
  },
  {
    src: "/assets/academy/aspa-academy-3.webp",
    alt: "image-asset-program",
  },
];

const RisingStarProgram = () => {
  const [isSorted, setSorted] = useState(false);
  const handleDescription = () => {
    setSorted(!isSorted);
  };

  return (
    <ContainerContent
      url="book-session"
      className="border-buttom relative h-fit py-8"
    >
      <div className="hightlight-program-section relative grid h-fit w-full grid-cols-1 gap-4 rounded-xl bg-black p-8 text-white md:grid-cols-2 md:gap-5 xl:gap-8">
        <div className="absolute left-1/2 top-1/2 z-0 flex h-full w-full -translate-x-1/2 -translate-y-1/2 items-center justify-center">
          <Image
            src={"/assets/acc/title-cover-simple.svg"}
            alt="acc-line"
            width={500}
            height={500}
            className="h-full w-full opacity-30"
          />
        </div>
        <SliderProgram data={GromPatrolImage} />
        <div className="details relative z-20 flex h-full flex-col items-start justify-center md:order-first">
          <div className="content">
            <span className="text-sm font-light uppercase">
              our previous program
            </span>
            <h1 className="text-heading text-start !text-3xl">
              {GromPatrol.title}
            </h1>
            <p
              className={`mt-6 w-full origin-top text-sm font-light md:text-base ${isSorted ? "" : "line-clamp-3"}`}
            >
              ASPA has launched the inaugural program for Tipi Jabrik&apos;s
              Grom Patrol2024. The ASPA Rising Star Camp will provide a training
              camp before andduring the Grom Patrol competition. This program
              aims to promote, support,and mentor the best young surfers.
            </p>
            <button
              onClick={handleDescription}
              className="mt-4 underline underline-offset-4"
            >
              {isSorted ? "Read less" : "Read more"}
            </button>
          </div>
          <div className="relative z-10 mt-4">
            <Link
              href={"/program/rising-star"}
              aria-label="Book now"
              className="inline-block rounded-xl bg-white px-6 py-3 font-black text-primary duration-500 hover:scale-110"
            >
              About the program
            </Link>
          </div>
        </div>
      </div>
    </ContainerContent>
  );
};

export default RisingStarProgram;
