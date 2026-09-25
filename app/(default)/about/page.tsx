import Image from "next/image";
import Link from "next/link";
import Ambient from "@/components/ambient";
import { pageMetadata } from "@/lib/metadata";
import { QUOTE_PATH } from "@/lib/site";

export const metadata = pageMetadata({
  title: "About Omory Rowe and Statica",
  description:
    "Omory Rowe is the Orlando-based founder of Statica Design Agency, a UCF Computer Science graduate who designs and manages websites for small businesses.",
  path: "/about",
});

export default function AboutPage() {
  return (
    <>
      <section className="grain relative overflow-hidden">
        <Ambient />
        <div className="relative z-10 mx-auto grid max-w-6xl gap-14 px-4 py-16 sm:px-6 lg:grid-cols-[minmax(0,1.15fr)_minmax(0,0.85fr)] lg:items-end lg:py-24">
          <div>
            <p className="eyebrow">Meet the founder</p>
            <h1 className="display mt-6 text-[2.5rem] leading-[1.05] sm:text-6xl">
              A creative eye. A technical foundation.
            </h1>
            <p className="lede mt-7 max-w-xl">
              I&rsquo;m Omory Rowe, founder of Statica and a University of Central Florida
              Computer Science graduate. I bring design and development together to help
              businesses build an online presence that reflects the quality of their work.
            </p>
          </div>
          <div className="relative mx-auto w-full max-w-[360px] lg:mx-0">
            <div aria-hidden className="absolute -inset-4 rounded-3xl bg-bolt/15 blur-2xl" />
            <Image
              src="/images/statica/statica founder.jpg"
              alt="Omory Rowe, founder of Statica Design Agency"
              width={720}
              height={900}
              priority
              className="relative h-[420px] w-full rounded-3xl border border-ink-line object-cover object-[center_18%] shadow-lift"
            />
          </div>
        </div>
      </section>

      <section className="border-y border-ink-line bg-ink-raised">
        <div className="mx-auto grid max-w-6xl gap-14 px-4 py-20 sm:px-6 lg:grid-cols-[minmax(0,0.7fr)_minmax(0,1.3fr)]">
          <h2 className="display text-3xl sm:text-4xl">Where design meets development</h2>
          <div className="max-w-2xl space-y-5 text-lg leading-relaxed text-mist">
            <p>
              My interest in design grew alongside my technical background. While studying
              Computer Science at UCF, I developed skills in software, data, and
              automation. Outside the classroom, I explored graphic design through
              Photoshop, learning how layout, color, and typography shape the way a brand
              is perceived.
            </p>
            <p>
              Statica brings those interests together. I approach each website with equal
              attention to how it looks and how it works, combining a distinctive visual
              identity with clear navigation and a straightforward path to contact.
            </p>
            <p>
              That balance is what I enjoy most: turning a business&rsquo;s ideas into a
              website that feels true to its brand and is useful to the people visiting it.
            </p>
          </div>
        </div>
      </section>

      <section className="grain relative overflow-hidden">
        <Ambient variant="soft" />
        <div className="relative z-10 mx-auto max-w-6xl px-4 py-20 sm:px-6">
          <div className="grid gap-14 lg:grid-cols-[minmax(0,0.7fr)_minmax(0,1.3fr)]">
            <h2 className="display text-3xl sm:text-4xl">
              Good work deserves a strong first impression.
            </h2>
            <div className="max-w-2xl">
              <div className="rule-bolt">
                <p className="font-nacelle text-2xl leading-snug text-paper">
                  Business owners invest time, care, and expertise into what they do. Their
                  website should communicate that same standard, helping potential
                  customers understand their services and feel confident reaching out.
                </p>
              </div>
              <div className="mt-9 space-y-5 text-lg leading-relaxed text-mist">
                <p>
                  My approach to client service also reflects my experience leading a
                  student service organization and mentoring others at UCF. Those
                  experiences reinforced the value of listening, communicating clearly, and
                  following through.
                </p>
                <p>
                  At Statica, that means taking time to understand your goals, explaining
                  the decisions behind your website, and keeping you informed throughout
                  the project.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="border-y border-ink-line bg-ink-raised">
        <div className="mx-auto max-w-6xl px-4 py-20 sm:px-6">
          <h2 className="display text-3xl sm:text-4xl">
            A clear process. A direct working relationship.
          </h2>
          <p className="mt-6 max-w-2xl text-lg text-mist">
            You&rsquo;ll work directly with me from the initial conversation through
            launch, with ongoing support available through your monthly plan.
          </p>
          <div className="mt-12 grid gap-x-12 gap-y-10 md:grid-cols-3">
            {[
              [
                "Start with your goals",
                "We discuss your business, your customers, and what your website needs to accomplish. From there, I define the scope, pricing, and next steps so you know what to expect.",
              ],
              [
                "Build with your input",
                "I bring the design and functionality together, with opportunities for you to review the work and provide feedback. Your input helps ensure the finished website represents your business accurately.",
              ],
              [
                "Launch with ongoing support",
                "Once your website is ready, I handle launch and domain connection. Your monthly plan provides hosting, maintenance, and eligible content updates to support your website over time.",
              ],
            ].map(([title, body]) => (
              <div key={title} className="hairline-top pt-6">
                <h3 className="font-nacelle text-xl font-semibold text-paper">{title}</h3>
                <p className="mt-3 text-mist">{body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="relative overflow-hidden">
        <div className="mx-auto max-w-3xl px-4 py-20 text-center sm:px-6">
          <h2 className="display text-3xl sm:text-4xl">
            See what your website could look like.
          </h2>
          <p className="mt-5 text-lg text-mist">
            Request a FREE homepage preview designed for your business. No payment or
            commitment required.
          </p>
          <Link
            href={QUOTE_PATH}
            className="btn btn-primary mt-8 inline-flex"
            data-event="quote-cta"
          >
            Get My Free Preview
          </Link>
        </div>
      </section>
    </>
  );
}
