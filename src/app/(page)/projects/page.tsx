import type { Metadata } from "next";
import HeaderEventContent from "@/app/Components/Events/HeaderEventContent";
import WideImages from "@/app/Components/Events/WideImages";
import React from "react";
import SliderProjects from "../programs/components/SliderProjects";
import { ItemEventOdd } from "../isa-team/components/ItemEventOdd";
import SosmedHighlight from "@/app/Components/SosmedHighlight";
import { DataSocial } from "@/app/Components/SocialComponents";
import { DataProjects } from "@/app/lib/DataProjects";

export const metadata: Metadata = {
  title: "Projects | Asian Surf Performance Academy",
  description: "Check our recent projects!",
  openGraph: {
    title: "Projects | Asian Surf Performance Academy",
    images: [
      {
        url: "/assets/projects/project_thumbnail.png",
        width: 1200,
        height: 630,
        alt: "Og images",
      },
    ],
    type: "website",
    locale: "en_US",
    siteName: "Asian Surf Performance Academy",
  },
  twitter: {
    title: "Projects | Asian Surf Performance Academy",
    description: "Check our recent projects!",
    images: [
      {
        url: "/assets/projects/project_thumbnail.png",
        width: 1200,
        height: 630,
        alt: "Og images",
      },
    ],
  },
};

export default function ProjectsPage() {
  const JackClinic = DataProjects[0];
  const CaioClinic = DataProjects[1];
  const RisingStarClinic = DataProjects[2];
  const JuniorTeamClinic = DataProjects[3];

  return (
    <div className="container-content">
      <div className="h-fit w-full">
        <HeaderEventContent
          logo="/brand/ASPA-white.svg"
          title="asian surf performance academy"
          images="/assets/projects/main-background.webp"
          theme="bg-gradient-to-r from-brand to-brand/0 xl:bg-brand"
          color="bg-gradient-to-r from-brand to-brand/0"
        />
        <div className="opening-gate py-8 pl-4 md:pl-16">
          <h1 className="big-simple-text w-full text-2xl font-light uppercase md:w-[400px] md:text-4xl">
            check our recent projects!
          </h1>
        </div>
      </div>
      <WideImages images={"/assets/projects/project_thumbnail.webp"} />
      <SliderProjects data={DataProjects} />
      <WideImages
        images={"/assets/projects/project_thumbnail_2.webp"}
        className="mt-8"
      />
      <ItemEventOdd
        title={JackClinic.title}
        description={JackClinic.description}
        link={JackClinic.url}
        image={JackClinic.image}
        alt={JackClinic.title}
        oddBy={true}
      />
      <ItemEventOdd
        title={CaioClinic.title}
        description={CaioClinic.description}
        link={CaioClinic.url}
        image={CaioClinic.image}
        alt={CaioClinic.title}
        oddBy={false}
      />
      <ItemEventOdd
        title={RisingStarClinic.title}
        description={RisingStarClinic.description}
        link={RisingStarClinic.url}
        image={RisingStarClinic.image}
        alt={RisingStarClinic.title}
        oddBy={true}
      />
      <ItemEventOdd
        title={JuniorTeamClinic.title}
        description={JuniorTeamClinic.description}
        link={JuniorTeamClinic.url}
        image={JuniorTeamClinic.image}
        alt={JuniorTeamClinic.title}
        oddBy={false}
      />
      <SosmedHighlight data={DataSocial} />
    </div>
  );
}
