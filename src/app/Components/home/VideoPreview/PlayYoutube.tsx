"use client";
import React, { useEffect, useRef } from "react";

const PlayYoutube = ({ className }: { className?: string }) => {
  return (
    <div className={`h-full w-full ${className}`}>
      <h1 className="mb-4 inline-block text-sm font-black xl:hidden">
        Watch the video
      </h1>
      <iframe
        loading="lazy"
        width="560"
        height="315"
        src="https://www.youtube.com/embed/OkQvr9QW86w?si=AJ1-DoCUk5hTuPUU?autoplay=1"
        title="YouTube video player"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        referrerPolicy="strict-origin-when-cross-origin"
        allowFullScreen
        className="h-[200px] w-full rounded-xl md:h-[300px] xl:min-h-[400px]"
      ></iframe>
    </div>
  );
};

export default PlayYoutube;
