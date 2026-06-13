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
    ],
};