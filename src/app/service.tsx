"use server";

import axios from "axios";
import { cookies } from "next/headers";

export const getData = async () => {
  const cookieStore = cookies();

  const authToken = cookieStore.get("authToken");

  axios
    .get("https://cyparta-backend-gf7qm.ondigitalocean.app/api/profile/", {
      headers: {
        Authorization: `Bearer ${authToken?.value} `,
      },
    })
    .then((res) => {
      return res.data;
    });
};
