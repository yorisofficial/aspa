"use client";
import Image from "next/image";
import Link from "next/link";
import React, { Suspense } from "react";
import IconArrowDetails from "../../IconArrowDetails";
import { motion } from "framer-motion";
import {
  InstagramLogo,
  MagnifyingGlass,
  MagnifyingGlassPlus,
} from "@phosphor-icons/react";

interface Props {
  id: number;
  full_name: string;
  nickname: string;
  title: string;
  location?: string;
  profile: string;
  user_instagram: string;
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
      <div className="grid grid-cols-1 gap-4 md:grid-cols-4 md:gap-5">
        {data.map((item) => (
          <Suspense key={item.id}>
            <div className="item-core h-full w-full">
              <Link
                href={`/team/${categories}/${item.full_name.toLowerCase().replaceAll(" ", "-")}`}
                className="group h-full w-full"
              >
                <div className="relative h-[300px] w-full overflow-hidden rounded-lg">
                  <div className="invisible absolute left-1/2 top-1/2 z-30 flex h-fit w-fit -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-black/20 p-1 text-white backdrop-blur-md group-hover:visible">
                    <MagnifyingGlassPlus size={24} className="h-6 w-6" />
                  </div>
                  <Image
                    src={item.profile}
                    alt="prifile-picture"
                    width={500}
                    height={500}
                    className="h-[300px] w-full rounded-lg object-cover duration-300 group-hover:scale-110"
                  />
                </div>
              </Link>
              <div className="flex flex-col items-center justify-center py-2">
                <h1 className="flex flex-col items-start justify-start text-base font-semibold md:text-lg">
                  {item.full_name}
                </h1>
                <small className="uppercase">{item.title}</small>
                <div className="mt-2 flex w-full items-center justify-center">
                  <Link
                    target="_blank"
                    href={item.user_instagram}
                    aria-label={`Instagram of ${item.full_name}`}
                  >
                    <InstagramLogo size={24} className="h-6 w-6" />
                  </Link>
                </div>
              </div>
            </div>
          </Suspense>
        ))}
      </div>
    </>
  );
};

export default ListUsers;
