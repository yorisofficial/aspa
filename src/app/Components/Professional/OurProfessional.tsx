import React from "react";
import ContainerContent from "../Container";
import SliderCoach from "../SliderCoach";
import Link from "next/link";
import Button from "../Button";
import { Home } from "@/app/lib/Home";

const OurProfessional = () => {
	return (
		<ContainerContent url="/our-team" className="py-8 border-buttom">
			<div className="our-professional-teams space-y-8">
				<div className="our-team header w-full flex flex-col gap-8 justify-between items-start">
					<div className="space-y-2">
						<h1 className="text-start text-brand text-xl font-black">{Home[3].title}</h1>
						<p className="font-light text-sm xl:w-1/2">{Home[3].description}</p>
					</div>
					<Link href={"/team"} className="">
						<Button label="see more" variant="primary">
							{Home[3].url}
						</Button>
					</Link>
				</div>
				<SliderCoach />
			</div>
		</ContainerContent>
	);
};

export default OurProfessional;
