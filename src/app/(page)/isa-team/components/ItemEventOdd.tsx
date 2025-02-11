"use client";

import { ArrowCircleRight } from "@phosphor-icons/react";
import Image from "next/image";
import Link from "next/link";
import React from "react";

type Props = {
  title: string;
  description: string;
  link: string;
  image: string;
  alt: string;
  oddBy: boolean;
};

export function ItemEventOdd({
  title,
  description,
  link,
  image,
  alt,
  oddBy,
}: Props) {
  return (
    <div>
      <div
        id={title.replaceAll(" ", "-").toLowerCase()}
        className={`isa-surf-coach relative mt-8 w-full md:flex md:items-center ${oddBy ? "md:flex-row-reverse" : "md:flex-row"}`}
      >
        <Image
          src={image}
          alt={`Images ${alt}`}
          width={2400}
          height={800}
          priority={false}
          quality={100}
          className={`h-[250px] w-full object-cover md:h-[400px] md:w-3/4 ${oddBy ? "order-last" : "order-first"}`}
        />
        <div
          className={`absolute-content p-4 drop-shadow-lg md:absolute md:top-1/2 md:z-10 md:w-[500px] md:-translate-y-1/2 md:bg-white md:p-6 ${oddBy ? "order-first md:left-16" : "order-last md:right-16"}`}
        >
          <h2 className="text-3xl font-light uppercase">{title}</h2>
          <p className="mt-2 text-start text-base font-light">{description}</p>
          <Link
            target="_blank"
            href={link}
            className="group mt-4 flex w-full items-center justify-center gap-2 rounded-lg bg-primary px-4 py-2 uppercase text-white"
          >
            more information{" "}
            <ArrowCircleRight
              size={20}
              weight="light"
              className="duration-300 group-hover:translate-x-2"
            />
          </Link>
        </div>
      </div>
    </div>
  );
}
