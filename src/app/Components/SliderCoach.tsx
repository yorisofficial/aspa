"use client";
import { MagnifyingGlassPlus } from "@phosphor-icons/react";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import { SurfTeam } from "../lib/data";

const SliderCoach = () => {
	const data = SurfTeam;
	return (
		<div className="list-coach">
			<Swiper
				modules={[Autoplay]}
				spaceBetween={32}
				loop={true}
				autoplay={{ delay: 5000 }}
				breakpoints={{
					640: {
						slidesPerView: 1,
						spaceBetween: 20,
					},
					768: {
						slidesPerView: 2,
						spaceBetween: 40,
					},
					1024: {
						slidesPerView: 3,
						spaceBetween: 50,
					},
				}}
				className="list-coach mySwiper"
			>
				{data.map((item) => (
					<SwiperSlide key={item.id} className="item-coach h-full">
						<div className="item-coach w-full h-full group rounded-xl duration-500 cursor-pointer">
							<Image
								src={"/people/ian-dooley.jpg"}
								width={200}
								height={200}
								alt=".."
								className="w-full duration-500 h-[400px] object-cover"
							/>

							<Link
								href={"/"}
								className="profile-coach duration-500 w-full flex flex-col justify-end items-start p-5 text-white absolute bottom-0 left-0 group-hover:bg-gradient-to-t from-black to-transparent h-full"
							>
								<h1 className="coach-name text-start text-2xl font-bold ">
									{item.full_name}
								</h1>
								<span>{item.title}</span>
								<div className="group-hover:inline-block rounded-xl absolute hidden top-1/2 left-1/2">
									<div className="p-4 rounded-xl text-white bg-[#07529E] absolute flex justify-center items-center z-10">
										<MagnifyingGlassPlus />{" "}
									</div>
								</div>
							</Link>
						</div>
					</SwiperSlide>
				))}
			</Swiper>
		</div>
	);
};

export default SliderCoach;
