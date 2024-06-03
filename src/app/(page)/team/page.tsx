import BackButton from '@/app/Components/BackButton'
import ContainerContent from '@/app/Components/Container'
import React from 'react'
import AspaTeam from '@/app/Components/home/Professional/AspaTeam'
import AspaCoreTeam from '@/app/Components/home/Professional/AspaCoreTeam'

// Data base
import {CoreTeam} from '@/app/lib/primary/CoreTeam'
import {ExpertTeam} from '@/app/lib/primary/ExpertTeam'
import {VideographerTeam} from '@/app/lib/primary/VideographerTeam'
import {SurfTeam} from '@/app/lib/primary/CoachTeam'

const TeamPage = () => {
  //filter data coach where already confirm
  const confirmCoach = SurfTeam.filter((item) => item.confirm === true)
  const totalCoach = confirmCoach.length
  const totalExpert = ExpertTeam.length
  const totalVideographer = VideographerTeam.length

  console.log()

  return (
    <ContainerContent url='/team' className='our-team border-buttom'>
      <BackButton url='/'>Back to main</BackButton>
      <AspaCoreTeam categories='ASPA' title='ASPA' teamData={CoreTeam} />
      <AspaTeam
        total={totalCoach}
        title='ASPA Coaches'
        teamData={confirmCoach}
        categories='ASPA Coach'
      />
      <AspaTeam
        total={totalExpert}
        title='ASPA Expert'
        teamData={ExpertTeam}
        categories='ASPA Expert'
      />
      <AspaTeam
        total={totalVideographer}
        title='ASPA Videographer'
        teamData={VideographerTeam}
        categories='ASPA Videographer'
      />
    </ContainerContent>
  )
}

export default TeamPage
