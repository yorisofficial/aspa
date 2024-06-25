"use client";
import React from "react";

const VideoComponent = ({ className }: { className?: string }) => {
  return (
    <div className={`h-full w-full ${className}`}>
      <iframe
        width="560"
        height="315"
        src="https://www.youtube.com/embed/OkQvr9QW86w?si=RyUK4LMv7OO3iMfg"
        title="YouTube video player"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowFullScreen
        aria-hidden={true}
        loading="lazy"
        className="h-[200px] w-full rounded-xl xl:min-h-[400px]"
      ></iframe>
    </div>
  );
};

export default VideoComponent;
