"use client";

import { useEffect } from "react";

export default function Error({
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
    <div className="mx-auto max-w-lg px-4 py-24 text-center">
      <h1 className="font-nacelle text-3xl font-semibold text-paper">
        Something went wrong
      </h1>
      <p className="mt-4 text-mist">
        Please try again, or head back to the homepage.
      </p>
      <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
        <button type="button" onClick={reset} className="btn btn-primary">
          Try again
        </button>
        <a href="/" className="font-semibold text-bolt">
          Back to home
        </a>
      </div>
    </div>
  );
}
