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
import { ArrowUpRight, CheckCircle, Headset } from "@phosphor-icons/react";
import { AspaProgram } from "./home/Hero/HeroSection2";

const SliderPackage = () => {
  const data = CoreTeam;

  return (
    <div className="list-coach h-full w-full">
      <Swiper
        modules={[Autoplay]}
        spaceBetween={16}
        loop={true}
        slidesPerView={1.2}
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
        className="list-coach mySwiper h-full w-full"
      >
        {AspaProgram.map((item, index) => (
          <SwiperSlide key={item.id} className="">
            <div
              className={`item-aspa-program relative h-fit rounded-xl p-3 xl:px-6 xl:py-8 ${item.promote ? "border-4 border-brand bg-brand text-white xl:border-8" : "border border-bordersolid  bg-white"}`}
            >
              <div className={`content flex flex-col items-start gap-6`}>
                <h1
                  className={`text-base font-bold capitalize xl:text-2xl ${item.promote ? "text-white" : "text-black"}`}
                >
                  {item.title}
                </h1>
                <div className="list-benefit flex flex-col gap-2">
                  {item.id === "32" ? (
                    <>
                      <p className="text-start">{item.promoteBook}</p>
                    </>
                  ) : (
                    <>
                      {item.benefit.map((item, index) => (
                        <div key={item.id} className="item-benefit">
                          <div className="flex flex-shrink-0 items-start justify-start gap-2 text-start xl:items-center xl:gap-4">
                            <CheckCircle
                              size={24}
                              className="h-4 w-4 xl:h-6 xl:w-6"
                            />{" "}
                            <h1 className="text-xs xl:text-base">
                              {item.title}
                            </h1>
                          </div>
                        </div>
                      ))}
                    </>
                  )}
                </div>
                <div className="btn-cta flex flex-col items-center gap-2 xl:flex-row xl:gap-4">
                  {item.id === "32" ? (
                    <div className="">
                      <Link
                        href={`/program/${item.id}/booking`}
                        aria-label="booking the program"
                      >
                        <button
                          className={`flex items-center gap-3 rounded-lg px-4 py-2 text-xs font-semibold xl:px-6 xl:py-3 xl:text-base ${item.promote ? "bg-white text-brand" : "bg-black text-white"}`}
                        >
                          <Headset size={24} />
                          Contact us
                        </button>
                      </Link>
                    </div>
                  ) : (
                    <>
                      <Link
                        href={`/program/${item.id}/booking`}
                        aria-label="booking the program"
                        className={`rounded-lg px-4 py-2 text-xs font-semibold xl:px-6 xl:py-3 xl:text-base ${item.promote ? "bg-white text-brand" : "bg-black text-white"}`}
                      >
                        Book now
                      </Link>
                      <Link
                        href={`/program/${item.id}`}
                        aria-label="learn more about program"
                        className="rounded text-[10px] underline underline-offset-4 xl:text-sm"
                      >
                        About the program
                      </Link>
                    </>
                  )}
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default SliderPackage;
