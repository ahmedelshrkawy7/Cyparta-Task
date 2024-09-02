"use client";
import Image from "next/image";
import { assets } from "../../assets/assets";
import logo from "../../assets/cypartal logo 1.png";
import { useState } from "react";
import { IoEyeOutline, IoEyeOffOutline } from "react-icons/io5";
import * as yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import axios from "axios";
import { useRouter } from "next/navigation";

const Login = () => {
  const schema = yup.object().shape({
    email: yup
      .string()
      .email("Invalid email format")
      .required("Email is required"),
    password: yup
      .string()
      .min(6, "Password must be at least 6 characters")
      .required("Password is required"),
  });
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });
  const router = useRouter();

  const onSubmit = async (data: { email: String; password: String }) => {
    try {
      const response = await axios.post(
        "https://cyparta-backend-gf7qm.ondigitalocean.app/api/login/",
        data
      );
      console.log("🚀 ~ onSubmit ~ response.data:", response);
      if (response.data) {
        // Store token in local storage or cookie
        localStorage.setItem("token", response.data.token);
        // Redirect to protected route
        router.push("/dashboard");
      }
    } catch (error) {
      console.error("Login error:", error);
      alert("Invalid credentials, please try again.");
    }
  };

  // State to toggle password visibility
  const [showPassword, setShowPassword] = useState(false);
  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <Image src={logo} alt="My Image" className="w-56 h-24" />
      <form
        className="flex flex-col border border-gray-300 sm:w-2/5 p-10 mt-10 rounded-lg gap-12 "
        onSubmit={handleSubmit(onSubmit)}
      >
        <div className="flex flex-col gap-4 relative  ">
          <label htmlFor="email">Email Address</label>
          <input
            type="email"
            id="email"
            placeholder="nouran@cyparta.com"
            className="border border-gray-300  rounded-lg p-2  h-[55px]"
            {...register("email")}
          />
          {errors.email && (
            <p className="text-red-600 absolute top-full left-0">
              {errors.email.message}
            </p>
          )}
        </div>
        <div className="flex flex-col gap-4 relative">
          <label htmlFor="password">Password</label>
          <input
            type={showPassword ? "text" : "password"}
            id="password"
            className="border border-gray-300 rounded-lg p-2   h-[55px]"
            placeholder="***********"
            {...register("password")}
          />
          <span
            onClick={() => setShowPassword((prev) => !prev)}
            className="absolute right-2 top-1/2 translate-y-1/2 cursor-pointer "
          >
            {showPassword ? (
              <IoEyeOffOutline size={18} className="text-gray-400" />
            ) : (
              <IoEyeOutline size={18} className="text-gray-400" />
            )}
          </span>
          {errors.password && (
            <p className="text-red-600 absolute top-full left-0">
              {errors.password.message}
            </p>
          )}
        </div>

        <div className="flex justify-center ">
          <input
            type="submit"
            value={"Login"}
            className="bg-[#262626] text-white rounded-xl p-2 h-[55px] w-3/4 cursor-pointer"
          />
        </div>
      </form>
    </div>
  );
};

export default Login;
