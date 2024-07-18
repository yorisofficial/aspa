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
];

const OurService = ({ title }: { title: string }) => {
  return (
    <ContainerContent
      url="our-service"
      className="border-buttom flex h-full min-h-[60vh] w-full flex-col items-center justify-center gap-8 py-8"
    >
      <div className="w-full">
        <h1 className="text-xl font-black text-brand">{title}</h1>
      </div>
      <ListService data={Service} />
    </ContainerContent>
  );
};

export default OurService;
