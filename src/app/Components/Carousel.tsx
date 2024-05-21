"use client";
//data hero
import { HERO } from "../lib/Hero";

// import required modules
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import required modules
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import Image from "next/image";

const CarouselPage = () => {
	const data = HERO;
	return (
		<div className="w-full h-screen border bg-red-50">
			<Swiper
				modules={[Autoplay]}
				centeredSlides={true}
				autoplay={{
					delay: 4500,
					disableOnInteraction: false,
				}}
				className="mySwiper"
			>
				{data.map((item) => (
					<SwiperSlide key={item.id} className="">
						<Image
							src={item.url}
							height={2000}
							width={2000}
							alt={item.title}
							priority={true}
							className="object-cover h-screen w-96"
						/>
					</SwiperSlide>
				))}
			</Swiper>
		</div>
	);
};

export default CarouselPage;
