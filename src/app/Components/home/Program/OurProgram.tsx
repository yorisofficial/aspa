"use client";
import Image from "next/image";
import React from "react";
import ContainerContent from "../../Container";
import { GromPatrol } from "@/app/lib/events/grompatrol";

const OurProgram = () => {
  return (
    <ContainerContent url="/program" className="border-buttom py-8">
      <div className="relative h-full w-full xl:max-w-5xl">
        <Image
          src={"/assets/hero-img-1.webp"}
          width={1500}
          height={1500}
          priority={false}
          alt="ASPA Logo"
          className="hidden h-[440px] w-full rounded-xl object-cover md:inline-block"
        />
        <div className="program-card inline-block space-y-4 rounded-lg bg-primary p-6 text-white xl:absolute xl:left-6 xl:top-1/2 xl:w-1/2 xl:-translate-y-1/2 xl:p-8">
          <div className="absolute bottom-0 right-0 -z-10">
            <Image
              src={"/assets/acc/title-cover-simple.svg"}
              alt="acc-line"
              width={500}
              height={500}
              className="h-[300px] w-[300px] opacity-40"
            />
          </div>
          <div className="header">
            <h1 className="text-base font-bold uppercase xl:text-xl">
              {GromPatrol.title}
            </h1>
          </div>
          <p className="w-full text-justify text-sm font-light md:text-base">
            {GromPatrol.desc}
          </p>
          {/* <div className="flex w-full flex-shrink-0 items-center gap-4">
            <ButtonBooking invert={true} data={urlBooking} />
            <Link
              href={"/program"}
              className="w-fit text-sm underline underline-offset-4"
            >
              About the program
            </Link>
          </div> */}
        </div>
      </div>
    </ContainerContent>
  );
};

export default OurProgram;
