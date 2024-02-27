// "use client";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import "./index.css";
const inter = Inter({ subsets: ["latin"] });

import Navbar from './components/navbar';
import { SidebarCom } from './components/sidebar';
import React from 'react';


export const metadata: Metadata = {
  title: "TKJ 2",
  description: "Website SMKN1 Kuta Selatan TKJ 2",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {


  return (
    <html lang="en">
      <body className={`${inter.className} `}>
      <Navbar/>
      <div className="flex w-full">
        <SidebarCom/>
        <div className=" flex-grow h-dvh overflow-y-auto dark:bg-darkBg">
          {children}
        </div>
      </div>
        </body>
    </html>
  );
}
