"use client";

import { CaretDown, CaretUp } from "@phosphor-icons/react";
import React, { useState } from "react";

const AccordionAboutUs = ({
  title,
  description,
}: {
  title: string;
  description: string;
}) => {
  const [show, setShow] = useState(false);
  return (
    <>
      <div className="section-accordion mt-4 h-fit w-full border-b-[0.5px] border-black py-4">
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
          <p className="mt-2 text-justify text-base md:w-3/4">{description}</p>
        )}
      </div>
    </>
  );
};

export default AccordionAboutUs;
