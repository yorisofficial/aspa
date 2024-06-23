import BackButton from "@/app/Components/BackButton";
import ContainerContent from "@/app/Components/Container";
import Image from "next/image";
import React from "react";
import HeadingText from "@/app/Components/HeadingText";

const AcademyPage = () => {
  const ImageAcademy = {
    srcImage_1: "/assets/academy/aspa-academy-1.png",
    srcImage_2: "/assets/academy/aspa-academy-2.png",
    srcImage_3: "/assets/academy/aspa-academy-3.png",
  };
  return (
    <ContainerContent url="/academy" className="min-h-screen w-full">
      <BackButton url="/">Back to main</BackButton>
      <div className="image-group my-8 flex w-full flex-col gap-4 xl:h-[400px] xl:flex-row">
        <div className="h-full w-full">
          <Image
            src={ImageAcademy.srcImage_1}
            alt="image-asset-academy"
            width={1500}
            height={1500}
            priority={false}
            className="xl:min-w-3/4 h-[300px] w-full rounded-xl object-cover xl:h-[400px]"
          />
        </div>
        <div className="small-img grid h-full grid-cols-2 gap-4 xl:grid-cols-1">
          <Image
            src={ImageAcademy.srcImage_2}
            alt="image-asset-academy"
            width={1500}
            height={1500}
            priority={false}
            className="h-full rounded-xl object-cover xl:w-[250px]"
          />
          <Image
            src={ImageAcademy.srcImage_3}
            alt="image-asset-academy"
            width={1500}
            height={1500}
            priority={false}
            className="h-full rounded-xl object-cover xl:w-[250px]"
          />
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
            ASPA is the Asian Surf Performance Academy; ASPA it&apos;s about
            reaching your highest potential as an athlete, in and out of the
            water. Our goal is to empower and support excellent surfers to break
            through their limits and become the best surfer they can be. The
            Asian Surf Performance Academy is located in Bali and aims to
            promote, support and accompany the best sportsmen and athletes in
            the world of surfing. Offering athletes a personalized attention
            where we not only seek to improve their surfing level but also to
            acquire new professional attributes such as; achievement motivation,
            team work, sense of commitment, responsibility, etc.
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
