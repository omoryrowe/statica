import Link from "next/link";
import BrowserFrame from "@/components/browser-frame";
import { pageMetadata } from "@/lib/metadata";
import { FLERILAB, PRICING_CUE, PRICING_PATH, QUOTE_PATH } from "@/lib/site";

export const metadata = pageMetadata({
  title: "Small Business Website Design in Orlando",
  description:
    "Website design and redesign for small businesses in Orlando and Central Florida. Clear service pages, mobile-friendly layouts, and ongoing management.",
  path: "/websites",
});

export default function WebsitesPage() {
  return (
    <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6">
      <div className="grid items-center gap-10 lg:grid-cols-2">
        <div>
          <h1 className="font-nacelle text-4xl font-semibold text-paper">
            A website that does your business justice.
          </h1>
          <p className="mt-5 text-lg text-mist">
            Starting from scratch or ready to replace an outdated site? Statica creates a website around your services, your customers, and the way you do business.
          </p>
          <p className="mt-4 text-paper">{PRICING_CUE}</p>
        </div>
        <BrowserFrame src={FLERILAB.heroImage} alt={`${FLERILAB.name} website at delivery`} />
      </div>

      <section className="mt-20">
        <h2 className="font-nacelle text-2xl font-semibold text-paper">Three common starting points</h2>
        <div className="mt-8 grid gap-6 md:grid-cols-3">
          {[
            ["First website", "You’re sending people to a social profile or a phone number. A site gives them a place to see the work and reach you."],
            ["Website redesign", "The current site is outdated, slow, or hard to update. We replace it with something that matches the business today."],
            ["Ongoing management", "You already have a site, or you want one built and kept current. Statica Care covers hosting, monitoring, and minor updates."],
          ].map(([title, body]) => (
            <article key={title} className="rounded-2xl border border-ink-line bg-ink-raised p-6">
              <h3 className="font-semibold text-paper">{title}</h3>
              <p className="mt-3 text-sm text-mist">{body}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="mt-20">
        <h2 className="font-nacelle text-2xl font-semibold text-paper">What you walk away with</h2>
        <ul className="mt-6 grid gap-4 text-mist md:grid-cols-2">
          <li>A layout that presents your services in plain language.</li>
          <li>Pages that work on phones, with a menu people can actually use.</li>
          <li>Contact options, from a call button to a quote form.</li>
          <li>Page titles and descriptions set up for search engines.</li>
          <li>A launch on Statica Care, so small changes have a home after go-live.</li>
          <li>Booking, ecommerce, and custom integrations quoted only when you need them.</li>
        </ul>
      </section>

      <section className="mt-20 grid gap-8 lg:grid-cols-2 lg:items-center">
        <BrowserFrame src={FLERILAB.detailImage} alt={`${FLERILAB.name} founder page at delivery`} />
        <div>
          <p className="text-sm font-medium text-bolt">{FLERILAB.label}</p>
          <h2 className="mt-2 font-nacelle text-2xl font-semibold text-paper">{FLERILAB.name}</h2>
          <p className="mt-2 text-sm text-mist">{FLERILAB.deliveryLabel}</p>
          <p className="mt-4 text-mist">{FLERILAB.details}</p>
        </div>
      </section>

      <section className="mt-20">
        <h2 className="font-nacelle text-2xl font-semibold text-paper">Built for service businesses</h2>
        <p className="mt-4 max-w-3xl text-mist">
          Statica is a strong fit for local service businesses in Orlando and Central Florida, including cleaners, landscapers, detailers, contractors, barbers, and other appointment or quote-based work. If people find you by referral or search, the site should make the next step obvious.
        </p>
      </section>

      <section className="mt-20">
        <h2 className="font-nacelle text-2xl font-semibold text-paper">How we work</h2>
        <ol className="mt-6 grid list-none gap-6 p-0 md:grid-cols-4">
          {[
            "Tell me what you need.",
            "Review your quote.",
            "Review your website.",
            "Launch with ongoing support.",
          ].map((step, i) => (
            <li key={step}>
              <span className="text-bolt">{i + 1}</span>
              <p className="mt-2 font-medium text-paper">{step}</p>
            </li>
          ))}
        </ol>
        <p className="mt-8 text-mist">
          {PRICING_CUE}{" "}
          <Link href={PRICING_PATH} className="font-semibold text-bolt">
            See pricing
          </Link>
        </p>
        <Link href={QUOTE_PATH} className="btn btn-primary mt-8 inline-flex" data-event="quote-cta">
          Get My Quote
        </Link>
      </section>
    </div>
  );
}
