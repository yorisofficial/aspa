"use client";
import React, { useState } from "react";
import ContainerContent from "../../Container";
import Image from "next/image";
import Link from "next/link";
import SliderProgram from "../Program/SliderProgram";
import { PropsContent, PropsImages } from "../Program/Program/isa-pro-junior";
import SortingParagraph from "../../SortingParagraph";

const HighLightProgram = ({
  content,
  images,
}: {
  content: PropsContent; // content : where you can put data title, path, and description to this component
  images: PropsImages[]; // images: where you have manage slider image with swiperjs
}) => {
  return (
    <>
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
          <SliderProgram data={images} />
          <div className="details relative z-20 flex h-full flex-col items-start justify-center md:order-first">
            <div className="content">
              <span className="text-sm font-light uppercase">
                our previous program
              </span>
              <h1 className="text-start text-2xl font-light md:text-3xl">
                {content.title}
              </h1>
              <SortingParagraph data={content.description} />
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
    </>
  );
};

export default HighLightProgram;
