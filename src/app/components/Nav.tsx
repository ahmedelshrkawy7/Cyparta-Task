"use client";
import Image from "next/image";
import React from "react";
import { GoBell } from "react-icons/go";
import { assets } from "../assets/assets";
import { useRouter } from "next/navigation";
import { FaBars } from "react-icons/fa";
import { FiLogOut } from "react-icons/fi";

const Nav = () => {
  const router = useRouter();

  return (
    <div className=" flex items-center justify-between md:justify-end  ">
      <FaBars className=" md:hidden text-4xl text-gray-500  " />

      <div className="flex justify-end items-center gap-8 mb-3 ">
        <div
          className="bg-gray-100 flex items-center justify-center rounded  w-12 h-12 "
          onClick={() => router.push("/login")}
        >
          <GoBell className="text-2xl " />
        </div>
        <Image src={assets.user} alt="" className="w-16 h-16" />
      </div>
    </div>
  );
};

export default Nav;
