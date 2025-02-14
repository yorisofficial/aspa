"use client";

import { CaretDown, CaretUp } from "@phosphor-icons/react";
import React, { useState } from "react";
import { motion } from "framer-motion";

const AccordionAboutUs = ({
  title,
  description,
  indexOf,
}: {
  title: string;
  description: string;
  indexOf: number;
}) => {
  const [show, setShow] = useState(true);
  return (
    <>
      <motion.div
        initial={{ translateX: "100%", opacity: 0 }}
        whileInView={{ translateX: "0%", opacity: 1 }}
        exit={{ translateX: "-100%", opacity: 0 }}
        transition={{ duration: 0.3, delay: indexOf * 0.05 }}
        viewport={{ once: true }}
        className="section-accordion h-fit w-full border-b-[0.5px] border-black py-4 transition-all duration-500 ease-in-out"
      >
        <button
          type="button"
          aria-label="about us mission and vision"
          onClick={() => setShow(!show)}
          className={`flex w-full items-center justify-between `}
        >
          <span className="text-base uppercase">{title}</span>
          {show ? <CaretUp size={24} /> : <CaretDown size={24} />}
        </button>
        {show && (
          <p className="mt-2 text-justify text-base xl:w-3/4">{description}</p>
        )}
      </motion.div>
    </>
  );
};

export default AccordionAboutUs;
