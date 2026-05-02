import dns from "node:dns";
dns.setServers(["8.8.8.8", "8.8.4.4"]);

import { NextResponse } from 'next/server'
import { auth } from './lib/auth'
import { headers } from 'next/headers'

export async function proxy(request) {
    const session = await auth.api.getSession({
        headers: await headers(),
    });

    // If user is not authenticated, redirect to login
    if (!session) {
        return NextResponse.redirect(new URL('/login', request.url))
    }

    // Allow the request to proceed if session exists
    return NextResponse.next();
}

export const config = {
    matcher: ['/my-profile', "/all-tiles/:path"],
}