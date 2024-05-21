"use client";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const Navigation = () => {
	const menuNav = [
		{
			title: "Home",
			link: "/",
		},
		{
			title: "Academy",
			link: "/academy",
		},
		{
			title: "Program",
			link: "/program",
		},
		{
			title: "Couching",
			link: "/couch",
		},
		{
			title: "Team",
			link: "/team",
		},
	];
	return (
		<header className="fixed top-0 left-0 z-40 w-full py-8 ">
			<nav className="max-w-5xl mx-auto">
				<div className="items-center justify-between hidden w-full px-8 py-4 bg-white drop-shadow-xl rounded-xl xl:flex">
					<div className="brand">
						<Link href={"/"}>
							<Image
								src={"/brand/ASPA-dark.svg"}
								alt="logo"
								width={100}
								height={100}
								className="object-cover w-32"
							/>
						</Link>
					</div>
					<div className="flex items-center gap-4 menu-nav">
						{menuNav.map((item, index) => (
							<Link
								key={index}
								href={item.link}
								className="text-xl duration-500 hover:font-medium hover:underline underline-offset-4 hover:text-blue-700"
							>
								{item.title}
							</Link>
						))}
					</div>
				</div>
			</nav>
		</header>
	);
};

export default Navigation;
