import { NextResponse } from "next/server";

export function GET() {
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
