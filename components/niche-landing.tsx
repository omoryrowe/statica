import Link from "next/link";
import Ambient from "@/components/ambient";
import NichePageTracker from "@/components/niche-page-tracker";
import { ConceptBadge, ConceptDesktop, DemoLink, PhoneFrame } from "@/components/concept-preview";
import { nicheQuoteHref, type NicheId } from "@/lib/attribution";
import { conceptDisclosure, getConceptForNiche, type ConceptProject } from "@/lib/concepts";
import { NICHES, WHY_STATICA_POINTS, type NicheLanding } from "@/lib/niches";
import { PRICING_HERO_LINE, PRICING_PATH, PROCESS_STEPS, SETUP_PLANS } from "@/lib/site";

/** Page counts shown in the pricing entry point. Prices come from SETUP_PLANS. */
const PLAN_SCOPE: Record<string, string> = {
  "one-page": "One custom page",
  business: "Up to five pages",
  expanded: "Up to eight pages",
};

const HERO_SIZES = "(min-width: 1024px) 620px, 100vw";

type Ctx = { niche: NicheLanding; project: ConceptProject; quoteHref: string };

function QuoteButton({
  ctx,
  location,
  className = "btn btn-primary",
  children = "Get My Quote",
}: {
  ctx: Ctx;
  location: string;
  className?: string;
  children?: React.ReactNode;
}) {
  return (
    <Link
      href={ctx.quoteHref}
      className={className}
      data-event="quote-cta"
      data-niche={ctx.niche.id}
      data-location={location}
    >
      {children}
    </Link>
  );
}

/* ------------------------------------------------------------------ hero */

function HeroCopy({ ctx, centered }: { ctx: Ctx; centered?: boolean }) {
  const { niche, project } = ctx;
  return (
    <div className={centered ? "mx-auto max-w-3xl text-center" : ""}>
      <p className="eyebrow">{niche.hero.eyebrow}</p>
      <h1 className="display mt-6 text-[2.5rem] leading-[1.05] sm:text-5xl lg:text-6xl">
        {niche.hero.headline}
      </h1>
      <p className={`lede mt-7 ${centered ? "mx-auto max-w-2xl" : "max-w-xl"}`}>{niche.hero.lede}</p>
      <div className={`mt-9 flex flex-wrap gap-3 ${centered ? "justify-center" : ""}`}>
        <QuoteButton ctx={ctx} location="hero" />
        <DemoLink project={project} location="hero" />
      </div>
      <p className="mt-5 text-sm text-mist">Free quote, no obligation.</p>
    </div>
  );
}

function HeroStage({ ctx }: { ctx: Ctx }) {
  const { project } = ctx;
  return (
    <div className="niche-stage relative pb-10">
      <ConceptDesktop
        project={project}
        image={project.previews.desktop}
        location="hero"
        priority
        sizes={HERO_SIZES}
      />
      <PhoneFrame
        image={project.previews.mobile}
        className="absolute bottom-0 left-3 w-[26%] max-w-[8.5rem] sm:left-6 lg:-left-6"
      />
      <p className="mt-5 flex flex-wrap items-center gap-x-3 gap-y-2 pl-[30%] text-xs text-mist lg:pl-[26%]">
        <ConceptBadge />
        <span>{project.name}, a fictional business.</span>
      </p>
    </div>
  );
}

function Hero({ ctx }: { ctx: Ctx }) {
  const centered = ctx.niche.id === "wedding-planners";
  return (
    <section className="grain relative overflow-hidden">
      <Ambient />
      <div aria-hidden className="niche-deco" />
      {centered ? (
        <div className="relative z-10 mx-auto max-w-6xl px-4 py-16 sm:px-6 lg:py-24">
          <HeroCopy ctx={ctx} centered />
          <div className="mx-auto mt-16 max-w-5xl">
            <HeroStage ctx={ctx} />
          </div>
        </div>
      ) : (
        <div className="relative z-10 mx-auto grid max-w-6xl items-center gap-14 px-4 py-16 sm:px-6 lg:grid-cols-[minmax(0,0.85fr)_minmax(0,1.15fr)] lg:py-24">
          <HeroCopy ctx={ctx} />
          <HeroStage ctx={ctx} />
        </div>
      )}
    </section>
  );
}

/* ------------------------------------------------------------ why it matters */

function Why({ ctx }: { ctx: Ctx }) {
  const { why, id } = ctx.niche;

  const heading = (
    <div>
      <p className="eyebrow">{why.eyebrow}</p>
      <h2 className="display mt-5 text-3xl sm:text-4xl">{why.headline}</h2>
      <p className="mt-6 max-w-lg text-mist">{why.intro}</p>
      {why.closing ? (
        <p className="mt-6 max-w-lg font-nacelle text-xl leading-snug text-paper">{why.closing}</p>
      ) : null}
    </div>
  );

  if (id === "contractors") {
    return (
      <section className="border-y border-ink-line bg-ink-raised">
        <div className="mx-auto max-w-6xl px-4 py-20 sm:px-6">
          <div className="max-w-2xl">{heading}</div>
          <div className="mt-12 grid gap-x-10 gap-y-8 sm:grid-cols-2 lg:grid-cols-3">
            {why.points.map(([title, body], i) => (
              <article key={title} className="hairline-top pt-5">
                <span className="font-nacelle text-sm font-semibold text-bolt/70">
                  0{i + 1}
                </span>
                <h3 className="mt-2 font-nacelle text-lg font-semibold text-paper">{title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-mist">{body}</p>
              </article>
            ))}
          </div>
        </div>
      </section>
    );
  }

  if (id === "wedding-planners") {
    return (
      <section className="border-y border-ink-line bg-ink-raised">
        <div className="mx-auto grid max-w-6xl gap-14 px-4 py-20 sm:px-6 lg:grid-cols-[minmax(0,0.8fr)_minmax(0,1.2fr)] lg:py-28">
          <div className="lg:sticky lg:top-28 lg:self-start">{heading}</div>
          <ul className="list-none divide-y divide-ink-line/70 p-0">
            {why.points.map(([title, body]) => (
              <li key={title} className="grid gap-2 py-6 first:pt-0 sm:grid-cols-[minmax(0,0.45fr)_minmax(0,1fr)] sm:gap-8">
                <h3 className="font-nacelle text-xl text-paper">{title}</h3>
                <p className="text-mist">{body}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>
    );
  }

  return (
    <section className="border-y border-ink-line bg-ink-raised">
      <div className="mx-auto max-w-6xl px-4 py-20 sm:px-6">
        <div className="max-w-2xl">{heading}</div>
        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {why.points.map(([title, body]) => (
            <article
              key={title}
              className="niche-card rounded-[2rem] border border-ink-line bg-ink p-7"
            >
              <span
                aria-hidden
                className="flex h-9 w-9 items-center justify-center rounded-full border border-ink-line bg-ink-raised text-bolt"
              >
                &#10003;
              </span>
              <h3 className="mt-5 font-nacelle text-lg font-semibold text-paper">{title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-mist">{body}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ------------------------------------------------------- featured concept */

function Featured({ ctx }: { ctx: Ctx }) {
  const { niche, project } = ctx;
  return (
    <section id="concept" className="grain relative scroll-mt-20 overflow-hidden">
      <Ambient variant="soft" />
      <div className="relative z-10 mx-auto max-w-6xl px-4 py-20 sm:px-6 lg:py-28">
        <div className="max-w-3xl">
          <div className="flex flex-wrap items-center gap-4">
            <p className="eyebrow">Featured concept</p>
            <ConceptBadge />
          </div>
          <h2 className="display mt-5 text-3xl sm:text-4xl lg:text-5xl">{niche.featured.headline}</h2>
          <p className="lede mt-6 max-w-2xl">{niche.featured.intro}</p>
        </div>

        <div className="mt-12 grid gap-10 lg:grid-cols-[minmax(0,1.7fr)_minmax(0,1fr)]">
          <ConceptDesktop
            project={project}
            image={project.previews.desktop}
            location="featured"
            sizes="(min-width: 1024px) 700px, 100vw"
          />
          <div className="flex flex-col justify-between gap-10">
            <div className="flex flex-wrap gap-3 lg:flex-col lg:items-start">
              <DemoLink project={project} location="featured" className="btn btn-primary" />
              <QuoteButton ctx={ctx} location="featured" className="btn btn-secondary">
                {project.cta.quoteLabel}
              </QuoteButton>
            </div>
            <div className="grid items-end gap-8 sm:grid-cols-[minmax(0,9.5rem)_minmax(0,1fr)] lg:grid-cols-1 xl:grid-cols-[minmax(0,9.5rem)_minmax(0,1fr)]">
              <PhoneFrame image={project.previews.mobile} className="w-full max-w-[9.5rem]" />
              <dl className="space-y-3 text-sm">
                <div className="hairline-top flex justify-between gap-4 pt-3">
                  <dt className="text-mist">Project</dt>
                  <dd className="text-right text-paper">{project.name}</dd>
                </div>
                <div className="hairline-top flex justify-between gap-4 pt-3">
                  <dt className="text-mist">Category</dt>
                  <dd className="text-right text-paper">{project.industry}</dd>
                </div>
                <div className="hairline-top flex justify-between gap-4 pt-3">
                  <dt className="text-mist">Type</dt>
                  <dd className="text-right text-paper">Concept project</dd>
                </div>
                <div className="hairline-top flex justify-between gap-4 pt-3">
                  <dt className="text-mist">Scope</dt>
                  <dd className="text-right text-paper">Five pages</dd>
                </div>
              </dl>
            </div>
          </div>
        </div>

        <div className="mt-16">
          <h3 className="font-nacelle text-xl font-semibold text-paper">{project.strategyHeadline}</h3>
          <div className="mt-8 grid gap-8 md:grid-cols-3">
            {project.strategy.slice(0, 3).map((item) => (
              <article key={item.title} className="hairline-top pt-5">
                <h4 className="font-semibold text-paper">{item.title}</h4>
                <p className="mt-2 text-sm leading-relaxed text-mist">{item.body}</p>
              </article>
            ))}
          </div>
          <Link
            href={project.projectPath}
            className="group mt-8 inline-flex items-center gap-2 text-sm font-semibold text-bolt"
          >
            Read the full design strategy
            <span aria-hidden className="transition-transform group-hover:translate-x-1">
              &rarr;
            </span>
          </Link>
        </div>

        <p className="mt-12 max-w-2xl border-t border-ink-line/70 pt-5 text-xs leading-relaxed text-mist">
          <strong className="font-semibold text-paper">Concept disclosure.</strong> {conceptDisclosure(project.name)}
        </p>
      </div>
    </section>
  );
}

/* --------------------------------------------------------- what I'd build */

function Build({ ctx }: { ctx: Ctx }) {
  const { build, id } = ctx.niche;
  const list =
    id === "wedding-planners" ? (
      <ul className="list-none divide-y divide-ink-line/70 p-0">
        {build.items.map(([title, body], i) => (
          <li key={title} className="grid gap-2 py-5 sm:grid-cols-[3rem_minmax(0,0.6fr)_minmax(0,1fr)] sm:gap-6">
            <span className="font-nacelle text-sm text-mist">0{i + 1}</span>
            <h3 className="font-nacelle text-xl text-paper">{title}</h3>
            <p className="text-mist">{body}</p>
          </li>
        ))}
      </ul>
    ) : id === "pet-groomers" ? (
      <div className="grid gap-4 sm:grid-cols-2">
        {build.items.map(([title, body]) => (
          <article key={title} className="niche-card rounded-[1.75rem] border border-ink-line bg-ink-raised p-6">
            <h3 className="font-nacelle text-lg font-semibold text-paper">{title}</h3>
            <p className="mt-2 text-sm leading-relaxed text-mist">{body}</p>
          </article>
        ))}
      </div>
    ) : (
      <dl className="grid gap-x-10 gap-y-7 sm:grid-cols-2">
        {build.items.map(([title, body]) => (
          <div key={title} className="hairline-top pt-5">
            <dt className="font-semibold text-paper">{title}</dt>
            <dd className="mt-2 text-sm leading-relaxed text-mist">{body}</dd>
          </div>
        ))}
      </dl>
    );

  return (
    <section className="border-y border-ink-line bg-ink-raised">
      <div className="mx-auto grid max-w-6xl gap-14 px-4 py-20 sm:px-6 lg:grid-cols-[minmax(0,0.75fr)_minmax(0,1.25fr)]">
        <div className="lg:sticky lg:top-28 lg:self-start">
          <p className="eyebrow">What I&rsquo;d build for you</p>
          <h2 className="display mt-5 text-3xl sm:text-4xl">{build.headline}</h2>
          <p className="mt-6 text-mist">{build.intro}</p>
          <p className="mt-4 text-sm text-mist">
            Booking systems, ecommerce and custom integrations are quoted separately when a project
            needs them.
          </p>
        </div>
        {list}
      </div>
    </section>
  );
}

/* ------------------------------------------------------------- why Statica */

function WhyStatica({ ctx }: { ctx: Ctx }) {
  return (
    <section className="mx-auto max-w-6xl px-4 py-20 sm:px-6">
      <div className="grid gap-14 lg:grid-cols-[minmax(0,0.8fr)_minmax(0,1.2fr)]">
        <div>
          <p className="eyebrow">Why Statica</p>
          <h2 className="display mt-5 text-3xl sm:text-4xl">A website that feels like your business.</h2>
          <p className="mt-6 max-w-lg text-mist">{ctx.niche.whyStatica.intro}</p>
        </div>
        <dl className="grid gap-x-10 gap-y-7 sm:grid-cols-2">
          {WHY_STATICA_POINTS.map(([title, body]) => (
            <div key={title} className="hairline-top pt-5">
              <dt className="font-semibold text-paper">{title}</dt>
              <dd className="mt-2 text-sm leading-relaxed text-mist">{body}</dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}

/* ----------------------------------------------------------------- process */

function Process() {
  return (
    <section className="border-y border-ink-line bg-ink-raised">
      <div className="mx-auto max-w-6xl px-4 py-20 sm:px-6">
        <div className="max-w-2xl">
          <p className="eyebrow">Process</p>
          <h2 className="display mt-5 text-3xl sm:text-4xl">How a project runs.</h2>
        </div>
        <ol className="mt-12 grid list-none gap-8 p-0 md:grid-cols-4">
          {PROCESS_STEPS.map(([title, body], i) => (
            <li key={title} className="hairline-top pt-6">
              <span className="font-nacelle text-3xl font-semibold text-bolt/80">{i + 1}</span>
              <h3 className="mt-3 font-semibold text-paper">{title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-mist">{body}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}

/* ----------------------------------------------------------------- pricing */

function Pricing({ ctx }: { ctx: Ctx }) {
  const { niche, project } = ctx;
  return (
    <section className="mx-auto max-w-6xl px-4 py-20 sm:px-6">
      <div className="max-w-2xl">
        <p className="eyebrow">Pricing</p>
        <h2 className="display mt-5 text-3xl sm:text-4xl">{PRICING_HERO_LINE}</h2>
        <p className="mt-6 text-mist">
          Flat, up-front pricing, agreed before any work begins. {project.name} is a five-page site,
          the size of the Business Website package.
        </p>
      </div>
      <div className="mt-10 grid gap-5 md:grid-cols-3">
        {SETUP_PLANS.map((plan) => (
          <div key={plan.id} className="niche-card rounded-3xl border border-ink-line bg-ink p-7">
            <p className="text-sm text-mist">{plan.name}</p>
            <p className="mt-3 font-nacelle text-4xl font-semibold text-paper">{plan.priceLabel}</p>
            <p className="mt-2 text-sm text-mist">{PLAN_SCOPE[plan.id]}</p>
          </div>
        ))}
      </div>
      <p className="mt-6 text-sm text-mist">
        Not sure which fits?{" "}
        <Link
          href={PRICING_PATH}
          className="font-semibold text-bolt hover:underline"
          data-event="packages-cta"
          data-niche={niche.id}
          data-location="pricing"
        >
          See everything included in each package
        </Link>
        .
      </p>
    </section>
  );
}

/* ------------------------------------------------------------------- final */

function FinalCta({ ctx }: { ctx: Ctx }) {
  const { niche, project } = ctx;
  return (
    <section className="grain relative overflow-hidden border-t border-ink-line">
      <Ambient variant="soft" />
      <div className="relative z-10 mx-auto max-w-3xl px-4 py-20 text-center sm:px-6 lg:py-28">
        <h2 className="display text-3xl sm:text-4xl lg:text-5xl">{niche.final.headline}</h2>
        <p className="lede mx-auto mt-6 max-w-2xl">{niche.final.body}</p>
        <div className="mt-9 flex flex-wrap justify-center gap-3">
          <QuoteButton ctx={ctx} location="final" />
        </div>
        <p className="mx-auto mt-6 max-w-md text-sm text-mist">
          Requesting a quote is free, with no obligation. No payment or subscription starts when you
          submit the form.
        </p>
        <p className="mt-6 text-sm text-mist">
          Want another look first?{" "}
          <a
            href={project.liveUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="font-semibold text-bolt hover:underline"
            data-event="demo-cta"
            data-niche={niche.id}
            data-project={project.slug}
            data-location="final"
          >
            Open the {project.name} demo
            <span className="sr-only"> (opens in a new tab)</span>
          </a>
        </p>
      </div>
    </section>
  );
}

/* -------------------------------------------------------------------- page */

export default function NicheLandingPage({ niche: nicheId }: { niche: NicheId }) {
  const niche = NICHES[nicheId];
  const project = getConceptForNiche(nicheId);
  const ctx: Ctx = { niche, project, quoteHref: nicheQuoteHref(nicheId) };

  return (
    <div className={`niche niche-${nicheId}`}>
      <NichePageTracker niche={nicheId} />
      <Hero ctx={ctx} />
      <Why ctx={ctx} />
      <Featured ctx={ctx} />
      <Build ctx={ctx} />
      <WhyStatica ctx={ctx} />
      <Process />
      <Pricing ctx={ctx} />
      <FinalCta ctx={ctx} />
    </div>
  );
}
