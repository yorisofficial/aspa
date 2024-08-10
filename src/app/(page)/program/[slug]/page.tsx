"use client";
import React from "react";

// Get data needs
import { AspaProgram } from "@/app/Components/home/Hero/HeroSection2";
import { RegulationService } from "@/app/lib/RegulationService";

import BackButton from "@/app/Components/BackButton";
import ContainerContent from "@/app/Components/Container";
import { CheckCircle, User, UsersFour } from "@phosphor-icons/react";
import BottomNavigation from "@/app/Components/BottomNavigation";
import Link from "next/link";
import { motion } from "framer-motion";
import BtnDownloadFile from "@/app/Components/BtnDownloadFile";
import GaleryPreviewProgram from "@/app/Components/home/Program/Program/Basic Program/GaleryPreviewProgram";

const DetailsProgramPage = ({ params }: { params: { slug: string } }) => {
  const data = AspaProgram.find((item) => item.id.toString() === params.slug);
  console.log();

  return (
    <ContainerContent
      url=""
      className="relative mx-auto min-h-screen w-full max-w-5xl"
    >
      <BackButton url="" back={true}>
        Back to before
      </BackButton>
      <GaleryPreviewProgram
        firstImage={data?.image[0].src || "/assets/team/ASPA.webp"}
        dataImage={data?.image ?? []}
      />
      <div className="content mt-8 grid grid-cols-1 gap-6 md:grid-cols-2">
        <div className="space-y-6">
          <h1 className="text-3xl font-bold uppercase">{data?.title}</h1>
          <p className="text-sm font-light">{data?.description}</p>
          <div className="session-detail flex flex-col gap-4">
            <h1 className="text-2xl font-bold capitalize">
              {data?.title.replace("program", "")} Options
            </h1>
            {data?.session.map((item, index) => (
              <div key={index} className="flex items-center gap-2">
                <span className="flex items-center gap-4 capitalize">
                  {item.title === "private" ? (
                    <User size={24} />
                  ) : (
                    <UsersFour size={24} />
                  )}{" "}
                  {item.title} Session
                </span>
              </div>
            ))}
          </div>
          <div className="session-detail flex flex-col gap-4">
            <h1 className="text-2xl font-bold capitalize">Get benefit</h1>
            <div className="flex flex-col gap-6">
              {data?.benefit.map((item, index) => (
                <div key={item.id} className="flex items-start gap-2">
                  <div className="h-full text-brand">
                    <CheckCircle size={24} weight="bold" />
                  </div>
                  <div className="flex flex-col gap-2">
                    <h1 className="flex items-center gap-4 font-semibold text-brand">
                      {item.title}
                    </h1>
                    <p className="text-sm font-light">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className="right-side hidden items-start justify-center md:flex">
          <div className="w-full flex-col rounded-xl border border-bordersolid bg-white p-8 drop-shadow-xl md:flex md:max-w-[300px] xl:max-w-[400px]">
            <span className="font-semibold uppercase">book the program</span>
            <h1 className="text-3xl font-bold capitalize text-brand">
              {data?.title}
            </h1>
            <p className="mt-3 text-sm font-light md:text-base">
              {data?.promoteBook}
            </p>
            <div className="cta-button mt-3 flex flex-col gap-2">
              <Link
                href={`/program/${data?.id}/booking`}
                className="inline-block w-full"
              >
                <motion.button
                  initial={{ scale: 1 }}
                  whileTap={{ scale: 0.9 }}
                  transition={{ type: "spring", stiffness: 400, damping: 10 }}
                  exit={{ scale: 1 }}
                  className="w-full rounded-lg bg-black px-6 py-3 text-center font-medium text-white"
                >
                  Book now
                </motion.button>
              </Link>
              <BtnDownloadFile
                title={RegulationService[0].title}
                src={RegulationService[0].src}
                docName={RegulationService[0].docName}
              />
            </div>
          </div>
        </div>
      </div>
      <BottomNavigation data={data?.id} />
    </ContainerContent>
  );
};

export default DetailsProgramPage;
