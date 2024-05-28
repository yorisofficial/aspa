import BackButton from "@/app/Components/BackButton";
import ContainerContent from "@/app/Components/Container";
import React from "react";
import {
  CoreTeam,
  SurfTeam,
  ExpertTeam,
  VideographerTeam,
} from "@/app/lib/data";
import AspaTeam from "@/app/Components/home/Professional/AspaTeam";
import AspaCoreTeam from "@/app/Components/home/Professional/AspaCoreTeam";

const TeamPage = () => {
  return (
    <ContainerContent url="/team" className="our-team border-buttom">
      <BackButton url="/">Back to main</BackButton>
      <AspaCoreTeam categories="ASPA" title="ASPA" teamData={CoreTeam} />
      <AspaTeam
        title="ASPA Coaches"
        teamData={SurfTeam}
        categories="ASPA Coach"
      />
      <AspaTeam
        title="ASPA Expert"
        teamData={ExpertTeam}
        categories="ASPA Expert"
      />
      <AspaTeam
        title="ASPA Videographer"
        teamData={VideographerTeam}
        categories="ASPA Videographer"
      />
    </ContainerContent>
  );
};

export default TeamPage;
