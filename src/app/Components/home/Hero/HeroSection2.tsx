"use client";

import { Spinner } from "@phosphor-icons/react";
import Image from "next/image";
import React, { Suspense } from "react";

function HeroSection2() {
  return (
    <div className="hero-section relative h-fit w-full md:h-[500px]">
      <Suspense
        fallback={
          <div className="fixed left-0 top-0 z-30 flex h-[500px] w-full animate-pulse items-center justify-center bg-primary">
            <Spinner size={32} className="animate-spin duration-300" />
          </div>
        }
      >
        <div className="h-[500px] w-full">
          <video
            preload="none"
            autoPlay
            loop
            muted
            className="h-[500px] w-full object-cover"
          >
            <source
              src="/assets/video/Training Session with the Indonesian Junior Team - ASPA.mp4"
              type="video/mp4"
            />
            Your browser does not support the video tag.
          </video>
        </div>
      </Suspense>
      <div className="absolute bottom-0 left-0 h-fit w-full">
        <Image
          src={"/assets/acc/wave-bottom.svg"}
          alt="..."
          width={2400}
          height={500}
          priority
          className="h-fit w-full object-contain"
        />
      </div>
    </div>
  );
}

export default HeroSection2;
