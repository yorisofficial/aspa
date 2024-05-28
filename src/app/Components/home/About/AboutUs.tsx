"use client";
import React from "react";
import ContainerContent from "../../Container";
import Image from "next/image";
import Description from "../../Description";
import HeadingText from "../../HeadingText";
import Button from "../../Button";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Home } from "@/app/lib/Home";

const AboutUs = () => {
  const pathName = usePathname();
  const homePageView = pathName === "/" ? "hidden" : "";

  return (
    <ContainerContent url="/about-us" className="border-buttom space-y-8 py-8">
      <div className="profile-about flex flex-col items-start justify-center space-y-4">
        <Image
          src={"/brand/ASPA-dark.svg"}
          width={1500}
          height={1500}
          alt="ASPA Logo"
          className="h-full w-[300px]"
        />
        <h1 className={`text-xl font-black text-brand`}>{Home[0].title}</h1>
        <Description
          text={Home[0].description}
          className="Aspa-Description w-full"
        />
        <Link href={"/about-us"} className={`${!homePageView}`}>
          <Button label="About us" variant="primary">
            About us
          </Button>
        </Link>
      </div>
      <div className={`moto-about space-y-8 ${homePageView}`}>
        <div className="vision flex flex-col items-center justify-center space-y-4 text-center">
          <HeadingText title="Our vision" />
          <Description
            text="Support Surf Athletes to become the worlds best
						surfers and people"
            className="description"
          />
        </div>
        <div className="mission flex flex-col items-center justify-center space-y-4 text-center">
          <HeadingText title="Our mission" />
          <Description
            text="Transform into a Performance Surf Academy that
						prioritizes athletes, is supported by coaches,
						focuses on performance, and integrates all aspects
						of performance"
            className="description"
          />
        </div>
        <div className="flex w-full items-center justify-center">
          <Link href={"/about"}>
            <Button label="learn more" variant="primary">
              About ASPA
            </Button>
          </Link>
        </div>
      </div>
    </ContainerContent>
  );
};

export default AboutUs;
