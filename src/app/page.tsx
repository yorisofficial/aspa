import Image from "next/image";
import HeroPage from "./hero/page";

export default function Home() {
	return (
		<main className="h-full min-h-screen">
			<HeroPage />
		</main>
	);
}
