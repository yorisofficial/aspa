"use client";

import React from "react";
import ContainerContent from "../../Container";
import ListTestimonials from "./ListTestimonials";
import { OurTestimonial } from "@/app/lib/program/testimonial/TestimonialQuotes";
import { motion } from "framer-motion";

const TestimonialPage = () => {
  return (
    <ContainerContent
      url="/testimoni"
      className="border-buttom space-y-8 px-0 py-8"
    >
      <div className="our-team header flex w-full flex-col items-start justify-between gap-8 xl:flex-row">
        <motion.div
          initial={{ translateX: "-100%", opacity: 0 }}
          whileInView={{ translateX: "0%", opacity: 1 }}
          exit={{ translateX: "-100%", opacity: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="w-full md:w-1/2"
        >
          <span className="text-2xl font-light uppercase md:text-4xl">
            Testimonials from Our Surfing
          </span>
        </motion.div>
        <motion.div
          initial={{ translateX: "100%", opacity: 0 }}
          whileInView={{ translateX: "0%", opacity: 1 }}
          exit={{ translateX: "100%", opacity: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="w-full md:w-1/2"
        >
          <p className="text-justify text-sm font-light md:text-base">
            Our testimonials reflect the exceptional impact of our surfing boot
            camp, showcasing how our comprehensive training programs have
            transformed athletes into top-performing surfers with unmatched
            skills and competitive advantages.
          </p>
        </motion.div>
      </div>
      <ListTestimonials data={OurTestimonial} />
    </ContainerContent>
  );
};

export default TestimonialPage;
