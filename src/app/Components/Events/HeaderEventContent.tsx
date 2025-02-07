"use client";

import Image from "next/image";
import React from "react";

type Props = {
  logo?: string;
  title: string;
  images: string;
  theme: string;
  color?: string;
};

export default function HeaderEventContent({
  logo,
  title,
  images,
  theme,
  color,
}: Props) {
  const bgTheme = theme;
  return (
    <>
      <div className="relative flex h-[500px] w-full flex-row">
        <div
          className={`${bgTheme} relative z-10 flex h-full w-1/2 flex-col items-start justify-center pl-4 md:pl-16`}
        >
          <div className="relative z-10 flex gap-2">
            <Image
              src={logo || ""}
              alt="logo brand"
              width={500}
              height={500}
              priority
              className="h-fit w-12 object-contain md:w-32"
            />
          </div>
          <h1 className="mt-4 w-full text-4xl font-light uppercase text-white md:w-[500px] xl:text-5xl">
            {title}
          </h1>
        </div>
        <div className="absolute left-0 top-0 z-0 h-[500px] w-full xl:left-auto xl:right-0 xl:w-1/2">
          <div className={`absolute z-10 h-full w-full ${color}`}></div>
          <Image
            src={images}
            alt={`surf-player ${title}`}
            width={2400}
            height={500}
            priority
            className="h-full w-full object-cover"
          />
        </div>
      </div>
    </>
  );
}
