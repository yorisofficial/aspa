"use client";
import React from "react";

const YoutubeVideo = () => {
  return (
    <>
      <iframe
        src="https://www.youtube.com/embed/wMqsr1sa2es?si=lnKOjzqvJKyv_eOh"
        title="YouTube video player"
        height={400}
        width={720}
        className="aspect-video h-[300px] w-full self-stretch rounded-xl md:min-h-96 xl:h-full xl:w-[500px]"
        loading="lazy"
        allowFullScreen={true}
        aria-hidden={true}
      ></iframe>
    </>
  );
};

export default YoutubeVideo;
