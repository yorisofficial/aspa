import { Metadata } from "next";
import AboutUsSection from "./Components/home/About-us/AboutUsSection";
import HighLightProgram from "./Components/home/Event/HighLightProgram";
import HeroSection2 from "./Components/home/Hero/HeroSection2";
import BlogSection from "./Components/home/news/BlogSection";
import OurProfessional from "./Components/home/Professional/OurProfessional";
import { ISAJuniorSliderImg } from "./Components/home/Program/Program/isa-pro-junior";
import { ContentISAJunior } from "./Components/home/Program/Program/isa-pro-junior";
import TestimonialPage from "./Components/home/testimonial/Testimonial";
import SliderPackage from "./Components/SliderPackage";
import SliderProgram from "./Components/home/Program/SliderProgram";
import { DataCourse } from "./lib/DataCourse";

export const metadata: Metadata = {
  title: "Asian Surf Performance Academy (ASPA)",
  description:
    "ASPA is a professional surf academy in Bali, Indonesia that helps surfers reach their highest potential. We focus on supporting and empowering surfers to become their best, and provide a platform for them to excel in their surfing careers.",
  openGraph: {
    title: "Asian Surf Performance Academy (ASPA)",
    description:
      "ASPA is a professional surf academy in Bali, Indonesia that helps surfers reach their highest potential. We focus on supporting and empowering surfers to become their best, and provide a platform for them to excel in their surfing careers.",
    images: [
      {
        url: "/assets/hero-img-1.webp",
        width: 1200,
        height: 800,
        alt: "ASPA - Unlock your full potential with ASPA world-class training and guidance.",
      },
    ],
  },
};

export default async function Home() {
  return (
    <main className="h-full w-full overflow-x-hidden">
      <HeroSection2 />
      <AboutUsSection />
      <HighLightProgram
        content={ContentISAJunior}
        images={ISAJuniorSliderImg}
      />
      <TestimonialPage />
      <BlogSection />
      <OurProfessional />
    </main>
  );
}
