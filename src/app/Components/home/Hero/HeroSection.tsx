import React from "react"
import Image from "next/image"
import Link from "next/link"
import SocialComponents from "../../SocialComponents"
import Button from "../../Button"

const HeroSection = () => {
  return (
    <div className="relative h-screen w-full">
      <div className="h-screen pt-8 w-full px-4 md:px-10 xl:px-0 bg-brand text-white">
        <div className="w-full flex-col h-full gap-8 flex justify-center items-center">
          <div className="">
            <Image
              src={"/brand/ASPA-white.svg"}
              width={500}
              height={500}
              alt="ASPA Logo"
              priority={false}
              className="w-40 xl:w-80 h-fit object-contain"
            />
          </div>
          <div className="text-center gap-4 flex justify-center items-center flex-col">
            <h1 className="text-2xl font-black uppercase">Asian Surf Performance Academy</h1>
            <p className="text-base font-light xl:w-1/2">
              The Asian Surf Performance Academy (ASPA) is where surfers reach their highest
              potential. Located in Bali, we focus on supporting and empowering surfers to become
              their best. We enhance your surfing skills and help you develop professional qualities
              like motivation, teamwork, and responsibility
            </p>
          </div>
          <div className="btn-cta flex gap-4 items-center">
            <Link href={"/academy"}>
              <Button label="about us" variant="invert" className="!text-brand">
                About us
              </Button>
            </Link>
            <Link href={"/program"} className="underline underline-offset-4">
              ASPA x GROM PATROL
            </Link>
          </div>
          <div className="contact-us gap-2 flex flex-col justify-center items-center">
            <h1 className="font-black text-base">Our social media</h1>
            <SocialComponents />
          </div>
        </div>
      </div>
    </div>
  )
}

export default HeroSection
