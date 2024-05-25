import React from "react";

const Description = ({ text, className }: { text: string; className?: string }) => {
	return (
		<>
			<p
				className={`${className} text-start font-light text-base w-full xl:w-3/4`}
			>
				{text}
			</p>
		</>
	);
};

export default Description;
