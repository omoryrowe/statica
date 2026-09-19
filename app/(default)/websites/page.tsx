import Link from "next/link";
import Ambient from "@/components/ambient";
import BrowserFrame from "@/components/browser-frame";
import { pageMetadata } from "@/lib/metadata";
import {
  FLERILAB,
  MONTHLY_PATH,
  PRICING_CUE,
  PRICING_PATH,
  PROCESS_STEPS,
  QUOTE_PATH,
} from "@/lib/site";

export const metadata = pageMetadata({
  title: "Small Business Website Design in Orlando",
  description:
    "Website design and redesign for small businesses in Orlando and Central Florida. Clear service pages, mobile-friendly layouts, and ongoing management.",
  path: "/websites",
});

const INCLUDED = [
  [
    "A design built around your business",
    "Your services, your language, your photos. The layout follows what you want people to notice first.",
  ],
  [
    "Service pages that explain the work",
    "Customers can read what you offer and decide whether to get in touch, without calling to find out the basics.",
  ],
  [
    "Comfortable to use on a phone",
    "Readable text, simple navigation, and buttons sized for thumbs, since most people will see the site that way.",
  ],
  [
    "Clear ways to reach you",
    "Tap to call, a quote form that reaches your inbox, and booking where that is part of the project.",
  ],
  [
    "Search engine basics in place",
    "Page titles, descriptions, and a sensible structure so search engines can read the site properly.",
  ],
  [
    "Domain setup and connection assistance",
    "Website setup, domain connection, and launch are included in your build price. Domain registration and renewal fees are additional and confirmed before purchase.",
  ],
];

export default function WebsitesPage() {
  return (
    <>
      <section className="grain relative overflow-hidden">
        <Ambient />
        <div className="relative z-10 mx-auto grid max-w-6xl items-center gap-14 px-4 py-16 sm:px-6 lg:grid-cols-[minmax(0,0.95fr)_minmax(0,1.05fr)] lg:py-24">
          <div>
            <p className="eyebrow">Website design</p>
            <h1 className="display mt-6 text-[2.5rem] leading-[1.05] sm:text-5xl">
              Your first website, or a better one.
            </h1>
            <p className="lede mt-7 max-w-lg">
              Whether you are starting from a phone number and a social profile, or
              replacing a site that has fallen behind, I build something that shows the
              business the way you would describe it in person.
            </p>
            <div className="mt-9 flex flex-wrap gap-3">
              <Link href={QUOTE_PATH} className="btn btn-primary" data-event="quote-cta">
                Get My Quote
              </Link>
              <Link href={PRICING_PATH} className="btn btn-secondary">
                See Pricing
              </Link>
            </div>
          </div>
          <BrowserFrame
            src={FLERILAB.heroImage}
            alt={`${FLERILAB.name} website homepage`}
            caption={FLERILAB.deliveryLabel}
            priority
          />
        </div>
      </section>

      <section className="border-y border-ink-line bg-ink-raised">
        <div className="mx-auto max-w-6xl px-4 py-20 sm:px-6">
          <div className="max-w-2xl">
            <p className="eyebrow">Where people usually start</p>
            <h2 className="display mt-5 text-3xl sm:text-4xl">
              Three reasons owners call me.
            </h2>
          </div>
          <div className="mt-12 grid gap-10 md:grid-cols-3">
            {[
              [
                "No website yet",
                "You send people to a social profile or a phone number. A site gives them somewhere to see the work and reach you at any hour.",
              ],
              [
                "An outdated website",
                "The current site is slow, hard to read on a phone, or impossible to change. We replace it with something that matches the business today.",
              ],
              [
                "Nobody maintaining it",
                "The site exists, but nothing has changed on it in two years. A monthly plan puts that back in working order.",
              ],
            ].map(([title, body], i) => (
              <article key={title} className="hairline-top pt-6">
                <span className="font-nacelle text-sm font-semibold text-bolt/70">
                  0{i + 1}
                </span>
                <h3 className="mt-3 font-nacelle text-xl font-semibold text-paper">
                  {title}
                </h3>
                <p className="mt-3 text-mist">{body}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="grain relative overflow-hidden">
        <Ambient variant="soft" />
        <div className="relative z-10 mx-auto max-w-6xl px-4 py-20 sm:px-6">
          <div className="grid gap-14 lg:grid-cols-[minmax(0,0.7fr)_minmax(0,1.3fr)]">
            <div>
              <p className="eyebrow">Included</p>
              <h2 className="display mt-5 text-3xl sm:text-4xl">What you get.</h2>
              <p className="mt-6 text-mist">
                Every website includes the following. Booking systems, ecommerce, and
                custom integrations are quoted separately when a project needs them.
              </p>
            </div>
            <dl className="grid gap-x-10 gap-y-8 sm:grid-cols-2">
              {INCLUDED.map(([title, body]) => (
                <div key={title} className="hairline-top pt-5">
                  <dt className="font-semibold text-paper">{title}</dt>
                  <dd className="mt-2 text-sm leading-relaxed text-mist">{body}</dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </section>

      <section className="border-y border-ink-line bg-ink-raised">
        <div className="mx-auto grid max-w-6xl gap-12 px-4 py-20 sm:px-6 lg:grid-cols-2 lg:items-center">
          <BrowserFrame
            src={FLERILAB.detailImage}
            alt={`${FLERILAB.name} website founder page`}
            caption={FLERILAB.deliveryLabel}
          />
          <div>
            <p className="eyebrow">{FLERILAB.label}</p>
            <h2 className="display mt-5 text-3xl">{FLERILAB.name}</h2>
            <p className="mt-5 text-mist">{FLERILAB.details}</p>
            <Link
              href="/work"
              className="group mt-7 inline-flex items-center gap-2 font-semibold text-bolt"
            >
              See the full project
              <span className="transition-transform group-hover:translate-x-1">→</span>
            </Link>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-20 sm:px-6">
        <div className="max-w-2xl">
          <p className="eyebrow">Process</p>
          <h2 className="display mt-5 text-3xl sm:text-4xl">How a project runs.</h2>
        </div>
        <ol className="mt-12 grid list-none gap-8 p-0 md:grid-cols-4">
          {PROCESS_STEPS.map(([title, body], i) => (
            <li key={title} className="hairline-top pt-6">
              <span className="font-nacelle text-3xl font-semibold text-bolt/80">
                {i + 1}
              </span>
              <h3 className="mt-3 font-semibold text-paper">{title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-mist">{body}</p>
            </li>
          ))}
        </ol>

        <div className="mt-16 flex flex-col items-start gap-5 rounded-3xl border border-ink-line bg-ink-raised p-8 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <p className="font-nacelle text-xl font-semibold text-paper">
              Ready when you are.
            </p>
            <p className="mt-2 text-sm text-mist">
              {PRICING_CUE}{" "}
              <Link href={MONTHLY_PATH} className="font-semibold text-bolt">
                See what management covers
              </Link>
            </p>
          </div>
          <Link href={QUOTE_PATH} className="btn btn-primary" data-event="quote-cta">
            Get My Quote
          </Link>
        </div>
      </section>
    </>
  );
}
