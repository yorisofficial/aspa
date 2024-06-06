"use client"
import React from "react"
import ContainerContent from "../../Container"
import Image from "next/image"
import Button from "../../Button"
import Link from "next/link"
import {usePathname} from "next/navigation"
import {Home} from "@/app/lib/Home"

const AboutUs = () => {
  const pathName = usePathname()
  const homePageView = pathName === "/" ? "hidden" : ""

  return (
    <ContainerContent url="/academy" className="border-buttom space-y-8 py-8">
      <div className="profile-about flex flex-col items-start justify-center space-y-4">
        <Image
          src={"/brand/ASPA-dark.svg"}
          width={1500}
          height={1500}
          alt="ASPA Logo"
          className="h-full w-[300px]"
        />
        <h1 className={`text-xl font-black text-brand`}>About us</h1>
        <p>
          The Asian Surf Performance Academy (ASPA) is where surfers reach their highest potential.
          Located in Bali, we focus on supporting and empowering surfers to become their best. We
          enhance your surfing skills and help you develop professional qualities like motivation,
          teamwork, and responsibility.
        </p>
        <Link href={"/academy"} className={`${!homePageView}`}>
          <Button label="About us" variant="primary">
            About us
          </Button>
        </Link>
      </div>
    </ContainerContent>
  )
}

export default AboutUs
