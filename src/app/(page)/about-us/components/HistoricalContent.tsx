"use client";

import React from "react";
import { motion } from "framer-motion";

const HistoricalContent = () => {
  return (
    <div className="mx-auto mt-8 grid max-w-6xl grid-cols-1 items-start justify-center gap-4 md:grid-cols-2 md:gap-5">
      <div className="">
        <div className="historical-content mx-auto mt-4 flex h-fit w-full max-w-6xl flex-col items-start justify-between px-4 md:mt-6 md:gap-5 md:px-10 xl:mt-8 xl:px-0">
          <motion.div
            initial={{ translateX: "-100%", opacity: 0 }}
            whileInView={{ translateX: "0%", opacity: 1 }}
            exit={{ translateX: "-100%", opacity: 0 }}
            transition={{ duration: 0.3 }}
            viewport={{ once: true }}
            className="core-content md:w-3/4"
          >
            <span className="big-heading text-2xl uppercase md:text-4xl">
              Where ASC&apos;s Expertise Meets Your Surfing Ambitions
            </span>
          </motion.div>
          <motion.div
            initial={{ translateX: "100%", opacity: 0 }}
            whileInView={{ translateX: "0%", opacity: 1 }}
            exit={{ translateX: "-100%", opacity: 0 }}
            transition={{ duration: 0.3 }}
            viewport={{ once: true }}
            className="mt-4 w-full md:mt-0"
          >
            <p className="text-justify text-base">
              ASPA, backed by the Asian Surf Cooperative (ASC) with 20+ years of
              experience, provides expert coaching and top-tier training in
              Bali&apos;s world-class surf environment. With elite facilities
              and tailored programs, we help surfers reach their full potential.
            </p>
          </motion.div>
        </div>
      </div>
      <div className="video-section flex h-[400px] w-full items-center justify-center">
        <iframe
          width="560"
          height="315"
          src="https://www.youtube.com/embed/OkQvr9QW86w?si=uFQE-zVR5VFCbHl_"
          title="YouTube video player"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
        ></iframe>
      </div>
    </div>
  );
};

export default HistoricalContent;
