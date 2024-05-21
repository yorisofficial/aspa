"use client";
import { Mouse } from "@phosphor-icons/react";
import React from "react";

const MouseAnimate = () => {
	return (
		<div className="absolute z-10 bottom-14 animate-bounce">
			<div className="flex items-center gap-4">
				<Mouse size={40} className="text-white" />
				<span className="text-3xl text-center text-white whitespace-nowrap">
					Scroll down
				</span>
			</div>
		</div>
	);
};

export default MouseAnimate;
