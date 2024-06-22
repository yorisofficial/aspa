import type { Metadata } from "next";
import Navigation from "./Components/Navigation";
import FooterPage from "./Components/Footer";
import localFont from "next/font/local";
import ButtonUp from "./Components/ButtonUp";
import UpcamingContainer from "./Components/UpcamingContainer";
import "./globals.css";

const satoshi = localFont({
  src: [
    {
      path: "../../public/fonts/Satoshi-Light.woff2",
      weight: "300",
      style: "light",
    },
    {
      path: "../../public/fonts/Satoshi-Regular.woff2",
      weight: "400",
      style: "normal",
    },
    {
      path: "../../public/fonts/Satoshi-Medium.woff2",
      weight: "500",
      style: "semibold",
    },
    {
      path: "../../public/fonts/Satoshi-Black.woff2",
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
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${satoshi.className} bg-white`}>
        <UpcamingContainer content={false}>
          <Navigation />
          {children}
          <FooterPage />
          <ButtonUp />
        </UpcamingContainer>
      </body>
    </html>
  );
}
