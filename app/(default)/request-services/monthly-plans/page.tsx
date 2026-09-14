import Link from "next/link";
import Ambient from "@/components/ambient";
import { pageMetadata } from "@/lib/metadata";
import {
  ADDITIONAL_PAGES_FAQ,
  ADDITIONAL_WORK_POLICY,
  CARE_PLAN,
  DOMAIN_LAUNCH_POLICY,
  MONTHLY_ALLOWANCE_NOTE,
  PRICING_PATH,
  QUOTE_PATH,
  RELAY_NOTES,
  RELAY_PLAN,
} from "@/lib/site";

export const metadata = pageMetadata({
  title: "Website Maintenance and Monthly Support",
  description:
    "Statica Care is $99/month for hosting, monitoring, support, and 30 minutes of updates. Statica Relay is $249/month and adds inquiry follow-up.",
  path: "/request-services/monthly-plans",
});

export default function MonthlyPlansPage() {
  return (
    <>
      <section className="grain relative overflow-hidden">
        <Ambient />
        <div className="relative z-10 mx-auto max-w-6xl px-4 py-16 sm:px-6 lg:py-24">
          <div className="max-w-2xl">
            <p className="eyebrow">Monthly management</p>
            <h1 className="display mt-6 text-[2.5rem] leading-[1.05] sm:text-5xl">
              Your website shouldn&rsquo;t become another job.
            </h1>
            <p className="lede mt-7">
              Eligible content updates, such as new hours, photos, or a service you no
              longer offer, are handled through your monthly plan. Hosting, monitoring,
              and the technical side stay with Statica so you can focus on running the
              business.
            </p>
          </div>
        </div>
      </section>

      <section className="border-y border-ink-line bg-ink-raised">
        <div className="mx-auto max-w-6xl px-4 py-20 sm:px-6">
          <div className="grid gap-6 lg:grid-cols-2">
            <article className="flex flex-col rounded-3xl border border-ink-line bg-ink p-8">
              <p className="eyebrow">{CARE_PLAN.name}</p>
              <h2 className="display mt-5 text-2xl">{CARE_PLAN.tagline}</h2>
              <p className="mt-4 font-nacelle text-4xl font-semibold text-bolt">
                {CARE_PLAN.priceLabel}
              </p>
              <ul className="mt-7 flex-1 space-y-3 text-mist">
                {CARE_PLAN.features.map((item) => (
                  <li key={item} className="flex gap-3">
                    <span aria-hidden className="text-bolt">
                      +
                    </span>
                    {item}
                  </li>
                ))}
              </ul>
              <Link
                href={`${QUOTE_PATH}?monthly=${CARE_PLAN.id}`}
                className="btn btn-primary mt-8"
                data-event="quote-cta"
              >
                Get My Quote
              </Link>
            </article>

            <article className="flex flex-col rounded-3xl border border-bolt/40 bg-ink p-8">
              <p className="eyebrow">{RELAY_PLAN.name}</p>
              <h2 className="display mt-5 text-2xl">{RELAY_PLAN.tagline}</h2>
              <p className="mt-4 font-nacelle text-4xl font-semibold text-bolt">
                {RELAY_PLAN.priceLabel}
              </p>
              <ul className="mt-7 space-y-3 text-mist">
                {RELAY_PLAN.features.map((item) => (
                  <li key={item} className="flex gap-3">
                    <span aria-hidden className="text-bolt">
                      +
                    </span>
                    {item}
                  </li>
                ))}
              </ul>
              <div className="mt-7 flex-1 space-y-2 border-t border-ink-line pt-5 text-sm text-mist">
                {RELAY_NOTES.map((note) => (
                  <p key={note}>{note}</p>
                ))}
              </div>
              <Link
                href={`${QUOTE_PATH}?monthly=${RELAY_PLAN.id}`}
                className="btn btn-primary mt-8"
                data-event="quote-cta"
              >
                Get My Quote
              </Link>
            </article>
          </div>
        </div>
      </section>

      <section className="grain relative overflow-hidden">
        <Ambient variant="soft" />
        <div className="relative z-10 mx-auto max-w-6xl px-4 py-20 sm:px-6">
          <div className="grid gap-14 lg:grid-cols-[minmax(0,0.7fr)_minmax(0,1.3fr)]">
            <h2 className="display text-3xl sm:text-4xl">Where the line sits</h2>
            <div className="max-w-2xl space-y-10">
              <div className="hairline-top pt-6">
                <h3 className="font-nacelle text-xl font-semibold text-paper">
                  Counts as a minor update
                </h3>
                <p className="mt-3 text-mist">
                  Hours, phone numbers, text edits, swapping an image, and changes to
                  service descriptions you already have. The monthly minutes are a total
                  for the month rather than a limit per request, and unused time does not
                  roll over.
                </p>
              </div>
              <div className="hairline-top pt-6">
                <h3 className="font-nacelle text-xl font-semibold text-paper">
                  Quoted separately
                </h3>
                <p className="mt-3 text-mist">{MONTHLY_ALLOWANCE_NOTE}</p>
                <p className="mt-3 text-mist">{ADDITIONAL_WORK_POLICY}</p>
              </div>
              <div className="hairline-top pt-6">
                <h3 className="font-nacelle text-xl font-semibold text-paper">
                  Domain and launch
                </h3>
                <p className="mt-3 text-mist">{DOMAIN_LAUNCH_POLICY}</p>
              </div>
              <div className="hairline-top pt-6">
                <h3 className="font-nacelle text-xl font-semibold text-paper">
                  {ADDITIONAL_PAGES_FAQ.question}
                </h3>
                <p className="mt-3 text-mist">{ADDITIONAL_PAGES_FAQ.answer}</p>
              </div>
            </div>
          </div>

          <div className="mt-16 flex flex-col items-start gap-5 rounded-3xl border border-ink-line bg-ink-raised p-8 sm:flex-row sm:items-center sm:justify-between">
            <div>
              <p className="font-nacelle text-xl font-semibold text-paper">
                Not sure which plan fits?
              </p>
              <p className="mt-2 text-sm text-mist">
                Tell me about the site and I&rsquo;ll recommend one.{" "}
                <Link href={PRICING_PATH} className="font-semibold text-bolt">
                  Compare with website pricing
                </Link>
              </p>
            </div>
            <Link href={QUOTE_PATH} className="btn btn-primary" data-event="quote-cta">
              Get My Quote
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
