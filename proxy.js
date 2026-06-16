import { NextResponse } from "next/server";

export function proxy(req) {
    const path = req.nextUrl.pathname;

    const publicPaths = ['/', '/About', '/Accomodation','/Contact','/Home','/Login'];
    const isPublicPath = publicPaths.includes(path);

    const token = req.cookies.get("token")?.value || '';

    // User already logged in
    if (isPublicPath && token) {
        return NextResponse.redirect(
            new URL('/Admin_Dashboard', req.url)
        );
    }

    // User not logged in
    if (!isPublicPath && !token) {
        return NextResponse.redirect(
            new URL('/Login', req.url)
        );
    }

    return NextResponse.next();
}

export const config = {
    matcher: [
        '/',
        
        '/Sign-in',
        '/Admin_Dashboard/:path*',
        // '/12345UploadImg/:path*',
        // '/12345VdstId/:path*',
        // '/1234567/:path*',
        //  '/123456789/:path*',
        //   '/Add_Visitor/:path*',
        //   '/Approved_Visitor/:path*',
        //    '/Approved_Visitor/:path*',
        //     '/Contact_Visitor/:path*',
        //     '/Help&Support/:path*',
        //      '/Upload_success/:path*',
        //        '/ViewUserDetails/:path*',
        //         '/User_Table/:path*',
        
    ],
};