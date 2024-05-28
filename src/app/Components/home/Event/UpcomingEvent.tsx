import React from "react";
import ContainerContent from "../../Container";
import Button from "../../Button";
import Image from "next/image";
import Link from "next/link";
import { Home } from "@/app/lib/Home";

const UpcomingEvent = () => {
  return (
    <ContainerContent
      url="book-session"
      className="border-buttom relative py-8"
    >
      <div className="book-section relative flex w-full flex-col items-center justify-center bg-primary px-4 py-8 text-white">
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
          <span className="text-sm font-light uppercase">{Home[2].sub}</span>
          <h1 className="text-xl font-black text-brand xl:text-3xl">
            {Home[2].title}
          </h1>
          <p className="text-sm font-light xl:w-1/2">{Home[2].description}</p>
          <div className="cta mt-8 text-center">
            <Link href={"/"} target="_blank">
              <Button label="Book now" variant="invert">
                {Home[2].url}
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </ContainerContent>
  );
};

export default UpcomingEvent;
