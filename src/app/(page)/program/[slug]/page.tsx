"use client";
import React from "react";
import { AspaProgram } from "@/app/Components/home/Hero/HeroSection2";
import BackButton from "@/app/Components/BackButton";
import Image from "next/image";
import ContainerContent from "@/app/Components/Container";
import { ChartBar, Chat } from "@phosphor-icons/react";
import Link from "next/link";

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
      <div className="preview-image mt-8 grid grid-cols-1 gap-4 xl:grid-cols-2 xl:gap-6">
        <div className="primary-image">
          <Image
            src={data?.image[0].src || "/assets/team/ASPA.webp"}
            alt={"preview-image"}
            priority
            width={1200}
            height={500}
            className="h-[200px] w-full rounded-xl object-cover md:h-[150px] xl:h-[380px]"
          />
        </div>
        <div className="group-image grid grid-cols-2 gap-4 md:grid-cols-4 xl:grid-cols-2 xl:gap-6">
          {data?.image.slice(1, 5).map((item, index) => (
            <div key={index} className="item-image">
              <Image
                src={item.src}
                alt={"preview-image"}
                priority
                width={1200}
                height={500}
                className="h-[100px] w-full rounded-xl object-cover md:h-[150px] xl:h-[180px]"
              />
            </div>
          ))}
        </div>
      </div>
      <div className="content mt-4">
        <h1 className="text-3xl font-bold uppercase">{data?.title}</h1>
      </div>
      <div
        style={{
          boxShadow: "#000000 0px 3px 8px",
        }}
        className="fixed bottom-0 left-0 w-full border border-bordersolid bg-white xl:hidden"
      >
        <div className="flex items-center justify-center gap-4 p-4">
          <Link
            href={`/program/${data?.id}/booking`}
            className="flex w-full items-center justify-center rounded-lg bg-black py-3 text-white"
          >
            Book now
          </Link>
          <Link
            href={`/`}
            className="flex w-fit items-center justify-center rounded-lg bg-black p-3 text-white"
          >
            <Chat size={24} />
          </Link>
        </div>
      </div>
    </ContainerContent>
  );
};

export default DetailsProgramPage;
