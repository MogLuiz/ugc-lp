import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

const APP_BASE_URL = "https://app.ugclocal.com.br";

export function middleware(request: NextRequest) {
  const { pathname, search } = request.nextUrl;
  return NextResponse.redirect(`${APP_BASE_URL}${pathname}${search}`, {
    status: 308,
  });
}

export const config = {
  matcher: [
    "/cadastro",
    "/cadastro/:path*",
    "/login",
    "/login/:path*",
    "/auth",
    "/auth/:path*",
  ],
};
