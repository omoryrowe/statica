"use client";

import { useEffect } from "react";

export default function GlobalError({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <html lang="en">
      <body className="bg-[#0B0D12] font-sans text-[#F5F5F2] antialiased">
        <div className="mx-auto max-w-lg px-4 py-24 text-center">
          <h1 className="text-3xl font-semibold">Something went wrong</h1>
          <p className="mt-4 text-[#A8B0C0]">
            Please try again, or refresh the page.
          </p>
          <button
            type="button"
            onClick={reset}
            className="mt-8 rounded-full bg-[#F0C014] px-5 py-3 text-sm font-semibold text-[#141821]"
          >
            Try again
          </button>
        </div>
      </body>
    </html>
  );
}
