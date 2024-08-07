"use client";
import React, { useEffect } from "react";
import SupportPage from "../support/page";
import BackButton from "@/app/Components/BackButton";
import ContainerContent from "@/app/Components/Container";
import ASPAxGP from "@/app/Components/home/Program/Program/ASPAxGP";
import { CheckCircle } from "@phosphor-icons/react";
import Link from "next/link";
import { AspaProgram } from "@/app/Components/home/Hero/HeroSection2";

const ProgramPage = () => {
  return (
    <ContainerContent
      url="/program"
      className="min-h-screen w-full px-4 xl:px-0"
    >
      <BackButton url="/">Back to before</BackButton>
      <ASPAxGP />
      <SupportPage />
    </ContainerContent>
  );
};

export default ProgramPage;
