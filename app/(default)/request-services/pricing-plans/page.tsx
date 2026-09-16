import Link from "next/link";
import Ambient from "@/components/ambient";
import { pageMetadata } from "@/lib/metadata";
import {
  ADDITIONAL_PAGES_FAQ,
  ADDITIONAL_WORK_POLICY,
  BUILD_DOMAIN_INCLUSION,
  CARE_PLAN,
  DOMAIN_LAUNCH_POLICY,
  MONTHLY_ALLOWANCE_NOTE,
  MONTHLY_PATH,
  PRICING_HERO_LINE,
  QUOTE_PATH,
  RELAY_NOTES,
  RELAY_PLAN,
  SETUP_PLANS,
} from "@/lib/site";

export const metadata = pageMetadata({
  title: "Website Design Pricing and Monthly Plans",
  description:
    "Statica custom websites from $750. Monthly management: Statica Care $99 or Statica Relay $249. Advanced work is quoted separately.",
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
            Clear pricing. Lasting support.
          </h1>
          <p className="lede mt-6 max-w-xl">
            Start with a custom website built for your business, then keep it hosted,
            maintained, and up to date with ongoing monthly management.
          </p>
          <p className="mt-4 text-sm text-mist">{PRICING_HERO_LINE}</p>
        </div>
      </section>

      <section className="border-y border-ink-line bg-ink-raised">
        <div className="mx-auto max-w-6xl px-4 py-20 sm:px-6">
          <div className="flex flex-wrap items-end justify-between gap-4">
            <h2 className="display text-3xl sm:text-4xl">Website Design &amp; Build</h2>
            <p className="text-sm text-mist">
              One-time project pricing based on your website&rsquo;s scope.
            </p>
          </div>
          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {SETUP_PLANS.map((plan, i) => {
              const finish =
                i === 0 ? "finish-silver" : i === 1 ? "finish-gold" : "finish-ruby";
              const priceColor = i === 0 ? "text-paper" : "text-bolt";
              return (
                <div key={plan.id} className={`tier-frame ${finish}`}>
                  <article className={`tier-frame-inner flex h-full flex-col bg-ink p-8 ${finish}`}>
                    <div className="relative z-10 flex h-full flex-col">
                      <h3 className={`finish-text ${finish} font-nacelle text-lg font-semibold`}>
                        {plan.name}
                      </h3>
                      <p className={`mt-3 font-nacelle text-4xl font-semibold ${priceColor}`}>
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
                    </div>
                  </article>
                </div>
              );
            })}
          </div>
          <p className="mt-6 text-sm text-mist">
            All three receive the same care in the design and the same mobile-friendly
            build. The price reflects how many pages you need. {BUILD_DOMAIN_INCLUSION} is
            included. Advanced functionality is quoted separately.
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
        <p className="mt-3 text-mist">Pair any website build with Care or Relay.</p>

        <div className="mt-10 grid gap-6 lg:grid-cols-2">
          <div className="tier-frame finish-silver">
            <article className="tier-frame-inner finish-silver flex h-full flex-col bg-ink-raised p-8">
              <div className="relative z-10 flex h-full flex-col">
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
              </div>
            </article>
          </div>

          <div className="tier-frame finish-gold">
            <article className="tier-frame-inner finish-gold flex h-full flex-col bg-ink-raised p-8">
              <div className="relative z-10 flex h-full flex-col">
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
              </div>
            </article>
          </div>
        </div>
      </section>

      <section className="border-t border-ink-line bg-ink-raised">
        <div className="mx-auto max-w-6xl px-4 py-20 sm:px-6">
          <h2 className="display text-3xl sm:text-4xl">Pricing details</h2>
          <div className="mt-10 max-w-3xl space-y-8 text-mist">
            <p>{DOMAIN_LAUNCH_POLICY}</p>
            <p>{MONTHLY_ALLOWANCE_NOTE}</p>
            <p>{ADDITIONAL_WORK_POLICY}</p>
            <div className="hairline-top pt-8">
              <h3 className="font-nacelle text-xl font-semibold text-paper">
                {ADDITIONAL_PAGES_FAQ.question}
              </h3>
              <p className="mt-3">{ADDITIONAL_PAGES_FAQ.answer}</p>
            </div>
            <p className="text-sm">
              Unused update time does not roll over. Additional pages are a separate
              addition to an agreed package or an existing website.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
