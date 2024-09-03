"use server";

import axios from "axios";
import { cookies } from "next/headers";

export const getData = async () => {
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

  console.log("🚀 ~ getData ~ response.data:", response.data);
  return response.data;
};
