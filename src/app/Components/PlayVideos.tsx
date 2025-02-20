"use client";

import { Spinner } from "@phosphor-icons/react";
import Image from "next/image";
import React, { useState } from "react";

export default function PlayVideos() {
  const [isLoading, setLoading] = useState<Boolean>(true);
  return (
    <div className="hero-section relative h-[500px] w-full">
      {isLoading && (
        <div className="relative flex h-full w-full items-center justify-center">
          <Image
            src={"/assets/hero-img-1.webp"}
            alt="preload images"
            priority
            width={1000}
            height={500}
            className="h-[500px] w-full object-cover"
          />
          <div className="absolute left-1/2 top-1/2 flex h-full w-full -translate-x-1/2 -translate-y-1/2 items-center justify-center">
            <Spinner size={52} className="animate-spin duration-500" />
          </div>
        </div>
      )}
      <div className="h-[500px] w-full">
        <video
          preload="metadata"
          autoPlay
          loop
          muted
          controls
          onCanPlayThrough={() => setLoading(false)}
          className={`h-full w-full object-cover transition-opacity duration-500 ${
            isLoading ? "opacity-0" : "opacity-100"
          }`}
        >
          <source src={"/api/video"} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>
    </div>
  );
}
