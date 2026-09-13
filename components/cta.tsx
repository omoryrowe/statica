import Link from "next/link";
import { PRICING_CUE, QUOTE_PATH } from "@/lib/site";

export default function Cta() {
  return (
    <section className="bg-bolt px-4 py-16 text-center text-ink sm:px-6">
      <h2 className="font-nacelle text-3xl font-semibold">
        Let’s give your business a website you’re proud to share.
      </h2>
      <p className="mx-auto mt-4 max-w-xl text-ink/80">{PRICING_CUE}</p>
      <Link href={QUOTE_PATH} data-event="quote-cta" className="btn mt-8 bg-ink text-paper hover:bg-[#1b2030]">
        Get My Quote
      </Link>
    </section>
  );
}
