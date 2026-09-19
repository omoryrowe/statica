import Image from "next/image";
import type { ReactNode } from "react";
import BrowserFrame from "@/components/browser-frame";
import { CONCEPT_STATUS, type ConceptImage, type ConceptProject } from "@/lib/concepts";

/** Small neutral pill marking a project as a concept. Kept quiet on purpose. */
export function ConceptBadge({ className = "" }: { className?: string }) {
  return (
    <span
      className={`inline-flex items-center gap-2 rounded-full border border-ink-line bg-ink/60 px-3 py-1 font-nacelle text-[0.6875rem] font-semibold uppercase tracking-[0.18em] text-mist ${className}`}
    >
      <span aria-hidden className="h-1.5 w-1.5 rounded-full border border-mist" />
      {CONCEPT_STATUS}
    </span>
  );
}

/**
 * Live-demo link. Always opens in a new tab so the visitor keeps the Statica
 * page. `event` names the tracking hook; `location` says where it was clicked.
 */
export function DemoLink({
  project,
  location,
  event = "demo-cta",
  className = "btn btn-secondary",
  children = "View Live Demo",
}: {
  project: ConceptProject;
  location: string;
  event?: string;
  className?: string;
  children?: ReactNode;
}) {
  return (
    <a
      href={project.liveUrl}
      target="_blank"
      rel="noopener noreferrer"
      className={className}
      data-event={event}
      data-niche={project.nicheId}
      data-project={project.slug}
      data-location={location}
    >
      {children}
      <span aria-hidden className="ml-2">
        &#8599;
      </span>
      <span className="sr-only"> ({project.name} live demo, opens in a new tab)</span>
    </a>
  );
}

/** Desktop screenshot in a browser frame; clicking it opens the live demo. */
export function ConceptDesktop({
  project,
  image,
  location,
  event = "demo-cta",
  priority = false,
  sizes,
  className = "",
}: {
  project: ConceptProject;
  image: ConceptImage;
  location: string;
  event?: string;
  priority?: boolean;
  sizes?: string;
  className?: string;
}) {
  return (
    <a
      href={project.liveUrl}
      target="_blank"
      rel="noopener noreferrer"
      className={`group block rounded-2xl focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-bolt ${className}`}
      data-event={event}
      data-niche={project.nicheId}
      data-project={project.slug}
      data-location={location}
      aria-label={`Open the ${project.name} live demo in a new tab`}
    >
      <BrowserFrame
        src={image.src}
        alt={image.alt}
        url={project.liveHost}
        priority={priority}
        sizes={sizes}
      />
    </a>
  );
}

/** Phone-shaped screenshot. Corner radius follows the niche theme. */
export function PhoneFrame({
  image,
  className = "",
  sizes = "(min-width: 1024px) 200px, 40vw",
}: {
  image: ConceptImage;
  className?: string;
  sizes?: string;
}) {
  return (
    <figure
      className={`niche-phone overflow-hidden border-[5px] border-[#1b2029] bg-ink shadow-lift ${className}`}
    >
      <Image
        src={image.src}
        alt={image.alt}
        width={390}
        height={844}
        sizes={sizes}
        className="h-auto w-full"
      />
    </figure>
  );
}
