"use client";
import Image from "next/image";
import React from "react";
import { Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-cards";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import required modules
import { EffectCards } from "swiper/modules";

const SliderProgram = ({ data }: { data: { src: string; alt: string }[] }) => {
  return (
    <div className="list-image h-[200px] md:h-[300px] xl:order-last xl:h-[400px] ">
      <Swiper
        modules={[Autoplay, EffectCards]}
        spaceBetween={32}
        loop={true}
        autoplay={{ delay: 2500 }}
        grabCursor={true}
        effect={"cards"}
        slidesPerView={"auto"}
        className="list-coach mySwiper h-full"
      >
        {data.map((item, index) => (
          <SwiperSlide key={index} className="item-coach h-[400px] w-[400px]">
            <Image
              src={item.src}
              height={1000}
              width={1000}
              priority={false}
              alt="ASPA Image"
              className={`h-[400px] w-[400px] rounded-xl object-cover grayscale duration-500 hover:grayscale-0`}
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default SliderProgram;
