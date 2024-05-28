"use client";
import { ArrowUpRight, Certificate } from "@phosphor-icons/react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import React, { Suspense } from "react";
interface Props {
  id: number;
  full_name: string;
  nickname: string;
  Age: number;
  title: string;
  certificated: boolean;
  experience: string;
  isa: boolean;
  location: string;
  profile: string;
  img: string;
}

const ListTeam = ({
  data,
  categories,
}: {
  data: Props[];
  categories: string;
}) => {
  const dataProps = data;
  const router = useRouter();

  const handleDetails = (url: string) => {
    router.push(
      `/team/${categories.replaceAll(" ", "-").toLocaleLowerCase()}/${url}`,
    );
  };

  return (
    <div className="grid h-full w-full grid-cols-2 gap-4 xl:grid-cols-3">
      {dataProps.map((item) => (
        <Suspense key={item.id} fallback={"...loading"}>
          <div className="item-core flex max-w-[330px] flex-col items-start justify-start gap-5 rounded-xl border border-bordersolid bg-white p-4 drop-shadow-xl">
            <div className="flex flex-col items-start gap-4 md:flex-row">
              <div className="header-list relative h-fit w-fit rounded-full ring-4 ring-brand">
                <Image
                  src={"https://via.placeholder.com/500x500"}
                  alt="prifile-picture"
                  width={500}
                  height={500}
                  className="h-24 max-h-[100px] w-24 max-w-[100px] rounded-full object-cover"
                />
                {item?.isa ? (
                  <div className="absolute left-1/2 top-full flex -translate-x-1/2 -translate-y-1/2 items-center gap-2 rounded-full bg-brand p-2 text-white">
                    <Certificate size={20} />
                    <span className="text-sm">ISA</span>
                  </div>
                ) : null}
              </div>
              <div className="body-list mt-4 flex flex-col gap-2 xl:mt-0">
                <h1 className="flex flex-col items-start justify-start text-base font-semibold capitalize">
                  <span className="text-xs font-light">
                    {item.nickname === "" ? "Full name" : "Nickname"}
                  </span>
                  {item.nickname === "" ? item.full_name : item.nickname}
                </h1>
                <h1 className="flex flex-col items-start justify-start text-base font-semibold capitalize">
                  <span className="text-xs font-light">title</span>
                  {item.title}
                </h1>
                <h1 className="flex flex-col items-start justify-start text-base font-semibold capitalize">
                  <span className="text-xs font-light">location near</span>
                  {item.location === "" ? "ASPA" : item.location}
                </h1>
              </div>
            </div>
            <div className="flex w-full items-center justify-start">
              <button
                className="flex items-center text-start text-xs underline underline-offset-4"
                onClick={() =>
                  handleDetails(
                    item.full_name.replaceAll(" ", "-").toLocaleLowerCase(),
                  )
                }
              >
                Details{" "}
                {item.nickname === ""
                  ? item.full_name.split(" ")[1]
                  : item.nickname}
                <ArrowUpRight />
              </button>
            </div>
          </div>
        </Suspense>
      ))}
    </div>
  );
};

export default ListTeam;
