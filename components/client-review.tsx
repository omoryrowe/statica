"use client";

import { useId, useState } from "react";

export default function ClientReview({
  review,
}: {
  review: {
    name: string;
    company: string;
    paragraphs: readonly string[];
  };
}) {
  const extraId = useId();
  const [open, setOpen] = useState(false);
  const expandable = review.paragraphs.length > 1;
  const [first, ...rest] = review.paragraphs;

  return (
    <blockquote
      data-aos="fade-up"
      className="rounded-3xl border border-ink-line bg-ink-raised p-5 sm:p-6"
    >
      <div className="space-y-3 text-sm leading-relaxed text-mist sm:text-base">
        <p>
          {first}
          {expandable && !open ? "\u2026" : ""}
        </p>
        {expandable ? (
          <div id={extraId} hidden={!open} aria-hidden={!open} className="space-y-3">
            {rest.map((paragraph) => (
              <p key={paragraph.slice(0, 48)}>{paragraph}</p>
            ))}
          </div>
        ) : null}
      </div>
      {expandable ? (
        <button
          type="button"
          aria-expanded={open}
          aria-controls={extraId}
          onClick={() => setOpen((value) => !value)}
          className="mt-3 text-sm font-semibold text-bolt underline-offset-4 hover:underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-bolt focus-visible:ring-offset-2 focus-visible:ring-offset-ink"
        >
          {open ? "Show less" : "Read full review"}
        </button>
      ) : null}
      <div className="mt-4 border-t border-ink-line/70 pt-4">
        <p className="text-sm font-semibold text-paper">{review.name}</p>
        <p className="text-sm text-mist">{review.company}</p>
      </div>
    </blockquote>
  );
}
