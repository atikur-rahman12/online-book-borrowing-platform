import dns from "node:dns";
dns.setServers(["1.1.1.1", "8.8.4.4"]);

import { NextResponse } from "next/server";
import { auth } from "./lib/auth";

export async function middleware(request) {
  const session = await auth.api.getSession({
    headers: request.headers,
  });

  const { pathname } = request.nextUrl;

  if (pathname === "/all-books") {
    return NextResponse.next();
  }

  if (session) {
    return NextResponse.next();
  }

  const loginUrl = new URL(request.url);
  loginUrl.searchParams.set("unauthorized", "true");
  return NextResponse.next({
    request: {
      headers: new Headers(request.headers),
    },
  });
}

export const config = {
  matcher: ["/all-books/:path*", "/my-profile"],
};
