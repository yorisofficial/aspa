import React from "react";
import SupportPage from "../../support/page";
import ContainerContent from "@/app/Components/Container";
import ISAJunior from "@/app/Components/home/Program/Program/isa-pro-junior";

const RisingStarProgram = () => {
  return (
    <ContainerContent
      url="/program"
      className="min-h-screen w-full px-4 xl:px-0"
    >
      <ISAJunior />
      <SupportPage />
    </ContainerContent>
  );
};

export default RisingStarProgram;
