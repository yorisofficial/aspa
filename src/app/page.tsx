import Image from "next/image";
import HeroPage from "./hero/page";
import ContainerContent from "./Components/Container";
import Link from "next/link";
import SliderCoach from "./Components/SliderCoach";

export default function Home() {
	return (
		<main className="h-full min-h-screen">
			<HeroPage />
			<ContainerContent className="max-w-5xl mx-auto mt-20">
				<div className="illustration relative w-full h-full">
					<Image
						src={"/assets/hero-img-4.png"}
						alt=".."
						height={500}
						width={500}
						className="w-full h-[400px] rounded-xl"
					/>
					<div className="w-[450px] absolute flex flex-col gap-8 top-1/2 -translate-y-1/2 bg-white left-8 program p-8 rounded-xl">
						<div className="body-content">
							<span className="uppercase">book now</span>
							<h1 className="heading-text text-4xl font-bold text-[#07529E] uppercase">
								ASPA Groom patrol camp
							</h1>
							<p className="text-base font-light w-3/4">
								Lorem ipsum dolor sit amet
								consectetur. Eleifend dictumst quam
								venenatis feugiat mattis. Erat
								fringilla vitae amet ornare pharetra
								lectus id. Aliquet lorem congue
								mattis faucibus velit quis.
							</p>
						</div>
						<div className="cta-group">
							<Link href={"/program"}>
								<button className="bg-[#07529E] text-white font-semibold text-base px-6 py-3 rounded">
									Book now
								</button>
							</Link>
						</div>
					</div>
				</div>
			</ContainerContent>
			<ContainerContent className="max-w-5xl flex flex-col gap-8 mx-auto mt-20">
				<div className="w-full">
					<h1 className="title-section text-3xl uppercase font-bold">
						OUR COACH
					</h1>
				</div>
				<SliderCoach />
			</ContainerContent>
			<ContainerContent className="about-aspa my-32 max-w-5xl mx-auto mt-20">
				<div className="w-full h-full flex flex-col gap-8">
					<div className="profile-about gap-4 text-center flex justify-center items-center flex-col">
						<Image
							src={"/brand/ASPA-dark.svg"}
							alt="ASPA Brand"
							width={500}
							height={500}
							className="w-[300px] h-full object-cover"
						/>
						<p className="xl:max-w-[700px]">
							ASPA isn&#39;t just achieving greatness;
							rather, it&#39;s about reaching your highest
							potential as an athlete, both in and out of
							the water. Our goal is to empower excellent
							surfers like you to break through limits and
							become the best surfer you could be.
							We&#39;re not just about training athletes;
							we&#39;re about unlocking your full
							potential, taking you to new heights of
							excellence, and redefining what&#39;s
							possible to achieve for you!!
						</p>
					</div>
					<div className="moto-about flex justify-center items-center text-center flex-col gap-8">
						<div className="max-w-[400px]">
							<h1 className="text-heading">Vision</h1>
							<p>
								Support Surf Athletes to become the
								worlds best surfers and people
							</p>
						</div>
						<div className="max-w-[400px]">
							<h1 className="text-heading">Mision</h1>
							<p>
								Transform into a Performance Surf
								Academy that prioritizes athletes,
								is supported by coaches, focuses on
								performance, and integrates all
								aspects of performance
							</p>
						</div>
						<div className="cta-button">
							<Link
								href={"/about-us"}
								className="px-6 py-3 bg-blue-aspa text-white rounded"
							>
								About us
							</Link>
						</div>
					</div>
				</div>
			</ContainerContent>
		</main>
	);
}
