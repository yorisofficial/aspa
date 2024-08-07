"use client";
import { Play } from "lucide-react";
import Image from "next/image";
import React, { useState } from "react";
import PlayYoutube from "./PlayYoutube";

const VideoComponents = () => {
  const [play, setPlay] = useState(false);
  const handlePlayVideo = () => {
    setPlay(!play);
  };

  return (
    <div className="relative mx-auto flex h-fit w-full max-w-5xl items-center justify-center">
      <div className="video-thumbnail relative w-full">
        {!play ? (
          <Image
            src={"/assets/hero-img-1.webp"}
            alt="thumbnail-video"
            width={1200}
            height={500}
            priority
            quality={75}
            className="w-full rounded-xl object-cover md:h-[250px] xl:h-[350px]"
          />
        ) : (
          <PlayYoutube />
        )}
        {!play && (
          <div className="play-button absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 items-center justify-center">
            <button
              onClick={handlePlayVideo}
              className="rounded-full bg-white p-4 duration-500 hover:scale-110"
            >
              <Play size={32} />
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default VideoComponents;
