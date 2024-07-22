"use client";
import Image from "next/image";
import React from "react";
import { Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import ButtonSlideSwiper from "./ButtonSlideSwiper";

interface Props {
  id: number;
  full_name: string;
  img_profile: string;
  country: string;
  born: number;
  instagram_profile: string;
  achievements?: { title: string }[];
  sponsors: { title: string }[];
}

const CountAge = (born: number) => {
  return new Date().getFullYear() - born;
};

const SliderStar = ({ data, title }: { data: Props[]; title: string }) => {
  return (
    <div className="">
      <div className="pb-4">
        <h1 className="text-base font-bold uppercase">{title}</h1>
      </div>
      <Swiper
        modules={[Autoplay]}
        spaceBetween={32}
        loop={true}
        autoplay={{ delay: 8000 }}
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
        className="list-coach mySwiper h-full"
      >
        {data.map((item) => (
          <SwiperSlide
            key={item.id}
            className="item-coach group mb-8 h-full w-full space-y-5 rounded-xl border border-black/10 bg-white p-4 drop-shadow-xl md:w-fit"
          >
            <div className="profile-star flex h-full items-start justify-start gap-4">
              <Image
                src={item.img_profile}
                alt={`prifile-picture ${item.full_name}`}
                height={400}
                width={400}
                className="h-[100px] w-[100px] rounded-full"
              />
              <div className="flex flex-col gap-2">
                <h1 className="text-base font-black">{item.full_name}</h1>
                <span className="text-base font-normal">
                  {CountAge(item.born)} Y.o
                </span>
                <span className="text-base font-light">{item.country}</span>
              </div>
            </div>
            <div className="achievement-card  h-full">
              <h1 className="font-bold">Achievement</h1>
              <ul className="list-inside list-disc">
                {item.achievements?.map((item, index) => (
                  <li key={index} className="w-full truncate">
                    {item.title}
                  </li>
                ))}
              </ul>
            </div>
            <div className="sponsor-card  space-y-3">
              <h1 className="font-bold">Sponsors</h1>
              <div className="flex flex-wrap gap-2">
                {item.sponsors.map((item, index) => (
                  <div
                    key={index}
                    className="min-w-[60px] rounded-full bg-black px-2 py-1 text-center text-white"
                  >
                    <small>{item.title}</small>
                  </div>
                ))}
              </div>
            </div>
          </SwiperSlide>
        ))}
        <ButtonSlideSwiper />
      </Swiper>
    </div>
  );
};

export default SliderStar;
