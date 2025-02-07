"use client";
import { PlayCircle } from "@phosphor-icons/react";
import Image from "next/image";
import { useState } from "react";

const PlayYoutube = () => {
  const [play, setPlay] = useState(false);
  return (
    <div className={`h-[200px] w-full md:h-[300px] xl:h-[400px]`}>
      <div className="group relative h-full w-full">
        {!play && (
          <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 duration-300 group-hover:scale-110">
            <button
              type="button"
              onClick={() => setPlay(!play)}
              className="flex items-center justify-center"
            >
              <PlayCircle
                size={32}
                weight="fill"
                className="h-32 w-32 text-white group-hover:drop-shadow-xl"
              />
            </button>
          </div>
        )}
        {play ? (
          <iframe
            loading="lazy"
            width="560"
            height="315"
            src="https://www.youtube.com/embed/OkQvr9QW86w?si=AJ1-DoCUk5hTuPUU?autoplay=1"
            title="YouTube video player"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen
            className="h-[200px] w-full md:h-[300px] xl:h-[400px]"
          ></iframe>
        ) : (
          <Image
            src={"/assets/hero-img-1.webp"}
            alt="..."
            width={2400}
            height={800}
            className="h-[200px] w-full object-cover md:h-[300px] xl:min-h-[400px]"
          />
        )}
      </div>
    </div>
  );
};

export default PlayYoutube;
