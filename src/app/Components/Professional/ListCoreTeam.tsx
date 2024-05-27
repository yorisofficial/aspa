"use client";
import Image from "next/image";
import { useRouter } from "next/navigation";
import React from "react";
interface Props {
	id: number;
	full_name: string;
	nickname: string;
	title: string;
	age: number;
	experience: string;
	level: string;
	location: string;
	profile: string;
	archievement: any;
	img: string;
}

const ListCoreTeam = ({
	title,
	teamData,
	categories,
}: {
	title: string;
	teamData: Props[];
	categories: string;
}) => {
	const router = useRouter();
	const data = teamData;
	const handleDetails = (url: string) => {
		router.push(`/team/${categories}/${url}`);
	};

	return (
		<div className="simple-container flex flex-col gap-8 justify-start items-start py-8 border-b border-primary">
			<h1 className="text-3xl font-black">{title}</h1>
			<div className="flex flex-col gap-4">
				{data.map((item) => (
					<div
						key={item.id}
						className="item-core flex gap-5 p-4 rounded-xl border border-bordersolid bg-white w-[330px] drop-shadow-xl items-start justify-start"
					>
						<div className="rounded-full ring-4 ring-brand w-fit">
							<Image
								src={
									"https://via.placeholder.com/500x500"
								}
								alt="prifile-picture"
								width={500}
								height={500}
								className="w-[100px] h-[100px] object-cover rounded-full"
							/>
						</div>
						<div className="">
							<h1 className="text-base font-semibold flex flex-col justify-start items-start">
								<span className="font-light text-xs">
									full name
								</span>
								{item.full_name}
							</h1>
							<h1 className="text-base font-semibold flex flex-col justify-start items-start">
								<span className="font-light text-xs">
									title
								</span>
								{item.title}
							</h1>
							<h1 className="text-base font-semibold flex flex-col justify-start items-start">
								<span className="font-light text-xs">
									location near
								</span>
								{item.location}
							</h1>
							<button
								className="text-xs text-start underline underline-offset-4"
								onClick={() =>
									handleDetails(
										item.full_name
											.replaceAll(
												" ",
												"-"
											)
											.toLocaleLowerCase()
									)
								}
							>
								More details of{" "}
								{item.nickname
									? item.full_name.split(
											" "
									  )[0]
									: item.nickname}
							</button>
						</div>
					</div>
				))}
			</div>
		</div>
	);
};

export default ListCoreTeam;
