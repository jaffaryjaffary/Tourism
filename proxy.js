// // import { NextResponse } from "next/server";
// // // import { getToken } from "next-auth/jwt";

// // export async function middleware() {
// // //   const token = await getToken({ req });

// // //   if (!token) {
// // //     return NextResponse.redirect(new URL("/Login", req.url));
// // //   }

// //   return NextResponse.next();
// // }

// // export const config = {
// //   matcher: ["/Admin_Dashboard/:path*"]
// // };

// import { NextResponse } from "next/server";

// const protectedMatchers = [
//   "/Admin_Dashboard",
//   "/Add_Visitor",
//   "/Add_User",
//   "/Approved_Visitor",
//   "/Contact_Visitor",
//   "/ViewUserDetails",
//   "/User_Table",
//   "/12345",
//   "/1234567",
//   "/123456789",
//   "/12345UploadImg",
//   "/Help&Support",
//   "/Success",
//   "/Register_Error",
//   "/Upload_Success",
//   "/12345VdstId", 
// ];

// function isProtected(pathname) {
//   return protectedMatchers.some((path) => pathname.startsWith(path));
// }

// export function proxy(request) {
//   const { pathname } = request.nextUrl;
//   if (!isProtected(pathname)) return NextResponse.next();

//   const hasSession = request.cookies.get("tourisim_admin_session")?.value;
//   if (!hasSession) {
//     const loginUrl = new URL("/Login_page", request.url);
//     return NextResponse.redirect(loginUrl);
//   }

//   return NextResponse.next();
// }

// export const config = {
//   matcher: [
//     "/((?!_next|[^?]*\\.(?:html?|css|js(?!on)|jpe?g|webp|png|gif|svg|ttf|woff2?|ico|csv|docx?|xlsx?|zip|webmanifest)).*)",
//     "/(api|trpc)(.*)",
//   ],
// };
import { NextResponse } from "next/server";

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

// ✅ IMPORTANT: use proxy (not middleware)
export function proxy(request) {
  const { pathname } = request.nextUrl;

  // allow public routes
  if (!isProtected(pathname)) {
    return NextResponse.next();
  }

  const session = request.cookies.get("tourisim_admin_session")?.value;

  if (!session) {
    return NextResponse.redirect(new URL("/Login_page", request.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/:path*"],
};