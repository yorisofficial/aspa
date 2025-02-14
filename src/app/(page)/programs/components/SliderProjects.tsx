"use client";

import Image from "next/image";
import React from "react";
import { Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import { ArrowCircleRight } from "@phosphor-icons/react";
import Link from "next/link";

// Import Swiper styles
import "swiper/css";
import ButtonSlideSwiper from "@/app/Components/ButtonSlideSwiper";
import { PropsProjects } from "@/app/lib/DataProjects";

const SliderProjects = ({ data }: { data: PropsProjects[] }) => {
  return (
    <div className="mx-auto mt-8 h-fit w-full px-4 md:px-16">
      <div className="content-header">
        <h2 className="max-w-[300px] text-3xl font-light uppercase xl:w-1/2">
          Take your surf knowledge to the next level
        </h2>
      </div>
      <div className="content-slider mt-6">
        <Swiper
          modules={[Autoplay]}
          spaceBetween={16}
          loop={true}
          breakpoints={{
            360: {
              slidesPerView: 1.2,
              spaceBetween: 16,
            },
            768: {
              slidesPerView: 2.2,
              spaceBetween: 20,
            },
            1024: {
              slidesPerView: 3.2,
              spaceBetween: 20,
            },
          }}
          className="mySwiper "
        >
          {data.map((item) => (
            <SwiperSlide key={item.id}>
              <Link
                target="_self"
                href={`#${item.title.toLowerCase().replaceAll(" ", "-")}`}
                className={
                  "group relative inline-block w-fit overflow-hidden md:h-[300px]"
                }
              >
                <Image
                  src={item.image}
                  alt="ISA Surf coach"
                  height={2400}
                  width={800}
                  className="h-full w-full object-cover duration-500 group-hover:scale-110 md:h-[300px]"
                />
                <div className="absolute bottom-4 left-1/2 w-full -translate-x-1/2 px-4">
                  <div className="flex w-full items-end justify-between bg-primary p-3 text-white">
                    <h2 className="w-3/4 text-xl font-normal uppercase drop-shadow-lg transition-shadow duration-500 group-hover:drop-shadow-none">
                      {item.title}
                    </h2>
                    <ArrowCircleRight
                      size={32}
                      className="duration-500 group-hover:scale-110"
                    />
                  </div>
                </div>
              </Link>
            </SwiperSlide>
          ))}
          <ButtonSlideSwiper className="mt-6" />
        </Swiper>
      </div>
    </div>
  );
};

export default SliderProjects;
