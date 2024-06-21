"use client";
import {
  InstagramLogo,
  WhatsappLogo,
  XLogo,
  YoutubeLogo,
} from "@phosphor-icons/react";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { Support } from "../lib/Support";
import SocialComponents from "./SocialComponents";

const FooterPage = () => {
  const phone = Support[0].title;
  const phoneMassage = Support[0].message?.replaceAll(" ", "%20");
  const postCode = Support[1].title;
  const address = Support[2].title;
  const copyright = Support[3].title;

  return (
    <div className="mt-8 flex h-full w-full flex-col items-center justify-center gap-4 bg-primary py-8 text-white">
      <Image
        src={"/brand/ASPA-white.svg"}
        alt="ASPA Logo"
        width={500}
        height={500}
        priority={false}
        className="h-full w-[200px] object-cover"
      />
      <div className="text-center xl:max-w-[368px]">
        <address>
          {address} {postCode}
        </address>
        <span>Tel : {phone}</span>
      </div>
      <div className="cta-whatsapp">
        <Link
          href={`https://api.whatsapp.com/send/?phone=${phone}&text=${phoneMassage}`}
          target="_blank"
          className="flex items-center gap-2 rounded bg-white p-2 text-black"
        >
          <WhatsappLogo size={24} />
          Chat on Whatsaap
        </Link>
      </div>
      <div className="list-social flex flex-col items-center justify-center gap-0">
        <h1 className="text-base font-black">Get in touch</h1>
        <SocialComponents />
      </div>
      <div className="copyright-section flex flex-col items-center justify-center">
        <div className="flex items-center gap-0">
          <div className="border-r border-white px-2">
            <Link
              href={"/support"}
              className="underline-offset-4 duration-500 hover:underline"
              aria-label="cta button for"
            >
              Support
            </Link>
          </div>
          <div className="border-r border-white px-2">
            <Link
              href={"/support"}
              className="underline-offset-4 duration-500 hover:underline"
              aria-label="cta button for"
            >
              FAQ
            </Link>
          </div>
          <div className="px-2">
            <Link
              target="_blank"
              href={"https://forms.gle/umhnmRWAkB5RKq8C8"}
              className="underline-offset-4 duration-500 hover:underline"
              aria-label="cta button for"
            >
              Waiver Form
            </Link>
          </div>
        </div>
        <div className="">
          <span className="text-xs font-light">&copy;{copyright}</span>
        </div>
      </div>
    </div>
  );
};

export default FooterPage;
