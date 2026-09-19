"use client";

import Link from "next/link";
import {
  useCallback,
  useEffect,
  useId,
  useRef,
  useState,
  type CSSProperties,
  type FocusEvent,
  type KeyboardEvent,
  type PointerEvent,
} from "react";
import BrowserFrame from "@/components/browser-frame";
import { DemoLink } from "@/components/concept-preview";
import {
  SHOWCASE_PROJECTS,
  SHOWCASE_SHOT_RATIO,
  type ShowcaseProject,
} from "@/lib/showcase";

const COUNT = SHOWCASE_PROJECTS.length;
/** Slots rendered either side of the active slide. Only ±1 is ever visible; the rest are staging. */
const REACH = 3;
const IMAGE_SIZES = "(min-width: 640px) min(832px, 72vw), 80vw";

const mod = (n: number, m: number) => ((n % m) + m) % m;

/** Shortest signed route from `from` to `to`; a tie goes forward. */
function shortestDelta(from: number, to: number) {
  const d = mod(to - from, COUNT);
  return d > COUNT / 2 ? d - COUNT : d;
}

const focusRing =
  "focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-bolt";

const iconButton = `inline-flex h-11 w-11 items-center justify-center rounded-full border border-ink-line bg-ink-raised/60 text-paper transition-colors duration-200 hover:border-bolt/70 hover:text-bolt ${focusRing}`;

function Icon({ children }: { children: React.ReactNode }) {
  return (
    <svg
      viewBox="0 0 24 24"
      width="20"
      height="20"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden
    >
      {children}
    </svg>
  );
}

function Kind({ project }: { project: ShowcaseProject }) {
  return (
    <span className="inline-flex items-center gap-2 rounded-full border border-ink-line bg-ink/60 px-3 py-1 font-nacelle text-[0.6875rem] font-semibold uppercase tracking-[0.18em] text-mist">
      <span
        aria-hidden
        className={`h-1.5 w-1.5 rounded-full ${
          project.kind === "client" ? "bg-mist" : "border border-mist"
        }`}
      />
      {project.kindLabel}
    </span>
  );
}

function ProjectLink({ project }: { project: ShowcaseProject }) {
  const cls = `group mt-5 inline-flex min-h-11 items-center gap-2 font-semibold text-paper transition-colors hover:text-bolt ${focusRing}`;
  const link = project.link;
  if (link.external) {
    return (
      <DemoLink
        project={link.concept}
        location="home-hero"
        event="home-showcase-click"
        className={cls}
      >
        {link.label}
      </DemoLink>
    );
  }
  return (
    <Link
      href={link.href}
      className={cls}
      data-event="home-showcase-click"
      data-project={project.id}
      data-location="home-hero"
    >
      {link.label}
      <span aria-hidden className="transition-transform group-hover:translate-x-1">
        →
      </span>
    </Link>
  );
}

export default function HeroShowcase() {
  const [pos, setPos] = useState(0);
  const [userPaused, setUserPaused] = useState(false);
  const [hovering, setHovering] = useState(false);
  const [focused, setFocused] = useState(false);
  const [tabVisible, setTabVisible] = useState(true);
  const [inView, setInView] = useState(true);
  const [reduced, setReduced] = useState(false);
  const [warm, setWarm] = useState(false);

  const rootRef = useRef<HTMLElement>(null);
  const stageRef = useRef<HTMLDivElement>(null);
  const drag = useRef<{
    id: number;
    x: number;
    y: number;
    t: number;
    horizontal: boolean | null;
  } | null>(null);
  const stageId = useId();

  const active = mod(pos, COUNT);
  const autoplay = !reduced && !userPaused;
  const running = autoplay && !hovering && !focused && tabVisible && inView;

  // Autoplay advances on the progress animation's end, so timer and visual never drift.
  const advance = useCallback(() => setPos((p) => p + 1), []);

  // Manual navigation always leaves autoplay paused until the visitor resumes it.
  const step = useCallback((delta: number) => {
    setUserPaused(true);
    setPos((p) => p + delta);
  }, []);

  const goTo = useCallback(
    (index: number) => {
      const delta = shortestDelta(active, index);
      if (delta !== 0) step(delta);
    },
    [active, step],
  );

  useEffect(() => {
    const query = window.matchMedia("(prefers-reduced-motion: reduce)");
    const update = () => setReduced(query.matches);
    update();
    query.addEventListener("change", update);
    return () => query.removeEventListener("change", update);
  }, []);

  useEffect(() => {
    const update = () => setTabVisible(!document.hidden);
    update();
    document.addEventListener("visibilitychange", update);
    return () => document.removeEventListener("visibilitychange", update);
  }, []);

  useEffect(() => {
    const el = rootRef.current;
    if (!el || typeof IntersectionObserver === "undefined") return;
    const observer = new IntersectionObserver(
      ([entry]) => setInView(entry.isIntersecting),
      { threshold: 0.15 },
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  // Once the first paint is settled, fetch the staging slides' screenshots so a
  // slide never slides in blank. The initially visible preview is prioritised.
  useEffect(() => {
    if (typeof window.requestIdleCallback === "function") {
      const id = window.requestIdleCallback(() => setWarm(true), { timeout: 3000 });
      return () => window.cancelIdleCallback(id);
    }
    // Safari has no requestIdleCallback.
    const id = window.setTimeout(() => setWarm(true), 1500);
    return () => window.clearTimeout(id);
  }, []);

  /* Swipe: horizontal drags follow the finger; vertical ones are left to the
     browser (touch-action: pan-y), which cancels the pointer and scrolls. */
  const setDrag = (px: number) => stageRef.current?.style.setProperty("--drag", `${px}px`);

  const onPointerDown = (e: PointerEvent<HTMLDivElement>) => {
    if (e.pointerType === "mouse") return;
    drag.current = {
      id: e.pointerId,
      x: e.clientX,
      y: e.clientY,
      t: performance.now(),
      horizontal: null,
    };
  };

  const onPointerMove = (e: PointerEvent<HTMLDivElement>) => {
    const d = drag.current;
    if (!d || d.id !== e.pointerId) return;
    const dx = e.clientX - d.x;
    const dy = e.clientY - d.y;
    if (d.horizontal === null && (Math.abs(dx) > 8 || Math.abs(dy) > 8)) {
      d.horizontal = Math.abs(dx) > Math.abs(dy);
      if (d.horizontal) {
        e.currentTarget.dataset.dragging = "true";
        try {
          e.currentTarget.setPointerCapture(e.pointerId);
        } catch {
          // Capture is a nicety; the drag still works without it.
        }
      }
    }
    if (d.horizontal) setDrag(dx);
  };

  const endDrag = (e: PointerEvent<HTMLDivElement>, cancelled: boolean) => {
    const d = drag.current;
    if (!d || d.id !== e.pointerId) return;
    drag.current = null;
    if (!d.horizontal) return;
    const dx = e.clientX - d.x;
    const width = e.currentTarget.getBoundingClientRect().width;
    const fast = Math.abs(dx) / Math.max(performance.now() - d.t, 1) > 0.5;
    delete e.currentTarget.dataset.dragging;
    setDrag(0);
    if (!cancelled && (Math.abs(dx) > width * 0.12 || (fast && Math.abs(dx) > 30))) {
      step(dx < 0 ? 1 : -1);
    }
  };

  const onKeyDown = (e: KeyboardEvent<HTMLElement>) => {
    if (e.key === "ArrowRight") step(1);
    else if (e.key === "ArrowLeft") step(-1);
  };

  const onFocus = (e: FocusEvent<HTMLElement>) => {
    // Only keyboard focus pauses; a mouse click on a control must not stall a resumed slideshow.
    if (e.target.matches(":focus-visible")) setFocused(true);
  };

  const onBlur = (e: FocusEvent<HTMLElement>) => {
    if (!e.currentTarget.contains(e.relatedTarget)) setFocused(false);
  };

  const slots = [];
  for (let d = -REACH; d <= REACH; d++) {
    const v = pos + d;
    const project = SHOWCASE_PROJECTS[mod(v, COUNT)];
    slots.push(
      <div
        key={v}
        className="showcase-slide"
        data-dist={Math.abs(d)}
        style={{ "--d": d } as CSSProperties}
        role="group"
        aria-roledescription="slide"
        aria-label={`${mod(v, COUNT) + 1} of ${COUNT}: ${project.name}`}
        aria-hidden={d !== 0 ? true : undefined}
        inert={d !== 0}
        onClick={Math.abs(d) === 1 ? () => step(d) : undefined}
      >
        <BrowserFrame
          flat
          src={project.image.src}
          alt={project.image.alt}
          url={project.host}
          aspectRatio={SHOWCASE_SHOT_RATIO}
          objectPosition={project.image.objectPosition}
          sizes={IMAGE_SIZES}
          priority={v === 0}
          loading={d === 0 || Math.abs(d) === 1 || warm ? "eager" : "lazy"}
        />
      </div>,
    );
  }

  return (
    <section
      ref={rootRef}
      className="showcase relative z-10"
      aria-roledescription="carousel"
      aria-label="Featured website projects"
      onPointerEnter={(e) => e.pointerType === "mouse" && setHovering(true)}
      onPointerLeave={(e) => e.pointerType === "mouse" && setHovering(false)}
      onFocus={onFocus}
      onBlur={onBlur}
      onKeyDown={onKeyDown}
    >
      <div
        ref={stageRef}
        id={stageId}
        className="showcase-stage"
        onPointerDown={onPointerDown}
        onPointerMove={onPointerMove}
        onPointerUp={(e) => endDrag(e, false)}
        onPointerCancel={(e) => endDrag(e, true)}
      >
        {slots}
      </div>

      <div className="mx-auto mt-4 grid w-[var(--slide-w)] gap-6 lg:grid-cols-[minmax(0,1fr)_auto] lg:items-end lg:gap-10">
        <div
          className="grid"
          aria-live={autoplay ? "off" : "polite"}
          aria-atomic="true"
        >
          {SHOWCASE_PROJECTS.map((project, i) => {
            const offset = shortestDelta(active, i);
            return (
              <div
                key={project.id}
                className="showcase-caption"
                data-active={i === active}
                style={{ "--cs": offset < 0 ? -1 : 1 } as CSSProperties}
              >
                <div className="flex flex-wrap items-center gap-x-3 gap-y-2">
                  <Kind project={project} />
                  <span className="text-sm text-mist">{project.type}</span>
                </div>
                <h2 className="mt-4 font-nacelle text-2xl font-semibold text-paper sm:text-3xl">
                  {project.name}
                </h2>
                <p className="mt-2 max-w-xl text-mist">{project.description}</p>
                <ProjectLink project={project} />
              </div>
            );
          })}
        </div>

        <div className="flex items-center justify-center gap-1 lg:justify-end">
          <button
            type="button"
            className={iconButton}
            onClick={() => step(-1)}
            aria-controls={stageId}
            aria-label="Previous project"
          >
            <Icon>
              <path d="M15 5l-7 7 7 7" />
            </Icon>
          </button>

          <div role="group" aria-label="Choose a project" className="flex items-center">
            {SHOWCASE_PROJECTS.map((project, i) => (
              <button
                key={project.id}
                type="button"
                onClick={() => goTo(i)}
                aria-current={i === active ? "true" : undefined}
                aria-label={`Show project ${i + 1} of ${COUNT}: ${project.name}`}
                className={`group flex h-11 items-center justify-center px-1.5 ${focusRing}`}
              >
                <span
                  aria-hidden
                  className={`relative block h-1.5 overflow-hidden rounded-full bg-paper/25 transition-[width,background-color] duration-500 group-hover:bg-paper/50 ${
                    i === active ? "w-8" : "w-2"
                  }`}
                >
                  {i === active ? (
                    <span
                      key={`${pos}-${autoplay}`}
                      className="showcase-fill absolute inset-0 bg-bolt"
                      data-timing={autoplay}
                      data-running={running}
                      onAnimationEnd={advance}
                    />
                  ) : null}
                </span>
              </button>
            ))}
          </div>

          <button
            type="button"
            className={iconButton}
            onClick={() => step(1)}
            aria-controls={stageId}
            aria-label="Next project"
          >
            <Icon>
              <path d="M9 5l7 7-7 7" />
            </Icon>
          </button>

          {reduced ? null : (
            <button
              type="button"
              className={`${iconButton} ml-2`}
              onClick={() => setUserPaused((p) => !p)}
              aria-label={autoplay ? "Pause automatic slide show" : "Start automatic slide show"}
            >
              {autoplay ? (
                <Icon>
                  <path d="M9 5v14M15 5v14" />
                </Icon>
              ) : (
                <Icon>
                  <path d="M8 5l11 7-11 7z" fill="currentColor" />
                </Icon>
              )}
            </button>
          )}
        </div>
      </div>
    </section>
  );
}
