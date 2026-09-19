import { QUOTE_PATH } from "@/lib/site";

/**
 * Lead-source attribution for niche landing pages.
 *
 * Flow: a niche page stores its niche + any UTM parameters in sessionStorage,
 * its quote CTAs carry `?source=<niche>`, the quote form merges both and sends
 * an `attribution` object, and the API route validates it with
 * `sanitizeAttribution` before it reaches the email and GoHighLevel note.
 */

/** Human-readable lead source for each niche landing page. Add new niches here. */
export const NICHE_SOURCES = {
  contractors: "Contractor Landing Page",
  "wedding-planners": "Wedding Planner Landing Page",
  "pet-groomers": "Pet Groomer Landing Page",
} as const;

export type NicheId = keyof typeof NICHE_SOURCES;

export function isNicheId(value: unknown): value is NicheId {
  return typeof value === "string" && Object.prototype.hasOwnProperty.call(NICHE_SOURCES, value);
}

export const UTM_KEYS = [
  "utm_source",
  "utm_medium",
  "utm_campaign",
  "utm_term",
  "utm_content",
  "fbclid",
] as const;

export type UtmKey = (typeof UTM_KEYS)[number];

export interface Attribution {
  source?: NicheId;
  landingPath?: string;
  utm?: Partial<Record<UtmKey, string>>;
}

const UTM_VALUE_MAX = 120;
const LANDING_PATH_MAX = 80;

function cleanValue(value: unknown, max: number): string {
  // Printable ASCII/Latin only: this ends up in an email body and a CRM note.
  return String(value ?? "")
    .replace(/[^\x20-\x7E -ÿ]/g, "")
    .trim()
    .slice(0, max);
}

/** Validates untrusted attribution input. Returns null when nothing usable remains. */
export function sanitizeAttribution(input: unknown): Attribution | null {
  if (!input || typeof input !== "object") return null;
  const raw = input as Record<string, unknown>;
  const result: Attribution = {};

  if (isNicheId(raw.source)) result.source = raw.source;

  const landingPath = cleanValue(raw.landingPath, LANDING_PATH_MAX);
  if (/^\/[a-z0-9\-/]*$/i.test(landingPath)) result.landingPath = landingPath;

  if (raw.utm && typeof raw.utm === "object") {
    const utm: Partial<Record<UtmKey, string>> = {};
    for (const key of UTM_KEYS) {
      const value = cleanValue((raw.utm as Record<string, unknown>)[key], UTM_VALUE_MAX);
      if (value) utm[key] = value;
    }
    if (Object.keys(utm).length) result.utm = utm;
  }

  return result.source || result.landingPath || result.utm ? result : null;
}

/** Plain-text lines describing a lead's origin, shared by the email and the CRM note. */
export function describeAttribution(attribution: Attribution | undefined): string[] {
  if (!attribution) return [];
  const lines: string[] = [];
  if (attribution.source) lines.push(`Lead source: ${NICHE_SOURCES[attribution.source]}`);
  if (attribution.landingPath) lines.push(`Landing page: ${attribution.landingPath}`);
  if (attribution.utm) {
    for (const key of UTM_KEYS) {
      const value = attribution.utm[key];
      if (value) lines.push(`${key}: ${value}`);
    }
  }
  return lines;
}

/** Quote-flow link for a niche page. Works without JavaScript. */
export function nicheQuoteHref(niche: NicheId) {
  return `${QUOTE_PATH}?source=${niche}`;
}

/* ---------------------------------------------------------------- client */

const STORAGE_KEY = "statica_attribution_v1";

function readUtm(params: URLSearchParams) {
  const utm: Partial<Record<UtmKey, string>> = {};
  for (const key of UTM_KEYS) {
    const value = cleanValue(params.get(key), UTM_VALUE_MAX);
    if (value) utm[key] = value;
  }
  return utm;
}

function readStored(): Attribution | null {
  try {
    const raw = window.sessionStorage.getItem(STORAGE_KEY);
    return raw ? sanitizeAttribution(JSON.parse(raw)) : null;
  } catch {
    return null;
  }
}

function writeStored(attribution: Attribution) {
  try {
    window.sessionStorage.setItem(STORAGE_KEY, JSON.stringify(attribution));
  } catch {
    /* storage unavailable (private mode, blocked): the ?source= param still works */
  }
}

/**
 * Called by a niche landing page on load. Remembers the niche and any UTM
 * parameters for the rest of the visit. Fresh UTMs win; otherwise earlier ones
 * from the same visit are kept.
 */
export function captureAttribution(niche: NicheId): Attribution {
  const params = new URLSearchParams(window.location.search);
  const previous = readStored();
  const freshUtm = readUtm(params);
  const utm = Object.keys(freshUtm).length ? freshUtm : previous?.utm;

  const attribution: Attribution = {
    source: niche,
    landingPath: window.location.pathname,
    ...(utm ? { utm } : {}),
  };
  writeStored(attribution);
  return attribution;
}

/**
 * Called by the quote form. Combines what a niche page stored with anything on
 * the quote URL itself (`?source=` and UTMs), URL values taking precedence.
 */
export function readAttribution(search: string): Attribution | null {
  const params = new URLSearchParams(search);
  const stored = readStored();
  const urlSource = params.get("source");
  const urlUtm = readUtm(params);

  const source = isNicheId(urlSource) ? urlSource : stored?.source;
  const utm = Object.keys(urlUtm).length ? urlUtm : stored?.utm;
  const landingPath =
    stored?.source === source && stored?.landingPath
      ? stored.landingPath
      : source
        ? `/${source}`
        : undefined;

  return sanitizeAttribution({ source, landingPath, utm });
}
