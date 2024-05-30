import BackButton from "@/app/Components/BackButton";
import Button from "@/app/Components/Button";
import ContainerContent from "@/app/Components/Container";
import SliderProgram from "@/app/Components/home/Program/SliderProgram";
import OurService from "@/app/Components/home/Service/OurService";
import Link from "next/link";
import React from "react";
import { Booking } from "@/app/lib/Booking";
import SupportPage from "../support/page";

const ProgramPage = () => {
  const img = [
    {
      src: "/assets/images/image-1.png",
      alt: "image-asset-program",
    },
    {
      src: "/assets/images/image-2.png",
      alt: "image-asset-program",
    },
    {
      src: "/assets/images/image-3.png",
      alt: "image-asset-program",
    },
  ];
  return (
    <ContainerContent
      url="/program"
      className="min-h-screen w-full px-4 xl:px-0"
    >
      <BackButton url="/">Back to main</BackButton>
      <div className="content-section grid h-full w-full grid-cols-1 gap-8 border-b border-black py-8 pb-8 xl:grid-cols-2">
        <SliderProgram data={img} />
        <div className="details flex h-full w-full flex-col gap-8">
          <div className="content-body space-y-4">
            <div className="header">
              <span className="text-base uppercase">Program</span>
              <h1 className="text-3xl font-black text-brand">
                {Booking.title}
              </h1>
            </div>
            <p className="w-full text-sm font-light md:w-3/4">
              {Booking.description}
            </p>
          </div>
          <div className="pricing-progrm flex w-full flex-col gap-6">
            <div className="w-full">
              <span className="font-light">Price</span>
              <h1 className="text-3xl font-black">USD {Booking.price}</h1>
            </div>
            <div className="w-full">
              <Link href={Booking.url}>
                <Button label="Book now" variant="primary">
                  Book now
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
      <OurService title="GET MORE BENEFIT" />
      <SupportPage />
    </ContainerContent>
  );
};

export default ProgramPage;
