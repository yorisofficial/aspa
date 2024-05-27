import React from "react";
import ContainerContent from "../Container";
import Button from "../Button";
import Image from "next/image";
import Link from "next/link";
import { Home } from "@/app/lib/Home";

const BookSession = () => {
	return (
		<ContainerContent url="book-session" className="relative py-8 border-buttom">
			<div className="absolute top-0 left-1/2 -translate-x-1/2">
				<Image
					src={"/assets/acc/title-cover-simple.svg"}
					alt="acc-line"
					width={500}
					height={500}
					className="w-[200px] h-[200px]"
				/>
			</div>
			<div className="book-section w-full text-white flex flex-col justify-center items-center gap-8 bg-primary p-4">
				<div className="details text-center flex flex-col xl:justify-center xl:items-center gap-2">
					<span className="font-light text-sm uppercase">
						{Home[2].sub}
					</span>
					<h1 className="text-xl xl:text-2xl font-black">
						{Home[2].title}
					</h1>
					<p className="font-light text-sm xl:w-1/2">{Home[2].description}</p>
				</div>
				<div className="cta text-center">
					<Link href={"/book"} target="_blank">
						<Button label="Book now" variant="invert">
							{Home[2].url}
						</Button>
					</Link>
				</div>
			</div>
		</ContainerContent>
	);
};

export default BookSession;
