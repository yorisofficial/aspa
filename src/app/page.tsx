import HeroSection from "./Components/home/Hero/HeroSection";
import OurProgram from "./Components/home/Program/OurProgram";
import OurProfessional from "./Components/home/Professional/OurProfessional";
import OurService from "./Components/home/Service/OurService";
import UpcomingEvent from "./Components/home/Event/UpcomingEvent";
import BlogSection from "./Components/home/news/BlogSection";

export default function Home() {
  return (
    <main className="h-full w-full">
      <HeroSection />
      <div className="content-body relative px-4 md:px-8 xl:px-0">
        <OurProgram />
        <OurService title="Our Services" />
        <UpcomingEvent />
        <BlogSection />
        <OurProfessional />
      </div>
    </main>
  );
}
