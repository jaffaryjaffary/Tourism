// import { NextResponse } from "next/server";
// // import { getToken } from "next-auth/jwt";

// export async function middleware() {
// //   const token = await getToken({ req });

// //   if (!token) {
// //     return NextResponse.redirect(new URL("/Login", req.url));
// //   }

//   return NextResponse.next();
// }

// export const config = {
//   matcher: ["/Admin_Dashboard/:path*"]
// };

import { clerkMiddleware, createRouteMatcher } from '@clerk/nextjs/server'

const isProtectedRoute = createRouteMatcher(['/Admin_Dashboard(.*)', '/Add_Visitor(.*)','/Add_User(.*)',
  '/1234567(.*)','/Approved_Visitor(.*)','/ViewUserDetails(.*)','/12345(.*)','/1234567(.*)','/123456789(.*)'])

export default clerkMiddleware(async (auth, req) => {
  if (isProtectedRoute(req)) await auth.protect()
})



export const config = {
  matcher: [
    // Skip Next.js internals and all static files, unless found in search params
    '/((?!_next|[^?]*\\.(?:html?|css|js(?!on)|jpe?g|webp|png|gif|svg|ttf|woff2?|ico|csv|docx?|xlsx?|zip|webmanifest)).*)',
    // Always run for API routes
    '/(api|trpc)(.*)',
  ],
}