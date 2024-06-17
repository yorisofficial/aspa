"use client"
import Image from "next/image"
import React from "react"
import {Autoplay} from "swiper/modules"
import {Swiper, SwiperSlide} from "swiper/react"

// Import Swiper styles
import "swiper/css"
import "swiper/css/effect-cards"
import "swiper/css/pagination"
import "swiper/css/navigation"

interface Props {
  src: string
  alt: string
}

const SliderProgram = ({data}: {data: Props[]}) => {
  return (
    <div className="list-image h-full">
      <Swiper
        modules={[Autoplay]}
        spaceBetween={32}
        loop={true}
        autoplay={{delay: 4000}}
        grabCursor={true}
        slidesPerView={"auto"}
        className="list-coach mySwiper h-full"
      >
        {data.map((item, index) => (
          <SwiperSlide key={index} className="item-coach w-full h-full">
            <Image
              src={item.src}
              height={1000}
              width={1000}
              priority={false}
              quality={100}
              alt="ASPA Image"
              className={`w-full h-full rounded-xl object-cover duration-500`}
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  )
}

export default SliderProgram
