"use client";
import React from "react";
import { Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import Image from "next/image";

// Import Swiper styles
import "swiper/css";

interface Props {
  src: string;
  alt: string;
}

const SliderProgram = ({ data }: { data: Props[] }) => {
  return (
    <div className="">
      <Swiper
        modules={[Autoplay]}
        spaceBetween={16}
        loop={true}
        className="mySwiper"
        slidesPerView={1.2}
      >
        {data?.map((item, index) => (
          <SwiperSlide key={index} className="h-full w-fit">
            <Image
              src={item.src}
              alt={item.alt}
              height={1000}
              width={1000}
              className="h-[200px] w-full rounded-xl object-cover md:h-[300px]"
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default SliderProgram;
