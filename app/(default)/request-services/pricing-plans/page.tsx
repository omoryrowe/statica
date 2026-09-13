import Link from "next/link";
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
    <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6">
      <h1 className="font-nacelle text-4xl font-semibold text-paper">Pricing</h1>
      <p className="mt-4 max-w-2xl text-lg text-mist">
        Choose the website that fits your business. Keep it managed after launch.
      </p>
      <p className="mt-3 text-paper">{PRICING_CUE}</p>

      <h2 className="mt-14 font-nacelle text-2xl font-semibold text-paper">Website setup</h2>
      <p className="mt-2 text-sm text-mist">One-time project cost.</p>
      <div className="mt-6 grid gap-5 md:grid-cols-3">
        {SETUP_PLANS.map((plan) => (
          <article key={plan.id} className="flex flex-col rounded-2xl border border-ink-line bg-ink-raised p-6">
            <h3 className="font-semibold text-paper">{plan.name}</h3>
            <p className="mt-2 font-nacelle text-3xl text-bolt">{plan.priceLabel}</p>
            <p className="mt-4 flex-1 text-sm text-mist">{plan.summary}</p>
            <Link
              href={`${QUOTE_PATH}?setup=${plan.id}`}
              data-event="pricing-select"
              className="btn btn-primary mt-6"
            >
              Get My Quote
            </Link>
          </article>
        ))}
      </div>
      <p className="mt-4 text-sm text-mist">Advanced functionality is quoted separately.</p>

      <h2 className="mt-16 font-nacelle text-2xl font-semibold text-paper">Monthly management</h2>
      <p className="mt-2 text-sm text-mist">
        Pair any website setup with Care or Relay.{" "}
        <Link href={MONTHLY_PATH} className="font-semibold text-bolt">
          Full monthly details
        </Link>
      </p>
      <div className="mt-6 grid gap-5 md:grid-cols-2">
        <article className="flex flex-col rounded-2xl border border-ink-line bg-ink-raised p-6">
          <h3 className="font-semibold text-paper">{CARE_PLAN.name}</h3>
          <p className="mt-1 text-sm text-mist">{CARE_PLAN.tagline}</p>
          <p className="mt-3 font-nacelle text-3xl text-bolt">{CARE_PLAN.priceLabel}</p>
          <ul className="mt-4 flex-1 space-y-2 text-sm text-mist">
            {CARE_PLAN.features.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
          <Link
            href={`${QUOTE_PATH}?monthly=${CARE_PLAN.id}`}
            className="btn btn-primary mt-6"
            data-event="quote-cta"
          >
            Get My Quote
          </Link>
        </article>
        <article className="flex flex-col rounded-2xl border border-ink-line bg-ink-raised p-6">
          <h3 className="font-semibold text-paper">{RELAY_PLAN.name}</h3>
          <p className="mt-1 text-sm text-mist">{RELAY_PLAN.tagline}</p>
          <p className="mt-3 font-nacelle text-3xl text-bolt">{RELAY_PLAN.priceLabel}</p>
          <ul className="mt-4 space-y-2 text-sm text-mist">
            {RELAY_PLAN.features.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
          <p className="mt-4 text-sm text-mist">{RELAY_NOTES[0]}</p>
          <p className="mt-2 text-sm text-mist">{RELAY_NOTES[1]}</p>
          <p className="mt-2 text-sm text-mist">{RELAY_NOTES[2]}</p>
          <Link
            href={`${QUOTE_PATH}?monthly=${RELAY_PLAN.id}`}
            className="btn btn-primary mt-6"
            data-event="quote-cta"
          >
            Get My Quote
          </Link>
        </article>
      </div>
    </div>
  );
}
