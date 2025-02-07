"use client";

import Image from "next/image";
import React, { useState } from "react";
import { AspaProgram } from "../lib/program/academy/AspaAcademy";
import { PreviousProgram } from "./Navigation";
import { menuNav } from "./Navigation";
import { CaretDown, CaretUp, WhatsappLogo } from "@phosphor-icons/react";
import { RegulationService } from "../lib/RegulationService";
import { Support } from "../lib/Support";
import Link from "next/link";
import SocialComponents from "./SocialComponents";
import BtnDownloadFile from "./BtnDownloadFile";

const NewFooter = () => {
  const phone = Support[0].url;
  const postCode = Support[1].title;
  const address = Support[2].title;
  const copyright = Support[3].title;

  const [isShow, setShow] = useState({
    hosting: true,
    program: true,
    speciality: true,
  });

  return (
    <div className="flex h-fit w-full flex-col items-start justify-center gap-4 bg-black p-4 text-white md:px-16">
      <div className="main-content flex h-full w-full flex-col items-start justify-between md:flex-row md:gap-6">
        <div className="logo-brand h-full">
          <Image
            src={"/brand/ASPA-white.svg"}
            alt="ASPA Logo"
            width={800}
            height={800}
            className="h-fit w-32 object-contain"
          />
          <address className="mt-4 text-sm">
            Jl Subak Sari Barat, Gg. Sri Kahyangan No.77, Tibubeneng, Kec. Kuta
            Utara, Kabupaten Badung, Bali 80361
          </address>
          <div className="cta-whatsapp mt-6 w-fit">
            <span className="text-base font-bold uppercase">Contact us</span>
            <Link
              href={`https://api.whatsapp.com/send/?phone=${phone}`}
              target="_blank"
              className="mt-4 flex w-fit items-center gap-2 rounded bg-white p-2 text-black"
            >
              <WhatsappLogo size={24} />
              Chat on Whatsaap
            </Link>
          </div>
          <SocialMedia className={`mt-4 md:hidden`} />
        </div>
        <div className="menus mt-4 w-full">
          <span className="text-base font-bold uppercase">Our menus</span>
          <div className="menus-list flex flex-col gap-2 md:flex-row">
            <div className="menu-collapse hosting-menus mt-4 h-fit w-full">
              <div className="relative">
                <button
                  type="button"
                  onClick={() =>
                    setShow({ ...isShow, hosting: !isShow.hosting })
                  }
                  className={`flex w-full touch-none items-start justify-between py-2 md:hidden`}
                >
                  <span className="label-menus text-sm font-light uppercase">
                    Hosting
                  </span>
                  {!isShow.hosting ? (
                    <CaretDown size={24} className="inline-block md:hidden" />
                  ) : (
                    <CaretUp size={24} className="inline-block md:hidden" />
                  )}
                </button>
                <span className="label-menus hidden text-sm font-light uppercase underline underline-offset-4 md:inline-block">
                  Hosting
                </span>
              </div>
              <div
                className={`open-component open-component h-fit w-full bg-white/5 p-4 md:bg-black md:p-0 ${isShow.hosting ? "inline-block" : "hidden"}`}
              >
                <ul className="list-inside text-sm font-light">
                  {menuNav.map((item, index) => (
                    <li
                      key={index}
                      className="group mt-2 flex list-inside items-center justify-start gap-2 text-base font-light duration-500"
                    >
                      <div className="h-[1px] w-0 bg-white transition-all duration-300 ease-linear group-hover:w-2"></div>
                      <Link href={item.link}>{item.title}</Link>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            <div className="menu-collapse program-menus mt-4 h-fit w-full">
              <div className="relative">
                <button
                  type="button"
                  onClick={() =>
                    setShow({ ...isShow, program: !isShow.program })
                  }
                  className={`flex w-full items-start justify-between py-2 md:hidden`}
                >
                  <span className="label-menus text-sm font-light uppercase">
                    our program
                  </span>
                  {!isShow.program ? (
                    <CaretDown size={24} className="inline-block md:hidden" />
                  ) : (
                    <CaretUp size={24} className="inline-block md:hidden" />
                  )}
                </button>
                <span className="label-menus hidden text-sm font-light uppercase underline underline-offset-4 md:inline-block">
                  our program
                </span>
              </div>
              <div
                className={`open-component h-fit w-full bg-white/5 p-4 md:bg-black md:p-0 ${isShow.program ? "inline-block" : "hidden"}`}
              >
                <ul className="list-inside text-sm font-light">
                  {AspaProgram.map((item, index) => (
                    <li
                      key={index}
                      className="group mt-2 flex list-inside items-center justify-start gap-2 text-base font-light duration-500"
                    >
                      <div className="h-[1px] w-0 bg-white transition-all duration-300 ease-linear group-hover:w-2"></div>
                      <Link
                        href={`/programs/${item.id}`}
                        className="capitalize"
                      >
                        {item.title}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            <div className="menu-collapse speciality-menus mt-4  h-fit w-full">
              <div className="relative">
                <button
                  type="button"
                  onClick={() =>
                    setShow({ ...isShow, speciality: !isShow.speciality })
                  }
                  className={`flex w-full items-start justify-between py-2 md:hidden`}
                >
                  <span className="label-menus text-sm font-light uppercase">
                    speciality
                  </span>
                  {!isShow.speciality ? (
                    <CaretDown size={24} className="inline-block md:hidden" />
                  ) : (
                    <CaretUp size={24} className="inline-block md:hidden" />
                  )}
                </button>
                <span className="label-menus hidden text-sm font-light uppercase underline underline-offset-4 md:inline-block">
                  Speciality program
                </span>
              </div>

              <div
                className={`open-component w-full bg-white/5 p-4 md:bg-black md:p-0 ${isShow.speciality ? "inline-block" : "hidden"}`}
              >
                <ul className="list-inside text-sm font-light">
                  {PreviousProgram.map((item, index) => (
                    <li
                      key={index}
                      className="group mt-2 flex list-inside items-center justify-start gap-2 text-base font-light duration-500"
                    >
                      <div className="h-[1px] w-0 bg-white transition-all duration-300 ease-linear group-hover:w-2"></div>
                      <Link href={`${item.url}`} className="capitalize">
                        {item.title}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
        <SocialMedia className={`mt-4 hidden md:inline-block`} />
      </div>
      <hr className="text-white opacity-80" />
      <div className="regulation-content h-fit w-full">
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
            <div className="px-2">
              <BtnDownloadFile
                title={RegulationService[0].footer}
                src={RegulationService[0].src}
                docName={RegulationService[0].docName}
              />
            </div>
          </div>
          <div className="">
            <span className="text-xs font-light">&copy;{copyright}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewFooter;

export function SocialMedia({ className }: { className?: string }) {
  return (
    <>
      <div
        className={`list-social md:w-[300px] ${className} flex flex-col items-start justify-center gap-0`}
      >
        <h1 className="text-base font-black uppercase">Get in touch</h1>
        <SocialComponents />
      </div>
    </>
  );
}
