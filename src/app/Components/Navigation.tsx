"use client";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React, { useState } from "react";

const Navigation = () => {
	const [isShow, setShow] = useState(false);

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
			title: "Our Program",
			link: "/program",
		},
		{
			title: "Our Team",
			link: "/team",
		},
	];
	const handleShow = () => {
		setShow(!isShow);
	};

	// check pathName
	const pathName = usePathname()

	return (
		<header className="fixed text-black top-0 left-0 z-40 w-full xl:py-8 ">
			<nav className="max-w-5xl mx-auto">
				<div className="items-center justify-between w-full px-8 py-4 bg-white xl:flex drop-shadow-xl">
					<div className="brand flex justify-between items-center">
						<Link href={"/"}>
							<Image
								src={"/brand/ASPA-dark.svg"}
								alt="logo"
								width={500}
								height={500}
								priority={false}
								className="brand w-1/2 xl:w-32 h-full"
							/>
						</Link>
						<div className="cta-button xl:hidden">
							<button
								onClick={handleShow}
								aria-label="toggle-menus"
								className="p-4 rounded bg-primary"
							>
								<svg
									xmlns="http://www.w3.org/2000/svg"
									width="24"
									height="24"
									fill="#ffffff"
									viewBox="0 0 256 256"
								>
									<path d="M224,128a8,8,0,0,1-8,8H40a8,8,0,0,1,0-16H216A8,8,0,0,1,224,128ZM40,72H216a8,8,0,0,0,0-16H40a8,8,0,0,0,0,16ZM216,184H40a8,8,0,0,0,0,16H216a8,8,0,0,0,0-16Z"></path>
								</svg>
							</button>
						</div>
					</div>
					{isShow && (
						<div className="mobile-nav w-full px-4 pt-8 h-screen bg-white text-black absolute top-20 left-0 xl:hidden">
							<ul className="h-full w-full flex flex-col gap-4">
								{menuNav.map((item, index) => (
									<Link
										onClick={handleShow}
										key={index}
										href={item.link}
										className={`${pathName === item.link ? 'bg-black text-white' : ''} py-4 px-6 rounded-xl hover:bg-black hover:text-white`}
									>
										{item.title}
									</Link>
								))}
							</ul>
						</div>
					)}
					<div className="menu-nav hidden xl:flex items-center gap-4">
						{menuNav.map((item, index) => (
							<Link
								key={index}
								href={item.link}
								className={`${pathName === item.link ? 'text-brand underline' : ''} text-lg duration-500 hover:font-medium hover:underline underline-offset-4 hover:text-brand`}
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
