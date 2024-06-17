import React from "react"
import {Booking, urlBooking} from "@/app/lib/Booking"
import ButtonBooking from "@/app/Components/ButtonBooking"
import DownloadDocument from "@/app/Components/DownloadDocument"
import OurService from "@/app/Components/home/Service/OurService"
import SliderProgram from "@/app/Components/home/Program/SliderProgram"

const ASPAxGP = () => {
  const SliderImg = [
    {
      src: "/assets/program/grompatrol/img-1.png",
      alt: "image-asset-program",
    },
    {
      src: "/assets/program/grompatrol/img-2.png",
      alt: "image-asset-program",
    },
    {
      src: "/assets/program/grompatrol/img-3.png",
      alt: "image-asset-program",
    },
    {
      src: "/assets/program/grompatrol/img-4.png",
      alt: "image-asset-program",
    },
  ]
  return (
    <>
      <div className="content-section grid h-full w-full grid-cols-1 gap-8 border-b border-black py-8 pb-8 xl:grid-cols-2">
        <SliderProgram data={SliderImg} />
        <div className="details flex xl:order-first h-full w-full flex-col gap-8">
          <div className="content-body space-y-4">
            <div className="header">
              <span className="text-base uppercase">Program</span>
              <h1 className="text-3xl font-black text-brand">{Booking.title}</h1>
            </div>
            <p className="w-full text-sm font-light md:w-3/4">{Booking.description}</p>
          </div>
          <div className="pricing-progrm flex w-full flex-col gap-6">
            <div className="w-full">
              <span className="font-light">Price</span>
              <h1 className="text-3xl font-black text-brand">{Booking.price}</h1>
            </div>
            <div className="w-full flex gap-6 items-center">
              <ButtonBooking
                disable={true}
                url={urlBooking.url}
                title="Book now"
                variant="primary"
              />
              <DownloadDocument />
            </div>
          </div>
        </div>
      </div>
      <OurService title="GET MORE BENEFIT" />
    </>
  )
}

export default ASPAxGP
