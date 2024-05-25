import React from "react";
import ContainerContent from "../Container";
import Button from "../Button";
import Image from "next/image";
import Link from "next/link";

const BookSession = () => {
	return (
		<ContainerContent url="book-session" className="relative">
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
					<span className="font-light text-base uppercase">
						Book now
					</span>
					<h1 className="text-xl font-black">
						ASPA x Grom Patrol Program
					</h1>
					<p className="font-light text-sm xl:w-1/2">
						Lorem ipsum dolor sit amet consectetur. Mi tincidunt
						risus venenatis nunc. Sit sed molestie ac vitae nam
						ultrices. Et ac lacus non fermentum mattis dignissim
						faucibus. Odio et risus magna enim mauris bibendum.
					</p>
				</div>
				<div className="cta text-center">
					<Link href={"/book"} target="_blank">
						<Button label="Book now" variant="invert">
							Book the program now
						</Button>
					</Link>
				</div>
			</div>
		</ContainerContent>
	);
};

export default BookSession;
