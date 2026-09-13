import Link from "next/link";
import Ambient from "@/components/ambient";
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
    <>
      <section className="grain relative overflow-hidden">
        <Ambient variant="soft" />
        <div className="relative z-10 mx-auto max-w-6xl px-4 py-16 sm:px-6 lg:py-20">
          <p className="eyebrow">Work</p>
          <h1 className="display mt-6 max-w-2xl text-[2.5rem] leading-[1.05] sm:text-5xl">
            Websites I&rsquo;ve designed and built.
          </h1>
          <p className="lede mt-6 max-w-xl">
            A close look at a real project, rather than a wall of thumbnails.
          </p>
        </div>
      </section>

      <article className="border-t border-ink-line bg-ink-raised">
        <div className="mx-auto max-w-6xl px-4 py-20 sm:px-6">
          <div className="grid gap-12 lg:grid-cols-[minmax(0,1fr)_minmax(0,1.1fr)] lg:items-start">
            <div className="lg:sticky lg:top-28">
              <p className="eyebrow">{FLERILAB.label}</p>
              <h2 className="display mt-5 text-4xl">{FLERILAB.name}</h2>
              <dl className="mt-8 space-y-4 text-sm">
                <div className="hairline-top flex justify-between gap-6 pt-4">
                  <dt className="text-mist">Type</dt>
                  <dd className="text-right text-paper">{FLERILAB.type}</dd>
                </div>
                <div className="hairline-top flex justify-between gap-6 pt-4">
                  <dt className="text-mist">Scope</dt>
                  <dd className="text-right text-paper">{FLERILAB.scope}</dd>
                </div>
                <div className="hairline-top flex justify-between gap-6 pt-4">
                  <dt className="text-mist">Screenshots</dt>
                  <dd className="text-right text-paper">{FLERILAB.deliveryLabel}</dd>
                </div>
              </dl>
              <p className="mt-8 text-lg leading-relaxed text-mist">{FLERILAB.details}</p>
              <p className="mt-5 text-mist">
                The homepage opens on the mission, the founder page gives the work a face,
                and donating stays one tap away throughout.
              </p>
              <Link
                href={QUOTE_PATH}
                className="btn btn-primary mt-9 inline-flex"
                data-event="quote-cta"
              >
                Get My Quote
              </Link>
            </div>

            <div className="space-y-8">
              <BrowserFrame src={FLERILAB.heroImage} alt={`${FLERILAB.name} homepage`} priority />
              <BrowserFrame
                src={FLERILAB.detailImage}
                alt={`${FLERILAB.name} founder page`}
              />
            </div>
          </div>
        </div>
      </article>

      <section className="grain relative overflow-hidden border-t border-ink-line">
        <div className="relative z-10 mx-auto max-w-3xl px-4 py-20 text-center sm:px-6">
          <blockquote className="font-nacelle text-2xl leading-snug text-paper sm:text-3xl">
            &ldquo;{MARCUS_WEBSITE_EXCERPT}&rdquo;
          </blockquote>
          <p className="mt-6 text-sm text-mist">Marcus W., Vatt Media Marketing</p>
        </div>
      </section>
    </>
  );
}
