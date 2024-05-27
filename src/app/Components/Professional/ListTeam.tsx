"use client";
import { ArrowUpRight, Certificate } from "@phosphor-icons/react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import React from "react";
interface Props {
	id: number;
	full_name: string;
	nickname: string;
	Age: number;
	title: string;
	certificated: boolean;
	experience: string;
	isa: boolean,
	location: string;
	profile: string;
	img: string;
}

const ListTeam = ({ data, categories }: { data: Props[]; categories: string }) => {
	const dataProps = data;
	const router = useRouter();

	const handleDetails = (url: string) => {
		router.push(
			`/team/${categories.replaceAll(" ", "-").toLocaleLowerCase()}/${url}`
		);
	};

	return (
		<div className="w-full h-full grid grid-cols-2 xl:grid-cols-3 gap-2">
			{dataProps.map((item) => (
				<div
					key={item.id}
					className="item-core flex flex-col gap-5 p-4 rounded-xl border border-bordersolid bg-white max-w-[330px] drop-shadow-xl items-start justify-start"
				>
					<div className="flex items-start flex-col md:flex-row gap-4">
						<div className="header-list relative rounded-full ring-4 ring-brand w-fit h-fit">
							<Image
								src={"https://via.placeholder.com/500x500"}
								alt="prifile-picture"
								width={500}
								height={500}
								className="w-24 h-24 max-w-[100px] max-h-[100px] object-cover rounded-full"
							/>
							{item?.isa ? (
								<div className="p-2 rounded-full top-full left-1/2 -translate-y-1/2 -translate-x-1/2 text-white flex gap-2 items-center bg-brand absolute">
									<Certificate size={20} />
									<span className="text-sm">
										ISA
									</span>
								</div>
							) : null}
						</div>
						<div className="body-list flex flex-col gap-2 mt-4 xl:mt-0">
							<h1 className="text-base font-semibold capitalize flex flex-col justify-start items-start">
								<span className="font-light text-xs">
									{item.nickname === "" ? "Full name" : "Nickname"}
								</span>
								{item.nickname === "" ? item.full_name : item.nickname}
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
						</div>
					</div>
					<div className="w-full flex justify-start items-center">
						<button
							className="text-xs flex items-center text-start underline underline-offset-4"
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
							Details {item.nickname === ""
								? item.full_name.split(
									" "
								)[1]
								: item.nickname}
							<ArrowUpRight />
						</button>
					</div>
				</div>
			))}
		</div>
	);
};

export default ListTeam;
