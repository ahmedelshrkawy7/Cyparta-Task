import Image from "next/image";
import React from "react";
import { assets } from "../assets/assets";
import SidebarLink from "./SidebarLink";
import { IoIosArrowBack } from "react-icons/io";

const Sidebar = ({ isOpen, func }) => {
  const data = [
    {
      title: "Dashboard",
      subTitle: "Profile",
      icon: assets.dash,
    },
    {
      title: "Employee",
      subTitle: "Profile",
      icon: assets.employeeGroup,
    },
    {
      title: "Payroll",
      subTitle: "Profile",
      icon: assets.dollarSign,
    },
    {
      title: "Holidays",
      subTitle: "Profile",
      icon: assets.employeeGroup,
    },
    {
      title: "Advanced Payment",
      subTitle: "Profile",
      icon: assets.wallet,
    },
  ];

  return (
    <div
      className={`md:p-5  h-screen overflow-hidden 
        ${
          isOpen ? "w-full fixed z-10 bg-white  top-0 left-0" : "w-0 "
        } md:w-[300px]  `}
    >
      <div
        className={`bg-white h-full   md:border   border-gray-200 py-5 rounded-3xl sm:flex flex-col gap-10 md:shadow   items-center ${
          isOpen ? "!bg-white z-10" : ""
        }`}
      >
        <div className="flex justify-center">
          <Image src={assets.logo} alt="" className="w-40" />
        </div>
        <div
          className="flex justify-end md:hidden  px-10 w-full"
          onClick={func}
        >
          <IoIosArrowBack className="text-gray-500 text-3xl" />
          back
        </div>

        <div className=" flex flex-col gap-8 mt-10 w-full">
          {data.map((el, index) => {
            return (
              <SidebarLink
                icon={el.icon}
                href={el.title}
                key={el.title}
                id={index}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
