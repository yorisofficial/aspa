"use client";
import React from "react";
import ContainerContent from "../../Container";
import { CheckCircle, Headset } from "@phosphor-icons/react";
import Link from "next/link";
import { Support } from "@/app/lib/Support";
import SliderPackage from "../../SliderPackage";

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
        url: "https://pay.doku.com/p-link/p/OevIafJ",
        icon: "",
      },
      {
        id: "24761790db19",
        title: "group",
        pricing: "IDR 1.400.000",
        url: "https://pay.doku.com/p-link/p/mjqnDCl",
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
        url: "https://pay.doku.com/p-link/p/uAfycCv",
        icon: "",
      },
      {
        id: "585e9f86adb2",
        show: true,
        title: "group",
        pricing: "IDR 850.000",
        url: " https://pay.doku.com/p-link/p/N2PvzVv",
        icon: "",
      },
    ],
  },
  {
    id: "32",
    promote: false,
    title: "Custom",
    url: "https://wa.me/6281238584060",
    description:
      "Our custom programs are designed with your unique needs in mind. Whether you're looking for specific features, flexible terms, or tailored support, we're here to help. Simply let us know your requirements, and our customer support team will work with you to create a program that fits perfectly with your goals. Experience a solution that's truly made for you.",
    promoteBook:
      "Need a program tailored to your needs? Contact our customer support for a customized offer!",
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
      {
        id: 3,
        title: "Physical Training Session",
        description:
          "Become a more complete surfer with our physical training sessions, focusing on strength, mobility, and endurance.",
      },
    ],
    session: [
      {
        id: "97c5365da68a",
        show: true,
        title: "private",
        pricing: "",
        url: "",
        icon: "",
      },
      {
        id: "585e9f86adb2",
        show: true,
        title: "group",
        pricing: "",
        url: "",
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
        <div className="header">
          <h1 className="text-center text-base font-black text-brand xl:text-4xl">
            Programs
          </h1>
        </div>
        <SliderPackage />
      </div>
    </ContainerContent>
  );
};

export default HeroSection2;
