"use client";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import IconArrowDetails from "../../IconArrowDetails";

interface Props {
  id: number;
  full_name: string;
  nickname: string;
  title: string;
  location?: string;
  profile: string;
}

const ListUsers = ({
  data,
  categories,
}: {
  data: Props[];
  categories: string;
}) => {
  return (
    <>
      <div className="flex w-full flex-col gap-4">
        {data.map((item) => (
          <Link
            key={item.id}
            href={`/team/${categories}/${item.full_name.toLowerCase().replaceAll(" ", "-")}`}
            className="group relative w-full rounded-md border-2 border-bordersolid bg-white duration-500 ease-in-out hover:rounded-xl hover:drop-shadow-xl xl:w-fit"
          >
            <IconArrowDetails className="transition-all duration-500 ease-in group-hover:-translate-y-1 group-hover:translate-x-1" />
            <div className="item-core flex w-full items-start justify-start gap-5 rounded-xl px-4 py-6 md:w-[330px] xl:max-w-[400px]">
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
                <h1 className="flex flex-col items-start justify-start text-base font-semibold capitalize">
                  <span className="text-xs font-light">Title</span>
                  {item.title}
                </h1>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </>
  );
};

export default ListUsers;
