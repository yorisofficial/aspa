"use client";
import React, { useState } from "react";
import ContainerContent from "../../Container";
import Image from "next/image";
import Link from "next/link";
import { GromPatrol } from "@/app/lib/events/grompatrol";
import SliderProgram from "../Program/SliderProgram";
import { motion } from "framer-motion";

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

const UpcomingEvent = () => {
  const [isSorted, setSorted] = useState(false);
  const handleDescription = () => {
    setSorted(!isSorted);
  };

  return (
    <ContainerContent
      url="book-session"
      className="border-buttom relative py-8"
    >
      <div className="Upcoming-section relative grid w-full items-start justify-start rounded-xl bg-primary p-8 text-white md:grid-cols-2 md:gap-8">
        <div className="absolute left-1/2 top-1/2 z-0 flex h-full w-full -translate-x-1/2 -translate-y-1/2 items-center justify-center">
          <Image
            src={"/assets/acc/title-cover-simple.svg"}
            alt="acc-line"
            width={500}
            height={500}
            className="h-full w-full opacity-30"
          />
        </div>
        <div className="details relative z-10 flex h-full flex-col items-start justify-start gap-2 text-start xl:justify-center">
          <span className="text-sm font-light uppercase">
            our previous program
          </span>
          <h1 className="text-xl font-black text-brand xl:text-3xl">
            {GromPatrol.title}
          </h1>
          <p
            className={`w-full text-sm font-light md:text-base ${isSorted ? "" : "line-clamp-4"}`}
          >
            {GromPatrol.desc}
          </p>
          <button
            onClick={handleDescription}
            className="mt-2 underline underline-offset-4"
          >
            {isSorted ? "Read less" : "Read more"}
          </button>
          <div className="relative z-10 mt-4">
            <Link
              href={"/program"}
              aria-label="Book now"
              className="inline-block rounded-xl bg-white px-6 py-3 font-black text-primary duration-500 hover:scale-110"
            >
              Learn more the program
            </Link>
          </div>
        </div>
        <div className="hidden h-[300px] md:inline-block xl:h-[400px]">
          <SliderProgram data={GromPatrolImage} />
        </div>
      </div>
    </ContainerContent>
  );
};

export default UpcomingEvent;
