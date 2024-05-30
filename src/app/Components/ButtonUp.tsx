"use client";
import { CaretUp } from "@phosphor-icons/react";
import React from "react";

const ButtonUp = () => {
  const handleUp = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };
  return (
    <div className="fixed bottom-[10%] right-[5%] z-10 flex items-end justify-end md:right-[10%]">
      <button
        onClick={handleUp}
        aria-label="Back to top"
        className="h-fit w-fit rounded-xl bg-black p-2 text-white"
      >
        <CaretUp size={32} />
      </button>
    </div>
  );
};

export default ButtonUp;
