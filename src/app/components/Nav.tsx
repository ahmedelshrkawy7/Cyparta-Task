import Image from "next/image";
import React from "react";
import { GoBell } from "react-icons/go";
import { assets } from "../assets/assets";

const Nav = () => {
  return (
    <div className=" flex justify-end items-center gap-8 ">
      <div className="bg-gray-100 flex items-center justify-center rounded  w-16 h-16 ">
        <GoBell className="text-2xl" />
      </div>
      <Image src={assets.user} alt="" className="w-16 h-16" />
    </div>
  );
};

export default Nav;
