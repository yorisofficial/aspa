import React from "react";
import Image from "next/image";
import Link from "next/link";
import SocialComponents from "../../SocialComponents";
import Button from "../../Button";

const HeroSection = () => {
  return (
    <div className="relative h-screen w-full">
      <div className="h-full w-full bg-brand text-white">
        <div className="flex h-full w-full flex-col items-center justify-center gap-8">
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
          <div className="flex flex-col items-center justify-center gap-4 text-center">
            <h1 className="text-2xl font-black uppercase">
              Asian Surf Performance Academy
            </h1>
            <p className="text-base font-light xl:w-1/2">
              The Asian Surf Performance Academy (ASPA) is where surfers reach
              their highest potential. Located in Bali, we focus on supporting
              and empowering surfers to become their best. We enhance your
              surfing skills and help you develop professional qualities like
              motivation, teamwork, and responsibility
            </p>
          </div>
          <div className="btn-cta flex items-center gap-4">
            <Link href={"/academy"}>
              <Button label="about us" variant="invert" className="!text-brand">
                About us
              </Button>
            </Link>
            <Link href={"/program"} className="underline underline-offset-4">
              ASPA program
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
