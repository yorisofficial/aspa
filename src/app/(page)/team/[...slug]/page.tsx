"use client"
import Button from "@/app/Components/Button"
import ContainerContent from "@/app/Components/Container"
import {calculateAge} from "@/app/Components/SlideTeam"
import {ArrowLeft} from "@phosphor-icons/react"
import Image from "next/image"
import {useRouter} from "next/navigation"
import CoachSliderImg from "@/app/Components/CoachSliderImg"

// Data base
import {CoreTeam} from "@/app/lib/primary/CoreTeam"
import {ExpertTeam} from "@/app/lib/primary/ExpertTeam"
import {VideographerTeam} from "@/app/lib/primary/VideographerTeam"
// import {SurfTeam} from "@/app/lib/primary/CoachTeam"
import {SurfTeam} from "@/app/lib/primary/CoachTeam"
import Link from "next/link"

const DetailsTeam = ({params}: {params: {slug: string[]}}) => {
  const getTeam = params?.slug[1]
    .replaceAll("%20", " ")
    .replaceAll("-", " ")
    .split(" ")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ")

  const getTitle = params.slug[0].replaceAll("-", " ")

  const getCoach = params.slug[0].replaceAll("-", " ").includes("coach")

  const teamCore = CoreTeam.find((item) => item?.full_name.includes(getTeam.replaceAll("-", " ")))
  const teamSurf = SurfTeam.find((item) => item?.full_name.includes(getTeam.replaceAll("-", " ")))
  const teamExpert = ExpertTeam.find((item) =>
    item?.full_name.includes(getTeam.replaceAll("-", " "))
  )
  const teamVideo = VideographerTeam.find((item) =>
    item?.full_name.includes(getTeam.replaceAll("-", " ").split(" ")[0])
  )

  const detailsData = [teamCore || teamSurf || teamExpert || teamVideo]
  const filteredDetails = detailsData.filter((item) => item !== undefined)
  const router = useRouter()
  const handleBack = () => {
    router.back()
  }

  // find location
  const locationCoach = teamSurf?.location

  // Check if coach has images
  const getCoachImage = teamSurf?.preview_img

  return (
    <ContainerContent url="team" className="">
      <div className="border-buttom w-full pb-8">
        <Button onClick={handleBack} label="Back" variant="iconPrimary" className="group">
          <ArrowLeft className="duration-300 group-hover:-translate-x-1" />
          Back to before
        </Button>
      </div>
      <div className="details-team py-8">
        {filteredDetails.map((item) => (
          <div key={item?.id} className="">
            {getCoachImage && <CoachSliderImg data={getCoachImage} />}
            <div className="quick-intro w-full mt-8 space-y-4 flex gap-8 border-b border-black pb-8">
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
                  {item?.nickname && <span className="text-sm font-light">({item?.nickname})</span>}
                </h1>
                <span className="capitalize">
                  ASPA {getTitle.includes("ASPA") ? "team" : getTitle}
                </span>
                {item?.experience && <p className="text-base font-light">{item?.experience}</p>}
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
                  {getCoach && (
                    <div className="">
                      <span className="text-xs font-light">Level</span>
                      <h1 className="text-xl font-semibold">{item?.level}</h1>
                    </div>
                  )}
                  <div className="">
                    <span className="text-xs font-light">Age</span>
                    <h1 className="text-xl font-semibold">
                      {item?.age ? calculateAge(item?.age) : "-"} y.o
                    </h1>
                  </div>
                  {locationCoach && (
                    <div className="">
                      <>
                        <span className="text-xs font-light">Location</span>
                        <h1 className="text-xl font-semibold capitalize">{locationCoach}</h1>
                      </>
                    </div>
                  )}
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
                  {item?.achievement[0].title !== "" ? (
                    <div className="item-promote space-y-4">
                      <div className="header">
                        <h1 className="text-base font-black">Achievement</h1>
                      </div>
                      <ul className="w-full list-inside list-disc text-xl font-normal">
                        {item?.achievement.map((item, index) => (
                          <li key={index} className="font-normal text-base">
                            {item.title}
                          </li>
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
                  <Link target="_blank" href={item?.user_instagram}>
                    <div className="flex items-center gap-4">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        fill="#000000"
                        viewBox="0 0 256 256"
                      >
                        <path d="M128,80a48,48,0,1,0,48,48A48.05,48.05,0,0,0,128,80Zm0,80a32,32,0,1,1,32-32A32,32,0,0,1,128,160ZM176,24H80A56.06,56.06,0,0,0,24,80v96a56.06,56.06,0,0,0,56,56h96a56.06,56.06,0,0,0,56-56V80A56.06,56.06,0,0,0,176,24Zm40,152a40,40,0,0,1-40,40H80a40,40,0,0,1-40-40V80A40,40,0,0,1,80,40h96a40,40,0,0,1,40,40ZM192,76a12,12,0,1,1-12-12A12,12,0,0,1,192,76Z"></path>
                      </svg>
                      <span className="flex items-center gap-1">
                        @{item?.user_instagram.split("https://www.instagram.com/")[1]}
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="16"
                          height="16"
                          fill="#000000"
                          viewBox="0 0 256 256"
                        >
                          <path d="M200,64V168a8,8,0,0,1-16,0V83.31L69.66,197.66a8,8,0,0,1-11.32-11.32L172.69,72H88a8,8,0,0,1,0-16H192A8,8,0,0,1,200,64Z"></path>
                        </svg>
                      </span>
                    </div>
                  </Link>
                )}
                {item?.user_soorfinc && (
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
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </ContainerContent>
  )
}

export default DetailsTeam
