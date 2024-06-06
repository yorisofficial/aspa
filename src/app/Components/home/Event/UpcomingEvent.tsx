import React from "react"
import ContainerContent from "../../Container"
import Button from "../../Button"
import Image from "next/image"
import Link from "next/link"
import {Home} from "@/app/lib/Home"

const UpcomingEvent = () => {
  return (
    <ContainerContent url="book-session" className="border-buttom relative py-8">
      <div className="book-section relative flex w-full flex-col items-center justify-center bg-primary px-4 py-8 text-white">
        <div className="absolute left-1/2 top-1/2 z-0 flex h-full w-full -translate-x-1/2 -translate-y-1/2 items-center justify-center">
          <Image
            src={"/assets/acc/title-cover-simple.svg"}
            alt="acc-line"
            width={500}
            height={500}
            className="h-full w-full opacity-60"
          />
        </div>
        <div className="details relative z-10 flex flex-col gap-2 text-center xl:items-center xl:justify-center">
          <span className="text-sm font-light uppercase">Book now and get the benefit</span>
          <h1 className="text-xl font-black text-brand xl:text-3xl">ASPA x Grom Patrol Program</h1>
          <p className="text-sm font-light xl:w-1/2">
            ASPA has launched the inaugural program for Tipi Jabrik&apos;s Grom Patrol 2024. The
            ASPA Grom Patrol Camp will provide a 5-day training session before the competition.
            Located at Mamaka Hotel, Kuta Beach, right in front of the competition area, this
            program aims to promote, support, and mentor the best young surfers. It offers
            personalized attention to enhance not only their surfing skills but also to develop
            professional qualities such as motivation, teamwork, commitment, and responsibility.
          </p>
        </div>
      </div>
    </ContainerContent>
  )
}

export default UpcomingEvent
