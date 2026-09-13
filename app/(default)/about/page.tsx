import Image from "next/image";
import Link from "next/link";
import Ambient from "@/components/ambient";
import { pageMetadata } from "@/lib/metadata";
import { PRICING_CUE, QUOTE_PATH } from "@/lib/site";

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
            <p className="eyebrow">Founder</p>
            <h1 className="display mt-6 text-[2.5rem] leading-[1.05] sm:text-6xl">
              I&rsquo;m Omory Rowe, and Statica is mine.
            </h1>
            <p className="lede mt-7 max-w-xl">
              One person, based in Orlando, designing and looking after websites for small
              businesses. When you hire Statica, I&rsquo;m who you get.
            </p>
          </div>
          <div className="relative mx-auto w-full max-w-[360px] lg:mx-0">
            <div aria-hidden className="absolute -inset-4 rounded-3xl bg-bolt/15 blur-2xl" />
            <Image
              src="/images/statica/statica founder.jpg"
              alt="Omory Rowe, founder of Statica"
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
          <h2 className="display text-3xl sm:text-4xl">How I got here</h2>
          <div className="max-w-2xl space-y-5 text-lg leading-relaxed text-mist">
            <p>
              My start was split between two things I could not choose between. I studied
              Computer Science at the University of Central Florida and spent those years
              writing software, working with data, and building automation. In my own time
              I was in Photoshop, designing graphics for anyone who asked.
            </p>
            <p>
              For a long while those felt like separate lives. The code paid attention to
              how something worked. The design paid attention to how it felt. Getting to
              use both at once, on the same thing, was the part I kept chasing.
            </p>
            <p>
              Statica came out of that. A website is one of the few things that needs both:
              it has to be built properly and it has to look like it belongs to you. I get
              to do the whole thing, end to end, which is exactly what I wanted.
            </p>
          </div>
        </div>
      </section>

      <section className="grain relative overflow-hidden">
        <Ambient variant="soft" />
        <div className="relative z-10 mx-auto max-w-6xl px-4 py-20 sm:px-6">
          <div className="grid gap-14 lg:grid-cols-[minmax(0,0.7fr)_minmax(0,1.3fr)]">
            <h2 className="display text-3xl sm:text-4xl">What I care about</h2>
            <div className="max-w-2xl">
              <div className="rule-bolt">
                <p className="font-nacelle text-2xl leading-snug text-paper">
                  A good small business deserves a website that looks as capable as the
                  work behind it.
                </p>
              </div>
              <div className="mt-9 space-y-5 text-lg leading-relaxed text-mist">
                <p>
                  A lot of owners are doing excellent work with a website that undersells
                  them, or with no website at all. That gap bothers me. Closing it is the
                  most satisfying part of a project.
                </p>
                <p>
                  I also care about people not getting stranded. Before Statica, I led a
                  student service organization at UCF and spent a lot of time mentoring
                  people who were figuring things out. That instinct carried over. If
                  something on your site breaks or needs changing, you should have a person
                  to text, not a support queue.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="border-y border-ink-line bg-ink-raised">
        <div className="mx-auto max-w-6xl px-4 py-20 sm:px-6">
          <h2 className="display text-3xl sm:text-4xl">What working with me is like</h2>
          <div className="mt-12 grid gap-x-12 gap-y-10 md:grid-cols-3">
            {[
              [
                "We talk first",
                "I want to hear about the business, who you serve, and what people always ask you before they book. That conversation shapes the pages.",
              ],
              [
                "You see the work",
                "You review the site and tell me what needs to change. Scope is agreed in the quote, so nothing turns into a surprise.",
              ],
              [
                "I stay on afterward",
                "Hosting, monitoring, and small content updates stay with me through a monthly plan, so your site does not quietly go stale.",
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
          <h2 className="display text-3xl sm:text-4xl">Want to talk about your website?</h2>
          <p className="mt-5 text-mist">{PRICING_CUE}</p>
          <Link
            href={QUOTE_PATH}
            className="btn btn-primary mt-8 inline-flex"
            data-event="quote-cta"
          >
            Get My Quote
          </Link>
        </div>
      </section>
    </>
  );
}
