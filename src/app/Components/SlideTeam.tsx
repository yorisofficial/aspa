"use client"
import Image from "next/image"
import Link from "next/link"
import React from "react"
import {Autoplay} from "swiper/modules"
import {Swiper, SwiperSlide} from "swiper/react"
import {CoreTeam} from "../lib/primary/CoreTeam"
export const calculateAge = (birthYear: number) => {
  const age = new Date().getFullYear() - birthYear
  return age
}

const SlideTeam = () => {
  const data = CoreTeam

  return (
    <div className="list-coach w-full h-full">
      <Swiper
        modules={[Autoplay]}
        spaceBetween={32}
        loop={true}
        autoplay={{delay: 5000}}
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
        className="list-coach mySwiper w-full h-full"
      >
        {data.map((item) => (
          <SwiperSlide key={item.id} className="item-coach h-full w-full md:w-fit">
            <div className="item-coach group bored h-full min-h-[400px] w-full cursor-pointer rounded-xl duration-500">
              <Image
                src={item.profile}
                width={1000}
                height={1000}
                alt=".."
                className="h-full min-h-[400px] w-full rounded-xl object-cover duration-500"
              />

              <div className="profile-coach absolute bottom-4 left-4 text-white">
                <div className="flex flex-col items-start justify-start gap-4">
                  <div className="text-start">
                    <div className="flex items-center gap-2">
                      <h1 className="coach-name text-start text-2xl font-black ">
                        {item.full_name}
                      </h1>
                      <span className="text-base font-light">
                        | {calculateAge(item?.age)}
                        y.o
                      </span>
                    </div>
                    <span className="text-sm">{item.experience}</span>
                  </div>
                  <div className="">
                    <Link
                      href={`/team/team/${item.full_name.replaceAll(" ", "-").toLocaleLowerCase()}`}
                      className="text-sm underline underline-offset-4"
                    >
                      See profile
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  )
}

export default SlideTeam
