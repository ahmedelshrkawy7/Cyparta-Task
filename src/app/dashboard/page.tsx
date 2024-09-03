import React from "react";
import useAuth from "../customHooks/withAuth";
import UserCard from "../components/UserCard";
import Image from "next/image";
import { FaUser } from "react-icons/fa6";
import { CgBriefcase } from "react-icons/cg";
import { CgFileDocument } from "react-icons/cg";
import { assets } from "../assets/assets";
import Personainformation from "../components/Personainformation";
import axios from "axios";
import { cookies } from "next/headers";
import { json } from "stream/consumers";

const getData = async () => {
  const cookieStore = cookies();

  const authToken = cookieStore.get("authToken");

  const response = await axios.get(
    "https://cyparta-backend-gf7qm.ondigitalocean.app/api/profile/",
    {
      headers: {
        Authorization: `Bearer ${authToken?.value} `,
      },
    }
  );

  return response.data;
};
const Dashboard = async () => {
  const userData = await getData();

  return (
    <div>
      <UserCard userData={userData} />
      <hr className="mt-5 bg-gray-500 " />
      <div className=" grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4 md:w-5/6 mt-10 border-b-2 border-gray-300 pb-2 gap-4">
        <div className="relative group hover:text-red-500 hover:font-semibold">
          <p className="flex items-center gap-4 cursor-pointer">
            <FaUser className="w-6 h-6" />
            Personal Information
          </p>
          <div className="w-full bg-red-500 h-1 absolute bottom-[-10px] hidden group-hover:block "></div>
        </div>
        <div className="relative group hover:text-red-500 hover:font-semibold">
          <p className="flex items-center gap-4 cursor-pointer">
            <CgBriefcase className="w-6 h-6" />
            Personal Information
          </p>
          <div className="w-full bg-red-500 h-1 absolute bottom-[-10px] hidden group-hover:block "></div>
        </div>
        <div className="relative group hover:text-red-500 hover:font-semibold">
          <p className="flex items-center gap-4 cursor-pointer">
            <Image src={assets.document} alt="icon" className="w-6 h-6" />
            Documents
          </p>
          <div className="w-full bg-red-500 h-1 absolute bottom-[-10px] hidden group-hover:block "></div>
        </div>
        <div className="relative group hover:text-red-500 hover:font-semibold">
          <p className="flex items-center gap-4 cursor-pointer">
            <Image src={assets.lock} alt="icon" className="w-6 h-6" />
            Account Access
          </p>
          <div className="w-full bg-red-500 h-1 absolute bottom-[-10px] hidden group-hover:block "></div>
        </div>
      </div>
      <Personainformation userData={userData} />
    </div>
  );
};

export default Dashboard;
