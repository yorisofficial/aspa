import Image from "next/image"
import Link from "next/link"
import React from "react"

interface Props {
  id: number
  full_name: string
  nickname: string
  title: string
  location?: string
  profile: string
}

const ListUsers = ({data, categories}: {data: Props[]; categories: string}) => {
  return (
    <>
      <div className="flex w-full flex-col gap-4">
        {data.map((item) => (
          <Link
            key={item.id}
            href={`/team/${categories}/${item.full_name.toLowerCase().replaceAll(" ", "-")}`}
          >
            <div className="item-core flex items-start justify-start w-fit gap-5 rounded-xl border border-bordersolid bg-white p-4 drop-shadow-xl md:w-[330px] xl:max-w-[400px]">
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
                  <span className="text-xs font-light">full name</span>
                  {item.full_name}
                </h1>
                <h1 className="flex flex-col items-start justify-start text-base font-semibold">
                  <span className="text-xs font-light">title</span>
                  {item.title}
                </h1>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </>
  )
}

export default ListUsers
