"use client";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import { CoreTeam } from "../lib/primary/CoreTeam";
import { motion } from "framer-motion";

export const calculateAge = (birthYear: number) => {
  const age = new Date().getFullYear() - birthYear;

  return age;
};

import {
  ArrowUpRight,
  CheckCircle,
  Headset,
  XCircle,
} from "@phosphor-icons/react";
import { AspaProgram } from "./home/Hero/HeroSection2";

// Import Swiper styles
import "swiper/css";
import ButtonSlideSwiper from "./ButtonSlideSwiper";

const SliderPackage = () => {
  return (
    <div className="list-coach h-full w-full">
      <Swiper
        modules={[Autoplay]}
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
        className="list-coach mySwiper h-full w-full"
      >
        {AspaProgram.map((item, index) => (
          <SwiperSlide key={item.id} className="w-fit py-8">
            <div
              className={`item-aspa-program h-[300px] w-full rounded-xl p-4 md:p-6 xl:h-[400px] ${item.promote ? "border-2 border-brand  bg-primary text-white" : "border-2 border-bordersolid  bg-white text-black"}`}
            >
              <div
                className={`content flex h-full flex-col items-start justify-between gap-6`}
              >
                <div className="content w-full space-y-6">
                  <div className="w-full text-start">
                    <motion.h1
                      initial={{ x: "40%" }}
                      viewport={{ once: true }}
                      whileInView={{ x: 0 }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                      className={`text-base font-bold uppercase xl:text-2xl`}
                    >
                      {item.title.replaceAll("program", "")}
                    </motion.h1>
                  </div>
                  <div className="list-benefit flex flex-col items-start justify-between gap-2">
                    {item.id === "32" ? (
                      <div className="h-full">
                        <p className="text-start">{item.promoteBook}</p>
                      </div>
                    ) : (
                      <div className="flex flex-col gap-3">
                        {item.benefit.map((item, index) => (
                          <motion.div
                            initial={{ x: "30%" }}
                            viewport={{ once: true }}
                            whileInView={{ x: 0 }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            key={item.id}
                            className="item-benefit "
                          >
                            <div className="flex flex-shrink-0 items-start justify-start gap-2 text-start xl:items-start xl:gap-4">
                              {item.status ? (
                                <CheckCircle
                                  size={24}
                                  className="h-8 w-8 flex-shrink-0 text-green md:h-6 md:w-6"
                                />
                              ) : (
                                <XCircle
                                  size={24}
                                  className="h-8 w-8 flex-shrink-0 text-red md:h-6 md:w-6"
                                />
                              )}
                              <h1 className="text-sm xl:text-base">
                                {item.title}
                              </h1>
                            </div>
                          </motion.div>
                        ))}
                      </div>
                    )}
                  </div>
                </div>
                <motion.div
                  initial={{ x: "50%" }}
                  viewport={{ once: true }}
                  whileInView={{ x: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="btn-cta flex flex-row items-center gap-4"
                >
                  {item.id === "32" ? (
                    <div className="">
                      <Link
                        href={`/program/${item.id}/booking`}
                        aria-label="booking the program"
                      >
                        <motion.button
                          initial={{ scale: 1 }}
                          whileTap={{ scale: 0.9 }}
                          transition={{
                            type: "spring",
                            stiffness: 400,
                            damping: 10,
                          }}
                          exit={{ scale: 1 }}
                          className={`flex items-center gap-3 rounded-lg px-4 py-2 text-xs font-semibold xl:px-6 xl:py-3 xl:text-base ${item.promote ? "bg-white text-brand" : "bg-black text-white"}`}
                        >
                          <Headset size={24} />
                          Contact us
                        </motion.button>
                      </Link>
                    </div>
                  ) : (
                    <div className="flex w-full items-center gap-4 md:gap-5">
                      <Link
                        href={`/program/${item.id}/booking`}
                        aria-label="booking the program"
                        className={`rounded-lg px-6 py-3 text-xs font-semibold xl:text-sm ${item.promote ? "bg-white text-black" : "bg-black text-white"}`}
                      >
                        <motion.button
                          initial={{ scale: 1 }}
                          whileTap={{ scale: 0.9 }}
                          transition={{
                            type: "spring",
                            stiffness: 400,
                            damping: 10,
                          }}
                          exit={{ scale: 1 }}
                        >
                          Book now
                        </motion.button>
                      </Link>
                      <Link
                        href={`/program/${item.id}`}
                        aria-label="learn more about program"
                        className="rounded text-[10px] xl:text-sm"
                      >
                        <motion.button
                          initial={{ scale: 1 }}
                          whileTap={{ scale: 0.9 }}
                          transition={{
                            type: "spring",
                            stiffness: 400,
                            damping: 10,
                          }}
                          exit={{ scale: 1 }}
                          className="underline underline-offset-4"
                        >
                          About the program
                        </motion.button>
                      </Link>
                    </div>
                  )}
                </motion.div>
              </div>
            </div>
          </SwiperSlide>
        ))}
        <ButtonSlideSwiper />
      </Swiper>
    </div>
  );
};

export default SliderPackage;
