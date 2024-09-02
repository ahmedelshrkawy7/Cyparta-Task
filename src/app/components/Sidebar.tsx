import Image from "next/image";
import React from "react";
import { assets } from "../assets/assets";
import SidebarLink from "./SidebarLink";

const Sidebar = () => {
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
    <div className="p-5 h-screen">
      <div className="bg-white h-full  w-[300px] border border-gray-200 py-5 rounded-3xl flex flex-col gap-10   items-center">
        <Image src={assets.logo} alt="" className="w-40" />

        <div className=" flex flex-col gap-8 mt-10 w-full">
          {data.map((el) => {
            return (
              <SidebarLink icon={el.icon} href={el.title} key={el.title} />
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
