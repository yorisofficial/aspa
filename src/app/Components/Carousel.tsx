"use client";
import Image from "next/image";
import React from "react";
import { Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import { HERO } from "../lib/Hero";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

const Carousel = () => {
	const dataSlide = HERO;

	return (
		<div className="w-full h-screen">
			<Swiper
				slidesPerView={1}
				spaceBetween={20}
				loop={true}
				autoplay={{
					delay: 6000,
				}}
				modules={[Autoplay]}
				className="mySwiper"
			>
				{dataSlide.map((item, index) => (
					<SwiperSlide key={index}>
						<Image
							src={item.url}
							height={1000}
							width={1000}
							alt={item.title}
							priority={false}
							className="w-full h-full object-cover"
						/>
					</SwiperSlide>
				))}
			</Swiper>
		</div>
	);
};

export default Carousel;
