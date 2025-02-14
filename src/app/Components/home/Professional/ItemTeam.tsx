"use client";
import Link from "next/link";
import React from "react";
import Image from "next/image";
import { InstagramLogo, MagnifyingGlassPlus } from "@phosphor-icons/react";
import { motion } from "framer-motion";

const ItemTeam = ({
  data,
  categories,
  index,
  indexOf,
}: {
  data: any;
  categories: string;
  index: number;
  indexOf: number;
}) => {
  const item = data;

  return (
    <>
      <motion.div
        initial={{ scale: 0.8, opacity: 0 }}
        whileInView={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0.8, opacity: 0 }}
        transition={{ duration: 0.3, delay: indexOf * 0.1 }}
        viewport={{ once: true }}
        className="inline-block h-full w-full"
      >
        <div className="item-core">
          <div
            key={item.id}
            // href={`/team/${categories}/${item.full_name.toLowerCase().replaceAll(" ", "-")}`}
            className="group"
          >
            <div className="relative h-[200px] w-full overflow-hidden rounded-lg">
              {/* <div className="invisible absolute left-1/2 top-1/2 z-30 flex h-fit w-fit -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-black/20 p-1 text-white backdrop-blur-md group-hover:visible">
                <MagnifyingGlassPlus size={24} className="h-6 w-6" />
              </div> */}
              <Image
                src={item.profile || ""}
                alt="prifile-picture"
                width={500}
                height={500}
                className="h-[200px] w-full rounded-lg object-cover duration-300 group-hover:scale-110"
              />
            </div>
          </div>
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
      </motion.div>
    </>
  );
};

export default ItemTeam;
