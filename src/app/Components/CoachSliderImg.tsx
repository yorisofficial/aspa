import Image from "next/image";
import React from "react";
import { Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-cards";
import "swiper/css/pagination";
import "swiper/css/navigation";

interface Props {
  src: string;
  title: string;
}

const CoachSliderImg = ({ data }: { data: Props[] }) => {
  return (
    <div className="list-image h-[250px] w-full md:h-[300px] xl:order-last xl:h-[400px]">
      <Swiper
        modules={[Autoplay]}
        loop={true}
        autoplay={{ delay: 8000 }}
        breakpoints={{
          360: {
            slidesPerView: 1.1,
            spaceBetween: 16,
          },
          768: {
            slidesPerView: 1.1,
            spaceBetween: 20,
          },
          1024: {
            slidesPerView: 1.1,
            spaceBetween: 20,
          },
        }}
        className="list-coach mySwiper h-full w-full"
      >
        {data.map((item, index) => (
          <SwiperSlide
            key={index}
            className="item-coach h-[400px] w-[400px] xl:h-[500px] xl:w-full"
          >
            <Image
              src={item?.src || "/assets/example-banner-coach.png"}
              height={1500}
              width={1500}
              priority={false}
              quality={100}
              alt={item.title}
              className={`h-full w-full rounded-xl object-cover duration-500`}
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default CoachSliderImg;
