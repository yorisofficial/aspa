"use client"
import {InstagramLogo, TwitterLogo, YoutubeLogo} from "@phosphor-icons/react"
import Link from "next/link"
import React from "react"

const SocialComponents = () => {
  const social = [
    {
      id: 1,
      title: "ASPA youtube",
      url: "https://youtube.com",
      icon: <YoutubeLogo size={32} />,
      iconFill: <YoutubeLogo weight="fill" size={32} />,
    },
    {
      id: 2,
      title: "ASPA instagram",
      url: "https://youtube.com",
      icon: <InstagramLogo size={32} />,
      iconFill: <InstagramLogo weight="fill" size={32} />,
    },
    {
      id: 3,
      title: "ASPA twitter",
      url: "https://youtube.com",
      icon: <TwitterLogo size={32} />,
      iconFill: <TwitterLogo weight="fill" size={32} />,
    },
  ]
  return (
    <>
      <div className="flex gap-4  items-center mt-4">
        {social.map((item) => (
          <Link
            href={item.url}
            key={item.id}
            aria-label={item.title}
            className="h-12 group hover:scale-110 ease-in-out transition-all duration-500 w-12 flex justify-center items-center text-brand bg-white rounded-full"
          >
            <span className="group-hover:hidden inline-block">{item.icon}</span>
            <span className="hidden group-hover:inline-block">{item.iconFill}</span>
          </Link>
        ))}
      </div>
    </>
  )
}

export default SocialComponents
