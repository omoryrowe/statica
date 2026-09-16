import { Suspense } from "react";
import Ambient from "@/components/ambient";
import { pageMetadata } from "@/lib/metadata";
import QuoteForm from "@/components/quote-form";

export const metadata = pageMetadata({
  title: "Request a Website Quote",
  description:
    "Tell Statica about your small business website project. Share your name, business, and what you need. Omory will follow up.",
  path: "/request-services/request-quote",
});

export default function QuotePage() {
  return (
    <section className="grain relative overflow-hidden">
      <Ambient variant="soft" />
      <div className="relative z-10 mx-auto grid max-w-6xl gap-14 px-4 py-16 sm:px-6 lg:grid-cols-[minmax(0,0.8fr)_minmax(0,1.2fr)] lg:py-20">
        <div className="lg:sticky lg:top-28 lg:self-start">
          <p className="eyebrow">Get a quote</p>
          <h1 className="display mt-6 text-[2.5rem] leading-[1.05] sm:text-5xl">
            Tell me about your business.
          </h1>
          <p className="lede mt-6">
            A few details are enough to start. I read every request myself and follow up
            to talk through the project before quoting anything.
          </p>
          <ul className="mt-9 space-y-4 text-sm text-mist">
            {[
              "No pressure and no obligation.",
              "Personal follow-up from me.",
              "We agree on scope and price before any work begins.",
            ].map((item) => (
              <li key={item} className="flex gap-3">
                <span aria-hidden className="text-bolt">
                  +
                </span>
                {item}
              </li>
            ))}
          </ul>
        </div>

        <div className="rounded-3xl border border-ink-line bg-ink-raised p-6 shadow-lift sm:p-8">
          <Suspense fallback={<p className="text-mist">Loading form…</p>}>
            <QuoteForm />
          </Suspense>
        </div>
      </div>
    </section>
  );
}
