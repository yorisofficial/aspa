"use client";
import Link from "next/link";
import React from "react";
import Button from "./Button";
import { ArrowLeft } from "@phosphor-icons/react";

const BackButton = ({ url, children }: { url: string; children: React.ReactNode }) => {
	return (
		<div className="pb-8 w-full border-b border-primary">
			<Link href={url} className="">
				<Button label="Back" variant="iconPrimary">
					<ArrowLeft />{children}
				</Button>
			</Link>
		</div>
	);
};

export default BackButton;
