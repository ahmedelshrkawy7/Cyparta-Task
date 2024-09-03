"use client";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Nav from "../components/Nav";
import Sidebar from "../components/Sidebar";
import Breadcrumb from "../components/Breadcrumb";
import { useState } from "react";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen((prevState) => !prevState);
  };

  return (
    <div className="flex ">
      <Sidebar isOpen={isSidebarOpen} func={toggleSidebar} />

      <div className="flex-1 flex-col p-4 sm:p-8">
        <Nav func={toggleSidebar} />
        <Breadcrumb />

        {children}
      </div>
    </div>
  );
}
