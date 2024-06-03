import BackButton from "@/app/Components/BackButton"
import ContainerContent from "@/app/Components/Container"
import React from "react"
import AspaTeam from "@/app/Components/home/Professional/AspaTeam"
import AspaCoreTeam from "@/app/Components/home/Professional/AspaCoreTeam"

// Data base
import {CoreTeam} from "@/app/lib/primary/CoreTeam"
import {ExpertTeam} from "@/app/lib/primary/ExpertTeam"
import {VideographerTeam} from "@/app/lib/primary/VideographerTeam"
import {SurfTeam} from "@/app/lib/primary/CoachTeam"

const TeamPage = () => {
  //filter data coach where already confirm
  const confirmCoach = SurfTeam.filter((item) => item.confirm === true)

  return (
    <ContainerContent url="/team" className="our-team border-buttom">
      <BackButton url="/">Back to main</BackButton>
      <AspaCoreTeam categories="ASPA" title="ASPA" teamData={CoreTeam} />
      <AspaTeam title="ASPA Coaches" teamData={confirmCoach} categories="ASPA Coach" />
      <AspaTeam title="ASPA Expert" teamData={ExpertTeam} categories="ASPA Expert" />
      <AspaTeam
        title="ASPA Videographer"
        teamData={VideographerTeam}
        categories="ASPA Videographer"
      />
    </ContainerContent>
  )
}

export default TeamPage
