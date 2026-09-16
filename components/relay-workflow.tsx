import { RELAY_WORKFLOW_STEPS } from "@/lib/site";

export default function RelayWorkflow() {
  const lastIndex = RELAY_WORKFLOW_STEPS.length - 1;

  return (
    <ol className="relative ml-4 space-y-10 border-l border-ink-line pl-9">
      <span
        aria-hidden
        className="animate-pulse absolute -left-[5px] top-1 h-2.5 w-2.5 rounded-full bg-bolt"
      />
      {RELAY_WORKFLOW_STEPS.map((step, i) => (
        <li key={step.title} className="relative">
          <span
            aria-hidden
            className="absolute -left-[2.95rem] flex h-8 w-8 items-center justify-center rounded-full border border-bolt/60 bg-ink font-nacelle text-sm font-semibold text-bolt"
          >
            {i + 1}
          </span>
          <h3 className="font-nacelle text-xl font-semibold text-paper">{step.title}</h3>
          <p className="mt-2 text-mist">{step.body}</p>
          {i === lastIndex ? (
            <p className="mt-3 text-sm text-mist/80">
              Booking is a possible next step, not a guarantee &mdash; it depends on
              whether the prospect responds. Either way, the lead stays organized in
              your pipeline.
            </p>
          ) : null}
        </li>
      ))}
    </ol>
  );
}
