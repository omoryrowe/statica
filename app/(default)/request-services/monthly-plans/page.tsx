import Link from "next/link";
import { pageMetadata } from "@/lib/metadata";
import { CARE_PLAN, QUOTE_PATH, RELAY_NOTES, RELAY_PLAN } from "@/lib/site";

export const metadata = pageMetadata({
  title: "Website Maintenance and Monthly Support",
  description:
    "Statica Care is $99/month for hosting, monitoring, support, and 30 minutes of updates. Statica Relay is $249/month and adds inquiry follow-up.",
  path: "/request-services/monthly-plans",
});

export default function MonthlyPlansPage() {
  return (
    <article className="mx-auto max-w-3xl px-4 py-16 sm:px-6">
      <h1 className="font-nacelle text-4xl font-semibold text-paper">
        Keep your website in good hands.
      </h1>
      <p className="mt-5 text-lg text-mist">
        Need to change your hours, replace a photo, or fix something on your site? Statica Care gives you one place to turn for website support. Relay adds follow-up for missed calls and inquiries.
      </p>

      <section className="mt-12 rounded-2xl border border-ink-line bg-ink-raised p-8">
        <p className="text-sm font-medium uppercase tracking-[0.18em] text-bolt">{CARE_PLAN.name}</p>
        <h2 className="mt-3 font-nacelle text-2xl font-semibold text-paper">{CARE_PLAN.tagline}</h2>
        <p className="mt-4 font-nacelle text-3xl text-bolt">{CARE_PLAN.priceLabel}</p>
        <ul className="mt-6 list-disc space-y-2 pl-5 text-mist">
          {CARE_PLAN.features.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
        <p className="mt-6 text-sm text-mist">
          Unused update time does not roll over. Domain registration and renewal are separate. Additional content work is quoted before it begins.
        </p>
        <Link
          href={`${QUOTE_PATH}?monthly=${CARE_PLAN.id}`}
          className="btn btn-primary mt-6 inline-flex"
          data-event="quote-cta"
        >
          Get My Quote
        </Link>
      </section>

      <section className="mt-8 rounded-2xl border border-ink-line bg-ink-raised p-8">
        <p className="text-sm font-medium uppercase tracking-[0.18em] text-bolt">{RELAY_PLAN.name}</p>
        <h2 className="mt-3 font-nacelle text-2xl font-semibold text-paper">{RELAY_PLAN.tagline}</h2>
        <p className="mt-4 font-nacelle text-3xl text-bolt">{RELAY_PLAN.priceLabel}</p>
        <ul className="mt-6 list-disc space-y-2 pl-5 text-mist">
          {RELAY_PLAN.features.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
        <p className="mt-6 text-sm text-mist">{RELAY_NOTES[0]}</p>
        <p className="mt-3 text-sm text-mist">{RELAY_NOTES[1]}</p>
        <p className="mt-3 text-sm text-mist">{RELAY_NOTES[2]}</p>
        <Link
          href={`${QUOTE_PATH}?monthly=${RELAY_PLAN.id}`}
          className="btn btn-primary mt-6 inline-flex"
          data-event="quote-cta"
        >
          Get My Quote
        </Link>
      </section>

      <section className="mt-12">
        <h2 className="font-nacelle text-2xl font-semibold text-paper">What counts as a minor update</h2>
        <p className="mt-3 text-mist">
          Hours, phone numbers, text edits, image replacements, and existing service descriptions. The monthly minutes are a total for the month, not per request.
        </p>
        <h3 className="mt-8 font-semibold text-paper">Quoted separately</h3>
        <p className="mt-3 text-mist">
          New pages, redesigns, and new functionality. I’ll estimate that work before it starts.
        </p>
      </section>
    </article>
  );
}
