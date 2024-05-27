import Image from "next/image";
import React from "react";
import Button from "@/app/Components/Button";
import Link from "next/link";

const OurProgram = () => {
	return (
		<>
			<div className="our-program py-8 border-b border-primary flex justify-center relative items-center">
				<div className="absolute top-0 left-0 z-10">
					<Image
						src={"/assets/acc/title-cover-simple.svg"}
						alt="acc-line"
						width={500}
						height={500}
						className="w-[200px] h-[200px]"
					/>
				</div>
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
						<div className="absolute left-0 top-0">
							<Image
								src={
									"/assets/acc/title-cover-simple.svg"
								}
								alt="acc-line"
								width={500}
								height={500}
								className="w-[200px] h-[200px]"
							/>
						</div>
						<div className="header">
							<h1 className="text-base xl:text-xl font-bold uppercase">
								ASPA x Grom Patrol 2024
							</h1>
						</div>
						<p className="text-sm font-light w-full text-justify">
							ASPA has launched the inaugural program for
							Tipi Jabrik&apos;s Grom Patrol 2024. The
							ASPA Grom Patrol Camp will provide a 5-day
							training session before the competition.
							Located at Mamaka Hotel, Kuta Beach, right
							in front of the competition area, this
							program aims to promote, support, and mentor
							the best young surfers. It offers
							personalized attention to enhance not only
							their surfing skills but also to develop
							professional qualities such as motivation,
							teamwork, commitment, and responsibility.
						</p>
						<div className="w-full flex items-center gap-4 flex-shrink-0">
							<Link href={"/program"} className="bg-white text-black text-sm px-5 py-3">
								Book now
							</Link>
							<Link
								href={"/about-us"}
								className="underline text-sm underline-offset-4"
							>
								About the program
							</Link>
						</div>
					</div>
				</div>
			</div>
		</>
	);
};

export default OurProgram;
