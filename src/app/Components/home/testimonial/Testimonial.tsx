import React from "react";
import ContainerContent from "../../Container";
import ListTestimonials from "./ListTestimonials";

export const OurTestimonial = [
  {
    id: 1,
    full_name: "Rian",
    gp_user: "Grom Patrol #1",
    quotes:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque nulla dolorum, voluptatem magnam itaque culpa eveniet mollitia eligendi esse sint voluptatibus voluptate provident aspernatur alias iure non a iusto odit illum quidem.",
    img_profile: "/assets/team/ASPA.webp",
  },
  {
    id: 2,
    full_name: "Rian",
    gp_user: "Grom Patrol #1",
    quotes:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque nulla dolorum, voluptatem magnam itaque culpa eveniet mollitia eligendi esse sint voluptatibus voluptate provident aspernatur alias iure non a iusto odit illum quidem.",
    img_profile: "/assets/team/ASPA.webp",
  },
  {
    id: 3,
    full_name: "Rian",
    gp_user: "Grom Patrol #2",
    quotes:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque nulla dolorum, voluptatem magnam itaque culpa eveniet mollitia eligendi esse sint voluptatibus voluptate provident aspernatur alias iure non a iusto odit illum quidem.",
    img_profile: "/assets/team/ASPA.webp",
  },
  {
    id: 3,
    full_name: "Rian",
    gp_user: "Grom Patrol #2",
    quotes:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque nulla dolorum, voluptatem magnam itaque culpa eveniet mollitia eligendi esse sint voluptatibus voluptate provident aspernatur alias iure non a iusto odit illum quidem.",
    img_profile: "/assets/team/ASPA.webp",
  },
];

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
