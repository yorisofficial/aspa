import Image from "next/image";
import React from "react";
import Link from "next/link";
import { Home } from "@/app/lib/Home";

const OurProgram = () => {
	return (
		<>
			<div className="our-program py-8 border-buttom w-fit mx-auto flex justify-center relative items-center">

				<div className="relative w-full md:w-[95%] xl:w-[1024px] h-full">

					<Image
						src={"/assets/hero-img-1.png"}
						width={1500}
						height={1500}
						priority={false}
						alt="ASPA Logo"
						className="hidden w-full h-[442px] md:inline-block object-cover"
					/>
					<div className="program-card relative space-y-4 md:absolute z-10 md:left-[2%] md:top-1/2 md:-translate-y-1/2 bg-primary md:w-[450px] text-white p-8">
						<div className="absolute right-0 bottom-0 -z-10">
							<Image
								src={
									"/assets/acc/title-cover-simple.svg"
								}
								alt="acc-line"
								width={500}
								height={500}
								className="w-[300px] h-[300px] opacity-40"
							/>
						</div>
						<div className="header">
							<h1 className="text-base xl:text-xl font-bold uppercase">
								{[Home[1].title]}
							</h1>
						</div>
						<p className="text-sm font-light w-full text-justify">
							{Home[1].description}
						</p>
						<div className="w-full flex items-center gap-4 flex-shrink-0">
							<Link href={"/program"} className="bg-white w-fit text-black text-sm px-5 py-3">
								{Home[1].url}
							</Link>
							<Link
								href={"/program"}
								className="underline w-fit text-sm underline-offset-4"
							>
								{Home[1].url2}
							</Link>
						</div>
					</div>
				</div>
			</div>
		</>
	);
};

export default OurProgram;
