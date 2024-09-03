import axios from "axios";
import { cookies } from "next/headers";
import React from "react";
import { date } from "yup";

const Personainformation = async ({ userData }) => {
  const { name, email, first_name, last, last_name, phone, date_joined } =
    userData;

  const data = [
    {
      title: "First Name",
      data: first_name,
    },
    {
      title: "Last Name",
      data: last_name,
    },

    {
      title: "Mobile Number",
      data: phone,
    },
    {
      title: "Email Address",
      data: email,
    },
    {
      title: "Date of Birth",
    },
    {
      title: "Marital Status",
    },
    {
      title: "Gender",
    },
    {
      title: "Nationality",
    },
    {
      title: "Address",
    },
    {
      title: "City",
    },
    {
      title: "State",
    },
    {
      title: "Zip Code",
    },
    {
      title: "Work’s hours",
    },
  ];
  return (
    <div className="grid grid-cols-1  md:grid-cols-2 mt-6 md:w-4/6 gap-8">
      {data.map((el) => {
        return (
          <div className="flex flex-col gap-2" key={el.title}>
            <label htmlFor="firstname" className="text-gray-400">
              {el.title}
            </label>
            <div className="outline-none border-b border-gray-200">
              {el.data}
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Personainformation;
