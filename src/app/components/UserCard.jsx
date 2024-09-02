import Image from "next/image";
import React from "react";
import { assets } from "../assets/assets";

const UserCard = () => {
  return (
    <div className="mt-10">
      <Image src={assets.user} />
    </div>
  );
};

export default UserCard;
