import React from "react";
import { IoIosArrowForward } from "react-icons/io";

const Breadcrumb = () => {
  return (
    <div>
      <p className="flex items-center font-semibold text-xl gap-2">
        Employees <IoIosArrowForward className="font-bold text-2xl" /> Profile
      </p>
    </div>
  );
};

export default Breadcrumb;
