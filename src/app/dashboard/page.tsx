"use client";

import React, { useEffect, useState } from "react";
import axios from "axios";
import Cookies from "js-cookie";
import UserCard from "../components/UserCard";
import Image from "next/image";
import { FaUser } from "react-icons/fa";
import { CgBriefcase } from "react-icons/cg";
import { assets } from "../assets/assets";
import Personainformation from "../components/Personainformation";

const Dashboard = () => {
  const [userData, setUserData] = useState<any>({});
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const token = Cookies.get("authToken");

    axios
      .get("https://cyparta-backend-gf7qm.ondigitalocean.app/api/profile/", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((response) => {
        setUserData(response.data);
        setLoading(false);
      })
      .catch((err) => {
        console.error("Error fetching data:", err);
        setError("Failed to fetch data");
        setLoading(false);
      });
  }, []);

  if (loading) return <p>Loading...</p>;
  if (error) return <p className="text-red-500">{error}</p>;

  return (
    <div>
      <UserCard userData={userData} />
      <hr className="mt-5 bg-gray-500" />
      <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4 md:w-5/6 mt-10 border-b-2 border-gray-300 pb-2 gap-4">
        <div className="relative group hover:text-red-500 hover:font-semibold">
          <p className="flex items-center gap-4 cursor-pointer">
            <FaUser className="w-6 h-6" />
            Personal Information
          </p>
          <div className="w-full bg-red-500 h-1 absolute bottom-[-10px] hidden group-hover:block"></div>
        </div>
        <div className="relative group hover:text-red-500 hover:font-semibold">
          <p className="flex items-center gap-4 cursor-pointer">
            <CgBriefcase className="w-6 h-6" />
            Work Experience
          </p>
          <div className="w-full bg-red-500 h-1 absolute bottom-[-10px] hidden group-hover:block"></div>
        </div>
        <div className="relative group hover:text-red-500 hover:font-semibold">
          <p className="flex items-center gap-4 cursor-pointer">
            <Image src={assets.document} alt="icon" className="w-6 h-6" />
            Documents
          </p>
          <div className="w-full bg-red-500 h-1 absolute bottom-[-10px] hidden group-hover:block"></div>
        </div>
        <div className="relative group hover:text-red-500 hover:font-semibold">
          <p className="flex items-center gap-4 cursor-pointer">
            <Image src={assets.lock} alt="icon" className="w-6 h-6" />
            Account Access
          </p>
          <div className="w-full bg-red-500 h-1 absolute bottom-[-10px] hidden group-hover:block"></div>
        </div>
      </div>
      <Personainformation userData={userData} />
    </div>
  );
};

export default Dashboard;
