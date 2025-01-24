import React from "react";
import ContainerContent from "../../Container";
import SlideTeam from "../../SlideTeam";
import Link from "next/link";
import Button from "../../Button";
import { Home } from "@/app/lib/Home";

const OurProfessional = () => {
  return (
    <ContainerContent url="/our-team" className="border-buttom h-fit py-8">
      <div className="our-professional-teams w-full space-y-8">
        <div className="our-team header flex w-full flex-col items-center justify-between gap-8">
          <div className="flex flex-col items-center justify-center space-y-2 text-center">
            <h1 className="text-heading text-center">{Home[3].title}</h1>
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
