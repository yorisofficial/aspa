"use client";

import React from "react";
import { DataSocial } from "./SocialComponents";
import Link from "next/link";

export default function SocialList() {
  return (
    <>
      <div className="social-media mt-24 flex w-full flex-col items-center justify-center text-white">
        <h1 className="whitespace-nowrap text-base font-bold uppercase md:text-xl">
          follow our social media
        </h1>
        <ul className="mt-4 flex w-full flex-col items-start justify-center gap-4 md:flex-row ">
          {DataSocial.map((item) => (
            <li key={item.id}>
              <Link
                href={item.url}
                target="_blank"
                className="flex items-center gap-2"
              >
                {item.icon}
                {item.title}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}
