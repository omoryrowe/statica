import { CONCEPT_PROJECTS, type ConceptProject } from "@/lib/concepts";
import { FLERILAB } from "@/lib/site";

/**
 * The four projects in the homepage hero showcase. Built from the existing
 * FleriLab record and concept projects, so names, screenshots and live URLs
 * stay single-sourced. Edit order or copy here.
 *
 * FleriLab is client work. The other three are concept websites for
 * fictional businesses, and must never be presented as clients.
 */

/** Every showcase screenshot is cropped to this ratio, never stretched. */
export const SHOWCASE_SHOT_RATIO = "17 / 10";

export type ShowcaseKind = "client" | "concept";

export interface ShowcaseProject {
  id: string;
  name: string;
  kind: ShowcaseKind;
  kindLabel: "Client work" | "Concept website";
  /** Project type, e.g. "Contractor Website". */
  type: string;
  /** Short, factual description. */
  description: string;
  image: { src: string; alt: string; objectPosition: string };
  /** Address-bar text. Omitted when no public address is on file. */
  host?: string;
  link:
    | { external: false; label: string; href: string }
    | { external: true; label: string; concept: ConceptProject };
}

const fleriLab: ShowcaseProject = {
  id: FLERILAB.slug,
  name: FLERILAB.name,
  kind: "client",
  kindLabel: "Client work",
  type: FLERILAB.type,
  description:
    "A nonprofit advancing sustainable agriculture in Haiti. Visitors learn about the work, meet the founder, and donate.",
  image: {
    src: FLERILAB.heroImage,
    alt: "FleriLab homepage: a green-tinted photo of Haitian hillside farmland behind the headline “Welcome to FleriLab,” with a Donate button in the navigation.",
    objectPosition: "50% 0%",
  },
  link: { external: false, label: "View Client Project", href: "/work" },
};

export const SHOWCASE_PROJECTS: readonly ShowcaseProject[] = [
  fleriLab,
  ...CONCEPT_PROJECTS.map(
    (concept): ShowcaseProject => ({
      id: concept.slug,
      name: concept.name,
      kind: "concept",
      kindLabel: "Concept website",
      type: concept.industry,
      description: concept.summary,
      image: {
        src: concept.previews.desktop.src,
        alt: concept.previews.desktop.alt,
        objectPosition: "50% 0%",
      },
      host: concept.liveHost,
      link: { external: true, label: "View Concept Site", concept },
    }),
  ),
];
