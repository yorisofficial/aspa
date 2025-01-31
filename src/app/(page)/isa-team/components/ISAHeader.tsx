"use client";

import Image from "next/image";
import React from "react";

const ISAHeader = () => {
  return (
    <>
      <div className="relative flex h-[400px] w-full flex-row">
        <div className="relative z-10 flex h-full flex-col items-start justify-center bg-gradient-to-r from-dodgerblue to-dodgerblue/0 p-4 xl:w-1/2 xl:bg-dodgerblue xl:pl-[144px]">
          <div className="relative z-10 flex gap-2">
            <Image
              src={"/brand/ASPA-white.svg"}
              alt="logo brand"
              width={500}
              height={500}
              priority
              className="h-fit w-12 object-contain"
            />
            <Image
              src={"/brand/ISA.png"}
              alt="logo brand"
              width={500}
              height={500}
              priority
              className="h-fit w-12 object-contain"
            />
          </div>
          <h1 className="mt-4 w-[400px] text-4xl font-light uppercase text-white xl:text-5xl">
            ASPA Surfing Development Courses
          </h1>
        </div>
        <div className="absolute left-0 top-0 z-0 h-[400px] w-full xl:left-auto xl:right-0 xl:w-1/2">
          <div className="absolute z-10 h-full  w-full bg-gradient-to-r from-dodgerblue to-dodgerblue/0"></div>
          <Image
            src={"/assets/surf-player.png"}
            alt="surf-player"
            width={2400}
            height={500}
            priority
            className="h-full w-full object-cover"
          />
        </div>
      </div>
    </>
  );
};

export default ISAHeader;
