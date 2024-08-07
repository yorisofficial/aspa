"use client";
import React from "react";
import ContainerContent from "../../Container";
import { CheckCircle } from "@phosphor-icons/react";
import Link from "next/link";

export const AspaProgram = [
  {
    id: 1930,
    title: "basic program",
    description:
      "Our Basic Program is designed just for you! Tailored for surfers committed to improvement, this program offers a concentrated half-day of expert training and coaching.",
    promoteBook:
      "Join us for a half-day of transformative training, expert guidance, and thrilling wave action. Book your spot now!",
    image: "",
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
    paymentUrl: [
      {
        id: 1,
        show: true,
        title: "private",
        url: "/",
        icon: "",
      },
      {
        id: 2,
        show: true,
        title: "group",
        url: "/",
        icon: "",
      },
    ],
  },
  {
    id: 1920,
    title: "basic+ program",
    description:
      "Our Basic+ Program is the perfect choice for surfers dedicated to continuous improvement, offering a full day of immersive surf and physical training.",
    promoteBook:
      "Transform your surfing skills with a full day of expert guidance, personalized training and non-stop action. Book your Basic Full Day Program today!",
    image: "",
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
    paymentUrl: [
      {
        id: 1,
        title: "private",
        url: "/",
        icon: "",
      },
      {
        id: 2,
        title: "group",
        url: "/",
        icon: "",
      },
    ],
  },
];

const HeroSection2 = () => {
  return (
    <ContainerContent url="hero">
      <div className="hero-section-phase2 h-fit w-full space-y-6 px-4 py-8 text-center md:px-5 xl:px-0">
        <div className="header-content mt-8 flex flex-col items-center justify-center gap-6">
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
        <div className="list-program-section mx-auto grid grid-cols-2 gap-2 md:max-w-xl md:gap-5 xl:max-w-3xl">
          {AspaProgram.map((item, index) => (
            <div
              key={item.id}
              className={`item-aspa-program flex h-fit flex-col gap-4 rounded-lg border border-brand p-3 text-start xl:gap-6 xl:p-6 ${item.id === 1920 ? "bg-brand text-white drop-shadow-xl" : ""}`}
            >
              <h1 className="text-base font-bold capitalize xl:text-2xl">
                {item.title}
              </h1>
              <div className="list-benefit flex flex-col gap-2">
                {item.benefit.map((item, index) => (
                  <div key={item.id} className="item-benefit">
                    <div className="flex flex-shrink-0 items-start gap-1 xl:items-center xl:gap-4">
                      <CheckCircle
                        size={24}
                        className="h-4 w-4 xl:h-6 xl:w-6"
                      />{" "}
                      <h1 className="text-xs xl:text-base">{item.title}</h1>
                    </div>
                  </div>
                ))}
              </div>
              <div className="btn-cta flex items-center gap-2 xl:gap-4">
                <Link
                  href={`/program/${item.id}`}
                  aria-label="booking the program"
                  className={`rounded px-2 py-2 text-[10px] font-semibold xl:px-6 xl:py-3 xl:text-base ${item.id === 1920 ? "bg-white text-brand" : "bg-black text-white"}`}
                >
                  Book now
                </Link>
                <Link
                  href={"/program"}
                  aria-hidden
                  aria-label="learn more about program"
                  className="rounded text-[10px] underline underline-offset-4 xl:text-base"
                >
                  Learn more
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </ContainerContent>
  );
};

export default HeroSection2;
