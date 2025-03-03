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
import { AllTeams } from "../lib/primary/AllTeams";

const SlideTeam = ({ className }: { className?: string }) => {
  const data = AllTeams.slice(0, 4);

  return (
    <div className={`list-coach mx-auto h-fit w-full ${className}`}>
      <Swiper
        modules={[Autoplay]}
        loop={true}
        autoplay={{ delay: 8000 }}
        breakpoints={{
          360: {
            slidesPerView: 1,
            spaceBetween: 16,
          },
          768: {
            slidesPerView: 2.1,
            spaceBetween: 20,
          },
          1024: {
            slidesPerView: 2.1,
            spaceBetween: 20,
          },
        }}
        className="mySwiper h-fit md:w-full"
      >
        {data.map((item, index) => (
          <SwiperSlide key={index} className="item-coach group w-full">
            <Link
              href={`/team/${item.slug}`}
              className="group relative inline-block h-full w-full"
            >
              <div className="absolute right-2 top-2 z-10 text-white">
                <ArrowUpRight size={24} />
              </div>
              <div className="relative h-fit w-full rounded-xl bg-cover bg-center bg-no-repeat duration-500">
                <div className="h-[180px] overflow-hidden md:h-[250px]">
                  <Image
                    src={item.profile}
                    height={500}
                    width={1200}
                    alt={item.nickname}
                    className="h-[180px] object-cover duration-300 group-hover:scale-110 md:h-[250px]"
                  />
                </div>
                <div className="py-4 text-center text-black">
                  <h1 className="text-xl font-black">{item.full_name}</h1>
                  <p>{item.job_title}</p>
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
