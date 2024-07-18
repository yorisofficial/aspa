"use client";
import Image from "next/image";
import React from "react";
import { Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";

interface Props {
  src: string;
  alt: string;
}

const SliderProgram = ({ data }: { data: Props[] }) => {
  return (
    <div className="list-image h-[250px] md:h-[300px] xl:h-[400px]">
      <Swiper
        modules={[Autoplay]}
        spaceBetween={32}
        loop={true}
        autoplay={{ delay: 4000 }}
        grabCursor={true}
        slidesPerView={1}
        className="list-coach mySwiper h-full"
      >
        {data.map((item, index) => (
          <SwiperSlide key={index} className="item-coach h-full w-full">
            <Image
              src={item.src}
              height={1000}
              width={1000}
              priority={false}
              quality={100}
              alt="ASPA Image"
              className={`h-full w-full rounded-xl  object-cover object-top duration-500 md:object-center`}
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default SliderProgram;
