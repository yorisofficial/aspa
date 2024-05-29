import BackButton from "@/app/Components/BackButton";
import ContainerContent from "@/app/Components/Container";
import Image from "next/image";
import React from "react";
import HeadingText from "@/app/Components/HeadingText";
import Button from "@/app/Components/Button";
import Link from "next/link";
import { Home } from "@/app/lib/Home";

const AcademyPage = () => {
  const image = {
    srcImage1: "/assets/hero-img-1.png",
    srcImage2: "/assets/hero-img-2.png",
    srcImage3: "/assets/hero-img-3.png",
  };

  return (
    <ContainerContent url="/academy" className="min-h-screen w-full">
      <BackButton url="/">Back to main</BackButton>
      <div className="content-about-us">
        <div className="border-buttom profile-about container space-y-4 py-8">
          <Image
            src={"/brand/ASPA-dark.svg"}
            width={1500}
            height={1500}
            alt="ASPA Logo"
            className="h-full w-[300px]"
          />
          <h1 className={`text-xl font-black text-brand`}>{Home[0].title}</h1>
          <p className="text-justify">{Home[0].description}</p>
        </div>
        <div className="border-buttom moto-about border-buttom container space-y-8 py-8">
          <div className="space-y-4">
            <HeadingText title="Our vision" />
            <p className="text-justify">
              Support Surf Athletes to become the worlds best surfers and people
            </p>
          </div>
          <div className="space-y-4">
            <HeadingText title="Our mission" />
            <p className="text-justify">
              Transform into a Performance Surf Academy that prioritizes
              athletes, is supported by coaches, focuses on performance, and
              integrates all aspects of performance
            </p>
          </div>
        </div>
        <div className="border-buttom moto-about border-buttom container space-y-8 py-8">
          <div className="space-y-4">
            <HeadingText title="History of ASPA" />
            <p className="text-justify">
              Behind and supporting ASPA is the Asian Surf Cooperative or ASC,
              with over 20 years of experience in the surf industry. As a
              professional surfing organization, ASC has nearly two decades of
              experience in organizing, managing, and supporting surfing events
              across the Asian Region, from local boardriders club competitions
              to World Championship Tour events, including the recent 2022
              Quiksilver Pro G-Land. Bali offers everything a surfer needs to
              develop and improve their skills to become one of the best surfers
              in the world. With a wide variety of waves, both reef and sand,
              and a vibrant surfing community, ASPA provides a specialized space
              for surfers to enjoy and learn. With top coaches and trainers,
              athletes have access to various activities and training sessions.
              At ASPA, we aim to provide the best performance experience for the
              best surfers, offering fully equipped facilities and an
              environment tailored for success.
            </p>
          </div>
        </div>
      </div>
    </ContainerContent>
  );
};

export default AcademyPage;
