import Link from "next/link";
import Ambient from "@/components/ambient";
import RelayThread from "@/components/relay-thread";
import RelayWorkflow from "@/components/relay-workflow";
import RelayCalculator from "@/components/relay-calculator";
import { pageMetadata } from "@/lib/metadata";
import {
  CONSULT_URL,
  QUOTE_PATH,
  RELAY_CAPABILITIES,
  RELAY_HEADLINE,
  RELAY_MANAGED_ITEMS,
  RELAY_NOT_INCLUDED,
  RELAY_PLAN,
  RELAY_SHORT_DESCRIPTOR,
  RELAY_SUBHEAD,
} from "@/lib/site";

export const metadata = pageMetadata({
  title: "Statica Relay: Automated Lead Response and Follow-Up",
  description: `Statica Relay is ${RELAY_PLAN.priceLabel}. ${RELAY_SHORT_DESCRIPTOR} ${RELAY_SUBHEAD}`,
  path: "/relay",
});

const CONSULT_LINK_PROPS = {
  href: CONSULT_URL,
  target: "_blank",
  rel: "noopener noreferrer",
  "data-event": "consult-cta",
} as const;

export default function RelayPage() {
  return (
    <>
      {/* Hero */}
      <section className="grain relative overflow-hidden">
        <Ambient />
        <div className="relative z-10 mx-auto grid max-w-6xl items-center gap-14 px-4 py-16 sm:px-6 lg:grid-cols-[minmax(0,0.95fr)_minmax(0,1.05fr)] lg:py-24">
          <div>
            <p className="eyebrow">Statica Relay</p>
            <h1 className="display mt-6 text-[2.5rem] leading-[1.05] sm:text-5xl">
              {RELAY_HEADLINE}
            </h1>
            <p className="lede mt-7 max-w-lg">{RELAY_SUBHEAD}</p>
            <div className="mt-9 flex flex-wrap items-center gap-3">
              <a {...CONSULT_LINK_PROPS} className="btn btn-primary">
                Book a Consultation
              </a>
              <Link href="#how-it-works" className="btn btn-secondary">
                See How It Works
              </Link>
            </div>
          </div>
          <RelayThread />
        </div>
      </section>

      {/* How Relay works */}
      <section id="how-it-works" className="border-y border-ink-line bg-ink-raised">
        <div className="mx-auto max-w-6xl px-4 py-20 sm:px-6">
          <div className="max-w-2xl">
            <p className="eyebrow">How Relay works</p>
            <h2 className="display mt-5 text-3xl sm:text-4xl">
              From a missed inquiry to an organized lead.
            </h2>
            <p className="lede mt-5">
              Follow-up depends on whether the prospect responds &mdash; Relay keeps the
              conversation moving and the lead organized either way.
            </p>
          </div>
          <div className="mt-14 max-w-2xl">
            <RelayWorkflow />
          </div>
        </div>
      </section>

      {/* Relay works while you're working */}
      <section className="grain relative overflow-hidden">
        <Ambient variant="soft" />
        <div className="relative z-10 mx-auto max-w-6xl px-4 py-20 sm:px-6">
          <div className="grid gap-14 lg:grid-cols-[minmax(0,0.85fr)_minmax(0,1.15fr)]">
            <div>
              <p className="eyebrow">Built for busy days</p>
              <h2 className="display mt-5 text-3xl sm:text-4xl">
                You shouldn&rsquo;t have to stop working every time the phone rings.
              </h2>
              <p className="mt-6 text-mist">
                You might be on a job, driving, or with another customer. Relay helps
                start the conversation while you&rsquo;re unavailable, so you can pick it
                up when you&rsquo;re ready.
              </p>
            </div>
            <div className="grid gap-6 sm:grid-cols-2">
              <div className="hairline-top pt-6 sm:border-t-0 sm:pt-0">
                <h3 className="font-nacelle text-lg font-semibold text-paper">
                  Without a response
                </h3>
                <p className="mt-3 text-mist">
                  A missed inquiry may move on to another business before you get the
                  chance to call back.
                </p>
              </div>
              <div className="hairline-top rounded-2xl border border-bolt/30 bg-ink-raised p-6 pt-6 sm:border-t sm:border-bolt/30">
                <h3 className="font-nacelle text-lg font-semibold text-bolt">
                  With Relay
                </h3>
                <p className="mt-3 text-mist">
                  An automatic response and follow-up create another opportunity to
                  connect.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Capabilities */}
      <section className="border-y border-ink-line bg-ink-raised">
        <div className="mx-auto max-w-6xl px-4 py-20 sm:px-6">
          <div className="max-w-2xl">
            <p className="eyebrow">What&rsquo;s included</p>
            <h2 className="display mt-5 text-3xl sm:text-4xl">
              Respond, follow up, and stay organized.
            </h2>
          </div>

          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {RELAY_CAPABILITIES.map((group) => (
              <div
                key={group.group}
                className="rounded-3xl border border-ink-line bg-ink p-7"
              >
                <h3 className="font-nacelle text-lg font-semibold text-bolt">
                  {group.group}
                </h3>
                <ul className="mt-4 space-y-3 text-sm text-mist">
                  {group.items.map((item) => (
                    <li key={item} className="flex gap-3">
                      <span aria-hidden className="text-bolt">
                        +
                      </span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <div className="mt-6 rounded-3xl border border-bolt/40 bg-ink p-7 sm:p-8">
            <h3 className="font-nacelle text-lg font-semibold text-bolt">
              Managed by Statica
            </h3>
            <ul className="mt-4 grid gap-3 text-sm text-mist sm:grid-cols-3">
              {RELAY_MANAGED_ITEMS.map((item) => (
                <li key={item} className="flex gap-3">
                  <span aria-hidden className="text-bolt">
                    +
                  </span>
                  {item}
                </li>
              ))}
            </ul>
          </div>

          <p className="mt-8 max-w-3xl text-sm text-mist">
            The standard Relay plan doesn&rsquo;t include{" "}
            {RELAY_NOT_INCLUDED.map((item, i) => (
              <span key={item}>
                {item}
                {i < RELAY_NOT_INCLUDED.length - 1 ? ", " : "."}
              </span>
            ))}
          </p>
        </div>
      </section>

      {/* Business value */}
      <section className="mx-auto max-w-6xl px-4 py-20 sm:px-6">
        <div className="max-w-2xl">
          <p className="eyebrow">Business value</p>
          <h2 className="display mt-5 text-3xl sm:text-4xl">
            How much is one missed opportunity worth?
          </h2>
          <p className="lede mt-5">
            {RELAY_PLAN.priceLabel} works out to $2,988/year. Compare that with what one
            missed inquiry could be worth to your business.
          </p>
        </div>
        <div className="mt-10 max-w-xl">
          <RelayCalculator />
        </div>
      </section>

      {/* Managed service and final CTA */}
      <section className="border-t border-ink-line bg-ink-raised">
        <div className="mx-auto max-w-3xl px-4 py-20 text-center sm:px-6">
          <p className="eyebrow justify-center">Managed by Statica</p>
          <h2 className="display mt-5 text-3xl sm:text-4xl">
            You run the business. We keep the follow-up going.
          </h2>
          <p className="mx-auto mt-5 max-w-xl text-lg text-mist">
            Statica configures the system and maintains its automations. You still
            handle the conversations and the work that needs a person.
          </p>
          <p className="mx-auto mt-6 max-w-xl text-lg font-semibold text-paper">
            Your next missed call doesn&rsquo;t have to become someone else&rsquo;s
            customer.
          </p>
          <div className="mx-auto mt-9 flex max-w-xs flex-col items-center gap-4 sm:max-w-none sm:flex-row sm:justify-center">
            <a {...CONSULT_LINK_PROPS} className="btn btn-primary w-full sm:w-auto">
              Book a Consultation
            </a>
            <Link href={QUOTE_PATH} className="btn btn-secondary w-full sm:w-auto">
              Get My Free Preview
            </Link>
          </div>
          <p className="mt-6 font-nacelle text-xl font-semibold text-bolt">
            {RELAY_PLAN.priceLabel}
          </p>
        </div>
      </section>
    </>
  );
}
