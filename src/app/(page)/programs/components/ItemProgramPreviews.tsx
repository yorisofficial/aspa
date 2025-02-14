"use client";

import {
  CheckCircle,
  ClockCounterClockwise,
  XCircle,
} from "@phosphor-icons/react";
import Image from "next/image";
import Link from "next/link";
import React from "react";

type ProgramType = {
  idProgram: string;
  title: string;
  description: string;
  images: string;
  fromProgram: PropsBenefit[];
  oddBy: boolean;
};

type PropsBenefit = {
  id: number;
  title: string;
  duration: string;
  status: boolean;
  description: string;
};

export function ItemProgramPreviews({
  idProgram,
  title,
  description,
  images,
  fromProgram,
  oddBy,
}: ProgramType) {
  const randomString = Math.random().toString(36).substring(7);
  const dataProgram = fromProgram;
  return (
    <>
      <div
        id={title.replace(" ", "-").toLowerCase()}
        className={`relative flex h-fit w-full flex-col items-center justify-start border-[2px] border-dashed border-black/5 md:flex-row ${oddBy ? "" : ""}`}
      >
        <div className="h-[400px] w-full">
          <Image
            src={images}
            alt={title}
            width={1000}
            height={1000}
            priority
            className="h-[400px] w-full object-cover object-top"
          />
        </div>
        <div
          className={`h-fit md:w-1/2 ${oddBy ? "md:order-first md:pl-16" : " md:order-last md:pr-16"}`}
        >
          <div className="content-body bg-white p-4 md:p-8 md:drop-shadow-lg">
            <h2 className="text-2xl font-light uppercase md:text-4xl">
              {title}
            </h2>
            <p className="w-full text-sm font-light">{description}</p>
            <ul className="mt-4 list-inside">
              {dataProgram.map((item, index) => (
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
                href={`/programs/${idProgram}/booking?user=${randomString}`}
                aria-label="..."
                className="inline-block w-full bg-black px-4 py-2 text-center text-sm font-light uppercase text-white md:w-fit"
              >
                Contact us
              </Link>
              <Link
                href={`/programs/${idProgram}`}
                aria-label="..."
                className="inline-block w-full border border-black px-4 py-2 text-center text-sm font-light uppercase text-black md:w-fit"
              >
                About the program
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
