import BackButton from "@/app/Components/BackButton";
import ContainerContent from "@/app/Components/Container";
import React from "react";

const AcademyPage = () => {
	return (
		<ContainerContent url="/academy" className="w-full min-h-screen">
			<BackButton url="/">Back to main</BackButton>
		</ContainerContent>
	);
};

export default AcademyPage;
