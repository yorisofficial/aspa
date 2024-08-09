"use client";
import { CaretUp } from "@phosphor-icons/react";
import React from "react";
import { motion } from "framer-motion";

const ButtonUp = () => {
  const handleUp = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };
  return (
    <div className="fixed bottom-[15%] right-[5%] z-10 flex items-end justify-end md:right-[10%]">
      <motion.button
        whileTap={{ scale: 0.8 }}
        transition={{ duration: 0.2 }}
        onClick={handleUp}
        aria-label="Back to top"
        className="h-fit w-fit rounded-xl bg-black p-2 text-white"
      >
        <CaretUp size={32} />
      </motion.button>
    </div>
  );
};

export default ButtonUp;
