"use client";
import React from "react";
import { AspaProgram } from "@/app/Components/home/Hero/HeroSection2";
import BackButton from "@/app/Components/BackButton";

const ProgramPage = ({ params }: { params: { slug: string } }) => {
  const data = AspaProgram.find((item) => item.id.toString() === params.slug);
  console.log();

  return (
    <div className="mx-auto min-h-screen w-full max-w-5xl">
      <BackButton url="" back={true}>
        Back to before
      </BackButton>
      <div className="content mt-4">
        <h1 className="text-3xl font-bold uppercase">{data?.title}</h1>
      </div>
    </div>
  );
};

export default ProgramPage;
