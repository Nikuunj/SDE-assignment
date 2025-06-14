import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { DotBackgroundDemo } from "@/components/DotBackgroundDemo";
import { Providers } from "@/components/Provider";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Nikunj - Sde assignment",
  description: "Nikunj - Sde assignment",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <style>
            {`@import url("https://fonts.googleapis.com/css2?family=Doto:wght@100..900&display=swap");`}
        </style>
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased normal text-base tracking-wide text-black dark:text-white`}
      >
        <Providers>
          <DotBackgroundDemo />
          {children}
        </Providers>
      </body>
    </html>
  );
}
