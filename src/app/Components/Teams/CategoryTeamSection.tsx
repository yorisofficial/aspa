"use client";

import { AllTeams } from "@/app/lib/primary/AllTeams";
import { InstagramLogo } from "@phosphor-icons/react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React from "react";

const CategoryTeamSection = ({
  sectionName,
  titleSection,
  className,
  categories,
}: {
  sectionName: string;
  titleSection: string;
  categories: string;
  className?: string;
}) => {
  const router = useRouter();
  const ListTeams = (data: string) =>
    AllTeams.filter(
      (team) => team.category === data || team.category.includes(data),
    );
  return (
    <div>
      <div className={`${sectionName} py-8`}>
        <h1 className="text-4xl font-light uppercase">{titleSection}</h1>
        <div className="list_core mt-4 grid grid-cols-2 gap-5 md:grid-cols-3 xl:grid-cols-4">
          {ListTeams(categories)
            .filter((team) => team.confirm === true)
            .map((item) => (
              <div key={item.id} className="">
                <div className="group w-full">
                  <button
                    type="button"
                    onClick={() =>
                      router.push(`/team/${item.slug}`, { scroll: false })
                    }
                    className="profile_images flex h-[200px] w-full overflow-hidden md:h-[300px]"
                  >
                    <Image
                      src={item.profile}
                      alt={`ASPA Team ${item.full_name} `}
                      priority
                      width={1500}
                      height={800}
                      className="aspect-3/4 h-[200px] w-full object-cover duration-500 group-hover:scale-110 md:h-[300px]"
                    />
                  </button>
                  <div className="details_profile_team mt-2 flex w-full flex-col items-center justify-center">
                    <h2 className="text-center text-xl font-normal uppercase md:text-2xl">
                      {item.full_name}
                    </h2>
                    <Link
                      target="_blank"
                      href={item.user_instagram}
                      aria-label={`Follow Instagram from ${item.full_name}`}
                      className="p-1 duration-500 hover:scale-110"
                    >
                      <InstagramLogo size={24} />
                    </Link>
                  </div>
                </div>
              </div>
            ))}
        </div>
      </div>
    </div>
  );
};

export default CategoryTeamSection;
