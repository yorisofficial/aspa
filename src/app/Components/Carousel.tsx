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
				spaceBetween={30}
				loop={true}
				autoplay={{
					delay: 2500,
				}}
				modules={[Autoplay]}
				className="mySwiper"
			>
				{dataSlide.map((item, index) => (
					<SwiperSlide key={index}>
						<Image
							src={item.url}
							height={1400}
							width={1400}
							alt={item.title}
							className="w-full h-full"
						/>
					</SwiperSlide>
				))}
			</Swiper>
		</div>
	);
};

export default Carousel;
