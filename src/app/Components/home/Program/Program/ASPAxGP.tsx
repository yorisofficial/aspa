import React from "react";
import ButtonBooking from "@/app/Components/ButtonBooking";
import DownloadDocument from "@/app/Components/DownloadDocument";
import OurService from "@/app/Components/home/Service/OurService";
import SliderProgram from "@/app/Components/home/Program/SliderProgram";
import { GromPatrol } from "@/app/lib/events/grompatrol";

export const SliderImg = [
  {
    src: "/assets/program/grompatrol/img-1.png",
    alt: "image-asset-program",
  },
  {
    src: "/assets/program/grompatrol/img-2.png",
    alt: "image-asset-program",
  },
  {
    src: "/assets/program/grompatrol/img-3.png",
    alt: "image-asset-program",
  },
  {
    src: "/assets/program/grompatrol/img-4.png",
    alt: "image-asset-program",
  },
];
const ASPAxGP = () => {
  return (
    <>
      <div className="content-section border-buttom grid h-full w-full grid-cols-1 gap-8 py-8 pb-8 xl:grid-cols-2">
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
          <div className="pricing-progrm flex w-full flex-col gap-6">
            <div className="w-full">
              <span className="font-normal">Price start from</span>
              <h1 className="text-3xl font-black text-brand">
                {GromPatrol.price}
              </h1>
            </div>
            <div className="flex w-full items-center gap-6">
              <ButtonBooking invert={false} data={GromPatrol.url} />
              <DownloadDocument />
            </div>
          </div>
        </div>
      </div>
      <OurService title="GET MORE BENEFIT" />
    </>
  );
};

export default ASPAxGP;
