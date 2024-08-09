import BackButton from "@/app/Components/BackButton";
import ContainerContent from "@/app/Components/Container";
import Image from "next/image";
import React from "react";
import HeadingText from "@/app/Components/HeadingText";
import VideoComponent from "../../Components/home/VideoPreview/PlayYoutube";

const AcademyPage = () => {
  const ImageAcademy = [
    { srcImage: "/assets/academy/aspa-academy-1.webp" },
    { srcImage: "/assets/academy/aspa-academy-2.webp" },
    { srcImage: "/assets/academy/aspa-academy-3.webp" },
  ];
  return (
    <ContainerContent
      url="/academy"
      className="min-h-screen w-full px-4 md:px-10 xl:px-0"
    >
      <BackButton url="/">Back to main</BackButton>
      <div className="flex h-fit w-full flex-col gap-4 py-4">
        <VideoComponent />
        <div className="grid w-full grid-cols-3 gap-4">
          {ImageAcademy?.map((item, index) => (
            <div key={index} className="w-full">
              <Image
                src={item.srcImage}
                alt="ASPA Logo"
                width={1000}
                height={1000}
                priority
                className="rounded-xl"
              />
            </div>
          ))}
        </div>
      </div>
      <div className="content-about-us">
        <div className="border-buttom profile-about container space-y-4 py-8">
          <Image
            src={"/brand/ASPA-dark.svg"}
            width={1500}
            height={1500}
            alt="ASPA Logo"
            className="h-full w-[300px]"
          />
          <h1 className={`text-xl font-black text-brand`}>About us</h1>
          <p className="text-justify">
            The Asian Surf Performance Academy (ASPA) is a high-performance surf
            academy for all levels, from beginners to professionals. We train
            national and foreign teams for competitions, supported by
            experienced coaches with a proven track record. ASPA offers private
            and group sessions covering coaching, analysis, physical training,
            judging criteria, profile building, and mental preparation. Whether
            you&apos;re starting out or aiming to go pro, ASPA provides the
            tools and support to reach your full potential.
          </p>
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
