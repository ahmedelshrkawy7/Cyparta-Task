"use client";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

const useAuth = () => {
  const [loading, setLoading] = useState(true);
  const [authenticated, setAuthenticated] = useState(false);
  const router = useRouter();

  useEffect(() => {
    // Replace this with your auth check logic
    const token = localStorage.getItem("authToken");

    if (token) {
      setAuthenticated(true);
    } else {
      router.push("/login");
    }

    setLoading(false);
  }, [router]);

  return { loading, authenticated };
};

export default useAuth;
