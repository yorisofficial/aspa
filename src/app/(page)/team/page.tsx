import BackButton from "@/app/Components/BackButton";
import ContainerContent from "@/app/Components/Container";
import React from "react";
import { CoreTeam, SurfTeam, ExpertTeam, VideographerTeam } from "@/app/lib/data";
import PrimaryView from "@/app/Components/Professional/PrimaryView";
import ListCoreTeam from "@/app/Components/Professional/ListCoreTeam";

const TeamPage = () => {
	return (
		<ContainerContent url="/team" className="our-team border-b border-primary">
			<BackButton url="/">Back to main</BackButton>
			<ListCoreTeam categories="ASPA" title="ASPA" teamData={CoreTeam} />
			<PrimaryView
				title="ASPA Coaches"
				teamData={SurfTeam}
				categories="Coach"
			/>
			<PrimaryView
				title="ASPA Expert"
				teamData={ExpertTeam}
				categories="Expert"
			/>
			<PrimaryView
				title="ASPA Videographer"
				teamData={VideographerTeam}
				categories="Videographer"
			/>
		</ContainerContent>
	);
};

export default TeamPage;
