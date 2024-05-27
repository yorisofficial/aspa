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
			className={`max-w-5xl pt-32 pb-8 px-4 xl:px-0 xl:pt-8 xl:pb-8 mx-auto container h-full ${pathUse} ${className}`}
		>
			{children}
		</div>
	);
};

export default ContainerContent;
