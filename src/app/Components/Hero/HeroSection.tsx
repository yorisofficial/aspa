import React from "react";
import Carousel from "@/app/Components/Carousel";
import Image from "next/image";
import MouseAnimate from "./MouseAnimate";

const HeroSection = () => {
	return (
		<div className="w-full relative h-screen">
			<Carousel />
			<div className="absolute flex justify-center items-center flex-col top-1/2 z-10 left-1/2 -translate-y-1/2 -translate-x-1/2">
				<Image
					src={"/assets/acc/title-cover.png"}
					height={1400}
					width={1400}
					alt=".."
					className="w-full h-full object-cover opacity-30"
				/>
			</div>
			<div className="absolute flex justify-center items-center flex-col top-1/2 z-10 left-1/2 -translate-y-1/2 -translate-x-1/2">
				<Image
					src={"/brand/ASPA-white.svg"}
					height={500}
					width={500}
					alt="ASPA Logo"
					className="xl:w-[300px] h-full object-cover"
				/>
				<h1 className="text-xl text-white whitespace-nowrap">
					Asian Surf Profesional Academy
				</h1>
			</div>
			<div className="absolute z-10 left-0 bottom-12 flex justify-center items-center w-full">
				<MouseAnimate />
			</div>
		</div>
	);
};

export default HeroSection;
