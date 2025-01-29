"use client";

import { InstagramLogo } from "@phosphor-icons/react";
import Link from "next/link";
import React from "react";
import { motion } from "framer-motion";

const HeaderSection = ({ title, about }: { title: string; about: string }) => {
  return (
    <>
      <div className="section-header flex h-fit w-full flex-col gap-4 px-4 md:items-center md:justify-center md:px-10 xl:px-0">
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.3, delay: 0.1 }}
          viewport={{ once: true }}
          className="core-content flex w-full flex-col md:items-center md:text-center"
        >
          <span className="font-bold uppercase text-brand">
            ASIAN SURF PERFORMANCE ACADEMY
          </span>
          <h2 className="big-heading text-xl uppercase md:w-3/4 md:text-3xl xl:w-1/2 xl:text-4xl">
            {title}
          </h2>
        </motion.div>
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.3, delay: 0.2 }}
          viewport={{ once: true }}
          className=" xl:w-3/4"
        >
          <p className="w-full text-justify text-base md:text-center">
            {about}
          </p>
        </motion.div>
        <Link
          href={"/"}
          target="_blank"
          aria-label="Link to instagram"
          className="group flex w-fit items-center justify-center rounded-lg border-[0.5px] border-black p-1 duration-500 hover:border-brand"
        >
          <InstagramLogo
            size={24}
            weight="fill"
            className="duration-500 group-hover:text-brand"
          />
        </Link>
      </div>
    </>
  );
};

export default HeaderSection;
