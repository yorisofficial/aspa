import OurProfessional from "./Components/home/Professional/OurProfessional";
import UpcomingEvent from "./Components/home/Event/UpcomingEvent";
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
        <UpcomingEvent />
        <BlogSection />
        <OurProfessional />
      </div>
    </main>
  );
}
