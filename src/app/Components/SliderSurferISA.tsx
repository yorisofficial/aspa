"use client";
import React from "react";
import { Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import Image from "next/image";

// Import Swiper styles
import "swiper/css";

interface Props {
  id: number;
  full_name: string;
  nickname: string;
  age: string;
  region: string;
  profile_image: string;
}

const SliderSurferISA = ({ timer, data }: { timer: number; data: Props[] }) => {
  return (
    <div className="w-full">
      <Swiper
        modules={[Autoplay]}
        spaceBetween={16}
        loop={true}
        autoplay={{ delay: timer }}
        grabCursor={true}
        breakpoints={{
          640: {
            slidesPerView: 1,
          },
          768: {
            slidesPerView: 2,
          },
          1024: {
            slidesPerView: 3,
          },
        }}
        className="list-coach mySwiper h-full p-8"
      >
        {data.map((item, index) => (
          <SwiperSlide key={item.id} className="py-8">
            <div className="profile-star flex h-full items-start justify-start gap-4 rounded-xl border border-bordersolid bg-white p-4 drop-shadow-xl">
              <Image
                src={item.profile_image}
                alt={`profile-picture-${item.full_name}`}
                height={1400}
                width={400}
                className="h-[100px] w-[100px] rounded-full"
              />
              <div className="flex flex-col gap-2">
                <h1 className="text-base font-black capitalize">
                  {item.full_name}
                </h1>
                <span className="text-base font-normal">{item.age} Y.o</span>
                <span className="text-base font-light capitalize">
                  {item.region}
                </span>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default SliderSurferISA;
