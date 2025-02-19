"use client";

import Image from "next/image";
import React, { useState } from "react";

function HeroSection2() {
  const [isLoading, setLoading] = useState<Boolean>(true);
  return (
    <div className="hero-section relative h-[500px] w-full">
      {isLoading && (
        <div className="flex h-full w-full items-center justify-center">
          <Image
            src={"/assets/hero-img-1.webp"}
            alt="preload images"
            priority
            width={1000}
            height={500}
            className="h-[500px] w-full object-cover"
          />
        </div>
      )}
      <div className="h-[500px] w-full">
        <video
          preload="metadata"
          autoPlay
          loop
          muted
          onCanPlayThrough={() => setLoading(false)}
          className={`h-full w-full object-cover transition-opacity duration-500 ${
            isLoading ? "opacity-0" : "opacity-100"
          }`}
        >
          <source src={"/api/video"} type="video/mp4" />
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
