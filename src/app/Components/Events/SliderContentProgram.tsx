"use client";

import Image from "next/image";
import React from "react";
import { AspaProgram } from "@/app/lib/program/academy/AspaAcademy";

// Import Swiper styles
import "swiper/css";
import { Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import ButtonSlideSwiper from "../ButtonSlideSwiper";
import Link from "next/link";
import { XCircle, CheckCircle } from "@phosphor-icons/react";

export const randomString = `users-${Math.random().toString(36).substring(2, 14)}`;

export default function SliderContentProgram() {
  return (
    <div className="h-fit w-full py-8 pl-4 md:pl-16">
      <Swiper
        freeMode
        loop={true}
        className="mySwiper"
        breakpoints={{
          360: {
            slidesPerView: 1.4,
            spaceBetween: 16,
          },
          768: {
            slidesPerView: 2.4,
            spaceBetween: 20,
          },
        }}
      >
        {AspaProgram.slice(0, 3).map((item, index) => (
          <SwiperSlide key={item.id} className="group h-full w-fit">
            <div className="h-[200px] w-full overflow-hidden md:h-[300px]">
              <Image
                src={item.image[0].src}
                alt={"."}
                height={1000}
                width={1000}
                className="h-[200px] w-full object-cover duration-300 group-hover:scale-110 md:h-[300px]"
              />
            </div>
            <div className="mt-2 flex flex-col">
              <div className="header-program flex items-center justify-between">
                <h1 className="title-program text-2xl uppercase">
                  {item.title}
                </h1>
              </div>
              <ul className="mt-4 list-inside">
                {item.benefit.map((item, index) => (
                  <li
                    key={index}
                    className="mt-2 flex w-full items-start gap-2 text-sm md:items-center md:gap-4"
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
                    {item.title}
                  </li>
                ))}
              </ul>
              <div className="btn-group mt-4 flex w-full flex-col gap-4 md:flex-row">
                <Link
                  href={`/programs/${item.id}/booking?user=${randomString}`}
                  aria-label="..."
                  className="inline-block w-full bg-black px-4 py-2 text-center text-sm font-light uppercase text-white md:w-fit"
                >
                  Contact us
                </Link>
                <Link
                  href={`#${item.title.replace(" ", "-").toLowerCase()}`}
                  aria-label="..."
                  className="inline-block w-full border border-black px-4 py-2 text-center text-sm font-light uppercase text-black md:w-fit"
                >
                  About the program
                </Link>
              </div>
            </div>
          </SwiperSlide>
        ))}
        <ButtonSlideSwiper className="mt-6" />
      </Swiper>
    </div>
  );
}
