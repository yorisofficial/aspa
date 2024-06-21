"use client";
import React, { useState } from "react";
import { EnvelopeSimple } from "@phosphor-icons/react";
import Image from "next/image";

const UpcamingContainer = ({
  children,
  content,
}: {
  children: React.ReactNode;
  content: boolean;
}) => {
  const [isContent, setContent] = useState(content);

  return (
    <>
      {isContent && (
        <div className="h-screen w-full bg-brand px-4 text-white md:px-10 xl:px-0">
          <div className="flex h-full w-full flex-col items-center justify-center gap-8">
            <div className="info-text">
              <h1 className="text-3xl font-black">COMING SOON!</h1>
            </div>
            <div className="brand-aspa">
              <Image
                src={"/brand/ASPA-white.svg"}
                width={500}
                height={500}
                alt="ASPA Logo"
                className="h-full object-cover xl:w-full"
              />
            </div>
            <div className="flex flex-col items-center justify-center gap-4 text-center">
              <h1 className="text-2xl font-black">
                Asian Surf Performance Academy
              </h1>
              <p className="text-base font-light xl:w-1/2">
                The Asian Surf Performance Academy (ASPA) is where surfers reach
                their highest potential. Located in Bali, we focus on supporting
                and empowering surfers to become their best. We enhance your
                surfing skills and help you develop professional qualities like
                motivation, teamwork, and responsibility
              </p>
            </div>
            <div className="contact-us flex flex-col items-center justify-center gap-2">
              <h1 className="text-base font-normal">
                To get more info connect with us!
              </h1>
              <span className="flex items-center gap-2 text-sm font-light">
                <EnvelopeSimple size={24} />
                info@asiansurfacademy.com
              </span>
            </div>
          </div>
        </div>
      )}
      {!isContent && <div className="h-full w-full">{children}</div>}
    </>
  );
};

export default UpcamingContainer;
