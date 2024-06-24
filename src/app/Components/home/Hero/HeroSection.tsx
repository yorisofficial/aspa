"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import Button from "../../Button";
import YoutubeVideo from "../../YoutubeVideo";
import { motion } from "framer-motion";
import ContainerContent from "../../Container";

const HeroSection = () => {
  return (
    <div className="mx-auto flex h-full min-h-screen w-full items-center justify-center bg-brand px-4 text-white">
      <ContainerContent url="hero" className="flex flex-col gap-6 xl:flex-row">
        <div className="h-full md:mt-0 xl:order-last xl:h-fit">
          <iframe
            src="https://www.youtube.com/embed/OkQvr9QW86w?si=jb84mee4Zjkz9P_l"
            title="YouTube video player"
            allow="autoplay"
            aria-hidden="true"
            allowFullScreen={true}
            className="aspect-video h-[300px] w-full rounded-xl xl:h-[400px]"
            loading="lazy"
          ></iframe>
        </div>
        <div className="flex w-full flex-col items-start justify-start gap-8 text-start md:-mt-0">
          <motion.div
            initial={{ y: "100%", opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5 }}
            className=""
          >
            <Image
              src={"/brand/ASPA-white.svg"}
              width={500}
              height={500}
              alt="ASPA Logo"
              priority={false}
              className="h-fit w-40 object-contain xl:w-80"
            />
          </motion.div>
          <div className="flex h-full w-full flex-col items-center justify-center text-center">
            <motion.div
              initial={{ y: "100%", opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="flex flex-col gap-4 text-start"
            >
              <h1 className="text-xl font-black md:text-3xl">
                Asian Surf Performance Academy
              </h1>
              <p className="">
                The Asian Surf Performance Academy (ASPA) is where surfers reach
                their highest potential. Located in Bali, we focus on supporting
                and empowering surfers to become their best. We enhance your
                surfing skills and help you develop professional qualities like
                motivation, teamwork, and responsibility
              </p>
            </motion.div>
            <motion.div
              initial={{ y: "100%", opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.6 }}
              className="btn-cta flex w-full items-center justify-start gap-4 py-8"
            >
              <Link
                href={"/academy"}
                className="group inline-block transition-all duration-500 ease-in-out hover:scale-110"
              >
                <Button
                  label="about us"
                  variant="invert"
                  className="!text-brand"
                >
                  About us
                </Button>
              </Link>
              <Link href={"/program"} className="underline underline-offset-4">
                ASPA program
              </Link>
            </motion.div>
          </div>
        </div>
      </ContainerContent>
    </div>
  );
};

export default HeroSection;
