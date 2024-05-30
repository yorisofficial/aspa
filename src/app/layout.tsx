import "./globals.css";
import type { Metadata } from "next";
import Navigation from "./Components/Navigation";
import FooterPage from "./Components/Footer";
import localFont from "next/font/local";
import { Analytics } from "@vercel/analytics/react";

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
  title: "Asian Surf Performance Academy",
  description: "Asian Surf Profesional Academy (ASPA)",
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
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
      </head>
      <body className={satoshi.className}>
        <Navigation />
        {children}
        <FooterPage />
        <Analytics />
      </body>
    </html>
  );
}
