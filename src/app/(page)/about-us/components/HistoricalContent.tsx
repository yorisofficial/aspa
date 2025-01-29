"use client";

import React from "react";
import { motion } from "framer-motion";

const HistoricalContent = () => {
  return (
    <>
      <div className="historical-content mx-auto mt-4 flex h-fit w-full max-w-6xl flex-col items-start justify-between px-4 md:mt-6 md:flex-row md:gap-5 md:px-10 xl:mt-8 xl:px-0">
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
            Behind and supporting ASPA is the Asian Surf Cooperative or ASC,
            with over 20 years of experience in the surf industry. As a
            professional surfing organization, ASC has nearly two decades of
            experience in organizing, managing, and supporting surfing events
            across the Asian Region, from local boardriders club competitions to
            World Championship Tour events, including the recent 2022 Quiksilver
            Pro G-Land. Bali offers everything a surfer needs to develop and
            improve their skills to become one of the best surfers in the world.
            With a wide variety of waves, both reef and sand, and a vibrant
            surfing community, ASPA provides a specialized space for surfers to
            enjoy and learn. With top coaches and trainers, athletes have access
            to various activities and training sessions. At ASPA, we aim to
            provide the best performance experience for the best surfers,
            offering fully equipped facilities and an environment tailored for
            success.
          </p>
        </motion.div>
      </div>
    </>
  );
};

export default HistoricalContent;
