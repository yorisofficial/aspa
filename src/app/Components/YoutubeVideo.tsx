"use client";
import { PlayCircle, X } from "@phosphor-icons/react";
import Image from "next/image";
import { useEffect, useState } from "react";
import Button from "./Button";

const YoutubeVideo = () => {
  const [isOpen, setIsOpen] = useState(false);
  useEffect(() => {
    const video = document.getElementById("video-intro") as HTMLVideoElement;

    if (isOpen) {
      video?.play();
    } else {
      video?.pause();
    }
  }, [isOpen]);
  return (
    <div className="xl:order-last">
      <div className="group relative h-full w-full">
        <button
          onClick={() => setIsOpen(!isOpen)}
          aria-label="play video intro ASPA"
          className="h-[250px] w-full rounded-full xl:h-full"
        >
          <Image
            src={"/assets/hero-img-1.webp"}
            width={500}
            height={500}
            alt="ASPA Training session"
            priority
            aria-hidden={true}
            className="z-0 min-h-[250px] w-full rounded-xl object-cover"
            placeholder="blur"
            blurDataURL="/assets/hero-img-1.webp"
          />
          <PlayCircle
            size={64}
            weight="fill"
            className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 transition-all duration-500 ease-in-out xl:opacity-0 xl:group-hover:opacity-100"
          />
        </button>
      </div>
      {isOpen && (
        <div className="fixed left-0 top-0 z-50 flex h-screen w-full items-center justify-center overflow-y-hidden bg-white p-4 backdrop-blur-sm xl:p-16">
          <video
            id="video-intro"
            width="500"
            height="500"
            controls
            preload="none"
            className="h-1/2 w-full rounded-xl"
          >
            <source src="/assets/aspa-intro.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
          <div className="fixed bottom-4 left-1/2 -translate-x-1/2">
            <Button
              variant="primary"
              onClick={() => setIsOpen(!isOpen)}
              label="close video intro ASPA"
              className="rounded-xl border border-black px-6 py-3 text-black"
            >
              Click here to close
            </Button>
          </div>
        </div>
      )}
    </div>
  );
};

export default YoutubeVideo;
