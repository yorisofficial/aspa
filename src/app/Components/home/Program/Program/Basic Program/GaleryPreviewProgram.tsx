"use client";
import Image from "next/image";
import React from "react";

interface Props {
  id: number;
  src: string;
}

const GaleryPreviewProgram = ({
  firstImage,
  dataImage,
}: {
  firstImage: string;
  dataImage: Props[];
}) => {
  return (
    <div className="preview-image mt-8 grid grid-cols-1 gap-4 xl:gap-6">
      <div className="primary-image">
        <Image
          src={firstImage}
          alt={"preview-image"}
          priority
          width={2400}
          height={1800}
          quality={100}
          className="h-[200px] w-full rounded-xl object-cover md:h-[250px] xl:h-[380px]"
        />
      </div>
      <div className="group-image h-fit w-full">
        <div className="grid w-full grid-cols-2 gap-6 md:grid-cols-4">
          {dataImage.slice(1, 5).map((item, index) => (
            <div key={index} className="item-image">
              <Image
                src={item.src}
                alt={"preview-image"}
                priority
                width={1200}
                height={500}
                quality={75}
                className="h-[100px] w-full rounded-xl object-cover md:h-[150px] xl:h-[180px]"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default GaleryPreviewProgram;
