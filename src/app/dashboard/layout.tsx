import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Nav from "../components/Nav";
import Sidebar from "../components/Sidebar";
import Breadcrumb from "../components/Breadcrumb";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Cyparta Empire Dashboard",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="flex ">
      <Sidebar />

      <div className="flex-1 flex-col p-4 sm:p-8">
        <Nav />
        <Breadcrumb />

        {children}
      </div>
    </div>
  );
}
