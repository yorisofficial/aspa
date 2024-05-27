"use client";
import Image from "next/image";
import { useRouter } from "next/navigation";
import React from "react";
interface Props {
	id: number;
	full_name: string;
	nickname: string;
	Age: number;
	title: string;
	certificate: boolean;
	experience: string;
	location: string;
	profile: string;
	img: string;
}

const ListTeam = ({ data, categories }: { data: Props[]; categories: string }) => {
	const dataProps = data;
	const router = useRouter();

	const handleDetails = (url: string) => {
		router.push(
			`/team/ASPA ${categories.replaceAll(" ", "-").toLocaleLowerCase()}/${url}`
		);
	};

	return (
		<div className="w-full h-full grid grid-cols-2 xl:grid-cols-3 gap-2">
			{dataProps.map((item) => (
				<div
					key={item.id}
					className="item-core flex flex-col md:flex-row gap-5 p-4 rounded-xl border border-bordersolid bg-white max-w-[330px] drop-shadow-xl items-start justify-start"
				>
					<div className="header-list rounded-full ring-4 ring-brand w-fit">
						<Image
							src={"https://via.placeholder.com/500x500"}
							alt="prifile-picture"
							width={500}
							height={500}
							className="w-24 h-24 max-w-[100px] max-h-[100px] object-cover rounded-full"
						/>
					</div>
					<div className="body-list flex flex-col gap-2">
						<h1 className="text-base font-semibold capitalize flex flex-col justify-start items-start">
							<span className="font-light text-xs">
								full name
							</span>
							{item.full_name}
						</h1>
						<h1 className="text-base font-semibold capitalize flex flex-col justify-start items-start">
							<span className="font-light text-xs">
								title
							</span>
							{item.title}
						</h1>
						<h1 className="text-base font-semibold capitalize flex flex-col justify-start items-start">
							<span className="font-light text-xs">
								location near
							</span>
							{item.location === ""
								? "ASPA"
								: item.location}
						</h1>
						<div className="w-full">
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
								{item.nickname === ""
									? item.full_name.split(
											" "
									  )[1]
									: item.nickname}
							</button>
						</div>
					</div>
				</div>
			))}
		</div>
	);
};

export default ListTeam;
