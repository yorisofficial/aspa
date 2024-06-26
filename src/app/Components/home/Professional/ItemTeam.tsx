"use client";
import Link from "next/link";
import React from "react";
import IconArrowDetails from "../../IconArrowDetails";
import Image from "next/image";
import { motion } from "framer-motion";

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
    <motion.div
      initial={{ y: "100%", opacity: 0 }}
      whileInView={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.2, delay: index * 0.1 }}
      viewport={{ once: true }}
      className="group relative w-full rounded-md border-2 border-bordersolid bg-white transition-all duration-500 ease-in-out hover:rounded-xl hover:drop-shadow-xl xl:w-fit"
    >
      <Link
        key={item.id}
        href={`/team/${categories}/${item.full_name.toLowerCase().replaceAll(" ", "-")}`}
        className="h-full w-full"
      >
        <IconArrowDetails className="transition-all duration-500 ease-in group-hover:-translate-y-1 group-hover:translate-x-1" />
        <div className="item-core peer flex w-full items-start justify-start gap-5 rounded-xl px-4 py-6 md:w-[330px] xl:max-w-[400px]">
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
            {categories.includes("coach") ? (
              <h1 className="flex flex-col items-start justify-start text-base font-semibold capitalize">
                <span className="text-xs font-light">Location</span>
                {item?.location}
              </h1>
            ) : null}
          </div>
        </div>
      </Link>
    </motion.div>
  );
};

export default ItemTeam;
