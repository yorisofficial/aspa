import React from "react";
import Image from "next/image";
import Link from "next/link";
import Button from "../../Button";
import ContainerContent from "../../Container";
import YoutubeVideo from "../../YoutubeVideo";

const HeroSection = () => {
  return (
    <div className="relative min-h-screen w-full bg-brand text-white">
      <ContainerContent
        url=""
        className="grid h-full w-full grid-cols-1 gap-4 xl:grid-cols-2 xl:gap-8"
      >
        <div className="flex h-full w-full items-center justify-center rounded-xl xl:order-last">
          <YoutubeVideo />
        </div>
        <div className="flex w-full flex-col items-start justify-start gap-4 py-8 xl:justify-center xl:gap-8">
          <div className="">
            <Image
              src={"/brand/ASPA-white.svg"}
              width={500}
              height={500}
              alt="ASPA Logo"
              priority={false}
              className="h-fit w-40 object-contain xl:w-80"
            />
          </div>
          <div className="flex flex-col items-start justify-start gap-4 text-start">
            <h1 className="text-2xl font-black uppercase">
              Asian Surf Performance Academy
            </h1>
            <p className="w-full text-base font-light">
              The Asian Surf Performance Academy (ASPA) is where surfers reach
              their highest potential. Located in Bali, we focus on supporting
              and empowering surfers to become their best. We enhance your
              surfing skills and help you develop professional qualities like
              motivation, teamwork, and responsibility
            </p>
          </div>
          <div className="btn-cta flex items-center justify-start gap-4 py-8">
            <Link
              href={"/academy"}
              className="group inline-block transition-all duration-500 ease-in-out hover:scale-110"
            >
              <Button label="about us" variant="invert" className="!text-brand">
                About us
              </Button>
            </Link>
            <Link href={"/program"} className="underline underline-offset-4">
              ASPA program
            </Link>
          </div>
        </div>
      </ContainerContent>
    </div>
  );
};

export default HeroSection;
