import dns from "node:dns";
dns.setServers(["1.1.1.1", "8.8.4.4"]);

import { NextResponse } from "next/server";
import { auth } from "./lib/auth";

export async function proxy(request) {
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
  return NextResponse.redirect(new URL("/login", request.url));
}

export const config = {
  matcher: ["/all-books/:path*", "/my-profile"],
};
