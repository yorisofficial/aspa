import React from "react";
import ContainerContent from "./Components/Container";
import Image from "next/image";

export default function Loading() {
  return (
    <ContainerContent
      url="/"
      className="flex min-h-screen items-center justify-center"
    >
      <Image
        src={"/brand/ASPA-dark.svg"}
        width={1300}
        height={1300}
        alt="ASPA Logo"
        className="h-full w-[500px] animate-pulse"
      />
    </ContainerContent>
  );
}
