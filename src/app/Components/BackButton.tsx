"use client";
import Link from "next/link";
import React from "react";
import Button from "./Button";
import { ArrowLeft } from "@phosphor-icons/react";

const BackButton = ({ url, children }: { url: string; children: React.ReactNode }) => {
	return (
		<div className="pb-8 w-full border-buttom">
			<Link href={url} className="group w-fit">
				<Button label="Back" variant="iconPrimary">
					<ArrowLeft className="group-hover:-translate-x-1 duration-300" />{children}
				</Button>
			</Link>
		</div>
	);
};

export default BackButton;
