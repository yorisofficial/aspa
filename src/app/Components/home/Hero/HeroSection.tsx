import React from "react";
import Image from "next/image";
import Link from "next/link";
import Button from "../../Button";
import YoutubeVideo from "../../YoutubeVideo";

const HeroSection = () => {
  return (
    <div className="mx-auto flex h-full min-h-screen w-full items-center justify-center bg-brand px-4 text-white">
      <div className="mx-auto grid w-full max-w-5xl grid-cols-1 items-center justify-center gap-8 xl:grid-cols-2">
        <div className="col-right flex h-full w-full items-center justify-center xl:order-last">
          <div className="h-full w-full">
            <YoutubeVideo />
          </div>
        </div>
        <div className="col-left flex h-full w-full flex-col items-start justify-center gap-4">
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
          <div className="h-full w-full">
            <div className="flex flex-col gap-4">
              <h1 className="text-3xl font-black">
                Asian Surf Performance Academy
              </h1>
              <p className="">
                The Asian Surf Performance Academy (ASPA) is where surfers reach
                their highest potential. Located in Bali, we focus on supporting
                and empowering surfers to become their best. We enhance your
                surfing skills and help you develop professional qualities like
                motivation, teamwork, and responsibility
              </p>
            </div>
            <div className="btn-cta flex w-full items-center justify-start gap-4 py-8">
              <Link
                href={"/academy"}
                className="group inline-block transition-all duration-500 ease-in-out hover:scale-110"
              >
                <Button
                  label="about us"
                  variant="invert"
                  className="text-brand"
                >
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
    </div>
  );
};

export default HeroSection;
