import Image from "next/image";

export default function BrowserFrame({
  src,
  alt,
  priority = false,
}: {
  src: string;
  alt: string;
  priority?: boolean;
}) {
  return (
    <figure className="overflow-hidden rounded-xl border border-ink-line bg-ink-raised shadow-[0_24px_80px_rgba(0,0,0,0.45)]">
      <div className="flex items-center gap-1.5 border-b border-ink-line px-3 py-2" aria-hidden>
        <span className="h-2 w-2 rounded-full bg-[#3a4150]" />
        <span className="h-2 w-2 rounded-full bg-[#3a4150]" />
        <span className="h-2 w-2 rounded-full bg-[#3a4150]" />
      </div>
      <Image
        src={src}
        alt={alt}
        width={1280}
        height={800}
        priority={priority}
        className="h-auto w-full"
      />
    </figure>
  );
}
