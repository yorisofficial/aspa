"use client";
import { useRouter } from "next/navigation";
import React from "react";

interface Props {
	label: string;
	children: React.ReactNode;
	onClick?: () => void;
	variant: "primary" | "invert" | "border" | "iconPrimary";
	className?: string;
}

const Button: React.FC<Props> = ({ className, label, children, onClick, variant }) => {
	const buttonStyle = {
		primary: "px-6 py-3 border-2 border-primary bg-primary text-white capitalize",
		invert: "px-6 py-3 border-2 border-white bg-white text-primary capitalize",
		border: "px-6 py-3 border-2 border-primary bg-primary text-primary capitalize",
		link: "text-base underlined capitalize",
		iconPrimary:
			"flex justify-center items-center gap-3 pl-3 pr-6 py-3 bg-primary text-white capitalize",
	};

	const buttonClass = `${buttonStyle[variant]} ${className}`;

	const router = useRouter();

	return (
		<>
			<button aria-label={label} onClick={onClick} className={buttonClass}>
				{children}
			</button>
		</>
	);
};

export default Button;
