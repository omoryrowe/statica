import Link from "next/link";
import BrowserFrame from "@/components/browser-frame";
import { pageMetadata } from "@/lib/metadata";
import { FLERILAB, MARCUS_WEBSITE_EXCERPT, QUOTE_PATH } from "@/lib/site";

export const metadata = pageMetadata({
  title: "Website Work",
  description:
    "Selected website work from Statica Design Agency, including FleriLab, a nonprofit site for sustainable agriculture in Haiti.",
  path: "/work",
});

export default function WorkPage() {
  return (
    <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6">
      <h1 className="font-nacelle text-4xl font-semibold text-paper">Selected website work</h1>
      <p className="mt-4 max-w-2xl text-lg text-mist">
        A closer look at the websites I’ve designed and built.
      </p>

      <article className="mt-14 space-y-8">
        <div className="grid gap-8 lg:grid-cols-2">
          <BrowserFrame src={FLERILAB.heroImage} alt={`${FLERILAB.name} homepage at delivery`} />
          <BrowserFrame src={FLERILAB.detailImage} alt={`${FLERILAB.name} founder page at delivery`} />
        </div>
        <div className="max-w-3xl">
          <p className="text-sm font-medium text-bolt">{FLERILAB.label}</p>
          <h2 className="mt-2 font-nacelle text-3xl font-semibold text-paper">{FLERILAB.name}</h2>
          <p className="mt-1 text-sm text-mist">
            {FLERILAB.type} · {FLERILAB.scope} · {FLERILAB.deliveryLabel}
          </p>
          <p className="mt-4 text-mist">{FLERILAB.details}</p>
          <blockquote className="mt-8 border-l-2 border-bolt pl-4 text-paper">
            “{MARCUS_WEBSITE_EXCERPT}”
          </blockquote>
          <p className="mt-3 text-sm text-mist">Marcus W., Vatt Media Marketing</p>
          <Link href={QUOTE_PATH} className="btn btn-primary mt-8 inline-flex" data-event="quote-cta">
            Get My Quote
          </Link>
        </div>
      </article>
    </div>
  );
}
