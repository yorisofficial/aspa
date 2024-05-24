import HeroSection from "./Components/Hero/HeroSection";
import OurProgram from "./Components/Program/OurProgram";
import OurProfessional from "./Components/Professional/OurProfessional";
import AboutUs from "./Components/About/AboutUs";

export default function Home() {
	return (
		<main className="h-full min-h-screen">
			<HeroSection />
			<OurProgram />
			<OurProfessional />
			<AboutUs />
		</main>
	);
}
