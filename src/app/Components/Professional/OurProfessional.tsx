import React from "react";
import ContainerContent from "../Container";
import SliderCoach from "../SliderCoach";
import Link from "next/link";
import Button from "../Button";

const OurProfessional = () => {
	return (
		<ContainerContent url="/our-team" className="py-8 border-b-2 border-primary">
			<div className="our-professional-teams space-y-8">
				<div className="our-team header w-full flex justify-between items-center">
					<h1 className="text-center text-black text-4xl font-black uppercase">
						our professional teams
					</h1>
					<Link href={"/our-team"} className="hidden xl:inline-block">
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
