"use client";

import "./globals.css";
import { Outfit } from "next/font/google";
import { useThemeStore } from "./store";
import Navbar from "@/components/Navbar";

const outfit = Outfit({ subsets: ["latin"], weight: ["300", "500"] });

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const darkMode = useThemeStore((state) => state.darkMode);

  return (
    <html lang="en">
      <head>
        <title>Entertainment web app</title>
      </head>
      <body
        className={`${outfit.className} ${
          darkMode ? "bg-dark-blue text-white dark" : "bg-white text-dark-blue"
        } transition-all`}
      >
        <div className="flex flex-col lg:flex-row">
          <Navbar />
          <main className="pl-[16px] md:pl-[25px] lg:pl-0 lg:py-[32px] w-screenModsm md:w-screenModmd lg:w-screenModlg">
            {children}
          </main>
        </div>
      </body>
    </html>
  );
}
