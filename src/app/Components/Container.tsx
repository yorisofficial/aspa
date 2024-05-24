"use client";
import { usePathname } from "next/navigation";
import React from "react";

const ContainerContent = ({
	children,
	className,
	url,
}: {
	children: React.ReactNode;
	className?: string;
	url: string;
}) => {
	const pathName = usePathname();
	const pathUse = `${pathName.includes(url) ? "xl:pt-[150px]" : ""}`;

	return (
		<div
			className={`max-w-5xl px-4 py-8 md:px-8 xl:px-0 mx-auto container h-full ${pathUse} ${className}`}
		>
			{children}
		</div>
	);
};

export default ContainerContent;
