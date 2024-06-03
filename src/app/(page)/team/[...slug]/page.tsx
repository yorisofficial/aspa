"use client"
import Button from "@/app/Components/Button"
import ContainerContent from "@/app/Components/Container"
import {calculateAge} from "@/app/Components/SlideTeam"
import {ArrowLeft, InstagramLogo} from "@phosphor-icons/react"
import Image from "next/image"
import {useRouter} from "next/navigation"

// Data base
import {CoreTeam} from "@/app/lib/primary/CoreTeam"
import {ExpertTeam} from "@/app/lib/primary/ExpertTeam"
import {VideographerTeam} from "@/app/lib/primary/VideographerTeam"
import {SurfTeam} from "@/app/lib/primary/CoachTeam"

const DetailsTeam = ({params}: {params: {slug: string[]}}) => {
  const getTeam = params?.slug[1]
    .replaceAll("%20", " ")
    .replaceAll("-", " ")
    .split(" ")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ")

  // const getTeam = params.slug[1];
  const getTitle = params.slug[0].replaceAll("-", " ")

  const teamCore = CoreTeam.find((item) => item?.full_name.includes(getTeam.replaceAll("-", " ")))
  const teamSurf = SurfTeam.find((item) => item?.full_name.includes(getTeam.replaceAll("-", " ")))
  const teamExpert = ExpertTeam.find((item) =>
    item?.full_name.includes(getTeam.replaceAll("-", " "))
  )
  const teamVideo = VideographerTeam.find((item) =>
    item?.full_name.includes(getTeam.replaceAll("-", " ").split(" ")[0])
  )

  const detailsData = [teamCore || teamSurf || teamExpert || teamVideo]
  const router = useRouter()
  const handleBack = () => {
    router.back()
  }

  // find location
  const locationCoach = teamSurf?.location
  console.log(detailsData)

  return (
    <ContainerContent url="team" className="">
      <div className="border-buttom w-full pb-8">
        <Button onClick={handleBack} label="Back" variant="iconPrimary" className="group">
          <ArrowLeft className="duration-300 group-hover:-translate-x-1" />
          Back to before
        </Button>
      </div>

      <div className="details-team py-8">
        {detailsData
          .filter((item) => item !== undefined)
          .map((item) => (
            <div key={item?.id} className="">
              <div className="quick-intro w-full space-y-4 border-b border-black pb-8">
                <Image
                  src={item?.profile || "https://via.placeholder.com/500x500"}
                  alt="profile-image"
                  height={500}
                  width={500}
                  className="h-[100px] w-[100px] rounded-full object-cover ring-4 ring-brand"
                />
                <div className="">
                  <h1 className="text-xl font-black">
                    {item?.full_name}{" "}
                    {item?.nickname && (
                      <span className="text-sm font-light">({item?.nickname})</span>
                    )}
                  </h1>

                  {item?.experience && <p className="text-base font-light">{item?.experience}</p>}
                  <span className="capitalize">{getTitle.replaceAll("aspa", "ASPA")}</span>
                </div>
              </div>
              <div className="intro space-y-8 border-b border-black py-8">
                <div className="header">
                  <h1 className="text-xl font-black">Introduction</h1>
                </div>
                <div className="body flex h-full w-full flex-col gap-8">
                  <div className="details grid h-full w-full grid-cols-2 gap-4">
                    <div className="">
                      <span className="text-xs font-light">Nickname</span>
                      <h1 className="text-xl font-semibold">
                        {item?.nickname === ""
                          ? item?.full_name.split(" ")[1] || item?.full_name.split(" ")[2]
                          : item?.nickname}
                      </h1>
                    </div>

                    <div className="">
                      <span className="text-xs font-light">Level</span>
                      <h1 className="text-xl font-semibold">{item?.level}</h1>
                    </div>
                    <div className="">
                      <span className="text-xs font-light">Age</span>
                      <h1 className="text-xl font-semibold">
                        {item?.age ? calculateAge(item?.age) : "-"} y.o
                      </h1>
                    </div>
                    <div className="">
                      {locationCoach && (
                        <>
                          <span className="text-xs font-light">Location</span>
                          <h1 className="text-xl font-semibold capitalize">{locationCoach}</h1>
                        </>
                      )}
                    </div>
                  </div>
                  <div className="promote flex flex-col gap-4">
                    {item?.quotes && (
                      <div className="item-promote space-y-4">
                        <div className="header">
                          <h1 className="text-base font-black">Information</h1>
                        </div>
                        <p className="description">{item?.quotes}</p>
                      </div>
                    )}
                    {item?.archievement[0].title !== "" ? (
                      <div className="item-promote space-y-4">
                        <div className="header">
                          <h1 className="text-base font-black">Archievement</h1>
                        </div>
                        <ul className="w-full list-inside list-disc text-xl font-normal">
                          {item?.archievement.map((item, index) => (
                            <li key={index}>{item.title}</li>
                          ))}
                        </ul>
                      </div>
                    ) : null}
                  </div>
                </div>
              </div>
              <div className="social-media space-y-8 border-b border-black py-8">
                <h1 className="text-base font-black">Get in touch</h1>

                <div className="space-y-2">
                  {item?.user_instagram && (
                    <div className="flex items-center gap-4">
                      <InstagramLogo size={24} />
                      <span>@{item?.user_instagram.split("https://www.instagram.com/")[1]}</span>
                    </div>
                  )}
                  <div className="flex items-center gap-4">
                    <Image
                      src={"/assets/icon/Soorfinc App 1.svg"}
                      alt="profile-image"
                      width={24}
                      height={24}
                      className="h-6 w-6"
                    />
                    <span>{item?.user_soorfinc || "Soorfinc"}</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
      </div>
    </ContainerContent>
  )
}

export default DetailsTeam
