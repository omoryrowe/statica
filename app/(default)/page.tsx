import Link from "next/link";
import Image from "next/image";
import BrowserFrame from "@/components/browser-frame";
import { pageMetadata } from "@/lib/metadata";
import {
  CARE_PLAN,
  FLERILAB,
  MARCUS_WEBSITE_EXCERPT,
  MONTHLY_PATH,
  PRICING_CUE,
  PRICING_PATH,
  QUOTE_PATH,
  RELAY_PLAN,
  SETUP_PLANS,
  SITE,
} from "@/lib/site";

export const metadata = {
  ...pageMetadata({
    title: "Orlando Small Business Web Design | Statica Design Agency",
    description:
      "Professional websites for small businesses in Orlando, with ongoing maintenance and support. Website setup from $750 + management from $99/month.",
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

      <section className="relative overflow-hidden">
        <div
          className="pointer-events-none absolute right-[-10%] top-[-20%] h-[520px] w-[520px] rounded-full bg-bolt/10 blur-3xl"
          aria-hidden
        />
        <div className="relative mx-auto grid max-w-6xl items-center gap-12 px-4 py-14 sm:px-6 lg:grid-cols-[minmax(0,1fr)_minmax(0,1.05fr)] lg:py-20">
          <div>
            <p className="text-sm font-medium uppercase tracking-[0.18em] text-bolt">
              Orlando web design for small businesses
            </p>
            <h1 className="mt-4 font-nacelle text-4xl font-semibold leading-[1.08] text-paper sm:text-5xl">
              Your business does great work.
              <span className="block">Your website should show it.</span>
            </h1>
            <p className="mt-5 max-w-md text-lg text-mist">
              Give customers a clear view of what you offer and an easy way to reach you. Statica designs your website and handles the upkeep after launch.
            </p>
            <p className="mt-4 text-paper">{PRICING_CUE}</p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link href={QUOTE_PATH} className="btn btn-primary" data-event="quote-cta">
                Get My Quote
              </Link>
              <Link href="/work" className="btn btn-secondary">
                See Our Work
              </Link>
            </div>
          </div>
          <div>
            <BrowserFrame
              src={FLERILAB.heroImage}
              alt={`${FLERILAB.name} homepage at delivery`}
              priority
            />
          </div>
        </div>
      </section>

      <section className="border-y border-ink-line">
        <div className="mx-auto grid max-w-6xl gap-6 px-4 py-8 sm:grid-cols-2 sm:px-6 lg:grid-cols-4">
          {[
            "Designed for your business",
            "Easy to use on mobile",
            "Built for calls and inquiries",
            "Managed after launch",
          ].map((item) => (
            <p key={item} className="text-sm font-medium text-paper">
              {item}
            </p>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-16 sm:px-6">
        <div className="grid gap-10 lg:grid-cols-2 lg:items-start">
          <div>
            <p className="text-sm font-medium uppercase tracking-[0.18em] text-bolt">
              {FLERILAB.label}
            </p>
            <h2 className="mt-3 font-nacelle text-3xl font-semibold text-paper">{FLERILAB.name}</h2>
            <p className="mt-2 text-sm text-mist">{FLERILAB.deliveryLabel}</p>
            <p className="mt-4 text-mist">{FLERILAB.details}</p>
            <blockquote className="mt-8 border-l-2 border-bolt pl-4 text-lg text-paper">
              “{MARCUS_WEBSITE_EXCERPT}”
            </blockquote>
            <p className="mt-3 text-sm text-mist">Marcus W., Vatt Media Marketing</p>
            <Link href="/work" className="mt-6 inline-block text-sm font-semibold text-bolt">
              See Our Work
            </Link>
          </div>
          <BrowserFrame src={FLERILAB.detailImage} alt={`${FLERILAB.name} founder page at delivery`} />
        </div>
      </section>

      <section className="bg-ink-raised">
        <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6">
          <h2 className="font-nacelle text-3xl font-semibold text-paper">What’s included</h2>
          <div className="mt-10 grid gap-x-10 gap-y-8 md:grid-cols-2">
            {[
              ["A design that fits the business", "Layout and language built around how you work, not a generic template."],
              ["Clear service pages", "Customers can see what you offer and decide whether to get in touch."],
              ["Comfortable on phones", "Readable type, a simple menu, and buttons that are easy to tap."],
              ["Calls and inquiry forms", "A straightforward way for people to reach you from the site."],
              ["Search-friendly setup", "Page titles, descriptions, and a clear site structure to help search engines understand your website."],
              ["Launch with Statica Care", "Hosting, monitoring, and minor updates stay with Statica after the site goes live."],
            ].map(([title, body]) => (
              <article key={title} className="border-t border-ink-line pt-5">
                <h3 className="font-semibold text-paper">{title}</h3>
                <p className="mt-2 text-sm text-mist">{body}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-16 sm:px-6">
        <h2 className="font-nacelle text-3xl font-semibold text-paper">How a project works</h2>
        <ol className="mt-10 grid list-none gap-8 p-0 md:grid-cols-4">
          {[
            ["Tell me what you need.", "Share the business, the current site if you have one, and what the new site should do."],
            ["Review your quote.", "We agree on pages and scope before any design work starts."],
            ["Review your website.", "You look over the build and request the changes we agreed to."],
            ["Launch with ongoing support.", "The site goes live on Statica Care, so updates have a clear place to go."],
          ].map(([title, body], i) => (
            <li key={title}>
              <span className="font-nacelle text-2xl font-semibold text-bolt">{i + 1}</span>
              <h3 className="mt-3 font-semibold text-paper">{title}</h3>
              <p className="mt-2 text-sm text-mist">{body}</p>
            </li>
          ))}
        </ol>
      </section>

      <section className="border-y border-ink-line bg-ink-raised">
        <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6">
          <div className="flex flex-wrap items-end justify-between gap-4">
            <h2 className="font-nacelle text-3xl font-semibold text-paper">Website setup</h2>
            <Link href={PRICING_PATH} className="text-sm font-semibold text-bolt">
              Full pricing
            </Link>
          </div>
          <p className="mt-3 text-mist">{PRICING_CUE}</p>
          <div className="mt-8 grid gap-4 md:grid-cols-3">
            {SETUP_PLANS.map((plan) => (
              <article key={plan.id} className="rounded-2xl border border-ink-line bg-ink p-6">
                <h3 className="font-semibold text-paper">{plan.name}</h3>
                <p className="mt-2 font-nacelle text-3xl text-bolt">{plan.priceLabel}</p>
                <p className="mt-3 text-sm text-mist">{plan.summary}</p>
              </article>
            ))}
          </div>
          <p className="mt-4 text-sm text-mist">Advanced functionality is quoted separately.</p>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-16 sm:px-6">
        <div className="flex flex-wrap items-end justify-between gap-4">
          <h2 className="font-nacelle text-3xl font-semibold text-paper">Monthly management</h2>
          <Link href={MONTHLY_PATH} className="text-sm font-semibold text-bolt">
            Monthly plan details
          </Link>
        </div>
        <div className="mt-8 grid gap-5 md:grid-cols-2">
          <article className="rounded-2xl border border-ink-line bg-ink-raised p-6">
            <h3 className="font-semibold text-paper">{CARE_PLAN.name}</h3>
            <p className="mt-1 text-sm text-mist">{CARE_PLAN.tagline}</p>
            <p className="mt-3 font-nacelle text-3xl text-bolt">{CARE_PLAN.priceLabel}</p>
            <p className="mt-3 text-sm text-mist">{CARE_PLAN.updateAllowance}. Unused time does not roll over.</p>
            <Link href={`${QUOTE_PATH}?monthly=${CARE_PLAN.id}`} className="btn btn-primary mt-6" data-event="quote-cta">
              Get My Quote
            </Link>
          </article>
          <article className="rounded-2xl border border-ink-line bg-ink-raised p-6">
            <h3 className="font-semibold text-paper">{RELAY_PLAN.name}</h3>
            <p className="mt-1 text-sm text-mist">{RELAY_PLAN.tagline}</p>
            <p className="mt-3 font-nacelle text-3xl text-bolt">{RELAY_PLAN.priceLabel}</p>
            <p className="mt-3 text-sm text-mist">
              Everything in Care, 60 minutes of updates, missed-call text back, automated inquiry follow-up, and a lead pipeline. Statica maintains the system. You handle the conversations.
            </p>
            <Link href={`${QUOTE_PATH}?monthly=${RELAY_PLAN.id}`} className="btn btn-primary mt-6" data-event="quote-cta">
              Get My Quote
            </Link>
          </article>
        </div>
      </section>

      <section className="border-y border-ink-line bg-ink-raised">
        <div className="mx-auto flex max-w-6xl flex-col gap-8 px-4 py-16 sm:px-6 md:flex-row md:items-center">
          <div className="w-[220px] shrink-0 overflow-hidden rounded-2xl md:w-[260px]">
            <Image
              src="/images/statica/statica founder.jpg"
              alt="Omory Rowe, founder of Statica Design Agency"
              width={520}
              height={640}
              className="h-[280px] w-full object-cover object-[center_18%] md:h-[320px]"
            />
          </div>
          <div className="max-w-xl">
            <h2 className="font-nacelle text-3xl font-semibold text-paper">
              Meet Omory, the person behind Statica.
            </h2>
            <p className="mt-4 text-mist">
              I’m Omory Rowe, a web designer and software developer based in Orlando. I started Statica to help small businesses get a website they’re proud to share, with someone they can turn to after launch.
            </p>
            <p className="mt-4 text-mist">
              You’ll work directly with me, from the first conversation through the build and ongoing updates.
            </p>
            <Link href="/about" className="mt-6 inline-block text-sm font-semibold text-bolt">
              More About Statica
            </Link>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-3xl px-4 py-16 sm:px-6">
        <h2 className="font-nacelle text-3xl font-semibold text-paper">Questions owners usually ask</h2>
        <dl className="mt-8 space-y-7">
          <div>
            <dt className="font-semibold text-paper">What does a website cost?</dt>
            <dd className="mt-2 text-mist">
              Setup is $750 for one page, $1,000 for up to five pages, and $1,500 for up to eight. Advanced functionality is quoted separately. Management is Statica Care at $99/month or Statica Relay at $249/month.
            </dd>
          </div>
          <div>
            <dt className="font-semibold text-paper">What does monthly management cover?</dt>
            <dd className="mt-2 text-mist">
              Statica Care includes hosting, SSL and domain configuration, monitoring, technical support, and 30 minutes of minor content updates each month. Statica Relay includes everything in Care, 60 minutes of updates, missed-call text back, automated inquiry follow-up, and a lead pipeline. Unused update time does not roll over. Domain registration and renewal are billed separately.
            </dd>
          </div>
          <div>
            <dt className="font-semibold text-paper">Can you replace my current website?</dt>
            <dd className="mt-2 text-mist">
              Yes. Share the current site when you request a quote and we can plan the redesign around it.
            </dd>
          </div>
          <div>
            <dt className="font-semibold text-paper">Can I keep my existing domain?</dt>
            <dd className="mt-2 text-mist">
              In most cases, yes. I’ll help with the configuration. Registration and renewal stay separate.
            </dd>
          </div>
          <div>
            <dt className="font-semibold text-paper">What happens after I request a quote?</dt>
            <dd className="mt-2 text-mist">
              I review what you sent and follow up to confirm scope before any work begins.
            </dd>
          </div>
        </dl>
      </section>

      <section className="relative overflow-hidden bg-bolt px-4 py-16 text-center text-ink sm:px-6">
        <h2 className="font-nacelle text-3xl font-semibold sm:text-4xl">
          Let’s give your business a website you’re proud to share.
        </h2>
        <p className="mx-auto mt-4 max-w-xl text-ink/80">{PRICING_CUE}</p>
        <Link
          href={QUOTE_PATH}
          data-event="quote-cta"
          className="btn mt-8 bg-ink text-paper hover:bg-[#1b2030]"
        >
          Get My Quote
        </Link>
      </section>
    </>
  );
}
