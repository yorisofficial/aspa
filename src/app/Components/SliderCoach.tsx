"use client";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import { CoreTeam } from "../lib/data";

const SliderCoach = () => {
	const data = CoreTeam;
	const calculateAge = (birthYear: number) => {
		const age = new Date().getFullYear() - birthYear;
		return age;
	};

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

							<div className="profile-coach absolute bottom-4 left-4 text-white">
								<div className="flex flex-col justify-start items-start gap-4">
									<div className="text-start">
										<div className="flex gap-2 items-center">
											<h1 className="coach-name text-start text-2xl font-black ">
												{
													item.full_name
												}
											</h1>
											<span className="text-base font-light">
												|{" "}
												{calculateAge(
													item.Age
												)}{" "}
												y.o
											</span>
										</div>
										<span className="text-sm">
											+10 Year
											coach
											experienced
										</span>
									</div>
									<div className="">
										<Link
											href={
												item.full_name
											}
											className="underline text-sm underline-offset-4"
										>
											See profile
										</Link>
									</div>
								</div>
							</div>
						</div>
					</SwiperSlide>
				))}
			</Swiper>
		</div>
	);
};

export default SliderCoach;
