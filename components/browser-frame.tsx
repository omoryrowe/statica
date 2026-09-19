import Image from "next/image";
import type { CSSProperties } from "react";

export default function BrowserFrame({
  src,
  alt,
  caption,
  url,
  sizes,
  priority = false,
  loading,
  aspectRatio,
  objectPosition,
  flat = false,
  className = "",
}: {
  src: string;
  alt: string;
  caption?: string;
  /** Optional address shown in the frame's address bar. */
  url?: string;
  sizes?: string;
  priority?: boolean;
  /** Overrides the default (lazy unless `priority`) loading behaviour. */
  loading?: "eager" | "lazy";
  /** CSS aspect ratio (e.g. "17 / 10") that crops the screenshot instead of stretching it. */
  aspectRatio?: string;
  /** Anchor for the crop when `aspectRatio` is set, e.g. "50% 0%". */
  objectPosition?: string;
  /** Drops the hover lift and image dragging, for frames that live inside a moving container. */
  flat?: boolean;
  className?: string;
}) {
  const cropStyle: CSSProperties | undefined = aspectRatio
    ? { aspectRatio, objectFit: "cover", objectPosition }
    : undefined;

  return (
    <figure
      className={`${flat ? "" : "shot "}overflow-hidden rounded-2xl border border-ink-line bg-ink-raised shadow-lift ${className}`}
    >
      <div
        className="flex items-center gap-1.5 border-b border-ink-line bg-ink/60 px-4 py-2.5"
        aria-hidden
      >
        <span className="h-2.5 w-2.5 rounded-full bg-[#39404f]" />
        <span className="h-2.5 w-2.5 rounded-full bg-[#39404f]" />
        <span className="h-2.5 w-2.5 rounded-full bg-[#39404f]" />
        {url ? (
          <span className="ml-3 flex-1 truncate rounded-full bg-[#232a36] px-3 py-1 text-[0.6875rem] leading-none text-mist">
            {url}
          </span>
        ) : (
          <span className="ml-3 h-2.5 flex-1 rounded-full bg-[#232a36]" />
        )}
      </div>
      <Image
        src={src}
        alt={alt}
        width={1280}
        height={800}
        sizes={sizes}
        priority={priority}
        loading={priority ? undefined : (loading ?? "lazy")}
        draggable={flat ? false : undefined}
        style={cropStyle}
        className="h-auto w-full"
      />
      {caption ? (
        <figcaption className="border-t border-ink-line px-4 py-3 text-xs text-mist">
          {caption}
        </figcaption>
      ) : null}
    </figure>
  );
}
