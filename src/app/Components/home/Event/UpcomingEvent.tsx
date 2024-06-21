import React from "react";
import ContainerContent from "../../Container";
import Image from "next/image";
import ButtonBooking from "../../ButtonBooking";
import { urlBooking } from "@/app/lib/Booking";
import Link from "next/link";
import { GromPatrol } from "@/app/lib/events/grompatrol";

const UpcomingEvent = () => {
  return (
    <ContainerContent
      url="book-session"
      className="border-buttom relative py-8"
    >
      <div className="book-section relative flex w-full flex-col items-center justify-center rounded-xl bg-primary px-4 py-8 text-white">
        <div className="absolute left-1/2 top-1/2 z-0 flex h-full w-full -translate-x-1/2 -translate-y-1/2 items-center justify-center">
          <Image
            src={"/assets/acc/title-cover-simple.svg"}
            alt="acc-line"
            width={500}
            height={500}
            className="h-full w-full opacity-60"
          />
        </div>
        <div className="details relative z-10 flex flex-col gap-2 text-center xl:items-center xl:justify-center">
          <span className="text-sm font-light uppercase">
            Book now and get the benefit
          </span>
          <h1 className="text-xl font-black text-brand xl:text-3xl">
            {GromPatrol.title}
          </h1>
          <p className="text-sm font-light xl:w-1/2">{GromPatrol.desc}</p>
        </div>
        <div className="relative z-10 mt-4">
          <Link
            href={"/program"}
            aria-label="Book now"
            className="inline-block rounded-xl bg-white px-6 py-3 font-black text-primary duration-500 hover:scale-110"
          >
            Book now
          </Link>
        </div>
      </div>
    </ContainerContent>
  );
};

export default UpcomingEvent;
