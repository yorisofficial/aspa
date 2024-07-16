"use client";
import Image from "next/image";
import React from "react";
import ContainerContent from "../../Container";
import { motion } from "framer-motion";
import ListService from "../../ListService";

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
      <ListService data={Service} />
    </ContainerContent>
  );
};

export default OurService;
