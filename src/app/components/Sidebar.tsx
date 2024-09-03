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
    <div className="md:p-5 h-screen overflow-hidden  w-0  md:w-[300px]  ">
      <div className="bg-white h-full   md:border hidden  border-gray-200 py-5 rounded-3xl sm:flex flex-col gap-10 md:shadow   items-center">
        <Image src={assets.logo} alt="" className="w-40" />

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
