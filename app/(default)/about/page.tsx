import Image from "next/image";
import Link from "next/link";
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
    <article className="mx-auto max-w-5xl px-4 py-16 sm:px-6">
      <div className="grid items-start gap-10 md:grid-cols-[300px_minmax(0,1fr)]">
        <div className="mx-auto w-[220px] overflow-hidden rounded-2xl sm:w-[240px] md:mx-0 md:w-[300px]">
          <Image
            src="/images/statica/statica founder.jpg"
            alt="Omory Rowe, founder of Statica"
            width={600}
            height={840}
            className="h-[300px] w-full object-cover object-[center_18%] md:h-[400px] md:max-h-[420px]"
          />
        </div>
        <div>
          <h1 className="font-nacelle text-4xl font-semibold text-paper">About Statica</h1>
          <p className="mt-5 text-lg text-mist">
            I’m Omory Rowe, founder of Statica Design Agency. I’m a UCF Computer Science graduate with professional software development experience and a background in visual design.
          </p>
          <p className="mt-4 text-mist">
            With Statica, I bring those skills together to create websites that look considered, explain the business clearly, and make contacting you straightforward.
          </p>
        </div>
      </div>

      <section className="mt-16 max-w-3xl">
        <h2 className="font-nacelle text-2xl font-semibold text-paper">How I approach your website</h2>
        <p className="mt-4 text-mist">
          I start with the business: who you serve, what people need to know, and how they should get in touch. From there I shape the pages, the language, and the layout so those actions are easy. You’ll work with me directly through the quote, the build, and launch.
        </p>
      </section>

      <section className="mt-12 max-w-3xl">
        <h2 className="font-nacelle text-2xl font-semibold text-paper">Support after launch</h2>
        <p className="mt-4 text-mist">
          A website still needs hosting, attention, and small content changes. Statica Care keeps that work with me, so updating hours or swapping a photo doesn’t become a side project you have to figure out alone.
        </p>
        <Link href={QUOTE_PATH} className="btn btn-primary mt-8 inline-flex" data-event="quote-cta">
          Get My Quote
        </Link>
      </section>
    </article>
  );
}
