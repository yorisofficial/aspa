import Image from "next/image";
import Link from "next/link";
import React from "react";

const Branding = ({ isScroll }: { isScroll: boolean }) => {
  return (
    <Link href="/" className="inline-block">
      <Image
        src={isScroll ? "/brand/ASPA-dark.svg" : "/brand/ASPA-white.svg"}
        alt="ASPA Brand"
        height={300}
        width={300}
        quality={75}
        priority={false}
        className={`h-full w-40 object-fill ${isScroll ? "invert-0" : "invert"}`}
      />
    </Link>
  );
};

export default Branding;
