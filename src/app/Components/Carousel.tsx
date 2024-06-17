"use client"
import Image from "next/image"
import React from "react"
import {Autoplay} from "swiper/modules"
import {Swiper, SwiperSlide} from "swiper/react"
import {HERO} from "../lib/Hero"

// Import Swiper styles
import "swiper/css"

const Carousel = ({className}: {className: string}) => {
  const dataSlide = HERO

  return (
    <div className={`h-screen w-full ${className}`}>
      <Swiper
        slidesPerView={1}
        spaceBetween={0}
        loop={true}
        autoplay={{
          delay: 10000,
        }}
        modules={[Autoplay]}
        className="mySwiper"
      >
        {dataSlide.map((item, index) => (
          <SwiperSlide key={index} className="h-full">
            <Image
              src={item.url}
              height={500}
              width={500}
              quality={100}
              alt={item.title}
              priority={false}
              className="h-screen w-full object-cover"
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  )
}

export default Carousel
