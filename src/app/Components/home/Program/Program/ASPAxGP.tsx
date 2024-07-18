import React from "react";
import ButtonBooking from "@/app/Components/ButtonBooking";
import DownloadDocument from "@/app/Components/DownloadDocument";
import OurService from "@/app/Components/home/Service/OurService";
import SliderProgram from "@/app/Components/home/Program/SliderProgram";
import { GromPatrol } from "@/app/lib/events/grompatrol";
import SliderStar from "@/app/Components/SliderStar";
import { DataStar } from "@/app/lib/DataStar";

export const SliderImg = [
  {
    src: "/assets/program/grompatrol/img-1.webp",
    alt: "image-asset-program",
  },
  {
    src: "/assets/program/grompatrol/img-2.webp",
    alt: "image-asset-program",
  },
  {
    src: "/assets/program/grompatrol/img-3.webp",
    alt: "image-asset-program",
  },
  {
    src: "/assets/program/grompatrol/img-4.webp",
    alt: "image-asset-program",
  },
];
const ASPAxGP = () => {
  return (
    <>
      <div className="content-section border-buttom grid grid-cols-1 gap-8 py-8 xl:grid-cols-2">
        <SliderProgram data={SliderImg} />
        <div className="details flex h-full w-full flex-col gap-8 xl:order-first">
          <div className="content-body space-y-4">
            <div className="header">
              <span className="text-base uppercase">Program</span>
              <h1 className="text-3xl font-black text-brand">
                {GromPatrol.title}
              </h1>
            </div>
            <p className="w-full text-sm font-light md:w-3/4 md:text-base xl:w-full">
              {GromPatrol.desc}
            </p>
          </div>
        </div>
      </div>
      <OurService title="Our Services" />
      <div className="star-section flex w-full flex-col gap-5 py-8">
        <h1 className="text-xl font-bold uppercase text-brand">
          Our Rising Star Surfers
        </h1>
        <SliderStar data={DataStar} />
      </div>
    </>
  );
};

export default ASPAxGP;
