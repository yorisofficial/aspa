"use client";
import React, { useState } from "react";
import { DataVideo } from "../lib/DataVideo";
import { PlayCircle, X } from "@phosphor-icons/react";
import Image from "next/image";

const YoutubeVideo = () => {
  const [isShowModal, setShowModal] = useState(false);
  const data = DataVideo;
  const handleModal = () => {
    setShowModal(!isShowModal);
  };

  return (
    <>
      <div className="">
        <button
          aria-label="open modal youtube video"
          onClick={handleModal}
          className="h-full w-full rounded-xl"
        >
          <PlayCircle size={32} weight="fill" className="h-16 w-16" />
        </button>
      </div>
      {isShowModal && (
        <>
          <button
            onClick={() => setShowModal(false)}
            className="fixed left-0 top-0 z-30 flex h-full w-full items-center justify-center bg-white/10 px-4 py-20 backdrop-blur-md"
          >
            <iframe
              src={data[0].url}
              title={data[0].title}
              height={400}
              width={720}
              className="aspect-video h-1/2 w-full rounded-xl xl:h-[500px] xl:w-fit"
              loading="lazy"
              allowFullScreen={true}
              aria-hidden={true}
            ></iframe>
          </button>
          <div className="fixed bottom-4 left-4 z-50 ">
            <button
              onClick={() => setShowModal(false)}
              className="rounded bg-white p-2 text-primary"
            >
              <X size={32} />
            </button>
          </div>
        </>
      )}
    </>
  );
};

export default YoutubeVideo;
