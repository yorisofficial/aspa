import Image from "next/image";
import CarouselPage from "../Components/Carousel";
import MouseAnimate from "./component/MouseAnimate";

const HeroPage = () => {
	return (
		<div className="relative flex items-center justify-center w-full mx-auto">
			<CarouselPage />
			<div className="absolute z-10">
				<Image
					src={"/brand/ASPA-white.svg"}
					alt="logo"
					width={500}
					height={500}
					className="object-cover w-full h-full"
				/>
				<h1 className="text-3xl font-bold text-white">
					Asian surf professional academy
				</h1>
			</div>
			<MouseAnimate />
		</div>
	);
};

export default HeroPage;
