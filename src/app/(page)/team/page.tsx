import BackButton from "@/app/Components/BackButton"
import ContainerContent from "@/app/Components/Container"
import React from "react"
import AspaCoreTeam from "@/app/Components/home/Professional/AspaCoreTeam"

// Data base
import {CoreTeam} from "@/app/lib/primary/CoreTeam"
import {ExpertTeam} from "@/app/lib/primary/ExpertTeam"
import {VideographerTeam} from "@/app/lib/primary/VideographerTeam"
import {SurfTeam} from "@/app/lib/primary/CoachTeam"
import AspaCoachTeam from "@/app/Components/home/Professional/AspaCoachTeam"
import AspaExpertTeam from "@/app/Components/home/Professional/AspaExpertTeam"
import AspaVideographerTeam from "@/app/Components/home/Professional/AspaVideographerTeam"

const TeamPage = () => {
  //filter data coach where already confirm
  const confirmCoach = SurfTeam.filter((item) => item.confirm === true)

  return (
    <ContainerContent url="/team" className="our-team border-buttom">
      <BackButton url="/">Back to main</BackButton>
      <AspaCoreTeam categories="ASPA" title="ASPA" teamData={CoreTeam} />
      <AspaCoachTeam categories="coach" title="ASPA Coach Team" teamData={confirmCoach} />
      <AspaExpertTeam categories="expert" title="ASPA Expert Team" teamData={ExpertTeam} />
      <AspaVideographerTeam
        categories="videgrapher"
        title="ASPA Videographer Team"
        teamData={VideographerTeam}
      />
    </ContainerContent>
  )
}

export default TeamPage
