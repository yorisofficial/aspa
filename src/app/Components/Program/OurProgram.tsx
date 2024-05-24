import Image from "next/image";
import React from "react";
import Button from "@/app/Components/Button";
import Link from "next/link";

const OurProgram = () => {
	return (
		<>
			<div className="our-program py-8 flex justify-center items-center">
				<div className="relative w-full md:w-[95%] xl:w-[1024px] h-full">
					<Image
						src={"/assets/hero-img-1.png"}
						width={1500}
						height={1500}
						priority={false}
						alt="ASPA Logo"
						className="hidden h-[442px] md:inline-block object-cover"
					/>
					<div className="program-card space-y-4 md:absolute z-10 md:left-[2%] md:top-1/2 md:-translate-y-1/2 bg-brand md:w-[450px] text-white p-8">
						<div className="header">
							<span className="uppercase">
								our program
							</span>
							<h1 className="text-4xl font-bold uppercase">
								ASPA Groom patrol camp
							</h1>
						</div>
						<p className="text-base font-light">
							ASPA has created the first performance
							program for the Tipi Jabrik&#39;s Grom
							Patrol 2024. The ASPA Grom Patrol Camp will
							offer a 5 day training camp before and
							during the competitions. This program will
							be done with the collaboration of Mamaka
							Hotel. Located in Kuta Beach, where the grom
							patrol it&#39;s going to be.
						</p>
						<div className="w-full">
							<Link href={"/about-us"}>
								<Button
									label="Go to about us"
									variant="invert"
									className=""
								>
									Read more
								</Button>
							</Link>
						</div>
					</div>
				</div>
			</div>
		</>
	);
};

export default OurProgram;
