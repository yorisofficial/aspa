"use client";
import {
  FacebookLogo,
  InstagramLogo,
  YoutubeLogo,
} from "@phosphor-icons/react";
import Link from "next/link";
import React from "react";
import { motion } from "framer-motion";

export const DataSocial = [
  {
    id: 1,
    platform: "Facebook",
    title: "ASPA facebook",
    username: "aspa_surfacademy",
    url: "https://www.facebook.com/profile.php?id=61566494376055",
    icon: <FacebookLogo size={28} />,
    iconFill: <FacebookLogo weight="fill" size={28} />,
  },
  {
    id: 2,
    platform: "Instagram",
    title: "ASPA instagram",
    username: "aspa_surfacademy",
    url: "https://instagram.com/aspa_surfacademy",
    icon: <InstagramLogo size={28} />,
    iconFill: <InstagramLogo weight="fill" size={28} />,
  },
  {
    id: 2,
    platform: "Youtube",
    title: "ASPA Youtube",
    username: "AsianSurfPerformanceAcademy",
    url: "http://www.youtube.com/@AsianSurfPerformanceAcademy",
    icon: <YoutubeLogo size={28} />,
    iconFill: <YoutubeLogo weight="fill" size={28} />,
  },
];

const DataSocialComponents = () => {
  return (
    <>
      <div className="mt-2 flex flex-col items-start gap-4">
        {DataSocial.map((item) => (
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.3, delay: item.id * 0.1 }}
            viewport={{ once: true }}
            key={item.id}
          >
            <Link
              target="_blank"
              href={item.url}
              aria-label={item.title}
              className="group flex items-center gap-2"
            >
              <span className="inline-block group-hover:hidden">
                {item.icon}
              </span>
              <span className="hidden group-hover:inline-block">
                {item.iconFill}
              </span>
              <h1 className="">{item.platform}</h1>
            </Link>
          </motion.div>
        ))}
      </div>
    </>
  );
};

export default DataSocialComponents;
