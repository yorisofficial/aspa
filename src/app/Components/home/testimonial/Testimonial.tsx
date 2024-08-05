import React from "react";
import ContainerContent from "../../Container";
import ListTestimonials from "./ListTestimonials";
import { OurTestimonial } from "@/app/lib/TestimonialQuotes";

const TestimonialPage = () => {
  return (
    <ContainerContent
      url="/testimoni"
      className="border-buttom space-y-8 px-0 py-8"
    >
      <div className="our-team header flex w-full flex-col items-start justify-between gap-8">
        <div className="space-y-2">
          <h1 className="text-start text-xl font-black text-brand">
            Our testimonials
          </h1>
          <p className="text-sm font-normal md:text-base xl:w-1/2">
            Our testimonials reflect the exceptional impact of our surfing boot
            camp, showcasing how our comprehensive training programs have
            transformed athletes into top-performing surfers with unmatched
            skills and competitive advantages.
          </p>
        </div>
      </div>
      <ListTestimonials data={OurTestimonial} />
    </ContainerContent>
  );
};

export default TestimonialPage;
