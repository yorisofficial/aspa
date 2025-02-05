"use client";

import Image from "next/image";
import React from "react";

function HeroSection2() {
  return (
    <div className="hero-section relative h-[500px] w-full">
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
