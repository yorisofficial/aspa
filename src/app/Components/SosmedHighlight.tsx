"use client";

import Image from "next/image";
import Link from "next/link";
import React from "react";
import { motion } from "framer-motion";

interface PropsSocialMedia {
  id: number;
  platform: string;
  title: string;
  username: string;
  url: string;
  icon: any;
  iconFill: any;
}

export default function SosmedHighlight({
  data,
}: {
  data: PropsSocialMedia[];
}) {
  return (
    <div className="my-8 h-[400px] w-full">
      <div className="relative flex h-full w-full">
        <div className="h-[250px] w-full bg-brand md:h-[400px] md:w-[25%]"></div>
        <div className="relative h-full w-full md:w-3/4">
          <div className="absolute left-0 top-0 h-full w-full bg-gradient-to-r from-brand to-brand/0"></div>
          <Image
            src={"/assets/projects/project_thumbnail_2.jpg"}
            alt="social media background images"
            width={2400}
            height={1400}
            priority
            quality={100}
            className="h-[400px] w-full object-cover object-center"
          />
        </div>
        <div className="social-media absolute left-1/2 top-1/2 flex -translate-x-1/2 -translate-y-1/2 flex-col items-center justify-center text-white">
          <h1 className="whitespace-nowrap text-xl font-bold uppercase md:text-2xl">
            follow our social media
          </h1>
          <ul className="mt-4 flex w-full flex-col items-start justify-center gap-4 md:flex-row ">
            {data.map((item) => (
              <motion.li
                initial={{ scale: 0.8, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.8, opacity: 0 }}
                transition={{ duration: 0.3, delay: item.id * 0.1 }}
                viewport={{ once: true }}
                key={item.id}
              >
                <Link
                  href={item.url}
                  target="_blank"
                  className="flex items-center gap-2"
                >
                  {item.icon}
                  {item.title}
                </Link>
              </motion.li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
