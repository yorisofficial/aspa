"usse client";
import { CaretLeft, CaretRight } from "@phosphor-icons/react";
import React from "react";
import { useSwiper } from "swiper/react";

const ButtonSlideSwiper = ({ className }: { className?: string }) => {
  const swiper = useSwiper();

  return (
    <div
      className={`flex w-full items-center justify-start gap-4 md:justify-start ${className}`}
    >
      <button
        aria-label="Button prev slide"
        onClick={() => swiper.slidePrev()}
        className="border-bordered rounded-full border p-3 text-black delay-100 focus:bg-black focus:text-white"
      >
        <CaretLeft size={24} />
      </button>
      <button
        aria-label="Button next slide"
        onClick={() => swiper.slideNext()}
        className="border-bordered rounded-full border bg-black p-3 text-black text-white delay-100 focus:bg-black focus:text-white "
      >
        <CaretRight size={24} />
      </button>
    </div>
  );
};

export default ButtonSlideSwiper;
