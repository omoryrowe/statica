import Link from "next/link";
import { notFound } from "next/navigation";
import Ambient from "@/components/ambient";
import { ConceptBadge, ConceptDesktop, DemoLink, PhoneFrame } from "@/components/concept-preview";
import { nicheQuoteHref } from "@/lib/attribution";
import { CONCEPT_PROJECTS, conceptDisclosure, getConceptBySlug } from "@/lib/concepts";
import { pageMetadata } from "@/lib/metadata";

type Params = Promise<{ slug: string }>;

export const dynamicParams = false;

export function generateStaticParams() {
  return CONCEPT_PROJECTS.map((project) => ({ slug: project.slug }));
}

export async function generateMetadata({ params }: { params: Params }) {
  const { slug } = await params;
  const project = getConceptBySlug(slug);
  if (!project) return {};
  return pageMetadata({
    title: `${project.name}: ${project.industry} Concept`,
    description: `${project.description} A Statica concept project with a live demo.`,
    path: project.projectPath,
  });
}

export default async function ConceptProjectPage({ params }: { params: Params }) {
  const { slug } = await params;
  const project = getConceptBySlug(slug);
  if (!project) notFound();

  return (
    <div className={`niche niche-${project.nicheId}`}>
      <section className="grain relative overflow-hidden">
        <Ambient variant="soft" />
        <div className="relative z-10 mx-auto max-w-6xl px-4 py-16 sm:px-6 lg:py-20">
          <Link href="/work" className="text-sm text-mist hover:text-bolt">
            <span aria-hidden>&larr; </span>
            All work
          </Link>
          <div className="mt-8 flex flex-wrap items-center gap-4">
            <p className="eyebrow">{project.industry}</p>
            <ConceptBadge />
          </div>
          <h1 className="display mt-6 max-w-3xl text-[2.5rem] leading-[1.05] sm:text-5xl lg:text-6xl">
            {project.name}
          </h1>
          <p className="lede mt-6 max-w-2xl">{project.description}</p>
          <div className="mt-9 flex flex-wrap gap-3">
            <DemoLink
              project={project}
              location="project-page"
              className="btn btn-primary"
            />
            <Link
              href={nicheQuoteHref(project.nicheId)}
              className="btn btn-secondary"
              data-event="quote-cta"
              data-niche={project.nicheId}
              data-location="project-page"
            >
              {project.cta.quoteLabel}
            </Link>
          </div>
        </div>
      </section>

      <section className="border-t border-ink-line bg-ink-raised">
        <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 lg:py-20">
          <div className="grid gap-10 lg:grid-cols-[minmax(0,1.7fr)_minmax(0,1fr)] lg:items-end">
            <ConceptDesktop
              project={project}
              image={project.previews.desktop}
              location="project-page"
              priority
              sizes="(min-width: 1024px) 700px, 100vw"
            />
            <div className="grid items-end gap-8 sm:grid-cols-[minmax(0,9.5rem)_minmax(0,1fr)] lg:grid-cols-1 lg:justify-items-start xl:grid-cols-[minmax(0,9.5rem)_minmax(0,1fr)]">
              <PhoneFrame image={project.previews.mobile} className="w-full max-w-[9.5rem]" />
              <dl className="space-y-3 text-sm">
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
                  <dd className="text-right text-paper">{project.scope}</dd>
                </div>
              </dl>
            </div>
          </div>
          <div className="mt-10 grid gap-10 lg:grid-cols-[minmax(0,1.7fr)_minmax(0,1fr)]">
            <ConceptDesktop
              project={project}
              image={project.previews.desktopAlt}
              location="project-page"
              sizes="(min-width: 1024px) 700px, 100vw"
            />
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-20 sm:px-6">
        <div className="max-w-2xl">
          <p className="eyebrow">Design strategy</p>
          <h2 className="display mt-5 text-3xl sm:text-4xl">{project.strategyHeadline}</h2>
          <p className="mt-6 text-mist">
            This is a concept project, so there are no client results to report. What follows is the
            thinking behind the design.
          </p>
        </div>
        <div className="mt-12 grid gap-x-10 gap-y-8 md:grid-cols-2 lg:grid-cols-3">
          {project.strategy.map((item, i) => (
            <article key={item.title} className="hairline-top pt-5">
              <span className="font-nacelle text-sm font-semibold text-bolt/70">0{i + 1}</span>
              <h3 className="mt-2 font-nacelle text-lg font-semibold text-paper">{item.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-mist">{item.body}</p>
            </article>
          ))}
        </div>
        <p className="mt-12 max-w-2xl border-t border-ink-line/70 pt-5 text-xs leading-relaxed text-mist">
          <strong className="font-semibold text-paper">Concept disclosure.</strong> {conceptDisclosure(project.name)}
        </p>
      </section>

      <section className="border-t border-ink-line bg-ink-raised">
        <div className="mx-auto flex max-w-6xl flex-col items-start gap-6 px-4 py-14 sm:px-6 md:flex-row md:items-center md:justify-between">
          <div>
            <p className="font-nacelle text-2xl font-semibold text-paper">{project.cta.landingPrompt}</p>
            <p className="mt-2 text-sm text-mist">
              See how I approach websites for this kind of business, then ask for a quote.
            </p>
          </div>
          <div className="flex flex-wrap gap-3">
            <Link href={project.landingPath} className="btn btn-secondary">
              {project.cta.landingLabel}
            </Link>
            <Link
              href={nicheQuoteHref(project.nicheId)}
              className="btn btn-primary"
              data-event="quote-cta"
              data-niche={project.nicheId}
              data-location="project-page-footer"
            >
              Get My Free Preview
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
