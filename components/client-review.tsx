"use client";

import { useEffect, useId, useLayoutEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";

const FOCUSABLE_SELECTOR =
  'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])';

export default function ClientReview({
  review,
}: {
  review: {
    name: string;
    company: string;
    paragraphs: readonly string[];
  };
}) {
  const titleId = useId();
  const [open, setOpen] = useState(false);
  const [overflowing, setOverflowing] = useState(false);
  const previewRef = useRef<HTMLParagraphElement>(null);
  const triggerRef = useRef<HTMLButtonElement>(null);
  const dialogRef = useRef<HTMLDivElement>(null);
  const closeButtonRef = useRef<HTMLButtonElement>(null);
  const fullText = review.paragraphs.join(" ");

  useLayoutEffect(() => {
    const el = previewRef.current;
    if (!el) return;
    setOverflowing(el.scrollHeight > el.clientHeight + 1);
  }, [fullText]);

  useEffect(() => {
    if (!open) return;
    closeButtonRef.current?.focus();
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    function onKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") {
        event.preventDefault();
        setOpen(false);
        return;
      }
      if (event.key !== "Tab" || !dialogRef.current) return;
      const focusable = dialogRef.current.querySelectorAll<HTMLElement>(FOCUSABLE_SELECTOR);
      if (focusable.length === 0) return;
      const first = focusable[0];
      const last = focusable[focusable.length - 1];
      if (event.shiftKey && document.activeElement === first) {
        event.preventDefault();
        last.focus();
      } else if (!event.shiftKey && document.activeElement === last) {
        event.preventDefault();
        first.focus();
      }
    }

    document.addEventListener("keydown", onKeyDown);

    return () => {
      document.removeEventListener("keydown", onKeyDown);
      document.body.style.overflow = previousOverflow;
      triggerRef.current?.focus();
    };
  }, [open]);

  return (
    <>
      <blockquote
        data-aos="fade-up"
        className="flex h-full flex-col rounded-3xl border border-ink-line bg-ink-raised p-5 sm:p-6"
      >
        <div className="flex-1">
          <p
            ref={previewRef}
            className="line-clamp-6 text-sm leading-relaxed text-mist sm:text-base"
          >
            {fullText}
          </p>
          {overflowing ? (
            <button
              type="button"
              ref={triggerRef}
              onClick={() => setOpen(true)}
              className="mt-3 text-sm font-semibold text-bolt underline-offset-4 hover:underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-bolt focus-visible:ring-offset-2 focus-visible:ring-offset-ink"
            >
              Read full review
            </button>
          ) : null}
        </div>
        <div className="mt-4 flex flex-col border-t border-ink-line/70 pt-4">
          <p className="text-sm font-semibold text-paper">{review.name}</p>
          <p className="text-sm text-mist">{review.company}</p>
        </div>
      </blockquote>

      {open && typeof document !== "undefined"
        ? createPortal(
            <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
              <div
                aria-hidden
                className="absolute inset-0 bg-ink/80 backdrop-blur-sm"
                onClick={() => setOpen(false)}
              />
              <div
                ref={dialogRef}
                role="dialog"
                aria-modal="true"
                aria-labelledby={titleId}
                className="relative z-10 max-h-[85vh] w-full max-w-lg overflow-y-auto rounded-3xl border border-ink-line bg-ink-raised p-6 shadow-lift focus:outline-none sm:p-8"
              >
                <button
                  type="button"
                  ref={closeButtonRef}
                  onClick={() => setOpen(false)}
                  aria-label="Close full review"
                  className="absolute right-4 top-4 flex h-9 w-9 items-center justify-center rounded-full text-mist transition hover:bg-ink hover:text-paper focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-bolt"
                >
                  <svg
                    viewBox="0 0 24 24"
                    className="h-5 w-5"
                    fill="none"
                    stroke="currentColor"
                    aria-hidden
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                </button>
                <div className="space-y-3 pr-8 text-sm leading-relaxed text-mist sm:text-base">
                  {review.paragraphs.map((paragraph) => (
                    <p key={paragraph.slice(0, 48)}>{paragraph}</p>
                  ))}
                </div>
                <div className="mt-6 flex flex-col border-t border-ink-line/70 pt-4">
                  <p id={titleId} className="text-sm font-semibold text-paper">
                    {review.name}
                  </p>
                  <p className="text-sm text-mist">{review.company}</p>
                </div>
              </div>
            </div>,
            document.body
          )
        : null}
    </>
  );
}
