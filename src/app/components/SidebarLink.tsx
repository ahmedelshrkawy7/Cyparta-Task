"use client";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React, { useState } from "react";
import { IoIosArrowForward } from "react-icons/io";
import { CiUser } from "react-icons/ci";
import { StaticImport } from "next/dist/shared/lib/get-img-props";

type SidebarLinkProps = {
  icon?: string | StaticImport;
  href: string;
  key: string;
};

const SidebarLink = ({ href, icon }: SidebarLinkProps) => {
  const pathname = usePathname();
  const [show, setShow] = useState(false);

  const isActive = pathname.includes("href");
  return (
    <div>
      <div
        className={`group flex items-center justify-between gap-8 transition  hover:bg-red-100 w-full p-5 px-14 rounded-e-3xl h-12 border-l-4 border-l-red-500 ${
          isActive ? "bg-red-400 border-l-2 " : ""
        }`}
        onClick={() => setShow(!show)}
      >
        <Image
          src={typeof icon === "string" ? icon : ""}
          alt=""
          className="group-hover:text-red-600 text-black w-6 "
        />
        <Link
          href={""}
          className={`group-hover:text-red-600 font-medium text-md  flex-1 ${
            isActive ? "text-red-600" : ""
          }`}
        >
          {href}
        </Link>

        <IoIosArrowForward className={` text-xl ${show ? "rotate-90" : ""}`} />
      </div>

      {show && (
        <div className="ml-16 flex items-center">
          <ul className="w-2/3 mt-3 cursor-pointer">
            <li className="flex items-center gap-4 text-md hover:bg-gray-200 p-2 rounded-lg ">
              <CiUser className="text-[20px]" />
              profile
            </li>
          </ul>
        </div>
      )}
    </div>
  );
};

export default SidebarLink;
