"use client";
import Image from "next/image";
import React from "react";
import ContainerContent from "../../Container";
import { GromPatrol } from "@/app/lib/events/grompatrol";

const OurProgram = () => {
  return (
    <ContainerContent url="/program" className="border-buttom py-8">
      <div className="relative h-full w-full space-y-6 xl:max-w-5xl">
        <Image
          src={"/assets/hero-img-1.webp"}
          width={1000}
          height={500}
          priority={false}
          quality={75}
          alt="ASPA Logo"
          className="h-[250px] w-full rounded-xl object-cover md:inline-block md:h-[440px]"
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
            <h1 className="text-lg font-bold uppercase xl:text-xl">
              {GromPatrol.title}
            </h1>
          </div>
          <p className="w-full text-justify text-sm font-light md:text-base">
            {GromPatrol.desc}
          </p>
        </div>
      </div>
    </ContainerContent>
  );
};

export default OurProgram;
