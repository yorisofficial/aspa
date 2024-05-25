"use client";
import Image from "next/image";
import React from "react";
import ContainerContent from "../Container";
const Service = [
	{
		id: 1,
		title: "SURF COACHING",
		desc: "Surf Coaching sessions with our best coaches.",
		pathImage: "/assets/icon/camera.svg",
	},
	{
		id: 2,
		title: "VIDEO ANALYSIS",
		desc: "Video analysis sessions with our best coaches.",
		pathImage: "/assets/icon/video.svg",
	},
	{
		id: 3,
		title: "PHYSICAL TRAININGS",
		desc: "Overall body Strength, Endurance, & Mobility",
		pathImage: "/assets/icon/human.svg",
	},
	{
		id: 4,
		title: "COMPETITION ",
		desc: "Judging criteria, Heat Strategy, & Support during competition",
		pathImage: "/assets/icon/reward.svg",
	},
	{
		id: 5,
		title: "ACCOMMODATION",
		desc: "Enjoy Mamaka's facilities: Room, Pool, Gym & More",
		pathImage: "/assets/icon/bad.svg",
	},
	{
		id: 6,
		title: "MEALS",
		desc: "Start your day with a hearty breakfast, have a delightful lunch, and end with a satisfying dinner.",
		pathImage: "/assets/icon/food.svg",
	},
];

const OurService = () => {
	return (
		<ContainerContent url="our-service" className="flex w-full h-full flex-col gap-8">
			<div className="w-full">
				<h1 className="text-brand text-xl font-black">Our service</h1>
			</div>
			<div className="w-full h-full list-service grid grid-cols-2 xl:grid-cols-3 gap-4 xl:gap-8">
				{Service.map((item) => (
					<div
						key={item.id}
						className="item-service border-2 group hover:bg-black cursor-pointer transition-colors ease-out duration-500 p-4 bg-white border-bordersolid flex flex-col gap-2 w-full"
					>
						<div className="icon-service p-2 group-hover:rotate-12 bg-primary group-hover:invert w-fit text-white">
							<Image
								src={item.pathImage}
								alt={item.title}
								width={500}
								height={500}
								className="w-6 h-6 group-hover:-rotate-12"
							/>
						</div>
						<div className="title-service min-h-[100px] space-y-2 xl:space-y-4 group-hover:invert">
							<h1 className="text-sm md:text-base font-black">
								{item.title}
							</h1>
							<p className="text-xs sm:text-sm font-normal">
								{item.desc}
							</p>
						</div>
					</div>
				))}
			</div>
		</ContainerContent>
	);
};

export default OurService;
