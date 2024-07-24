"use client";
import { Quotes } from "@phosphor-icons/react";
import { Item } from "@radix-ui/react-accordion";
import Image from "next/image";
import React from "react";

interface Props {
  id: number;
  img_profile: string;
  full_name: string;
  gp_user: string;
  quotes: string;
}

const ItemTestimonial = ({ data }: { data: Props }) => {
  return (
    <div>
      <div className="item-slider relative space-y-4 rounded-xl border border-bordersolid bg-white p-8 drop-shadow-lg">
        <div className="quotes absolute right-3 top-3 text-primary">
          <Quotes size={32} weight="fill" />
        </div>
        <div className="h-fit w-[100px]">
          <Image
            src={"/brand/ASPA-dark.svg"}
            alt="ASPA"
            priority
            quality={75}
            width={500}
            height={300}
            className={"h-fit w-28"}
          />
        </div>
        <div className="">
          <p className={`text-start text-base font-light`}>{data.quotes}</p>
        </div>
        <div className="profile-details flex w-full items-start justify-start gap-2">
          <div className="h-12 w-12 rounded-full border-2 border-brand">
            <Image
              src={data.img_profile}
              alt="ASPA"
              width={1200}
              height={500}
              priority
              quality={75}
              className="h-12 w-12 flex-shrink-0 rounded-full object-cover"
            />
          </div>
          <div className="text-start">
            <p className="text-base font-black">{data.full_name}</p>
            <p className="text-sm font-normal">{data.gp_user}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ItemTestimonial;
