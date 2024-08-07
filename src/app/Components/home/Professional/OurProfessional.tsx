import React from "react";
import ContainerContent from "../../Container";
import SlideTeam from "../../SlideTeam";
import Link from "next/link";
import Button from "../../Button";
import { Home } from "@/app/lib/Home";

const OurProfessional = () => {
  return (
    <ContainerContent url="/our-team" className="border-buttom py-8">
      <div className="our-professional-teams h-full w-full space-y-8">
        <div className="our-team header flex w-full flex-col items-start justify-between gap-8">
          <div className="space-y-2">
            <h1 className="text-start text-xl font-black text-brand">
              {Home[3].title}
            </h1>
            <p className="text-sm font-normal md:text-base xl:w-1/2">
              {Home[3].description}
            </p>
          </div>
          <Link href={"/team"} className="">
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
