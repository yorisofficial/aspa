import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import LocalFont from "next/font/local";
import Navigation from "./Components/Navigation";
import FooterPage from "./Components/Footer";

const inter = Inter({
	subsets: ["latin"],
});

export const metadata: Metadata = {
	title: "ASPA",
	description: "Asian Surf Profesional Academy",
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en">
			<body className={inter.className}>
				<Navigation />
				{children}
				<FooterPage />
			</body>
		</html>
	);
}
