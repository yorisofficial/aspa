import React from "react";
import ContainerContent from "../Container";
import Image from "next/image";
import Description from "../Description";
import HeadingText from "../HeadingText";
import Button from "../Button";
import Link from "next/link";

const AboutUs = () => {
	return (
		<ContainerContent url="/about-us" className="space-y-8">
			<div className="profile-about space-y-4 flex justify-center items-center flex-col">
				<Image
					src={"/brand/ASPA-dark.svg"}
					width={1500}
					height={1500}
					alt="ASPA Logo"
					className="w-[300px] h-full"
				/>
				<Description
					text="ASPA is the Asian Surf Performance Academy; ASPA it&#39;s
					about reaching your highest potential as an athlete, in and
					out of the water. Our goal is to empower and support
					excellent surfers to break through their limits and become
					the best surfer they can be."
					className="Aspa-Description"
				/>
			</div>
			<div className="moto-about space-y-8">
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
