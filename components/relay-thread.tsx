export default function RelayThread() {
  return (
    <figure className="shot overflow-hidden rounded-2xl border border-ink-line bg-ink-raised shadow-lift">
      <div
        className="flex items-center gap-1.5 border-b border-ink-line bg-ink/60 px-4 py-2.5"
        aria-hidden
      >
        <span className="h-2.5 w-2.5 rounded-full bg-[#39404f]" />
        <span className="h-2.5 w-2.5 rounded-full bg-[#39404f]" />
        <span className="h-2.5 w-2.5 rounded-full bg-[#39404f]" />
        <span className="ml-3 text-xs font-medium text-mist">Text messages</span>
      </div>
      <div className="space-y-3 p-5">
        <div className="max-w-[85%] rounded-2xl rounded-bl-sm border border-ink-line bg-ink px-4 py-2.5 text-sm text-mist">
          Missed call from (407) 555-0138
        </div>
        <div className="ml-auto max-w-[85%] rounded-2xl rounded-br-sm bg-bolt px-4 py-2.5 text-sm font-medium text-ink">
          Sorry we missed you! This is [Business Name]. What can we help with?
        </div>
        <div className="max-w-[85%] rounded-2xl rounded-bl-sm border border-ink-line bg-ink px-4 py-2.5 text-sm text-mist">
          Hi, I need a quote for a fence repair.
        </div>
        <div className="ml-auto max-w-[85%] rounded-2xl rounded-br-sm bg-bolt px-4 py-2.5 text-sm font-medium text-ink">
          Happy to help. What day works to take a look?
        </div>
      </div>
      <figcaption className="border-t border-ink-line px-4 py-3 text-xs text-mist">
        Example conversation, shown for illustration only.
      </figcaption>
    </figure>
  );
}
