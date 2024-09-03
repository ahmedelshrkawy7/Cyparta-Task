import { NextResponse, type NextRequest } from "next/server";

export default function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;
  const token = request.cookies.get("authToken");

  // Protect specific routes
  if (pathname.includes("/dashboard") && !token) {
    return NextResponse.redirect(new URL("/login", request.url));
  }

  return NextResponse.next();
}

export const config = {
  matchers: "/dashboard",
};
