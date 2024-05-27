import React from "react";
import ListTeam from "./ListTeam";

const PrimaryView = ({
	title,
	teamData,
	categories,
}: {
	title: string;
	teamData: any;
	categories: string;
}) => {
	return (
		<div>
			<div className="simple-container flex flex-col gap-8 justify-start items-start py-8 border-b border-primary">
				<h1 className="text-3xl font-black">{title}</h1>
				<ListTeam data={teamData} categories={categories} />
			</div>
		</div>
	);
};

export default PrimaryView;
