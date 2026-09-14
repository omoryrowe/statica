import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function middleware(request: NextRequest) {
  if (request.nextUrl.pathname.startsWith("/portfolios/graphic-design")) {
    return new NextResponse(
      "This graphic design page has been removed. Statica now focuses on websites and website management.",
      {
        status: 410,
        headers: {
          "Content-Type": "text/plain; charset=utf-8",
          "X-Robots-Tag": "noindex, nofollow",
        },
      }
    );
  }
}

export const config = {
  matcher: ["/portfolios/graphic-design", "/portfolios/graphic-design/:path*"],
};
