import type { Metadata } from "next";
import Navigation from "./Components/Navigation";
import FooterPage from "./Components/Footer";
import localFont from "next/font/local";
import ButtonUp from "./Components/ButtonUp";
import "./globals.css";
import ScriptGoogle from "./Components/ScriptGoogle";
import Head from "next/head";
import NewFooter from "./Components/NewFooter";

const satoshi = localFont({
  src: [
    {
      path: "../../public/fonts/Satoshi-Light.ttf",
      weight: "300",
      style: "light",
    },
    {
      path: "../../public/fonts/Satoshi-Regular.ttf",
      weight: "400",
      style: "normal",
    },
    {
      path: "../../public/fonts/Satoshi-Medium.ttf",
      weight: "500",
      style: "semibold",
    },
    {
      path: "../../public/fonts/Satoshi-Black.ttf",
      weight: "900",
      style: "black",
    },
  ],
  variable: "--font-satoshi",
});

export const metadata: Metadata = {
  title: "Asian Surf Performance Academy (ASPA)",
  description:
    "The Asian Surf Performance Academy (ASPA) is where surfers reach their highest potential. Located in Bali, we focus on supporting and empowering surfers to become their best. We enhance your surfing skills and help you develop professional qualities like motivation, teamwork, and responsibility",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <meta property="og:title" content={metadata.title?.toString()} />
        <meta property="og:description" content={metadata.title?.toString()} />
      </head>
      <body
        className={`${satoshi.className} bg-white selection:bg-black selection:text-white `}
      >
        <Navigation />
        {children}
        <NewFooter />
        <ButtonUp />
        <ScriptGoogle />
      </body>
    </html>
  );
}
