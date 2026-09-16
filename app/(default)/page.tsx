import Link from "next/link";
import Image from "next/image";
import Ambient from "@/components/ambient";
import BrowserFrame from "@/components/browser-frame";
import RelayThread from "@/components/relay-thread";
import { pageMetadata } from "@/lib/metadata";
import ClientReview from "@/components/client-review";
import {
  FLERILAB,
  PRICING_PATH,
  QUOTE_PATH,
  RELAY_HEADLINE,
  RELAY_PATH,
  RELAY_SHORT_DESCRIPTOR,
  SITE,
  WEBSITE_REVIEWS,
} from "@/lib/site";

export const metadata = {
  ...pageMetadata({
    title: "Orlando Small Business Web Design | Statica Design Agency",
    description:
      "Professional websites for small businesses in Orlando, with ongoing maintenance and support. Custom websites from $750 + ongoing management from $99/month.",
    path: "/",
  }),
  title: {
    absolute: "Orlando Small Business Web Design | Statica Design Agency",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      name: SITE.name,
      url: SITE.url,
      founder: { "@type": "Person", name: SITE.founder },
      areaServed: SITE.region,
    },
    {
      "@type": "Person",
      name: SITE.founder,
      jobTitle: "Founder",
      worksFor: { "@type": "Organization", name: SITE.name },
    },
    {
      "@type": "Service",
      name: "Small business website design",
      provider: { "@type": "Organization", name: SITE.name },
      areaServed: SITE.location,
    },
  ],
};

export default function Home() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* A. Hero */}
      <section className="grain relative overflow-hidden">
        <Ambient />
        <div className="relative z-10 mx-auto grid max-w-6xl items-center gap-14 px-4 py-16 sm:px-6 lg:grid-cols-[minmax(0,0.92fr)_minmax(0,1.08fr)] lg:py-24">
          <div>
            <p className="eyebrow">Custom web design • Orlando, FL</p>
            <h1 className="display mt-6 text-[2.6rem] leading-[1.03] sm:text-6xl">
              Your business deserves to{" "}
              <span className="relative whitespace-nowrap text-bolt">
                stand out.
                <span
                  aria-hidden
                  className="absolute inset-x-0 -bottom-1 h-2 rounded-full bg-bolt/25"
                />
              </span>
            </h1>
            <p className="lede mt-7 max-w-lg">
              Your website should reflect the quality of your business. Statica creates
              custom websites that showcase your expertise, build trust, and make it easy
              for customers to take the next step.
            </p>
            <div className="mt-9 flex flex-wrap items-center gap-3">
              <Link href={QUOTE_PATH} className="btn btn-primary" data-event="quote-cta">
                Get My Quote
              </Link>
              <Link href="/work" className="btn btn-secondary">
                See My Work
              </Link>
            </div>
            <Link
              href={PRICING_PATH}
              className="group mt-7 inline-flex items-center gap-2 font-semibold text-bolt"
            >
              Explore Website Packages
              <span className="transition-transform group-hover:translate-x-1">→</span>
            </Link>
          </div>

          <div className="relative pb-16 sm:pb-0">
            <BrowserFrame
              src={FLERILAB.heroImage}
              alt={`${FLERILAB.name} website homepage`}
              priority
            />
            <div className="absolute -bottom-8 -left-6 w-[42%] sm:-bottom-14 sm:-left-10 sm:w-[46%]">
              <BrowserFrame
                src={FLERILAB.detailImage}
                alt={`${FLERILAB.name} website founder page`}
              />
            </div>
          </div>
        </div>
      </section>

      {/* B. Featured work */}
      <section className="relative overflow-hidden border-t border-ink-line bg-ink-raised">
        <div className="relative z-10 mx-auto max-w-6xl px-4 py-20 sm:px-6 lg:py-28">
          <div className="grid gap-12 lg:grid-cols-[minmax(0,1fr)_minmax(0,1.25fr)] lg:items-center">
            <div>
              <p className="eyebrow">Selected work</p>
              <h2 className="display mt-5 text-3xl sm:text-4xl">{FLERILAB.name}</h2>
              <p className="mt-5 text-mist">{FLERILAB.details}</p>
              <p className="mt-5 text-mist">
                The pages lead with the mission, keep the reading short, and put donating
                within reach from anywhere on the site.
              </p>
              <Link
                href="/work"
                className="group mt-8 inline-flex items-center gap-2 font-semibold text-bolt"
              >
                See the full project
                <span className="transition-transform group-hover:translate-x-1">→</span>
              </Link>
            </div>
            <div className="grid gap-6 sm:grid-cols-2 lg:gap-5">
              <BrowserFrame
                src={FLERILAB.heroImage}
                alt={`${FLERILAB.name} homepage`}
                caption={FLERILAB.deliveryLabel}
                className="sm:mt-10"
              />
              <BrowserFrame
                src={FLERILAB.detailImage}
                alt={`${FLERILAB.name} founder page`}
              />
            </div>
          </div>
        </div>
      </section>

      {/* C. Client reviews */}
      <section className="grain relative overflow-hidden border-t border-ink-line">
        <Ambient variant="soft" />
        <div className="relative z-10 mx-auto max-w-6xl px-4 py-20 sm:px-6 lg:py-24">
          <h2 className="display text-3xl sm:text-4xl">What clients say</h2>
          <div className="mt-10 grid items-start gap-6 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
            {WEBSITE_REVIEWS.map((review) => (
              <ClientReview key={`${review.name}-${review.company}`} review={review} />
            ))}
          </div>
        </div>
      </section>

      {/* D. Service introduction */}
      <section className="grain relative overflow-hidden">
        <Ambient variant="soft" />
        <div className="relative z-10 mx-auto max-w-6xl px-4 py-20 sm:px-6 lg:py-28">
          <div className="grid gap-14 lg:grid-cols-[minmax(0,0.85fr)_minmax(0,1.15fr)]">
            <div>
              <p className="eyebrow">What I do</p>
              <h2 className="display mt-5 text-3xl sm:text-4xl">
                Build it, explain it, keep it running.
              </h2>
              <p className="mt-6 text-mist">
                Most of my work is a first website or a replacement for one that no longer
                fits. Either way, the goal is the same: people land on your site, see what
                you offer, and know how to reach you.
              </p>
              <Link
                href="/websites"
                className="group mt-8 inline-flex items-center gap-2 font-semibold text-bolt"
              >
                How a website project works
                <span className="transition-transform group-hover:translate-x-1">→</span>
              </Link>
            </div>

            <dl className="space-y-0">
              {[
                [
                  "New websites and redesigns",
                  "A design shaped around your services and the way you actually work, not a template with your name dropped in.",
                ],
                [
                  "Clear information, easy contact",
                  "Customers can see what you offer, look at your work, and call or request a quote without hunting for it.",
                ],
                [
                  "Ongoing support after launch",
                  "Eligible content updates, such as new hours, photos, or service descriptions, are handled through your monthly plan.",
                ],
              ].map(([title, body], i) => (
                <div
                  key={title}
                  className="hairline-top flex gap-6 py-7 first:border-t-0 first:pt-0"
                >
                  <span className="font-nacelle text-sm font-semibold text-bolt/70">
                    0{i + 1}
                  </span>
                  <div>
                    <dt className="font-nacelle text-xl font-semibold text-paper">{title}</dt>
                    <dd className="mt-2 text-mist">{body}</dd>
                  </div>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </section>

      {/* D2. Statica Relay teaser */}
      <section className="grain relative overflow-hidden border-t border-ink-line">
        <Ambient variant="soft" />
        <div className="relative z-10 mx-auto max-w-6xl px-4 py-20 sm:px-6">
          <div className="grid gap-12 lg:grid-cols-[minmax(0,1.05fr)_minmax(0,0.95fr)] lg:items-center">
            <div>
              <p className="eyebrow">Statica Relay</p>
              <h2 className="display mt-5 text-3xl sm:text-4xl">{RELAY_HEADLINE}</h2>
              <p className="mt-5 text-mist">{RELAY_SHORT_DESCRIPTOR}</p>
              <Link
                href={RELAY_PATH}
                className="group mt-7 inline-flex items-center gap-2 font-semibold text-bolt"
              >
                Explore Relay
                <span className="transition-transform group-hover:translate-x-1">→</span>
              </Link>
            </div>
            <RelayThread />
          </div>
        </div>
      </section>

      {/* E. Meet the founder */}
      <section className="relative overflow-hidden border-y border-ink-line bg-ink-raised">
        <div className="relative z-10 mx-auto grid max-w-6xl gap-12 px-4 py-20 sm:px-6 lg:grid-cols-[minmax(0,0.8fr)_minmax(0,1.2fr)] lg:items-center lg:py-24">
          <div className="relative mx-auto w-full max-w-[320px] lg:mx-0">
            <div
              aria-hidden
              className="absolute -inset-3 rounded-3xl bg-bolt/15 blur-2xl"
            />
            <Image
              src="/images/statica/statica founder.jpg"
              alt="Omory Rowe, founder of Statica Design Agency"
              width={640}
              height={800}
              className="relative h-[380px] w-full rounded-3xl border border-ink-line object-cover object-[center_18%] shadow-lift"
            />
          </div>
          <div>
            <p className="eyebrow">The person behind Statica</p>
            <h2 className="display mt-5 text-3xl sm:text-4xl">
              Hi, I&rsquo;m Omory.
            </h2>
            <p className="mt-6 text-lg text-mist">
              I came to this from two directions at once: writing code and making things
              look good. Statica is where those meet. I design the site, I build it, and I
              stay on for maintenance.
            </p>
            <p className="mt-4 text-mist">
              You work with me directly from the first conversation through the updates
              you need after launch.
            </p>
            <Link
              href="/about"
              className="group mt-8 inline-flex items-center gap-2 font-semibold text-bolt"
            >
              Read my story
              <span className="transition-transform group-hover:translate-x-1">→</span>
            </Link>
          </div>
        </div>
      </section>

      {/* F. Closing CTA */}
      <section className="grain relative overflow-hidden border-t border-ink-line">
        <Ambient variant="soft" />
        <div className="relative z-10 mx-auto max-w-3xl px-4 py-20 text-center sm:px-6">
          <h2 className="display text-3xl text-paper sm:text-5xl">
            Tell me about your business.
          </h2>
          <p className="mx-auto mt-5 max-w-xl text-lg text-mist">
            Send over a few details and I&rsquo;ll come back with a quote and a plan for
            your website.
          </p>
          <Link
            href={QUOTE_PATH}
            data-event="quote-cta"
            className="btn btn-primary mt-9"
          >
            Get My Quote
          </Link>
        </div>
      </section>
    </>
  );
}
