import Image from "next/image"
import React from "react"
import Link from "next/link"
import ButtonBooking from "../../ButtonBooking"
import {urlBooking} from "@/app/lib/Booking"

const OurProgram = () => {
  return (
    <>
      <div className="our-program border-buttom rounded-xl relative mx-auto flex w-fit items-center justify-center py-8">
        <div className="relative h-full w-full md:w-[95%] xl:w-[1024px]">
          <Image
            src={"/assets/hero-img-1.png"}
            width={1500}
            height={1500}
            priority={false}
            alt="ASPA Logo"
            className="hidden rounded-xl h-[440px] w-full object-cover md:inline-block"
          />
          <div className="program-card relative z-10 space-y-4 rounded-xl bg-primary p-8 text-white md:absolute md:left-2 md:top-1/2 md:w-[450px] md:-translate-y-1/2">
            <div className="absolute bottom-0 right-0 -z-10">
              <Image
                src={"/assets/acc/title-cover-simple.svg"}
                alt="acc-line"
                width={500}
                height={500}
                className="h-[300px] w-[300px] opacity-40"
              />
            </div>
            <div className="header">
              <h1 className="text-base font-bold uppercase xl:text-xl">ASPA x GROM PATROL 2024</h1>
            </div>
            <p className="w-full text-justify text-sm md:text-base font-light">
              ASPA has launched the inaugural program for Tipi Jabrik&apos;s Grom Patrol 2024. The
              ASPA Grom Patrol Camp will provide a 5-day training session before the competition.
              Located at Mamaka Hotel, Kuta Beach, right in front of the competition area, this
              program aims to promote, support, and mentor the best young surfers. It offers
              personalized attention to enhance not only their surfing skills but also to develop
              professional qualities such as motivation, teamwork, commitment, and responsibility.
            </p>
            <div className="flex w-full flex-shrink-0 items-center gap-4">
              <ButtonBooking invert={true} data={urlBooking} />
              <Link href={"/program"} className="w-fit text-sm underline underline-offset-4">
                About the program
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default OurProgram
