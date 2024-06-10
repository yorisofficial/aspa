"use client"
import Link from "next/link"
import React from "react"
import IconArrowDetails from "../../IconArrowDetails"
import Image from "next/image"

const ItemTeam = ({data, categories}: {data: any; categories: string}) => {
  const item = data

  return (
    <>
      <Link
        key={item.id}
        href={`/team/${categories}/${item.full_name.toLowerCase().replaceAll(" ", "-")}`}
        className="xl:w-fit w-full relative"
      >
        <IconArrowDetails />
        <div className="item-core flex items-start justify-start gap-5 rounded-xl border py-6 px-4 md:w-[330px] w-full xl:max-w-[400px]">
          <div className="w-fit rounded-full ring-4 ring-brand">
            <Image
              src={item.profile}
              alt="prifile-picture"
              width={500}
              height={500}
              className="h-[100px] w-[100px] rounded-full object-cover"
            />
          </div>
          <div className="">
            <h1 className="flex flex-col items-start justify-start text-base font-semibold">
              <span className="text-xs font-light">Full name</span>
              {item.full_name}
            </h1>
            <h1 className="flex flex-col items-start capitalize justify-start text-base font-semibold">
              <span className="text-xs font-light">Title</span>
              {item.title}
            </h1>
            {categories.includes("coach") ? (
              <h1 className="flex flex-col items-start capitalize justify-start text-base font-semibold">
                <span className="text-xs font-light">Location</span>
                {item?.location}
              </h1>
            ) : null}
          </div>
        </div>
      </Link>
    </>
  )
}

export default ItemTeam
