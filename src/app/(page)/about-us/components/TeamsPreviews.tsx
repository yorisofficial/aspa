"use client";

import { AllTeams } from "@/app/lib/primary/AllTeams";
import { InstagramLogo } from "@phosphor-icons/react";
import Image from "next/image";
import Link from "next/link";
import { Suspense } from "react";

import React from "react";

export default function TeamsPreviews() {
  return (
    <>
      <div className="our-teams mx-auto mt-4 h-fit w-full max-w-6xl px-4 md:mt-6 md:px-10 md:text-center xl:mt-8 xl:px-0">
        <h2 className="big-heading text-2xl uppercase md:text-center md:text-4xl">
          meet all our team members
        </h2>
        <div className="content-list h-fit w-full">
          <div className="mt-4 grid h-fit w-full grid-cols-2 gap-4 md:grid-cols-3 xl:grid-cols-4">
            <Suspense
              fallback={
                <div className="h-[300px] w-full overflow-hidden">
                  Loading...
                </div>
              }
            >
              {AllTeams.slice(0, 8).map((item) => (
                <div key={item.id} className="group">
                  <div className="img-profile h-[200px] w-full overflow-hidden rounded-lg">
                    <Image
                      src={item.profile}
                      alt="profile"
                      width={500}
                      height={500}
                      priority
                      className="h-full w-full rounded-lg object-cover duration-500 group-hover:scale-110"
                    />
                  </div>
                  <div className="body-data mt-2 flex flex-col items-center justify-center">
                    <h1 className="text-center text-base font-bold uppercase md:text-xl">
                      {item.full_name}
                    </h1>
                    <span className="text-center text-sm font-light">
                      {item.title}
                    </span>
                    <Link
                      target="_blank"
                      aria-label={`Instagram ${item.full_name}`}
                      href={item.user_instagram}
                      className="mt-2 block"
                    >
                      <InstagramLogo size={24} />
                    </Link>
                  </div>
                </div>
              ))}
            </Suspense>
          </div>
          <div className="mt-4 flex w-full items-center justify-center">
            <Link
              href="/team"
              aria-label="See more teams"
              className="flex items-center gap-2 rounded bg-black px-4 py-2 text-white"
            >
              See more teams
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
