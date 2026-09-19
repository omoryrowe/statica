/**
 * Lightweight event hooks. Statica has no analytics platform installed, so
 * this only forwards events to whatever is already on the page (GTM's
 * dataLayer, gtag, Meta Pixel) and always dispatches a `statica:track`
 * DOM event. Nothing loads, and nothing is sent, unless a tag is added.
 *
 * Event names (kebab-case, matching the existing `data-event` attributes):
 *   quote-cta            any "Get My Quote" click  (+ niche, location)
 *   niche-view           niche landing page viewed (+ niche)
 *   demo-cta             live demo clicked from a niche or project page (+ niche, project, location)
 *   packages-cta         Packages clicked from a niche page (+ niche)
 *   work-project-click   concept project clicked on /work (+ project)
 *   work-demo-click      live demo clicked on /work (+ project)
 *   quote-form-view      quote form reached (+ source)
 *   quote-form-submit    quote form submitted successfully (+ source)
 *   consult-cta          existing Relay consultation CTA
 */

type TrackValue = string | number | boolean | undefined;
export type TrackParams = Record<string, TrackValue>;

declare global {
  interface Window {
    dataLayer?: Array<Record<string, unknown>>;
    gtag?: (...args: unknown[]) => void;
    fbq?: (...args: unknown[]) => void;
  }
}

export function trackEvent(name: string, params: TrackParams = {}) {
  if (typeof window === "undefined") return;

  const payload: Record<string, string | number | boolean> = {};
  for (const [key, value] of Object.entries(params)) {
    if (value !== undefined && value !== "") payload[key] = value;
  }

  try {
    window.dispatchEvent(new CustomEvent("statica:track", { detail: { event: name, ...payload } }));
    window.dataLayer?.push({ event: name, ...payload });
    window.gtag?.("event", name, payload);
    window.fbq?.("trackCustom", name, payload);
  } catch {
    /* tracking must never break the page */
  }
}
