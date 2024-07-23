"use client";
import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";

interface Props {
  id: number;
  title: string;
  desc: string;
  pathImage: string;
}

const ItemService = ({ dataItem }: { dataItem: Props }) => {
  const item = dataItem;
  return (
    <div className="item-service group flex w-full cursor-pointer flex-col gap-2 rounded-xl border-2 border-bordersolid bg-white p-2 transition-colors duration-500 ease-out hover:rounded-xl hover:bg-primary md:p-4">
      <div className="icon-service w-fit rounded-md bg-primary p-2 duration-500 group-hover:text-black group-hover:invert">
        <Image
          src={item.pathImage}
          alt={item.title}
          width={500}
          height={500}
          className="h-6 w-6 group-hover:-rotate-12"
        />
      </div>
      <div className="title-service min-h-[100px] space-y-2 group-hover:invert xl:space-y-4">
        <h1 className="text-sm font-black md:text-base">{item.title}</h1>
        <p className="text-xs font-normal sm:text-sm">{item.desc}</p>
      </div>
    </div>
  );
};

export default ItemService;
