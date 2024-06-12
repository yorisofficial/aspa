"use client"
import Link from "next/link"
import React, {useState} from "react"
import Button from "./Button"
import {EnvelopeSimple, Info} from "@phosphor-icons/react"
import Image from "next/image"

const UpcamingContainer = ({
  children,
  content,
  title,
}: {
  children: React.ReactNode
  content: boolean
  title?: string
}) => {
  const [isContent, setContent] = useState(content)

  return (
    <>
      {isContent && (
        <div className="h-screen w-full px-4 md:px-10 xl:px-0 bg-brand text-white">
          <div className="w-full flex-col h-full gap-8 flex justify-center items-center">
            <div className="info-text">
              <h1 className="font-black text-3xl">COMING SOON!</h1>
            </div>
            <div className="brand-aspa">
              <Image
                src={"/brand/ASPA-white.svg"}
                width={500}
                height={500}
                alt="ASPA Logo"
                className="h-full object-cover xl:w-full"
              />
            </div>
            <div className="text-center gap-4 flex justify-center items-center flex-col">
              <h1 className="text-2xl font-black">Asian Surf Performance Academy</h1>
              <p className="text-base font-light xl:w-1/2">
                The Asian Surf Performance Academy (ASPA) is where surfers reach their highest
                potential. Located in Bali, we focus on supporting and empowering surfers to become
                their best. We enhance your surfing skills and help you develop professional
                qualities like motivation, teamwork, and responsibility
              </p>
            </div>
            <div className="contact-us gap-2 flex flex-col justify-center items-center">
              <h1 className="font-normal text-base">To get more info connect with us!</h1>
              <span className="flex text-sm font-light gap-2 items-center">
                <EnvelopeSimple size={24} />
                info@asiansurfacademy.com
              </span>
            </div>
          </div>
        </div>
      )}
      {!isContent && <div className="w-full h-full">{children}</div>}
    </>
  )
}

export default UpcamingContainer
