"use client";

import Image from "next/image";
import React from "react";

export default function WideImages({
  images,
  className,
}: {
  images: string;
  className?: string;
}) {
  return (
    <div className={`h-[400px] w-full ${className}`}>
      <Image
        src={images}
        alt={"wide images"}
        height={2400}
        width={1400}
        priority
        quality={100}
        className="h-full w-full object-cover"
      />
    </div>
  );
}
