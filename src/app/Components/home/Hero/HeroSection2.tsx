"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

const HeroSection2 = () => {
  return (
    <div className="hero-section relative">
      <Image
        src={"/assets/hero-img-1.webp"}
        alt="..."
        width={2400}
        height={800}
        priority
        style={{
          width: "100%",
          height: "500px",
          objectFit: "cover",
        }}
        className="h-[500px] w-full object-cover object-center"
      />
      <div className="absolute bottom-0 left-0 h-fit w-full">
        <Image
          src={"/assets/acc/wave-bottom.svg"}
          alt="..."
          width={2400}
          height={500}
          priority
          className="h-fit w-full object-contain"
        />
      </div>
    </div>
  );
};

export default HeroSection2;
