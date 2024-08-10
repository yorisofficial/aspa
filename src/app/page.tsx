import OurProfessional from "./Components/home/Professional/OurProfessional";
import RisingStarProgram from "./Components/home/Event/RisingStarProgram";
import BlogSection from "./Components/home/news/BlogSection";
import TestimonialPage from "./Components/home/testimonial/Testimonial";
import HeroSection2 from "./Components/home/Hero/HeroSection2";
import VideoComponents from "./Components/home/VideoPreview/VideoComponents";

export default function Home() {
  return (
    <main className="h-full w-full">
      <HeroSection2 />
      <div className="content-body relative px-4 md:px-8 xl:px-0">
        <VideoComponents />
        <TestimonialPage />
        <RisingStarProgram />
        <BlogSection />
        <OurProfessional />
      </div>
    </main>
  );
}
