"use client";
import React from "react";

// Get data needs
import { AspaProgram } from "@/app/Components/home/Hero/HeroSection2";
import { RegulationService } from "@/app/lib/RegulationService";

import BackButton from "@/app/Components/BackButton";
import ContainerContent from "@/app/Components/Container";
import { CheckCircle, Headset, User, UsersFour } from "@phosphor-icons/react";
import BottomNavigation from "@/app/Components/BottomNavigation";
import Link from "next/link";
import { motion } from "framer-motion";
import BtnDownloadFile from "@/app/Components/BtnDownloadFile";
import GaleryPreviewProgram from "@/app/Components/home/Program/Program/Basic Program/GaleryPreviewProgram";
import { Support } from "@/app/lib/Support";

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
          <h1 className="text-3xl font-bold uppercase">
            {data?.title.replaceAll("program", "")}
          </h1>
          <p className="text-sm font-light">{data?.description}</p>
          <div className="session-detail flex flex-col gap-4">
            <h1 className="text-2xl font-bold">
              <span className="capitalize">
                {data?.title.replace("program", "")}
              </span>{" "}
              options
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
          {data?.id !== "32" && (
            <div className="session-detail flex flex-col gap-4">
              <h1 className="text-2xl font-bold">Services</h1>
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
          )}
        </div>
        <div className="right-side hidden items-start justify-end md:flex">
          <div className="w-full flex-col rounded-xl border border-bordersolid bg-white p-8 drop-shadow-xl md:flex md:max-w-[300px] xl:max-w-[400px]">
            <span className="text-xs font-semibold uppercase">
              book the program
            </span>
            <h1 className="text-3xl font-bold capitalize text-brand">
              {data?.title.replaceAll("program", "")}
            </h1>
            <p className="mt-3 text-sm font-light md:text-base">
              {data?.promoteBook}
            </p>
            <div className="cta-button mt-3 flex flex-col gap-2">
              {data?.id === "32" ? (
                <>
                  <Link href={`https://wa.me/${Support[0].url}`}>
                    <motion.button
                      initial={{ scale: 1 }}
                      whileTap={{ scale: 0.9 }}
                      transition={{
                        type: "spring",
                        stiffness: 400,
                        damping: 10,
                      }}
                      exit={{ scale: 1 }}
                      className="btn-icon flex w-fit items-center gap-3 rounded-lg bg-black px-5 py-2 font-semibold text-white xl:gap-3 xl:py-3 xl:pl-4 xl:pr-6"
                    >
                      <Headset size={24} />
                      Contact us
                    </motion.button>
                  </Link>
                </>
              ) : (
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
              )}
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
