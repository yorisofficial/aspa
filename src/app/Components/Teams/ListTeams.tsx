"use client";
import { useState } from "react";
import CategoryTeamSection from "./CategoryTeamSection";

const ListTeams = () => {
  // state for show pop up
  const [isShow, setShow] = useState("");

  // setup filter by categories team
  const coreTeam = "core";
  const coachTeam = "coach";
  const expertTeam = "expert";
  const videographerTeam = "videographer";

  return (
    <div className="relative h-fit min-h-screen w-full pb-8">
      <div className="container-content divide-gray-400 h-fit w-full divide-y-2 px-4 md:mt-16 md:px-16">
        <CategoryTeamSection
          sectionName={`container_core_team`}
          titleSection={`ASPA Team`}
          categories={coreTeam}
        />
        <CategoryTeamSection
          sectionName={`container_coach_team`}
          titleSection={`ASPA Coach Team`}
          categories={coachTeam}
        />
        <CategoryTeamSection
          sectionName={`container_expert_team`}
          titleSection={`ASPA Expert Team`}
          categories={expertTeam}
        />
        <CategoryTeamSection
          sectionName={`container_videographer_team`}
          titleSection={`ASPA Expert Teams`}
          categories={videographerTeam}
        />
      </div>
    </div>
  );
};

export default ListTeams;
