// proxy.js (au middleware.js kama bado unatumia jina hilo)

import { NextResponse } from "next/server";
import { getToken } from "next-auth/jwt";

const protectedMatchers = [
  "/Admin_Dashboard",
  "/Add_Visitor",
  "/Add_User",
  "/Approved_Visitor",
  "/Contact_Visitor",
  "/ViewUserDetails",
  "/User_Table",
  "/12345",
  "/1234567",
  "/123456789",
  "/12345UploadImg",
  "/Help&Support",
  "/Success",
  "/Register_Error",
  "/Upload_Success",
  "/12345VdstId",
];

function isProtected(pathname) {
  return protectedMatchers.some((path) =>
    pathname.startsWith(path)
  );
}

// ✅ Next.js 16 uses "proxy"
export async function proxy(request) {
  const { pathname } = request.nextUrl;

  // allow public routes
  if (!isProtected(pathname)) {
    return NextResponse.next();
  }

  // ✅ get NextAuth token
  const token = await getToken({
    req: request,
    secret: process.env.AUTH_SECRET,
  });

  // ❌ no session → redirect to login
  if (!token) {
    return NextResponse.redirect(
      new URL("/Login", request.url)
    );
  }

  // ✅ allow access
  return NextResponse.next();
}

export const config = {
  matcher: ["/:path*"],
};