import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Image from "next/image";
import "./globals.css";
import { logo } from "@/constants/assetImages";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Dragon Ball Z - A fan made directory",
  description:
    "This is a fan made directory for the characters of Dragon Ball Z",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`min-h-screen px-24 py-[30px] ${inter.className}`}>
        <div className="mb-[80px]">
          <Image
            src={logo}
            alt={"DragonballZ"}
            width={300}
            height={100}
            className="mx-auto"
          />
        </div>
        {children}
      </body>
    </html>
  );
}
