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

export const DataISA = [
  {
    id: "90643bc1e676",
    name: "ISA Surf Level 1 Instructor Certification",
    image: "https://isasurf.org/wp-content/uploads/2024/05/DSC08117-scaled.jpg",
    link: "#isa-surf-coach-1",
  },
  {
    id: "5e181706dff8",
    name: "ISA Surf Level 2 Instructor Certification",
    image:
      "https://isasurf.org/wp-content/uploads/2024/05/Shandy-DSC09755-2-1-scaled.jpg",
    link: "#isa-surf-coach-2",
  },
  {
    id: "1653fd1cc7e0",
    name: "ISA Judging Certification",
    image:
      "https://isasurf.org/wp-content/uploads/2024/05/ath_Judges_ath_ph_Jersson_Barboza_ph_1.jpg",
    link: "#isa-surf-judging",
  },
  {
    id: "9dbcedc83afb",
    name: "ISA surf water safety",
    image:
      "https://isasurf.org/wp-content/uploads/2021/04/ILS-ISA-Course-1024x768-1.jpg",
    link: "#isa-surf-water-safety",
  },
];

const SliderContentISA = () => {
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
          {DataISA.map((item) => (
            <SwiperSlide
              key={item.id}
              className="group relative h-full w-fit overflow-hidden rounded-xl "
            >
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
                <Link
                  target="_self"
                  href={item.link}
                  className={"flex items-center gap-2"}
                >
                  <ArrowCircleRight
                    size={32}
                    className="duration-500 group-hover:scale-110"
                  />
                </Link>
              </div>
            </SwiperSlide>
          ))}
          <ButtonSlideSwiper className="mt-6" />
        </Swiper>
      </div>
    </div>
  );
};

export default SliderContentISA;
