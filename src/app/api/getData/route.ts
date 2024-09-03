import { NextRequest, NextResponse } from "next/server";
import axios from "axios";
import { cookies } from "next/headers";

export async function GET(req: NextRequest) {
  const cookieStore = cookies();
  const authToken = cookieStore.get("authToken");

  try {
    const response = await axios.get(
      "https://cyparta-backend-gf7qm.ondigitalocean.app/api/profile/",
      {
        headers: {
          Authorization: `Bearer ${authToken?.value}`,
        },
      }
    );
    return NextResponse.json(response.data);
  } catch (error) {
    return NextResponse.json(
      { error: "Failed to fetch data" },
      { status: 500 }
    );
  }
}
