import React from "react";

const ContainerContent = ({
	children,
	className,
}: {
	children: React.ReactNode;
	className?: string;
}) => {
	return <div className={`py-8 w-full h-full px-3 ${className}`}>{children}</div>;
};

export default ContainerContent;
