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

// Import Swiper styles
import "swiper/css"
import "swiper/css/effect-cards"
import "swiper/css/pagination"
import "swiper/css/navigation"
import {ArrowUpRight} from "lucide-react"

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
          <SwiperSlide key={item.id} className="item-coach group h-full w-full md:w-fit">
            <Link
              className="relative"
              href={`/team/ASPA/${item.full_name.toLowerCase().replaceAll(" ", "-")}`}
            >
              <div className="absolute top-2 z-10 text-white right-2">
                <ArrowUpRight size={32} />
              </div>
              <div className="relative">
                <Image
                  src={item.profile}
                  width={1000}
                  height={1000}
                  alt=".."
                  className="h-full group-hover:scale-110 min-h-[400px] w-full rounded-xl object-cover duration-500"
                />
                <div className="absolute bottom-4 text-white left-4">
                  <h1 className="text-xl font-black">{item.full_name}</h1>
                  <p>{item.title}</p>
                </div>
              </div>
            </Link>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  )
}

export default SlideTeam
