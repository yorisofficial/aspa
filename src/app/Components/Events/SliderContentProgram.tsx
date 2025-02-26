"use client";

import Image from "next/image";
import React from "react";

// Import Swiper styles
import "swiper/css";
import { Swiper, SwiperSlide } from "swiper/react";
import ButtonSlideSwiper from "../ButtonSlideSwiper";
import Link from "next/link";
import { ArrowCircleRight } from "@phosphor-icons/react";
import { NewAcademy } from "@/app/lib/program/academy/NewAcademy";

export const randomString = `users-${Math.random().toString(36).substring(2, 14)}`;

export default function SliderContentProgram() {
  return (
    <div className="h-fit w-full px-4 py-8">
      <Swiper
        freeMode
        loop={true}
        className="mySwiper"
        breakpoints={{
          300: {
            slidesPerView: 1.2,
            spaceBetween: 16,
          },
          700: {
            slidesPerView: 1.4,
            spaceBetween: 20,
          },
          1024: {
            slidesPerView: 3,
            spaceBetween: 20,
          },
        }}
      >
        {NewAcademy.slice(0, 3).map((item, index) => (
          <SwiperSlide key={item.id} className="group relative h-full w-fit">
            <div className="absolute bottom-0 left-0 z-10 flex h-fit w-full items-end justify-between p-2">
              <div className="flex w-full items-center justify-between bg-black p-2">
                <h2 className="text-lg font-normal uppercase text-white md:text-2xl">
                  {item.title}
                </h2>
                <Link
                  href={`/programs#${item.title.toLowerCase().replaceAll(" ", "-")}`}
                  className="group flex items-center justify-center gap-2 text-white"
                >
                  <span className="hidden text-xs font-light uppercase group-hover:inline-block">
                    Learn more
                  </span>
                  <ArrowCircleRight size={24} className="text-white" />
                </Link>
              </div>
            </div>
            <div className="h-[300px] w-full overflow-hidden md:h-[350px]">
              <Image
                src={item.image}
                alt={"."}
                height={1000}
                width={1000}
                className="h-[300px] w-full object-cover duration-300 group-hover:scale-110 md:h-[350px]"
              />
            </div>
          </SwiperSlide>
        ))}
        <ButtonSlideSwiper className="mt-6 flex md:hidden" />
      </Swiper>
    </div>
  );
}
