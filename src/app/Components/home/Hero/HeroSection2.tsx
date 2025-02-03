"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import { PlayCircle, X } from "@phosphor-icons/react";

const HeroSection2 = () => {
  // need to update with auto play video
  const [isVideo, setVideo] = useState<Boolean>(false);
  const handleVideo = () => {
    setVideo(!isVideo);
  };

  return (
    <div className="hero-section relative">
      <div className="relative h-[500px] w-full">
        <Image
          src={"/assets/hero-img-1.webp"}
          alt="..."
          width={2400}
          height={800}
          priority
          style={{
            width: "100%",
            height: "500px",
            objectFit: "cover",
          }}
          className="h-[500px] w-full object-cover object-center"
        />
        <button
          type="button"
          onClick={handleVideo}
          className="absolute left-1/2 top-1/2 z-20 flex h-16 w-16 -translate-x-1/2 -translate-y-1/2 items-center justify-center drop-shadow-lg"
        >
          <PlayCircle size={24} weight="fill" className="h-full w-full" />
        </button>
        {isVideo && (
          <div className="video-section fixed left-1/2 top-1/2 z-50 flex h-full w-full -translate-x-1/2 -translate-y-1/2 items-center justify-center bg-primary/80">
            <div className="absolute right-0 top-0">
              <button
                type="button"
                onClick={() => setVideo(!isVideo)}
                className="rounded-full bg-white p-4 text-black"
              >
                <X size={24} />
              </button>
            </div>
            <iframe
              src="https://www.youtube.com/embed/OkQvr9QW86w?si=uFQE-zVR5VFCbHl_"
              title="YouTube video player"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
              className="h-[300px] w-full object-contain md:h-[600px]"
            ></iframe>
          </div>
        )}
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
};

export default HeroSection2;
