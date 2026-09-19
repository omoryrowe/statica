import type { NicheId } from "@/lib/attribution";
import { SITE } from "@/lib/site";

/**
 * Single source of truth for Statica’s concept projects: the fictional
 * businesses whose live demos sit on staticadesigns.com subdomains.
 * Edit a URL, name, description or CTA here and every page follows.
 *
 * These are concept projects, not clients. Copy must never imply otherwise.
 */

/** Public origin used for cross-site links (the concept sites link back here). */
export const PUBLIC_ORIGIN = SITE.url;

export const CONCEPT_STATUS = "Concept Project";

/** Disclosure for a single concept project. */
export function conceptDisclosure(name: string) {
  return `${name} is a fictional business created by Statica to show what a website for this industry can look like. It is not a client, and its reviews, prices and details are sample content.`;
}

/** Disclosure for a page listing several concept projects. */
export const CONCEPT_DISCLOSURE_ALL =
  "Every concept on this page is a fictional business created by Statica to show what a website for its industry can look like. None is a client, and their reviews, prices and details are sample content.";

export type ConceptSlug = "ironwood" | "vow-and-velvet" | "paws-and-polish";

export interface ConceptImage {
  src: string;
  alt: string;
}

export interface ConceptProject {
  slug: ConceptSlug;
  name: string;
  /** Shown as the category, e.g. "Contractor Website". */
  industry: string;
  status: typeof CONCEPT_STATUS;
  nicheId: NicheId;
  /** One-line description for cards. */
  summary: string;
  /** Longer description for project pages. */
  description: string;
  /** Scope the concept was built to: what a visitor gets in the demo. */
  scope: string;
  liveUrl: string;
  /** Hostname only, shown in the browser-frame address bar. */
  liveHost: string;
  landingUrl: string;
  landingPath: `/${string}`;
  projectPath: `/work/${string}`;
  previews: {
    desktop: ConceptImage;
    desktopAlt: ConceptImage;
    mobile: ConceptImage;
  };
  strategyHeadline: string;
  strategy: ReadonlyArray<{ title: string; body: string }>;
  cta: {
    /** Contextual link from project content to the niche landing page. */
    landingPrompt: string;
    landingLabel: string;
    /** Quote CTA shown beside the demo. */
    quoteLabel: string;
  };
}

export const CONCEPT_PROJECTS: readonly ConceptProject[] = [
  {
    slug: "ironwood",
    name: "Ironwood Home & Build",
    industry: "Contractor Website",
    status: CONCEPT_STATUS,
    nicheId: "contractors",
    summary:
      "A remodeler’s website built around finished work, plain-spoken services and a one-tap estimate request.",
    description:
      "A five-page website for a fictional Orlando remodeling and general contracting company. The design is built to help a homeowner decide, quickly, whether this is the crew they want in their house.",
    scope: "Five pages: Home, Services, Our Work, About, Contact",
    liveUrl: "https://ironwood.staticadesigns.com",
    liveHost: "ironwood.staticadesigns.com",
    landingUrl: `${PUBLIC_ORIGIN}/contractors`,
    landingPath: "/contractors",
    projectPath: "/work/ironwood",
    previews: {
      desktop: {
        src: "/images/concepts/ironwood/desktop.webp",
        alt: "Ironwood Home & Build homepage: a finished slate-and-walnut kitchen beside the headline “Central Florida remodeling, built on a written plan.”",
      },
      desktopAlt: {
        src: "/images/concepts/ironwood/desktop-2.webp",
        alt: "Ironwood Home & Build Our Work page with project categories for kitchens, bathrooms, renovations and outdoor living.",
      },
      mobile: {
        src: "/images/concepts/ironwood/mobile.webp",
        alt: "Ironwood Home & Build homepage on a phone, with Request an Estimate and Call buttons pinned to the bottom of the screen.",
      },
    },
    strategyHeadline: "How the design does the contractor’s selling.",
    strategy: [
      {
        title: "Finished work leads",
        body: "Kitchens, baths and outdoor spaces carry the homepage, with each finish itemized. A homeowner sees the quality of the work before reading a word.",
      },
      {
        title: "Services in plain language",
        body: "Kitchens, bathrooms, renovations, outdoor living and general contracting each get their own clear section, so nobody has to call to learn what is offered.",
      },
      {
        title: "Trust has a permanent place",
        body: "Licensing, insurance, warranty and the way a job runs sit where a cautious homeowner looks for them, rather than buried in an About page.",
      },
      {
        title: "Service area, named",
        body: "Orlando and the surrounding communities are spelled out, which reassures visitors and gives search engines something concrete to read.",
      },
      {
        title: "An estimate is always close",
        body: "A request-an-estimate button appears in the header, the hero and each page’s closing section.",
      },
      {
        title: "Built for the phone first",
        body: "Many homeowners arrive on a phone, so estimate and call buttons stay pinned to the bottom of the screen.",
      },
    ],
    cta: {
      landingPrompt: "Need a website for your contracting business?",
      landingLabel: "See websites for contractors",
      quoteLabel: "Get a Website Like This",
    },
  },
  {
    slug: "vow-and-velvet",
    name: "Vow & Velvet Weddings",
    industry: "Wedding Planner Website",
    status: CONCEPT_STATUS,
    nicheId: "wedding-planners",
    summary:
      "An editorial, portfolio-led website that makes a planner’s taste obvious before the first consultation.",
    description:
      "A five-page website for a fictional luxury wedding planning studio in Orlando and Winter Park. The design is built to feel expensive and composed, so a couple trusts the planner with the whole day.",
    scope: "Five pages: Home, Services, Weddings, About, Contact",
    liveUrl: "https://vowandvelvet.staticadesigns.com",
    liveHost: "vowandvelvet.staticadesigns.com",
    landingUrl: `${PUBLIC_ORIGIN}/wedding-planners`,
    landingPath: "/wedding-planners",
    projectPath: "/work/vow-and-velvet",
    previews: {
      desktop: {
        src: "/images/concepts/vow-and-velvet/desktop.webp",
        alt: "Vow & Velvet Weddings homepage: a bride holding a bouquet beside the headline “A wedding, beautifully held.”",
      },
      desktopAlt: {
        src: "/images/concepts/vow-and-velvet/desktop-2.webp",
        alt: "Vow & Velvet Weddings portfolio page laid out like an editorial index of five weddings.",
      },
      mobile: {
        src: "/images/concepts/vow-and-velvet/mobile.webp",
        alt: "Vow & Velvet Weddings homepage on a phone, with a full-bleed bridal portrait above the headline.",
      },
    },
    strategyHeadline: "How the design makes the planner feel premium.",
    strategy: [
      {
        title: "Editorial from the first screen",
        body: "A high-contrast serif, generous white space and a full-height portrait make the homepage read like a magazine spread, not a template.",
      },
      {
        title: "Imagery does the persuading",
        body: "Large, unhurried wedding photography sets the standard for the planner’s taste. Text stays short and gets out of the way.",
      },
      {
        title: "Services as a considered menu",
        body: "Full-service planning, partial planning, day-of coordination, design and destination weddings are presented as clear options, so couples can see where they fit.",
      },
      {
        title: "A portfolio laid out like a folio",
        body: "Weddings are indexed by location and shown as numbered plates. Couples can save favorites to bring to their consultation.",
      },
      {
        title: "A story with a face",
        body: "The About page introduces the planner and the studio’s standards. Couples hire people, and the design lets them meet one.",
      },
      {
        title: "Consultation, not “Contact”",
        body: "Every call to action invites a conversation, which matches how a couple actually decides to book a planner.",
      },
    ],
    cta: {
      landingPrompt: "Need a website for your wedding business?",
      landingLabel: "See websites for wedding planners",
      quoteLabel: "Get a Website Like This",
    },
  },
  {
    slug: "paws-and-polish",
    name: "Paws & Polish Grooming Co.",
    industry: "Pet Groomer Website",
    status: CONCEPT_STATUS,
    nicheId: "pet-groomers",
    summary:
      "A friendly, polished grooming website that shows the results and makes booking take about two minutes.",
    description:
      "A five-page website for a fictional Orlando dog grooming studio. The design is built to show results, explain what each visit costs, and make a nervous pet owner comfortable requesting an appointment.",
    scope: "Five pages: Home, Services, Gallery, About, Book Appointment",
    liveUrl: "https://pawsandpolish.staticadesigns.com",
    liveHost: "pawsandpolish.staticadesigns.com",
    landingUrl: `${PUBLIC_ORIGIN}/pet-groomers`,
    landingPath: "/pet-groomers",
    projectPath: "/work/paws-and-polish",
    previews: {
      desktop: {
        src: "/images/concepts/paws-and-polish/desktop.webp",
        alt: "Paws & Polish Grooming Co. homepage: a groomed cocker spaniel in an arched frame beside the headline “Grooming that sends your dog home happy.”",
      },
      desktopAlt: {
        src: "/images/concepts/paws-and-polish/desktop-2.webp",
        alt: "Paws & Polish Grooming Co. before-and-after gallery page with a drag-to-compare intro.",
      },
      mobile: {
        src: "/images/concepts/paws-and-polish/mobile.webp",
        alt: "Paws & Polish Grooming Co. homepage on a phone, with a large Book a grooming appointment button below the headline.",
      },
    },
    strategyHeadline: "How the design turns pet owners into bookings.",
    strategy: [
      {
        title: "Services priced plainly",
        body: "Full grooms, baths, puppy visits, nail trims and add-ons are laid out with sample pricing, so owners know what to expect before they ask.",
      },
      {
        title: "Results you can drag and compare",
        body: "A before-and-after gallery lets visitors slide between the two on any dog, filtered by service or coat type. Seeing the result is the strongest reason to book.",
      },
      {
        title: "Trust for a nervous owner",
        body: "Gentle handling, a clean studio and a step-by-step visit are explained up front. People are handing over a family member.",
      },
      {
        title: "Branding with personality",
        body: "Teal, sunny yellow and arched photo frames feel warm and pet-friendly, while the layout stays clean and professional.",
      },
      {
        title: "Booking that feels easy",
        body: "A request-an-appointment button is always in reach, and the form promises a reply within one business day.",
      },
      {
        title: "Friendly, never childish",
        body: "Playful touches are kept small and deliberate, so the business reads as skilled and trustworthy first.",
      },
    ],
    cta: {
      landingPrompt: "Need a website for your grooming business?",
      landingLabel: "See websites for pet groomers",
      quoteLabel: "Get a Website Like This",
    },
  },
] as const;

export function getConceptBySlug(slug: string): ConceptProject | undefined {
  return CONCEPT_PROJECTS.find((project) => project.slug === slug);
}

export function getConceptForNiche(niche: NicheId): ConceptProject {
  const project = CONCEPT_PROJECTS.find((entry) => entry.nicheId === niche);
  if (!project) throw new Error(`No concept project configured for niche "${niche}"`);
  return project;
}
