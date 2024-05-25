"use client";
import { InstagramLogo, WhatsappLogo, XLogo, YoutubeLogo } from "@phosphor-icons/react";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const FooterPage = () => {
	return (
		<div className="w-full gap-4 mt-8 py-8 h-full bg-primary text-white flex flex-col justify-center items-center">
			<Image
				src={"/brand/ASPA-white.svg"}
				alt="ASPA Logo"
				width={500}
				height={500}
				priority={false}
				className="w-[200px] h-full object-cover"
			/>
			<div className="xl:max-w-[368px] text-center">
				<address>
					Jl Subak Sari Barat, Gg. Sri Kahyangan No.77, Tibubeneng,
					Kec. Kuta Utara, Kabupaten Badung, Bali 80361
				</address>
				<span>Tel : +62 811562426666</span>
			</div>
			<div className="cta-whatsapp">
				<Link
					href={"wa.me/6285156242689"}
					className="flex gap-2 items-center p-2 rounded bg-white text-black"
				>
					<WhatsappLogo size={24} />
					chat on Whatsaap
				</Link>
			</div>
			<div className="list-social">
				<div className="flex gap-8 items-center">
					<Link
						href={"https://www.instagram.com/asiansurfacademy/"}
						aria-label="Connect on Instagram"
					>
						<InstagramLogo size={32} />
					</Link>
					<Link
						href={"https://x.com/asiansurfacademy"}
						aria-label="Connect on Twitter"
					>
						<XLogo size={32} />
					</Link>
					<Link
						href={"https://www.youtube.com/@asiansurfacademy"}
						aria-label="Subscribe ASPA on Youtube"
					>
						<YoutubeLogo size={32} />
					</Link>
				</div>
			</div>
			<div className="copyright-section">
				<span>&copy;2024 ASPA All rights reserved</span>
			</div>
		</div>
	);
};

export default FooterPage;
