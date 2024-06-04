import BackButton from "@/app/Components/BackButton"
import Button from "@/app/Components/Button"
import ContainerContent from "@/app/Components/Container"
import SliderProgram from "@/app/Components/home/Program/SliderProgram"
import OurService from "@/app/Components/home/Service/OurService"
import Link from "next/link"
import React from "react"
import {Booking} from "@/app/lib/Booking"
import SupportPage from "../support/page"
import UpcamingContainer from "@/app/Components/UpcamingContainer"
import ButtonBooking from "@/app/Components/ButtonBooking"

const ProgramPage = () => {
  const SliderImg = [
    {
      src: "/public/assets/program/grompatrol/img-1.png",
      alt: "image-asset-program",
    },
    {
      src: "/public/assets/program/grompatrol/img-2.png",
      alt: "image-asset-program",
    },
    {
      src: "/public/assets/program/grompatrol/img-3.png",
      alt: "image-asset-program",
    },
    {
      src: "/public/assets/program/grompatrol/img-4.png",
      alt: "image-asset-program",
    },
  ]
  return (
    <UpcamingContainer content={false} title="Menu our program">
      <ContainerContent url="/program" className="min-h-screen w-full px-4 xl:px-0">
        <BackButton url="/">Back to main</BackButton>
        <div className="content-section grid h-full w-full grid-cols-1 gap-8 border-b border-black py-8 pb-8 xl:grid-cols-2">
          <SliderProgram data={SliderImg} />
          <div className="details flex h-full w-full flex-col gap-8">
            <div className="content-body space-y-4">
              <div className="header">
                <span className="text-base uppercase">Program</span>
                <h1 className="text-3xl font-black text-brand">{Booking.title}</h1>
              </div>
              <p className="w-full text-sm font-light md:w-3/4">{Booking.description}</p>
            </div>
            <div className="pricing-progrm flex w-full flex-col gap-6">
              <div className="w-full">
                <span className="font-light">Price</span>
                <h1 className="text-3xl font-black text-brand">{Booking.price}</h1>
              </div>
              <div className="w-full">
                <ButtonBooking title="Book now" variant={false} />
              </div>
            </div>
          </div>
        </div>
        <OurService title="GET MORE BENEFIT" />
        <SupportPage />
      </ContainerContent>
    </UpcamingContainer>
  )
}

export default ProgramPage
