import HeroSection from "./Components/Hero/HeroSection";
import OurProgram from "./Components/Program/OurProgram";
import OurProfessional from "./Components/Professional/OurProfessional";
import AboutUs from "./Components/About/AboutUs";
import OurService from "./Components/Service/OurService";
import BookSession from "./Components/Book/BookSession";
import Notification from "./Components/Notification";

export default function Home() {
	return (
		<main className="h-full min-h-screen ">
			<HeroSection />
			<div className="px-4 md:px-8 xl:px-0">
				<AboutUs />
				<OurProgram />
				<OurService />
				<BookSession />
				<OurProfessional />
			</div>
		</main>
	);
}
