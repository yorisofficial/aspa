"use client";
import BackButton from "@/app/Components/BackButton";
import ContainerContent from "@/app/Components/Container";
import { calculateAge } from "@/app/Components/SliderCoach";
import { CoreTeam, SurfTeam, ExpertTeam, VideographerTeam } from "@/app/lib/data";
import { InstagramLogo } from "@phosphor-icons/react";
import Image from "next/image";

const DetailsTeam = ({ params }: { params: { slug: string[] } }) => {
	const getTeam = params.slug[1]
		.replaceAll("%20", " ")
		.replaceAll("-", " ")
		.split(" ")
		.map((word) => word.charAt(0).toUpperCase() + word.slice(1))
		.join(" ");
	const calculateAge = (birthYear: number) => {
		const age = new Date().getFullYear() - birthYear;
		return age;
	};

	// const getTeam = params.slug[1];
	const getTitle = params.slug[0].replaceAll("%20", " ");

	const teamCore = CoreTeam.find((item) =>
		item?.full_name.includes(getTeam.replace("-", " "))
	);
	const teamSurf = SurfTeam.find((item) =>
		item?.full_name.includes(getTeam.replace("-", " "))
	);
	const teamExpert = ExpertTeam.find((item) =>
		item?.full_name.includes(getTeam.replace("-", " "))
	);
	const teamVideo = VideographerTeam.find((item) =>
		item?.full_name.includes(getTeam.replace("-", " "))
	);

	const detailsData = [teamCore, teamSurf, teamExpert, teamVideo];
	console.log();

	return (
		<ContainerContent url="team" className="">
			<BackButton url="/team">Back to team</BackButton>

			<div className="details-team py-8">
				{detailsData
					.filter((item) => item !== undefined)
					.map((item) => (
						<div key={item?.id} className="">
							<div className="quick-intro space-y-4 pb-8 w-full border-b border-black">
								<Image
									src={item?.img || ""}
									alt="profile-image"
									height={500}
									width={500}
									className="w-[100px] h-[100px] rounded-full ring-4 ring-brand object-cover"
								/>
								<div className="">
									<h1 className="text-xl font-black">
										{item?.full_name}
									</h1>

									{item?.experience && (
										<p className="text-base font-light">
											{`+${item?.experience}`}
										</p>
									)}
								</div>
							</div>
							<div className="intro py-8 border-b border-black space-y-8">
								<div className="header">
									<h1 className="text-xl font-black">
										Introduction
									</h1>
								</div>
								<div className="body flex flex-col gap-8 w-full h-full">
									<div className="details grid grid-cols-2 gap-4 w-full h-full">
										<div className="">
											<span className="text-xs font-light">
												Nickname
											</span>
											<h1 className="text-xl font-semibold">
												{item?.nickname === ""
													? item?.full_name.split(" ")[0]
													: item?.nickname
												}
											</h1>
										</div>

										<div className="">
											<span className="text-xs font-light">
												Level
											</span>
											<h1 className="text-xl font-semibold">{item?.level}</h1>
										</div>
										<div className="">
											<span className="text-xs font-light">
												Age
											</span>
											<h1 className="text-xl font-semibold">
												{item?.age ? calculateAge(item?.age) : '-'}y.o
											</h1>
										</div>
										<div className="">
											<span className="text-xs font-light">
												Location
												near
											</span>
											<h1 className="text-xl font-semibold">
												{
													item?.location
												}
											</h1>
										</div>
									</div>
									<div className="archievement space-y-8">
										<div className="header">
											<h1 className="text-base font-black">
												Archievement
											</h1>
										</div>
										<ul className="w-full list-disc list-inside text-xl font-normal">
											{item?.archievement.map((item, index) =>
											(
												<li key={index}>{item?.title}</li>
											)
											)}
										</ul>
									</div>
								</div>
							</div>
							<div className="social-media py-8 space-y-8 border-b border-black">
								<h1 className="text-base font-black">
									Get in touch
								</h1>

								<div className="space-y-2">
									<div className="flex gap-4 items-center">
										<InstagramLogo
											size={24}
										/>
										<span>
											Instagram
										</span>
									</div>
									<div className="flex gap-4 items-center">
										<InstagramLogo
											size={24}
										/>
										<span>
											Soorfinc
										</span>
									</div>
								</div>
							</div>
						</div>
					))}
			</div>
		</ContainerContent>
	);
};

export default DetailsTeam;
