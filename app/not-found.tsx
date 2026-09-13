import Link from "next/link";

export default function NotFound() {
  return (
    <div className="mx-auto max-w-lg px-4 py-24 text-center">
      <h1 className="font-nacelle text-3xl font-semibold text-paper">Page not found</h1>
      <p className="mt-4 text-mist">That page isn’t part of the current Statica website.</p>
      <Link href="/" className="mt-8 inline-block font-semibold text-bolt">
        Back to home
      </Link>
    </div>
  );
}
