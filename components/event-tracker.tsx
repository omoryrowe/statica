"use client";

import { useEffect } from "react";
import { trackEvent } from "@/lib/track";

/**
 * One delegated click listener for every element carrying `data-event`.
 * Optional context comes from `data-niche`, `data-location` and `data-project`.
 */
export default function EventTracker() {
  useEffect(() => {
    function onClick(event: MouseEvent) {
      const target = event.target;
      if (!(target instanceof Element)) return;
      const el = target.closest<HTMLElement>("[data-event]");
      if (!el?.dataset.event) return;
      trackEvent(el.dataset.event, {
        niche: el.dataset.niche,
        location: el.dataset.location,
        project: el.dataset.project,
      });
    }
    document.addEventListener("click", onClick);
    return () => document.removeEventListener("click", onClick);
  }, []);

  return null;
}
