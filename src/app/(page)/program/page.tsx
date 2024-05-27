import BackButton from "@/app/Components/BackButton";
import ContainerContent from "@/app/Components/Container";
import React from "react";

const ProgramPage = () => {
	return (
		<ContainerContent url="/program" className="w-full min-h-screen px-4 xl:px-0">
			<BackButton url="/">Back to main</BackButton>
		</ContainerContent>
	);
};

export default ProgramPage;
