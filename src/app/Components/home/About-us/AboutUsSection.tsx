"use client";

import React from "react";
import { ContentData } from "@/app/lib/Content";
import { motion } from "framer-motion";

const AboutUsSection = () => {
  return (
    <div className="container-content mt-8 h-fit w-full px-4 md:px-16">
      <div className="header-overview flex flex-col items-start justify-center gap-4 px-4 md:flex-row md:gap-5 md:px-0 xl:px-0">
        <motion.div
          initial={{ translateX: "-100%", opacity: 0 }}
          whileInView={{ translateX: "0%", opacity: 1 }}
          exit={{ translateX: "-100%", opacity: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="content-body w-full"
        >
          <span className="text-2xl font-light uppercase md:w-[400px] md:text-4xl">
            {ContentData[0].quote}
          </span>
        </motion.div>
        <motion.div
          initial={{ translateX: "100%", opacity: 0 }}
          whileInView={{ translateX: "0%", opacity: 1 }}
          exit={{ translateX: "100%", opacity: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="content-body w-full"
        >
          <p className="text-justify text-sm font-light md:text-base">
            {ContentData[0].description}
          </p>
        </motion.div>
      </div>
    </div>
  );
};

export default AboutUsSection;
