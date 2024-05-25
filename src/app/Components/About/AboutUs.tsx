"use client";
import React from "react";
import ContainerContent from "../Container";
import Image from "next/image";
import Description from "../Description";
import HeadingText from "../HeadingText";
import Button from "../Button";
import Link from "next/link";
import { usePathname } from "next/navigation";

const AboutUs = () => {
	const pathName = usePathname();
	const homePageView = pathName === "/" ? "hidden" : "";

	return (
		<ContainerContent url="/about-us" className="space-y-8">
			<div className="profile-about space-y-4 flex justify-center items-start flex-col">
				<Image
					src={"/brand/ASPA-dark.svg"}
					width={1500}
					height={1500}
					alt="ASPA Logo"
					className="w-[300px] h-full"
				/>
				<h1 className={`text-xl font-black text-brand`}>About us</h1>
				<Description
					text="The Asian Surf Performance Academy (ASPA) is where surfers reach their highest potential. Located in Bali, we focus on supporting and empowering surfers to become their best. We enhance your surfing skills and help you develop professional qualities like motivation, teamwork, and responsibility."
					className="Aspa-Description"
				/>
				<Link href={"/about-us"} className={`${!homePageView}`}>
					<Button label="About us" variant="primary">
						About us
					</Button>
				</Link>
			</div>
			<div className={`moto-about space-y-8 ${homePageView}`}>
				<div className="vision text-center space-y-4 flex flex-col justify-center items-center">
					<HeadingText title="Our vision" />
					<Description
						text="Support Surf Athletes to become the worlds best
						surfers and people"
						className="description"
					/>
				</div>
				<div className="mission text-center space-y-4 flex flex-col justify-center items-center">
					<HeadingText title="Our mission" />
					<Description
						text="Transform into a Performance Surf Academy that
						prioritizes athletes, is supported by coaches,
						focuses on performance, and integrates all aspects
						of performance"
						className="description"
					/>
				</div>
				<div className="w-full flex justify-center items-center">
					<Link href={"/about-us"}>
						<Button label="learn more" variant="primary">
							About us
						</Button>
					</Link>
				</div>
			</div>
		</ContainerContent>
	);
};

export default AboutUs;
