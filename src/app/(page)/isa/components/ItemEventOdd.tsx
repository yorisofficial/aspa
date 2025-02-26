"use client";

import { ArrowCircleRight } from "@phosphor-icons/react";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import { motion } from "framer-motion";

type Props = {
  title: string;
  description: string;
  link: string;
  image: string;
  alt: string;
  oddBy: boolean;
};

export function ItemEventOdd({
  title,
  description,
  link,
  image,
  alt,
  oddBy,
}: Props) {
  const [isWrap, setIsWrap] = useState(description.length > 50 ? true : false);

  return (
    <>
      <div
        id={title.replaceAll(" ", "-").toLowerCase()}
        className={`isa-surf-coach relative mt-6 w-full md:flex md:items-center ${oddBy ? "md:flex-row-reverse" : "md:flex-row"}`}
      >
        <Image
          src={image}
          alt={`Images ${alt}`}
          width={2400}
          height={800}
          priority={false}
          quality={100}
          className={`h-[250px] w-full object-cover md:h-[400px] md:w-3/4 ${oddBy ? "order-last" : "order-first"}`}
        />
        <motion.div
          initial={{ translateX: "-100%", opacity: 0 }}
          whileInView={{ translateX: 0, opacity: 1 }}
          exit={{ translateX: "-100%", opacity: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className={`absolute-content overflow-hidden p-4 drop-shadow-lg md:absolute md:z-10 md:w-[500px] md:bg-white md:p-6 ${oddBy ? "order-first md:left-16" : "order-last md:right-16"}`}
        >
          <motion.h2
            initial={{ x: -50 }}
            whileInView={{ x: 0 }}
            transition={{ duration: 0.3, delay: 0.1 }}
            viewport={{ once: true }}
            className="text-3xl font-light uppercase"
          >
            {title}
          </motion.h2>
          <motion.p
            initial={{ x: -50 }}
            whileInView={{ x: 0 }}
            transition={{ duration: 0.3, delay: 0.3 }}
            viewport={{ once: true }}
            className={`mt-2 text-start text-base font-light ${isWrap ? "line-clamp-5" : ""}`}
          >
            {description}
          </motion.p>
          <motion.button
            initial={{ x: -50 }}
            whileInView={{ x: 0 }}
            transition={{ duration: 0.3, delay: 0.5 }}
            viewport={{ once: true }}
            type="button"
            aria-label="wrap-text"
            onClick={() => setIsWrap(!isWrap)}
            className={`font-normal underline underline-offset-4`}
          >
            {!isWrap ? "Read less" : "Read more"}
          </motion.button>
          <motion.div
            initial={{ x: -50 }}
            whileInView={{ x: 0 }}
            transition={{ duration: 0.3, delay: 0.6 }}
            viewport={{ once: true }}
          >
            <Link
              target="_blank"
              href={link}
              className="group mt-4 flex w-full items-center justify-center gap-2 rounded-lg bg-primary px-4 py-2 uppercase text-white"
            >
              more information{" "}
              <ArrowCircleRight
                size={20}
                weight="light"
                className="duration-300 group-hover:translate-x-2"
              />
            </Link>
          </motion.div>
        </motion.div>
      </div>
    </>
  );
}
