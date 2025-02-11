import React from "react";
import ContainerContent from "../../Container";
import ListTestimonials from "./ListTestimonials";
import { OurTestimonial } from "@/app/lib/program/testimonial/TestimonialQuotes";

const TestimonialPage = () => {
  return (
    <ContainerContent
      url="/testimoni"
      className="border-buttom space-y-8 px-0 py-8"
    >
      <div className="our-team header flex w-full flex-col items-start justify-between gap-8">
        <div className="space-y-2">
          <h1 className="text-heading text-start">Testimonials About Us</h1>
          <p className="w-full text-sm font-normal md:text-base xl:w-3/4">
            The testimonials about us reflect the exceptional impact of ASPA in
            the surfing community.
          </p>
        </div>
      </div>
      <ListTestimonials data={OurTestimonial} />
    </ContainerContent>
  );
};

export default TestimonialPage;
