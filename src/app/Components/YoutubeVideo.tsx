"use client";
import React from "react";

const YoutubeVideo = () => {
  return (
    <>
      <iframe
        src="https://www.youtube.com/embed/wMqsr1sa2es?si=lnKOjzqvJKyv_eOh"
        title="YouTube video player"
        className="h-[300px] w-full rounded-xl xl:h-[400px] xl:min-w-[500px]"
        loading="lazy"
        allowFullScreen={true}
      ></iframe>
    </>
  );
};

export default YoutubeVideo;
