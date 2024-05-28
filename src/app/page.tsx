import HeroSection from "./Components/home/Hero/HeroSection";
import OurProgram from "./Components/home/Program/OurProgram";
import OurProfessional from "./Components/home/Professional/OurProfessional";
import AboutUs from "./Components/home/About/AboutUs";
import OurService from "./Components/home/Service/OurService";
import UpcomingEvent from "./Components/home/Event/UpcomingEvent";

export default function Home() {
  return (
    <main className="h-full min-h-screen ">
      <HeroSection />
      <div className="content-body px-4 md:px-8 xl:px-0">
        <AboutUs />
        <OurProgram />
        <OurService title="Our Service" />
        <UpcomingEvent />
        <OurProfessional />
      </div>
    </main>
  );
}
