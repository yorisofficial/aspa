"use client";
import { MagnifyingGlassPlus } from "@phosphor-icons/react";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import { data } from "../lib/Coach";

const SliderCoach = () => {
	return (
		<div className="list-coach">
			<Swiper
				modules={[Autoplay]}
				spaceBetween={32}
				loop={true}
				autoplay={{ delay: 2000 }}
				breakpoints={{
					640: {
						slidesPerView: 1,
						spaceBetween: 20,
					},
					768: {
						slidesPerView: 1,
						spaceBetween: 40,
					},
					1024: {
						slidesPerView: 3,
						spaceBetween: 50,
					},
				}}
				className="list-coach"
			>
				{data.map((item) => (
					<SwiperSlide
						key={item.id}
						className="item-coach h-full marker:bg-red-50"
					>
						<div className="item-coach w-full h-full group duration-500 cursor-pointer">
							<Image
								src={"/people/ian-dooley.jpg"}
								width={200}
								height={200}
								alt=".."
								className="w-full duration-500 rounded-2xl h-[400px] object-cover"
							/>

							<Link
								href={"/"}
								className="profile-coach duration-500 w-full flex flex-col justify-end items-start p-5 text-white absolute bottom-0 left-0 group-hover:bg-gradient-to-t from-black to-transparent h-full"
							>
								<h1 className="coach-name text-start font-bold ">
									{item.title}
								</h1>
								<span className="text-start">
									{item.experience} years{" "}
									{item.profesional}
								</span>
								<div className="group-hover:inline-block absolute hidden top-1/2 left-1/2">
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
