"use client";
import { Play } from "lucide-react";
import Image from "next/image";
import React, { useState } from "react";
import PlayYoutube from "./PlayYoutube";
import { motion } from "framer-motion";
import { PlayCircle } from "@phosphor-icons/react";

const VideoComponents = () => {
  const [play, setPlay] = useState(false);
  const handlePlayVideo = () => {
    setPlay(!play);
  };

  return (
    <motion.div
      initial={{ scale: 1.2, opacity: 0 }}
      whileInView={{ scale: 1, opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="video relative mx-auto flex h-fit w-full max-w-5xl items-center justify-center"
    >
      <div className="video-thumbnail h-fit w-full">
        {!play ? (
          <Image
            src={"/assets/hero-img-1.webp"}
            alt="thumbnail-video"
            width={1200}
            height={300}
            priority
            quality={75}
            className="h-[200px] w-full rounded-xl object-cover md:h-[300px] xl:h-[350px]"
          />
        ) : (
          <PlayYoutube />
        )}
        {!play && (
          <motion.div
            initial={{ scale: 2, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.3 }}
            className="play-button group absolute left-0 top-0 flex h-full w-full items-center justify-center"
          >
            <button
              aria-label="open youtube video"
              onClick={handlePlayVideo}
              className="flex h-full w-full items-center justify-center rounded-full p-4 duration-500 "
            >
              <PlayCircle
                size={62}
                color="#ffffff"
                weight="bold"
                className="duration-500 group-hover:scale-150"
              />
            </button>
          </motion.div>
        )}
      </div>
    </motion.div>
  );
};

export default VideoComponents;
