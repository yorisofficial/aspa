import BackButton from "@/app/Components/BackButton";
import ContainerContent from "@/app/Components/Container";
import React from "react";
import { CoreTeam, SurfTeam, ExpertTeam, VideographerTeam } from "@/app/lib/data";
import PrimaryView from "@/app/Components/Professional/PrimaryView";
import ListCoreTeam from "@/app/Components/Professional/ListCoreTeam";

const TeamPage = () => {
	return (
		<ContainerContent url="/team" className="our-team border-buttom">
			<BackButton url="/">Back to main</BackButton>
			<ListCoreTeam categories="ASPA" title="ASPA" teamData={CoreTeam} />
			<PrimaryView
				title="ASPA Coaches"
				teamData={SurfTeam}
				categories="ASPA Coach"
			/>
			<PrimaryView
				title="ASPA Expert"
				teamData={ExpertTeam}
				categories="ASPA Expert"
			/>
			<PrimaryView
				title="ASPA Videographer"
				teamData={VideographerTeam}
				categories="ASPA Videographer"
			/>
		</ContainerContent>
	);
};

export default TeamPage;
