import React from "react";
import ContainerContent from "../Container";
import SliderCoach from "../SliderCoach";
import Link from "next/link";
import Button from "../Button";

const OurProfessional = () => {
	return (
		<ContainerContent url="/our-team" className="py-8 border-b border-primary">
			<div className="our-professional-teams space-y-8">
				<div className="our-team header w-full flex flex-col gap-8 justify-between items-start">
					<div className="space-y-2">
						<h1 className="text-start text-brand text-xl font-black">
							Our team
						</h1>
						<p className="font-light text-sm xl:w-1/2">
							We are a passionate and experienced team in
							the world of surfing. With deep knowledge
							and high dedication, we are ready to help
							you reach your highest potential in the
							sport of surfing. Together, we will guide
							you through every wave to achieve remarkable
							success in the water.
						</p>
					</div>
					<Link href={"/team"} className="">
						<Button label="see more" variant="primary">
							See all teams
						</Button>
					</Link>
				</div>
				<SliderCoach />
			</div>
		</ContainerContent>
	);
};

export default OurProfessional;
