"use client";

import Image from "next/image";
import React from "react";

export default function WideImages({ images }: { images: string }) {
  return (
    <div className="h-[400px] w-full">
      <Image
        src={images}
        alt={"."}
        height={2400}
        width={1000}
        priority
        quality={100}
        className="h-full w-full object-cover"
      />
    </div>
  );
}
