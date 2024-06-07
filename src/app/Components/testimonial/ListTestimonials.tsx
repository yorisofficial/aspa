"use client"
import React from "react"
import ItemTestimonial from "./ItemTestimonial"
import {Swiper, SwiperSlide} from "swiper/react"
import {Autoplay, Pagination} from "swiper/modules"

interface Props {
  id: number
  img_profile: string
  full_name: string
  quotes: string
}

// Import Swiper styles
import "swiper/css"
import "swiper/css/pagination"

const ListTestimonials = ({data}: {data: Props[]}) => {
  const dataTestimonial = data
  const paginationMode = {
    clickable: true,
  }

  return (
    <div className="">
      <Swiper
        modules={[Autoplay, Pagination]}
        spaceBetween={32}
        loop={true}
        pagination={paginationMode}
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
        className="mySwiper py-8"
      >
        {dataTestimonial.map((item) => (
          <SwiperSlide key={item.id} className="pb-12">
            <ItemTestimonial data={item} />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  )
}

export default ListTestimonials
