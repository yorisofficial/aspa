"use client";
import Link from "next/link";
import React from "react";
import Button from "./Button";

const BackButton = ({ url, children }: { url: string; children: React.ReactNode }) => {
	return (
		<div className="pb-8 w-full border-b border-primary">
			<Link href={url} className="">
				<Button label="Back" variant="primary">
					{children}
				</Button>
			</Link>
		</div>
	);
};

export default BackButton;
