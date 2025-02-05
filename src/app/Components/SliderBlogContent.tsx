"use client";

import React from "react";
import { Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import Moment from "react-moment";

// Import Swiper styles
import "swiper/css";
import Image from "next/image";
import Link from "next/link";

export interface PropsBlog {
  id: number;
  url: string;
  slug: string;
  title: {
    rendered: string;
  };
  jetpack_featured_media_url: string;
  date: string;
}

const SliderBlogContent = ({ data }: { data: PropsBlog[] }) => {
  return (
    <div className="slider-content h-full w-full overflow-hidden">
      <Swiper
        modules={[Autoplay]}
        className="mySwiper"
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
            slidesPerView: 1.4,
            spaceBetween: 20,
          },
        }}
      >
        {data?.map((item, index) => (
          <SwiperSlide key={index} className="group h-full w-fit">
            <Link
              href={`/blog/${item.id}/${item.slug}`}
              className="block h-full w-full"
            >
              <div className="h-[200px] w-full overflow-hidden md:h-[350px]">
                <Image
                  src={item.jetpack_featured_media_url}
                  alt={item.title.rendered}
                  height={1400}
                  width={1000}
                  className="max-w-1/2 h-[200px] object-cover duration-300 ease-linear group-hover:scale-110 md:h-[350px]"
                />
              </div>
              <div className="content-info mt-4 flex h-full flex-col items-start justify-between gap-2">
                <span>
                  <Moment format="YYYY-MM-DD">{item.date}</Moment>
                </span>
                <span className="line-clamp-4 text-base font-light uppercase">
                  {item.title.rendered}
                </span>
              </div>
            </Link>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default SliderBlogContent;
