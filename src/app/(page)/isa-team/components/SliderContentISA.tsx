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

interface Props {
  id: string;
  sectionId: string;
  name: string;
  description: string;
  image: string;
  link: string;
}

const SliderContentISA = ({ data }: { data: Props[] }) => {
  return (
    <div className="mx-auto mt-8 h-fit w-full max-w-6xl px-4 md:px-10 xl:px-0">
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
            <SwiperSlide
              key={item.id}
              className="group relative h-full w-fit overflow-hidden rounded-xl "
            >
              <Link target="_self" href={`#${item.sectionId}`} className={""}>
                <Image
                  src={item.image}
                  alt="ISA Surf coach"
                  height={2400}
                  width={800}
                  className="h-[200px] w-full object-cover md:h-[300px]"
                />
                <div className="absolute bottom-0 left-0 flex h-full w-full items-end justify-between text-wrap p-4 text-white transition-all duration-500 group-hover:bg-gradient-to-t group-hover:from-primary group-hover:to-primary/0">
                  <h2 className="w-3/4 text-xl font-normal uppercase drop-shadow-lg transition-shadow duration-500 group-hover:drop-shadow-none">
                    {item.name}
                  </h2>
                  <ArrowCircleRight
                    size={32}
                    className="duration-500 group-hover:scale-110"
                  />
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

export default SliderContentISA;
