import React from "react";
import SupportPage from "../../support/page";
import ContainerContent from "@/app/Components/Container";
import ISAJunior from "@/app/Components/home/Program/Program/isa-pro-junior";

const RisingStarProgram = () => {
  return (
    <ContainerContent
      url="/program"
      className="min-h-screen w-full px-4 md:px-16"
    >
      <ISAJunior />
      <SupportPage />
    </ContainerContent>
  );
};

export default RisingStarProgram;
