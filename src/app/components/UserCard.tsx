import Image from "next/image";
import React from "react";
import { assets } from "../assets/assets";
import { HiOutlineBriefcase } from "react-icons/hi2";
import { MdOutlineEmail } from "react-icons/md";
import { LuPencilLine } from "react-icons/lu";

const UserCard = ({ userData }) => {
  console.log("🚀 ~ UserCard ~ userData:", userData);
  return (
    <div className="flex justify-between flex-col sm:flex-row lg:w-4/5 gap-4 max-w-full ">
      <div className="mt-10 flex gap-8">
        <Image
          src={userData?.image}
          alt=""
          className="w-24 h-24"
          width="250"
          height="250"
        />
        <div className="flex flex-col gap-2">
          <h1 className="text-2xl">{userData.name}</h1>
          <div>
            <p className="flex items-center text-lg font-medium gap-5 text-gray-500">
              <HiOutlineBriefcase />
              {userData.bio}
            </p>
            <p className="flex items-center text-lg font-medium gap-5 text-gray-500">
              <MdOutlineEmail />
              {userData.email}{" "}
            </p>
          </div>
        </div>
      </div>

      <div className="w-36 h-12 bg-black text-white sm:self-end rounded-xl flex items-center justify-center gap-3 cursor-pointer">
        <LuPencilLine className="text-xl" />
        Edit Profile
      </div>
    </div>
  );
};

export default UserCard;
