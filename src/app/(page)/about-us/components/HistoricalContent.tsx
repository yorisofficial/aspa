"use client";

import React, { Suspense } from "react";
import { motion } from "framer-motion";
import AccordionAboutUs from "@/app/Components/AccordionAboutUs";
import Loading from "@/app/loading";

const HistoricalContent = () => {
  const motoBrand = [
    {
      title: "Vision",
      description:
        "To be a global leader in surf performance and education, inspiring individuals to achieve excellence, embrace the ocean responsibly, and contribute to the growth and sustainability of surfing worldwide.",
    },
    {
      title: "Mision",
      description:
        "To empower surfers of all levels through high-quality coaching, surf education, and professional development, fostering a community that values performance, sustainability, and growth both in and out of the water.",
    },
  ];

  return (
    <div className="mx-auto mt-8 grid grid-cols-1 items-start justify-center gap-4 px-4 md:grid-cols-2 md:gap-5 md:px-16">
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
        <div className="moto-section tems-start mx-auto mt-4 flex h-fit w-full max-w-6xl flex-col justify-between px-4 md:mt-6 md:gap-5 md:px-10 xl:px-0">
          <Suspense fallback={<Loading />}>
            {motoBrand.map((item, index) => (
              <AccordionAboutUs
                key={index}
                title={item.title}
                indexOf={index}
                description={item.description}
              />
            ))}
          </Suspense>
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
