"use client";

import { AllTeams } from "@/app/lib/primary/AllTeams";
import { InstagramLogo, Trophy, X } from "@phosphor-icons/react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";

const PopUpTeam = ({ id }: { id: string }) => {
  const ref = React.createRef<HTMLDivElement>();
  const [isShow, setShow] = useState(id);
  const router = useRouter();

  const getData = AllTeams.find((team) => team.id === id);
  const item = getData;

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (ref.current && !ref.current.contains(event.target as Node)) {
        router.push("/team", { scroll: false });
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [ref, router]);

  return (
    <>
      {isShow && item && (
        <>
          <div className="popup_content fixed left-0 top-0 z-50 h-fit min-h-screen w-full bg-black/50 p-4 backdrop-blur-lg md:h-screen md:p-8">
            <div className="sticky left-0 top-0 flex h-fit w-full items-end justify-end">
              <button
                type="button"
                aria-label="close popup"
                onClick={() => router.push("/team", { scroll: false })}
                className="flex h-fit w-fit items-end justify-end bg-white p-2"
              >
                <X size={24} className="text-black" />
              </button>
            </div>
            <div
              ref={ref}
              className="container_details mt-4 flex h-[80vh] flex-col gap-4 overflow-y-auto bg-white p-4 md:flex-row md:gap-5 md:p-8"
            >
              <div className="content h-fit w-full md:order-last md:h-[300px] md:w-1/4">
                <Image
                  src={item.profile}
                  alt="profile"
                  width={2400}
                  height={800}
                  priority
                  className="h-[300px] w-full object-cover md:h-[400px]"
                />
              </div>
              <div className="content flex h-fit flex-col items-start justify-start md:w-3/4">
                <div className="Intro_Achievement">
                  <div className="profile_card">
                    <h2 className="full_name text-3xl font-bold uppercase">
                      {item.full_name}
                    </h2>
                    <span className="job_title text-sm uppercase">
                      {item.job_title}
                    </span>
                  </div>
                  <div className="introduction mt-4">
                    <p className="w-full text-justify font-light">
                      {item.quotes}
                    </p>
                  </div>
                </div>
                <div className="Achievement_section mt-8">
                  <h2 className="text-base font-bold uppercase">Achievement</h2>
                  <div className="list_achievement mt-4">
                    {item.achievement.map((item, index) => (
                      <div
                        key={index}
                        className="flex items-start gap-2 md:items-center"
                      >
                        <Trophy size={24} className="flex-shrink-0" />
                        {item.title}
                      </div>
                    ))}
                  </div>
                </div>
                <div className="Socialmedia_section mt-8">
                  <h2 className="text-base font-bold uppercase">
                    Get in touch
                  </h2>
                  <div className="social_media mt-2">
                    <Link
                      target="_blank"
                      href={item.user_instagram}
                      className="flex items-center gap-2"
                    >
                      <InstagramLogo size={24} />
                      {item.user_instagram.replaceAll(
                        "https://www.instagram.com/",
                        "",
                      )}
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </>
      )}
    </>
  );
};

export default PopUpTeam;
