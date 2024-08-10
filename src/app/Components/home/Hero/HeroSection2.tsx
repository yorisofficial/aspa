"use client";
import React from "react";
import ContainerContent from "../../Container";
import { CheckCircle } from "@phosphor-icons/react";
import Link from "next/link";

export const AspaProgram = [
  {
    id: "0124bb75a2045fdfd9c7211b12e9390c",
    promote: true,
    title: "basic+ program",
    url: "basicplus",
    description:
      "Our Basic+ Program is the perfect choice for surfers dedicated to continuous improvement, offering a full day of immersive surf and physical training.",
    promoteBook:
      "Transform your surfing skills with a full day of expert guidance, personalized training and non-stop action. Book your Basic Full Day Program today!",
    image: [
      {
        id: 1,
        src: "/assets/program/class/basic+/basic-plus-1.webp",
      },
      {
        id: 2,
        src: "/assets/program/class/basic+/basic-plus-2.webp",
      },
      {
        id: 3,
        src: "/assets/program/class/basic+/basic-plus-3.webp",
      },
      {
        id: 4,
        src: "/assets/program/class/basic+/basic-plus-4.webp",
      },
      {
        id: 5,
        src: "/assets/program/class/basic+/basic-plus-5.webp",
      },
    ],
    benefit: [
      {
        id: 1,
        title: "One Surf Session",
        description:
          "A surf session packed with personalized coaching and hands-on practice to sharpen your skills and boost your confidence on the waves.",
      },
      {
        id: 2,
        title: "Video Analysis Coaching",
        description:
          "After each surf session, benefit from a detailed video analysis. Our expert coaches will review your performance, providing targeted feedback and actionable tips to refine your technique and accelerate your progress.",
      },
      {
        id: 3,
        title: "Physical Training Session",
        description:
          "Become a more complete surfer with our physical training sessions, focusing on strength, mobility, and endurance.",
      },
    ],
    session: [
      {
        id: "4365b5f709d4",
        title: "private",
        pricing: "IDR 2.700.000",
        url: "https://yorisofficial.me/basicplus/private",
        icon: "",
      },
      {
        id: "24761790db19",
        title: "group",
        pricing: "IDR 1.400.000",
        url: "https://yorisofficial.me/basicplus/group",
        icon: "",
      },
    ],
  },
  {
    id: "397920486010c9a37d193b58b71983b6",
    promote: false,
    title: "basic program",
    url: "basic",
    description:
      "Our Basic Program is designed just for you! Tailored for surfers committed to improvement, this program offers a concentrated half-day of expert training and coaching.",
    promoteBook:
      "Join us for a half-day of transformative training, expert guidance, and thrilling wave action. Book your spot now!",
    image: [
      {
        id: 1,
        src: "/assets/program/class/basic/basic-5.webp",
      },
      {
        id: 2,
        src: "/assets/program/class/basic/basic-2.webp",
      },
      {
        id: 3,
        src: "/assets/program/class/basic/basic-1.webp",
      },
      {
        id: 4,
        src: "/assets/program/class/basic/basic-4.webp",
      },
      {
        id: 5,
        src: "/assets/program/class/basic/basic-3.webp",
      },
    ],
    benefit: [
      {
        id: 1,
        title: "One Surf Session",
        description:
          "A surf session packed with personalized coaching and hands-on practice to sharpen your skills and boost your confidence on the waves.",
      },
      {
        id: 2,
        title: "Video Analysis Coaching",
        description:
          "After each surf session, benefit from a detailed video analysis. Our expert coaches will review your performance, providing targeted feedback and actionable tips to refine your technique and accelerate your progress.",
      },
    ],
    session: [
      {
        id: "97c5365da68a",
        show: true,
        title: "private",
        pricing: "IDR 1.350.000",
        url: "https://yorisofficial.me/basic/private",
        icon: "",
      },
      {
        id: "585e9f86adb2",
        show: true,
        title: "group",
        pricing: "IDR 850.000",
        url: "https://yorisofficial.me/basic/group",
        icon: "",
      },
    ],
  },
];

const HeroSection2 = () => {
  return (
    <ContainerContent url="hero">
      <div className="hero-section-phase2 h-fit w-full space-y-6 px-4 py-8 text-center md:px-5 xl:px-0">
        <div className="header-content mt-8 flex h-fit flex-col items-center justify-center gap-6">
          <div className="flex h-fit w-full flex-col items-center justify-center gap-6">
            <h1 className="text-center text-2xl font-black text-brand xl:text-4xl">
              ASIAN SURF <br /> PERFORMANCE ACADEMY
            </h1>
            <p className="text-sm font-light xl:w-3/4 xl:text-base">
              The Asian Surf Performance Academy (ASPA) is a high-performance
              surf academy for all levels, from beginners to professionals. We
              train national and foreign teams for competitions, supported by
              experienced coaches with a proven track record. ASPA offers
              private and group sessions covering coaching, analysis, physical
              training, judging criteria, profile building, and mental
              preparation. Whether you&apos;re starting out or aiming to go pro,
              ASPA provides the tools and support to reach your full potential.
            </p>
          </div>
        </div>
        <div className="list-program-section mx-auto grid h-fit grid-cols-2 gap-2 md:max-w-xl md:gap-5 xl:max-w-3xl">
          {AspaProgram.map((item, index) => (
            <div
              key={item.id}
              className={`item-aspa-program relative h-fit rounded-xl p-2 xl:px-6 xl:py-8 ${item.promote ? "border-4 border-brand bg-brand text-white xl:border-8" : "border border-black  bg-white"}`}
            >
              <div className={`content flex flex-col items-start gap-6`}>
                <h1
                  className={`text-base font-bold capitalize xl:text-2xl ${item.promote ? "text-white" : "text-black"}`}
                >
                  {item.title}
                </h1>
                <div className="list-benefit flex flex-col gap-2">
                  {item.benefit.map((item, index) => (
                    <div key={item.id} className="item-benefit">
                      <div className="flex flex-shrink-0 items-start justify-start gap-2 text-start xl:items-center xl:gap-4">
                        <CheckCircle
                          size={24}
                          className="h-4 w-4 xl:h-6 xl:w-6"
                        />{" "}
                        <h1 className="text-xs xl:text-base">{item.title}</h1>
                      </div>
                    </div>
                  ))}
                </div>
                <div className="btn-cta flex flex-col items-start gap-2">
                  <Link
                    href={`/program/${item.id}/booking`}
                    aria-label="booking the program"
                    className={`rounded-lg px-4 py-2 text-xs xl:px-6 xl:py-3 xl:text-base ${item.promote ? "bg-white text-brand" : "bg-black text-white"}`}
                  >
                    Book now
                  </Link>
                  <Link
                    href={`/program/${item.id}`}
                    aria-label="learn more about program"
                    className="rounded text-[10px] underline underline-offset-4 xl:text-base"
                  >
                    Learn more about the program
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </ContainerContent>
  );
};

export default HeroSection2;
