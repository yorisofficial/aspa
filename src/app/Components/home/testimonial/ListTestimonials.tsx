"use client";
import React from "react";
import ItemTestimonial from "./ItemTestimonial";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";

interface Props {
  id: number;
  full_name: string;
  quotes: string;
  gp_user: string;
  img_profile: string;
}

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import ButtonSlideSwiper from "../../ButtonSlideSwiper";

const ListTestimonials = ({ data }: { data: Props[] }) => {
  const dataTestimonial = data;

  return (
    <div className="">
      <Swiper
        modules={[Autoplay]}
        spaceBetween={32}
        loop={true}
        autoplay={{ delay: 5000 }}
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
        <ButtonSlideSwiper />
      </Swiper>
    </div>
  );
};

export default ListTestimonials;
