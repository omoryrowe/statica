"use client";

import { useEffect } from "react";
import { captureAttribution, type NicheId } from "@/lib/attribution";
import { trackEvent } from "@/lib/track";

/** Records the niche + UTMs for the quote flow and fires the page-view hook. */
export default function NichePageTracker({ niche }: { niche: NicheId }) {
  useEffect(() => {
    const attribution = captureAttribution(niche);
    trackEvent("niche-view", { niche, ...attribution.utm });
  }, [niche]);

  return null;
}
