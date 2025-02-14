"use client";

import Image from "next/image";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import ButtonSlideSwiper from "./ButtonSlideSwiper";

type Props = {
  id: string;
  src: string;
};

export const SliderImageProgram = ({
  data,
}: {
  data: { id: number; src: string }[];
}) => {
  return (
    <div className="h-fit w-full">
      <Swiper
        spaceBetween={16}
        loop={true}
        slidesPerView={2.2}
        className="mySwiper relative h-fit w-full space-y-4 overflow-hidden rounded-lg"
      >
        {data?.map((item, index) => (
          <SwiperSlide key={index} className="h-full w-[400px]">
            <Image
              src={item.src}
              alt={"previews program images"}
              height={2400}
              width={1400}
              priority
              quality={100}
              className="w-full rounded-lg object-cover md:h-[400px]"
            />
          </SwiperSlide>
        ))}
        <ButtonSlideSwiper className="absolute bottom-2 left-2 z-30" />
      </Swiper>
    </div>
  );
};
