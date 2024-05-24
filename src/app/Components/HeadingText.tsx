import React from "react";

const HeadingText = ({ title, className }: { title: string; className?: string }) => {
	return (
		<>
			<h1 className={`${className} title font-semibold text-brand text-xl`}>
				{title}
			</h1>
		</>
	);
};

export default HeadingText;
