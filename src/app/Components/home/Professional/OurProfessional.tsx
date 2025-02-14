import React from "react";
import ContainerContent from "../../Container";
import SlideTeam from "../../SlideTeam";
import Link from "next/link";
import Button from "../../Button";
import { Home } from "@/app/lib/Home";

const OurProfessional = () => {
  return (
    <ContainerContent
      url="/our-team"
      className="section-our-professional-teams py-8"
    >
      <div className="our-professional-teams grid grid-cols-1 gap-4 py-8 md:grid-cols-2 md:gap-5">
        <div className="our-team h-fit w-full">
          <div className="flex w-full flex-col items-start justify-center space-y-2 text-center">
            <h1 className="text-start text-2xl font-light uppercase md:text-4xl">
              {Home[3].title}
            </h1>
            <p className="text-justify text-sm font-light md:text-base">
              {Home[3].description}
            </p>
          </div>
          <Link href={"/team"} className="mt-6 flex">
            <Button label="see more" variant="primary">
              {Home[3].url}
            </Button>
          </Link>
        </div>
        <SlideTeam />
      </div>
    </ContainerContent>
  );
};

export default OurProfessional;
