import Link from "next/link";
import Ambient from "@/components/ambient";
import { pageMetadata } from "@/lib/metadata";
import {
  CARE_PLAN,
  MONTHLY_PATH,
  PRICING_CUE,
  QUOTE_PATH,
  RELAY_NOTES,
  RELAY_PLAN,
  SETUP_PLANS,
} from "@/lib/site";

export const metadata = pageMetadata({
  title: "Website Setup Pricing and Monthly Plans",
  description:
    "Statica website setup from $750. Monthly management: Statica Care $99 or Statica Relay $249. Advanced work is quoted separately.",
  path: "/request-services/pricing-plans",
});

export default function PricingPage() {
  return (
    <>
      <section className="grain relative overflow-hidden">
        <Ambient variant="soft" />
        <div className="relative z-10 mx-auto max-w-6xl px-4 py-16 sm:px-6 lg:py-20">
          <p className="eyebrow">Pricing</p>
          <h1 className="display mt-6 max-w-2xl text-[2.5rem] leading-[1.05] sm:text-5xl">
            Two numbers, and no surprises.
          </h1>
          <p className="lede mt-6 max-w-xl">
            You pay once to have the website built, then monthly to keep it hosted,
            watched, and up to date. {PRICING_CUE}
          </p>
        </div>
      </section>

      <section className="border-y border-ink-line bg-ink-raised">
        <div className="mx-auto max-w-6xl px-4 py-20 sm:px-6">
          <div className="flex flex-wrap items-end justify-between gap-4">
            <h2 className="display text-3xl sm:text-4xl">Website setup</h2>
            <p className="text-sm text-mist">One-time cost. Scope sets the price.</p>
          </div>
          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {SETUP_PLANS.map((plan, i) => (
              <article
                key={plan.id}
                className={`flex flex-col rounded-3xl border p-8 transition duration-200 hover:-translate-y-1 ${
                  i === 1
                    ? "border-bolt/50 bg-ink shadow-glow"
                    : "border-ink-line bg-ink"
                }`}
              >
                <h3 className="font-nacelle text-lg font-semibold text-paper">
                  {plan.name}
                </h3>
                <p className="mt-3 font-nacelle text-4xl font-semibold text-bolt">
                  {plan.priceLabel}
                </p>
                <p className="mt-5 flex-1 text-sm leading-relaxed text-mist">
                  {plan.summary}
                </p>
                <Link
                  href={`${QUOTE_PATH}?setup=${plan.id}`}
                  data-event="pricing-select"
                  className="btn btn-primary mt-8"
                >
                  Get My Quote
                </Link>
              </article>
            ))}
          </div>
          <p className="mt-6 text-sm text-mist">
            All three get the same care in the design and the same mobile-friendly build.
            The price reflects how many pages you need. Advanced functionality is quoted
            separately.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-20 sm:px-6">
        <div className="flex flex-wrap items-end justify-between gap-4">
          <h2 className="display text-3xl sm:text-4xl">Monthly management</h2>
          <Link href={MONTHLY_PATH} className="text-sm font-semibold text-bolt">
            Full monthly details
          </Link>
        </div>
        <p className="mt-3 text-mist">Pair any website setup with Care or Relay.</p>

        <div className="mt-10 grid gap-6 lg:grid-cols-2">
          <article className="flex flex-col rounded-3xl border border-ink-line bg-ink-raised p-8">
            <h3 className="font-nacelle text-lg font-semibold text-paper">
              {CARE_PLAN.name}
            </h3>
            <p className="mt-1 text-sm text-mist">{CARE_PLAN.tagline}</p>
            <p className="mt-4 font-nacelle text-4xl font-semibold text-bolt">
              {CARE_PLAN.priceLabel}
            </p>
            <ul className="mt-7 flex-1 space-y-3 text-sm text-mist">
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

          <article className="flex flex-col rounded-3xl border border-bolt/40 bg-ink-raised p-8">
            <h3 className="font-nacelle text-lg font-semibold text-paper">
              {RELAY_PLAN.name}
            </h3>
            <p className="mt-1 text-sm text-mist">{RELAY_PLAN.tagline}</p>
            <p className="mt-4 font-nacelle text-4xl font-semibold text-bolt">
              {RELAY_PLAN.priceLabel}
            </p>
            <ul className="mt-7 space-y-3 text-sm text-mist">
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

        <p className="mt-6 text-sm text-mist">
          Unused update time does not roll over. Domain registration and renewal are
          billed separately. Work beyond the monthly allowance is quoted before it starts.
        </p>
      </section>
    </>
  );
}
