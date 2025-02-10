"use client";
import Link from "next/link";
import React from "react";
import Image from "next/image";
import { InstagramLogo } from "@phosphor-icons/react";

const ItemTeam = ({
  data,
  categories,
  index,
}: {
  data: any;
  categories: string;
  index: number;
}) => {
  const item = data;

  return (
    <>
      <div className="inline-block h-full w-full">
        <div className="item-core">
          <Link
            key={item.id}
            href={`/team/${categories}/${item.full_name.toLowerCase().replaceAll(" ", "-")}`}
            className="group"
          >
            <div className="h-[200px] w-full overflow-hidden rounded-lg">
              <Image
                src={item.profile || ""}
                alt="prifile-picture"
                width={500}
                height={500}
                className="h-[200px] w-full rounded-lg object-cover duration-300 group-hover:scale-110"
              />
            </div>
          </Link>
          <div className="flex w-full flex-col items-center justify-center pt-2">
            <h1 className="flex flex-col items-start justify-start text-base font-bold uppercase">
              {item.full_name}
            </h1>
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
      </div>
    </>
  );
};

export default ItemTeam;
