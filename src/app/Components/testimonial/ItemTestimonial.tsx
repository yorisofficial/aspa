"use client"
import {Quotes} from "@phosphor-icons/react"
import Image from "next/image"
import React from "react"

interface Props {
  id: number
  img_profile: string
  full_name: string
  quotes: string
}

const ItemTestimonial = ({data}: {data: Props}) => {
  console.log()

  return (
    <div>
      <div className="item-slider p-8 space-y-4 drop-shadow-md bg-white rounded-xl border border-solid relative">
        <div className="quotes absolute top-3 text-primary right-3">
          <Quotes size={32} weight="fill" />
        </div>
        <div className="w-[100px] h-fit">
          <Image
            src={"/brand/ASPA-dark.svg"}
            alt="ASPA"
            width={500}
            height={500}
            className={"w-10 h-fit"}
          />
        </div>
        <div className="">
          <p className={`text-base font-light text-start line-clamp-4`}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit, ab dolorum
            deleniti provident esse labore est expedita rem modi eum perferendis aliquam fugit eaque
            optio nulla cupiditate nihil a non asperiores ratione.
          </p>
        </div>
        <div className="profile-details flex w-full gap-2 items-start justify-start">
          <div className="w-10 flex-shrink-0 bg-brand h-10 rounded-full flex justify-center items-center">
            <Image
              src={data.img_profile}
              alt="ASPA"
              width={500}
              height={500}
              className="w-10 h-fit rounded-full"
            />
          </div>
          <div className="text-start">
            <p className="text-base font-light">Andi</p>
            <p className="font-black">#1 WSL Asia Ranking 2021</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ItemTestimonial
