"use client";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import { CoreTeam } from "../lib/primary/CoreTeam";

export const calculateAge = (birthYear: number) => {
  const age = new Date().getFullYear() - birthYear;

  return age;
};

// Import Swiper styles
import "swiper/css";
import { ArrowUpRight } from "@phosphor-icons/react";

const SlideTeam = () => {
  const data = CoreTeam;

  return (
    <div className="list-coach mx-auto w-full max-w-3xl">
      <Swiper
        modules={[Autoplay]}
        loop={true}
        autoplay={{ delay: 8000 }}
        breakpoints={{
          360: {
            slidesPerView: 1.1,
            spaceBetween: 20,
          },
          768: {
            slidesPerView: 2.1,
            spaceBetween: 20,
          },
          1024: {
            slidesPerView: 3.1,
            spaceBetween: 20,
          },
        }}
        className="list-coach mySwiper w-full"
      >
        {data.map((item, index) => (
          <SwiperSlide key={index} className="item-coach group w-full md:w-fit">
            <Link
              className="relative"
              href={`/team/ASPA/${item.full_name.toLowerCase().replaceAll(" ", "-")}`}
            >
              <div className="absolute right-2 top-2 z-10 text-white">
                <ArrowUpRight size={24} />
              </div>
              <div className="relative min-h-[400px] w-full rounded-xl bg-cover bg-center bg-no-repeat duration-500">
                <div className="">
                  <Image
                    src={item.profile}
                    height={500}
                    width={1200}
                    alt={item.nickname}
                    className="h-[200px] rounded-lg object-cover"
                  />
                </div>
                <div className="py-4 text-center text-black">
                  <h1 className="text-xl font-black">{item.full_name}</h1>
                  <p>{item.title}</p>
                </div>
              </div>
            </Link>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default SlideTeam;
