"use client";
import { InstagramLogo, TwitterLogo, YoutubeLogo } from "@phosphor-icons/react";
import Link from "next/link";
import React from "react";

const SocialComponents = () => {
  const social = [
    // {
    //   id: 1,
    //   title: "ASPA youtube",
    //   url: "https://youtube.com",
    //   icon: <YoutubeLogo size={32} />,
    //   iconFill: <YoutubeLogo weight="fill" size={32} />,
    // },
    {
      id: 2,
      title: "ASPA instagram",
      username: "aspa_surfacademy",
      url: "https://instagram.com/aspa_surfacademy",
      icon: <InstagramLogo size={28} />,
      iconFill: <InstagramLogo weight="fill" size={28} />,
    },
    // {
    //   id: 3,
    //   title: "ASPA twitter",
    //   url: "https://youtube.com",
    //   icon: <TwitterLogo size={32} />,
    //   iconFill: <TwitterLogo weight="fill" size={32} />,
    // },
  ];
  return (
    <>
      <div className="flex  items-center gap-4">
        {social.map((item) => (
          <>
            <Link
              target="_blank"
              href={item.url}
              key={item.id}
              aria-label={item.title}
              className="group flex items-center gap-2"
            >
              <span className="inline-block group-hover:hidden">
                {item.icon}
              </span>
              <span className="hidden group-hover:inline-block">
                {item.iconFill}
              </span>
              <h1 className="">{item.username}</h1>
            </Link>
          </>
        ))}
      </div>
    </>
  );
};

export default SocialComponents;
