"use client";
import Image from "next/image";
import React from "react";
import ContainerContent from "../../Container";
import { motion } from "framer-motion";

export const Service = [
  {
    id: 1,
    title: "SURF COACHING",
    desc: "Surf Coaching sessions with our best coaches.",
    pathImage: "/assets/icon/camera.svg",
  },
  {
    id: 2,
    title: "VIDEO ANALYSIS",
    desc: "Video analysis sessions with our best coaches.",
    pathImage: "/assets/icon/video.svg",
  },
  {
    id: 3,
    title: "PHYSICAL TRAININGS",
    desc: "Overall body Strength, Endurance, & Mobility",
    pathImage: "/assets/icon/human.svg",
  },
  {
    id: 4,
    title: "COMPETITION ",
    desc: "Judging criteria, Heat Strategy, & Support during competition",
    pathImage: "/assets/icon/reward.svg",
  },
  {
    id: 5,
    title: "ACCOMMODATION",
    desc: "Enjoy Mamaka's facilities: Room, Pool, Gym & More",
    pathImage: "/assets/icon/bad.svg",
  },
  {
    id: 6,
    title: "MEALS",
    desc: "Start your day with a hearty breakfast, have a delightful lunch, and end with a satisfying dinner.",
    pathImage: "/assets/icon/food.svg",
  },
];

const OurService = ({ title }: { title: string }) => {
  return (
    <ContainerContent
      url="our-service"
      className="border-buttom flex h-full w-full flex-col gap-8 py-8"
    >
      <div className="w-full">
        <h1 className="text-xl font-black text-brand">{title}</h1>
      </div>
      <div className="list-service grid h-full w-full grid-cols-2 gap-4 xl:grid-cols-3 xl:gap-8">
        {Service.map((item) => (
          <motion.div
            key={item.id}
            initial={{ scale: 0.6 }}
            viewport={{ once: true }}
            whileInView={{ scale: 1 }}
            transition={{
              duration: 0.5,
              ease: "easeInOut",
              delay: 0.1 * item.id,
            }}
            className="item-service group flex w-full cursor-pointer flex-col gap-2 rounded-xl border-2 border-bordersolid bg-white p-2 transition-colors duration-500 ease-out hover:rounded-xl hover:bg-primary md:p-4"
          >
            <motion.div
              initial={{ scale: 0.8 }}
              animate={{ scale: 1 }}
              transition={{
                duration: 0.5,
                ease: "easeInOut",
                delay: 0.2 * item.id,
              }}
              className="icon-service w-fit rounded-md bg-primary p-2 duration-500 group-hover:text-black group-hover:invert"
            >
              <Image
                src={item.pathImage}
                alt={item.title}
                width={500}
                height={500}
                className="h-6 w-6 group-hover:-rotate-12"
              />
            </motion.div>
            <div className="title-service min-h-[100px] space-y-2 group-hover:invert xl:space-y-4">
              <h1 className="text-sm font-black md:text-base">{item.title}</h1>
              <p className="text-xs font-normal sm:text-sm">{item.desc}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </ContainerContent>
  );
};

export default OurService;
