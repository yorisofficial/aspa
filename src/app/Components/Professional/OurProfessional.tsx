import React from "react";
import ContainerContent from "../Container";
import SliderCoach from "../SliderCoach";
import Link from "next/link";
import Button from "../Button";

const OurProfessional = () => {
	return (
		<ContainerContent url="/our-team" className="py-8 border-b-2 border-primary">
			<div className="our-professional-teams space-y-8">
				<div className="our-team header w-full flex flex-col gap-8 justify-between items-start">
					<div className="space-y-2">
						<h1 className="text-start text-brand text-xl font-black">
							Our team
						</h1>
						<p className="font-light text-sm">
							We are a passionate and experienced team in
							the world of surfing. With deep knowledge
							and high dedication, we are ready to help
							you reach your highest potential in the
							sport of surfing. Together, we will guide
							you through every wave to achieve remarkable
							success in the water.
						</p>
					</div>
					<Link href={"/our-team"} className="">
						<Button label="see more" variant="primary">
							see more
						</Button>
					</Link>
				</div>
				<SliderCoach />
				<div className="w-full flex justify-center items-center">
					<Link href={"/our-team"} className="hidden xl:inline-block">
						<Button label="see more" variant="primary">
							see more
						</Button>
					</Link>
				</div>
			</div>
		</ContainerContent>
	);
};

export default OurProfessional;
