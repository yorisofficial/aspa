import React from "react"
import ContainerContent from "../Container"

export const OurTestimonial = [
  {
    id: 1,
    full_name: "Rian",
    quotes: "",
    img_profile: "/assets/team/ASPA.png",
  },
  {
    id: 1,
    full_name: "Rian",
    quotes: "",
    img_profile: "/assets/team/ASPA.png",
  },
  {
    id: 1,
    full_name: "Rian",
    quotes: "",
    img_profile: "/assets/team/ASPA.png",
  },
]

const Testimonial = () => {
  return (
    <ContainerContent url="/testimoni" className="space-y-8 py-8 px-0 border-buttom">
      <div className="our-team header flex w-full flex-col items-start justify-between gap-8">
        <div className="space-y-2">
          <h1 className="text-start text-xl font-black text-brand">Our testimonials</h1>
          <p className="text-sm font-light xl:w-1/2">
            Our testimonials reflect the exceptional impact of our surfing boot camp, showcasing how
            our comprehensive training programs have transformed athletes into top-performing
            surfers with unmatched skills and competitive advantages.
          </p>
        </div>
      </div>
      <h1 className="text-base font-black">Coming Soon</h1>
    </ContainerContent>
  )
}

export default Testimonial
