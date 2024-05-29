import Image from "next/image";
import React from "react";

const ImageGroup = ({
  src,
  className,
}: {
  src: string;
  className?: string;
}) => {
  return (
    <>
      <Image
        src={src}
        alt="image-asset-academy"
        width={500}
        height={500}
        priority={false}
        className={`${className}`}
      />
    </>
  );
};

export default ImageGroup;
